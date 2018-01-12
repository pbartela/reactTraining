# Szkolenie podstawowe React.js
Celem ćwiczenia będzie wykonanie bardzo prostej listy postów.
Zadanie to pozwoli zapoznać się z kluczowymi elementami React'a

Przy każdym zadaniu spoglądaj na konsolę oraz Chrome Dev Tools (Domyślnie: F12). W przypadku jakichkolwiek błędów zostanie wyświetlony komunikat
co należy poprawić.

## Zadanie 1 - Create react i pierwszy komponent

1. Stwórz folder na dysku
2. Będąc w folderze naciśnij `F4`, aby otworzyć terminal.
3. Wpisz w terminalu kolejno:
```
    npm install -g create-react-app
    create-react-app reactTraining
    cd reactTraining/
    npm i -S prop-types
    npm start
```
4. W pliku index.js usuń wszystko i stwórz `MainComponent`, dodaj w nim walidację propsa children
 (sprawdzanie czy wartość przekazana do komponentu jest w odpowiednim typie), który jest stringiem.

Dodaj na początku:
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
```
Następnie dodaj walidację:
```javascript
// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
MainComponent.propTypes: {
  children: React.PropTypes.string.isRequired
}

```
   Jako, że jego rolą będzie wyłącznie wyświetlanie tekstu zadanie wykonaj przy pomocy komponentu prezentacyjnego.
Po wszystkim użyj przygotowany komponent, aby wyświetlić napis 'Hello World!';
Użycie komponentu:
```javascript
    //Wszystko przekazane między tagami zostaje przypisane do children.
    ReactDOM.render(<MainComponent>'Hello World!'<MainComponent> />, document.getElementById('app')); 
```
## Zadanie 2 - Refaktor komponentów na klasy
1. Stwórz plik o nazwie `MainComponent` i wyciągnij cały kod komponentu do tego pliku.
Na początku każdego następnego nowego pliku dodaj już tylko: 
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
```

Na końcu pliku dodaj export, który umożliwi zaimportowanie tego komponentu w innych plikach:
```javascript
export default MainComponent; // w pliku komponentu
```
2. Zaimportuj komponent w pliku index.js.

```javascript
// w pliku do którego importujemy nasz komponent
import MainComponent from './scieżka_do_pliku/MainComponent'; 

export { MainComponent, OtherComponent }; // Exportowanie dwóch obiektów z jednego pliku
import { MainComponent, OtherComponent } from './scieżka_do_pliku/plik_exportujący';

Metody można łączyć:

export default MainComponent;
export { OtherComponent }; 

import MainComponent, { OtherComponent } from './scieżka_do_pliku/plik_exportujący';
```
Przypisanie importu do innej zmiennej:
```javascript
import { OtherComponent as Other } from './scieżka_do_pliku/plik_exportujący'; 
import { default as Main } from './scieżka_do_pliku/plik_exportujący'; 

<Main />
```
3. Użyj komponentu dwukrotnie z różnymi parametrami, np: przekaż tekst otoczony tagiem `<strong>`.
Pamiętaj: Aby wyrenderować więcej niż jeden komponent, muszą one mieć rodzica.
Jeden komponent wyrenderuj przy pomocy komponentu prezentacyjnego, a drugi przy pomocy zmiennej.

Przypisz do zmiennej `Main1` komponent, użyty w ReactDom.render z poprzedniego zadania.`.
   Stwórz nowy komponent, o nazwie Main2, a w metodzie render użyj komponentu ze zmiennej 'Main1'.

Przypisanie komponentu do zmiennej:
```javascript
const Main1 =
    <MainComponent>
        <strong>I'm here! </strong>
    </MainComponent>;
```

Renderowanie komponentu ze zmiennej:
```javascript
   return(
        <div>
            {Main1}
            <MainComponent>I'm under!</MainComponent>
        </div> 
    );
```

Przykłady metody render:
Źle:
```javascript
return (
     <div />
     <div />
)
```
Dobrze:
```javascript
return (
    <div> 
        <div />
        <div />
    </div>
)

return [
    <div key='A' />
    <div key='B'/>
];
React wspiera też zwracanie stringa
return 'Hello world!';


return ReactDom.createPortal() ;
//dla ciekawych: https://reactjs.org/blog/2017/09/26/react-v16.0.html#portals
```
## Zadanie 3 - Stylowanie komponentu
1. Dodaj do `MainComponent` propsy (parametry), który pozwolą przypisać mu nową klasę (className), oraz osobny prop `style`, który będzie obiektem.
2. Skorzystaj ze styli na 3 różne sposoby:

    a.Style zaimportowane w pliku index.html są dostępne globalnie i wystarczy użyć klasy na komponencie.

    b.Każdy tag w reakcie przyjmuje je jako prop obiekt `style`,
    w którym można zdefiniować style, ale rządzi się on troszkę innymi zasadami. 

    c.Przy pomocy odpowiedniej konfiguracji Webpacka można style zaimportować prosto z pliku css.
    Create-react-app od razu dostarcza taką konfigurację. 
    `import './index.css`.
    Tak zaimportowane style mogą być użyte w w komponencie jak i każdym miejscu gdzie komponent je dostarczający zostanie użyty.
    
! Przy importowaniu styli z cssów, React rozpoznaje duplikaty i dodaje je do wygenerowanego kodu tylko jeden raz.

```
/// https://react-cn.github.io/react/tips/inline-styles.html
var divStyle = {
  color: 'white',
  backgroundImage: 'url(' + imgUrl + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

<div style={divStyle}>Hello World!</div>
```
https://react-cn.github.io/react/tips/style-props-value-px.html

3. W podobny sposób co style można zaimportować obrazki i użyć ich później w kodzie.
   Użyj google i pobierz jakiś avatar.
   Zaimportuj avatar w kodzie.
   `import avatar from './img/avatar.png';`,
   następnie użyj
   `<img alt='avatar' src={avatar} />`
   
## Zadanie 4 - TextArea
1. Stwórz w osobnym pliku komponent, zawierąjący w sobie dwa pola (htmlowy element input)
   Pierwszy będzie służył do wpisania nazwy użytkownika (username),
     a w drugim użytkownik poda adres do avatara, którego adres znajdzie w googlach.
     Dodaj również element textarea.
    Ostyluj go jeśli chcesz. Jako prop powinien przyjmować funkcję, przez którą będziemy zwracać z niego dane.
    Zwrócone dane przypisz zapisz w stanie komponentu.

Przykłady ustawiania stanu komponentu:
```javascript
this.state = {
    text:''           // inicjalizacja stanu
}
this.setState({     // metoda, która ustawia stan
   text: text       // wywołanie jej powoduje wykonanie metody render
})                  // użyj jej do zapisania tekstu i wyswietlenia w komponencie   

this.setState({
   text
})

this.setState(prevState=> {
   text: prevState.text + 'new' 
})       

this.setState((state, props) => {})
```

Zdefiniuj stan w konstruktorze:
```javascript
constructor(props){
    super(props);
    this.state ={
        post: {
            value: '',
            username: '',
            image:''
        }
    }
}
```

Definicja metody:
```javascript
handleSubmit = (post) => {
    this.setState({
        post: post
    })
}
```
Metoda przekazana do komponentu:
```javascript
<textArea onHandleSubmit={this.handleSubmit}></textArea>

```
2. W `MainComponent` wyświetlaj dane otrzymane z `textArea`

    Przykład metody render:
```javascript
render() {
    const { post } = this.state; 
    return (
        <div>
            <div>
                <img alt={post.username} src={post.image} />
                {post.value} {post.username}
            </div>
            <div>
                <TextArea onHandleSubmit={this.handleSubmit} />
            </div>
        </div>
    )
}
```
Użyj odpowiednich metod z cyklu życia komponentu do inicjalizacji i zmiany stanu:
    https://reactjs.org/docs/react-component.html
```javascript
    Mounting
    These methods are called when an instance of a component is being created and inserted into the DOM:

    constructor()
    componentWillMount()
    render()
    componentDidMount()
    Updating
    An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

    componentWillReceiveProps()
    shouldComponentUpdate()
    componentWillUpdate()
    render()
    componentDidUpdate()
    Unmounting
    This method is called when a component is being removed from the DOM:

    componentWillUnmount()
    Error Handling
    This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

    componentDidCatch()
```

## Zadanie 5 - Post Component
1. Stwórz w osobnym pliku komponent, który będzie odpowiedzialny za wyświetlanie danych z poprzedniego zadania.
2. Zaimportuj go w `MainComponent` i przekaż do niego dane do wyświetlania.
3. Dodaj metodę, która umożliwia zbieranie postów do tablicy
    i użyj jej do wyegenerowania więcej niż jednego postu.
   Zwróć uwagę, że dane trzymane w state znikają po odświeżeniu strony.   
   Wykorzystaj localStorage do trzymania danych.
```javascript 
    todos.map(todo => <div key={todo.id}>{todo.text}</div>) 
    // mapowanie tablicy obiektów na element HTMLowy
    
    localStorage.setItem(key, JSON.stringify(data)); //zapisywanie danych do localstorage
    JSON.parse(localStorage.getItem(key));    //odczytywanie danych 
```
## Zadanie 6 - Posts Component
1. Opakuj mapowanie `Post` w większy komponent, który jako Prop będzie otrzymywać tablicę postów.
2. Zweryfikuj czy tablica przekazywana do komponentu zawiera wszystkie potrzebne pola.
## Zadanie 7 - Filtrowanie 
1. Wykorzystując zdobyte doświadczenie stwórz komponent,
   który będzie zwracał text, po którym będziesz flitrować posty po polu `username`.
2. Rekordy powinny się filtrować niezależnie od wielkości liter wpisanych do filtra.
   
```javascript
posts.filter(post => filterValue === '' || post.username.indexOf(filterValue) > -1);
// filtrowanie postów po przekazanej wartości
```
## Zadanie 8 - Routing
1. Zainstaluj paczkę react-router-dom
`npm i -S react-router-dom`
2. Zaimportuj BrowserRouter, Link oraz Route 
```javascript
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
```
3. Stwórz dodatkowy komponent, do którego będzie można nawigować. Może być Prosty `Hello world!`.
4. Jeden komponent musi mieć przekazany jakiś parametr, a drugi może zostać wygenerowany domyślnie.
5. Skonfiguruj routing
```javascript
 <Router>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
            </ul>
            <Route
                component={...} // albo render={...}
                exact path='/'
            />
        </div>
    </Router>;
```
## Bonus stage
1. Zainstaluj json-server
    `npm i -g json-server`
2. Stwórz plik bazy danych dla postów
3. Stwórz piki zawierające metody api, zaimportuj je i użyj zamiast zapisywania do localStorage.
```javascript
const apiEndpoiint = 'http://localhost:3001/posts';

const getPosts = async () => {
    return await fetch(apiEndpoiint);
}

const addPost = async (data) => {
    return await fetch(apiEndpoiint, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export default {
    addPost,
    getPosts
}
```

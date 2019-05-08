# Szkolenie podstawowe React.js

Celem ćwiczenia będzie wykonanie bardzo prostej listy postów.
Zadanie to pozwoli zapoznać się z kluczowymi elementami React'a

Przy każdym zadaniu spoglądaj na konsolę oraz Chrome Dev Tools
(Domyślnie: F12). W przypadku jakichkolwiek błędów zostanie wyświetlony komunikat
co należy poprawić.

## Zadanie 1 - Create react i pierwszy komponent

1. Stwórz folder na dysku
2. Będąc w folderze naciśnij `F4`, aby otworzyć terminal.
3. Wpisz w terminalu kolejno

```javascript
    npm install -g create-react-app
    create-react-app reactTraining
    cd reactTraining/
    npm i -S prop-types
    npm start
```

4. W katalogu znajduje się plik index.js usuń wszystko w środku i stwórz komponent `MainScene`,
 dodaj w nim walidację propsa children
 (sprawdzanie czy wartość przekazana do komponentu jest
 w odpowiednim typie), który jest stringiem.

 Przykłady znajdziesz poniżej:

Dodaj na początku:

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
```

Stwórz komponent:

```javascript
const MainScene = (props) => {
    return (
        <div>
           {props.children}
        </div>
    )
}
```

Następnie dodaj walidację:

```javascript
// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
MainScene.propTypes = {
  children: PropTypes.string.isRequired
}
```

   Jako, że jego rolą będzie wyłącznie wyświetlanie tekstu 
   zadanie wykonamy przy pomocy komponentu prezentacyjnego.
   Po wszystkim użyj przygotowany komponent, aby wyświetlić
   napis 'Hello World!';
Użycie komponentu:

```javascript
    //Wszystko przekazane między tagami zostaje przypisane do children.
ReactDOM.render(<MainScene>'Hello World!'</MainScene>, document.getElementById('app')); 
```

## Zadanie 2 - Refaktor komponentów na klasy

1. Stwórz nowy plik o nazwie `MainScene.js` i wyciągnij
 cały uprzednio napisany kod komponentu do tego pliku.
 Na początku każdego następnego nowego pliku dodawaj już tylko: 

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
```

Na końcu pliku dodaj export, który umożliwi zaimportowanie tego komponentu w innych plikach:

```javascript
export default MainScene; // w pliku komponentu
```

2. Zaimportuj komponent w pliku index.js.

```javascript
// w pliku do którego importujemy nasz komponent
import MainScene from './scieżka_do_pliku/MainScene'; 

export { MainScene, OtherComponent }; // Exportowanie dwóch obiektów z jednego pliku
import { MainScene, OtherComponent } from './scieżka_do_pliku/plik_exportujący';

Metody można łączyć:

export default MainScene;
export { OtherComponent }; 

import MainScene, { OtherComponent } from './scieżka_do_pliku/plik_exportujący';

```

Przypisanie importu do innej zmiennej (jeżeli chcesz zmienić nazwę importowanego pliku):

```javascript
import { OtherComponent as Other } from './scieżka_do_pliku/plik_exportujący'; 
import { default as Main } from './scieżka_do_pliku/plik_exportujący'; 

<Main />
```

3. Użyj komponentu dwukrotnie z różnymi parametrami, np: przekaż dwa różne napisy.

Pamiętaj: Aby wyrenderować więcej niż jeden komponent, muszą one mieć rodzica, być w tablicy (o tym później) lub owinięte "Fragmentem"

https://reactjs.org/docs/fragments.html

Jeden komponent wyrenderuj przy pomocy komponentu prezentacyjnego, a drugi przy pomocy zmiennej.

Przypisz do zmiennej `Main1` komponent, użyty w ReactDom.render z poprzedniego zadania.`.
   Stwórz nowy komponent, o nazwie Main2, a w metodzie render użyj komponentu ze zmiennej 'Main1'.
Dodaj też trzecie użycie komponentu nie przekazując nic między tagami.

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

Przypisanie komponentu do zmiennej:

```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import MainScene from  './scenes/main';

    const Main1 = <MainScene>I'm here!</MainScene>;
    const Main2 = () => {
        return(
            <div>
                {Main1}
                <MainScene>I'm under!</MainScene>
                <MainScene></MainScene>
            </div> 
        );
    };

ReactDOM.render(<Main2 />, document.getElementById('app'));

```

**Zwróć uwagę** - w konsoli przeglądarki wystąpił błąd związany z walidacją

*Przyklad zegarka i odświeżania*: https://codepen.io/pen?&editable=true&editors=0010

## Zadanie 3 - Stylowanie komponentu

*Przed* - Dodaj 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

na końcu sekcji <head> w index html

1. Dodaj do `MainScene` propsy (parametry), który pozwolą przypisać mu nową klasę (className), oraz osobny prop `style`, który będzie obiektem.
2. Skorzystaj ze styli na 3 różne sposoby:

    a.Style zaimportowane w pliku index.html są dostępne globalnie i wystarczy użyć klasy na komponencie.

    b.Każdy tag w reakcie przyjmuje je jako prop obiekt `style`,
    w którym można zdefiniować style, ale rządzi się on troszkę innymi zasadami.

    c.Przy pomocy odpowiedniej konfiguracji Webpacka można style zaimportować prosto z pliku css.
    Create-react-app od razu dostarcza taką konfigurację. 
    `import './index.css`.
    Tak zaimportowane style mogą być użyte w w komponencie jak i każdym miejscu gdzie komponent je dostarczający zostanie użyty.
    d. Css modules - cssy importujemy jak obiekt 

    import styles from './Main.module.css';
    następnie używamy klas jako właściwości tego obiektu:
    className={styles.newClass}
    (zapewnia unikatowość styli nawet z ta sama nazwa)
    
! Przy importowaniu styli z cssów, React rozpoznaje duplikaty i dodaje je do wygenerowanego kodu tylko jeden raz.

```
/// https://react-cn.github.io/react/tips/inline-styles.html
var divStyle = { 
     fontSize: 40,
     color: 'white'
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
     Dodaj również element textarea, oraz przycisk, którym zatwierdzimy wpisaną wiadomość.
    Ostyluj go jeśli chcesz. Jako prop powinien przyjmować funkcję, przez którą będziemy zwracać z niego dane.
    Zwrócone dane zapisz w obiekcie stanu komponentu.

Zdefiniuj stan początkowy w konstruktorze:

```javascript
constructor(props){
    super(props);
    this.state = {
        post: {
            value: '',
            username: '',
            image:''
        }
    }  
}
```

Stwórz trzy metody (dla każdego pola z osobna),
 które pobiorą dane ze stworzonych przez Ciebie pól i zapiszą w stanie komponentu

```javascript
handleOnChangeMessageText(event) {
    this.setState({value: event.target.value});
}
```

W pliku `MainScene.js` stwórz definicję metody, która przekazana do komponentu pobierze dane:

```javascript
handleSubmit = (post) => {
    this.setState({
        post: post
    })
}
```

Metoda przekazana do komponentu:

```javascript
<TextArea onHandleSubmit={this.handleSubmit}></TextArea>
```

Wróć do pliku `TextArea.js` i obsłuż przekazną funkcję:

```javascript
handleOnSubmitPost(event) {
        event.preventDefault();
        const { onHandleSubmit } = this.props;
        const {  image, username, value } = this.state;
        onHandleSubmit({
            username: username || 'Anonymous',
            image: image,
            value: value
        });
        this.setState({
            value: '' // czyścimy text posta po wysłaniu
        });
}
```

Sprawdź czy przekazany props jest funkcją:

```javascript
    TextArea.propTypes = {
        onHandleSubmit: PropTypes.func.isRequired
    };
```

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

2. W `MainScene` wyświetlaj dane otrzymane z `TextArea`
przy pomocy zdefiniowanej już metody `handleSubmit`
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

Metody z cyklu życia komponentu do inicjalizacji i zmiany stanu:
    https://reactjs.org/docs/react-component.html

```javascript
Mounting
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()

Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

Unmounting
This method is called when a component is being removed from the DOM:

componentWillUnmount()
Error Handling
These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

static getDerivedStateFromError()
componentDidCatch()
Other APIs
Each component also provides some other APIs:

setState()
forceUpdate()


```

## Zadanie 5 - Post Component

1. Stwórz w osobnym pliku komponent, który będzie odpowiedzialny za wyświetlanie
   danych z poprzedniego zadania.
2. Zaimportuj go w `MainScene` i przekaż do niego dane do wyświetlania.
3. Dodaj metodę, która umożliwia zbieranie postów do tablicy
   i użyj jej do wyegenerowania więcej niż jednego postu.
   Zwróć uwagę, że dane trzymane w state znikają po odświeżeniu strony.

   Wykorzystaj localStorage do trzymania danych.

```javascript 
    posts.map(post => <Post key={todo.id}>{todo.text}</Post>) 
    // mapowanie tablicy obiektów na element HTMLowy

    localStorage.setItem(key, JSON.stringify(data)); //zapisywanie danych do localstorage
    JSON.parse(localStorage.getItem(key));    //odczytywanie danych
```

## Zadanie 6 - Posts Component

1. Opakuj mapowanie `Post` w większy komponent `Posts`, który jako Prop będzie otrzymywać tablicę postów.
2. Zweryfikuj czy tablica postów przekazywana do komponentu zawiera wszystkie potrzebne pola.

```javascript
    Posts.propTypes = {
        posts: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            image: PropTypes.string,
            value: PropTypes.string
        }))
    };
```
## Zadanie 7 - Filtrowanie 

1. Wykorzystując zdobyte doświadczenie stwórz komponent,
   który będzie zwracał text, po którym będziesz flitrować posty po polu `username`.
2. Rekordy powinny się filtrować niezależnie od wielkości liter wpisanych do filtra.
   
```javascript
posts.filter(post => filterValue === '' || post.username.toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
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
const Routing = () =>
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

ReactDOM.render(<Routing />, document.getElementById('app')); 
```

## Bonus stage

1. Zainstaluj json-server
    `npm i -g json-server`
2. Stwórz plik bazy danych dla postów w katologu `database`.
3. Stwórz piki zawierające metody api, zaimportuj je i użyj zamiast zapisywania do localStorage.

Uruchom serwer w osobnym terminalu: `json-server --watch database/db.json --port 3001`

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
Aby dostać się do pobranych danych i zapisać je do stanu:
```javascript
const posts = await api.getPosts();
const postsJson = await posts.json();
postsJson && this.setState({
    posts: postsJson
});
```

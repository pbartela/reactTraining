import React from 'react';
import ReactDOM from 'react-dom';
import MainScene from  './scenes/main';

const Main1 =
    <MainScene>
        I'm here!
    </MainScene>;
const Main2 = () => {
    return(
        <div>
            {Main1}
            <MainScene>I'm under!</MainScene>
            {/*<MainScene></MainScene> this is equal to line below*/ }
            <MainScene />
        </div> 
    );
};

ReactDOM.render(<Main2 />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import MainScene from  './scenes/main';
import './index.css';

const Main1 =
    <MainScene className='container-fluid'>
        I'm here!
    </MainScene>;
const Main2 = () => {
    return(
        <div>
            {Main1}
            <MainScene>I'm under!</MainScene>
        </div> 
    );
};

ReactDOM.render(<Main2 />, document.getElementById('app'));

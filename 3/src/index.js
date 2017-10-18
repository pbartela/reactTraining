import React from 'react';
import ReactDOM from 'react-dom';
import MainScene from  './scenes/main';
import avatar from './img/avatar_2x.png';
const Main1 =
    <MainScene className='container-fluid'>
        <strong>I'm here! </strong>
    </MainScene>;
const Main2 = () => {
    return(
        <div>
            <img alt='avatar' src={avatar} />    
            {Main1}
            <MainScene style={{ fontSize: 40, color: 'white'}}>I'm under!</MainScene>
        </div> 
    );
};

ReactDOM.render(<Main2 />, document.getElementById('app'));

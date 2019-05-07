import React from 'react';
import ReactDOM from 'react-dom';
import MainScene from  './scenes/Main';
import avatar from './img/avatar_2x.png';
import styles from './Index.module.css';
const Main1 =
    <MainScene className='container-fluid'>
        I'm here!
    </MainScene>;
const Main2 = () => {
    console.log('DEBUG styles: ', styles);
    return(
        <div>
            <img alt='avatar' src={avatar} />    
            {Main1}
            <MainScene style={{ fontSize: 40, color: 'white' }}>I'm under!</MainScene>
            <MainScene className={styles.newClass}>I'm under!</MainScene>
        </div> 
    );
};

ReactDOM.render(<Main2 />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import MainScene from  './scenes/main';

const Main1 = <MainScene clasName='container-fluid'>
    <strong>I'm here! </strong>
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

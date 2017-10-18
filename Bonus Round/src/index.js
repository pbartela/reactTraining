import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


import MainScene from './scenes/Main/';
import MainApi from './scenes/MainApi/';


const MainApiWithProps = () => <MainApi title='Api main scene' />;

const Routing = () =>
    <Router>
        <div>
            <ul>
                <li><Link to='/'>Main</Link></li>
                <li><Link to='/api'>Api Main</Link></li>
            </ul>

            <hr />

            <Route
                component={MainScene}
                exact path='/'
            />
            <Route
                path='/api'
                render={MainApiWithProps}
            />
        </div>
    </Router>;

ReactDOM.render(<Routing />, document.getElementById('app'));

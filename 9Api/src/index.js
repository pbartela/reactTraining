import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


import MainScene from './scenes/Main';
import Second from './scenes/Second';

const SecondWithProps = () => <Second title='Second title'>Second Content</Second>

const Routing = () =>
    <Router>
        <div>
            <ul>
                <li><Link to='/'>Main</Link></li>
                <li><Link to='/api'>Second</Link></li>
            </ul>

            <hr />

            <Route
                component={MainScene}
                exact path='/'
            />
            <Route
                path='/api'
                render={SecondWithProps}
            />
        </div>
    </Router>;

ReactDOM.render(<Routing />, document.getElementById('app'));

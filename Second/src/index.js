import ReactDOM from 'react-dom';
import React, { Component } from 'react';


class MainScene extends Component {
    render() {
        return (
            <div>
                Hello world!
            </div>
        )
    }
}

ReactDOM.render(<MainScene />, document.getElementById('app'));

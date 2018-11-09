import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const MainScene = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

MainScene.propTypes = {
    children: PropTypes.string.isRequired
}

ReactDOM.render(<MainScene>Hello World!</MainScene>, document.getElementById('app'));

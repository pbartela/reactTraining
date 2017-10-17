import React from 'react';
import PropTypes from 'prop-types';
import mainStyles from './main.css';
const MainScene = props => {
    return (
        <div className={props.className} style={props.style}>
            { props.children }
        </div>
    )
}

MainScene.defaultProps  = {
    className: 'default-class',
    style: {}
}

MainScene.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object
}

export default MainScene;

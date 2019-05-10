import React from 'react';
import PropTypes from 'prop-types';

const MainScene = props => {
    return (
        <div>
            { props.children }
        </div>
    )
}

MainScene.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainScene;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash'; 
import classNames from 'classnames';
import validUrl from 'valid-url';
import userImageFallback from './../img/avatar_2x.png';

function Post (props) {
    const [visible, setVisible] = useState(true);
    function handleVisibilityClick() {
        setVisible(!visible);
    }
    const userImage = isEmpty(props.image) ? userImageFallback :validUrl.isWebUri(props.image) ? props.image : userImageFallback;
    const panelBodyClassNames = classNames('panel-body', { 'hidden': !visible });
    return (
        <div onClick={handleVisibilityClick}>
            <div>
                <div>
                    <img
                        alt={props.username}
                            
                        src={userImage}
                    />
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <strong>{props.username}</strong>
                    </div>
                    <div className={panelBodyClassNames}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

Post.propTypes = {
    children: PropTypes.string,
    image: PropTypes.string,
    username: PropTypes.string
};

export default Post;

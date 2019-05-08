import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TextArea (props) {
    const [value, setValue] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleOnChangeImage(event) {
        setImage(event.target.value);
    }

    function handleOnChangeUsername(event) {
        setUsername(event.target.value);
    }

    function handleOnSubmitPost(event) {
        const { onHandleSubmit } = props;
        event.preventDefault();
        onHandleSubmit({
            username: username || 'Anonymous',
            image: image,
            value: value
        });
        setValue('');
    }

    return (
        <div>
            <div>
                <h3>Post a comment</h3>
            </div>     
            <div>
                <form onSubmit={handleOnSubmitPost}>
                    <textarea
                        onChange={handleChange}
                        placeholder='What is or your mind?'
                        value={value}
                    />
                    <div>
                        <label>Name: </label>
                        <input                                            
                            onChange={handleOnChangeUsername}
                            type='text'
                            value={username}
                        />
                    </div>
                    <div>
                        <label>Profile image: </label>
                        <input
                            onChange={handleOnChangeImage}
                            type='text'
                            value={image}
                        /> 
                    </div>
                    <button
                                    
                        type='submit'
                    >
                        <i className='fa fa-share' />
                                    Share
                    </button>
                </form>
            </div>
        </div>
    );
}

TextArea.propTypes = {
    onHandleSubmit: PropTypes.func.isRequired
};

export default TextArea;
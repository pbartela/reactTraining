import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleOnSubmitPost = this.handleOnSubmitPost.bind(this);
        this.handleOnChangeImage = this.handleOnChangeImage.bind(this);
        this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this);
        this.state = {
            value: '',
            username: '',
            image: ''
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleOnChangeUsername(event) {
        this.setState({username: event.target.value});
    }

    handleOnSubmitPost(event) {
        event.preventDefault();
        const { onHandleSubmit } = this.props;
        const {  image, username, value } = this.state;
        const date = Date.now();
        onHandleSubmit({
            username: username || 'Anonymous',
            date: date,
            image: image,
            value: value
        });
        this.setState({
            value: ''
        });    
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h3>Post a comment</h3>
                </div>
    
                <div className='row'>    
                    <div className='col-md-6'>
                        <div className='widget-area no-padding blank'>
                            <div className='status-upload'>
                                <form onSubmit={this.handleOnSubmitPost}>
                                    <textarea
                                        onChange={this.handleChange}
                                        placeholder='What is or your mind?'
                                        value={this.state.value}
                                    />
                                    <div>
                                        <label className='name-input-label'>Name: </label>
                                        <input
                                            className='user-input'    
                                            onChange={this.handleOnChangeUsername}
                                            type='text'
                                            value={this.state.username}
                                        />
                                    </div>
                                    <div>
                                        <label className='image-input-label'>Profile image: </label>
                                        <input
                                            onChange={this.handleOnChangeImage}
                                            type='text'
                                            value={this.state.image}
                                        /> 
                                    </div>
                                    <button
                                        className='btn btn-success green'
                                        type='submit'
                                    >
                                        <i className='fa fa-share' />
                                        Share
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
        
                </div>
            </div>
        );
    }
}

TextArea.propTypes = {
    onHandleSubmit: PropTypes.func.isRequired
};

export default TextArea;

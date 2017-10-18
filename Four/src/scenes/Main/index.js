import React, { Component } from 'react';
import {
    TextArea,
} from '../../components/';

class MainScene extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            post: {
                value: '',
                username: '',
                image:''
            },
        }
    }

    handleSubmit(post) {
        this.setState({
            post: post
        })
    }

    render() {
        const { post: { image, username, value } } = this.state;
        return (
            <div className='container-fluid'>
                <div className='row'>
                <img src={image} alt={username} />
                {value}{username}
                </div>
                <div className='row'>
                    <TextArea onHandleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default MainScene;

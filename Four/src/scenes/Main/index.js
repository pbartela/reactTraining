import React, { Component } from 'react';
import {
    Posts,
    TextArea,
    TextFilter
} from '../../components/';

import { loadArray, saveArray } from './../../helpers/localStorageHelpers';

const storageKey = 'posts';

class MainScene extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            post: {},
        }
    }

    handleSubmit(post) {
        const { post } = this.state;
        
        this.setState({
            post: post
        })
    }

    render() {
        const { post  } = this.state;
        console.log(post);
        return (
            <div className='container-fluid'>
                <div className='row'>
                {post}
                </div>
                <div className='row'>
                    <TextArea onHandleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default MainScene;

import React, { Component } from 'react';
import {
    Post,
    TextArea
} from '../../components/';

import { loadArray, saveArray } from './../../helpers/localStorageHelpers';

const storageKey = 'posts';

class MainScene extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            post: {value: ''},
            posts: []
        }
    }
    
    componentDidMount() {
        const posts = loadArray(storageKey);
        posts && this.setState({
            posts: posts
        });
    }

    handleSubmit(post) {
        const { posts } = this.state;        
        const postArray = posts.concat(post);
        saveArray(storageKey, postArray);
        this.setState({
            posts: postArray
        });
    }

    render() {
        const { posts } = this.state;
        const renderPosts = posts.map((post, index) =>
            <Post
                key={index}    
                image={post.image}
                username={post.username}
            >
            {post.value}    
            </Post>
        );
        return (
            <div className='container-fluid'>
                <div className='row'>
                    {renderPosts}
                </div>
                <div className='row'>
                    <TextArea onHandleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default MainScene;

import React, { Component } from 'react';
import Posts from './../components/PostsComponent';
import TextArea from './../components/TextAreaComponent';

class MainScene extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const posts = JSON.parse(localStorage.getItem('posts'))
        posts && this.setState({
            posts: posts
        });
    }

    handleSubmit(post) {
        const { posts } = this.state;
        const postArray = posts.concat(post);
        localStorage.setItem('posts', JSON.stringify(postArray));
        this.setState({
            posts: postArray
        });
    }

    render() {
        const { posts } = this.state;
        return (
            <div className='container-fluid'>
                <div>
                    <Posts posts={posts} />
                </div>
                <div>
                    <TextArea onHandleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default MainScene;

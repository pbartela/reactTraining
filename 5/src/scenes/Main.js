import React, { Component } from 'react';
import Post from './../components/PostComponent';
import TextArea from './../components/TextAreaComponent';


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
        const renderPosts = posts.map((post, index) =>
            <Post
                image={post.image}    
                key={index}
                username={post.username}
            >
                {post.value}    
            </Post>
        );
        return (
            <div className='container-fluid'>
                <div>
                    {renderPosts}
                </div>
                <div>
                    <TextArea onHandleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default MainScene;

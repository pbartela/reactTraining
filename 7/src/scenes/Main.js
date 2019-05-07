import React, { Component } from 'react';
import Posts from './../components/PostsComponent';
import TextArea from './../components/TextAreaComponent';
import TextFilter from './../components/TextFilter';

class MainScene extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilterChange =  this.handleFilterChange.bind(this);
        this.state = {
            posts: [],
            filterValue: ''
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

    handleFilterChange(value = '') {
        this.setState({
            filterValue: value
        });
    }

    render() {
        const { posts, filterValue } = this.state;
        const filteredPosts = posts.filter(post => filterValue === '' || post.username.toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
        return (
            <div className='container-fluid'>
                <div>
                    <Posts posts={filteredPosts} />
                </div>
                <div>
                    <TextArea onHandleSubmit={this.handleSubmit} />
                    <div>
                        <label>
                            Filter by username:    
                        </label>    
                        <TextFilter onChange={this.handleFilterChange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainScene;

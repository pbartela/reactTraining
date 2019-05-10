import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Posts from './../components/PostsComponent';
import TextArea from './../components/TextAreaComponent';
import TextFilter from './../components/TextFilter';
import { addPost, getPosts } from './../api/postsApi'

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

    async componentDidMount() {
        const posts = await getPosts();
        const postsJson = await posts.json();
        posts && this.setState({
            posts: postsJson
        });
    }

    async handleSubmit(post) {
        await addPost(post);
        const posts = await getPosts();
        const postsJson = await posts.json();
        this.setState({
            posts: postsJson
        });
    }

    handleFilterChange(value = '') {
        this.setState({
            filterValue: value
        });
    }

    render() {
        const { posts, filterValue } = this.state;
        const { title } = this.props;
        const filteredPosts = posts.filter(post => filterValue === '' || post.username.toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
        return (
            <div className='container-fluid'>
                <h1>{title}</h1>
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

MainScene.defaultProps = {
    title: 'Default title'
}

MainScene.propTypes = {
    title: PropTypes.string.isRequired
}

export default MainScene;

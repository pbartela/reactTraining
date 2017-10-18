import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Posts,
    TextArea,
    TextFilter
} from '../../components/';
import api from './../api/postsApi';


class MainApi extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilterChange =  this.handleFilterChange.bind(this);
        this.state = {
            post: {value: ''},
            posts: [],
            filterValue: ''
        }
    }

    async componentDidMount() {
        const posts = await api.getPosts();
        const postsJson = await posts.json();
        postsJson && this.setState({
            posts: postsJson
        });
    }

    handleFilterChange(value = '') {
        this.setState({
            filterValue: value
        });
    }

    async handleSubmit(post) {
        await api.addPost(post);
        const posts = await api.getPosts();
        const postsJson = await posts.json();
        this.setState({
            posts: postsJson,
            value: ''
        });
    }

    render() {
        const { posts, filterValue } = this.state;
        const { title } = this.props;
        const filteredPosts = posts.filter(post => filterValue === '' || post.username.toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
        return (
            <div className='container-fluid'>
                <h1>{title}</h1>
                <div className='row'>
                    <Posts posts={filteredPosts} />
                </div>
                <div className='row'>
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

MainApi.propTypes = {
    title: PropTypes.string.isRequired
}

export default MainApi;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        this.handleFilterChange =  this.handleFilterChange.bind(this);
        this.state = {
            post: {value: ''},
            posts: [],
            filterValue: ''
        }
    }

    componentDidMount() {
        const posts = loadArray(storageKey);
        posts && this.setState({
            posts: posts
        });
    }

    handleFilterChange(value = '') {
        this.setState({
            filterValue: value
        });
    }

    handleSubmit(post) {
        const { posts } = this.state;
        
        const postArray = posts.concat(post);
        saveArray(storageKey, postArray);
        this.setState({
            posts: postArray,
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

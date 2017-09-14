import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './../Post/';
const Posts = props => {
    const { posts } = props;
    const postRender = posts.map(function (post, index) {
        return <Post
            image={post.image}
            key={index}
            username={post.username}
        >
            {post.value}
        </Post>
    }, this);
    console.log('DEBUG postRender: ', postRender);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h3>Comments</h3>
                </div>
            </div>
            {postRender}
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        image: PropTypes.string,
        value: PropTypes.string
    }))
};

export default Posts;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Posts from './../components/PostsComponent';
import TextArea from './../components/TextAreaComponent';
import TextFilter from './../components/TextFilter';
import isEqual from 'lodash/isEqual';
import { addPost, getPosts } from './../api/postsApi'

function MainScene (props) {
    const [posts, setPosts] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        async function fetchData () {
            const loadedPosts = await getPosts();
            const postsJson = await loadedPosts.json();
            console.log('DEBUG oko: ');
            console.log('DEBUG posts: ', posts);
            console.log('DEBUG postsJson: ', postsJson);
            setPosts(postsJson);
        }
        fetchData();
    }, [posts]);

    async function handleSubmit(post) {
        await addPost(post);
        setPosts(posts.concat([post]));
    }

    function handleFilterChange(value = '') {
        setFilterValue(value);
    }
    const { title } = props;
    const filteredPosts = posts.filter(post => filterValue === '' || post.username.toLowerCase().indexOf(filterValue.toLowerCase()) > -1);
    return (
        <div className='container-fluid'>
            <h1>{title}</h1>
            <div>
                <Posts posts={filteredPosts} />
            </div>
            <div>
                <TextArea onHandleSubmit={handleSubmit} />
                <div>
                    <label>
                        Filter by username:    
                    </label>    
                    <TextFilter onChange={handleFilterChange} />
                </div>
            </div>
        </div>
    )
}

MainScene.defaultProps = {
    title: 'Default title'
}

MainScene.propTypes = {
    title: PropTypes.string.isRequired
}

export default MainScene;

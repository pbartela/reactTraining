const apiEndpoiint = 'http://localhost:3001/posts';

const getPosts = async () => {
    return await fetch(apiEndpoiint);
}

const addPost = async (data) => {
    return await fetch(apiEndpoiint, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export default {
    addPost,
    getPosts
}
const apiEndpoiint = 'http://10.57.238.63:3333/posts';

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

export {
    addPost,
    getPosts
}
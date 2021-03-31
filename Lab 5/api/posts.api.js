const uuid = require('uuid');

let posts = new Map();

const createPost = ({name, description}) => {
    const post = {
        id: uuid.v4(),
        name,
        description,
        postedDate: new Date()
    }

    posts.set(post.id, post);
    return post;
}

const getPosts = () =>{
    return [...posts.values()];
}

// ... spreading operator
// for (let post in posts){}

const getPost = id => {
    return posts.get(id);
}

module.exports = {
    createPost,
    getPost,
    getPosts
};






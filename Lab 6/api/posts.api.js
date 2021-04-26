const uuid = require('uuid');
const {save, getAll, getById, removeById, update} = require('../dal/posts.dao');

let posts = new Map();

const createPost = async ({name, description}) => {
    const post = {
        id: uuid.v4(),
        name,
        description,
        postedDate: new Date()
    }

    return await save(post);
}

const getPosts = async () => {
    return await getAll();
}

const getPost = async id => {
    return await getById(id);
}

const removePost = async id => {
    return await removeById(id);
}

const updatePost = async (id, {name, description, postedDate}) => {
    return await update(id, {id, name, description, postedDate})
}

module.exports = {
    createPost,
    getPost,
    getPosts,
    removePost,
    updatePost
};






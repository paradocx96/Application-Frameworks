import React from 'react';
import Posts from './Posts';
import AddPost from "./AddPost";
import {Link, Route, Switch} from "react-router-dom";
import PostsFunctional from "./PostsFunctional";

const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'
    }, {
        id: 2,
        name: 'Node',
        description: 'Server side JS'
    }
];

export default class PostsHolder extends React.Component {
    constructor(props) {
        super(props);
    }

    addNewPost({name, description}) {
        posts.push({
            id: posts.length + 1,
            name,
            description
        });
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/posts">
                        <PostsFunctional posts={posts}/>
                    </Route>
                    <Route path="/posts/add">
                        <AddPost save={post => this.addNewPost(post)}/>
                    </Route>
                </Switch>
                <Link to="/posts/add">Add</Link>
            </div>
        )
    }
}
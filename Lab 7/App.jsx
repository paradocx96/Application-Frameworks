// import React, {Component} from 'react';
// import Posts from './components/Posts';
//
// const posts = [
//     {
//         id: 1,
//         name: 'React',
//         description: 'Best UI library'
//     }, {
//         id: 2,
//         name: 'Node',
//         description: 'Server side JS'
//     }
// ];
//
// export default class App extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div>
//                 <Posts posts={posts}/>
//             </div>
//         );
//     }
// }

import React from 'react';
import PostsHolder from './components/PostsHolder';
import AddPost from './components/AddPost';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/posts">
                        <h1>Hello App.js Posts</h1>
                        <PostsHolder/>
                        <AddPost/>
                    </Route>
                    <Redirect to='/posts'/>
                </Switch>
            </Router>
        );
    }
}

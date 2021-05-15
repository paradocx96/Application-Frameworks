// import React from 'react';
// // import Posts from './components/Posts';
// import PostsHolder from "./components/PostsHolder";
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
// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <div>
//             {/*<Posts posts={posts}/>*/}
//             < PostsHolder />
//         </div>;
//     };
// }

import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PostsHolder from './components/PostsHolder';
import UserContext from "./components/UserContext";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                user: {
                    name: 'admin'
                }
            });
        }, 5000);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/posts">
                        <UserContext.Provider value={this.state.user}>
                            <PostsHolder/>
                        </UserContext.Provider>
                    </Route>
                    <Redirect to={'/posts'}/>
                </Switch>
            </Router>
        )
    }
}
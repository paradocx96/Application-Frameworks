import React from 'react';
import {Link} from "react-router-dom";
import UserContext from "./UserContext";

export default class AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    }

    onChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {save} = this.props;
        return (
            <div>
                <div>
                    <Link to="/posts">Posts</Link>
                </div>
                <div>

                    {this.context ? <h3>{this.context.name}</h3> : ''}

                </div>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td><label htmlFor="name">Name: </label></td>
                            <td><input type="text" name="name" id="name"
                                       value={this.state.name}
                                       onChange={event =>
                                           this.onChange(event)}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="description">Description:</label></td>
                            <td><input type="text" name="description"
                                       id="description" value={this.state.description}
                                       onChange={event =>
                                           this.onChange(event)}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button onClick={event => {
                                    event.preventDefault();
                                    save({
                                        name: this.state.name,
                                        description: this.state.description
                                    });
                                    this.setState({
                                        name: '',
                                        description: ''
                                    })
                                }}>Save
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

AddPost.contextType = UserContext;
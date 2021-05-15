import React, {useEffect, useState} from "react";
import PostListItem from "./PostListItem";
import Post from "./Post";

export default function PostsFunctional(props) {

    const [post, setPost] = useState(null);
    const { posts } = props;

    useEffect(() => {
        console.log('Mount and update from the effect hook');
        return () => console.log("Unmount from the effect hook");
    });

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {posts.map(post => {
                    return <PostListItem key={post.id.toString()} post={post}
                                         selectPost={ setPost }/>
                })}
                </tbody>
            </table>
            <div>
                { post ? <Post post={post} editable={false}/> : ''}
            </div>
        </div>
    )
}
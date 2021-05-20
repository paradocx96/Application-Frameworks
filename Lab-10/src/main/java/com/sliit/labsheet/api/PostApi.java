package com.sliit.labsheet.api;

import com.sliit.labsheet.dal.model.PostModel;
import com.sliit.labsheet.domain.Post;
import com.sliit.labsheet.domain.PostDataAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class PostApi {

    private final Map<String, Post> posts;
    private final PostDataAdapter postDataAdapter;

    @Autowired
    public PostApi(PostDataAdapter postDataAdapter) {
        this.posts = new HashMap<>();
        this.postDataAdapter = postDataAdapter;
    }

    public List<Post> getAllPosts() {
        return new ArrayList<>(postDataAdapter.getAll());
    }

    public Post addPost(Post post) {
        post.setPostedDate(LocalDateTime.now());
        post = postDataAdapter.save(post);
        return post;
    }

    public void removePost(String id) {
        postDataAdapter.delete(id);
    }

    public Post updatePost(Post post) {
        return postDataAdapter.update(post);
    }

//    public PostApi(){
//        this.posts = new HashMap<>();
//    }

//    public List<Post> getAllPosts(){
//        return new ArrayList<>(posts.values());
//    }

//    public Post addPost(Post post) {
//        post.setId(UUID.randomUUID().toString());
//        posts.put(post.getId(), post);
//        return post;
//    }

//    public void removePost(String id){
//        posts.remove(id);
//    }

//    public Post updatePost(Post post, String id) {
//        Post old = posts.get(id);
//        old.setName(post.getName());
//        old.setDescription(post.getDescription());
//        return posts.replace(id, old);
//    }

}

package com.sliit.labsheet.api;

import com.sliit.labsheet.domain.Post;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PostApi {

    private final Map<String, Post> posts;

    public PostApi(){
        this.posts = new HashMap<>();
    }

    public List<Post> getAllPosts(){
        return new ArrayList<>(posts.values());
    }

    public Post addPost(Post post) {
        post.setId(UUID.randomUUID().toString());
        posts.put(post.getId(), post);
        return post;
    }

    public void removePost(String id){
        posts.remove(id);
    }

    public Post updatePost(Post post, String id) {
        Post old = posts.get(id);
        old.setName(post.getName());
        old.setDescription(post.getDescription());
        return posts.replace(id, old);
    }
}

package com.sliit.labsheet.controller;

import com.sliit.labsheet.api.PostApi;
import com.sliit.labsheet.domain.Post;
import com.sliit.labsheet.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostEndpoint {

    private final PostApi postApi;

    @Autowired
    public PostEndpoint(PostApi postApi) {
        this.postApi = postApi;
    }

    @GetMapping
    public List<Post> getPosts() {
        return postApi.getAllPosts();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post addPost(@RequestBody PostDto postDto) {
        Post post = new Post();
        post.setName(postDto.getName());
        post.setDescription(postDto.getDescription());
        return postApi.addPost(post);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removePost(@PathVariable String id) {
        postApi.removePost(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Post updatePost(@RequestBody Post post, @PathVariable String id) {
        return postApi.updatePost(post, id);
    }
}

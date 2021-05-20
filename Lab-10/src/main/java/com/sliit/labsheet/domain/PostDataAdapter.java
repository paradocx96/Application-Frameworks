package com.sliit.labsheet.domain;

import com.sliit.labsheet.dal.model.PostModel;

import java.util.List;

public interface PostDataAdapter {

    Post save(Post post);

    List<Post> getAll();

    void delete(String id);

    Post update(Post post);
}

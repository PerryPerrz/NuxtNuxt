import { Post } from './post';

let posts: Post[] = [];

// initialize posts
posts = [
    {
        id: "1",
        title: "First Post",
        content: "This is the first post",
        createdAt: new Date().toISOString(),
    },
    {
        id: "2",
        title: "Second Post",
        content: "This is the second post",
        createdAt: new Date().toISOString(),
    },
    {
        id: "3",
        title: "Third Post",
        content: "This is the third post",
        createdAt: new Date().toISOString(),
    },
];

export const getPosts = () => posts;

export const getPostById = async (id: string) => {
    return posts.find((post) => post.id === id);
}

export const setPosts = (newPosts: Post[]) => {
    posts = newPosts;
}

export const addPost = (title: string, content: string) => {
    const newPost = {
        id: String(posts.length + 1),
        title,
        content,
        createdAt: new Date().toISOString(),
    };
    setPosts([...posts, newPost]);

    return newPost;
}

export const updatePost = (id: string, title: string, content: string) => {
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return;
    }

    post.title = title;
    post.content = content;
    return post;
}

export const deletePost = (id: string) => {
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return;
    }

    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
    return post;
}

export const deleteAllPosts = () => {
    const deletedPosts = posts;
    setPosts([]);
    return deletedPosts;
}
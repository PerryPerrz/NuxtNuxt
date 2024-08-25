import { getPosts, setPosts } from "~/model/posts";

// create a new post
export default defineEventHandler(async (event) => {
    const { title, content } = await readBody(event);

    const posts = getPosts();
    const newPost = {
        id: String(posts.length + 1),
        title,
        content,
        createdAt: new Date().toISOString(),
    };
    setPosts([...posts, newPost]);
    
    //return newPost;

    return {
        statusCode: 201,
        body: newPost,
    };
});
import { getPosts } from "~/model/posts";

// update a post by its id
export default defineEventHandler(async (event) => {
    const { id, title, content } = await readBody(event);

    const posts = getPosts();
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return { status: 404, body: { message: "Post not found" } };
    }

    post.title = title;
    post.content = content;

    return post;
});
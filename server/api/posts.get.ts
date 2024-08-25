import { getPosts } from "~/model/posts";

// get all posts
export default defineEventHandler(() => {
    const posts = getPosts();
    return posts;
});
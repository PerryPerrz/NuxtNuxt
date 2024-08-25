import { deleteAllPosts } from "~/model/posts";

// delete all posts
export default defineEventHandler(() => {
    return deleteAllPosts();
});
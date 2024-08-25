import { getPosts, setPosts, getPostById } from '../../../model/posts';

// delete a post by its id
export default defineEventHandler(async (event) => {
    //const { id } = await readBody(event);
    const id = getRouterParam(event, 'id');

    const posts = getPosts();
    const post = getPostById(id);
    
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
    
    return { status: 200, body: post };
});
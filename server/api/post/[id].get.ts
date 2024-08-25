import { getPostById } from '../../../model/posts';

// get a post by its id
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    //const { id } = await readBody(event);

    const post = await getPostById(id); 
    return post;
});
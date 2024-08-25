// This is a catch-all route that will be called for any request that doesn't match any other route.
export default defineEventHandler(() => {
    // event.context.params.slug
    return new Error('Not implemented')
})
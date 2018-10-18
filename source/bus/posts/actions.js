// Types
import { types } from './types';

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },

    createPost: (comment) => {
        return {
            type:    types.CREATE_POST,
            payload: comment,
        };
    },

    fetchPostsAsync: () => {
        return {
            type: types.FETCH_POSTS_ASYNC,
        };
    },

    createPostAsync: (comment) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
};

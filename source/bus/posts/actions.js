// Types
import { types } from './types';

// Instrumets
import { api } from '../../REST';

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

    fetchPostsAsync: () => async (dispatch) => {
        dispatch({ type: types.FETCH_POSTS_ASYNC });

        const response = await api.posts.fetch();
        const result = await response.json();

        dispatch(postsActions.fillPosts(result.data));

    },

    createPostAsync: (comment) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
};

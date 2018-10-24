//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* removePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.remove, [postId]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }
    } catch (error) {
        yield put(uiActions.emitError(error, 'removePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
        yield put(postsActions.removePost(postId));
    }
}

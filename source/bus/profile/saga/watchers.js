// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { worker } from './workers';

function* watchWorker () {
    yield takeEvery(types.TYPE, worker);
}

export function* watchPosts () {
    yield all([call(watchWorker)]);
}

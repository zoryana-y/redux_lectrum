// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { signup, login } from './workers';

function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

function* watchLogin () {
    yield takeEvery(types.LOGIN_ASYNC, login);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchLogin)]);
}
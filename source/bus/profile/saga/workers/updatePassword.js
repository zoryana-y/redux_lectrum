//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';

export function* updatePassword ({ payload: passwordData }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [passwordData]);
        const { message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

    } catch (error) {
        yield put(uiActions.emitError(error, `updateName ${error.message}`));
    } finally {
        alert('Password was changed!');
        yield put(uiActions.stopFetching());
    }
}

//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { profileAction } from '../../../profile/actions';

export function* updateName ({ payload: {
    firstName, lastName,
}}) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [{ firstName, lastName }]);
        const { data: updateProfile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileAction.fillProfile(updateProfile));
    } catch (error) {
        yield put(uiActions.emitError(error, `updateName ${error.message}`));
    } finally {
        yield put(uiActions.stopFetching());
    }
}

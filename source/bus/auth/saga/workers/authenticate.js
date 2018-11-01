
//Core
import { put, apply } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { authActions } from '../../../auth/actions';
import { profileAction } from '../../../profile/actions';

export function* authenticate () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.authenticate);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield apply(localStorage, localStorage.setItem, ['token', profile.token]);

        yield put(profileAction.fillProfile(profile));
        yield put(actions.change('forms.user.profile.firstName', profile.firstName));
        yield put(actions.change('forms.user.profile.lastName', profile.lastName));
        yield put(authActions.authenticate());

    } catch (error) {
        yield put(uiActions.emitError(error, 'authenticate'));
    } finally {
        yield put(uiActions.stopFetching());
        yield put(authActions.initialize());
    }
}

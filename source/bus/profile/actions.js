// Types
import { types } from './types';

export const profileAction = {
    fillProfile: (profile) => {
        return {
            type:    types.FILL_PROFILE,
            payload: profile,
        };
    },
};

//Types
import { SHOW_NEXT_PHOTO, SHOW_SELECTED_PHOTO } from './types';

export const showNextPhoto = () => {
    return {
        type: SHOW_NEXT_PHOTO,
    };
};

export const showSelectedPhoto = (photoIndex) => {
    return {
        type:    SHOW_SELECTED_PHOTO,
        payload: photoIndex,
    };
};

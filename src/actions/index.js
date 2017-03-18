import { fetchImagesPerPage } from '../api'

export const IMAGE_SELECTED = 'IMAGE_SELECTED';
export const FETCH_IMAGES_DONE = 'FETCH_IMAGES_DONE';

export function selectImage(image) {
    return {
        type: IMAGE_SELECTED,
        image
    }
}

export function fetchImages(page) {
    return dispatch => {
        fetchImagesPerPage(page)
            .then((images) => {
                dispatch({
                    type: FETCH_IMAGES_DONE,
                    images
                });
            });
    }
}

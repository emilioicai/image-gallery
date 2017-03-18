import { fetchImagesPerPage } from '../api'

export const IMAGE_SELECTED = 'IMAGE_SELECTED';
export const FETCH_IMAGES_DONE = 'FETCH_IMAGES_DONE';
export const FETCH_IMAGES = 'FETCH_IMAGES';
export const PAGE_CHANGED = 'PAGE_CHANGED';

export function selectImage(image) {
    return {
        type: IMAGE_SELECTED,
        image
    }
}

export function unselectImage() {
    return {
        type: IMAGE_SELECTED,
        image: null
    }
}

export function selectPage(page) {
    return dispatch => {
    	dispatch({
	        type: FETCH_IMAGES
	    });
        fetchImagesPerPage(page)
            .then((images) => {
                dispatch({
                    type: FETCH_IMAGES_DONE,
                    images
                });

                dispatch({
                    type: PAGE_CHANGED,
                    page
                });
            });
    }
}

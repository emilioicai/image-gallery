import { fetchImagesPerPage } from '../api'

export const IMAGE_SELECTED = 'IMAGE_SELECTED';
export const FETCH_IMAGES_DONE = 'FETCH_IMAGES_DONE';
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

export function fetchImages(page = 1) {
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

export function selectPage(page) {
	return dispatch => {
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
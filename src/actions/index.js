import 'whatwg-fetch'

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
		fetch('/images/' + page)
		.then(function(response) {
			return response.json()
		}).then(function(images) {
			dispatch({ 
				type: FETCH_IMAGES_DONE,
				images
			});
		}).catch(function(ex) {
			console.log('parsing failed', ex)
		});
	}
}
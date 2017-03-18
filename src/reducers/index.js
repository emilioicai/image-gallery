import { IMAGE_SELECTED, FETCH_IMAGES_DONE, FETCH_IMAGES, PAGE_CHANGED } from '../actions'

const defaultState = {
	images: [],
	selectedImage: null,
	page: 1,
	loadingImages: false
}

export default function images(state = defaultState, action) {
	switch(action.type) {
		case IMAGE_SELECTED:
		return {...state, selectedImage: action.image};
		case FETCH_IMAGES_DONE:
		return {...state, images: action.images, loadingImages: false};
		case FETCH_IMAGES:
		return {...state, loadingImages: true};
		case PAGE_CHANGED:
		return {...state, page: action.page};
	}
	return state;
}
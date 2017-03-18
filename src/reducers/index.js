import { IMAGE_SELECTED, FETCH_IMAGES_DONE } from '../actions'

const defaultState = {
	images: [],
	selectedImage: null
}

export default function images(state = defaultState, action) {
	switch(action.type) {
		case IMAGE_SELECTED:
		return {...state, selectedImage: action.image};
		case FETCH_IMAGES_DONE:
		return {...state, images: action.images};
	}
	return state;
}
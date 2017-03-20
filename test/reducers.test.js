import { assert } from 'chai'

import * as actions from '../src/actions'
import reducers from '../src/reducers'

describe('Reducers', function() {
    it('returns an initialised default state', function() {
        const state = reducers();

        assert.isArray(state.images);
        assert.equal(state.images.length, 0);
        assert.isNull(state.selectedImage);
        assert.equal(state.page, 1);
        assert.isFalse(state.loadingImages);
    });

    describe('reactions to actions', function() {
    	
    	it('sets an image as selected', function() {
    		let state = reducers();
			const action = { image: { url: 'test url', owner: 'test owner', title: 'test title' }, type: actions.IMAGE_SELECTED };
			state = reducers(state, action);

			assert.equal(state.selectedImage, action.image);
		});

		it('sets list of images after fetching', function() {
    		let state = reducers();
			const action = { images: [{url: 'test3'}, {url: 'test3'}, {url: 'test3'}], type: actions.FETCH_IMAGES_DONE };
			state = reducers(state, action);

			assert.equal(state.images, action.images);
		});

		it('sets the loading sign when fetching', function() {
    		let state = reducers();
			const action = {type: actions.FETCH_IMAGES };
			state = reducers(state, action);

			assert.isTrue(state.loadingImages);
		});

		it('unsets the loading sign when fetching is complete', function() {
    		let state = reducers();
			const action = {type: actions.FETCH_IMAGES };
			const action2 = { images: [{url: 'test3'}, {url: 'test3'}, {url: 'test3'}], type: actions.FETCH_IMAGES_DONE };
			state = reducers(state, action);

			assert.isTrue(state.loadingImages);

			state = reducers(state, action2);

			assert.isFalse(state.loadingImages);
		});

		it('sets the current page properly', function() {
    		let state = reducers();
			const action = {type: actions.PAGE_CHANGED, page: 5 };
			state = reducers(state, action);

			assert.equal(state.page, 5);
		});

    });
});

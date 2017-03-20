import { assert } from 'chai'
import sinon from 'sinon'

import * as actions from '../src/actions'

describe('Actions', function() {
    describe('selectImage()', function() {

        it('returns action IMAGE_SELECTED', function() {
            const action = actions.selectImage();
            assert.equal(action.type, actions.IMAGE_SELECTED);
        });

        it('action contains the image passed', function() {
            const image = { url: 'test url', owner: 'test owner', title: 'test title' };
            const action = actions.selectImage(image);

            assert.equal(action.image, image);
        });

    });

    describe('unselectImage()', function() {

        it('returns action IMAGE_SELECTED', function() {
            const action = actions.unselectImage();
            assert.equal(action.type, actions.IMAGE_SELECTED);
        });

        it('no image is passed', function() {
            const image = { url: 'test url', owner: 'test owner', title: 'test title' };
            const action = actions.unselectImage(image);

            assert.equal(action.image, null);
        });

    });

    describe('selectPage()', function() {

        after(function() {
            global.fetch.restore();
        });

        it('returns a thunk', function() {
            const thunk = actions.selectPage(3);
            assert.isFunction(thunk);
        });

        it('returned thunk makes an dipatches FETCH_IMAGES, FETCH_IMAGES_DONE and PAGE_CHANGED on success', function() {
            sinon.stub(global, 'fetch').returns({ then: () =>{ return { then:(f)=>{ f(); } } } });

            const dispatch = sinon.spy();
            const thunk = actions.selectPage(3);
            thunk(dispatch);

            assert(dispatch.calledThrice);
            assert.equal(dispatch.firstCall.args[0].type, actions.FETCH_IMAGES);
            assert.equal(dispatch.secondCall.args[0].type, actions.FETCH_IMAGES_DONE);
            assert.equal(dispatch.thirdCall.args[0].type, actions.PAGE_CHANGED);
            assert.equal(dispatch.thirdCall.args[0].page, 3);
        });

    });
});

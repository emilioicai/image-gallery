import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import Gallery from '../src/components/Gallery'
import Navigation from '../src/components/Navigation'

describe('<Gallery/>', function() {

	it('should have an <a> element per image', function() {
		const images = ['img1', 'img2', 'img3'];
		const wrapper = shallow(<Gallery images={images} />);
		expect(wrapper.find('a')).to.have.length(images.length);
	});

	it('should have a <img> element per image', function() {
		const images = ['img1', 'img2', 'img3'];
		const wrapper = shallow(<Gallery images={images} />);
		expect(wrapper.find('img')).to.have.length(images.length);
	});

	it('calls selectImage every time an image is selected', function() {
		const images = ['img1', 'img2', 'img3'];
		const selectImage = sinon.spy();
		const wrapper = shallow(<Gallery images={images} selectImage={selectImage}/>);

		wrapper.find('#thumb1 > div').simulate('click');
		wrapper.find('#thumb2 > div').simulate('click');
		expect(selectImage).to.have.property('callCount', 2);
	});

});

describe('<Navigation/>', function() {

	it('should have 9 clickable <a> elements', function() {
		const wrapper = shallow(<Navigation />);
		expect(wrapper.find('a')).to.have.length(9);
	});

	it('should have 1 <span> element containing number 1 if no page was selected', function() {
		const wrapper = shallow(<Navigation />);
		expect(wrapper.find('span')).to.have.length(1);
		expect(wrapper.find('span').text()).to.contain('1');
	});

	it('should have 1 <span> element containing number 3 if page 3 was selected', function() {
		const wrapper = shallow(<Navigation page={3}/>);
		expect(wrapper.find('span')).to.have.length(1);
		expect(wrapper.find('span').text()).to.contain('3');
	});

	it('first <a> element should contain number 1 if page 3 was selected', function() {
		const wrapper = shallow(<Navigation page={3}/>);
		expect(wrapper.find('a').nodes[0].key).to.equal('1');
	});

	it('first <a> element should contain number 5 if page 10 was selected', function() {
		const wrapper = shallow(<Navigation page={10}/>);
		expect(wrapper.find('a').nodes[0].key).to.equal('5');
	});

	it('last <a> element should contain number 14 if page 10 was selected', function() {
		const wrapper = shallow(<Navigation page={10}/>);
		expect(wrapper.find('a').nodes[wrapper.find('a').nodes.length - 1].key).to.equal('14');
	});

	it('calls selectPage every time an page link is clicked', function() {
		const selectPage = sinon.spy();
		const wrapper = shallow(<Navigation page={10} selectPage={selectPage}/>);

		wrapper.find('a').first().simulate('click');
		wrapper.find('a').at(2).simulate('click');
		expect(selectPage).to.have.property('callCount', 2);
	});

});

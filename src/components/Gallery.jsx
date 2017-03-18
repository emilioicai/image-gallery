import React, { Component } from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  * as Actions from '../actions'

class Gallery extends Component {
	constructor(props) {
		super(props);
	}

	handleThumbnailClick(image) {
		
	}

	componentDidMount() {
		this.props.fetchImages();
	}

	render() {
		const {images, selectedImage} = this.props;
		return (
			<div style={styles.gallery}>
				{images.map((image, index) => (
					<div key={index} style={styles.thumbnail} onClick={this.handleThumbnailClick.bind(this, image)}>
						<img src={image.url} />
					</div>
				))}
			</div>
			)
	}
};

var styles = {
	gallery: {
		color: '#fff'
	},

	thumbnail: {
		display: 'inline'
	}
};

//*** REDUX BOILERPLATE ***

function mapStateToProps(state) {
	return {
		images: state.images,
		selectedImage: state.selectedImage
	}
}

function mapActionCreatorsToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Radium(Gallery))
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../actions'
import Gallery from './Gallery'
import ImageDetail from './ImageDetail'
import Navigation from './Navigation'
import LoadingSign from './LoadingSign'

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.selectPage(1);
	}

	render() {
		const { images, selectedImage, page, loadingImages } = this.props;
		return (
			<div style={styles.app}>
				<Navigation page={page} selectPage={this.props.selectPage}/>
				
				<div style={styles.galleryContainer}>
					<Gallery images={images} selectImage={this.props.selectImage}/>
					{ loadingImages && <LoadingSign /> }
				</div>

				{ selectedImage && <ImageDetail image={selectedImage} onClick={this.props.unselectImage} /> }
			</div>
		)
	}
};

var styles = {
	app: {
		position: 'relative',
	},
	galleryContainer: {
		position: 'relative',
		textAlign: 'center'
	}
};


//*** REDUX BOILERPLATE ***
function mapStateToProps(state) {
	return {
		images: state.images,
		selectedImage: state.selectedImage,
		page: state.page,
		loadingImages: state.loadingImages
	}
}

function mapActionCreatorsToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(App)
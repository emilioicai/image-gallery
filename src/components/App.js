import React, { Component } from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../actions'
import Gallery from './Gallery'
import ImageDetail from './ImageDetail'
import Navigation from './Navigation'

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchImages();
	}

	render() {
		const { images, selectedImage, page } = this.props;
		return (
			<div style={styles.app}>
				{/* PAGE SWITCHER */}
				<Navigation page={page} selectPage={this.props.selectPage}/>

				{/* LIST OF IMAGES */}
				<Gallery images={images} selectImage={this.props.selectImage}/>

				{/* IMAGE DETAIL */}
				{ selectedImage && <ImageDetail image={selectedImage} onClick={this.props.unselectImage} /> }
			</div>
		)
	}
};

var styles = {
	app: {
		position: 'relative',
	}
};


//*** REDUX BOILERPLATE ***
function mapStateToProps(state) {
	return {
		images: state.images,
		selectedImage: state.selectedImage,
		page: state.page
	}
}

function mapActionCreatorsToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Radium(App))
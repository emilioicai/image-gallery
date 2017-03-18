import React, { Component } from 'react'

export default class Gallery extends Component {
	constructor(props) {
		super(props);
	}

	handleThumbnailClick(image) {
		this.props.selectImage(image);
	}

	render() {
		const { images } = this.props;
		return (
			<div>
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
	thumbnail: {
		display: 'inline'
	}
};
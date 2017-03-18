import React, { Component } from 'react'

export default class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: null
		}
	}

	handleThumbnailClick(image) {
		this.props.selectImage(image);
	}

	mouseOver(i) {
		if(this.state.hover === i) return
        this.setState({hover: i});
    }

    mouseOut() {
    	if(!this.state.hover) return
        this.setState({hover: null});
    }

	render() {
		const { images } = this.props;
		return (
			<div>
				{images.map((image, index) => (
					<a href='#' key={'thumb' + index}>
						<div style={styles.thumbnail} onClick={this.handleThumbnailClick.bind(this, image)} onMouseOver={this.mouseOver.bind(this, 'thumb' + index)} onMouseLeave={this.mouseOut.bind(this)}>
							<img src={image.url}/>
							{
								this.state.hover === 'thumb' + index &&
						    	<div style={styles.description} key={'desc' + index}>
									<h4>{image.title}</h4>
									<h5>{image.owner}</h5>
								</div>
							}
						</div>
					</a>
				))}
			</div>
		)
	}
};

var styles = {
	thumbnail: {
		display: 'inline-block',
		position: 'relative',
		height: 200,
		width: 200,
		margin: 20,
		overflow: 'hidden'
	},
	description: {
		textAlign: 'center',
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(255, 255, 255, 0.75)',
		padding: 20
	}
};

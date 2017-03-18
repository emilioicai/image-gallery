import React, { Component } from 'react'

export default function ImageDetail(props) {
	const image = props.image || {};
	return (
		<div style={styles.overlay} onClick={props.onClick}>
			<div style={styles.container}>
				<img src={image.url} />
				<h3>{image.owner}</h3>
				<h4>{image.title}</h4>
			</div>
		</div>
	);
}

var styles = {
	overlay: { 
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		textAlign: 'center'
	},
	container: {
		backgroundColor: '#EEE',
		margin: '7% 15%',
		padding: 20
	}
};

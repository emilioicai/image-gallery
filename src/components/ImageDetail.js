import React, { Component } from 'react'

export default function ImageDetail(props) {
	const image = props.image || {};
	return (
		<div style={styles.container} onClick={props.onClick}>
			<h3>Hola</h3>
			<img src={image.url} />
		</div>
	);
}

var styles = {
	container: { 
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.75)'
	}
};

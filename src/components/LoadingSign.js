import React, { Component } from 'react'

export default function LoadingSign(props) {
	return (
		<div style={styles.container}>
			<img src='/img/spinner.svg' />
		</div>
	);
}

var styles = {
	container: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		textAlign: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.75)',
		paddingTop: 100,
		top: 0,
		left: 0
	}
}

import React, { Component } from 'react'

export default class Navigation extends Component {
	constructor(props) {
		super(props);
	}

	handlePageLinkClick(page) {
		this.props.selectPage(page);
	}

	render(){
		const page = this.props.page || 1;
		let range = [];
		let i = (page - 5 > 0) ? page - 5 : 1;
		while(range.length < 10) {
			range.push(i++);
		}
		return (
			<div>
				{
					range.map((i) => {
						if(i === page) {
							return (<span style={styles.currentPage} key={'current'}>{i}</span>);
						} else {
							return (<a href="#" key={i} onClick={this.handlePageLinkClick.bind(this, i)} style={styles.pageLink}>{i}</a>);
						}
						
					})
				}
			</div>
		);	
	}
}

var styles = {
	pageLink: { 
		margin: '0 5px'
	},
	currentPage: {
		fontSize: 20,
		margin: '0 7px'
	}
};

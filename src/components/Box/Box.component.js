import React, { Component } from 'react';
import Row from '../Row/Row.component';
import PropTypes from 'prop-types';

class Box extends Component {
	cellClickHandler = (text) => () => {
		console.log('new cell clicked', text);
		return text;
	};

	mapRowWithKey = (element) => {
		return <Row key={element.rowId} cellData={element.data} cellClickHandler={this.cellClickHandler}/>
	}

	render() {
		const {rowData} = this.props;
		const rowCompArray = rowData.map(this.mapRowWithKey);

		return (
			<div>
				{rowCompArray}
			</div>
		);
	}
}

Box.propTypes = {
	rowData: PropTypes.array.isRequired
};

Box.defaultProps = {
	rowData: [
		['O', 'O', 'O'],
		['O', 'O', 'O'],
		['O', 'O', 'O']
	]
};

export default Box;

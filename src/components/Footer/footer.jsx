import React from 'react';
import PropTypes from 'prop-types';
import Filters from './filters/filters';

const Footer = (props) => {
	const { itemsLeft, clearCompleted } = props;
	return (
		<footer className="footer">
			<span className="todo-count">{itemsLeft} items left</span>
			<Filters />
			<button className="clear-completed" onClick={clearCompleted} type="button">
				Clear completed
			</button>
		</footer>
	);
};
Footer.propTypes = {
	clearCompleted: PropTypes.func.isRequired,
	itemsLeft: PropTypes.number.isRequired,
};
export default Footer;

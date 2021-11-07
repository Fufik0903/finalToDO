import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
	const { newItem, handleKeyPress } = props;
	return (
		<header className="header">
			<h1>todos</h1>
			<input className="new-todo" placeholder="What needs to be done?" ref={newItem} onKeyPress={handleKeyPress} />
		</header>
	);
};
Header.propTypes = {
	handleKeyPress: PropTypes.func.isRequired,
	newItem: PropTypes.instanceOf(Object).isRequired,
};
export default Header;

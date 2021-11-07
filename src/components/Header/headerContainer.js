import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { AddItemAC } from '../redux/TaskList-reducer';

const mapStateToProps = (state) => ({
	tasks: state.taskListReducer.tasks,
	itemsLeft: state.taskListReducer.itemsLeft,
});
const newItem = React.createRef();
const mapDispatchToProps = (dispatch) => ({
	newItem,
	handleKeyPress: (el) => {
		if (el.key === 'Enter') {
			const text = newItem.current.value;
			dispatch(AddItemAC(text));
			newItem.current.value = '';
		}
	},
});
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;

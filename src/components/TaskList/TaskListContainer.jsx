import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { changeTimeAC, deleteItemAC, editItemAC, labelClickAC } from '../redux/TaskList-reducer';
import TaskList from './TaskList';

const TaskListContainer = (props) => <TaskList {...props} />;

const mapStateToProps = (state) => ({
	tasks: state.taskListReducer.tasks,
	itemsLeft: state.taskListReducer.itemsLeft,
});

const mapDispatchToProps = (dispatch) => ({
	onEditItem: (action) => {
		dispatch(editItemAC(action));
	},
	onDeleteItem: (action) => {
		dispatch(deleteItemAC(action));
	},
	onLabelClicked: (action) => {
		dispatch(labelClickAC(action));
	},
	onChangeTime: (action) => {
		dispatch(changeTimeAC(action));
	},
});
export default compose(connect(mapStateToProps, mapDispatchToProps))(TaskListContainer);

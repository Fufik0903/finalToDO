import { formatDistanceToNowStrict } from 'date-fns';

const TYPE_DELETE_TASK = 'DELETE-TASK';
const TYPE_ONLABEL_CLICK = 'ONLABEL-CLICK';
const TYPE_CLEAR_COMPLETED_ITEMS = 'CLEAR-COMPLETED-ITEMS';
const TYPE_ADD_TASK = 'ADD-TASK';
const TYPE_EDIT_TASK = 'EDIT-TASK';
const TYPE_CHANGE_TIME_TASK = 'TYPE_CHANGE_TIME_TASK';

const initialState = {
	tasks: [
		{ text: 'Completed task', time: Date.now(), id: 1, completed: '', dateNow: null },
		{ text: 'Editing task', time: Date.now(), id: 2, completed: '', dateNow: null },
		{ text: 'Active task', time: Date.now(), id: 3, completed: '', dateNow: null },
	],
	itemsLeft: 3,
};
const taskListReducer = (state = initialState, action) => {
	const stateCopy = { ...state };
	const { tasks } = state;
	switch (action.type) {
		case TYPE_ADD_TASK: {
			const id = state.tasks.length + 1;
			const newTask = {
				text: action.text,
				id,
				completed: '',
				time: Date.now(),
				dateNow: null,
			};
			stateCopy.tasks = [...tasks];
			stateCopy.tasks.push(newTask);
			const itemsLeft = stateCopy.tasks.filter((item) => item.completed !== ' completed');
			return {
				tasks: stateCopy.tasks,
				itemsLeft: itemsLeft.length,
			};
		}
		case TYPE_DELETE_TASK: {
			const newTask = tasks.filter((item) => item.id !== action.task.id);
			stateCopy.tasks = [...newTask];
			const itemsLeft = stateCopy.tasks.filter((item) => item.completed !== ' completed');
			return {
				tasks: stateCopy.tasks,
				itemsLeft: itemsLeft.length,
			};
		}
		case TYPE_ONLABEL_CLICK: {
			const itemsLeft = stateCopy.tasks.filter((item) => item.completed !== ' completed');
			return {
				tasks: stateCopy.tasks,
				itemsLeft: itemsLeft.length,
			};
		}
		case TYPE_CLEAR_COMPLETED_ITEMS: {
			const newTasks = tasks.filter((item) => item.completed !== ' completed');
			stateCopy.tasks = [...newTasks];
			return {
				tasks: stateCopy.tasks,
				itemsLeft: stateCopy.tasks.length,
			};
		}
		case TYPE_EDIT_TASK: {
			const newTasks = tasks.map((item) =>
				item.id === action.text.id.item.id ? { ...item, text: action.text.text } : item
			);
			stateCopy.tasks = [...newTasks];
			return {
				tasks: stateCopy.tasks,
				itemsLeft: stateCopy.tasks.length,
			};
		}
		case TYPE_CHANGE_TIME_TASK: {
			const newTasks = tasks.map((item) =>
				item.time ? { ...item, dateNow: formatDistanceToNowStrict(item.time, { addSuffix: true }) } : item
			);
			stateCopy.tasks = [...newTasks];
			return {
				tasks: stateCopy.tasks,
				itemsLeft: stateCopy.tasks.length,
			};
		}
		default:
			return state;
	}
};
export const deleteItemAC = (task) => ({ task, type: TYPE_DELETE_TASK });
export const changeTimeAC = () => ({ type: TYPE_CHANGE_TIME_TASK });
export const labelClickAC = (task) => ({ task, type: TYPE_ONLABEL_CLICK });
export const clearCompletedAC = (tasks) => ({ tasks, type: TYPE_CLEAR_COMPLETED_ITEMS });
export const AddItemAC = (text) => ({ text, type: TYPE_ADD_TASK });
export const editItemAC = (text) => ({ text, type: TYPE_EDIT_TASK });
export default taskListReducer;

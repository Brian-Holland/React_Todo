import React, { Component } from 'react';
import Todo from './Todo';

export class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [ { task: 'Code' }, { task: 'Build Porject' } ]
		};
	}
	render() {
		const todos = this.state.todos.map((todo) => {
			return <Todo task={todo.task} />;
		});
		return (
			<div>
				<h1>My ToDo List</h1>
				<ul>{todos}</ul>
			</div>
		);
	}
}

export default ToDoList;

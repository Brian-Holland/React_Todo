import React, { Component } from 'react';

export class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
	}
	render() {
		return (
			<form>
				<label htmlFor="task">New Todo</label>
				<input type="text" placeholder="New Todo" id="task" />
			</form>
		);
	}
}

export default NewTodoForm;

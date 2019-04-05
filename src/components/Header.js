import React from 'react';
import Button from './Button';
import Input from './Input';

const Header = (props) => {
	let {inputHandler, clickHandler, taskValue} = props
	return (
		<div className="card">
			<h1 className="title">To Do List</h1>
			<Input inputHandler={inputHandler} taskValue={taskValue} />
			<Button clickHandler={clickHandler} children='Add' />
		</div>
	)
}

export default Header;
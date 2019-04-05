import React from 'react';

const Input = (props) => {
	let {inputHandler, taskValue} = props
	return (
		<input type="text" placeholder="New task.." className="input" value={taskValue} onChange={inputHandler} />
	)
}

export default Input;
import React from 'react';

const ButtonRemove = (props) => {
	return (
		<button type="button" className="buttonRemove" onClick={props.clickHandler} >
				x
		</button>
	)
}

export default ButtonRemove;
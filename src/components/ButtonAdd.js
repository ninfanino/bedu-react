import React from 'react';

const ButtonAdd = (props) => {
	return (
		<button type="button" className="buttonAdd" onClick={props.clickHandler} >
				{
					props.nameButton ? '-' : '+' 
				}
		</button>
	)
}

export default ButtonAdd;
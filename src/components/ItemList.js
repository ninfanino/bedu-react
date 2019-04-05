import React from 'react';
import ButtonAdd from './ButtonAdd';
import ButtonRemove from './ButtonRemove';

const ItemList = (props) => {
	let {listName, removeItemFromList, checkItemFromList} = props
	
	return (
		<div className="itemList ">
			<div className="nameTask">
				{
					listName.completed ? <span>{listName.task}</span> : listName.task
				}
				
			</div>

			<ButtonAdd clickHandler={checkItemFromList} nameButton={listName.completed} />
			<ButtonRemove clickHandler={removeItemFromList} />
		</div>
	)
}

export default ItemList;
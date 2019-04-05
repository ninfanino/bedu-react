import React from 'react';
import ItemList from './ItemList';

const Content = (props) => {
	let { listItems, removeItemFromList, checkItemFromList } = props

	let listContent = listItems.map((item, index) => {
		return (
			<ItemList key={index} listName={item} removeItemFromList={() => {removeItemFromList(index)}} checkItemFromList={() => {checkItemFromList(index)}} />
		)
	});

	return (
		<div className="tasksContainer">
			{listContent}
		</div>
	)
}

export default Content;
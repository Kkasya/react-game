import React from 'react';

const ItemSetting = ({label, elem}) => {
	return (
		<div className="list-group flex-r" >
			<h3 className="setting-item" >{label}: </h3 >
			<div className="" >
				{elem}
			</div >
		</div >
	)
};

export default ItemSetting;
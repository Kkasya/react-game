import React from 'react';

import '../menu.css';
import '../../app/App.css'

const ItemMenu = ({title, operation}) => {
  return (
      <button className="btn btn-success btn-lg btnShadow"
              onClick={operation}>
        {title}
      </button>
  )
};
    export default ItemMenu;
import React from 'react';

import '../menu.css';

const ItemSettings = ({title, operation}) => {
  return (
      <button className="btn btn-success btn-lg"
              onClick={operation}>
        {title}
      </button>
  )
};
    export default ItemSettings;
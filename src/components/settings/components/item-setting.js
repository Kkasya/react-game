import React from 'react';

import '../settings.css';

const ItemSettings = ({title, operation}) => {
  return (
      <button className="btn btn-success btn-lg"
              onClick={operation}>
        {title}
      </button>
  )
};
    export default ItemSettings;
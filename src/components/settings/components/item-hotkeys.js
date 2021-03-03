import React from "react";

const ItemHotkeys = ({hKey, action}) => {
  return (
    <div>
      <span className='hot-key'>{hKey}</span>
      <span className='action'>{action}</span>
    </div>
  )
};

export default ItemHotkeys;
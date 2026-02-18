import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';

const Collection = () => {
  const {products}= useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex item-center cursor-pointer gap-2">FILTERS</p>
      </div>
      
    </div>
  )
}

export default Collection

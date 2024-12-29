import ItemList from "./ItemList";

import {useState} from 'react'

          const RestaurantCategory=({data,showitem,setshowindex})=>{
            
            const handleclick=()=>{
                setshowindex()
            }
    return(
        <div className="" >
            <div className="bg-gray-50 shadow-lg w-6/12 mx-auto p-5 my-4 " onClick={handleclick}>
            <div className="flex justify-between cursor-pointer">
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span className="">⬇️</span>
            </div>
              { showitem && <ItemList items={data.itemCards}/>}
            </div>
          
        </div>
    )
}
export default RestaurantCategory;
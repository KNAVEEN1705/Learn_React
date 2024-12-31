import { useDispatch } from "react-redux";
import { CON_URL } from "./utills/constants.";
import { addItem } from "./utills/cartSlice";
const ItemList=({items})=>{
   console.log("x",items)
   const dispatch= useDispatch();
   const handlClick=(items)=>{
    dispatch(addItem(items))
   }
    return(
        <div className="">
        {items.map((item)=>(<div key={item.card.info.id}
        className="border-b-2 border-gray-200 p-2 m-2 flex">
           
          <div className="w-9/12">
            <div className="">
            <span className="font-medium">{item.card.info.name}</span>
            <span> - ₹ {item.card.info.price/100 ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
            </div>  
            <p>{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-4 my-[90] w-20 bg-white shadow-lg rounded-lg text-black font-medium"onClick={()=>handlClick(item)}>Add  +</button>
            </div>
            <img src={CON_URL+item.card.info.imageId} className="w-28 object-contain  rounded-lg "/>
            </div>
            
        </div>)) }
        </div>
    )
}
export default ItemList;
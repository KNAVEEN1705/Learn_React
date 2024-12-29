
import { useParams } from 'react-router-dom';
import useRestaurantMenu from './utills/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';
const RestaurantMenu = () => {
    
    const {resID}=useParams();

    const restaurant = useRestaurantMenu(resID);
    // console.log(resID)
    
    const [showindex,setshowindex]=useState()

    // Safely destructure after ensuring the data exists
    const restaurantInfo = restaurant?.cards?.[2]?.card?.card?.info || {};
    const { name, cuisines, city, costForTwoMessage,locality} = restaurantInfo;

    // Safely access menu data
    const menu = restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.itemCards || [];

     const category = Array.isArray(restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        ? restaurant.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
            (c) => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
        : [];
    // console.log("cat",category);
    return (
      <div  >
        <div className='  border shadow-lg rounded-lg mx-80  p-6 px-4 w-6/12 justify-center'>
          <p className='font-bold text-xl'>{name}</p>
          <p className='font-bold text-xl'>{Array.isArray(cuisines) ? cuisines.join(", ") : "No cuisines available"}</p>
          <span className='font-bold text-xl'>Outlet</span> <span className='font-sans text-xl'>{city},{locality}</span>
        </div>
        {
          category.map((categories,index)=><RestaurantCategory key={categories?.card?.title}data ={categories ?.card?.card}
          showitem={index === showindex ? true : false}
          setshowindex={()=>setshowindex(index)}
          />)
        }
      </div>
    )
  }
export default RestaurantMenu;

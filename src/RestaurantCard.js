import React from 'react';
import { CON_URL } from './utills/constants.';

const RestaurantCard = ({ resData }) => {
  // Destructure data from the resData prop
  const { name, cuisines, avgRating, costForTwo ,cloudinaryImageId
  } = resData.info;

  console.log("RestaurantCard Props: ", { name, cuisines, avgRating, costForTwo });
  return (
    <div className="border-2 p-4 rounded-md shadow-md w-64 h-80 m-4  ">
      <img src={CON_URL+cloudinaryImageId} className='w-full h-32 object-cover mb-4 rounded-md'/>
      <h2 className="text-lg font-bold mb-2 truncate">{name}</h2>
      <p className="text-sm text-gray-700 mb-1 truncate">Cuisines: {cuisines.join(', ')}</p>
      <p className="text-sm text-gray-700 mb-1">Rating: {avgRating}</p>
      <p className="text-sm text-gray-700 mb-1">Cost for Two: {costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;

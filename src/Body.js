import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
import useOnlineStatus from './utills/useOnlineStatus';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [originalRestaurantList, setOriginalRestaurantList] = useState([]);



  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165167&lng=79.13249859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      console.log(restaurants)
      setRestaurantList(restaurants);
      setOriginalRestaurantList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterHighRatedRestaurants = () => {
    const filteredData = originalRestaurantList.filter(
      (res) => res.info?.avgRating > 4.5
    );
    setRestaurantList(filteredData);
  };
  if(onlineStatus===false) return (<h1>Opps!! You are in offline Please Check Your Connection</h1>)

  return (
    <div className="">
      <h1 className="text-center font-mono text-3xl font-bold p-4">Restaurants</h1>
      <div className='res-container'>
        <div className='justify-self-start'>
          <button className='rounded-full border-2  pl-2  py-2 px-4 m-4 font-mono text-cyan-400 font-bold bg-white'
           onClick={filterHighRatedRestaurants}>
            Top-Rated Restaurants
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
        {restaurantList.map((restaurant) => (
          <Link 
            key={restaurant.info.id} 
            to={`/restaurant/${restaurant.info.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

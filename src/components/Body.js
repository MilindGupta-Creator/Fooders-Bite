import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline"

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant , setFilteredRestaurant] = useState([]);

  useEffect(()=>{
    // API Call
    getRestaurant();
   
  },[]);

  async function getRestaurant(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isonline= useOnline();

  if(!isonline){
    return <h1> 🔴🟥🔴You are Offline , Check your Internet connection please...</h1>
  }

 // not render the components
 if(!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
        <Shimmer />
 ) :(
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
      to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
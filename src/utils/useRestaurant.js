import { useState,useEffect } from "react";

const useRestaurant = (ids)=>{
    
    const [restaurant, setRestauraunt] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
      },[]);
    
      async function getRestaurantInfo() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
          + ids
        );
        const json = await data.json();
        setRestauraunt(json.data);
    
        console.log(json)
      }

      return restaurant;
      
};

export default useRestaurant;
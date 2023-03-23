import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (ids) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + ids);
    const json = await data.json();
    setRestauraunt(json.data);

    console.log(json);
  }

  return restaurant;
};

export default useRestaurant;

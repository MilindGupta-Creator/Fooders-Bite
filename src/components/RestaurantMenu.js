import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { ids } = useParams();

  const restaurant = useRestaurant(ids);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="left">
        <h5>Restraunt id:' {ids} '</h5>
        <h3>Restaurant Name: {restaurant.cards[0].card.card.info.name}</h3>
        <br />
        <img
          alt=" "
          src={
            IMG_CDN_URL + restaurant.cards[0].card.card.info.cloudinaryImageId
          }
        />
        <h3>Serving City: {restaurant.cards[0].card.card.info.city}</h3>
        <h3>
          Average Rating : {restaurant.cards[0].card.card.info.avgRating}⭐
        </h3>
      </div>
      <div className="right">
        <h2>Cuisines : </h2>
        <ul className="listitems" style={{ listStyleType: "none" }}>
          {Object.values(restaurant.cards[0].card.card.info.cuisines).map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
        <br />
        <h3>
          Delivery Time : {restaurant.cards[0].card.card.info.sla.deliveryTime}{" "}
          min
        </h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;

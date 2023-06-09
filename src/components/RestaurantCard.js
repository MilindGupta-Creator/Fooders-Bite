import { IMG_CDN_URL } from "../constants";
// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <div className="allitems">
        <h2>{name}</h2>
        <h5>{cuisines.join(", ")}</h5>
        <h6>{area}</h6>
        <span>
          <h4>{avgRating}</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;

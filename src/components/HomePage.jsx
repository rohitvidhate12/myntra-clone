import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "./Slices/BagSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const Data = useSelector((store) => store.item.items);

  const bagItem = useSelector((store) => store.bag.items);

  const isAddedToBag = (item) => {
    return bagItem.includes(item.id);
  };

  const handleAdd = (item) => {
    dispatch(addToBag(item.id));
  };

  const handleRemove = (item) => {
    dispatch(removeFromBag(item.id));
  };

  return (
    <>
      <div className="banner">
        <img
          className="banner-img"
          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202109/242473827_10160157467293221_2645921924837005982_n-sixteen_nine.jpg?size=948:533"
          alt=""
        />
      </div>
      <h2 className="category">SHOP BY CATEGORY</h2>
      <div className="items-container">
        {Data.map((item, i) => (
          <div key={i} className="item-container">
            <img className="item-image" src={item.image} alt="" />
            <div className="rating">
              {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                ({item.discount_percentage}% OFF)
              </span>
            </div>
            {isAddedToBag(item) ? (
              <button
                type="button"
                className="btn-remove"
                onClick={() => handleRemove(item)}
              >
                <AiFillDelete /> Remove
              </button>
            ) : (
              <button
                type="button"
                className="btn-add"
                onClick={() => handleAdd(item)}
              >
                <GrAddCircle /> Add to Bag
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;

import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

const Bag = () => {
  const bag = useSelector((store) => store.bag.items);
  const items = useSelector((store) => store.item.items);

  const finalItems = items.filter((item) => {
    return bag.includes(item.id);
  });

  return (
    <div className="bag-page">
      {finalItems.map((item, i) => (
        <BagItem item={item} key={i} />
      ))}
      <BagSummary />
    </div>
  );
};

export default Bag;

/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../button";
import { addItem } from "../../redux/actions/action";
import { toast } from "sonner";

const ProductCard = ({ element }) => {
  const { title, category, image, price } = element;
  const dispatch = useDispatch();

  const send = (e) => {
    console.log(e);
    dispatch(addItem(e));
    toast.success("Added to card");
  };
  return (
    <div className="border border-gray-200 flex flex-col">
      <div className="text-center border-b border-gray-200">
        <img
          className="inline-block h-80"
          src={image}
          alt="Wireless Headphone"
        />
      </div>
      <div className="p-4 h-full flex flex-col">
        <div className="mb-2">
          <p className="text-gray-500 text-[14px] font-medium">{category}</p>
          <h2 className="font-medium">{title}</h2>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <h2 className="font-medium text-[#4B9EFF] text-xl">₹ {price}</h2>
          <Button title="Add To Cart" onClick={() => send(element)} showIcon/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

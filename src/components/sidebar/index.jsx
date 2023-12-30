/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import imgGif from "../../assets/cart.gif";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/actions/action";

const Sidebar = ({ toggle, toggleHandler, getData }) => {
  const [price, setPrice] = useState(0);
  const dispath = useDispatch();
  const total = () => {
    let price = 0;
    getData.map((ele, _) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);
  const makePayment = () => {
    console.log("makePayment");
  };
  const removeItem = (id) => {
    dispath(deleteItem(id));
  };

  return (
    <div
      className={`bg-slate-100 fixed right-0 top-0 w-80 transition-all duration-500 z-50 h-full p-3 ${
        toggle ? " translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b pb-2">
        <p className="text-lg font-medium">Your Cart</p>
        <button
          onClick={toggleHandler}
          className="bg-primary size-9 rounded-full text-white"
        >
          X
        </button>
      </div>
      {getData.length ? (
        <div>
          <div className="h-[700px] overflow-y-auto">
            {getData.map((item, i) => {
              const { id, title, category, quantity, price, image } = item;
              return (
                <div key={i}>
                  <div className="flex items-start gap-2 border-b-2 mb-2 py-2">
                    <img src={image} className="size-16 min-w-16" alt="" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-sm text-slate-400">
                            {category}
                          </span>
                          <p className="text-sm font-medium">{title}</p>
                          <p>Quantity : {quantity}</p>
                        </div>{" "}
                        <button
                          className="bg-white text-sm size-6 rounded-full min-w-6"
                          onClick={() => removeItem(id)}
                        >
                          x
                        </button>
                      </div>
                      <span className="text-sm text-slate-900 font-bold block text-right w-full">
                        ₹ {price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sticky top-full p-2">
            <div className="flex items-center justify-between p-2 rounded-md bg-primary mb-2">
              <p className="text-lg font-medium">Total:</p>
              <p className="text-lg font-medium">₹ {price}</p>
            </div>
            <button
              className="bg-primary rounded-md p-2 mb-3 text-lg font-medium text-white"
              onClick={makePayment}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <div>
            <div className="bg-white m-auto rounded-full size-20 flex items-center">
              <img src={imgGif} alt="" className="size-14 mx-auto" />
            </div>
            <p className="text-lg mt-2">Your carts is empty</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

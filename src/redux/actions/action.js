export const addItem = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// remove items
export const deleteItem = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

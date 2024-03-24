export const getDishById = async (id) => {
  // You can fetch data from your server here
  await sleep(200);
  const dish = dishesData.find((dish) => dish.id == id);
  return dish;
};

export const getOrderById = async (id) => {
  // You can fetch data from your server here
  await sleep(200);
  return orderHistoryData.find((order) => order.id == id);
};
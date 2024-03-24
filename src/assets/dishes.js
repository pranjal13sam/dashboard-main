import {
  burger1IconCategoryImg,
  burgerImg,
  coffeeBanner2Img,
  cupIconCategoryImg,
  hotChocolateImg,
  noodlesBanner2Img,
  noodlesIconCategoryImg,
  noodlesImg,
  pizzaBanner1Img,
  pizzaIconCategoryImg,
  pizzaImg,
  redVelvetPastryImg,
  spaghettiImg,
} from "./images.js";

const categoriesData = [
  {
    id: 1,
    name: "Coffee",
    image: cupIconCategoryImg,
  },
  {
    id: 2,
    name: "Burger",
    image: burger1IconCategoryImg,
  },
  {
    id: 3,
    name: "Noodles",
    image: noodlesIconCategoryImg,
  },
  {
    id: 4,
    name: "Pizza",
    image: pizzaIconCategoryImg,
  },
];

const specialMenuData = [
  {
    id: 102,
    category_id: 1,
    name: "Espresso Coffee",
    price: 40.14,
    images: [coffeeBanner2Img],
    type: "veg",
    tags: ["Beverages", "Coffee"],
    quantity: 34,
    review: {
      count: 680,
      stars: 5,
    },
    is_popular: true,
  },
  {
    id: 110,
    category_id: 3,
    name: "Spaghetti",
    price: 23,
    images: [noodlesBanner2Img],
    type: "veg",
    tags: ["Noodles", "Hot & Spicy", "Meal"],
    quantity: 10,
    review: {
      count: 6667,
      stars: 4.5,
    },
  },
  {
    id: 113,
    category_id: 4,
    name: "Italian Pizza",
    price: 79,
    images: [pizzaBanner1Img],
    type: "non-veg",
    tags: ["Pizza", "Hot & Spicy", "Meal", "Bread"],
    quantity: 16,
    review: {
      count: 231,
      stars: 4.5,
    },
  },
].map((dish) => {
  return {
    ...dish,
    category: categoriesData[dish.category_id - 1],
  };
});

const dishesData = [
  {
    id: 1001,
    category_id: 4,
    restaurant_id: 901,
    name: "Italian Pizza",
    images: [pizzaImg],
    price: 79,
    type: "non-veg",
    tags: ["Pizza", "Hot & Spicy", "Meal", "Bread"],
    quantity: 16,
    review: {
      count: 231,
      stars: 4.5,
    },
    sale: {
      discount: 50,
      type: "percent",
    },
    is_popular: true,
  },
  {
    id: 1002,
    category_id: 2,
    restaurant_id: 902,
    name: "Veg Burger",
    price: 488,
    images: [burgerImg],
    type: "veg",
    tags: ["Burger", "Meal", "Bread"],
    quantity: 20,
    review: {
      count: 523,
      stars: 5,
    },
    sale: {
      discount: 5,
      type: "amount",
    },
    is_popular: true,
  },
  {
    id: 1003,
    category_id: 3,
    restaurant_id: 903,
    name: "Spaghetti",
    price: 23,
    images: [noodlesImg],
    type: "veg",
    tags: ["Noodles", "Hot & Spicy", "Meal"],
    quantity: 10,
    review: {
      count: 6667,
      stars: 4.5,
    },
    is_popular: true,
  },
  {
    id: 1004,
    category_id: 7,
    restaurant_id: 904,
    name: "Red Velvet Cake",
    price: 350,
    images: [redVelvetPastryImg],
    type: "veg",
    tags: ["Sweeties", "Finishers", "Dessert"],
    quantity: 230,
    review: {
      count: 6667,
      stars: 4.5,
    },
    sale: {
      discount: 12,
      type: "amount",
    },
    is_popular: true,
  },
  {
    id: 1005,
    category_id: 6,
    restaurant_id: 905,
    name: "Mix Salad",
    price: 645.2,
    images: [spaghettiImg],
    type: "non-veg",
    tags: ["Meal", "Hot & Spicy"],
    quantity: 0,
    review: {
      count: 4325,
      stars: 5,
    },
  },
  {
    id: 1006,
    category_id: 1,
    restaurant_id: 906,
    name: "Espresso Coffee",
    price: 419.45,
    images: [hotChocolateImg],
    type: "veg",
    tags: ["Beverages", "Coffee"],
    quantity: 23,
    review: {
      count: 1055,
      stars: 5,
    },
  },
].map((dish) => {
  return {
    ...dish,
    category: categoriesData[dish.category_id - 1],
  };
});

export {categoriesData, specialMenuData, dishesData};
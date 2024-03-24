import {
  avatar1Img,
  avatar2Img,
  avatar3Img,
  avatar4Img,
  avatar5Img,
} from "./images.js";
import { subtractHours } from "../utils/manipulate-date.js";

const orderHistoryData = [
  {
    date: "12/03/2022",
    id: "#c0e4f7",
    amount: 359.69,
    status: "refunded",
    dish_id: 1001,
  },
  {
    date: "04/25/2023",
    id: "#12939f",
    amount: 350.3,
    status: "paid",
    dish_id: 1002,
  },
  {
    date: "06/20/2023",
    id: "#9f36ca",
    amount: 67.99,
    status: "cancelled",
    dish_id: 1003,
  },
  {
    date: "03/02/2023",
    id: "#a657a0",
    amount: 21.49,
    status: "paid",
    dish_id: 1005,
  },
  {
    date: "05/05/2023",
    id: "#8cd211",
    amount: 463.61,
    status: "refunded",
    dish_id: 1004,
  },
  {
    date: "06/07/2023",
    id: "#5191a8",
    amount: 333.31,
    status: "refunded",
    dish_id: 1006,
  },
  {
    date: "08/23/2023",
    id: "#6af783",
    amount: 391.0,
    status: "paid",
    dish_id: 1007,
  },
  {
    date: "05/02/2023",
    id: "#a6c5aa",
    amount: 150.63,
    status: "paid",
    dish_id: 1008,
  },
  {
    date: "05/22/2023",
    id: "#b07041",
    amount: 24.81,
    status: "cancelled",
    dish_id: 1009,
  },
  {
    date: "04/13/2023",
    id: "#94516a",
    amount: 72.21,
    status: "paid",
    dish_id: 1010,
  },
];

const analyticsOverviewData = [
  {
    name: "Total Revenue",
    amount: 325684,
    change: "10% Increase",
  },
  {
    name: "New Orders",
    amount: 2560,
    change: "50% Increase",
  },
  {
    name: "Received Orders",
    amount: 12560,
    change: "34% Increase",
  },
  {
    name: "Reviews",
    amount: 476,
    change: "5% Decrease",
  },
  {
    name: "New Reach",
    amount: 865,
    change: "48% Increase",
  },
  {
    name: "Successful Orders",
    amount: 9165,
    change: "8% Decrease",
  },
];

const orderProgressData = {
  waiting: [
    {
      order_id: "#c0e4f7",
      time: "6.25 AM",
    },
    {
      order_id: "#12939f",
      time: "6.25 AM",
    },
  ],
  cooking: [
    {
      order_id: "#9f36ca",
      time: "6.25 AM",
    },
    {
      order_id: "#94516a",
      time: "6.25 AM",
    },
  ],
  packed: [
    {
      order_id: "#5191a8",
      time: "08.30 PM",
    },
  ],
};

const notificationsData = [
  {
    id: 1,
    name: "Datacorp",
    avatar: avatar1Img,
    subText: "Caleb Flakelar commented on Admin",
    createdAt: subtractHours(new Date(), 1),
  },
  {
    id: 2,
    name: "Admin",
    avatar: avatar2Img,
    subText: "New user registered",
    createdAt: subtractHours(new Date(), 60),
  },
  {
    id: 3,
    name: "Cristina Pride",
    subText: "Hi, How are you? What about our next meeting",
    avatar: avatar3Img,
    createdAt: subtractHours(new Date(), 120),
  },
  {
    id: 4,
    name: "Datacorp",
    avatar: avatar4Img,
    subText: "Caleb Flakelar commented on Admin",
    createdAt: subtractHours(new Date(), 1440),
  },
  {
    id: 5,
    name: "Karen Robinson",
    subText: "Wow ! this admin looks good and awesome design",
    avatar: avatar5Img,
    createdAt: subtractHours(new Date(), 1820),
  },
];

export {
  orderHistoryData,
  analyticsOverviewData,
  orderProgressData,
  notificationsData,
};

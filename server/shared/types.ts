export type ProductProps = {
  userId: string;
  name: string;
  category: string;
  podCategory: string
  seller: string;
  stock: number;
  price: number;
  oldPrice?: number;
  description: string;
  event?: string;
  orders: number;
  images: string[];
  reviews?: Reviews[];
  lastUpdated: Date;
};

export type Reviews = {
  userId: string;
  ratingStars: number;
  date: Date;
  description: string;
  pictures?: string[];
};

export type UserType = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: number;
  adress: string;
  gender: string;
  role: string;
  myReviews?: Reviews[];
  myOrders?: ProductProps[];
};

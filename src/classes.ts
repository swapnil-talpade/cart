export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface State {
  product?: Product[];
  cart?: Product[];
}

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  GET_PRODUCTS = "GET_PRODUCTS",
}

export interface Action {
  type: ActionTypes;
  payload?: any;
}

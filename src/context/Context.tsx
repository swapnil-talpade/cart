import React, { createContext, useEffect, useReducer, useContext } from "react";
import { ActionTypes, Product, State } from "../classes";
import { cartReducer } from "./reducer";

const Cart = createContext({});

const Context = ({ children }: any) => {
  const getProducts = async () => {
    const { products } = await (
      await fetch("https://dummyjson.com/products")
    ).json();
    dispatch({ type: ActionTypes.GET_PRODUCTS, payload: products });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: [] as Product[],
    cart: [] as Product[],
  } as State);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};

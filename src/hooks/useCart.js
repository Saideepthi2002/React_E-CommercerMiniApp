import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useCallback } from "react";

export function useCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const add = useCallback((product)=>{dispatch(addToCart(product))},[dispatch])

  return { cart, add };
}

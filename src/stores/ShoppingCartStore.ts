import create from "zustand";
import { IProduct } from "@/types";


interface ShoppingCart {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
}

const useShoppingCartStore = create<ShoppingCart>((set) => ({
  products: [],
  addProduct: (product: IProduct) => {
    set(state => ( { products: [...state.products, product]} ))
  }
}))

export default useShoppingCartStore;
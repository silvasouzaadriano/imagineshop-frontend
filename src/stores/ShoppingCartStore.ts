import create from "zustand";
import { IProduct } from "@/types";


interface ShoppingCart {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  deleteProduct: (id: string) => void;
  getTotalValue: () => string;
  getTotalProducts: () => string;
  getShippingValue: () => string;
}

const ShippingValue = 100;

const useShoppingCartStore = create<ShoppingCart>((set, get) => ({
  products: [],
  addProduct: (product: IProduct) => {
    const products = get().products;
    const productAlreadyExists = products.find(prod => prod._id === product._id);
    if (productAlreadyExists) return;
    set(state => ( { products: [...state.products, product]} ))
  },
  deleteProduct: (id: string): void => {
    const products = get().products;
    const newProducts = products.filter(product => product._id !== id);
    set(state => ({ products: newProducts }))
  },
  getTotalProducts: (): string => {
    const products = get().products;
    const total = products.reduce((acc, cur) => acc + cur.price, 0);
    return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(total);
  },
  getTotalValue: (): string => {
    const products = get().products;
    const total = products.reduce((acc, cur) => acc + cur.price, 0);
    return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(total + ShippingValue);
  },
  getShippingValue: (): string => {
    return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(ShippingValue);
  }
}))

export default useShoppingCartStore;
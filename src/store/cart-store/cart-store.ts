import { Product } from '@/components/products/Product';
import { create } from 'zustand';

interface ProductInCart {
  product: Product;
  quantity: number;
}

interface State {
  productsInCart: ProductInCart[];
  addToCart: (product: Product) => void;
  deleteFromCart: (productId: number) => void;
}

export const cartStore = create<State>((set) => ({
  productsInCart: [],
  addToCart: (product: Product) =>
    set((state) => {
      const existingProduct = state.productsInCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingProduct) {
        const updatedCart = state.productsInCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );

        return { productsInCart: updatedCart };
      } else {
        return {
          productsInCart: [...state.productsInCart, { product, quantity: 1 }],
        };
      }
    }),
  deleteFromCart: (productId: number) =>
    set((state) => ({
      productsInCart: state.productsInCart.filter(
        (item) => item.product.id !== productId,
      ),
    })),
}));

import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
import AuthSlicer from "./AuthSlicer";
import SliderSlicer from "./SliderSlicer";
import FavoritesSlicer from "./FavoritesSlicer";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSlice,
    Auth: AuthSlicer,
    Slider: SliderSlicer,
    Favorites: FavoritesSlicer,
  },
});

export default Store;

// what is reducer here: it is a single function. it will be directly used on the root reducer for the store.
//  when there is one slice it work as root reducer.
//  and when there is multiple slice then it will work as combine reducer.

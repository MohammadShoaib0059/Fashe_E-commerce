import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const CartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      // state.cart.push(action.payload);
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
        toast.info('Product already added',{
          position:"bottom-left"
        });
      } else {
        state.cart.push(action.payload);
        toast.success('Product added successfully',{
          position:"bottom-left"
        });
      }
    },
    remove(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    // increaseItemQuantity: (state, action) => {
    //   const existingIndex = state.cart.findIndex(
    //     (item) => item.id === action.payload.id
    //   );

    //   if (existingIndex ) {
    //     state.totalQuantity[existingIndex] = {
    //       ...state.cart[existingIndex],
    //       cartQuantity: state.cart[existingIndex].cartQuantity + 1,
    //     };
    //     state.totalQuantity.push(state.cart[existingIndex])
    //     console.log(state.cart[existingIndex]);
    //     toast.info("Increased product quantity", {
    //       position: "bottom-left",
    //     });
    //   }
    //   // state.cart = state.cart.map((item) => {
    //   //   if (item.id === action.payload) {
    //   //     return { ...item, quantity: item.quantity + 1 };
    //   //   }
    //   //   return item;
    //   // });
    // },
    // decreaseItemQuantity: (state, action) => {
    //   const ItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
    //   if (state.cart[ItemIndex].cartQuantity > 1) {
    //     state.cart[ItemIndex].cartQuantity -= 1;

    //     toast.info("Decreased product quantity", {
    //       position: "bottom-left",
    //     });
    //   } else if (state.cart[ItemIndex].cartQuantity === 1) {
    //     const nextCartItems = state.cart.filter(
    //       (item) => item.id !== action.payload.id
    //     );
    //     state.cart = nextCartItems;

    //     toast.error("Product removed from cart", {
    //       position: "bottom-left",
    //     });
    //   }

    //   localStorage.setItem("cart", JSON.stringify(state.cart));
    //   // state.cart = state.cart.map((item) => {
    //   //   if (item.id === action.payload) {
    //   //     return { ...item, quantity: item.quantity - 1 };

    //   //   }
    //   //   return item;
    //   // });
    // },
    // getCartTotal: (state) => {
    //   let { totalQuantity, totalPrice } = state.cart.reduce(
    //     (cartTotal, cartItem) => {
    //       console.log("carttotal", cartTotal);
    //       console.log("cartitem", cartItem);
    //       const { price, quantity } = cartItem;
    //       console.log(price, quantity);
    //       const itemTotal = price * quantity;
    //       cartTotal.totalPrice += itemTotal;
    //       cartTotal.totalQuantity += quantity;
    //       return cartTotal;
    //     },
    //     {
    //       totalPrice: 0,
    //       totalQuantity: 0,
    //     }
    //   );
    //   state.totalPrice = parseInt(totalPrice.toFixed(2));
    //   state.totalQuantity = totalQuantity;
    // },
    increaseItemQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity += 1;
        // state.totalQuantity += 1 + 1;
        state.totalQuantity = state.cart.reduce((total, item) => {
          return total + item.quantity;
        }, 0);
        state.totalPrice = state.cart.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
        
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);
    
      if (itemIndex !== -1) {
        if (state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity -= 1;
          state.totalQuantity = state.cart.reduce((total, item) => {
            return total + item.quantity;
          }, 0);
          state.totalPrice = state.cart.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0);
        } else {
          state.cart.quantity;
          toast.warning('Quantity Can not be less than 1',{
            position:"bottom-left"
          });
        }
      }
    },
    getCartTotal: (state) => {
      state.totalPrice = state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    
      state.totalQuantity = state.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
        
  },
});

export const { add, remove,increaseItemQuantity,decreaseItemQuantity,getCartTotal } = CartSlicer.actions;
export default CartSlicer.reducer;

// A function that accepts 'slice name' is called Slice. its is the function that contain object
//  with some properties like(name,initialstate,reducer).it can contain multiple micro reducer function.
// it automatically generates action creators and action type that correspond to the reducers and state.

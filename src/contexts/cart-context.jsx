import React, { useReducer, createContext, useState } from "react";

const initialCart = {
  items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.items.find((item) => item.id === action.item.id)) {
        const updatedItems = state.items.map((item) => {
          if (item.id === action.item.id) {
            return {
              ...item,
              quantity: action.quantity,
            };
          }
          return item;
        });
        return {
          items: updatedItems,
        };
      }

      if (state.items.length >= 9) {
        return state;
      }

      return {
        items: [...state.items, { ...action.item, quantity: action.quantity }],
      };
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "CLEAR_CART":
      return {
        items: [],
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(reducer, initialCart);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const addItemToCart = (item, quantity) => {
    dispatchCartAction({ type: "ADD_ITEM", item, quantity });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const clearCart = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addItemToCart,
        removeItemFromCart,
        isCartVisible,
        setIsCartVisible,
        clearCart,
        isOrderOpen,
        setIsOrderOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

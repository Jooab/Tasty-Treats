import {
  CartContainer,
  CartProductsList,
  ProductThumbnail,
  EmptyCartImage,
  CartTitle,
  ProductImageName,
  ConfirmButton,
  ProductQuantityPrice,
  ProductQuantity,
  ProductPrice,
  ProductTotalPrice,
  ProductName,
  ItensTotalPrice,
  StyledTotal,
  StyledTotalPrice,
} from "./css";
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";
import { RemoveFromCartButton } from "../removeFromCartButton";

export const Cart = () => {
  const { cartState, isCartVisible, isOrderOpen, setIsOrderOpen } =
    useContext(CartContext);

  const totalQuantity = cartState.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartState.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartState.items.length === 0) {
    return (
      <CartContainer
        style={{
          display: isCartVisible ? "flex" : "none",
          alignItems: cartState.items.length === 0 ? "center" : "flex-start",
        }}
      >
        <EmptyCartImage src="./images/empty-cart.svg" alt="cart" />
        <p>Your cart is empty</p>
      </CartContainer>
    );
  } else {
    return (
      <CartContainer style={{ display: isCartVisible ? "flex" : "none" }}>
        <CartTitle>Your Cart ({totalQuantity})</CartTitle>
        <CartProductsList>
          {cartState.items.map((item, index) => (
            <li key={index}>
              <ProductImageName>
                <ProductThumbnail src={item.image} alt={item.name} />
                <ProductName>{item.name}</ProductName>
              </ProductImageName>
              <ProductQuantityPrice>
                <ProductQuantity>{item.quantity}x</ProductQuantity>
                <ProductPrice>${item.price}</ProductPrice>
                <ProductTotalPrice>
                  ${item.price * item.quantity}
                </ProductTotalPrice>
              </ProductQuantityPrice>
              <RemoveFromCartButton itemId={item.id}></RemoveFromCartButton>
            </li>
          ))}
        </CartProductsList>
        <ItensTotalPrice>
          <StyledTotal>Total: </StyledTotal>
          <StyledTotalPrice>${totalPrice}</StyledTotalPrice>
        </ItensTotalPrice>
        <ConfirmButton onClick={() => setIsOrderOpen(!isOrderOpen)}>
          Confirm Order
        </ConfirmButton>
      </CartContainer>
    );
  }
};

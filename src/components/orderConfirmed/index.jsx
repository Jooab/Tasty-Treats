import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import {
  ProductThumbnail,
  ProductName,
  ProductInfo,
  ProductQuantityInfo,
  OrderTitle,
  CartProductsList,
  Product,
  StyledButton,
  ProductQuantity,
  ProductPrice,
  ProductTotalPrice,
  OrderContainer,
  ItensTotalPrice,
  TotalPrice,
  StyledP,
} from "./css";
import { Modal } from "@mui/material";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const OrderConfirmed = ({ open, handleClose }) => {
  const { cartState, clearCart, setIsCartVisible } = useContext(CartContext);

  const totalPrice = cartState.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrderClose = () => {
    clearCart();
    handleClose();
    setIsCartVisible(false);
    toast("Order Confirmed!", {
      icon: "🛵",
    });
  };

  return (
    <Modal
      open={open}
      onClose={() => handleOrderClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <OrderContainer style={style}>
        <img src="./src/assets/images/icon-order-confirmed.svg" alt="" />
        <OrderTitle>Order Confirmed</OrderTitle>
        <CartProductsList>
          {cartState.items.map((item) => (
            <Product key={item.id}>
              <ProductThumbnail src={item.image} alt={item.name} />
              <ProductInfo>
                <ProductName>{item.name}</ProductName>
                <ProductQuantityInfo>
                  <ProductQuantity>{item.quantity}x</ProductQuantity>
                  <ProductPrice>${item.price}</ProductPrice>
                  <ProductTotalPrice>
                    ${item.price * item.quantity}
                  </ProductTotalPrice>
                </ProductQuantityInfo>
              </ProductInfo>
            </Product>
          ))}
        </CartProductsList>
        <ItensTotalPrice>
          <StyledP>Total: </StyledP>
          <TotalPrice>${totalPrice}</TotalPrice>
        </ItensTotalPrice>
        <StyledButton onClick={() => handleOrderClose()}>
          Start New Order
        </StyledButton>
      </OrderContainer>
    </Modal>
  );
};

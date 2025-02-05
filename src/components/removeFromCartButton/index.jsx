import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";
import { StyledButton, StyledImage } from "./css";

export const RemoveFromCartButton = ({ itemId }) => {
  const { removeItemFromCart } = useContext(CartContext);

  return (
    <StyledButton onClick={() => removeItemFromCart(itemId)}>
      <StyledImage
        src="./images/icon-delete.svg"
        alt="Remove Button"
      />
    </StyledButton>
  );
};

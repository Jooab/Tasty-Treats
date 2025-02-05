import { Button, QuantitySection, IconMinus, IconPlus, CartIcon } from "./css";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import toast from "react-hot-toast";

export const AddToCartButton = ({ product }) => {
  const { addItemToCart, cartState } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleAddToCartClick = () => {
    addItemToCart(product, count);
    setCount(1);

    if (cartState.items.length < 9) {
      toast.success("Added to the cart");
    } else {
      toast.error("The cart is already too full");
    }
  };

  return (
    <Button>
      <QuantitySection>
        <IconMinus
          src="./images/icon-minus.svg"
          alt="Remove Icon"
          onClick={() =>
            setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
          }
        />
        <p>{count}</p>
        <IconPlus
          src="./images/icon-plus.svg"
          alt="Add Icon"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        />
      </QuantitySection>
      <CartIcon
        src="./images/icon-add-to-cart.svg"
        alt="Cart Icon"
        onClick={handleAddToCartClick}
      />
    </Button>
  );
};

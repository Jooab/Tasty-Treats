import {
  StyledHeader,
  Logo,
  CartIcon,
  UserIcon,
  LogoName,
  NavList,
  Item,
  CartItensQuantity,
  CartAndProfile,
} from "./css";
import { Link } from "react-scroll";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
  const { isCartVisible, setIsCartVisible, cartState } =
    useContext(CartContext);

  const totalQuantity = cartState.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <StyledHeader>
      <LogoName>
        <Logo src="./images/donut-logo.png" alt="Logo" />
        <h3>Tasty Treats</h3>
      </LogoName>

      <nav>
        <NavList>
          <Item>
            <Link to="about" smooth={true} duration={750}>
              About
            </Link>
          </Item>
          <Item>
            <Link to="dishes" smooth={true} duration={500}>
              Dishes
            </Link>
          </Item>
          <Item>
            <Link to="desserts" smooth={true} duration={750}>
              Desserts
            </Link>
          </Item>
          <Item>
            <Link to="contact" smooth={true} duration={1400}>
              Contact
            </Link>
          </Item>
        </NavList>
      </nav>

      <CartAndProfile>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CartIcon
            src="./images/cart2.png"
            alt="Cart Icon"
            onClick={() => setIsCartVisible(!isCartVisible)}
          />
          {totalQuantity > 0 && (
            <CartItensQuantity>{totalQuantity}</CartItensQuantity>
          )}
        </div>

        <RouterLink to="/signin" style={{ display: "flex" }}>
          <UserIcon src="./images/user2.png" alt="Profile Icon" />
        </RouterLink>
      </CartAndProfile>
    </StyledHeader>
  );
};

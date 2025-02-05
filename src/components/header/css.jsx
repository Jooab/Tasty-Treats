import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #add8e6;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  border-bottom: 3px solid #f68989;
  padding: 0 20px;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
`;

export const CartAndProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  gap: 10px;

  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

export const Logo = styled.img`
  width: 45px;
  height: 40px;

  @media (max-width: 500px) {
    width: 40px;
    height: 35px;
  }
`;

export const CartIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

export const UserIcon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 40px;
  gap: 45px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: #f68989;
  }
`;

export const CartItensQuantity = styled.p`
  position: absolute;
  top: -5px;
  right: 10px;
  background-color: #c789a2;
  color: #ffffff;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.5rem;
`;

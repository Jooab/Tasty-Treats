import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid #87635a;
  border-radius: 30px;
  color: #000000;
  font-size: 0.8rem;
  font-weight: 600;
  height: 20px;
  margin: -25px auto 0;
  padding: 10px;
  gap: 10px;
  text-align: center;
`;

export const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-right: 10px;
`;

export const IconMinus = styled.img`
  cursor: pointer;
  width: 12px;
  height: 2px;
`;

export const IconPlus = styled.img`
  cursor: pointer;
  width: 10px;
  height: 10px;
`;

export const CartIcon = styled.img`
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

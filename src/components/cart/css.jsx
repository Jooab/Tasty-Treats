import styled from "styled-components";

export const CartContainer = styled.div`
  flex-direction: column;
  margin-top: 50px;
  padding: 40px 20px;
  color: #000000;
  background-color: #f8f8f8;
  min-width: 250px;
  position: absolute;
  z-index: 1;
  right: 10px;
  top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 450px) {
    left: 10px
  }
`;

export const EmptyCartImage = styled.img`
  width: 125px;
`;

export const CartProductsList = styled.ul`
  margin: 0;
  padding: 0;
  color: #000000;
  list-style: none;
  max-height: 300px;
  overflow-y: auto;
  li {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    border-bottom: 3px solid hsl(13, 31%, 94%);
    position: relative;
    padding: 15px 0 10px;
  }
`;

export const ProductThumbnail = styled.img`
  width: 35px;
  height: 35px;
`;

export const CartTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #f68989;
  text-align: start;
`;

export const ProductImageName = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

export const ConfirmButton = styled.button`
  background-color: #f68989;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  padding: 10px;
  width: 100%;
  margin-top: 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #c36c6c;
    scale: 1.03;
  }
`;

export const ProductQuantityPrice = styled.div`
  font-size: 1rem;
  font-weight: 600;
  width: 20px;
  display: flex;
  gap: 10px;
  margin: 0;
`;

export const ProductQuantity = styled.p`
  color: hsl(14, 86%, 42%);
  margin: 0;
`;

export const ProductPrice = styled.p`
  color: hsl(7, 20%, 60%);
  margin: 0;
`;

export const ProductTotalPrice = styled.p`
  color: hsl(12, 20%, 44%);
  margin: 0;
`;

export const ProductName = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

export const ItensTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const StyledTotal = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const StyledTotalPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 800;
`;

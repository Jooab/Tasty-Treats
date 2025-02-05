import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: hsl(14, 86%, 42%);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  padding: 10px 20px;
  border: none;
  border-radius: 35px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  &:hover {
    background-color: hsl(14, 86%, 34%);
  }
`;

export const OrderTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`;

export const CartProductsList = styled.ul`
  background-color: #fcf8f5;
  margin: 15px 0;
  padding: 0 20px 0 10px;
  color: #000000;
  list-style: none;
  max-height: 300px;
  overflow-y: auto;
`;

export const Product = styled.li`
  display: flex;
  gap: 10px;
  width: 100%;
  border-bottom: 3px solid hsl(13, 31%, 94%);
  position: relative;
  padding: 15px 0 10px;
`;

export const OrderContainer = styled.div`
  flex-direction: column;
  min-width: 250px;
  margin-top: 65px;
  padding: 40px 20px;
  color: #000000;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

export const ProductThumbnail = styled.img`
  width: 60px;
  height: 60px;
`;

export const ProductQuantityInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductQuantity = styled.p`
  font-size: 0.8rem;
  color: hsl(14, 86%, 42%);
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 0.8rem;
  color: hsl(7, 20%, 60%);
  margin: 0;
`;

export const ProductTotalPrice = styled.p`
  font-size: 0.8rem;
  color: hsl(14, 65%, 9%);
  margin: 0;
`;

export const ProductName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

export const ItensTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;

export const TotalPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;
export const StyledP = styled.p`
  margin: 0;
`;

export const StyledTotal = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const StyledTotalPrice = styled.p`
  font-size: 1.3rem;
  font-weight: 800;
`;

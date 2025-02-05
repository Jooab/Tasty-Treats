import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff1df;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #f3a33e;
  padding: 50px 0 20px 0;
  margin: 0;
`;

export const Food = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: #9f9390;
  margin: 10px 0 0 0;
`;

export const FoodName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #2a1b19;
  margin: 0;
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #c73a0f;
  margin: 0;
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 40px;
  padding: 30px 70px;
  margin: 0;
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 180px;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 160px;
  border-radius: 10px;
`;

import styled from "styled-components";

export const AboutSection = styled.div`
  width: 50%;
  background-color: #fcf8f5;
  color: #f68989;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  padding: 0 50px 50px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const People1 = styled.img`
  width: 250px;

  @media (max-width: 450px) {
    width: 80%;
  }
`;

export const People2 = styled.source`
  width: 250px;
`;

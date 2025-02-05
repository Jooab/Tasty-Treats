import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #f8f8f8;
  border: none;
  padding: 0;
  width: 20px;
  position: absolute;
  right: 10px;
  top: 40%;
`;

export const StyledImage = styled.img`
  width: 15px;
  height: 15px;
  transition: transform 0.3s;

  padding: 2px;

  &:hover {
    transform: scale(1.2);
  }
`;

import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 25px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(1, 1, 1, 0.25);
  position: relative;
  min-width: 300px;

  input {
    background-color: #ffffff;
    border: 1px solid #87635a;
    border-radius: 30px;
    padding: 8px;
    color: #000000;
    font-weight: 600;
    width: 100%;
  }

  @media (max-width: 390px) {
    min-width: 250px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #87635a;
  border: none;
  border-radius: 30px;
  color: #ffffff;
  padding: 8px 16px;
  cursor: pointer;
  width: 50%;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ShowPasswordButton = styled.button`
  color: #000;
  position: absolute;
  right: 5px;
  top: 0;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
`;
export const ErrorMessage = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const Container = styled.div`
  background-color: #add8e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 100vh;
`;

export const LogoName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  gap: 10px;

  img {
    width: 45px;
    height: 40px;

    @media (max-width: 500px) {
      width: 40px;
      height: 35px;
    }
  }

  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

export const StyledParagraph = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

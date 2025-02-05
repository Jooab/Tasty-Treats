import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #add8e6;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  border-top: 3px solid #f68989;
  padding: 0 20px;
`;

export const SocialMedias = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  margin: 24px 0 0;
  padding-left: 20px;
`;

export const SocialMedia = styled.li`
  cursor: pointer;
  
`;

export const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #f68989;
  }
`;

export const StyledP = styled.p`
  font-size: 1.2rem;
`;

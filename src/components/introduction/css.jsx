import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  height: 82vh;
  padding: 0 70px 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 90vh;
    padding: 0;
    padding-right: 0;
    font-size: 0.9rem;
  }
`;

export const WelcomeSection = styled.div`
  width: 50%;
  color: #f68989;
  padding: 0 40px;

  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`;

export const Image = styled.img`
  transform: scaleX(-1);

  @media (max-width: 450px) {
    width: 80%;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #f68989;
    font-size: 2rem;
    position: absolute;
    left: 50%;
    bottom: 10px;

    @media (max-width: 768px) {
        display: none;
    }
}
`;

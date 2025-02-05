import { StyledFooter, SocialMedias, SocialMedia, StyledP, StyledLink } from "./css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const MotionSocialMedia = motion.create(SocialMedia);
const MotionStyledP = motion.create(StyledP);

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialMedias>
        <MotionSocialMedia
          initial={{ scale: 0, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <StyledLink href="https://www.linkedin.com/in/joab-prates/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </StyledLink>
        </MotionSocialMedia>
        <MotionSocialMedia
          initial={{ scale: 0, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <StyledLink href="https://github.com/Jooab" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </StyledLink>
        </MotionSocialMedia>
        <MotionSocialMedia
          initial={{ scale: 0, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <StyledLink href="https://wa.me/5577981682828" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </StyledLink>
          
        </MotionSocialMedia>
      </SocialMedias>
      <MotionStyledP
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        © 2025 Tasty Treats. All rights reserved.
      </MotionStyledP>
    </StyledFooter>
  );
};

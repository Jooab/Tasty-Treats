import { StyledFooter, SocialMedias, SocialMedia, StyledP } from "./css";
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
          <FontAwesomeIcon icon={faLinkedin} />
        </MotionSocialMedia>
        <MotionSocialMedia
          initial={{ scale: 0, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </MotionSocialMedia>
        <MotionSocialMedia
          initial={{ scale: 0, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
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

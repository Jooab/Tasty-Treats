import { Container, WelcomeSection, Image } from "./css";
import { motion } from "framer-motion";

export const Introduction = () => {
  return (
    <Container>
      <MotionWelcomeSection
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to Tasty Treats !</h1>
        <h2>Delight in Every Bite!</h2>
      </MotionWelcomeSection>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="./images/peoples.png" alt="Peoples" />
      </motion.div>
    </Container>
  );
};

const MotionWelcomeSection = motion.create(WelcomeSection);

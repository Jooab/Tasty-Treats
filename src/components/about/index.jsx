import React from "react";
import { Container, AboutSection, AboutText, People1, People2 } from "./css";
import { motion } from "framer-motion";

const MotionAboutSection = motion.create(AboutSection);
const MotionPeople1 = motion.create(People1);
const MotionPeople2 = motion.create(People2);

export const AboutUs = () => {
  return (
    <Container>
      <MotionAboutSection
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1>About Us</h1>

        <AboutText>
          Welcome to Tasty Treats, where your taste buds meet happiness! We are
          passionate about creating delightful and unforgettable moments for our
          celebration of flavors that please all tastes.
        </AboutText>
        <AboutText>
          Our mission is to provide exceptional culinary experiences, combining
          fresh, high-quality ingredients with a dash of love and dedication in
          every recipe. The Tasty Treats team prides itself on offering warm and
          personalized service, ensuring every visit is enjoyable and memorable.
        </AboutText>
        <AboutText>
          Come visit us and discover why Tasty Treats is more than just a place
          – it's a culinary destination you can't miss!
        </AboutText>
      </MotionAboutSection>

      <motion.picture
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <MotionPeople2
          srcSet="./images/people3.png"
          media="(max-width: 768px)"
        />
        <MotionPeople1 src="./images/people2.png" alt="People" />
      </motion.picture>
    </Container>
  );
};

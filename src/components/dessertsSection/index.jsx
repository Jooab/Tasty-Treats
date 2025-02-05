import { getDesserts } from "../../services/requestApi";
import { AddToCartButton } from "../addToCartButton";
import {
  Title,
  Food,
  FoodName,
  Price,
  ProductsList,
  Product,
  ProductImage,
  Container,
} from "./css";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export const DessertsSection = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDesserts();
      setDesserts(data.desserts);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <MotionTitle
        initial={{ scale: 0.5, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Desserts
      </MotionTitle>

      <MotionProductsList
        initial={{ scale: 0.8, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {desserts.map((dessert) => (
          <Product key={dessert.id}>
            <MotionProductImage src={dessert.image} alt={dessert.name} />
            <AddToCartButton product={dessert}></AddToCartButton>
            <Food>{dessert.food}</Food>
            <FoodName>{dessert.name}</FoodName>
            <Price>${dessert.price}</Price>
          </Product>
        ))}
      </MotionProductsList>
    </Container>
  );
};

const MotionProductsList = motion.create(ProductsList);
const MotionProductImage = motion.create(ProductImage);
const MotionTitle = motion.create(Title);

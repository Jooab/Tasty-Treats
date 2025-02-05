import { getDishes } from "../../services/requestApi";
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

export const DishesSection = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDishes();
      setDishes(data.dishes);
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
        Dishes
      </MotionTitle>

      <MotionProductsList
        initial={{ scale: 0.8, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {dishes.map((dish) => (
          <Product key={dish.id}>
            <MotionProductImage src={dish.image} alt={dish.name} />
            <AddToCartButton product={dish}></AddToCartButton>
            <Food>{dish.food}</Food>
            <FoodName>{dish.name}</FoodName>
            <Price>${dish.price}</Price>
          </Product>
        ))}
      </MotionProductsList>
    </Container>
  );
};

const MotionProductsList = motion.create(ProductsList);
const MotionProductImage = motion.create(ProductImage);
const MotionTitle = motion.create(Title);

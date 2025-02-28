import React from "react";
import { Element } from "react-scroll";
import { Header } from "../../components/header";
import { Introduction } from "../../components/introduction";
import { AboutUs } from "../../components/about";
import { DishesSection } from "../../components/dishesSection";
import { DessertsSection } from "../../components/dessertsSection";
import { Footer } from "../../components/footer";
import { Cart } from "../../components/cart";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { OrderConfirmed } from "../../components/orderConfirmed";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const { isOrderOpen, setIsOrderOpen } = useContext(CartContext);

  return (
    <div>
      {isOrderOpen && (
        <OrderConfirmed
          open={isOrderOpen}
          handleClose={() => setIsOrderOpen(!isOrderOpen)}
        />
      )}
      <Cart />
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 800,
          },

          error: {
            duration: 1000,
          },
        }}
      />
      <Element name="header">
        <Header />
      </Element>
      <Element>
        <Introduction name="introduction" />
      </Element>
      <Element name="about">
        <AboutUs />
      </Element>
      <Element name="dishes">
        <DishesSection />
      </Element>
      <Element name="desserts">
        <DessertsSection />
      </Element>
      <Element name="contact">
        <Footer />
      </Element>
    </div>
  );
};

export default Home;

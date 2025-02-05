import React from "react";
import { Element } from "react-scroll";
import { Header } from "../header";
import { Introduction } from "../introduction";
import { AboutUs } from "../about";
import { DishesSection } from "../dishesSection";
import { DessertsSection } from "../dessertsSection";
import { Footer } from "../footer";
import { Cart } from "../cart";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { OrderConfirmed } from "../orderConfirmed";
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

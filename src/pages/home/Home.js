import React from "react";
import AdminOnlyRoute from "../../components/adminOnlyRoute/AdminOnlyRoute";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <Slider />
      <Product />
    </div>
  );
};

export default Home;

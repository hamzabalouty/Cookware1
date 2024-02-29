import React, { useEffect } from "react";
import Landing from "../../components/Landing/Landing";
import Products from "../../components/Products/Products";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Landing />
      <Products />
    </>
  );
};

export default Home;
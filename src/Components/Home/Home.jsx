import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import LatestProductSection from "./LatestProductSection";
import HeroSection from "./HeroSection";

const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/latest-products")
      .then((res) => res.json())
      .then((data) => setLatestProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <main className="commonSectionPadding pt-0!">
      <title>Smart Deals | Home</title>

      {/*//* HERO */}
      <HeroSection></HeroSection>

      <Container>
        <div>
          {/*//* LATEST PRODUCTS */}
          <LatestProductSection
            latestProducts={latestProducts}
          ></LatestProductSection>
        </div>
      </Container>
    </main>
  );
};

export default Home;

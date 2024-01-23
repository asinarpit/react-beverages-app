import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import SectionWithCarousel from "../components/SectionWithCarousel";
import productsData from "../data/data";

const Home = () => {

  // images for carousel
  const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <>
      <HomeCarousel images={images} />

      <SectionWithCarousel
        headline={"Soda Spotlight"}
        subtext={"Where Every Flavor Steals the Show!"}
        data={productsData.featured}
      />

      <SectionWithCarousel
        headline={" Sip into Something New"}
        subtext={"Explore Our Arrival Extravaganza!"}
        data={productsData.newArrivals}
      />

      <SectionWithCarousel
        headline={"Best in Bubbles"}
        subtext={"Your Passport to Our Top Soda Picks!"}
        data={productsData.topPicks}
      />
    </>
  );
};

export default Home;

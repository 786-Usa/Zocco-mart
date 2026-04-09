import React, { useEffect } from "react";
import { useLoadUserQuery } from "../features/api/apiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/userSlice";
import Header from "../components/Header";
import Hero from "../components/Home/Hero.jsx";
import FeatureBar from "../components/Home/FeatureBar.jsx";
import BestSelling from "../components/Home/BestSelling.jsx";
import FlashSale from "../components/Home/FlashSale.jsx";
import FeaturedProducts from "../components/Home/FeaturedProducts.jsx";
import NewArrivals from "../components/Home/NewArrivals.jsx";
import PromoBanner from "../components/Home/PromoBanner.jsx";
import Newsletter from "../components/Home/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import TrustedBrands from "../components/Home/TrustedBrands.jsx";

const Home = () => {
  const { data, isLoading, isError } = useLoadUserQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.user));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div>
      <Header />
      <Hero />
      <FeatureBar />
      <FlashSale/>
      <NewArrivals/>
      <BestSelling/>
      <PromoBanner/>
      <FeaturedProducts/>
      <TrustedBrands/>
      <Newsletter/>
      <Footer/>

    </div>
  );
};

export default Home;

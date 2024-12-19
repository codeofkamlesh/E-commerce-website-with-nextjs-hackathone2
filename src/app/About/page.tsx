import React from "react"
import AboutHero from "../../components/AboutHero";
import AboutSection from "../../components/AboutSection";
import AboutPopularProduct from "../../components/Aboutpopularproduct";

const Page: React.FC = () => {
  return (
    <div>
      <AboutHero />
      <AboutSection />
      <AboutPopularProduct />
    </div>
  )
}

export default Page

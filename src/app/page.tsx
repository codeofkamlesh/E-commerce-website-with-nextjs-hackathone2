import Hero from "../components/HomeHeroSection";
import LogoShowcase from "../components/HomeAllLogoShowcase";
import FeaturedProducts from "../components/Pagesfeaturedproducts";
import TopCategories from "../components/Hometopcategories";
import HotCategories from "../components/HomeHotcategories";
import ProductGrid from "../components/HomeOurProductGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoShowcase />
      <FeaturedProducts />
      <TopCategories />
      <HotCategories />
      <ProductGrid />
    </div>
  );
}

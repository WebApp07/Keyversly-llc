import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import ProductGrid from "@/components/ProductGrid";

const Home = () => {
  return (
    <Container className="">
      <HomeBanner />
      <div className="py-10">
        <ProductGrid />
        <HomeCategories />
      </div>
    </Container>
  );
};

export default Home;

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Container className="text-xl font-semibold p-10 bg-shop_light_pink">
      Home
      <Button variant="destructive">Check out</Button>
    </Container>
  );
};

export default Home;

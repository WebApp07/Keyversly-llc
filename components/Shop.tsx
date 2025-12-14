import { BRANDS_QUERYResult, Category } from "@/sanity.types";
import Container from "./Container";
import Title from "./Title";

interface Props {
  categories: Category[]; //will receive a list of categories
  brands: BRANDS_QUERYResult; //will receive brand data from a query
}

const Shop = ({ categories, brands }: Props) => {
  //console.log(brands, categories);
  return (
    <div className="border-t">
      <Container className="mt-5">
        <div className="sticky top-0 z-10 mb-5">
          <div className="flex items-center justify-between">
            <Title className="text-lg uppercase tracking-wide">
              Get the products as your needs
            </Title>
            <button className="text-shop_dark_green underline text-sm mt-2 font-medium hover:text-shop_orange hoverEffect">
              Reset Filters
            </button>
          </div>
        </div>
        <div></div>
      </Container>
    </div>
  );
};

export default Shop;

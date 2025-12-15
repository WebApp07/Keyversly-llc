"use client";

import { BRANDS_QUERYResult, Category, Product } from "@/sanity.types";
import Container from "./Container";
import Title from "./Title";
import CategoryList from "./shop/CategoryList";
import BrandList from "./shop/BrandList";
import PriceList from "./shop/PriceList";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
  categories: Category[]; //will receive a list of categories
  brands: BRANDS_QUERYResult; //will receive brand data from a query
}

const Shop = ({ categories, brands }: Props) => {
  //console.log(brands, categories);
  const searchParams = useSearchParams(); //helper that lets you look at the URL of the website.
  // Get the "brand"  values from the URL
  const brandParams = searchParams?.get("brand");
  // Get the "category" values from the URL
  const categoryParams = searchParams?.get("category");

  // Create a state to store the list of products (initially empty array)
  const [products, setProducts] = useState<Product[]>([]);

  // Create a state to track if the data is loading (default is 'false' because it's not loading yet)
  const [loading, setLoading] = useState(false);

  // Create a state to store the selected category (either from the URL or 'null' if none selected)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParams || null // If categoryParams has a value (from URL), use it, else set 'null'
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    brandParams || null // If brandParams has a value (from URL), use it, else set 'null'
  );

  // Create a state to store the selected price filter (default is 'null' meaning no filter)
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

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
        <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop_dark_green/50">
          <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 md:border-r border-r-shop_btn_dark_green/50 scrollbar-hide">
            {/*CategoryList */}
            <CategoryList
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            {/*BrandList */}
            {/*PriceList */}
          </div>
          <div>Products</div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;

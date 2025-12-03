"use client";

import { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";
import { Product } from "@/sanity.types";

const ProductGrid = () => {
  // State to hold the products
  const [products, setProducts] = useState<Product[]>([]);

  // State to track loading status
  const [loading, setLoading] = useState(false);

  // 'selectedTab' stores the name of the currently active tab/acegorty;
  // It defaults to the first item inside productType[] (if it exists)
  // Example: if productType = [{ title: "Windows" }], it starts as "Windows"
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  // GROQ query to fetch products filtered by a dynamic "variant"
  const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;

  // Parameters passed to the GROQ query
  // Take the selected tab name, convert it to lowercase
  // This value will replace $variant inside the GROQ query above
  const params = { variant: selectedTab.toLocaleLowerCase() };

  // Runs every time "selectedTab" changes
  useEffect(() => {
    const fetchData = async () => {
      // Show loading state before starting the fetch
      setLoading(true);
      try {
        // Fetch data from Sanity (client.fetch returns your products)
        const response = await client.fetch(query, params);
        //save the data in state
        setProducts(await response);
        // For debugging: see the data you got from Sanity
        console.log(response);
      } catch (error) {
        console.log("Product fetching Error:", error);
      } finally {
        // When fetch is done (success or error), stop loading
        setLoading(false);
      }
    };

    // Call the async fetch function
    fetchData();

    // This effect re-runs when the selectedTab changes
  }, [selectedTab]);

  return (
    <div>
      {/* 
        HomeTabBar receives:
          - selectedTab: the current tab name
          - onTabSelected: function to update selectedTab when user clicks a tab
        So clicking a tab calls setSelectedTab("ThatTab")
      */}
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {/* If loading === true → show the loading UI */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
          <div className="space-x-2 flex items-center text-blue-600">
            {/* Loading spinner + text */}
            <Loader2 className="w-5 h-6 animate-spin" />
            <span>Product is loading... </span>
          </div>
        </div>
      ) : /* If NOT loading and there ARE products → show the product list  */
      products?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          <>
            {products?.map((product) => (
              <AnimatePresence key={product?._id}>
                <motion.div>
                  <ProductCard product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </>
        </div>
      ) : (
        // If NOT loading and product list is empty → show the "no product" message
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  );
};

export default ProductGrid;

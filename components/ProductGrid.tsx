"use client";

import { useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants/data";

const ProductGrid = () => {
  // 'products' will store a list of products
  // 'setProducts' is the function used to update that list
  // It starts as an empty array []
  const [products, setProducts] = useState([]);

  // 'loading' will tell us if we are loading data (true/false)
  // It starts as false because we are not loading anything yet
  const [loading, setLoading] = useState(false);

  // 'selectedTab' stores the name of the currently active tab/acegorty;
  // It defaults to the first item inside productType[] (if it exists)
  // Example: if productType = [{ title: "Windows" }], it starts as "Windows"

  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  return (
    <div>
      {/* 
        HomeTabBar receives:
          - selectedTab: the current tab name
          - onTabSelected: function to update selectedTab when user clicks a tab
        So clicking a tab calls setSelectedTab("ThatTab")
      */}
      <HomeTabBar selectedTab={selectedTab} onTabSelected={setSelectedTab} />
    </div>
  );
};

export default ProductGrid;

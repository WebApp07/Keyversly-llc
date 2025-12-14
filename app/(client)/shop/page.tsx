import Shop from "@/components/Shop";
import { getAllBrands, getCategories } from "@/sanity/queries";

const ShopPage = async () => {
  // Ask Sanity for the list of categories and wait for the answer
  const categories = await getCategories();
  // Ask Sanity for the list of brands and wait for the answer
  const brands = await getAllBrands();
  //console.log(brand);
  return (
    <div className="bg-white">
      <Shop categories={categories} brands={brands} />
    </div>
  );
};

export default ShopPage;

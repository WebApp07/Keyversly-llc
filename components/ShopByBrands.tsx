import Link from "next/link";
import Title from "./Title";
import { getAllBrands } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// This is an async server component.
// It runs on the server, so it can fetch data directly from Sanity.
const ShopByBrands = async () => {
  // Fetch all brand documents from Sanity using your helper function.
  // This returns an array of brand objects.
  const brands = await getAllBrands();

  return (
    <div className="mb-10 lg:pb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md">
      {/* Header section with title and "View All" link */}
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title>Shop By Brands</Title>

        {/* Link to go to shop page */}
        <Link
          href={"/shop"}
          className="text-sm font-semibold tracking-wide hover:text-shop_btn_dark_green hoverEffect"
        >
          View All
        </Link>
      </div>

      {/* Grid layout showing brand cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {brands?.map((brand) => (
          // Each brand is wrapped in a <Link> so users can click the brand
          // and navigate to a dedicated brand page, e.g. /brand/autodesk
          <Link
            key={brand?._id} // unique identifier for React
            href={`/brand/${brand?.slug?.current}`} // dynamic brand URL
            className="bg-white w-36 h-24 flex items-center justify-center rounded-md 
                       overflow-hidden hover:shadow-lg shadow-shop_dark_green/20 hoverEffect"
          >
            {/* Only show the image if the brand has one */}
            {brand?.image && (
              <Image
                src={urlFor(brand?.image).url()} // convert Sanity image to real URL
                alt="brandImage"
                width={250} // Next.js needs width & height for optimization
                height={250}
                className="w-32 h-20 object-contain" // resize inside card
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Export component so it can be used in pages
export default ShopByBrands;

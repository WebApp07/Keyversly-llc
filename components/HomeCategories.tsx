import { Category } from "@/sanity.types";
import Title from "./Title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// HomeCategories component receives a list of categories from Sanity
const HomeCategories = ({ categories }: { categories: Category[] }) => {
  return (
    // Outer container with styling
    <div className="bg-white border border-shop_light_green/20 my-10 md:my-20 p-5 lg:p-7 rounded-md">
      {/* Section title */}
      <Title className="border-b pb-3">Popular Categories</Title>

      {/* Grid layout for each category item */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Loop through each category and display it */}
        {categories?.map((category) => (
          <div
            key={category._id} // React key for each item
            className="bg-shop_light_bg p-5 flex items-center gap-3 group"
          >
            {/* Only render image if category has an image */}
            {category?.image && (
              <div className="overflow-hidden border border-shop_orange/30 hover:border-shop_orange hoverEffect w-20 h-20 p-1">
                {/* Link to the category page */}
                <Link href={`/category/${category?.slug?.current}`}>
                  {/* Sanity image using urlFor */}
                  <Image
                    src={urlFor(category?.image).url()}
                    alt="categoryImage"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain group-hover:scale-110 hoverEffect"
                  />
                </Link>
              </div>
            )}

            {/* Category title and product count */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold">{category?.title}</h3>

              <p className="text-sm">
                {/* Show product count coming from GROQ query */}
                <span className="font-bold text-shop_dark_green">
                  {`(${category?.productCount})`}
                </span>{" "}
                items Available
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;

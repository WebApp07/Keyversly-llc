import { Category } from "@/sanity.types";
import Title from "../Title";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface Props {
  categories: Category[]; // A list of categories (e.g., ['Electronics', 'Clothing'])
  selectedCategory?: string | null; // Optional, stores the selected category (string or null if no category is selected)
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>; // A function to update the selected category
}

const CategoryList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base font-black">Product Categories</Title>
      <RadioGroup value={selectedCategory || ""} className="mt-2 space-y-1">
        {categories?.map((category) => (
          <div
            onClick={() => {
              setSelectedCategory(category?.slug?.current as string);
            }}
            key={category._id}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem
              value={category?.slug?.current as string}
              id={category?.slug?.current}
              className="rounded-sm"
            ></RadioGroupItem>
            <Label
              htmlFor={category?.slug?.current}
              className={`${
                selectedCategory === category?.slug?.current
                  ? "font-semibold text-shop_dark_green"
                  : "font-normal"
              }`}
            >
              {category?.title}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CategoryList;

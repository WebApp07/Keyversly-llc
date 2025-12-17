import { BRANDS_QUERYResult } from "@/sanity.types";
import { Title } from "../ui/text";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

// This interface defines the props that a React component will receive
interface Props {
  // `brands` holds all brand data
  // The type comes from your backend (for example Sanity or an API)
  // This prop is REQUIRED
  brands: BRANDS_QUERYResult;

  // `selectedBrand` stores the currently selected brand
  // `?` means this prop is OPTIONAL
  // It can be:
  // - a string (example: "nike")
  // - null (no brand selected yet)
  selectedBrand?: string | null;

  // `setSelectedBrand` is the function used to update `selectedBrand`
  // It comes from React's useState hook
  // It only accepts:
  // - a string (brand name/slug)
  // - null (clear selection)
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
}

const BrandList = ({ brands, selectedBrand, setSelectedBrand }: Props) => {
  return (
    <div className="w-full">
      <Title className="text-base font-black">Brands</Title>
      <RadioGroup value={selectedBrand || ""} className="mt-2 space-y-1">
        {brands?.map((brand) => (
          <div
            key={brand?._id}
            onClick={() => setSelectedBrand(brand?.slug?.current as string)}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem
              value={brand?.slug?.current as string}
              id={brand?.slug?.current}
              className="rounded-md"
            />
            <Label
              htmlFor={brand?.slug?.current}
              className={`${
                selectedBrand === brand?.slug?.current
                  ? "font-semibold text-shop_dark_green"
                  : "font-semibold"
              }`}
            >
              {brand?.title}
            </Label>
          </div>
        ))}
        {selectedBrand && (
          <button
            onClick={() => setSelectedBrand(null)}
            className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect text-left"
          >
            Reset selection
          </button>
        )}
      </RadioGroup>
    </div>
  );
};

export default BrandList;

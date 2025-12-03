import { productType } from "@/constants/data";
import Link from "next/link";

interface Props {
  // The currently selected tab name (example: "Windows")
  selectedTab: string;

  // A function the component will call when a tab is clicked
  // It receives the new tab name as a string, and returns nothing
  onTabSelect: (tab: string) => void;
}

// It receives selectedTab + onTabSelected from the parent component.
const HomeTabBar = ({ selectedTab, onTabSelected }: Props) => {
  console.log(selectedTab);
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div className="flex items-center gap-1.5 text-sm font-semibold">
        {productType.map((item) => (
          <button
            onClick={() => onTabSelected(item?.title)}
            key={item?.title}
            // Dynamic styling: if this tab is selected, apply one style.
            // Otherwise, apply the default style.
            className={`border border-shop_light_green/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${
              selectedTab === item?.title
                ? "bg-shop_light_green text-white border-shop_light_green/20" // ACTIVE TAB STYLE
                : "bg-shop_light_green/20" // NORMAL TAB STYLE
            }`}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        href={"/shop"}
        className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect`}
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;

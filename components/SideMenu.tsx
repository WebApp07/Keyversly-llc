import { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Create the SideMenu component and receive props inside
const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Get the current URL path
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    // This is the full background overlay (dark transparent layer)
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      {/* This is the actual sliding side menu panel */}
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6"
      >
        {/* Top row: Logo on left, Close button on right */}
        <div className="flex items-center justify-between">
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          {/* Close button — calls onClose when clicked */}
          <button
            className="hover:text-shop_light_green hoverEffect"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        {/* Navigation links area */}
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {/* Loop through each menu item from headerData */}
          {headerData.map((item) => (
            <Link
              //where the link goes
              href={item?.href}
              // unique key for React
              key={item?.title}
              className={`hover:text-shop_light_green hoverEffect ${
                pathname === item?.href && " text-shop_light_green"
              }`}
            >
              {/* Display the text of the link */}
              {item?.title}
            </Link>
          ))}
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

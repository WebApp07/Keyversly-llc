import { AlignLeft } from "lucide-react";

const MobileMenu = () => {
  return (
    <>
      <button>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer " />
      </button>
    </>
  );
};

export default MobileMenu;

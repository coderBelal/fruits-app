import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import CartCount from "./CartCount";
const Navbar = () => {
  return (
    <div className="container   lg:block">
      <div className="flex justify-between  items-center pt-8">
        <h1 className="text-4xl font-medium underline">Halal</h1>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Products..."
          />
          <CiSearch
            className=" absolute top-0 right-0 mt-4 mr-5 text-gray-500"
            size={20}
          />
        </div>
        <div className="flex gap-4">
          <div className="icon_wrapper">
            <CiUser />
          </div>
          <div className="icon_wrapper">
            <CiShoppingCart />
            <CartCount size="w-[35px] h-[30]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

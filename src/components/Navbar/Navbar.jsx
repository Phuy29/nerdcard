import { useState } from "react";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../useDarkMode";

const Navbar = ({ isMobile }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-20 font-bold mr-2">NerdCard</div>
          {isDarkMode ? (
            <BsFillBrightnessHighFill
              size={"24px"}
              color="#e9c46a"
              className="cursor-pointer"
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          ) : (
            <FaMoon
              size={"24px"}
              color="#e9c46a"
              className="cursor-pointer"
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          )}
        </div>
        <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
          {openMenu && isMobile ? (
            <MdOutlineClose
              size={"21px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          ) : !openMenu && isMobile ? (
            <HiOutlineMenu
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          ) : (
            <>
              <li className="btn-hover">Features</li>
              <li className="btn-hover">Menu</li>
              <li className="btn-hover">Our Story</li>
              <li className="btn-hover ml-[150px]">Contact</li>
            </>
          )}
          {openMenu && (
            <div className="absolute z-10 text-black right-8 bg-white p-8 text-center text-13">
              <li className="btn-hover">Features</li>
              <li className="btn-hover">Menu</li>
              <li className="btn-hover">Our Story</li>
              <li className="btn-hover">Contact</li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

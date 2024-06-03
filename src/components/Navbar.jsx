import { FaChevronDown } from "react-icons/fa";
import Button from "./Button";
 const Navbar = () => {
  return (
    <nav className=' py-5 bg-[#160c6da0] absolute top-0 left-0 w-full z-50'>
      <div className="container">
        <div className=' flex items-center'>
        <div className=' w-1/5'>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className=" w-3/5 ">
          <ul className='flex gap-10 justify-center  items-center text-lg font-semibold text-[#EFF4FA]'>
            <li>
              <a className='group transition-all cursor-pointer flex items-center gap-1'>
                <span className="group- hover:text-brand">Home</span>
                <FaChevronDown />
              </a>
            </li>
            <li>
              <a className='group transition-all cursor-pointer flex items-center gap-1'>
                <span className="group- hover:text-brand">About</span>
                <FaChevronDown />
              </a>
            </li>
            <li>
              <a className='group transition-all cursor-pointer flex items-center gap-1'>
                <span className="group- hover:text-brand">Service</span>
                <FaChevronDown />
              </a>
            </li>
            <li>
              <a className='group transition-all cursor-pointer flex items-center gap-1'>
                <span className="group- hover:text-brand">Portfolio</span>
                <FaChevronDown />
              </a>
            </li>
            <li>
              <a className='group transition-all cursor-pointer flex items-center gap-1'>
                <span className="group- hover:text-brand">Price</span>
                <FaChevronDown />
              </a>
            </li>
            <li>
              <a className='group transition-all cursor-pointer flex items-center gap-1'>
                <span className="group- hover:text-brand">Blog</span>
                <FaChevronDown />
                </a>
            </li>
          </ul>
        </div>
        <div className='w-1/5 flex justify-end'>
          <Button title="Contact Us"/>
        </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
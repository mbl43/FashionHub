import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-white  shadow-md">
    <div className="flex container mx-auto justify-between items-center p-3">
        <div className="font-bold text-2xl text-red-500">
            <h1><Link to="/">Style Haven</Link></h1>
        </div>

        <ul className="flex space-x-2 text-lg">
            <li className="p-2 hover:text-red-700 transition-colors font-medium duration-200 cursor-pointer">
                <Link to="/">Home</Link>
            </li>
            <li className="p-2 hover:text-red-700 transition-colors font-medium duration-200 cursor-pointer">
                <Link to="/cart">All Products</Link>
            </li>
            <li className="p-2 hover:text-red-700 transition-colors font-medium duration-200 cursor-pointer">
                <Link to="/services">Men</Link>
            </li>
            <li className="p-2 hover:text-red-700 transition-colors font-medium duration-200 cursor-pointer">
                <Link to="/services">Kids</Link>
            </li>
        </ul>

        <div className="flex items-center space-x-6  ">
            <button className="bg-red-700 font-medium text-white px-3 py-2 rounded hover:bg-red-600 transition-colors duration-200">
                Login
            </button>
            <p className="text-gray-600 text-lg font-semibold">
            
                    
           <Link to="/cart"><FaShoppingCart /> </Link> 
              </p>
        </div>
    </div>
</div>
    </>
  );
};

export default Navbar;

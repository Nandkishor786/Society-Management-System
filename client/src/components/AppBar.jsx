// import apartmentPng from "../assets/logo6.png";
// import { Link } from "react-router-dom";

export const AppBar = () => {
  return (
    
    <div className="shadow h-[100px] w-full flex justify-between bg-secondary text-white border-b-2 border-gray-500 sticky top-0 z-50 ">

      <div className="flex  flex-col justify-center   items-center
       h-[100px] w-40 ml-40 text-1xl font-bold  ">
           <img
            src="/logo6.png"
            alt="Secure Awas Logo"
            className="logo-glow w-16 mt-1 "
           />
          <span className="glow-text  ">Secure Awas</span>
       </div>

    </div>    
  );
};

export default AppBar;
  
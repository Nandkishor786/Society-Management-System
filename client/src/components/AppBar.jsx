import apartmentPng from "../assets/apartment.png";

export const AppBar = () => {
  return (
    <div className="shadow h-20 w-full flex justify-between bg-secondary text-white border-b-2 border-gray-500">
      <div className="flex flex-col justify-center h-full ml-4 text-2xl font-bold">
        <div className="flex items-center">
          <img src={apartmentPng} alt="apartment" className="w-10 h-10 mr-3" />
          <div>SecureAwas</div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;

import { Button } from "./Button";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { useNavigate } from "react-router-dom";
// import { HomeSection } from "./HomeSection";
import { ServicesSection } from "../components/ServicesSection.jsx";
import { PricingSection } from "../components/PricingSection.jsx";
// import { ContactSection } from "./ContactSection";
import { ContactSection } from '../components/ContactSection.jsx';


export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <div className="shadow h-[100px] w-full flex justify-between bg-secondary text-white border-b-2 border-gray-500 sticky top-0 z-50">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center h-[100px] w-40 ml-40 text-xl font-bold">
          <img
            src="/logo6.png"
            alt="Secure Awas Logo"
            className="logo-glow w-16 mt-1"
          />
          <span className="glow-text">Secure Awas</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 mr-20 text-lg font-semibold">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>

      {/* Sections */}
      <div id="home">
        <div className="myimage h-screen w-screen flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-[500px] h-[500px]">
            <div className="group rounded-lg text-white bg-nilla w-max text-center p-2 h-max px-4 hover:bg-darknilla transition-all">
              <Heading label={"Secure Awas"} />
              <SubHeading label={"Welcome to the Secure Awas"} />
              <div className="pt-4">
                <Button label={"Admin"} onClick={() => navigate("/admin/signin")} />
              </div>
              <div className="pt-4">
                <Button label={"Events"} onClick={() => navigate("/event")} />
              </div>
              <div className="pt-4">
                <Button label={"Visitors"} onClick={() => navigate("/visitor")} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;

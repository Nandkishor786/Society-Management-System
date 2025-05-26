import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import AppBar from "./AppBar";


const PORT = import.meta.env.VITE_PORT;

const CreateSociety = () => {
  const [societyName, setSocietyName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [numBlocks, setNumBlocks] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [securityHead, setSecurityHead] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [poster, setPoster] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (
      !societyName ||
      !address ||
      !contact ||
      !ownerName ||
      !email ||
      !numBlocks ||
      !city ||
      !pincode ||
      !securityHead ||
      !registrationNumber ||
      !poster
    ) {
      alert("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("societyName", societyName);
    formData.append("address", address);
    formData.append("contact", contact);
    formData.append("ownerName", ownerName);
    formData.append("email", email);
    formData.append("numBlocks", numBlocks);
    formData.append("city", city);
    formData.append("pincode", pincode);
    formData.append("securityHead", securityHead);
    formData.append("registrationNumber", registrationNumber);
    formData.append("poster", poster);

    try {
      const response = await axios.post(
        `http://localhost:${PORT}/admin/create-society`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        alert("Society created successfully");
       navigate("/admin/secure-societies");
 // Redirect to SecureSocieties page
      }
    } catch (error) {
      alert("Error creating society. Please try again.");
    }
  };

  return (

    <div>
      <AppBar></AppBar>
        <div className="myimage min-h-screen flex justify-center items-center py-10">
      <div className="flex flex-col justify-center w-full max-w-5xl px-6">
        <div className="rounded-lg bg-black bg-opacity-60 text-center text-neutral-200 font-serif px-8 pb-6 w-full shadow-md">
          <Heading label={"Create Society"} />
          <SubHeading label={"Enter your society details "} />  

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
            <InputBox label="Society Name" placeholder="Enter Society Name" type="text" onChange={(e) => setSocietyName(e.target.value)} />
            <InputBox label="Address" placeholder="Enter Address" type="text" onChange={(e) => setAddress(e.target.value)} />
            <InputBox label="Contact Number" placeholder="Enter Contact Number" type="text" onChange={(e) => setContact(e.target.value)} />
            <InputBox label="Owner Name" placeholder="Enter Owner Name" type="text" onChange={(e) => setOwnerName(e.target.value)} />
            <InputBox label="Email" placeholder="Enter Email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <InputBox label="Number of Blocks" placeholder="Enter Number of Blocks" type="number" onChange={(e) => setNumBlocks(e.target.value)} />
            <InputBox label="City" placeholder="Enter City" type="text" onChange={(e) => setCity(e.target.value)} />
            <InputBox label="Pincode" placeholder="Enter Pincode" type="number" onChange={(e) => setPincode(e.target.value)} />
            <InputBox label="Security Head Name" placeholder="Enter Security Head Name" type="text" onChange={(e) => setSecurityHead(e.target.value)} />
            <InputBox label="Registration Number" placeholder="Enter Registration Number" type="text" onChange={(e) => setRegistrationNumber(e.target.value)} />

            {/* Poster Input */}
            <div className="md:col-span-2">
              <label className="block text-left mb-1 font-medium text-gray-700">City Poster</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPoster(e.target.files[0])}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="pt-6">
            <Button label={"Submit"} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default CreateSociety;

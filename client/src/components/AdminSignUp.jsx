import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useState } from "react";

// Ensure PORT is correctly imported from your .env or default to 5000
const PORT = import.meta.env.VITE_PORT || 5000;

export const AdminSignUp = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      setLoading(true); // Set loading state to true when API call starts
      console.log(username, firstName, lastName, password);

      const response = await axios.post(
        `http://localhost:${PORT}/admin/signup`,
        {
          username,
          firstName,
          lastName,
          password,
        }
      );

      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/admin/dashboard");
      } else {
        alert("Failed to sign up. Please try again.");
      }
    } catch (error) {
      alert(
        error?.response?.data?.message || "An error occurred while signing up."
      );
    } finally {
      setLoading(false); // Reset loading state after API call finishes
    }
  };

  return (
    <div className="bg-secondary h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-primary mb-2 text-center p-5 font-bold text-3xl">
          ADMIN
        </div>
        <div className="rounded-lg bg-primary w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            placeholder={"Enter your First Name"}
            onChange={(e) => setFirstName(e.target.value)}
            label={"First Name"}
          />
          <InputBox
            placeholder={"Enter your Last Name"}
            onChange={(e) => setLastName(e.target.value)}
            label={"Last Name"}
          />
          <InputBox
            placeholder={"Enter your Email"}
            onChange={(e) => setUsername(e.target.value)}
            label={"Email"}
          />
          <InputBox
            placeholder={"Enter your Password"}
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={handleSignUp}
              label={loading ? "Signing up..." : "Sign up"}
              disabled={loading}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/admin/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSignUp;

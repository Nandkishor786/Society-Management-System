import { useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AppBar from "./AppBar";

const PORT = import.meta.env.VITE_PORT;

export const AdminSignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post(`http://localhost:${PORT}/admin/signin`, {
        username,
        password,
      });

      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        setSuccessMessage("Sign in successful! Redirecting...");
        setTimeout(() => {
          navigate("/admin/dashboard/");
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Sign in failed. Please try again.");
    }
  };

  return (
    <div className="overflow-x-hidden">
      <AppBar />
      <div className="myimage h-screen flex justify-center items-start">
        <div className="flex flex-col justify-center items-center w-[800px] h-[500px] mt-16 text-neutral-200 font-serif">
          <div className="rounded-lg bg-black bg-opacity-60 mb-2 text-center p-3 font-bold text-3xl w-[400px]">
            ADMIN
          </div>
          <div className="rounded-lg bg-black bg-opacity-60 w-[400px] h-[500px] text-center p-2 px-4">
            <Heading label={"Sign in"} />
            <SubHeading label={"Enter your credentials to access your account"} />

            <InputBox
              type="text"
              placeholder="Enter your username/email"
              onChange={(e) => setUsername(e.target.value)}
              label={"Email"}
            />

            <InputBox
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              label={"Password"}
            />

            <div className="pt-4">
              <Button label={"Sign in"} onClick={handleSignIn} />
              {error && <div className="text-red-500 mt-2 font-semibold">{error}</div>}
              {successMessage && <div className="text-green-500 mt-2 font-semibold">{successMessage}</div>}
            </div>

            <BottomWarning
              label={"Don't have an account?"}
              buttonText={"Sign up"}
              to={"/admin/signup"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;

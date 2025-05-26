import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useState } from "react";
import AppBar from "./AppBar";

const PORT = import.meta.env.VITE_PORT || 5000;

export const AdminSignUp = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // New states for messages
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      setLoading(true);
      setError("");
      setMessage("");

      const response = await axios.post(
        `http://localhost:${PORT}/admin/signup`,
        { username, firstName, lastName, password }
      );

      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        setMessage("Signup successful! Redirecting...");
        // You can add a slight delay before navigation if you want
        setTimeout(() => {
          navigate("/admin/signin");
        }, 2000);
      } else {
        setError("Failed to sign up. Please try again.");
      }
    } catch (error) {
      setError(
        error?.response?.data?.message || "An error occurred while signing up."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <AppBar />
      <div className="myimage h-screen flex justify-center items-start w-screen">
        <div className="flex flex-col justify-start items-center mt-16 w-[800px] h-[600px] text-neutral-200 font-serif rounded-lg">
          <div className="rounded-lg bg-black bg-opacity-60 mb-2 text-center p-2 font-bold text-3xl w-[400px]">
            ADMIN
          </div>
          <div className="rounded-lg bg-black bg-opacity-60 w-full h-[400px] text-center mt-1 ">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <div className="flex justify-center gap-20 items-start mt-6 ">
              <div className="w-80">
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
              </div>
              <div className="w-80">
                <InputBox
                  placeholder={"Enter your Password"}
                  onChange={(e) => setPassword(e.target.value)}
                  label={"Password"}
                />
                <div className="mt-8">
                  <Button
                    onClick={handleSignUp}
                    label={loading ? "Signing up..." : "Sign up"}
                    disabled={loading}
                  />
                  {/* Inline error or success messages */}
                  {error && (
                    <div className="text-red-500 mt-2 font-semibold">
                      {error}
                    </div>
                  )}
                  {message && (
                    <div className="text-green-500 mt-2 font-semibold">
                      {message}
                    </div>
                  )}
                </div>
                <BottomWarning
                  label={"Already have an account?"}
                  buttonText={"Sign in"}
                  to={"/admin/signin"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUp;

import React, { useState, useEffect } from "react";
import Input from "../components/input";
import Button from "../components/button";
import api from "../services/api";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const RecoverPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    secretAnswer: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, secretAnswer, newPassword, confirmPassword } = formData;

    if (!email || !secretAnswer || !newPassword || !confirmPassword) {
      toast.warning("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/auth/recover-password", {
        email,
        secretAnswer,
        newPassword,
        confirmPassword,
      });

      toast.success("🔐 Password reset successfully!");
      navigate("/login");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "❌ Failed to reset password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-primary text-textPrimary">
        <div className=" p-6  w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center ">
            Recover Password
          </h2>
          <p className="text-accent font-bold text-sm text-center mb-4">
            Remember to keep your secret answer safe at all times.
          </p>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange} placeholder={""}            />
            <Input
              label="Secret Answer"
              name="secretAnswer"
              type="text"
              value={formData.secretAnswer}
              onChange={handleChange} placeholder={""}            />
            <Input
              label="New Password"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange} placeholder={""}            />
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange} placeholder={""}            />

            <div className="mt-6">
              <Button type="submit">
                {loading ? "Updating Password..." : "Update Password"}
              </Button>
            </div>

            {/* <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-white py-2 rounded hover:bg-accent/90 transition"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button> */}
          </form>

          <div className="mt-4">
            <h6>
              Remembered your password?{" "}
              <Link
                to="/login"
                className="hover:text-accent transition duration-300"
              >
                Signup here
              </Link>{" "}
            </h6>
          </div>

          <p className="text-sm text-center text-gray-500 mt-4">
            Remembered your password?{" "}
            <a
              href="/login"
              className="text-accent hover:underline font-medium"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;

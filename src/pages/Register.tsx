import React, { useState, useEffect } from "react";
import Input from "../components/input";
import Button from "../components/button";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { register } from "../store/slices/authSlice";
import { toast } from "react-toastify";
import slugify from "slugify"; // npm i slugify (for optional slug support)

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    company: "",
    address: "",
    phone: "",
    website: "",
    secretAnswer: "",
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      role,
      company,
      address,
      phone,
      secretAnswer,
      website,
    } = formData;

    // Validate required fields
    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !confirmPassword ||
      !role ||
      !company ||
      !address ||
      !phone ||
      !secretAnswer
    ) {
      setError("Please fill in all required fields (website is optional).");
      toast.error(
        "⚠️ Please fill in all required fields (website is optional)."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error("❌ Passwords do not match");
      return;
    }

    setError(null);

    const slug = slugify(`${firstname}-${lastname}`, { lower: true });

    try {
      await dispatch(
        register({
          firstname,
          lastname,
          email,
          password,
          role,
          company,
          address,
          phone,
          website,
          secretAnswer,
          slug,
        })
      ).unwrap();

      toast.success("🚀 Account created successfully!");
    } catch (error: any) {
      toast.error(error || "❌ Registration failed");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-primary text-textPrimary">
        <div className="w-full max-w-md p-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Register</h2>
          <p className="text-sm mb-4 text-center text-accent font-medium">
            Fields marked <span className="text-red-400 font-bold">*</span> are
            required.
          </p>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleRegister} className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name *"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                type="text"
                placeholder={"Your firstname here"}
              />
              <Input
                label="Last Name *"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                type="text"
                placeholder={"Your last name here"}
              />
            </div>

            <Input
              label="Email Address *"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder={"youremail@email.com"}
            />
            <Input
              label="Phone Number *"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder={"Valid work phone number"}
            />

            <Input
              label="Job Role / Title *"
              name="role"
              value={formData.role}
              onChange={handleChange}
              type="text"
              placeholder={"Your Job Role / Title "}
            />
            <Input
              label="Company Name *"
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              placeholder={"Your Company Name"}
            />
            <Input
              label="Company Address *"
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="text"
              placeholder={"Your Company Address"}
            />
            <Input
              label="Website (optional)"
              name="website"
              value={formData.website}
              onChange={handleChange}
              type="text"
              placeholder={"Your Company Website"}
            />
            <Input
              label="Secret Answer *"
              name="secretAnswer"
              value={formData.secretAnswer}
              onChange={handleChange}
              type="password"
              placeholder={"Your Secret Answer"}
            />
            <Input
              label="Password *"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder={"Your Password "}
            />
            <Input
              label="Confirm Password *"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              type="password"
              placeholder={"Confirm your password"}
            />

            <div className="mt-6">
              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Register"}
              </Button>
            </div>
          </form>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="hover:text-accent font-medium">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState } from "react";
// //import { useDispatch } from "react-redux";
// import { useAppDispatch } from "../store/hooks";
// import { register } from "../store/slices/authSlice";

// const Register: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.password) {
//       setError("Please fill in all fields");
//       return;
//     }
//     setError(null);
//     try {
//       await dispatch(register(formData)).unwrap();
//     } catch {
//       setError("Registration failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow-md w-80"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="block w-full mb-4 p-2 border rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="block w-full mb-4 p-2 border rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="block w-full mb-4 p-2 border rounded"
//         />
//         <button
//           type="submit"
//           className="w-full py-2 bg-green-500 text-white rounded"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

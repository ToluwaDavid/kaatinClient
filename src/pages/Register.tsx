import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    //Perform login for registration here
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-primary text-textPrimary">
        <div className="w-full max-w-md p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleRegister}>
            <Input
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="mt-6">
              <Button type="submit">Register</Button>
            </div>
          </form>
          <div className="mt-4">
            <h6>
              Already have an account ?{" "}
              <Link
                to="/login"
                className="hover:text-accent transition duration-300"
              >
                Login here
              </Link>{" "}
            </h6>
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

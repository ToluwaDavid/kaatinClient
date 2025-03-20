import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { login } from "../store/slices/authSlice";
import { useAppDispatch } from "../store";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter a valid email");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    setError(null);
    try {
      await dispatch(login({ email, password })).unwrap();
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-primary text-textPrimary">
        <div className="w-full max-w-md p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <p className="text-accent font-bold text-sm text-center mb-4">
            Login to your account using one of the login options below:
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
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
            <div className="mt-6">
              <Button type="submit">Login</Button>
            </div>
          </form>
          <div className="mt-4">Or</div>
          <div className="mt-4">
            <Button onClick={() => {}} type="submit">
              <FontAwesomeIcon
                icon={faGoogle}
                className="mr-2 font-extrabold text-xl"
              />
              Login with Google
            </Button>
          </div>
          <div className="mt-4">
            <h6>
              Don't have an account ?{" "}
              <Link
                to="/register"
                className="hover:text-accent transition duration-300"
              >
                Signup here
              </Link>{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useAppDispatch } from "../store/hooks"; // Import useAppDispatch instead of useDispatch
// import { login } from "../store/slices/authSlice";

// const Login: React.FC = () => {
//   const dispatch = useAppDispatch(); // Use the typed dispatch
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.email || !formData.password) {
//       setError("Please fill in all fields");
//       return;
//     }
//     setError(null);
//     try {
//       await dispatch(login(formData)).unwrap(); // use .unwrap() to handle errors better
//     } catch {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow-md w-80"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
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
//           className="w-full py-2 bg-blue-500 text-white rounded"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

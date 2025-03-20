import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "./services/api";
import { RootState } from "./store";
// import { UseSelector } from "react-redux";
import "./App.css";
import { fetchCards } from "./store/slices/cardSlice";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbarnew from "./components/navbarnew";
import Hero from "./pages/hero";
import Landingnew from "./pages/Landingnew";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      dispatch(fetchCards());
    }
  }, [dispatch]);

  // Render the Router with Routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newnav" element={<Navbarnew />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/landingnew" element={<Landingnew />} />
        {/* {isAuthenticated && <Route path="/dashboard" element={<Dashboard />} />} */}
      </Routes>
    </Router>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

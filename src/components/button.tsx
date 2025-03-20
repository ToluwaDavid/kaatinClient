import React from "react";

interface ButtonProps {
  // text: string;
  children: React.ReactNode; //Accepts jsx elements or strings as children
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-accent text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-500 transition duration-300"
  >
    {children}
  </button>
);

export default Button;

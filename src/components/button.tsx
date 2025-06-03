import React from "react";

interface ButtonProps {
  children: React.ReactNode; // Accepts JSX elements or strings
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean; // 👈 Add this
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false, // 👈 Default to false
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled} // 👈 Apply disabled state
    className={`bg-accent text-white px-6 py-2 rounded-md font-semibold transition duration-300 ${
      disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-500"
    }`}
  >
    {children}
  </button>
);

export default Button;

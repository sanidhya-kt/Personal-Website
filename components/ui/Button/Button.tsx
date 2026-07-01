import { ButtonProps } from "./button.types";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "rounded-xl font-medium transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",

    secondary: "bg-gray-800 text-white hover:bg-gray-700",

    outline: "border border-gray-600 text-white hover:bg-gray-800",

    ghost: "text-white hover:bg-gray-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
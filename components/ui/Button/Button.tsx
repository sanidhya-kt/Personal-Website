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
    primary: "bg-primary text-zinc-950 hover:bg-primary-hover shadow-lg shadow-primary/20",

    secondary: "bg-slate-800 text-slate-200 hover:bg-slate-700",

    outline: "border border-slate-700 text-slate-200 hover:bg-slate-800/50 hover:border-slate-600",

    ghost: "text-slate-300 hover:bg-slate-800/50 hover:text-white",
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
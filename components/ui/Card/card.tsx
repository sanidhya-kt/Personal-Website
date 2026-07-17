import { CardProps } from "./card.types";

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-card-border bg-card/60 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/5 ${className}`}
    >
      {children}
    </div>
  );
}
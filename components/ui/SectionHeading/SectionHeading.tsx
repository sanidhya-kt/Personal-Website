import { SectionHeadingProps } from "./section-heading.types";

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-4xl md:text-5xl font-bold text-slate-100 mb-8 ${className}`}
    >
      {children}
    </h2>
  );
}
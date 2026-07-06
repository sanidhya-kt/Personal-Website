import Button from "@/components/ui/Button";
import { NavbarProps } from "./navbar.types";

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <h1 className="text-2xl font-bold text-white">
          SANIDHYA
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Experience</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

        <Button size="sm">
          Resume
        </Button>

      </div>
    </nav>
  );
}
import { ButtonHTMLAttributes } from "react";

export type Buttonvarient = 
   | "primary"
   | "secondary"
   | "outline"
   | "ghost";

export type ButtonSize = 
| "sm"
| "md"
| "lg";

export interface ButtonProps
extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant ?: Buttonvarient;
    size?: ButtonSize;
    loading?: boolean;
}
   
// folow dont repeat youself principle.
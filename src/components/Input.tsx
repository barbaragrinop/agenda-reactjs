import { InputHTMLAttributes } from "react";
import '../'

type InputType = InputHTMLAttributes<HTMLInputElement>;
// ButtonHTMLAttributes<HTMLButtonElement>;

export function Input(props: InputType){
    return (
        <input type="text" className="input" {...props} />
    );
}

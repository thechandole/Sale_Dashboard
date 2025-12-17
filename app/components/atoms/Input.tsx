import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={`border px-3 py-2 rounded ${props.className ?? ""}`}
    />
  );
};

export default Input;

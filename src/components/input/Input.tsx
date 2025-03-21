import { ChangeEventHandler } from "react";

type InputProps = {
  input: {
    onChange: ChangeEventHandler<HTMLInputElement>;
    type: string | undefined;
    name: string | undefined;
    placeholder: string | undefined;
    autocomplete: string | undefined;
    value: string | undefined;
  };
  isToggler?: boolean;
  onTogglerHandler?: (e: React.MouseEvent) => void;
};

export const Input = ({ input }: InputProps) => {
  return (
    <input
      className="w-full focus:outline-none"
      type={input.type}
      id={input.name}
      name={input.name}
      value={input.value}
      placeholder={input.placeholder}
      autoComplete={input.autocomplete}
      onChange={input.onChange}
    />
  );
};

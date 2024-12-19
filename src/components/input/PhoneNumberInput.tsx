import { Input } from "./Input";
import PhoneIcon from "@mui/icons-material/Phone";

interface PhoneNumberInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
}

export const PhoneNumberInput = ({
  value,
  onChange,
  placeholder = "Enter your phone number",
  name,
}: PhoneNumberInputProps) => {
  return (
    <main className="grid gap-3">
      <h1 className="font-semibold font-jakarta text-base text-[#0B132A]">
        Phone Number
      </h1>
      <div className="border rounded-lg font-jakarta flex items-center justify-center py-1 px-2 gap-2">
        <div className="w-6 h-auto text-text">
          <PhoneIcon />
        </div>
        <Input
          input={{
            type: "tel",
            name: name,
            placeholder: placeholder,
            autocomplete: "phone",
            value: value,
            onChange: onChange,
          }}
        />
      </div>
    </main>
  );
};

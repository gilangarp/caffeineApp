import MailIcon from "@mui/icons-material/Mail";
import { Input } from "./Input";

interface EmailInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const EmailInput = ({ value, onChange , placeholder="Enter your email"}: EmailInputProps) => {
  return (
    <main className="grid gap-3">
      <h1 className="font-semibold font text-base text-[#0B132A]">Email</h1>
      <div className="border rounded-lg font-jakarta flex items-center justify-center py-1 px-2 gap-2">
        <div className="w-6 h-auto text-text">
          <MailIcon />
        </div>
        <Input
          input={{
            type: "email",
            name: "user_email",
            placeholder: placeholder,
            autocomplete: "email",
            value: value,
            onChange: onChange,
          }}
        />
      </div>
    </main>
  );
};

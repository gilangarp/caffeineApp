import { Input } from "./Input";
import PersonIcon from '@mui/icons-material/Person';

interface FullNameInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string
    name: string
  }
  
  export const FullNameInput = ({ value, onChange, placeholder="Enter your full name" ,name}: FullNameInputProps) => {
    return (
      <main className="grid gap-3">
        <h1 className="font-semibold font-jakarta text-base text-[#0B132A]">Full Name</h1>
        <div className="border rounded-lg font-jakarta flex items-center justify-center py-1 px-2 gap-2">
          <div className="w-6 h-auto text-text">
            <PersonIcon />
          </div>
          <Input
            input={{
              type: "text",
              name: name,
              placeholder: placeholder,
              autocomplete: "name",
              value: value,
              onChange: onChange,
            }}
          />
        </div>
      </main>
    );
  };
  
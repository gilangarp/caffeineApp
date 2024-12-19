import { Input } from "./Input";
import PlaceIcon from '@mui/icons-material/Place';

interface AddressInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
  }
  
  export const AddressInput = ({ value, onChange,placeholder="Enter your address" }: AddressInputProps) => {
    return (
      <main className="grid gap-3">
        <h1 className="font-semibold font-jakarta text-base text-[#0B132A]">Address</h1>
        <div className="border rounded-lg font-jakarta flex items-center justify-center py-1 px-2 gap-2">
          <div className="w-6 h-auto text-text">
            <PlaceIcon />
          </div>
          <Input
            input={{
              type: "text",
              name: "address",
              placeholder: placeholder,
              autocomplete: "street-address",
              value: value,
              onChange: onChange,
            }}
          />
        </div>
      </main>
    );
  };
  
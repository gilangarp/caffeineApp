import { PrimaryButton } from "../button/PrimaryButton";

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WarningModal = ({ isOpen, onClose }: WarningModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed w-full inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-fit rounded-xl shadow-lg p-6">
        <h1 className="font-bold text-5xl text-center text-text">⚠️ Warning</h1>
        <p className="text-lg text-text text-center mt-4">
          Please fill in all the required fields (Email, Full Name, Address).
        </p>
        <div className="flex justify-center mt-6">
          <PrimaryButton
            onClick={onClose}
            text="Close"
            style="px-5 font-bold text-white"
          />
        </div>
      </div>
    </div>
  );
};

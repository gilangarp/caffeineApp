import { numberToRupiah } from "../../utils/NumberToRupiah";
import { ButtonText } from "../button/ButtonText";
import { PrimaryButton } from "../button/PrimaryButton";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  total: number;
}

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  total,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed w-full inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-fit rounded-xl shadow-lg p-6">
        <h1 className="font-bold text-5xl text-center text-text">
          Confirm Checkout
        </h1>
        <p className="text-lg text-text text-center mt-4">
          Are you sure you want to proceed with the checkout? Your total is{" "}
          <span className="font-bold">{numberToRupiah(total)}</span>.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <ButtonText
            onClick={onClose}
            text="Cancel"
            border="outline-primary outline outline-2 rounded-md"
            style="px-5 font-bold text-primary"
          />
          <PrimaryButton
            onClick={onConfirm}
            text="Confirm"
            style="px-5 font-bold text-white"
          />
        </div>
      </div>
    </div>
  );
};

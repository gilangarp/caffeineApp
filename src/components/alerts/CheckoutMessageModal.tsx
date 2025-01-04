import { useState } from "react";
import { useStoreDispatch } from "../../hooks/useStore";
import { PrimaryButton } from "../button/PrimaryButton";
import { checkoutAction } from "../../redux/slice/CheckoutSlice";

interface CheckoutModalProps {
  textHeader: string;
  textBody: string;
  isOpen: boolean;
  onConfirm: () => void;
}

export const CheckoutMessageModal = ({
  textHeader,
  textBody,
  isOpen,
  onConfirm,
}: CheckoutModalProps) => {
  const dispatch = useStoreDispatch();
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setIsLoading(true);
    await dispatch(checkoutAction.removeAll());
    setTimeout(() => {
      setIsLoading(false);
      onConfirm();
    }, 2000);
  };

  return (
    <div
      className={` fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center`}
    >
      <div className="modal-content bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full text-center">
        <h2 className="text-sm tbt:text-2xl uw:text-4xl font-semibold mb-4">
          {textHeader}
        </h2>
        <p className="text-xs xsm:text-sm tbt:text-base uw:text-2xl mb-6">
          {textBody}
        </p>
        {isLoading ? (
          <PrimaryButton
            style="w-full text-sm"
            onClick={handleConfirm}
            text="Checkout..."
            disabled={isLoading}
          />
        ) : (
          <PrimaryButton
            style="w-full text-sm"
            onClick={handleConfirm}
            text="Checkout"
            disabled={isLoading}
          />
        )}
      </div>
    </div>
  );
};

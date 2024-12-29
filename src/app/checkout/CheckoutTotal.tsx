import { ConfirmationModal } from "../../components/alerts/ConfirmationAlert";
import { UseCheckoutTotal } from "./UseCheckoutTotal";
import { WarningModal } from "../../components/alerts/WarningModal";

interface TotalProps {
  order: string;
  delivery: string;
  tax: string;
  sub_Total: string;
  total: string;
}

export const CheckoutTotal = ({
  order,
  delivery,
  tax,
  sub_Total,
  total,
}: TotalProps) => {
  const {
    handleConfirm,
    isWarningModalOpen,
    setIsWarningModalOpen,
    isConfirmationModalOpen,
    setIsConfirmationModalOpen,
    handleCheckoutClick,
    isLoading,
  } = UseCheckoutTotal();

  return (
    <div className="grid gap-11 font-jakarta">
      <p className="text-2xl font-medium">Total</p>
      <div className="w-full border border-text rounded-xl border-opacity-10 p-4">
        <div className="flex justify-between">
          <span className="font-bold text-xl text-text">Order</span>
          <span className="font-bold text-xl text-black">Rp {order}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-bold text-xl text-text">Delivery</span>
          <span className="font-bold text-xl text-black">Rp {delivery}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-bold text-xl text-text">Tax</span>
          <span className="font-bold text-xl text-black">Rp {tax}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-bold text-xl text-text">Sub Total</span>
          <span className="font-bold text-xl text-black">Rp {sub_Total}</span>
        </div>

        <div className="w-full h-px bg-text my-4"></div>

        <div className="flex justify-between">
          <span className="font-bold text-xl text-text">Total</span>
          <span className="font-bold text-xl text-black">Rp {total}</span>
        </div>

        <button
          onClick={handleCheckoutClick}
          className={`bg-primary w-full font-medium text-base flex items-center justify-center py-2 rounded-lg ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="loader-spinner"></span> Checkout...
            </span>
          ) : (
            "Checkout"
          )}
        </button>
        <p className="text-xl text-gray-400 mt-2">
          *Click Checkout to continue payment
        </p>

        <ConfirmationModal
          isOpen={isConfirmationModalOpen}
          onClose={() => setIsConfirmationModalOpen(false)}
          onConfirm={handleConfirm}
          total={total}
        />
      </div>

      <WarningModal
        isOpen={isWarningModalOpen}
        onClose={() => setIsWarningModalOpen(false)}
      />
    </div>
  );
};

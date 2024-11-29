import { CheckoutMessageModal } from "../../components/alerts/CheckoutMessageModal";
import { CheckoutModal } from "../../components/alerts/CheckoutModal";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { TestimonialInputCard } from "../../components/cards/TestimonialInputCard";
import { UseCheckoutTotal } from "./useCheckoutTotal";
import { useModalContent } from "./UseModalContent";

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
    isModalOpen,
    isLoading,
    isSuccess,
    isMessageModalOpen,
    isReviewModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleConfirmCheckout,
    handleCloseMessageModal,
    handleReviewSubmit,
  } = UseCheckoutTotal();

  const { modalHeader, modalBody } = useModalContent(isLoading, isSuccess);

  return (
    <div className="grid gap-11">
      <p className="text-2xl font-medium">Total</p>

      <div className="w-full border border-text rounded-xl border-opacity-10">
        <div className="flex-col flex gap-4 p-4">
          <div className="flex-row flex justify-between">
            <div className="font-bold text-xl mb-2 text-text">Order</div>
            <div className="font-bold text-xl mb-2 text-black">Rp {order}</div>
          </div>

          <div className="flex-row flex justify-between">
            <div className="font-bold text-xl mb-2 text-text">Delivery</div>
            <div className="font-bold text-xl mb-2 text-black">
              Rp {delivery}
            </div>
          </div>

          <div className="flex-row flex justify-between">
            <div className="font-bold text-xl mb-2 text-text">Tax</div>
            <div className="font-bold text-xl mb-2 text-black">Rp {tax}</div>
          </div>

          <div className="flex-row flex justify-between">
            <div className="font-bold text-xl mb-2 text-text">Sub Total</div>
            <div className="font-bold text-xl mb-2 text-black">
              Rp {sub_Total}
            </div>
          </div>

          <div className="w-full h-[1px] bg-text"></div>

          <div className="flex-row flex justify-between">
            <div className="font-bold text-xl mb-2 text-text">Total</div>
            <div className="font-bold text-xl mb-2 text-black">Rp {total}</div>
          </div>

          <PrimaryButton
            onClick={handleOpenModal}
            text="Checkout"
            style="w-full font-bold"
          />

          <p className="text-xl text-gray-400">
            *Click Checkout to continue payment
          </p>

          <CheckoutModal
            textBody="Are you sure you want to proceed with the checkout?"
            textHeader={`Checkout Confirmation `}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleConfirmCheckout}
          />
          <CheckoutMessageModal
            isOpen={isMessageModalOpen}
            textBody={modalBody}
            textHeader={modalHeader}
            onConfirm={handleCloseMessageModal}
          />
          {isSuccess && isReviewModalOpen && (
            <TestimonialInputCard onSubmit={handleReviewSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

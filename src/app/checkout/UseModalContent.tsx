export const useModalContent = (isLoading: boolean, isSuccess: boolean) => {
  const modalHeader = isLoading
    ? "Processing your order..."
    : isSuccess
    ? "Order Successful!"
    : "";

  const modalBody = isLoading
    ? "Please wait while we process your payment."
    : isSuccess
    ? "Thank you for your order!"
    : "";

  return { modalHeader, modalBody };
};

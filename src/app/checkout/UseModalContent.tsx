export const useModalContent = (isLoading: boolean, isSuccess: boolean) => {
  const modalHeader = isLoading
    ? "Processing your order..."
    : isSuccess
    ? "Order Successful!"
    : "";

  const modalBody = isLoading
    ? "Please wait while we process your payment."
    : isSuccess
    ? "Thank you for your order! You will receive a confirmation email shortly."
    : "";

  return { modalHeader, modalBody };
};

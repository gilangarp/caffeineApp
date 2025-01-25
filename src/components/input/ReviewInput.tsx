import { ButtonText } from "../button/ButtonText";

interface ReviewInputProps {
  review: string;
  setReview: (review: string) => void;
  rating: number;
  setRating: (rating: number) => void;
  onClick: () => void;
  onClose: () => void;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
}

export const ReviewInput = ({
  review,
  setReview,
  rating,
  setRating,
  onClick,
  onClose,
  setErrorMessage,
  errorMessage,
}: ReviewInputProps) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  const handleSubmit = () => {
    if (!review.trim()) {
      setErrorMessage("Please write a review.");
      return;
    }
    if (rating === 0) {
      setErrorMessage("Please select a rating.");
      return;
    }

    setErrorMessage("");
    onClick();
  };

  return (
    <main className="fixed inset-0 p-5 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-5 border-2 rounded">
        <div>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="review input..."
            className="rounded w-96 h-32 border border-black border-opacity-20 p-2 mb-2 focus:outline-none "
          />
        </div>
        <div className="flex mb-2">
          {stars.map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-xl ${
                star <= rating ? "text-yellow-500" : "text-gray-400"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
        )}
        <div className="flex items-center gap-5">
          <ButtonText
            onClick={handleSubmit}
            text="Submite"
            border="border-2 border-primary"
            style="py-2 px-5 rounded-lg text-primary"
          />
          <ButtonText
            onClick={onClose}
            text="Close"
            border="border-2 border-primary"
            style="py-2 px-5 rounded-lg text-primary"
          />
        </div>
      </div>
    </main>
  );
};

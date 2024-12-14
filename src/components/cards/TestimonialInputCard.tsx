import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../button/PrimaryButton";
import { ReviewInput } from "../input/ReviewInput";
import { RatingInput } from "../rating/RatingInput";

interface ITestimonialInputCardProps {
  onSubmit: (review: string, rating: number) => void;
}

export const TestimonialInputCard = ({ onSubmit,}: ITestimonialInputCardProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/history-order");
  };
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (review && rating > 0) {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 200)); 
        await onSubmit(review, rating);
        setReview("");
        setRating(0);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="p-5 fixed inset-0 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full text-center grid gap-5">
        <h1 className="text-wrap text-heading_mobile lg:text-heading_desktop font-medium">
          Enter Your Review
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 ">
          <RatingInput rating={rating} setRating={setRating} />
          <ReviewInput review={review} setReview={setReview} />

          <div className="flex gap-3 ">
            <button
              type="submit"
              className="bg-primary text-black rounded-lg w-full py-2">
              {isLoading ? "Sending..." : "Send"}
            </button>
            <PrimaryButton style="w-full" onClick={handleClick} text="Close" />
          </div>
        </form>
      </div>
    </div>
  );
};

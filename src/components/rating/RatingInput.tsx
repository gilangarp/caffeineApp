
interface RatingInputProps {
    rating: number;
    setRating: (rating: number) => void;
  }
  
  export const RatingInput = ({ rating, setRating }: RatingInputProps) => {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  
    return (
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
    );
  };
  
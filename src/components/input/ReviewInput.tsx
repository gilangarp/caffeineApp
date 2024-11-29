interface ReviewInputProps {
    review: string;
    setReview: (review: string) => void;
  }
  
  export const ReviewInput = ({ review, setReview }: ReviewInputProps) => {
    return (
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="review input..."
        className="rounded border border-black border-opacity-20 p-2 mb-2 focus:outline-none "
      />
    );
  };
  
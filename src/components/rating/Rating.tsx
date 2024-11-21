interface IRatingProps {
    rating: number;
    textColor?: string; 
  }
  
  export const Rating = ({rating,textColor= 'white'}:IRatingProps) => {
    return (
      <div className="grid grid-cols-[auto,1fr]">
        <div className="text-primary">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`star ${
                index < rating ? "text-primary" : "text-gray-400"
              }`}>
              ★
            </span>
          ))}
        </div>
        <h1 className={`pl-1 text-${textColor}`}>{rating}.0</h1>
      </div>
    );
  };
  
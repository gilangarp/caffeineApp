interface TextButtonProps {
    text: string;
    onClick: () => void;
    style?: string;
    border?: string;
  }
  
  export const TextButton = ({ text, onClick, style ,border="border-none"}: TextButtonProps) => {
    return (
      <button className={`py-2 ${style} bg-transparent ${border} cursor-pointer `}
        onClick={onClick}>
        {text}
      </button>
    );
  };
  
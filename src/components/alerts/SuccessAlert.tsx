import { useEffect, useState } from "react";

interface SuccessAlertProps {
  message: string;
  duration?: number; 
  onClose?: () => void;
}

export const SuccessAlert = ({ message, duration, onClose,}: SuccessAlertProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) {
          onClose(); 
        }
      }, duration);
  
      return () => clearTimeout(timer);
    }, [duration, onClose]);
  
    if (!isVisible) return null;
  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center justify-between bg-green-500 text-white p-3 rounded-md shadow-lg min-w-[200px]">
        <span className="text-sm">{message}</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-xl font-bold bg-transparent border-none text-white cursor-pointer">
          ×
        </button>
      </div>
    </div>
  );
};

interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
  style?: string;
  disabled?: boolean;
}

export const PrimaryButton = ({
  text,
  onClick,
  style,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <button
      type="button"
      className={`rounded-lg ${style} text-black py-2 bg-primary opacity-100 border-none text-sm`}
      disabled={disabled}
      onClick={onClick}>
      {text}
    </button>
  );
};

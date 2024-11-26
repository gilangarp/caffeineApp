interface CardProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  style: string;
}

export const Card = ({ header, content, footer, style }: CardProps) => {
  return (
    <div
      className={`border border-gray-300 ${style} rounded-lg p-4 max-w-sm flex flex-col items-center justify-center`}>
      <div className="w-full text-center">{header}</div>
      <div className="mb-4 w-full text-center">{content}</div>
      <div className="w-full text-center">{footer}</div>
    </div>
  );
};

interface Message {
  type: "success" | "error";
  header: string;
  body: string;
}

interface MessageModalProps {
  message: Message | null;
  onClose: () => void;
}

export const MessageModal = ({ message, onClose }: MessageModalProps) => {
  if (!message) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-30"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center z-40">
        <div
          className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-sm ${
            message.type === "success" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <div className="mb-4">
            <h2 className="text-lg font-bold">{message.header}</h2>
          </div>
          <div className="mb-6">
            <p>{message.body}</p>
          </div>
          <div className="flex justify-end">
            <button
              className={`px-5 py-2 rounded-lg text-black ${
                message.type === "success" ? "bg-primary" : "bg-red-500"
              }`}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

import { Card } from "../cards/Card";

interface Message {
    type: "success" | "error";
    header: string;
    body: string;
  }
  
  interface MessageModalProps {
    message: Message | null;
    onClose: () => void;
  }
export const MessageModal = ({message,onClose}:MessageModalProps) => {
    if (!message) return null;
    return (
        <>
          <div className="fixed inset-0" />
          <div className="fixed inset-0 flex items-center justify-center z-90 bg-black opacity-80 z-40">
            <Card
              style={`p-4 rounded ${message.type === "success" ? "bg-green-100" : "bg-red-100"}`}
              header={<h2 className="text-lg font-bold">{message.header}</h2>}
              content={<p>{message.body}</p>}
              footer={
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
                  Close
                </button>
              }
            />
          </div>
        </>
      );
    }
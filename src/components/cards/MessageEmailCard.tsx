import React, { useState } from "react";

interface MessageModalProps {
  onClose: () => void;
}

export const MessageEmailCard = ({ onClose }: MessageModalProps) => {
  const [body, setBody] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Sending email with the following details:");
    console.log("Body:", body);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form
        className="modal-content bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full text-center gap-3"
        onSubmit={handleSubmit}>
        <h1 className="text-xl font-medium">question</h1>
        <div className="grid ">
          <textarea
            value={body}
            placeholder="enter question..."
            onChange={(e) => setBody(e.target.value)}
            required
            className="rounded border border-black border-opacity-20 p-2 mb-2 focus:outline-none "
          />
        </div>
        <button
          onClick={onClose}
          className="rounded-lg w-full text-black py-2 bg-primary opacity-100 border-none text-sm"
          type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

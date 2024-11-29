import { useState } from "react";
import imgMsg from "../../assets/images/blackMessage.png";
import { MessageEmailCard } from "./MessageEmailCard";

export const MessageCard = () => {
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="border grid grid-cols-1 gap-2 p-5">
      <img className="h-12 w-fit" src={imgMsg} alt="Send us a message" />
      <h1 className="text-lg text-text font-semibold">Send Us a Message</h1>
      <p className="text-text">
        If you're unable to find an answer or locate your product quickly,
        please describe your problem, and we will provide a solution.
      </p>
      <button onClick={handleOpenModal} className="w-full py-2 text-md bg-primary rounded-xl">
        Send Message
      </button>
      {showModal && <MessageEmailCard onClose={handleCloseModal} />}
    </div>
  );
};

import { useEffect, useState } from "react";

interface Snap {
  embed: (
    snapToken: string,
    options: {
      embedId: string;
      onSuccess: (result: any) => void;
      onPending?: () => void;
      onClose?: () => void;
    }
  ) => void;
  close: () => void;
}

declare global {
  interface Window {
    snap?: Snap;
  }
}

interface SnapEmbedAction {
  onSuccess: (result: any) => void;
  onPending: () => void;
  onClose: () => void;
}

export const useSnap = () => {
  const [snap, setSnap] = useState<Snap | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [closed, setClosed] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const myMidtransClientKey = import.meta.env.MIDTRANS_SERVER_KEY;
    const script = document.createElement("script");

    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", myMidtransClientKey);

    script.onload = () => {
      if (window.snap) {
        setSnap(window.snap);
      } else {
        setError("Snap script failed to load.");
      }
    };

    script.onerror = () => {
      setError("Error loading Snap script.");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const snapEmbed = (
    snapToken: string,
    embedId: string,
    action?: SnapEmbedAction
  ) => {
    try {
      console.log("snapToken:", snapToken);
      console.log("embedId:", embedId);
      console.log("action:", action);

      if (!snap) {
        setError("Snap is not initialized.");
        console.error("Snap is not initialized.");
        return;
      }

      setPending(true);
      snap.embed(snapToken, {
        embedId,
        onSuccess: function (result) {
          console.log("Transaction successful:", result);
          setPending(false);
          action?.onSuccess(result);
        },
        onPending: function () {
          console.log("Transaction is pending.");
          setPending(true);
          action?.onPending();
        },
        onClose: function () {
          console.log("Snap widget closed.");
          setClosed(true);
          setPending(false);
          action?.onClose();
        },
      });
    } catch (error) {
      console.error("Error in snapEmbed:", error);
      setError("Error initializing Snap embed.");
    }
  };

  const closeSnap = () => {
    if (snap) {
      snap.close();
      setClosed(true);
      setPending(false);
    }
  };

  return { snap, pending, closed, error, snapEmbed, closeSnap };
};

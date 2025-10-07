import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

const ChatbotButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-chatbot', handler);
    return () => window.removeEventListener('open-chatbot', handler);
  }, []);
  const [message, setMessage] = useState("");

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed",
          bottom: 54,
          right: 16,
          zIndex: 1000,
          background: "#2563eb",
          color: "white",
          borderRadius: 18,
          minWidth: 90,
          height: 36,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          border: "none",
          cursor: "pointer",
          fontSize: 13,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 12px",
          fontWeight: "bold",
          gap: 6,
        }}
        aria-label="Open chatbot"
      >
        <MessageSquare style={{ width: 16, height: 16, marginRight: 6 }} />
        <span style={{ display: "inline-block", verticalAlign: "middle", lineHeight: "1" }}>Ask Toffy</span>
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 54,
            right: 16,
            zIndex: 1000,
            width: window.innerWidth < 768 ? 240 : 360,
            height: window.innerWidth < 768 ? 320 : 440,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#2563eb",
            color: "#fff",
            padding: window.innerWidth < 768 ? "8px 12px 8px 10px" : "12px 20px 12px 16px",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            fontWeight: "bold",
            fontSize: window.innerWidth < 768 ? 14 : 18,
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: window.innerWidth < 768 ? 5 : 8 }}>
              <MessageSquare style={{ width: window.innerWidth < 768 ? 14 : 22, height: window.innerWidth < 768 ? 14 : 22 }} />
              Ask Toffy
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: window.innerWidth < 768 ? 16 : 22,
                cursor: "pointer",
                color: "#fff",
                marginLeft: 8,
              }}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: window.innerWidth < 768 ? "8px" : "16px" }}>
            <p>Hello! How can I help you?</p>
            {/* Add your chatbot UI here */}
          </div>
          <div style={{ display: "flex", gap: window.innerWidth < 768 ? 4 : 8, padding: window.innerWidth < 768 ? "8px 8px" : "12px 16px", borderTop: "1px solid #e5e7eb", background: "#f9fafb" }}>
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: window.innerWidth < 768 ? 6 : 10,
                borderRadius: window.innerWidth < 768 ? 7 : 10,
                border: "1px solid #e5e7eb",
                outline: "none",
                fontSize: window.innerWidth < 768 ? 12 : 16,
              }}
            />
            <button
              onClick={() => { setMessage(""); }}
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: 10,
                padding: window.innerWidth < 768 ? "0 10px" : "0 20px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: window.innerWidth < 768 ? 12 : 16,
              }}
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;

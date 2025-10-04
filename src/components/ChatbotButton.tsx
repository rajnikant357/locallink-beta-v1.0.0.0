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
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: "#2563eb",
          color: "white",
          borderRadius: 24,
          minWidth: 140,
          height: 52,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          border: "none",
          cursor: "pointer",
          fontSize: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 20px",
          fontWeight: "bold",
          gap: 8,
        }}
        aria-label="Open chatbot"
      >
        <MessageSquare style={{ width: 22, height: 22, marginRight: 8 }} />
        <span style={{ display: "inline-block", verticalAlign: "middle", lineHeight: "1" }}>Ask Toffy</span>
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            zIndex: 1000,
            width: 360,
            height: 440,
            background: "#fff",
            borderRadius: 20,
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
            padding: "12px 20px 12px 16px",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            fontWeight: "bold",
            fontSize: 18,
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <MessageSquare style={{ width: 22, height: 22 }} />
              Ask Toffy
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: 22,
                cursor: "pointer",
                color: "#fff",
                marginLeft: 8,
              }}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
            <p>Hello! How can I help you?</p>
            {/* Add your chatbot UI here */}
          </div>
          <div style={{ display: "flex", gap: 8, padding: "12px 16px", borderTop: "1px solid #e5e7eb", background: "#f9fafb" }}>
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 10,
                border: "1px solid #e5e7eb",
                outline: "none",
                fontSize: 16,
              }}
            />
            <button
              onClick={() => { setMessage(""); }}
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: 10,
                padding: "0 20px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: 16,
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

import { useEffect, useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { MessageSquare, ArrowLeft, ChevronDown } from "lucide-react";

export interface MessagesOverlayProps {
  open: boolean;
  onClose: () => void;
  zIndex?: number;
}
export interface MessagesOverlayProps {
  open: boolean;
  onClose: () => void;
  zIndex?: number;
}

const MessagesOverlay = ({ open, onClose, zIndex = 100 }: MessagesOverlayProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Demo chat state
  const [view, setView] = useState<'list' | 'chat'>('list');
  const [messages, setMessages] = useState([
    { from: 'provider', text: 'Hello! How can I help you today?' }
  ]);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (view === 'chat' && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, view]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { from: 'user', text: input }]);
      setInput('');
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 md:bg-transparent"
      style={{ minHeight: '100vh', zIndex }}
      onClick={onClose}
    >
      <div
        className="w-[100vw] h-[100vh] md:w-[420px] md:h-auto md:rounded-2xl md:shadow-2xl bg-background flex items-center justify-center md:fixed md:top-8 md:right-8"
        style={{ maxWidth: '100vw', maxHeight: '100vh' }}
        onClick={e => e.stopPropagation()}
      >
        <Card className="w-full h-full rounded-none shadow-none md:w-[420px] md:h-auto md:rounded-2xl md:shadow-2xl bg-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              Messages
              <button onClick={onClose} className="ml-auto text-muted-foreground hover:text-primary text-xl font-bold">×</button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {view === 'list' ? (
              <div className="flex flex-col items-center min-h-[300px] w-full">
                {/* Demo chat at the top, future chats can be mapped below */}
                <div className="w-full">
                  <button
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors border mb-2"
                    onClick={() => setView('chat')}
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-200 text-blue-900 font-bold">P</span>
                    <span className="flex-1 text-left">Demo chat</span>
                    <span className="text-xs text-muted-foreground">Online</span>
                  </button>
                  {/* Future chat items would be mapped here */}
                </div>
                <p className="text-muted-foreground text-sm mt-2">Tap to open a demo chat.</p>
              </div>
            ) : (
              <div className="flex flex-col h-[350px] md:h-[400px] md:relative flex-1">
                {/* Chat header with back arrow, profile photo, and name */}
                <div className="flex items-center gap-3 px-3 py-2 border-b bg-background rounded-t-lg">
                  <button
                    type="button"
                    className="text-muted-foreground hover:text-primary text-xl font-bold"
                    onClick={() => setView('list')}
                  >
                    <ArrowLeft className="h-6 w-6" />
                  </button>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-200 text-blue-900 font-bold">P</span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-base">Demo chat</span>
                    <span className="text-xs text-green-600">Online</span>
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto px-2 py-3 bg-muted/30 md:mb-0 mb-[60px]">
                  {messages.map((msg, i) => {
                    const isUser = msg.from === 'user';
                    return (
                      <div
                        key={i}
                        className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}
                      >
                        <div className="relative flex items-center group">
                          {/* Message bubble */}
                          <div
                            className={`px-3 py-2 rounded-2xl max-w-[70%] text-sm ${
                              isUser
                                ? 'bg-blue-500 text-white rounded-br-sm'
                                : 'bg-gray-200 text-gray-900 rounded-bl-sm'
                            }`}
                          >
                            {msg.text}
                          </div>
                          {/* Dropdown arrow (inner side) */}
                          <button
                            type="button"
                            className={`ml-1 mr-1 p-1 rounded-full hover:bg-muted/50 focus:outline-none ${isUser ? '' : ''}`}
                            style={{ order: isUser ? -1 : 1 }}
                            onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                            aria-label="Show message actions"
                          >
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </button>
                          {/* Edit/Delete buttons, shown if dropdown open for this message, below the arrow */}
                          {openDropdown === i && (
                            <div className="absolute left-1/2 -translate-x-1/2 mt-1 flex flex-col gap-1 z-10" style={{ top: 'calc(100% + 4px)' }}>
                              {isUser && (
                                <button
                                  type="button"
                                  className="px-2 py-1 bg-blue-500 text-white text-xs rounded shadow"
                                  onClick={() => {
                                    // For demo, just alert. You can implement edit logic here.
                                    alert('Edit message feature coming soon!');
                                    setOpenDropdown(null);
                                  }}
                                >
                                  Edit
                                </button>
                              )}
                              <button
                                type="button"
                                className="px-2 py-1 bg-red-500 text-white text-xs rounded shadow"
                                onClick={() => {
                                  setMessages(messages.filter((_, idx) => idx !== i));
                                  setOpenDropdown(null);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>
                {/* Message input at bottom for mobile, normal for desktop */}
                <form
                  onSubmit={handleSend}
                  className="flex items-center gap-2 p-2 border-t bg-background rounded-b-lg md:static md:mt-0 fixed bottom-0 left-0 w-full md:w-auto md:rounded-b-lg md:border-t z-20"
                  style={{
                    maxWidth: '100vw',
                  }}
                >
                  <input
                    className="flex-1 px-3 py-2 rounded-full border bg-white text-sm outline-none"
                    placeholder="Type a message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Send
                  </button>
                </form>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MessagesOverlay;

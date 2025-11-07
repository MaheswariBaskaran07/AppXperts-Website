import React, { useEffect, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { toast } from "react-toastify";

const STORAGE_KEY = "cb_chat_messages_v1";

// Simple Input component
const Input = ({ placeholder, value, onChange, onKeyDown, ...props }) => (
  <input
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    style={{
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #d1d5db",
      borderRadius: "6px",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.2s",
    }}
    onFocus={(e) => e.target.style.borderColor = "linear-gradient(180deg, #263fe3, #00a9e5"}
    onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
    {...props}
  />
);

// Simple Button component
const Button = ({ onClick, disabled, children, ...props }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      padding: "8px 12px",
      background: disabled ? "#9ca3af" : "linear-gradient(180deg, #263fe3, #00a9e5",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background-color 0.2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    onMouseEnter={(e) => {
      if (!disabled) {
        e.target.style.backgroundColor = "#7c3aed";
      }
    }}
    onMouseLeave={(e) => {
      if (!disabled) {
        e.target.style.background = "linear-gradient(180deg, #263fe3, #00a9e5";
      }
    }}
    {...props}
  >
    {children}
  </button>
);

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {
      // ignore
    }
  }, [messages]);

  const pushEvent = (name, payload = {}) => {
    try {
      // analytics if present
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: name, ...payload });
    } catch (e) {
      // ignore
    }
    console.log("analytics:", name, payload);
  };

  const faqs = [
    {
      q: "What is ERP?",
      a: "ERP (Enterprise Resource Planning) is an integrated software system that manages core business processes like accounting, inventory, HR, and sales in one platform.",
    },
    {
      q: "How does ERP help my business?",
      a: "ERP helps you centralize operations, reduce manual work, and get real-time insights across departments, improving efficiency and decision-making.",
    },
    { 
      q: "Can I use ERP on mobile?", 
      a: "Yes, our ERP supports mobile access via responsive web design and mobile apps." 
    },
    { 
      q: "How do I log in to ERP?", 
      a: "Visit your company's ERP URL, enter your user ID and password, and click 'Login.' Contact your admin if you face issues." 
    },
    { 
      q: "How to back up ERP data?", 
      a: "Data is automatically backed up daily. You can also export manually under Settings → Backup." 
    },
  ];

  const handleFAQSelect = (faq) => {
    // Insert user question and bot answer locally (no API call) so the user gets immediate help
    const now = Date.now();
    const userMsg = { id: String(now), by: "user", text: faq.q, time: now };
    const botMsg = { id: String(now + 1), by: "bot", text: faq.a, time: now + 1 };
    setMessages((m) => [...m, userMsg, botMsg]);
    pushEvent("chatbot:faq_selected", { question: faq.q });
  };

  const sendToApi = async (msg) => {
    setIsSending(true);
    pushEvent("chatbot:free_text_sent", { text: msg });

    const payload = {
      FirstName: "Website Chat",
      LastName: "",
      EmailId: email || "",
      PhoneNo: "",
      CompanyName: "Website Chat",
      NoOfEmployee: 0,
      HearAboutUsId: 0,
      InterestedInId: 4,
      Message: msg,
    };

    try {
      const res = await fetch("https://appxpertsweb.appxes-erp.in/api/CustomerInquiry/addCustomerInquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        // show bot acknowledgement
        const botText = data?.message || "Thanks — we've received your message. Our team will contact you soon.";
        setMessages((m) => [
          ...m,
          { id: String(Date.now()), by: "bot", text: botText, time: Date.now() },
        ]);
        toast.success("Message sent! We'll get back to you soon.");
        pushEvent("chatbot:free_text_replied", { text: botText });
      } else {
        toast.error(data?.message || "Failed to send message. Please try again later.");
        pushEvent("chatbot:free_text_failed", { status: res.status });
      }
    } catch (e) {
      toast.error("Network error. Unable to send your message right now.");
      pushEvent("chatbot:free_text_failed", { error: String(e) });
    } finally {
      setIsSending(false);
    }
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;
    // add user message
    const userMsg = { id: String(Date.now()), by: "user", text, time: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    await sendToApi(text);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '80px', // Always 80px from bottom (above WhatsApp)
        zIndex: 999, // Just below WhatsApp icon z-index
        transition: 'all 0.3s ease',
      }}
    >
      {!open && (
     <button
  onClick={() => { 
    setOpen(true); 
    pushEvent("chatbot:open_toggle", { open: true }); 
  }}
  style={{position: "fixed",
  bottom: "80px",
  right: "20px",
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  background: "linear-gradient(180deg, #263fe3, #00a9e5)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease"}}
  aria-label="Open chat"
>
  <MessageCircle className="chatbot-icon" />
</button>

      )}

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MessageCircle className="w-5 h-5" />
              <div style={{ fontWeight: 500 }}>Chat with us</div>
            </div>
            <button 
              onClick={() => { 
                setOpen(false); 
                pushEvent("chatbot:open_toggle", { open: false }); 
              }} 
              aria-label="Close chat"
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "4px",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="chatbot-messages" id="chat-messages">
            {messages.length === 0 && (
              <div style={{ fontSize: "14px", color: "#6b7280", padding: "12px" }}>
                Hi — ask us anything about AppXperts. We'll reply shortly.
              </div>
            )}
            {messages.map((m) => (
              <div 
                key={m.id} 
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: m.by === "user" ? "flex-end" : "flex-start"
                }}
              >
                <div 
                  style={{
                    maxWidth: "80%",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    background: m.by === "user" ? "linear-gradient(180deg, #263fe3, #00a9e5" : "#f3f4f6",
                    color: m.by === "user" ? "white" : "#374151",
                    fontSize: "14px",
                    lineHeight: "1.4"
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ chips: 3 per row, no horizontal scroll, placed above the input */}
          <div className="chatbot-faqs">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
              {faqs.map((f) => (
                <button
                  key={f.q}
                  onClick={() => handleFAQSelect(f)}
                  aria-label={`Ask: ${f.q}`}
                  title={f.q}
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                    padding: "6px 8px",
                    backgroundColor: "#f3f4f6",
                    border: "none",
                    borderRadius: "9999px",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#e5e7eb"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#f3f4f6"}
                >
                  {f.q}
                </button>
              ))}
            </div>
          </div>

          <div className="chatbot-input-area">
            <div style={{ marginBottom: "8px" }}>
              <Input 
                placeholder="Your email (optional)" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <Input 
                placeholder="Type a message..." 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => { 
                  if (e.key === "Enter") { 
                    e.preventDefault(); 
                    handleSend(); 
                  } 
                }} 
              />
              <Button onClick={handleSend} disabled={isSending} aria-label="Send message">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <style>{`
            .chatbot-window {
              position: absolute;
              bottom: 65px;
              right: 0;
              width: 384px;
              max-width: calc(100vw - 48px);
              background: white;
              border-radius: 12px;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
              border: 1px solid #e5e7eb;
              overflow: hidden;
              transform-origin: bottom right;
              animation: chatbotOpen 0.3s ease-out;
            }
            
            @keyframes chatbotOpen {
              0% {
                opacity: 0;
                transform: scale(0.8) translateY(10px);
              }
              100% {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
            
            .chatbot-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 12px 16px;
              background: linear-gradient(180deg, #263fe3, #00a9e5);
              color: white;
            }
            
            .chatbot-messages {
              padding: 12px;
              max-height: 300px;
              height: 240px;
              overflow-y: auto;
              scroll-behavior: smooth;
            }
            
            .chatbot-faqs {
              padding: 8px 12px;
              border-top: 1px solid #e5e7eb;
            }
            
            .chatbot-input-area {
              padding: 12px;
              border-top: 1px solid #e5e7eb;
              padding-bottom: 12px;
            }
            
            @media (max-width: 768px) {
              .chatbot-window {
                width: calc(100vw - 48px);
                right: -12px;
              }
              
              .chatbot-messages {
                height: 200px;
                max-height: 250px;
              }
            }
            
            @media (max-width: 480px) {
              .chatbot-window {
                width: calc(100vw - 32px);
                right: -4px;
                bottom: 60px;
              }
            }
            
           .chatbot-toggle-btn {
  position: fixed;
  bottom: 100px; /* adjust so it sits above WhatsApp button */
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #2563eb; /* blue fill */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.chatbot-toggle-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(37,99,235,0.4);
}

.chatbot-toggle-btn .chatbot-icon {
  width: 26px;
  height: 26px;
  color: #fff; /* white icon */
  stroke-width: 2.2;
}

            .chatbot-toggle-btn:active {
              transform: scale(0.95);
            }
              .chatbot-icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #2563eb; /* Blue fill */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white; /* White outline */
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3); /* Outer circle glow/ring */
  transition: all 0.3s ease;
}

.chatbot-toggle-btn:hover .chatbot-icon-circle {
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.45);
  transform: scale(1.05);
}

.chatbot-icon {
  width: 22px;
  height: 22px;
  color: white; /* White icon inside blue circle */
  stroke-width: 2.2;
}

            
            /* Custom scrollbar for chat messages */
            .chatbot-messages::-webkit-scrollbar {
              width: 4px;
            }
            
            .chatbot-messages::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 2px;
            }
            
            .chatbot-messages::-webkit-scrollbar-thumb {
              background: #c1c1c1;
              border-radius: 2px;
            }
            
            .chatbot-messages::-webkit-scrollbar-thumb:hover {
              background: #a1a1a1;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
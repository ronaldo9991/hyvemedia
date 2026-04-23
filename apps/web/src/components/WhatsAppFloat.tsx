import { MessageCircle } from "lucide-react";

const WHATSAPP_MESSAGE =
  "Hi HYVE, I'd like to talk about accelerating our growth. When can we chat?";

const WhatsAppFloat = () => {
  const href = `https://wa.me/971500000000?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] flex items-center justify-center rounded-full w-12 h-12 shadow-lg transition-transform hover:scale-[1.05]"
      style={{
        background: "linear-gradient(135deg, var(--color-orange-light) 0%, var(--color-orange) 55%, var(--color-orange-dark) 100%)",
        color: "#ffffff",
        boxShadow: "0 10px 28px rgb(var(--color-orange-rgb) / 0.38)",
      }}
    >
      <MessageCircle size={20} />
    </a>
  );
};

export default WhatsAppFloat;

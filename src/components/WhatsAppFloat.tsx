import { MessageCircle } from "lucide-react";

const WHATSAPP_MESSAGE =
  "Hi HYVE Media, I would like to learn more about your communications services.";

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
        background: "linear-gradient(135deg, #ff9a1f 0%, #ff7b00 55%, #ff5e00 100%)",
        color: "#ffffff",
        boxShadow: "0 10px 28px rgba(255, 123, 0, 0.38)",
      }}
    >
      <MessageCircle size={20} />
    </a>
  );
};

export default WhatsAppFloat;

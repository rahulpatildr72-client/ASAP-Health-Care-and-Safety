import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/site";

/** Floating WhatsApp click-to-chat button, shown on every page. */
export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello! I'd like to know more about your First Aid & CPR training programs."
  );
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-float transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}

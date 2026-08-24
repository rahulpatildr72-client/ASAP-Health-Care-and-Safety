import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/site";

/** Floating WhatsApp button — minimal editorial style: small, surface-colored, hairline border. */
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
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center border border-[rgba(0,0,0,0.12)] bg-surface text-ink transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

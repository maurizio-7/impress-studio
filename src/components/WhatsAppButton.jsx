import React from "react";

const WHATSAPP_NUMBER = "260763955838";

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-interactive text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-brand-interactive-hover hover:scale-110"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2 22l5.36-1.4a9.9 9.9 0 004.68 1.19h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.18 3.04 14.69 2 12.04 2zm0 18.13h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.18.83.85-3.1-.2-.32a8.18 8.18 0 01-1.26-4.35c0-4.53 3.69-8.22 8.22-8.22 2.2 0 4.26.86 5.82 2.41a8.16 8.16 0 012.4 5.81c0 4.53-3.69 8.22-8.22 8.22zm4.51-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.77-1.83-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.06 0 1.22.88 2.4 1 2.56.13.17 1.74 2.66 4.22 3.72.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.19-.06-.11-.23-.17-.48-.29z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;

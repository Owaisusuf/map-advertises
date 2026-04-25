import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhatsAppFab = () => {
  const url = `https://wa.me/919086001122?text=${encodeURIComponent("Hi, I'm interested in your advertising services.")}`;
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-cm flex items-center justify-center shadow-glow-cyan"
    >
      <MessageCircle className="h-6 w-6 text-white" />
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
    </motion.a>
  );
};
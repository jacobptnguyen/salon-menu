import { motion } from "framer-motion";

export default function BackButton({ onClick, label = "Back" }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className="fixed top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-surface/90 px-4 py-2 font-body text-sm font-medium text-text-primary shadow-card backdrop-blur"
      aria-label={label}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </motion.button>
  );
}

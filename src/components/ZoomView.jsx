import { useState } from "react";
import { motion } from "framer-motion";
import ColorImage from "./ColorImage.jsx";
import FinishTag from "./FinishTag.jsx";
import BackButton from "./BackButton.jsx";

export default function ZoomView({ color, onBack }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="relative min-h-screen bg-bg"
    >
      <BackButton onClick={onBack} label="Colors" />

      <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
        <motion.div
          layoutId={`color-card-${color.id}`}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-full max-w-sm overflow-hidden rounded-card shadow-card"
          onClick={() => setZoomed((z) => !z)}
        >
          <motion.div
            animate={{ scale: zoomed ? 1.8 : 1 }}
            drag={zoomed}
            dragConstraints={{ left: -120, right: 120, top: -120, bottom: 120 }}
            dragElastic={0.15}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="cursor-zoom-in"
            style={{ cursor: zoomed ? "grab" : "zoom-in" }}
          >
            <ColorImage
              image={color.image}
              swatchHex={color.swatchHex}
              alt={color.name}
              className="aspect-square w-full"
            />
          </motion.div>
        </motion.div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <h1 className="text-center font-display text-[22px] font-semibold text-text-primary">
            {color.name}
          </h1>
          <div className="flex items-center gap-2">
            <FinishTag finish={color.finish} />
            <span className="font-body text-xs text-text-secondary">
              {color.number}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

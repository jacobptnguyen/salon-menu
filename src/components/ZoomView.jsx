import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import ColorImage from "./ColorImage.jsx";
import BackButton from "./BackButton.jsx";

const ZoomView = forwardRef(function ZoomView({ color, onBack }, ref) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="relative min-h-screen bg-bg"
    >
      <BackButton onClick={onBack} label="Colors" />

      <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
        <div
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
              alt={color.name ?? color.number}
              className="aspect-square w-full"
            />
          </motion.div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-1">
          {color.brand && (
            <p className="text-center font-display text-lg font-medium uppercase tracking-wide text-black">
              {color.brand}
            </p>
          )}
          <h1 className="text-center font-display text-[28px] font-bold text-black">
            {color.name ?? color.number}
          </h1>
          {color.name && (
            <p className="text-center font-display text-xl font-semibold text-black">
              {color.number}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
});

export default ZoomView;

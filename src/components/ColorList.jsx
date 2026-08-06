import { motion } from "framer-motion";
import ColorImage from "./ColorImage.jsx";
import FinishTag from "./FinishTag.jsx";
import BackButton from "./BackButton.jsx";

export default function ColorList({ category, onSelectColor, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="mx-auto min-h-screen max-w-md px-4 pb-10 pt-8"
    >
      <BackButton onClick={onBack} label="Categories" />

      <motion.h1
        layoutId={`category-card-${category.id}`}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mb-6 text-center font-display text-[26px] font-semibold text-text-primary"
      >
        {category.name}
      </motion.h1>

      <div className="grid grid-cols-2 gap-4">
        {category.colors.map((color) => (
          <motion.button
            key={color.id}
            type="button"
            layoutId={`color-card-${color.id}`}
            onClick={() => onSelectColor(color.id)}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden rounded-card bg-surface text-left shadow-card"
          >
            <ColorImage
              image={color.image}
              swatchHex={color.swatchHex}
              alt={color.name}
              className="aspect-square w-full"
            />
            <div className="space-y-1.5 px-3 py-3">
              <p className="truncate font-body text-sm font-medium text-text-primary">
                {color.name}
              </p>
              <div className="flex items-center justify-between gap-2">
                <FinishTag finish={color.finish} />
                <span className="font-body text-xs text-text-secondary">
                  {color.number}
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

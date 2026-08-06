import { forwardRef } from "react";
import { motion } from "framer-motion";
import ColorImage from "./ColorImage.jsx";
import BackButton from "./BackButton.jsx";

const ColorList = forwardRef(function ColorList({ category, onSelectColor, onBack }, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="mx-auto min-h-screen max-w-md px-4 pb-10 pt-8"
    >
      <BackButton onClick={onBack} label="Categories" />

      <h1 className="mb-6 text-center font-display text-[26px] font-semibold text-text-primary">
        {category.name}
      </h1>

      {category.colors.length === 0 ? (
        <p className="mt-16 text-center font-display text-lg text-text-secondary">
          No colors to display yet
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {category.colors.map((color) => (
            <motion.button
              key={color.id}
              type="button"
              onClick={() => onSelectColor(color.id)}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden rounded-card bg-surface text-left shadow-card"
            >
              <ColorImage
                image={color.image}
                swatchHex={color.swatchHex}
                alt={color.name ?? color.number}
                className="aspect-square w-full"
              />
              <div className="space-y-1 px-3 py-3">
                <p className="font-display text-lg font-bold text-text-primary">
                  {color.number}
                </p>
                {color.name && (
                  <p className="truncate font-display text-sm font-semibold text-text-primary">
                    {color.name}
                  </p>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      )}
    </motion.div>
  );
});

export default ColorList;

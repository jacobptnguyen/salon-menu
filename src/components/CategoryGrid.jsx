import { forwardRef } from "react";
import { motion } from "framer-motion";
import ColorImage from "./ColorImage.jsx";

const CategoryGrid = forwardRef(function CategoryGrid({ categories, onSelectCategory }, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="mx-auto min-h-screen max-w-md px-4 pb-10 pt-8"
    >
      <h1 className="mb-8 text-center font-display text-[30px] font-semibold leading-tight text-text-primary">
        LA Salon &amp; Spa
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            type="button"
            onClick={() => onSelectCategory(category.id)}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden rounded-card bg-surface text-left shadow-card"
          >
            <ColorImage
              image={category.coverImage}
              swatchHex={category.swatchHex}
              alt={category.name}
              className="aspect-square w-full"
            />
            <div className="px-3 py-3">
              <h2 className="text-center font-display text-[20px] font-medium text-text-primary">
                {category.name}
              </h2>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
});

export default CategoryGrid;

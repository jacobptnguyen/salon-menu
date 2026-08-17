import { forwardRef } from "react";
import { motion } from "framer-motion";
import ColorImage from "./ColorImage.jsx";
import NailShapeIcon from "./NailShapeIcon.jsx";
import SelectionBadge from "./SelectionBadge.jsx";
import BackButton from "./BackButton.jsx";

const CategoryGrid = forwardRef(function CategoryGrid({ categories, selectedShape, onSelectCategory, onBack }, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="mx-auto min-h-screen max-w-md px-4 pb-10 pt-8"
    >
      <BackButton onClick={onBack} label="Shapes" />

      {selectedShape && (
        <div className="fixed top-4 right-4 z-20 flex flex-col items-end gap-2">
          <SelectionBadge
            icon={<NailShapeIcon shape={selectedShape} className="h-5 w-5 shrink-0" />}
            label={selectedShape.name}
          />
        </div>
      )}

      <h1 className="mb-6 mt-14 text-center font-display text-[26px] font-semibold text-black">
        Choose a Category
      </h1>

      <div className="grid grid-cols-3 gap-3">
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
              shimmer={category.id === "shimmer"}
              className="aspect-square w-full"
            />
            <div className="px-2 py-2">
              <h2 className="text-center font-display text-[15px] font-medium leading-tight text-black">
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

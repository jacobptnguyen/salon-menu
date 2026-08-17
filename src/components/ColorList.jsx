import { forwardRef } from "react";
import { motion } from "framer-motion";
import ColorImage from "./ColorImage.jsx";
import NailShapeIcon from "./NailShapeIcon.jsx";
import SelectionBadge from "./SelectionBadge.jsx";
import BackButton from "./BackButton.jsx";

const ColorList = forwardRef(function ColorList({ category, selectedShape, onSelectColor, onBack }, ref) {
  const collections = category.collections.filter((collection) => collection.colors.length > 0);

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

      {selectedShape && (
        <div className="fixed top-4 right-4 z-20 flex flex-col items-end gap-2">
          <SelectionBadge
            icon={<NailShapeIcon shape={selectedShape} className="h-5 w-5 shrink-0" />}
            label={selectedShape.name}
          />
          <SelectionBadge
            icon={
              <span
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: category.swatchHex }}
              />
            }
            label={category.name}
          />
        </div>
      )}

      <h1 className="mb-6 mt-14 text-center font-display text-[26px] font-semibold text-black">
        Choose a Color
      </h1>

      {collections.length === 0 ? (
        <p className="mt-16 text-center font-display text-lg text-black">
          No colors to display yet
        </p>
      ) : (
        <div className="space-y-8">
          {collections.map((collection) => (
            <div key={collection.id}>
              <div className="mb-3">
                {collection.brand && (
                  <p className="font-display text-sm font-bold uppercase tracking-wide text-black">
                    {collection.brand}
                  </p>
                )}
                <h2 className="font-display text-lg font-bold text-black">{collection.name}</h2>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {collection.colors.map((color) => {
                  const primary = color.name ?? color.number;
                  const secondary = color.name ? color.number : null;
                  return (
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
                        alt={primary}
                        className="aspect-square w-full"
                      />
                      <div className="space-y-0.5 px-2 py-2">
                        <p className="truncate font-display text-sm font-bold text-black">
                          {primary}
                        </p>
                        {secondary && (
                          <p className="truncate font-display text-sm text-black">{secondary}</p>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
});

export default ColorList;

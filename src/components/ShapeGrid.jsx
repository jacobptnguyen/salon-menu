import { forwardRef } from "react";
import { motion } from "framer-motion";
import NailShapeIcon from "./NailShapeIcon.jsx";

const ShapeGrid = forwardRef(function ShapeGrid({ shapes, onSelectShape }, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="mx-auto min-h-screen max-w-md px-4 pb-10 pt-8"
    >
      <h1 className="text-center font-display text-[30px] font-semibold leading-tight text-black">
        LA Salon &amp; Spa
      </h1>
      <h2 className="mb-8 mt-1 text-center font-display text-[26px] font-semibold text-black">
        Choose a Shape
      </h2>

      <div className="grid grid-cols-4 gap-3">
        {shapes.map((shape) => (
          <motion.button
            key={shape.id}
            type="button"
            onClick={() => onSelectShape(shape.id)}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden rounded-card bg-surface text-left shadow-card"
          >
            <NailShapeIcon shape={shape} className="aspect-square w-full" />
            <div className="px-1.5 py-2">
              <h2 className="text-center font-display text-[11px] font-bold leading-tight text-black">
                {shape.name}
              </h2>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
});

export default ShapeGrid;

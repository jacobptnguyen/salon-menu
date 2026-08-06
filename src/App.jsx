import { useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { categories } from "./data/colors.js";
import CategoryGrid from "./components/CategoryGrid.jsx";
import ColorList from "./components/ColorList.jsx";
import ZoomView from "./components/ZoomView.jsx";

export default function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedColorId, setSelectedColorId] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const selectedCategory = useMemo(
    () => categories.find((c) => c.id === selectedCategoryId) ?? null,
    [selectedCategoryId]
  );

  const selectedColor = useMemo(
    () => selectedCategory?.colors.find((c) => c.id === selectedColorId) ?? null,
    [selectedCategory, selectedColorId]
  );

  let view = "categories";
  if (selectedCategory && selectedColor) view = "zoom";
  else if (selectedCategory) view = "colors";

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
      <Analytics />
      <AnimatePresence mode="popLayout">
        {view === "categories" && (
          <CategoryGrid
            key="categories"
            categories={categories}
            onSelectCategory={setSelectedCategoryId}
          />
        )}
        {view === "colors" && (
          <ColorList
            key="colors"
            category={selectedCategory}
            onSelectColor={setSelectedColorId}
            onBack={() => setSelectedCategoryId(null)}
          />
        )}
        {view === "zoom" && (
          <ZoomView
            key="zoom"
            color={selectedColor}
            onBack={() => setSelectedColorId(null)}
          />
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

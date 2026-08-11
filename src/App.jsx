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

  const visibleCategories = useMemo(
    () => categories.filter((c) => c.collections.some((collection) => collection.colors.length > 0)),
    []
  );

  const selectedCategory = useMemo(
    () => visibleCategories.find((c) => c.id === selectedCategoryId) ?? null,
    [visibleCategories, selectedCategoryId]
  );

  const selectedColor = useMemo(() => {
    if (!selectedCategory) return null;
    for (const collection of selectedCategory.collections) {
      const color = collection.colors.find((c) => c.id === selectedColorId);
      if (color) return { ...color, brand: collection.brand, collection: collection.name };
    }
    return null;
  }, [selectedCategory, selectedColorId]);

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
            categories={visibleCategories}
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

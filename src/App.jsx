import { MotionConfig, useReducedMotion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { collections } from "./data/collections.js";
import Gallery from "./components/Gallery.jsx";

export default function App() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
      <Analytics />
      <Gallery collections={collections} />
    </MotionConfig>
  );
}

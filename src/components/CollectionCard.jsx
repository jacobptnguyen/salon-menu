import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CollectionImage from "./CollectionImage.jsx";

export default function CollectionCard({ collection }) {
  const prefersReducedMotion = useReducedMotion();
  const [rotation, setRotation] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const transformRef = useRef(null);
  const animTime = prefersReducedMotion ? 0 : 200;

  const handleRotate = () => {
    // Deliberately unbounded (no `% 360`) — wrapping the value back to 0
    // makes the CSS transition animate backward through 270/180/90 on
    // every 4th press instead of a clean forward 90° turn. 360deg renders
    // identically to 0deg, so there's no need to ever reset the number.
    setRotation((r) => r + 90);
    transformRef.current?.resetTransform(animTime);
  };

  const handleTap = () => {
    const scale = transformRef.current?.state?.scale ?? 1;
    if (scale > 1.01) {
      transformRef.current.resetTransform(animTime);
    } else {
      transformRef.current.zoomIn(0.8, animTime);
    }
  };

  return (
    <div className="rounded-card bg-surface p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="min-w-0">
          {collection.brand && (
            <p className="font-display text-xl font-bold uppercase tracking-wide text-black">
              {collection.brand}
            </p>
          )}
          <h2 className="font-display text-2xl font-bold text-black">
            {collection.name}
          </h2>
        </div>

        <button
          type="button"
          onClick={handleRotate}
          aria-label={`Rotate ${collection.name} photo`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface/90 text-black shadow-card backdrop-blur"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path
              d="M14.5 9a5.5 5.5 0 1 1-1.85-4.12M14.5 2.5v3.5h-3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-[14px] bg-surface">
        <TransformWrapper
          ref={transformRef}
          initialScale={1}
          minScale={1}
          maxScale={4}
          centerOnInit
          doubleClick={{ disabled: true }}
          panning={{ disabled: !isZoomed }}
          wheel={{ disabled: true }}
          onTransform={(_ref, state) => setIsZoomed(state.scale > 1.01)}
        >
          <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }} contentStyle={{ width: "100%", height: "100%" }}>
            <button
              type="button"
              onClick={handleTap}
              aria-label={`Zoom ${collection.name} photo`}
              className="flex h-full w-full items-center justify-center"
              style={{ cursor: "zoom-in" }}
            >
              <CollectionImage
                image={collection.image}
                swatchHex={collection.swatchHex}
                alt={collection.name}
                className="h-full w-full"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: prefersReducedMotion ? "none" : "transform 0.25s ease-out",
                }}
              />
            </button>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}

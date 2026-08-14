import { useState } from "react";

/**
 * Renders `image` if it loads; otherwise falls back to a solid-fill
 * rounded rectangle using `swatchHex`. Swapping in real photos later
 * only requires updating `image` paths in colors.js.
 */
export default function ColorImage({ image, swatchHex, alt, shimmer = false, className = "" }) {
  const [failed, setFailed] = useState(false);
  const showFallback = !image || failed;

  if (showFallback) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} relative flex items-center justify-center overflow-hidden`}
        style={{ backgroundColor: swatchHex }}
      >
        {shimmer && (
          <>
            <div className="shimmer-glitter absolute inset-0" aria-hidden="true" />
            <div
              className="motion-reduce:animate-none absolute inset-0 animate-shimmer bg-[length:250%_100%] bg-[linear-gradient(100deg,transparent_35%,rgba(255,255,255,0.55)_50%,transparent_65%)]"
              aria-hidden="true"
            />
          </>
        )}
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={alt}
      className={`${className} object-cover`}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}

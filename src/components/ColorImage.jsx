import { useState } from "react";

/**
 * Renders `image` if it loads; otherwise falls back to a solid-fill
 * rounded rectangle using `swatchHex`. Swapping in real photos later
 * only requires updating `image` paths in colors.js.
 */
export default function ColorImage({ image, swatchHex, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  const showFallback = !image || failed;

  if (showFallback) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} flex items-center justify-center`}
        style={{ backgroundColor: swatchHex }}
      />
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

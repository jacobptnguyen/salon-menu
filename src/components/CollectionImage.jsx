import { useState } from "react";

/**
 * Renders `image` if it loads; otherwise falls back to a solid-fill
 * block using `swatchHex`. Swapping in real collection photos later
 * only requires updating `image` paths in collections.js.
 *
 * Always contain-fit — letterboxes so the whole photo, whatever its
 * aspect ratio, stays fully visible inside its square stage.
 */
export default function CollectionImage({ image, swatchHex, alt, className = "", style }) {
  const [failed, setFailed] = useState(false);
  const showFallback = !image || failed;

  if (showFallback) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} overflow-hidden`}
        style={{ backgroundColor: swatchHex, ...style }}
      />
    );
  }

  return (
    <img
      src={image}
      alt={alt}
      className={`${className} object-contain`}
      style={style}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}

import { useState } from "react";

const SKIN_TONE = "#E3B08E";
const NAIL_COLOR = "#6B2E37";

/**
 * Renders `shape.image` (a real reference photo) when `shape.preferPhoto` is
 * set, cropped from the top so the nail tip at the top of the photo stays
 * visible instead of getting cut off by a center crop. Falls back to a small
 * finger + colored nail-cap illustration drawn in CSS from `shape.nail`,
 * used if `preferPhoto` isn't set or the photo fails to load.
 */
export default function NailShapeIcon({ shape, alt, className = "" }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const usePhoto = shape.preferPhoto && shape.image && !photoFailed;

  if (usePhoto) {
    return (
      <img
        src={shape.image}
        alt={alt ?? shape.name}
        className={`${className} object-cover object-top`}
        onError={() => setPhotoFailed(true)}
        loading="lazy"
      />
    );
  }

  return (
    <div role="img" aria-label={alt ?? shape.name} className={`${className} relative overflow-hidden bg-surface`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-t-[40%] rounded-b-[12%]"
        style={{ backgroundColor: SKIN_TONE }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[6%] h-[46%] w-[82%] -translate-x-1/2"
        style={{ backgroundColor: NAIL_COLOR, ...shape.nail }}
      />
    </div>
  );
}

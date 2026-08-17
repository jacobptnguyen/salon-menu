/**
 * A small, non-interactive reminder pill showing what the customer
 * already picked (shape and/or category), fixed to the top-right corner
 * — mirrors BackButton's fixed top-left pill styling. Purely decorative:
 * not a button, no onClick, so it doesn't offer a navigation shortcut.
 */
export default function SelectionBadge({ icon, label }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-surface/90 px-3 py-1.5 font-display text-sm font-medium text-black shadow-card backdrop-blur">
      {icon}
      {label}
    </div>
  );
}

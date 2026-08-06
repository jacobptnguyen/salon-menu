export default function FinishTag({ finish, className = "" }) {
  return (
    <span
      className={`${className} inline-block rounded-full bg-green-soft px-2.5 py-1 font-body text-xs font-medium text-text-secondary`}
    >
      {finish}
    </span>
  );
}

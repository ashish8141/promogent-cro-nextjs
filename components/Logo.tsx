export function LogoWordmark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="PROMOGENT"
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

export function LogoMark({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PromoGent mark"
      role="img"
      className={className}
    >
      <circle cx="18" cy="22" r="13" strokeWidth="6" />
      <rect x="26" y="6" width="9" height="9" strokeWidth="3" />
    </svg>
  );
}

export default LogoWordmark;

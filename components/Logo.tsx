export function LogoWordmark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PROMOGENT"
      role="img"
      className={className}
    >
      <text
        x="0"
        y="49"
        fontFamily="'Manrope','Inter',system-ui,sans-serif"
        fontWeight="900"
        fontSize="56"
        letterSpacing="-2.2"
      >
        PROMOGENT
      </text>
      {/* Square notch on the first O */}
      <rect
        x="119"
        y="14"
        width="10"
        height="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
    </svg>
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

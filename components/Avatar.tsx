"use client";

import { useState } from "react";

type Props = {
  src?: string;
  alt: string;
  fallback: string;
  className?: string;
  bg?: string;
};

/**
 * Avatar — renders an <img> when src is provided and loads successfully,
 * otherwise shows a stylized silhouette fallback with the provided initials.
 *
 * Drop real photos at /public/photos/... and pass the relative path as `src`.
 */
export default function Avatar({
  src,
  alt,
  fallback,
  className = "h-10 w-10 rounded-full overflow-hidden",
  bg = "bg-ink-950",
}: Props) {
  const [errored, setErrored] = useState(false);
  const show = src && !errored;

  return (
    <div className={`relative ${className} ${bg}`}>
      {show ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-white text-sm font-bold">
          {fallback}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  "revenue leaks.",
  "dead funnels.",
  "wasted ad spend.",
  "leaky checkouts.",
  "slow page speeds.",
];

export default function WordRotator() {
  const [i, setI] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    ref.current = window.setInterval(() => {
      setI((prev) => {
        setLeaving(prev);
        setTimeout(() => setLeaving(null), 600);
        return (prev + 1) % items.length;
      });
    }, 2400);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, []);

  return (
    <span className="rotator marker">
      {items.map((item, idx) => (
        <span
          key={idx}
          className={`${idx === i ? "active" : ""} ${
            idx === leaving ? "leaving" : ""
          }`}
        >
          {item}
        </span>
      ))}
    </span>
  );
}

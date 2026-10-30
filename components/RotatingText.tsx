"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;

export function RotatingText({ words }: { words: string[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const word = words[index % words.length] ?? "";

  useEffect(() => {
    if (reduceMotion) {
      const timer = setTimeout(() => setIndex((value) => value + 1), HOLD_MS * 1.5);
      return () => clearTimeout(timer);
    }

    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && length === word.length) delay = HOLD_MS;

    const timer = setTimeout(() => {
      if (!deleting && length === word.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((value) => value + 1);
      } else {
        setLength((value) => value + (deleting ? -1 : 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [deleting, length, word, reduceMotion]);

  return (
    <span aria-live="polite" className="text-gradient font-semibold">
      {reduceMotion ? word : word.slice(0, length)}
      <span aria-hidden className="animate-blink ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-cyan" />
    </span>
  );
}

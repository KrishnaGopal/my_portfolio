"use client";

import type { ComponentPropsWithoutRef, PointerEvent } from "react";

type GlassCardProps = ComponentPropsWithoutRef<"div">;

export function GlassCard({ className = "", children, onPointerMove, ...rest }: GlassCardProps) {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
    onPointerMove?.(event);
  }

  return (
    <div
      {...rest}
      onPointerMove={handlePointerMove}
      className={`glass spotlight relative rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
}

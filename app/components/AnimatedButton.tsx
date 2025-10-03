import React from "react";

export default function AnimatedButton({ children, onClick, variant = "primary" }: { children: React.ReactNode; onClick?: () => void; variant?: "primary" | "ghost"; }) {
  const base = "inline-block px-6 py-3 rounded-md font-medium transition-transform transform-gpu";
  const classes = variant === "primary" ? `${base} bg-foreground text-background hover:-translate-y-1 active:scale-95` : `${base} border border-gray-200 hover:bg-gray-50`;

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

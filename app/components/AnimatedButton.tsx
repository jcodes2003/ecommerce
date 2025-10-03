import React from "react";

export default function AnimatedButton({ 
  children, 
  onClick, 
  variant = "primary",
  className = ""
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  variant?: "primary" | "ghost" | "secondary";
  className?: string;
}) {
  const baseClasses = "inline-block px-6 py-3 rounded-md font-medium transition-bounce transform-gpu relative overflow-hidden";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 hover-glow",
    ghost: "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 active:scale-95"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      )}
    </button>
  );
}

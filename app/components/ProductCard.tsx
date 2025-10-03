import React from "react";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group border border-border rounded-lg overflow-hidden bg-card shadow-sm transition-smooth hover-lift animate-fade-in">
      <div className="h-40 relative overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </div>
      <div className="p-4">
        <h4 className="font-medium text-card-foreground">{product.name}</h4>
        {product.description && (
          <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-card-foreground">${product.price}</span>
          <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm transition-bounce hover:bg-primary/90 hover:scale-105 active:scale-95">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

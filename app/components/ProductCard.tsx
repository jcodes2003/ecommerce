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
    <article className="border rounded-lg overflow-hidden bg-white dark:bg-transparent shadow-sm">
      <div className="h-40 relative">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h4 className="font-medium">{product.name}</h4>
        {product.description && <p className="mt-1 text-sm text-gray-600">{product.description}</p>}
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold">${product.price}</span>
          <button className="px-3 py-1 bg-foreground text-background rounded-md text-sm">Add to cart</button>
        </div>
      </div>
    </article>
  );
}

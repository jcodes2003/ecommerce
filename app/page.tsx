"use client";
import React from "react";
import ProductCard from "./components/ProductCard";
import Carousel from "./components/Carousel";
import AnimatedButton from "./components/AnimatedButton";
import Image from "next/image";

const sampleProducts = [
  {
    id: "1",
    name: "Classic Sneakers",
    price: 79,
    description: "Comfortable everyday sneakers",
    image: "/images/products/sneakers.avif",
  },
  {
    id: "2",
    name: "Leather Wallet",
    price: 49,
    description: "Slim RFID wallet",
    image: "/images/products/wallet.jpg",
  },
  {
    id: "3",
    name: "Noise-Cancelling Headphones",
    price: 199,
    description: "Immersive sound",
    image: "/images/products/headset.webp",
  },
  {
    id: "4",
    name: "Minimalist Backpack",
    price: 129,
    description: "Durable, water-resistant",
    image: "/images/products/backpack.jpg",
  },
  {
    id: "5",
    name: "Smartwatch",
    price: 149,
    description: "Track health & notifications",
    image: "/images/products/watch.jpg",
  },
  {
    id: "6",
    name: "Sunglasses",
    price: 59,
    description: "UV protection",
    image: "/images/products/sunglasses.webp",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">ShopEasy</h1>
        <nav
          aria-label="Primary"
          className="hidden md:flex gap-6 items-center text-sm"
        >
          <a href="#products" className="hover:underline">
            Shop
          </a>
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a
            href="#"
            className="px-3 py-1 rounded-md bg-foreground text-background text-sm"
          >
            Sign in
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-6 flex-1">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Find products you'll love
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
              Quality goods at fair prices. Curated collections, free returns,
              and fast shipping.
            </p>
            <div className="mt-6 flex gap-3">
              <AnimatedButton onClick={() => {}}>{"Shop Now"}</AnimatedButton>
              <AnimatedButton variant="ghost" onClick={() => {}}>
                {"Learn More"}
              </AnimatedButton>
            </div>
          </div>

          <div className="order-first md:order-last">
            <Carousel
              slides={[
                <div className="w-full h-64 md:h-56 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/assets/shirt1.jpg"
                    alt="Slide 1"
                    fill
                    className="object-cover"
                  />
                </div>,
                <div className="w-full h-64 md:h-56 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/assets/shirt2.jpg"
                    alt="Slide 2"
                    fill
                    className="object-cover"
                  />
                </div>,
                <div className="w-full h-64 md:h-56 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/assets/shirt3.jpg"
                    alt="Slide 3"
                    fill
                    className="object-cover"
                  />
                </div>,
              ]}
            />
          </div>
        </section>

        <section id="features" className="py-8">
          <h3 className="text-2xl font-semibold mb-6">Why Shop with us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium">Free returns</h4>
              <p className="mt-2 text-sm text-gray-600">
                Hassle-free 30 day returns on all orders.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium">Fast shipping</h4>
              <p className="mt-2 text-sm text-gray-600">
                Two-day shipping available across the country.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-medium">Secure payments</h4>
              <p className="mt-2 text-sm text-gray-600">
                Top-level encryption for safe checkout.
              </p>
            </div>
          </div>
        </section>

        <section id="products" className="py-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Popular products</h3>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              View all
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sampleProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section id="about" className="py-12">
          <h3 className="text-2xl font-semibold mb-4">About ShopEasy</h3>
          <p className="text-gray-600 max-w-2xl">
            ShopEasy is a small curated marketplace focused on high-quality
            essentials. We prioritize fast shipping, fair pricing, and excellent
            customer service. Our collection is hand-picked by experts to help
            you find items that last.
          </p>
        </section>
      </main>

      <footer className="border-t py-6 mt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} ShopEasy — All rights reserved</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

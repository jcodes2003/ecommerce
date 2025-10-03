"use client";
import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Carousel from "./components/Carousel";
import AnimatedButton from "./components/AnimatedButton";
import ThemeToggle from "./components/ThemeToggle";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <header className="container mx-auto px-6 py-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            ShopEasy
          </h1>
          
          {/* Desktop Navigation */}
          <nav
            aria-label="Primary"
            className="hidden md:flex gap-6 items-center text-sm"
          >
            <a href="#products" className="hover:text-primary transition-colors duration-300 hover:underline">
              Shop
            </a>
            <a href="#features" className="hover:text-primary transition-colors duration-300 hover:underline">
              Features
            </a>
            <a href="#about" className="hover:text-primary transition-colors duration-300 hover:underline">
              About
            </a>
            <ThemeToggle />
            <a
              href="#"
              className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm transition-bounce hover:scale-105 active:scale-95"
            >
              Sign in
            </a>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-5 h-5 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="md:hidden mt-4 py-4 border-t border-border animate-fade-in"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary transition-colors duration-300 py-2"
              >
                Shop
              </a>
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary transition-colors duration-300 py-2"
              >
                Features
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary transition-colors duration-300 py-2"
              >
                About
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm transition-bounce hover:scale-105 active:scale-95 mt-2"
              >
                Sign in
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-6 flex-1">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Find products you'll love
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Quality goods at fair prices. Curated collections, free returns,
              and fast shipping.
            </p>
            <div className="mt-6 flex gap-3">
              <AnimatedButton onClick={() => {}}>Shop Now</AnimatedButton>
              <AnimatedButton variant="ghost" onClick={() => {}}>
                Learn More
              </AnimatedButton>
            </div>
          </div>

          <div className="order-first md:order-last animate-slide-in-right">
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
          <h3 className="text-2xl font-semibold mb-6 animate-fade-in">Why Shop with us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg bg-card hover-lift transition-smooth animate-fade-in">
              <h4 className="font-medium text-card-foreground">Free returns</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Hassle-free 30 day returns on all orders.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-card hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-medium text-card-foreground">Fast shipping</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Two-day shipping available across the country.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-card hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-medium text-card-foreground">Secure payments</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Top-level encryption for safe checkout.
              </p>
            </div>
          </div>
        </section>

        <section id="products" className="py-8">
          <div className="flex items-center justify-between animate-fade-in">
            <h3 className="text-2xl font-semibold">Popular products</h3>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline">
              View all
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sampleProducts.map((p, index) => (
              <div 
                key={p.id} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="py-12">
          <h3 className="text-2xl font-semibold mb-4 animate-fade-in">About ShopEasy</h3>
          <p className="text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            ShopEasy is a small curated marketplace focused on high-quality
            essentials. We prioritize fast shipping, fair pricing, and excellent
            customer service. Our collection is hand-picked by experts to help
            you find items that last.
          </p>
        </section>
      </main>

      <footer className="border-t border-border py-6 mt-12 animate-fade-in">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ShopEasy — All rights reserved</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

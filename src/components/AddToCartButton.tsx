"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/data/products";

interface AddToCartButtonProps {
  product: Product;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function AddToCartButton({
  product,
  variant = "primary",
  className = "",
}: AddToCartButtonProps) {
  const { addItem, openCart } = useCartStore();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    openCart();

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const baseStyles =
    "flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-full";

  const variantStyles = {
    primary:
      "bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-6 py-3",
    secondary:
      "bg-gray-100 hover:bg-gray-200 text-[var(--primary)] px-4 py-2 text-sm",
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdded}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        isAdded ? "!bg-green-500 !text-white" : ""
      }`}
    >
      {isAdded ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Sepete Eklendi
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Sepete Ekle
        </>
      )}
    </button>
  );
}

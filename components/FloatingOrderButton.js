"use client";

import { ShoppingBag } from "lucide-react";

export default function FloatingOrderButton() {
  return (
    <a href="#pricing" className="floating-order" aria-label="Order now">
      <ShoppingBag size={20} strokeWidth={2.5} />
      <span>Order Now</span>
    </a>
  );
}

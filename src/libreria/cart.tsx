// src/lib/cart.tsx
"use client";
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  cover?: string;
};

type CartContextValue = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  total: () => number;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function add(item: Omit<CartItem, "qty">, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + qty } : p));
      }
      return [...prev, { ...item, qty }];
    });
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }

  function updateQty(id: string, qty: number) {
    if (qty <= 0) {
      remove(id);
      return;
    }
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  }

  function total() {
    return items.reduce((s, i) => s + i.price * i.qty, 0);
  }

  function clear() {
    setItems([]);
  }

  return (
    <CartContext.Provider value={{ items, add, remove, updateQty, total, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

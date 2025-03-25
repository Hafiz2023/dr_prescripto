import { create } from "zustand";

interface CartState {
  items: any[];
  addItem: (item: any) => void;
  removeItem: (id: number) => void;
}

export const useCart = create<CartState>((set: (arg0: { (state: any): { items: any[]; }; (state: any): { items: any; }; }) => any) => ({
  items: [],
  addItem: (item: any) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id: any) =>
    set((state) => ({ items: state.items.filter((item: { id: any; }) => item.id !== id) })),
}));

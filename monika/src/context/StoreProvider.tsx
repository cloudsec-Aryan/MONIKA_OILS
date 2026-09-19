"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartItem } from "@/types";
import { getProduct, getVariant } from "@/lib/utils";

type Toast = { id: number; message: string };
export type AuthUser = { name: string; email: string };

type StoreContextValue = {
  cart: CartItem[];
  wishlist: string[];
  user: AuthUser | null;
  drawerOpen: boolean;
  lastAdded: CartItem | null;
  toasts: Toast[];
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  addToCart: (productId: string, weight: string, quantity?: number) => void;
  removeFromCart: (productId: string, weight: string) => void;
  setQuantity: (productId: string, weight: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  moveWishlistToCart: (productId: string) => void;
  login: (user: AuthUser) => void;
  logout: () => void;
  toast: (message: string) => void;
  hydrated: boolean;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const CART_KEY = "monika-cart";
const WISH_KEY = "monika-wishlist";
const USER_KEY = "monika-user";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<CartItem | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_KEY);
      const storedWish = localStorage.getItem(WISH_KEY);
      const storedUser = localStorage.getItem(USER_KEY);
      if (storedCart) setCart(JSON.parse(storedCart));
      if (storedWish) setWishlist(JSON.parse(storedWish));
      if (storedUser) setUser(JSON.parse(storedUser));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
    else localStorage.removeItem(USER_KEY);
  }, [user, hydrated]);

  const toast = useCallback((message: string) => {
    const id = Date.now() + Math.random();
    setToasts((current) => [...current, { id, message }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 2800);
  }, []);

  const login = useCallback(
    (next: AuthUser) => {
      setUser(next);
      toast(`Welcome, ${next.name}`);
    },
    [toast],
  );

  const logout = useCallback(() => {
    setUser(null);
    toast("You have been logged out");
  }, [toast]);

  const addToCart = useCallback(
    (productId: string, weight: string, quantity = 1) => {
      const product = getProduct(productId);
      if (!product) return;
      const variant = getVariant(product, weight);
      setCart((current) => {
        const existing = current.find(
          (item) => item.productId === productId && item.weight === variant.weight,
        );
        if (existing) {
          return current.map((item) =>
            item.productId === productId && item.weight === variant.weight
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        }
        return [...current, { productId, weight: variant.weight, quantity }];
      });
      setLastAdded({ productId, weight: variant.weight, quantity });
      setDrawerOpen(true);
      toast(`${product.name} added to cart`);
    },
    [toast],
  );

  const removeFromCart = useCallback(
    (productId: string, weight: string) => {
      setCart((current) =>
        current.filter(
          (item) => !(item.productId === productId && item.weight === weight),
        ),
      );
      toast("Item removed from cart");
    },
    [toast],
  );

  const setQuantity = useCallback(
    (productId: string, weight: string, quantity: number) => {
      if (quantity < 1) {
        removeFromCart(productId, weight);
        return;
      }
      setCart((current) =>
        current.map((item) =>
          item.productId === productId && item.weight === weight
            ? { ...item, quantity }
            : item,
        ),
      );
    },
    [removeFromCart],
  );

  const toggleWishlist = useCallback(
    (productId: string) => {
      setWishlist((current) => {
        if (current.includes(productId)) {
          toast("Removed from wishlist");
          return current.filter((id) => id !== productId);
        }
        toast("Saved to wishlist");
        return [...current, productId];
      });
    },
    [toast],
  );

  const moveWishlistToCart = useCallback(
    (productId: string) => {
      const product = getProduct(productId);
      if (!product) return;
      addToCart(productId, product.variants[0].weight, 1);
      setWishlist((current) => current.filter((id) => id !== productId));
    },
    [addToCart],
  );

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      user,
      drawerOpen,
      lastAdded,
      toasts,
      searchOpen,
      setSearchOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
      addToCart,
      removeFromCart,
      setQuantity,
      toggleWishlist,
      moveWishlistToCart,
      login,
      logout,
      toast,
      hydrated,
    }),
    [
      cart,
      wishlist,
      user,
      drawerOpen,
      lastAdded,
      toasts,
      searchOpen,
      addToCart,
      removeFromCart,
      setQuantity,
      toggleWishlist,
      moveWishlistToCart,
      login,
      logout,
      toast,
      hydrated,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
}

import { useEffect } from "react";

export function useDarkMode() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
}

"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-1 rounded-md border p-1">
        <div className="bg-muted h-8 w-8 animate-pulse rounded" />
        <div className="bg-muted h-8 w-8 animate-pulse rounded" />
        <div className="bg-muted h-8 w-8 animate-pulse rounded" />
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-1 rounded-md border p-1">
      <button
        onClick={() => setTheme("light")}
        className={`hover:bg-accent hover:text-accent-foreground rounded p-1.5 ${
          theme === "light" ? "bg-accent text-accent-foreground" : ""
        }`}
        aria-label="Light theme"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`hover:bg-accent hover:text-accent-foreground rounded p-1.5 ${
          theme === "dark" ? "bg-accent text-accent-foreground" : ""
        }`}
        aria-label="Dark theme"
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`hover:bg-accent hover:text-accent-foreground rounded p-1.5 ${
          theme === "system" ? "bg-accent text-accent-foreground" : ""
        }`}
        aria-label="System theme"
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  );
}

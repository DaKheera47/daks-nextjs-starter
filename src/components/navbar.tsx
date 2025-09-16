import { ThemeSwitcher } from "./theme-switcher";

export function Navbar() {
  return (
    <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-xl font-semibold">
            Your Project
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

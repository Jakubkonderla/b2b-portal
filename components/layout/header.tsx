"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, LayoutDashboard, Briefcase, FileText, LifeBuoy, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";

const navigation = [
  { name: "Nástěnka", href: "/", icon: LayoutDashboard },
  { name: "Zakázky", href: "/zakazky", icon: Briefcase },
  { name: "Faktury", href: "/faktury", icon: FileText },
  { name: "Podpora", href: "/podpora", icon: LifeBuoy },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { logout } = useAuth();

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="flex lg:hidden h-16 shrink-0 items-center justify-between border-b border-border bg-background px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">B</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">B2B Portal</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Otevřít menu">
          <Menu className="h-6 w-6 text-foreground" />
        </Button>
      </header>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-card border-l border-border shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex h-16 items-center justify-between px-4 border-b border-border">
              <span className="text-lg font-bold text-foreground">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Zavřít menu">
                <X className="h-6 w-6 text-foreground" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      "group flex items-center rounded-md px-3 py-3 text-base font-medium transition-colors"
                    )}
                  >
                    <item.icon
                      className={cn(
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                        "mr-4 h-6 w-6 shrink-0 transition-colors"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </div>
            
            <div className="p-4 border-t border-border bg-card">
              <Link 
                href="/profil"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-muted transition-colors group"
              >
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium group-hover:bg-primary/30 transition-colors">
                  DU
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-medium text-foreground truncate">Demo Uživatel</span>
                  <span className="text-xs text-muted-foreground truncate">demo@firma.cz</span>
                </div>
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  logout();
                }}
                className="mt-2 group flex w-full items-center rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <LogOut className="mr-4 h-6 w-6 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
                Odhlásit se
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

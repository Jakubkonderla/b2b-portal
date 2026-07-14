"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Briefcase, FileText, LifeBuoy, LogOut } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

const navigation = [
  { name: "Nástěnka", href: "/", icon: LayoutDashboard },
  { name: "Zakázky", href: "/zakazky", icon: Briefcase },
  { name: "Faktury", href: "/faktury", icon: FileText },
  { name: "Podpora", href: "/podpora", icon: LifeBuoy },
];

export function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="hidden lg:flex h-full w-64 flex-col border-r border-border bg-card">
      <div className="flex h-16 shrink-0 items-center px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">B</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">B2B Portal</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <nav className="flex-1 space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  "group flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors"
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                    "mr-3 h-5 w-5 shrink-0 transition-colors"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="p-4 border-t border-border">
        <Link 
          href="/profil"
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors group"
        >
          <div className="h-9 w-9 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium group-hover:bg-primary/30 transition-colors">
            DU
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Demo Uživatel</span>
            <span className="text-xs text-muted-foreground truncate">demo@firma.cz</span>
          </div>
        </Link>
        <button
          onClick={logout}
          className="mt-4 group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          Odhlásit se
        </button>
      </div>
    </div>
  );
}

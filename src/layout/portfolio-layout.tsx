"use client";

import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { PortfolioSidebar } from "@/components/portfolio-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type React from "react";


interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden md:block">
          <PortfolioSidebar />
        </div>

        {/* Mobile Navigation - Visible only on mobile */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="flex-1 flex flex-col w-full">
          <div className="absolute top-4 right-4 z-50">
            <ModeToggle />
          </div>
          <main className="flex-1 p-4 md:p-10 overflow-auto w-full">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

"use client";

import { PortfolioSidebar } from "@/components/portfolio-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type React from "react";

export function PortfolioLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden md:block">
          <PortfolioSidebar />
        </div>
      </div>
    </SidebarProvider>
  );
}

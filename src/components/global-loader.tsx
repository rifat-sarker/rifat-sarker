// components/ui/GlobalLoader.tsx
"use client";

import { Cog } from "lucide-react";

export default function GlobalLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="relative flex items-center justify-center">
        {/* Outer spinner ring */}
        <div className="absolute h-[200px] w-[200px] animate-spin-slow rounded-full border-[12px] border-dashed border-primary/20" />
        {/* Giant spinning icon */}
        <Cog
          className="text-primary animate-spin"
          style={{ height: "80px", width: "80px", strokeWidth: 2.5 }}
        />
      </div>
    </div>
  );
}

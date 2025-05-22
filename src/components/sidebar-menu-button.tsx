import { Slot } from "@radix-ui/react-slot";
import React, { forwardRef } from "react";
import clsx from "clsx";

interface SidebarMenuButtonProps extends React.HTMLAttributes<HTMLElement> {
  isActive?: boolean;
  asChild?: boolean;
}

const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, isActive, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          ref={ref as React.Ref<HTMLElement>}
          className={clsx(
            "flex items-center gap-3 py-2 px-3 text-base rounded-md transition-colors",
            isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted",
            className
          )}
          {...props}
        />
      );
    }

    return (
      <button
        ref={ref}
        className={clsx(
          "flex items-center gap-3 py-2 px-3 text-base rounded-md transition-colors",
          isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted",
          className
        )}
        {...props}
      />
    );
  }
);

SidebarMenuButton.displayName = "SidebarMenuButton";

export default SidebarMenuButton;

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Home,
  User,
  Briefcase,
  MessageSquare,
  Mail,
  Menu,
  GraduationCap,
  Wrench,
  X,
} from "lucide-react";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import profileImg from "../../public/profile-img.jpg";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { href: "/", label: "Home", icon: Home },
    { href: "/education", label: "Education", icon: GraduationCap },
    { href: "/skills", label: "Skills", icon: Wrench },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/blogs", label: "Blogs", icon: MessageSquare },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b p-2 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 mx-auto">
        <span className="font-bold text-center">RIFAT SARKER</span>
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="!h-7 !w-7" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col h-full">
            <Link href="/" className="flex items-center gap-2 ">
              <div className="relative w-full">
                <Image
                  className="w-full h-60 object-cover"
                  src={profileImg}
                  alt="profile-image"
                />
                <h1 className="absolute bottom-0 py-2 text-center bg-[#00A3E1] opacity-80 w-full text-white text-lg font-semibold">
                  RIFAT SARKER
                </h1>
              </div>
            </Link>

            <nav className="flex-1 py-4">
              <ul className="space-y-2 px-2">
                {routes.map((route) => {
                  const isActive = pathname === route.href;

                  return (
                    <li key={route.href}>
                      <Link
                        href={route.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        <route.icon className="!h-6 !w-6" />
                        <span>{route.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="px-4 py-4 border-t">
              <div className="flex justify-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/rifat-sarker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-300 hover:scale-150"
                  >
                    <FiGithub className="!h-6 !w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/rifatswd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-300 hover:scale-150"
                  >
                    <CiLinkedin className="!h-6 !w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://twitter.com/rifatswd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-300 hover:scale-150"
                  >
                    <X className="!h-6 !w-6" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://facebook.com/rifatswd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-300 hover:scale-150"
                  >
                    <FiFacebook className="!h-6 !w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </Button>
              </div>
              <p className="text-sm text-center opacity-70">
                2024 ©Rifat Sarker.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

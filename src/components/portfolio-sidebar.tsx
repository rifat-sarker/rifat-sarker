"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Home,
  User,
  MessageSquare,
  Mail,
  GraduationCap,
  Wrench,
  X,
  Blocks,
} from "lucide-react";
import Image from "next/image";
import profileImg from "../../public/profile-img.jpg";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import SidebarMenuButton from "./sidebar-menu-button";

export function PortfolioSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-0">
        <Link href="/" className="flex items-center gap-2 ">
          <div className="relative w-full">
            <Image
              className="w-full h-auto object-cover"
              src={profileImg}
              alt="profile-image"
            />
            <h1 className="absolute bottom-0 py-2 text-center bg-cyan-900 opacity-80 w-full text-white text-lg font-semibold">
              RIFAT SARKER
            </h1>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-14 py-4">
        <SidebarMenu className="space-y-1">
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/"}>
              <Link
                href="/"
                className="flex items-center gap-3 py-2 px-3 text-sm "
              >
                <Home className="!h-5 !w-5" />
                <span className="text-sm">Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/education"}>
              <Link
                href="/education"
                className="flex items-center gap-3 py-2 px-3 text-sm"
              >
                <GraduationCap className="!h-5 !w-5" />
                <span className="text-sm">Education</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/skills"}>
              <Link
                href="/skills"
                className="flex items-center gap-3 py-2 px-3 text-sm"
              >
                <Wrench className="!h-5 !w-5" />
                <span className="text-sm">Skills</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/projects"}>
              <Link
                href="/projects"
                className="flex items-center gap-3 py-2 px-3 text-sm"
              >
                <Blocks className="!h-5 !w-5" />
                <span className="text-sm">Projects</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/blogs"}>
              <Link
                href="/blogs"
                className="flex items-center gap-3 py-2 px-3 text-sm"
              >
                <MessageSquare className="!h-5 !w-5" />
                <span className="text-sm">Blogs</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/about"}>
              <Link
                href="/about"
                className="flex items-center gap-3 py-2 px-3 text-sm"
              >
                <User className="!h-5 !w-5" />
                <span className="text-sm">About</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/contact"}>
              <Link
                href="/contact"
                className="flex items-center gap-3 py-2 px-3 text-sm"
              >
                <Mail className="!h-5 !w-5" />
                <span className="text-sm">Contact</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex gap-2 justify-center ">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/rifat-sarker"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 hover:scale-125"
            >
              <FiGithub className="!h-6 !w-6 " />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/rifatswd"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 hover:scale-125"
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
              className="duration-300 hover:scale-125"
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
              className="duration-300 hover:scale-125"
            >
              <FiFacebook className="!h-6 !w-6" />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>
        </div>
        <p className="text-sm text-center opacity-70">
          {new Date().getFullYear()} © Rifat Sarker.
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}

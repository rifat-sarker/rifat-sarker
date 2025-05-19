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
  SidebarMenuButton,
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
            <h1 className="absolute bottom-0 py-2 text-center bg-[#00A3E1] opacity-80 w-full text-white text-lg font-semibold">
              RIFAT SARKER
            </h1>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2 mx-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/"}>
              <Link
                href="/"
                className="flex items-center gap-3 py-2 px-3 text-base"
              >
                <Home className="!h-5 !w-5" />
                <span className="text-base">Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/education"}>
              <Link
                href="/education"
                className="flex items-center gap-3 py-2 px-3 text-base"
              >
                <GraduationCap className="!h-5 !w-5" />
                <span className="text-base">Education</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/skills"}>
              <Link
                href="/skills"
                className="flex items-center gap-3 py-2 px-3 text-base"
              >
                <Wrench className="!h-5 !w-5" />
                <span className="text-base">Skills</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/projects"}>
              <Link
                href="/projects"
                className="flex items-center gap-3 py-2 px-3 text-base"
              >
                <Blocks className="!h-5 !w-5" />
                <span className="text-base">Projects</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/blogs"}>
              <Link
                href="/blogs"
                className="flex items-center gap-3 py-2 px-3 text-base"
              >
                <MessageSquare className="!h-5 !w-5" />
                <span className="text-base">Blogs</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/about"}>
              <Link
                href="/about"
                className="flex items-center gap-3 py-2 px-3 text-base"
              >
                <User className="!h-5 !w-5" />
                <span className="text-base">About</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/contact"}>
              <Link
                href="/contact"
                className="flex items-center gap-3 py-2 px-3 text-base"
              >
                <Mail className="!h-5 !w-5" />
                <span className="text-base">Contact</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex gap-2 justify-center">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/rifat-sarker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="!h-5 !w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/rifatswd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin className="!h-5 !w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://twitter.com/rifatswd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <X className="!h-5 !w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://facebook.com/rifatswd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook className="!h-5 !w-5" />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>
        </div>
        <p className="text-sm text-center opacity-70">2024 ©Rifat Sarker.</p>
        {/* <p className="text-sm text-center">All rights reserved.</p> */}
      </SidebarFooter>
    </Sidebar>
  );
}

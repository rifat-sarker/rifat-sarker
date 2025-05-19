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
  FileText,
  Briefcase,
  MessageSquare,
  Mail,
  Github,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import profileImg from "../../public/profile-img.jpg";

export function PortfolioSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-0">
        <Link href="/" className="flex items-center gap-2 ">
          <div className="relative mx-auto">
            <Image
              className=" mx-auto"
              src={profileImg}
              height={4}
              width={490}
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
              <Link href="/">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/about"}>
              <Link href="/about">
                <User className="h-5 w-5" />
                <span>About</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/resume"}>
              <Link href="/resume">
                <FileText className="h-5 w-5" />
                <span>Resume</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/projects"}>
              <Link href="/projects">
                <Briefcase className="h-5 w-5" />
                <span>Projects</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/blog"}>
              <Link href="/blog">
                <MessageSquare className="h-5 w-5" />
                <span>Blog</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/contact"}>
              <Link href="/contact">
                <Mail className="h-5 w-5" />
                <span>Contact</span>
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
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/rifatswd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://twitter.com/rifatswd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://facebook.com/rifatswd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

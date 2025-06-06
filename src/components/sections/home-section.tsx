"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function HomeSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-16 w-full"
    >
      {/* Top Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <motion.div variants={item} className="w-full md:w-1/3">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-foreground opacity-20 blur-xl" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/80 to-background" />
            <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center">
              <div className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary-foreground">
                RS
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="w-full md:w-2/3 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rifat Sarker</h1>
          <h2 className="text-xl md:text-2xl text-primary mb-6">
            Full-Stack Developer
          </h2>
          <p className="text-muted-foreground mb-6">
            I build exceptional digital experiences with modern technologies.
            Transforming ideas into elegant, functional applications.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1gd6ajoQ1TAKxvssMytv9l805lFHCI-cw/view?usp=drive_link"
              }
            >
              <Button size="lg" className="gap-2">
                View Resume
              </Button>
            </Link>
            <a href="/resume.pdf" download>
              <Button size="lg" className="gap-2">
                <Download size={18} /> Download CV
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Short Intro Section Below Hero */}
      <motion.div
        variants={item}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
      >
        <div className="rounded-xl border bg-background p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-foreground">
            2+ Years of Practice
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Daily coding, building projects & improving every day.
          </p>
        </div>

        <div className="rounded-xl border bg-background p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-foreground">
            Full Stack Developer
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            From UI to API — React, Next.js, Tailwind, Node, PostgreSQL.
          </p>
        </div>

        <div className="rounded-xl border bg-background p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-foreground">
            Open to Work
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Available for remote jobs & freelance opportunities.
          </p>
        </div>
      </motion.div>

      {/* section -1 */}
      <div className="lg:flex flex-wrap justify-center max-w-6xl">
        <motion.div
          variants={item}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            I craft digital solutions with purpose.
          </h3>
          <p className="text-muted-foreground">
            As a passionate developer, I love solving real-world problems with
            clean code, efficient design, and meaningful UX. Whether it is a
            sleek frontend or a robust backend, I focus on clarity, performance,
            and impact.
          </p>
        </motion.div>

        {/* section 3 */}
        <motion.div variants={item} className="mt-16 text-center">
          <p className="text-muted-foreground text-base">
            Interested in working together?
          </p>
          <Link href="/contact">
            <Button size="lg" className="mt-4">
              Let us Connect
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

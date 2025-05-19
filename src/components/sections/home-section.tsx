"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

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
      className="space-y-8 w-full"
    >
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
            <Button size="lg" className="gap-2">
              <Download size={18} /> Download CV
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="/projects">
                My Work <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

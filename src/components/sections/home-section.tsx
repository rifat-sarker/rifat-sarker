"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

interface HomeSectionProps {
  isHome?: boolean;
}

export function HomeSection({ isHome = false }: HomeSectionProps) {
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
      {isHome ? (
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Rifat Sarker
            </h1>
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
      ) : (
        <>
          <motion.div variants={item}>
            <h2 className="text-3xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">
              About Me
            </h2>
            <p className="text-muted-foreground mb-4">
              I am a passionate Full-Stack Developer with expertise in modern
              web technologies. With a strong foundation in both frontend and
              backend development, I create seamless, user-friendly applications
              that solve real-world problems.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in web development began 3 years ago, and since then,
              I've worked on a variety of projects ranging from e-commerce
              platforms to content management systems. I'm constantly learning
              and adapting to new technologies to stay at the forefront of web
              development.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>
                  <span className="font-medium">Name:</span> Rifat Sarker
                </p>
                <p>
                  <span className="font-medium">Age:</span> 25 Years
                </p>
                <p>
                  <span className="font-medium">Nationality:</span> Bangladeshi
                </p>
                <p>
                  <span className="font-medium">Languages:</span> English,
                  Bengali
                </p>
              </div>
              <div>
                <p>
                  <span className="font-medium">Address:</span> Dhaka,
                  Bangladesh
                </p>
                <p>
                  <span className="font-medium">Phone:</span> +880 1642550487
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  rifatswd@gmail.com
                </p>
                {/* <p>
                  <span className="font-medium">Freelance:</span> Available
                </p> */}
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-xl font-semibold mb-4">My Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Frontend Development</h4>
                <p className="text-sm text-muted-foreground">
                  Building responsive and interactive user interfaces with
                  modern frameworks.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Backend Development</h4>
                <p className="text-sm text-muted-foreground">
                  Creating robust server-side applications and RESTful APIs.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Database Management</h4>
                <p className="text-sm text-muted-foreground">
                  Designing and optimizing database schemas for performance.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
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
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-8 w-full"
    >
      <motion.div variants={item}>
        <h2 className="text-3xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">
          About Me
        </h2>
        <p className="text-muted-foreground mb-4">
          I am a passionate Full-Stack Developer with expertise in modern web
          technologies. With a strong foundation in both frontend and backend
          development, I create seamless, user-friendly applications that solve
          real-world problems.
        </p>
        <p className="text-muted-foreground mb-4">
          My journey in web development began 4 years ago, and since then, I've
          worked on a variety of projects ranging from e-commerce platforms to
          content management systems. I'm constantly learning and adapting to
          new technologies to stay at the forefront of web development.
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
              <span className="font-medium">Age:</span> 26 Years
            </p>
            <p>
              <span className="font-medium">Nationality:</span> Bangladeshi
            </p>
            <p>
              <span className="font-medium">Languages:</span> English, Bengali
            </p>
          </div>
          <div>
            <p>
              <span className="font-medium">Address:</span> Dhaka, Bangladesh
            </p>
            <p>
              <span className="font-medium">Phone:</span> +880 1234 567890
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              rifat.sarker@example.com
            </p>
            <p>
              <span className="font-medium">Freelance:</span> Available
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <h3 className="text-xl font-semibold mb-4">My Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Frontend Development</h4>
            <p className="text-sm text-muted-foreground">
              Building responsive and interactive user interfaces with modern
              frameworks.
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
    </motion.div>
  );
}

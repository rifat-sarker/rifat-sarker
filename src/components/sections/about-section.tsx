"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, rotateX: -90, transformOrigin: "top center" }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      transition={{
        type: "spring",
        stiffness: 30,
        damping: 20,
        mass: 0.8,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full space-y-4"
    >
      {/* Heading */}
      <div className="text">
        <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-primary inline-block pb-2">
          About Me
        </h1>
      </div>

      {/* About Section */}
      <div className="max-w-3xl  md:text-left">
        <p className="mb-4 text-muted-foreground text-sm">
          I am a Backend Developer specializing in building scalable APIs,
          secure authentication systems, and high-performance backend services.
        </p>

        <p className="mb-4 text-muted-foreground text-sm">
          Currently working as a Backend Developer where I develop and maintain
          production-grade backend services using Node.js, Express, PostgreSQL,
          and modern web technologies.
        </p>

        <p className="text-muted-foreground text-sm">
          I have experience designing RESTful APIs, implementing JWT-based
          authentication, building role-based access control systems, and
          optimizing database performance. Although my primary focus is backend
          development, I also have experience with modern frontend technologies
          like React and Next.js, which helps me collaborate effectively across
          the full stack.
        </p>
      </div>

      {/* Personal Information */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <span>Name:</span> Rifat Sarker
            </p>
            <p>
              <span>Nationality:</span> Bangladeshi
            </p>
            <p>
              <span>Languages:</span> English, Bengali
            </p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <span>Location:</span> Dhaka, Bangladesh
            </p>
            <p>
              <span>Email:</span> rifatswd@gmail.com
            </p>
            <p>
              <span>Phone:</span> +880 1642550487
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 pt-4">
          Professional Experience
        </h2>

        <div className="border rounded-lg p-6 space-y-2">
          <h3 className="text-lg font-semibold">Backend Developer</h3>

          <p className="text-sm font-medium">SM Technology</p>

          <p className="text-sm text-muted-foreground">Aug 2026 – Present</p>

          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
            <li>Develop and maintain RESTful APIs using Node.js and Express</li>
            <li>Design scalable database schemas using PostgreSQL</li>
            <li>Implement secure authentication using JWT</li>
            <li>Build role-based access control (RBAC) systems</li>
            <li>Collaborate with frontend developers to integrate APIs</li>
          </ul>
        </div>
      </div>

      {/* Expertise Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">My Expertise</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 border rounded-lg">
            <h3 className="font-semibold mb-2">Backend Development</h3>
            <p className="text-sm text-muted-foreground">
              Building scalable APIs, authentication systems, and server-side
              applications using Node.js and Express.
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h3 className="font-semibold mb-2">Database Design</h3>
            <p className="text-sm text-muted-foreground">
              Designing efficient database schemas and optimizing queries using
              PostgreSQL and MongoDB.
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h3 className="font-semibold mb-2">API Architecture</h3>
            <p className="text-sm text-muted-foreground">
              Designing RESTful APIs with proper authentication, RBAC, and
              scalable backend architecture.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

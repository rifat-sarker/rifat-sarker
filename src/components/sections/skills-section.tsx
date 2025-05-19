"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Monitor,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

export function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-24 w-full bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <motion.div variants={item} className="text-center">
          <h2 className="text-4xl font-bold mb-2 inline-block border-b-4 border-primary pb-3">
            <Sparkles className="inline-block mr-3 mb-1" size={32} />
            Skills
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A well-rounded skill set combining frontend design, backend logic,
            database expertise, and developer tools.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {/* Frontend */}
          <div className="p-6 rounded-2xl border bg-card shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Monitor size={28} />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>React.js</li>
              <li>Next.js (App Router)</li>
              <li>Tailwind CSS</li>
              <li>ShadCN UI, Ant Design</li>
              <li>Redux / Redux Toolkit</li>
              <li>TypeScript, JavaScript</li>
              <li>React Hook Form + Zod</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="p-6 rounded-2xl border bg-card shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Server size={28} />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>Node.js, Express.js</li>
              <li>REST API Development</li>
              <li>Authentication with JWT</li>
              <li>Role-based Access Control</li>
              <li>Multer & Cloudinary (Image Upload)</li>
            </ul>
          </div>

          {/* Databases */}
          <div className="p-6 rounded-2xl border bg-card shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Database size={28} />
              <h3 className="text-xl font-semibold">Databases</h3>
            </div>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>MongoDB with Mongoose</li>
              <li>PostgreSQL with Prisma ORM</li>
              <li>Firebase Authentication</li>
              <li>SQL & NoSQL concepts</li>
            </ul>
          </div>

          {/* Tools & Platforms */}
          <div className="p-6 rounded-2xl border bg-card shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Wrench size={28} />
              <h3 className="text-xl font-semibold">Tools & Platforms</h3>
            </div>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>Vercel, Netlify</li>
              <li>Postman, GitHub</li>
              <li>ShurjoPay (Payment Gateway)</li>
              <li>OBS Studio, Canva, Notion</li>
            </ul>
          </div>

          {/* Programming Languages */}
          <div className="p-6 rounded-2xl border bg-card shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Code2 size={28} />
              <h3 className="text-xl font-semibold">Programming</h3>
            </div>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>TypeScript</li>
              <li>JavaScript (ES6+)</li>
              <li>Basic Python</li>
              <li>SQL</li>
              <li>Shell scripting basics</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";


export function EducationSection() {
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
      className=" w-full bg-background"
    >
      <div className="max-w-6xl space-y-16">
        <motion.div variants={item}>
          <h2 className="text-3xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">
            {/* <GraduationCap className="inline-block mr-3 mb-1" size={32} /> */}
            Education
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            My academic journey reflects dedication to both science and
            software, forming a strong foundation for my full-stack development
            career.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div className="p-8 border rounded-2xl shadow-md bg-card hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-1">
              Bachelor of Science (BSc)
            </h3>
            <p className="text-primary font-medium text-lg mb-2">
              Major: Physics
            </p>
            <p className="text-muted-foreground text-base mb-2">
              Institution: National University, Bangladesh
            </p>
            <p className="text-muted-foreground text-base mb-2">
              Current Year: 3rd Year (Honours) – Almost completed
            </p>
            <p className="text-muted-foreground text-base">
              Graduation Expected: 2026
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-md bg-card hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-1">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-primary font-medium text-lg mb-2">
              Science Group
            </p>
            <p className="text-muted-foreground text-base mb-2">
              Institution: Ibrahim Khan Government College, Tangail
            </p>
            <p className="text-muted-foreground text-base">Passed: 2019</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function EducationSection() {
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -90, transformOrigin: "bottom center" }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      transition={{
        type: "spring",
        stiffness: 30,
        damping: 20,
        mass: 0.8,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8 w-full"
    >
      <motion.div variants={item}>
        <h2 className="text-3xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">
          Education
        </h2>
      </motion.div>

      <div className="flex gap-4 items-center justify-center w-full">
        <motion.div variants={item}>
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-muted pb-6">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
              <div className="mb-1">
                <Badge className="mb-2">2019 - 2026</Badge>
                <h4 className="text-lg font-medium">
                  Bachelor of Science in Physics
                </h4>
                <p className="text-muted-foreground">National University</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                3rd year(almost completed)
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-muted">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
              <div className="mb-1">
                <Badge className="mb-2">2017 - 2019</Badge>
                <h4 className="text-lg font-medium">
                  Higher Secondary Certificate
                </h4>
                <p className="text-muted-foreground">
                  Ibrahim Khan Government College
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Science group with focus on Mathematics and Physics.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <div className="relative pl-6 border-l-2 border-muted">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
            <div className="mb-1">
              <Badge className="mb-2">Completed in 2025</Badge>
              <h4 className="text-lg font-medium">Certificates</h4>
              <p className="text-muted-foreground">
                Next Level Web Development
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              <Link
                href={
                  "https://drive.google.com/file/d/13Ja9PnLEVCJqLJ7_0gqx_Ta0nG3NJvIM/view?usp=sharing"
                }
              >
                <p className="text-sm text-blue-400">See Certificate...</p>
              </Link>
            </p>
          </div>
          <div className="relative pl-6 border-l-2 border-muted">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
            <div className="mb-1">
              <Badge className="mb-2">Completed in 2024</Badge>
              <h4 className="text-lg font-medium">Certificates</h4>
              <p className="text-muted-foreground">Complete Web Development</p>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              <Link
                href={
                  "https://drive.google.com/file/d/13Ja9PnLEVCJqLJ7_0gqx_Ta0nG3NJvIM/view?usp=sharing"
                }
              >
                <p className="text-sm text-blue-400">See Certificate...</p>
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium"></h4>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">-</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium"></h4>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground"></p>
                <Link
                  href={
                    "https://drive.google.com/file/d/1Quja4Bqk5Q3hSzfonhXP-DPbBL0tHge8/view?usp=sharing"
                  }
                >
                  <p className="text-sm text-blue-400">See...</p>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-medium">HTML</h4>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  Completed in 2023 -
                </p>
                <Link
                  href={
                    "https://drive.google.com/file/d/1E2Fdd7XOrynJH5r8XxgXFFGANU_i6TQd/view?usp=sharing"
                  }
                >
                  <p className="text-sm text-blue-400">See...</p>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium">Database Programming</h4>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  Completed in 2017 -
                </p>
                <Link
                  href={
                    "https://drive.google.com/file/d/1iM4K58y7QD_l639kGypxpPjpEFAhi9Mm/view?usp=sharing"
                  }
                >
                  <p className="text-sm text-blue-400">See...</p>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

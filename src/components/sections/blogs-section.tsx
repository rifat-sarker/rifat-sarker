"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPostsData = [
  {
    id: 1,
    title: "Getting Started with TypeScript in 2023",
    excerpt:
      "Learn how to set up TypeScript in your projects and take advantage of its powerful features.",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "TypeScript",
    image: "/image.jpg",
  },
  {
    id: 2,
    title: "Building RESTful APIs with Node.js and Express",
    excerpt:
      "A comprehensive guide to creating robust and scalable APIs using Node.js and Express.",
    date: "April 22, 2023",
    readTime: "8 min read",
    category: "Backend",
    image: "/image.jpg",
  },
  {
    id: 3,
    title: "React Performance Optimization Techniques",
    excerpt:
      "Discover practical strategies to improve the performance of your React applications.",
    date: "March 10, 2023",
    readTime: "6 min read",
    category: "React",
    image: "/image.jpg",
  },
  {
    id: 4,
    title: "Introduction to PostgreSQL with Prisma",
    excerpt:
      "Learn how to use Prisma ORM with PostgreSQL for efficient database management.",
    date: "February 28, 2023",
    readTime: "7 min read",
    category: "Database",
    image: "/image.jpg",
  },
];

export function BlogSection() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    // Simulating API load
    setTimeout(() => {
      setBlogPosts(blogPostsData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-12 w-full"
    >
      <motion.div variants={item}>
        <h2 className="text-3xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">
          Blog
        </h2>
        <p className="text-muted-foreground mb-8">
          Sharing my knowledge and experiences in web development through
          articles and tutorials.
        </p>
      </motion.div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-lg bg-muted animate-pulse h-40"
            ></div>
          ))}
        </div>
      ) : (
        <motion.div variants={item} className="space-y-6">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="flex flex-col md:flex-row gap-4 items-start border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="w-full md:w-48 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Badge>{post.category}</Badge>
                <h3 className="text-xl font-semibold line-clamp-2">
                  {post.title}
                </h3>
                <div className="text-sm text-muted-foreground flex gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary gap-1 text-sm"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div variants={item} className="flex justify-center mt-8">
        <Button variant="outline">View All Posts</Button>
      </motion.div>
    </motion.div>
  );
}

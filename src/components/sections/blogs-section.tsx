"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";


// Static data that will be replaced with API calls later
const blogPostsData = [
  {
    id: 1,
    title: "Getting Started with TypeScript in 2023",
    excerpt:
      "Learn how to set up TypeScript in your projects and take advantage of its powerful features.",
    date: "May 15, 2023",
    category: "TypeScript",
    image: "/image.jpg",
  },
  {
    id: 2,
    title: "Building RESTful APIs with Node.js and Express",
    excerpt:
      "A comprehensive guide to creating robust and scalable APIs using Node.js and Express.",
    date: "April 22, 2023",
    category: "Backend",
    image: "/image.jpg",
  },
  {
    id: 3,
    title: "React Performance Optimization Techniques",
    excerpt:
      "Discover practical strategies to improve the performance of your React applications.",
    date: "March 10, 2023",
    category: "React",
    image: "/image.jpg",
  },
  {
    id: 4,
    title: "Introduction to PostgreSQL with Prisma",
    excerpt:
      "Learn how to use Prisma ORM with PostgreSQL for efficient database management.",
    date: "February 28, 2023",
    category: "Database",
    image: "/image.jpg",
  },
];

export function BlogSection() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    // Simulate API call with static data
    const fetchBlogPosts = async () => {
      try {
        // In a real app, this would be:
        // const response = await fetch('/api/blog-posts')
        // const data = await response.json()

        // Simulate loading delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setBlogPosts(blogPostsData);
        setLoading(false);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load blog posts. Please try again later.",
        });
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [toast]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8 w-full"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-lg bg-muted animate-pulse h-[350px]"
            ></div>
          ))}
        </div>
      ) : (
        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-muted/50 h-full flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  height={200}
                  width={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary hover:bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3 w-3 mr-1.5" />
                  {post.date}
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4 flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent"
                >
                  Read Article{" "}
                  <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      )}

      <motion.div variants={item} className="flex justify-center mt-12">
        <Button className="gap-2">
          <BookOpen className="h-4 w-4" />
          View All Articles
        </Button>
      </motion.div>
    </motion.div>
  );
}

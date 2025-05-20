"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { Blog } from "@/types/blog";

type Props = {
  blogsData: Blog[];
};

export function BlogSection({ blogsData }: Props) {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);

  useEffect(() => {
    if (!blogsData || blogsData.length === 0) {
      toast("No blog posts were provided.");
      return;
    }
    setBlogPosts(blogsData);
  }, [blogsData]);

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
      <motion.div variants={item}>
        <h2 className="text-3xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">
          Blog
        </h2>
        <p className="text-muted-foreground mb-8">
          Sharing my knowledge and experiences in web development through
          articles and tutorials.
        </p>
      </motion.div>

      {blogPosts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <motion.div
          variants={item}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {blogPosts.map((blog) => (
            <Card
              key={blog.id}
              className="overflow-hidden p-0 group hover:shadow-lg transition-all duration-300 border-muted/50 h-full flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  height={300}
                  width={300}
                  className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary hover:bg-primary text-primary-foreground">
                    {blog.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3 w-3 mr-1.5" />
                  {blog.publishedAt}
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              {/* <CardContent className="pb-4 flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {blog.content}
                </p>
              </CardContent> */}
              <CardFooter className="pt-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 p-0 my-2 py-2 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent"
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

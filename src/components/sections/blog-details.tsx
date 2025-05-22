/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { getBlogById } from "@/service";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Blog } from "@/types/blog";

export default function BlogDetails() {
  const router = useRouter();
  const params = useParams();
  const idParam = params?.id;

  const id = Array.isArray(idParam) ? idParam[0] : idParam ?? "";

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchBlog() {
      setLoading(true);
      setError(null);
      try {
        const data = await getBlogById(id);
        if (!data) {
          setError("Blog not found");
          setBlog(null);
        } else {
          setBlog(data);
        }
      } catch (err) {
        setError("Failed to fetch blog");
        setBlog(null);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading blog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-600">
        <p>{error}</p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-blue-600 hover:underline"
        >
          Go back
        </button>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-700">
        <p>No blog data available.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-blue-600 hover:underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <section className="w-full px-4 py-10 md:px-10 lg:px-20 bg-gray-50 min-h-screen">
      <article className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="text-sm text-blue-600 hover:underline mb-2 flex items-center gap-1"
        >
          <MoveLeft size={16} /> Back to all blogs
        </button>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          {blog.title}
        </h1>

        {/* Blog Image */}
        {blog.image && (
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Meta Info */}
        <div className="space-y-2 text-sm text-gray-500">
          <p>
            <span className="font-semibold text-gray-700">Category:</span>{" "}
            {blog.category}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Author:</span> Rifat
            Sarker
          </p>
          <p>
            <span className="font-semibold text-gray-700">Created:</span>{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          {blog.publishedAt && (
            <p>
              <span className="font-semibold text-gray-700">Published:</span>{" "}
              {new Date(blog.publishedAt).toLocaleDateString()}
            </p>
          )}
          {blog.updatedAt && (
            <p>
              <span className="font-semibold text-gray-700">Updated:</span>{" "}
              {new Date(blog.updatedAt).toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Content */}
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>

        {/* Tags */}
        {Array.isArray(blog.tags) && blog.tags.length > 0 && (
          <div className="pt-6">
            <h3 className="text-md font-semibold text-gray-800 mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-3">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </section>
  );
}

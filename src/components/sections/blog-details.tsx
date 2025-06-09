/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { getBlogById } from "@/service";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Blog } from "@/types/blog";
import GlobalLoader from "../global-loader";


const dummyComments = [
  {
    name: "John Doe",
    comment: "Great post!",
    date: new Date().toLocaleString(),
  },
  {
    name: "Jane Smith",
    comment: "Loved the insights.",
    date: new Date().toLocaleString(),
  },
];

export default function BlogDetails() {
  const router = useRouter();
  const params = useParams();
  const idParam = params?.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam ?? "";

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState(dummyComments);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    if (!id) return;

    async function fetchBlog() {
      setLoading(true);
      setError(null);
      try {
        const data = await getBlogById(id);
        if (!data) {
          setError("Blog not found");
        } else {
          setBlog(data);
        }
      } catch (err) {
        setError("Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  const handleCommentSubmit = () => {
    if (!commentInput.trim()) return;

    const newComment = {
      name: "Guest User",
      comment: commentInput.trim(),
      date: new Date().toLocaleString(),
    };
    setComments([newComment, ...comments]);
    setCommentInput("");
  };

  if (loading) return <GlobalLoader />;

  if (error || !blog) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-gray-700">
        <p>{error || "No blog data available."}</p>
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
      <article className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="text-sm text-blue-600 hover:underline flex items-center gap-1 sticky top-4 bg-white z-10"
        >
          <MoveLeft size={16} /> Back to all blogs
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>

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
        <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
          <p>
            <span className="font-medium">Category:</span> {blog.category}
          </p>
          <p>
            <span className="font-medium">Author:</span> Rifat Sarker
          </p>
          <p>
            <span className="font-medium">Created:</span>{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          {blog.publishedAt && (
            <p>
              <span className="font-medium">Published:</span>{" "}
              {new Date(blog.publishedAt).toLocaleDateString()}
            </p>
          )}
          {blog.updatedAt && (
            <p>
              <span className="font-medium">Updated:</span>{" "}
              {new Date(blog.updatedAt).toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Blog Content */}
        <div className="prose max-w-none prose-lg text-gray-800">
          <p className="whitespace-pre-line">{blog.content}</p>
        </div>

        {/* Tags */}
        {Array.isArray(blog.tags) && blog.tags.length > 0 && (
          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <hr className="border-t border-gray-200" />

        {/* Comments Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Comments</h2>

          {/* Comment Form */}
          <div className="flex flex-col gap-4">
            <textarea
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              rows={4}
              placeholder="Write your comment..."
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 "
            />
            <button
              onClick={handleCommentSubmit}
              className="self-start bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Post Comment
            </button>
          </div>

          {/* Comment List */}
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet.</p>
          ) : (
            <ul className="space-y-4">
              {comments.map((c, i) => (
                <li key={i} className="border-b pb-2">
                  <p className="text-gray-800 font-medium">{c.name}</p>
                  <p className="text-gray-600 text-sm">{c.date}</p>
                  <p className="text-gray-700 mt-1">{c.comment}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </section>
  );
}

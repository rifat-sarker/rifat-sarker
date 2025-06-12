"use server";

import { Blog } from "@/types/blog";

// This function is used to fetch project data
export const getProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",

  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
};

// This function is used to fetch skills data
export const getSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch skills");
  }

  return res.json();
};

// This function is used to fetch blog data
export const getBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
};

export async function getBlogById(id: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`,
      {
        cache: "no-store",
      }
    );

    console.log(res);
    if (!res.ok) throw new Error("Failed to fetch");

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// This function is used to send a contact email
export const sendContactMail = async ({
  name,
  subject,
  message,
  email,
}: {
  name: string;
  subject: string;
  message: string;
  email: string;
}) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        subject,
        message,
      }),
    });

    return res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { success: false, error: error.message || "Unknown error" };
  }
};

"use server";

export const getProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
};


export const getSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch skills");
  }

  return res.json();
};




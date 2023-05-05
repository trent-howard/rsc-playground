"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();
  const handlePost = async (event) => {
    event.preventDefault();
    await fetch(`/api/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    router.refresh();
  };

  return (
    <form className="flex-col space-y-8" onSubmit={handlePost}>
      <div className="w-full">
        <label className="block" htmlFor="title">
          Title
        </label>
        <input
          className="border rounded focus:outline-none py-2 px-3 focus:ring"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label className="block" htmlFor="content">
          Post
        </label>
        <textarea
          className="border rounded focus:outline-none py-2 px-3 w-full focus:ring"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <input
        className="border-2 border-blue-800 rounded py-2 px-3"
        type="submit"
        value="Submit post!"
      />
    </form>
  );
}

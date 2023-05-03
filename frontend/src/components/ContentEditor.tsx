"use client";
import Tiptap from "./TipTap";
import { useState, useCallback } from "react";

interface Props {
  defaultContent: any;
  username: string;
}

export default function ContentEditor({ defaultContent, username }: Props) {
  const [content, setContent] = useState(
    defaultContent || `<p>Example Content</p>`
  );
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(content: string) {
    // logic to update pocketbase when user submits content
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: username,
          title,
          content,
        }),
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setSuccess(true);
    } catch (error: any) {
      console.log(error);
      setError(error);
      setLoading(false);
      return;
    }
  }

  return (
    <div>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        className="mx-auto border-t-none border-l-none border-r-none border-b-2 border-b-indigo-500 h-12 mt-8 hover:outline-none focus:outline-none mb-6 text-2xl"
      />

      <div className="bg-white">
        <Tiptap
          className="rounded-lg "
          setDescription={setContent}
          defaultContent={content}
        />
      </div>
      <p
        onClick={() => handleSubmit(content)}
        className="cursor-pointer text-center bg-green-500 text-white px-2 py-1 my-4 rounded font-bold block w-full"
      >
        Create Post
      </p>
    </div>
  );
}

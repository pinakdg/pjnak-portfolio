import React from "react"
import ReactMarkdown from "react-markdown"

//Eagerly import *all* markdown files under src/posts as raw text.
//Keys look like "../posts/first-post.md"
const mdModules = import.meta.glob("../posts/*.md", {
  as: "raw",
  eager: true,
})

export default function MarkdownPost({ file }) {
  const key = `../posts/${file}`
  const content = mdModules[key] ?? "# Not found\nThis post could not be loaded."

  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}

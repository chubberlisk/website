import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");

  return !inline && match ? (
    <SyntaxHighlighter
      style={materialDark}
      language={match[1]}
      PreTag="div"
      showLineNumbers={true}
      className="lg:w-3/4"
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const h2 = ({ children }) => (
  <h2 className="text-2xl md:text-4xl mt-8">{children}</h2>
);

const p = ({ children }) => <p className="mb-5">{children}</p>;

export default function MarkdownToHtml({ markdown }) {
  return (
    <ReactMarkdown
      className="text-sm md:text-base"
      components={{ code: CodeBlock, h2, p }}
      remarkPlugins={[remarkGfm]}
    >
      {markdown}
    </ReactMarkdown>
  );
}

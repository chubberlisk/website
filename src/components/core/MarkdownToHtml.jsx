import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const code = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");

  return !inline && match ? (
    <SyntaxHighlighter
      style={materialDark}
      language={match[1]}
      PreTag="div"
      showLineNumbers={true}
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className="text-wtw-code-lime bg-wtw-code-black p-1" {...props}>
      {children}
    </code>
  );
};

const h2 = ({ children }) => (
  <h2 className="text-2xl md:text-4xl mt-8">{children}</h2>
);

const p = ({ children }) => (
  <p className="mb-5 whitespace-pre-wrap">{children}</p>
);

const a = ({ href, children }) => {
  if (href.includes("madetech")) {
    return (
      <a href={href} className="text-made-tech">
        {children}
      </a>
    );
  }

  return <a href={href}>{children}</a>;
};

const blockquote = ({ children }) => {
  return (
    <div className="pt-6 px-6 pb-1 border-l-4 border-wtw-yellow">
      {children}
    </div>
  );
};

export default function MarkdownToHtml({ markdown }) {
  return (
    <div className="text-sm md:text-base">
      <ReactMarkdown
        components={{ code, h2, p, a, blockquote }}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

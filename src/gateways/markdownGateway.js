import fileSystem from "fs";
import { join, resolve } from "path";
import matter from "gray-matter";

export default class MarkdownGateway {
  constructor(postsDirectory) {
    this.postsDirectory = postsDirectory;
  }

  retrieveBlogPost(file) {
    const slug = file.replace(/\.md$/, "");
    const fullPath = join(resolve("./", this.postsDirectory), `${slug}.md`);
    const fileContents = fileSystem.readFileSync(fullPath, "utf8");
    const { data: metadata, content } = matter(fileContents);

    return {
      metadata,
      content,
    };
  }

  retrieveBlogPosts() {
    const files = fileSystem.readdirSync(resolve("./", this.postsDirectory));

    return {
      blogPosts: files.map((file) => this.retrieveBlogPost(file)),
    };
  }
}

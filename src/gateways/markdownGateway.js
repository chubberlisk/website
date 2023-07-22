import fileSystem from "fs";
import { join, resolve } from "path";
import matter from "gray-matter";

export default class MarkdownGateway {
  constructor({ contentDirectory }) {
    this.blogPostsDirectory = `${contentDirectory}/blog-posts`;
    this.writingsDirectory = `${contentDirectory}/writings`;
  }

  retrieveBlogPost(file) {
    const slug = file.replace(/\.md$/, "");
    const fullPath = join(resolve("./", this.blogPostsDirectory), `${slug}.md`);
    const fileContents = fileSystem.readFileSync(fullPath, "utf8");
    const { data: metadata, content } = matter(fileContents);

    return {
      metadata: { ...metadata, slug },
      content: content.trim(),
    };
  }

  retrieveBlogPosts() {
    const files = fileSystem.readdirSync(
      resolve("./", this.blogPostsDirectory),
    );

    return {
      blogPosts: files
        .map((file) => this.retrieveBlogPost(file))
        .sort((postA, postB) =>
          new Date(postA.metadata.publishDateTime) >
          new Date(postB.metadata.publishDateTime)
            ? -1
            : 1,
        ),
    };
  }

  retrieveWriting(file) {
    const slug = file.replace(/\.md$/, "");
    const fullPath = join(resolve("./", this.writingsDirectory), `${slug}.md`);
    const fileContents = fileSystem.readFileSync(fullPath, "utf8");
    const { data: metadata, content } = matter(fileContents);

    return {
      metadata: { ...metadata },
      content: content.trim(),
    };
  }

  retrieveWritings() {
    const files = fileSystem
      .readdirSync(resolve("./", this.writingsDirectory))
      .filter((file) => file.includes(".md"));

    return {
      writings: files
        .map((file) => this.retrieveWriting(file))
        .sort((postA, postB) =>
          new Date(postA.metadata.publishDateTime) >
          new Date(postB.metadata.publishDateTime)
            ? -1
            : 1,
        ),
    };
  }
}

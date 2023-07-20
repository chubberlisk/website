import fileSystem from "fs";
import { join, resolve } from "path";
import matter from "gray-matter";

export default class MarkdownGateway {
  constructor({ contentDirectory }) {
    this.blogPostsDirectory = `${contentDirectory}/blog-posts`;
    this.tingPostsDirectory = `${contentDirectory}/ting-posts`;
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
          new Date(postA.metadata.publishDate) >
          new Date(postB.metadata.publishDate)
            ? -1
            : 1,
        ),
    };
  }

  retrieveTingPost(file) {
    const slug = file.replace(/\.md$/, "");
    const fullPath = join(resolve("./", this.tingPostsDirectory), `${slug}.md`);
    const fileContents = fileSystem.readFileSync(fullPath, "utf8");
    const { data: metadata, content } = matter(fileContents);

    return {
      metadata: { ...metadata, slug },
      content: content.trim(),
    };
  }

  retrieveTingPosts() {
    const files = fileSystem.readdirSync(
      resolve("./", this.tingPostsDirectory),
    );

    return {
      tingPosts: files
        .map((file) => this.retrieveTingPost(file))
        .sort((postA, postB) =>
          new Date(postA.metadata.publishDate) >
          new Date(postB.metadata.publishDate)
            ? -1
            : 1,
        ),
    };
  }
}

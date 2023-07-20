import MarkdownGateway from "./markdownGateway";

const markdownGateway = new MarkdownGateway({ contentDirectory: "fixtures" });

describe("#retrieveBlogPost", () => {
  let blogPost;

  beforeAll(() => {
    blogPost = markdownGateway.retrieveBlogPost("post-1.md");
  });

  it("returns slug in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        slug: "post-1",
      }),
    );
  });

  it("returns title in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        title: "Post 1",
      }),
    );
  });

  it("returns publish date in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        publishDate: "2021-03-01T15:30:00",
      }),
    );
  });

  it("returns summary in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        summary: "Post 1 blog post.",
      }),
    );
  });

  it("returns cover image in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        coverImage: "/images/post-1.png",
      }),
    );
  });

  it("returns draft in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        draft: false,
      }),
    );
  });

  it("returns tags in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        tags: ["test"],
      }),
    );
  });

  it("returns content of blog post", () => {
    expect(blogPost.content).toBe("Post 1 content.");
  });
});

describe("#retrieveBlogPosts", () => {
  let blogPosts;

  beforeAll(() => {
    blogPosts = markdownGateway.retrieveBlogPosts();
  });

  it("returns all blog posts", () => {
    expect(blogPosts.blogPosts).toHaveLength(3);
  });

  it("returns metadata of blog post", () => {
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("title");
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("publishDate");
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("summary");
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("coverImage");
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("draft");
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("tags");
  });

  it("returns content of blog post", () => {
    expect(blogPosts.blogPosts[0]).toHaveProperty("content");
  });

  it("sorts blog posts by publish date with most recent first", () => {
    expect(blogPosts.blogPosts[0].metadata.publishDate).toBe(
      "2021-03-03T17:30:00",
    );
    expect(blogPosts.blogPosts[1].metadata.publishDate).toBe(
      "2021-03-01T15:30:00",
    );
    expect(blogPosts.blogPosts[2].metadata.publishDate).toBe(
      "2021-01-02T16:30:00",
    );
  });
});

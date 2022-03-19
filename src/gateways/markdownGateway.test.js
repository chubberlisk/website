import MarkdownGateway from "./markdownGateway";

describe("#retrieveBlogPost", () => {
  it("returns title in metadata of blog post", () => {
    const markdownGateway = new MarkdownGateway("fixtures/blog-posts");

    const post = markdownGateway.retrieveBlogPost("post-1.md");

    expect(post.metadata).toEqual(
      expect.objectContaining({
        title: "Post 1",
      })
    );
  });

  it("returns publish date in metadata of blog post", () => {
    const markdownGateway = new MarkdownGateway("fixtures/blog-posts");

    const post = markdownGateway.retrieveBlogPost("post-1.md");

    expect(post.metadata).toEqual(
      expect.objectContaining({
        publishDate: "2021-03-01T15:30:00Z",
      })
    );
  });

  it("returns summary in metadata of blog post", () => {
    const markdownGateway = new MarkdownGateway("fixtures/blog-posts");

    const post = markdownGateway.retrieveBlogPost("post-1.md");

    expect(post.metadata).toEqual(
      expect.objectContaining({
        summary: "Post 1 blog post.",
      })
    );
  });

  it("returns cover image in metadata of blog post", () => {
    const markdownGateway = new MarkdownGateway("fixtures/blog-posts");

    const post = markdownGateway.retrieveBlogPost("post-1.md");

    expect(post.metadata).toEqual(
      expect.objectContaining({
        coverImage: "/images/post-1.png",
      })
    );
  });

  it("returns draft in metadata of blog post", () => {
    const markdownGateway = new MarkdownGateway("fixtures/blog-posts");

    const post = markdownGateway.retrieveBlogPost("post-1.md");

    expect(post.metadata).toEqual(
      expect.objectContaining({
        draft: false,
      })
    );
  });

  it("returns tags in metadata of blog post", () => {
    const markdownGateway = new MarkdownGateway("fixtures/blog-posts");

    const post = markdownGateway.retrieveBlogPost("post-1.md");

    expect(post.metadata).toEqual(
      expect.objectContaining({
        tags: ["test"],
      })
    );
  });

  it("returns content of blog post", () => {
    const markdownGateway = new MarkdownGateway("fixtures/blog-posts");

    const post = markdownGateway.retrieveBlogPost("post-1.md");

    expect(post.content).toEqual("\nPost 1 content.\n");
  });
});

describe("#retrieveBlogPosts", () => {
  it("returns all blog posts", () => {
    const markdownGateway = new MarkdownGateway("fixtures/blog-posts");

    const blogPosts = markdownGateway.retrieveBlogPosts("post-1.md");

    expect(blogPosts.blogPosts).toHaveLength(3);
  });

  it("returns metadata of blog post", () => {
    const markdownGateway = new MarkdownGateway("fixtures/blog-posts");

    const blogPosts = markdownGateway.retrieveBlogPosts("post-1.md");

    expect(blogPosts.blogPosts[0].metadata).toEqual(
      expect.objectContaining({
        title: "Post 1",
        publishDate: "2021-03-01T15:30:00Z",
        summary: "Post 1 blog post.",
        coverImage: "/images/post-1.png",
        draft: false,
        tags: ["test"],
      })
    );
  });

  it("returns content of blog post", () => {
    const markdownGateway = new MarkdownGateway("fixtures/blog-posts");

    const blogPosts = markdownGateway.retrieveBlogPosts("post-1.md");

    expect(blogPosts.blogPosts[0].content).toEqual("\nPost 1 content.\n");
  });
});

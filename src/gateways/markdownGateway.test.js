import MarkdownGateway from "./markdownGateway";

const markdownGateway = new MarkdownGateway("fixtures/blog-posts");

describe("#retrieveBlogPost", () => {
  let blogPost;

  beforeAll(() => {
    blogPost = markdownGateway.retrieveBlogPost("post-1.md");
  });

  it("returns title in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        title: "Post 1",
      })
    );
  });

  it("returns publish date in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        publishDate: "2021-03-01T15:30:00Z",
      })
    );
  });

  it("returns summary in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        summary: "Post 1 blog post.",
      })
    );
  });

  it("returns cover image in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        coverImage: "/images/post-1.png",
      })
    );
  });

  it("returns draft in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        draft: false,
      })
    );
  });

  it("returns tags in metadata of blog post", () => {
    expect(blogPost.metadata).toEqual(
      expect.objectContaining({
        tags: ["test"],
      })
    );
  });

  it("returns content of blog post", () => {
    expect(blogPost.content).toEqual("\nPost 1 content.\n");
  });
});

describe("#retrieveBlogPosts", () => {
  let blogPosts;

  beforeAll(() => {
    blogPosts = markdownGateway.retrieveBlogPosts("post-1.md");
  });

  it("returns all blog posts", () => {
    expect(blogPosts.blogPosts).toHaveLength(3);
  });

  it("returns metadata of blog post", () => {
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
    expect(blogPosts.blogPosts[0].content).toEqual("\nPost 1 content.\n");
  });
});

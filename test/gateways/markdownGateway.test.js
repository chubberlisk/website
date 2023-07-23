import MarkdownGateway from "@/gateways/markdownGateway";

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
        publishDateTime: "2021-03-01T15:30:00",
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
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("slug");
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("title");
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("publishDateTime");
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("summary");
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("coverImage");
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("draft");
    expect(blogPosts.blogPosts[0].metadata).toHaveProperty("tags");
  });

  it("returns content of blog post", () => {
    expect(blogPosts.blogPosts[0]).toHaveProperty("content");
  });

  it("sorts blog posts by publish date with most recent first", () => {
    expect(blogPosts.blogPosts[0].metadata.publishDateTime).toBe(
      "2021-03-03T17:30:00",
    );
    expect(blogPosts.blogPosts[1].metadata.publishDateTime).toBe(
      "2021-03-01T15:30:00",
    );
    expect(blogPosts.blogPosts[2].metadata.publishDateTime).toBe(
      "2021-01-02T16:30:00",
    );
  });
});

describe("#retrieveWriting", () => {
  let writing;

  beforeAll(() => {
    writing = markdownGateway.retrieveWriting("writing-1.md");
  });

  it("returns title in metadata of a writing", () => {
    expect(writing.metadata).toEqual(
      expect.objectContaining({
        title: "Writing 1",
      }),
    );
  });

  it("returns publish date time in metadata of a writing", () => {
    expect(writing.metadata).toEqual(
      expect.objectContaining({
        publishDateTime: "2021-03-03T15:30:00",
      }),
    );
  });

  it("returns draft in metadata of a writing", () => {
    expect(writing.metadata).toEqual(
      expect.objectContaining({
        draft: false,
      }),
    );
  });

  it("returns tags in metadata of a writing", () => {
    expect(writing.metadata).toEqual(
      expect.objectContaining({
        tags: ["Some Tag"],
      }),
    );
  });

  it("returns content of a writing", () => {
    expect(writing.content).toBe("Writing 1 content.");
  });
});

describe("#retrieveWritings", () => {
  let writings;

  beforeAll(() => {
    writings = markdownGateway.retrieveWritings();
  });

  it("returns all writings", () => {
    expect(writings.writings).toHaveLength(3);
  });

  it("returns metadata of a writing", () => {
    expect(writings.writings[0].metadata).toHaveProperty("title");
    expect(writings.writings[0].metadata).toHaveProperty("publishDateTime");
    expect(writings.writings[0].metadata).toHaveProperty("draft");
    expect(writings.writings[0].metadata).toHaveProperty("tags");
  });

  it("returns content of a writing", () => {
    expect(writings.writings[0]).toHaveProperty("content");
  });

  it("sorts writings by publish date with most recent first", () => {
    expect(writings.writings[0].metadata.publishDateTime).toBe(
      "2021-03-03T15:30:00",
    );
    expect(writings.writings[1].metadata.publishDateTime).toBe(
      "2021-02-02T16:30:00",
    );
    expect(writings.writings[2].metadata.publishDateTime).toBe(
      "2021-01-01T17:30:00",
    );
  });
});

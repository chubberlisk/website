import GetBlogPostBySlug from "../../src/useCases/getBlogPostBySlug";

const blogPostsGateway = {
  retrieveBlogPost: jest.fn().mockReturnValue({
    blogPost: { title: "Post 1" },
  }),
};

const getBlogPostBySlug = new GetBlogPostBySlug(blogPostsGateway);

it("retrieves blog post", () => {
  getBlogPostBySlug.execute("post-1");

  expect(blogPostsGateway.retrieveBlogPost).toHaveBeenCalledWith("post-1");
});

it("returns blog post", () => {
  const blogPosts = getBlogPostBySlug.execute("post-1");

  expect(blogPosts.blogPost).toHaveProperty("title", "Post 1");
});

import GetBlogPosts from "../../src/useCases/getBlogPosts";

const blogPostsGateway = {
  retrieveBlogPosts: jest.fn().mockReturnValue({
    blogPosts: [{ title: "Post 1" }, { title: "Post 2" }, { title: "Post 3" }],
  }),
};

const getBlogPosts = new GetBlogPosts(blogPostsGateway);

it("retrieves all blog posts", () => {
  getBlogPosts.execute();

  expect(blogPostsGateway.retrieveBlogPosts).toHaveBeenCalled();
});

it("returns all blog posts", () => {
  const blogPosts = getBlogPosts.execute();

  expect(blogPosts.blogPosts).toHaveLength(3);
});

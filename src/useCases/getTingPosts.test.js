import GetTingPosts from "./getTingPosts";

const tingPostsGateway = {
  retrieveTingPosts: jest.fn().mockReturnValue({
    tingPosts: [
      { content: "Ting post 1" },
      { content: "Ting post 2" },
      { content: "Ting post 3" },
    ],
  }),
};

const getTingPosts = new GetTingPosts(tingPostsGateway);

it("retrieves all ting posts", () => {
  getTingPosts.execute();

  expect(tingPostsGateway.retrieveTingPosts).toHaveBeenCalled();
});

it("returns all ting posts", () => {
  const tingPosts = getTingPosts.execute();

  expect(tingPosts.tingPosts).toHaveLength(3);
});

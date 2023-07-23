export default class GetBlogPosts {
  constructor(blogPostsGateway) {
    this.blogPostsGateway = blogPostsGateway;
  }

  execute() {
    return this.blogPostsGateway.retrieveBlogPosts();
  }
}

export default class GetBlogPostBySlug {
  constructor(blogPostsGateway) {
    this.blogPostsGateway = blogPostsGateway;
  }

  execute(slug) {
    return this.blogPostsGateway.retrieveBlogPost(slug);
  }
}

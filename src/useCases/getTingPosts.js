export default class GetTingPosts {
  constructor(tingPostsGateway) {
    this.tingPostsGateway = tingPostsGateway;
  }

  execute() {
    return this.tingPostsGateway.retrieveTingPosts();
  }
}

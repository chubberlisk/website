import MarkdownGateway from "@/gateways/MarkdownGateway";
import GetBlogPosts from "@/useCases/GetBlogPosts";
import GetWritings from "@/useCases/GetWritings";

// Gateways
export const markdownGateway = new MarkdownGateway({
  contentDirectory: "content",
});

// Use cases
export const getBlogPosts = new GetBlogPosts(markdownGateway);
export const getWritings = new GetWritings(markdownGateway);

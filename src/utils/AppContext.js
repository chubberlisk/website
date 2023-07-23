import MarkdownGateway from "@/gateways/MarkdownGateway";
import GetBlogPosts from "@/useCases/GetBlogPosts";
import GetWritings from "@/useCases/GetWritings";
import GetBlogPostBySlug from "@/useCases/GetBlogPostBySlug";

// Gateways
export const markdownGateway = new MarkdownGateway({
  contentDirectory: "content",
});

// Use cases
export const getBlogPostBySlug = new GetBlogPostBySlug(markdownGateway);
export const getBlogPosts = new GetBlogPosts(markdownGateway);
export const getWritings = new GetWritings(markdownGateway);

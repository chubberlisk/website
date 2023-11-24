import MarkdownGateway from "@/gateways/MarkdownGateway";
import GetBlogPosts from "@/useCases/GetBlogPosts";
import GetWritings from "@/useCases/GetWritings";
import GetBlogPostBySlug from "@/useCases/GetBlogPostBySlug";
import DatamuseApiGateway from "@/gateways/DatamuseApiGateway";
import GetTingPuns from "@/useCases/GetTingPuns";

// Gateways
export const markdownGateway = new MarkdownGateway({
  contentDirectory: "content",
});
export const datamuseApiGateway = new DatamuseApiGateway();

// Use cases
export const getBlogPostBySlug = new GetBlogPostBySlug(markdownGateway);
export const getBlogPosts = new GetBlogPosts(markdownGateway);
export const getWritings = new GetWritings(markdownGateway);
export const getTingPuns = new GetTingPuns(datamuseApiGateway);

import { getBlogPosts, getWritings } from "@/utils/AppContext";
import HomePage from "./home-page";

async function getLatestBlogPostsAndWritings() {
  const blogPosts = getBlogPosts.execute();
  const writings = getWritings.execute();

  return {
    latestBlogPosts: blogPosts.blogPosts.slice(0, 2),
    writings: writings.writings,
  };
}

export default async function Page() {
  const { latestBlogPosts, writings } = await getLatestBlogPostsAndWritings();

  return <HomePage latestBlogPosts={latestBlogPosts} writings={writings} />;
}

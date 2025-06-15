import { BlogSection } from "@/components/sections/blogs-section";
import { PortfolioLayout } from "@/layout/portfolio-layout";
import { getBlogs } from "@/service";

export default async function BlogsPage() {
  const { data: blogsData } = await getBlogs();

  return (
    <PortfolioLayout>
      <BlogSection blogsData={blogsData} />
    </PortfolioLayout>
  );
}

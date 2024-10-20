import { fetchBlogPosts } from "@/app/api/blogApi";
import Loading from "@/app/loading";
import BlogList from "@/components/blog/BlogList";
import LayoutWithSidebar from "@/components/layout/LayoutWithSIdebar";
import { blogPerPage } from "@/lib/utils";
import { Suspense } from "react";

interface BlogPageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

export default async function BlogListPage({ searchParams }: BlogPageProps) {
  try {
    const { page, perPage } = searchParams;

    const limit = typeof perPage === "string" ? parseInt(perPage) : blogPerPage;
    const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0;
    const { contents, totalCount } = await fetchBlogPosts({ limit, offset });
    const pageCount = Math.ceil(totalCount / limit);
    return (
      <LayoutWithSidebar>
        <Suspense fallback={<Loading />}>
          <BlogList blogPosts={contents} pageCount={pageCount} />
        </Suspense>
      </LayoutWithSidebar>
    );
  } catch (error) {
    console.error("Failed to fetch blog list", error);
    return (
      <LayoutWithSidebar>
        <div className="text-center mt-20">
          ブログの取得に失敗しました。後でもう一度お試しください。
        </div>
      </LayoutWithSidebar>
    );
  }
}

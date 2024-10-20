import { PROFILE } from "@/app/constants/profileInfo";
import { BlogPost } from "@/app/types";
import { formatDate } from "@/app/utils/dateUtils";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface BlogItemProps {
  blogPost: BlogPost;
  isRanking?: boolean;
}

const BlogCard = ({ blogPost, isRanking }: BlogItemProps) => {
  const { id, title, image, category, ranking, createdAt } = blogPost;
  const categoryColor = category.color || "gray";
  const formattedDate = formatDate(createdAt);

  return (
    <article>
      <Card className="group overflow-hidden">
        <Link href={`/blog/${id}`} className="block h-full">
          <CardHeader className="p-0">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={image.url}
                width={768}
                height={432}
                alt={title}
                className="object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
                priority={false}
              />

              <div
                className="absolute top-0 left-0 text-xs text-white py-1.5 px-4"
                style={{ backgroundColor: categoryColor }}
              >
                {category.name}
              </div>

              {isRanking && ranking && (
                <div className="absolute top-0 right-0 bg-white py-2 px-3 font-bold">
                  {ranking}
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <h2 className="font-bold text-xl">{title}</h2>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="flex items-center gap-2">
              <Image
                src={PROFILE.IMAGE_PATH}
                width={24}
                height={24}
                alt="profile"
                className="rounded-full"
                priority={false}
              />
              <div className="flex flex-col text-xs text-gray-500">
                <span>{PROFILE.NAME}</span>
                <time dateTime={createdAt}>{formattedDate}</time>
              </div>
            </div>
          </CardFooter>
        </Link>
      </Card>
    </article>
  );
};

export default BlogCard;
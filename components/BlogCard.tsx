import Link from "next/link";
import { Post, BlogCardProps } from "@/src/types/posts";

const BlogCard = ({ posts }: BlogCardProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post: Post) => (
        <div
          key={post.id}
          className="bg-zinc-100 border border-emerald-300 rounded-2xl p-6 shadow transition duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
        >
          <h2 className="text-xl font-bold text-emerald-800 mb-2">
            {post.title}
          </h2>

          <div className="text-sm text-gray-600 mb-4">
            <span className="font-medium">@{post.author.username}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.created_at).toISOString().slice(0, 10)}</span>
          </div>

          <p className="text-gray-700 mb-4">
            {post.body.length > 200
              ? post.body.slice(0, 200) + "..."
              : post.body}
          </p>

          <Link
            href={`/posts/${post.id}`}
            className="text-emerald-600 font-medium hover:underline"
          >
            Read more →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;

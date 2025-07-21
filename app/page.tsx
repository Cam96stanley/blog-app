import { ChevronRight } from "lucide-react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import HeroSection from "@/components/HeroSection";
import CommunitySection from "@/components/CommunitySection";
import { getPosts } from "@/lib/api";
import { Post } from "@/src/types/posts";

const Home = async () => {
  const posts: Post[] = await getPosts();
  return (
    <>
      <HeroSection />
      <section className="md:max-w-5xl mx-auto">
        <div className="flex items-center">
          <ChevronRight className="text-emerald-400" size={36} />
          <h2 className="text-3xl my-8">Recent Blogs</h2>
        </div>
        <BlogCard posts={posts.slice(0, 6)} />
        <div className="mt-8 text-center">
          <Link
            href="#"
            className="text-emerald-600 font-medium hover:underline"
          >
            Read more →
          </Link>
        </div>
      </section>
      <section className="py-8 md:max-w-5xl mx-auto">
        <div className="flex items-center">
          <ChevronRight className="text-emerald-400" size={36} />
          <h2 className="text-3xl my-8">Join the Community</h2>
        </div>
        <CommunitySection />
      </section>
    </>
  );
};

export default Home;

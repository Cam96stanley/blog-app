import HomeBlogSection from "@/components/HomeBlogSection";
import { ChevronRight } from "lucide-react";

import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <section>
        <div className="flex items-center">
          <ChevronRight className="text-emerald-400" size={36} />
          <h2 className="text-3xl my-8">Recent Blogs</h2>
        </div>
        <HomeBlogSection />
      </section>
    </>
  );
};

export default Home;

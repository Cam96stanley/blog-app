import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="lg:flex lg:items-center">
      <div className="py-12 md:py-20 px-4 text-center md:text-left max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          <span className="text-emerald-400">Grow</span> as a developer{" "}
          <span className="text-emerald-400">with</span>{" "}
          <span className="text-emerald-400">DevRoots</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <ChevronRight size={75} className="text-emerald-400" />
          <p className="text-lg md:text-xl text-zinc-300 tracking-wider max-w-xl">
            A blog for new devs to share their journey and learn together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

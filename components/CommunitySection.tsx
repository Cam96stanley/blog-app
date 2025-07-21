import Link from "next/link";

const CommunitySection = () => {
  return (
    <div className="px-4 py-8 text-center max-w-2xl mx-auto">
      <p className="text-lg">
        Join our community of developers, tell the world what you{"'"}re working
        on, discuss your thoughts, and learn from other dev{"'"}s
      </p>
      <div className="mt-8">
        <Link
          href="#"
          className="bg-emerald-400 text-black rounded-4xl py-2 px-4 text-xl md:text-2xl  cursor-pointer"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default CommunitySection;

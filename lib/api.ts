export const getPosts = async () => {
  const res = await fetch("https://blog-api-6t78.onrender.com/blogs", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch responses");

  return res.json();
};

import prisma from "../utils/prisma";
import Post from "./post";

async function Posts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="flex-col space-y-10">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default Posts;

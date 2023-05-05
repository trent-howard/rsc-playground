import CreatePost from "./create";
import Posts from "./posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 max-w-4xl space-y-24">
      <Posts />
      <CreatePost />
    </main>
  );
}

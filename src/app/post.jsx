import dayjs from "dayjs";

function Post({ title, content, createdAt }) {
  return (
    <div className="flex-col space-y-4">
      <h1 className="font-bold text-3xl text-blue-900">{title}</h1>
      <h6>{dayjs(createdAt).format("DD/MM/YYYY")}</h6>
      <p className="max-w-2xl whitespace-pre-wrap leading-3">{content}</p>
    </div>
  );
}

export default Post;

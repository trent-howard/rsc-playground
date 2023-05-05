import prisma from "@/utils/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const response = await prisma.post.create({
      data: { ...req.body, published: true },
    });
    res.status(200).json({ message: "Updated" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
}

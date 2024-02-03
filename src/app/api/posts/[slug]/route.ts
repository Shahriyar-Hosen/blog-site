import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export interface ISlugParams {
  params: { slug: string };
}

// GET SINGLE POST
export const GET = async (req: Request, { params }: ISlugParams) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log("🚀 ~ GET single post ~ err:", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

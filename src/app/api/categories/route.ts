import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(categories), {
      status: 200, // Set the HTTP status code here
      headers: { "Content-Type": "application/json" }, // Optional: set content type
    });
  } catch (err) {
    console.log("🚀 ~ Categories GET ~ err:", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      {
        status: 500, // Set the HTTP status code for an error
        headers: { "Content-Type": "application/json" }, // Optional: set content type
      }
    );
  }
};

import { NextResponse } from "next/server";
import { db } from "@/utlis";
import { AiOutput } from "@/utlis/schema";

export async function GET() {
  try {
    const historyData = await db.select().from(AiOutput);
    return NextResponse.json(historyData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 });
  }
}

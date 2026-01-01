import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    today: 0,
    week: 0,
    month: 0,
    total: 0,
    topPages: [],
    recentViews: [],
  });
}

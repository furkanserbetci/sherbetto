import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Analytics stats disabled for serverless deployment
    // TODO: Implement with a cloud database (Supabase, PlanetScale, etc.)
    return NextResponse.json({
      today: 0,
      week: 0,
      month: 0,
      total: 0,
      topPages: [],
      recentViews: [],
    });
  } catch (error) {
    console.error("Analytics stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}

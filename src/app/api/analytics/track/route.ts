import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Analytics tracking disabled for serverless deployment
    // TODO: Implement with a cloud database (Supabase, PlanetScale, etc.)
    const body = await request.json();
    console.log("Page view:", body.path);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics track error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

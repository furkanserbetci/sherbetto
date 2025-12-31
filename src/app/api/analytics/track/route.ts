import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path, referrer } = body;

    // Get client info from headers
    const userAgent = request.headers.get("user-agent") || undefined;
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : undefined;

    // Create page view record
    await prisma.pageView.create({
      data: {
        path,
        referrer: referrer || undefined,
        userAgent,
        ip,
      },
    });

    // Update daily stats
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await prisma.dailyStat.upsert({
      where: { date: today },
      update: { views: { increment: 1 } },
      create: { date: today, views: 1, visitors: 1 },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics track error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

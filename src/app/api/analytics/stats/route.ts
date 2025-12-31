import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const now = new Date();
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);

    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);

    const monthAgo = new Date(today);
    monthAgo.setDate(monthAgo.getDate() - 30);

    // Get today's stats
    const todayViews = await prisma.pageView.count({
      where: { createdAt: { gte: today } },
    });

    // Get this week's stats
    const weekViews = await prisma.pageView.count({
      where: { createdAt: { gte: weekAgo } },
    });

    // Get this month's stats
    const monthViews = await prisma.pageView.count({
      where: { createdAt: { gte: monthAgo } },
    });

    // Get total views
    const totalViews = await prisma.pageView.count();

    // Get daily stats for chart (last 7 days)
    const dailyStats = await prisma.dailyStat.findMany({
      where: { date: { gte: weekAgo } },
      orderBy: { date: "asc" },
    });

    // Get top pages
    const topPages = await prisma.pageView.groupBy({
      by: ["path"],
      _count: { path: true },
      orderBy: { _count: { path: "desc" } },
      take: 5,
    });

    // Get recent page views
    const recentViews = await prisma.pageView.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      select: {
        id: true,
        path: true,
        createdAt: true,
        referrer: true,
      },
    });

    return NextResponse.json({
      today: todayViews,
      week: weekViews,
      month: monthViews,
      total: totalViews,
      dailyStats: dailyStats.map((stat) => ({
        date: stat.date.toISOString().split("T")[0],
        views: stat.views,
      })),
      topPages: topPages.map((page) => ({
        path: page.path,
        views: page._count.path,
      })),
      recentViews,
    });
  } catch (error) {
    console.error("Analytics stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}

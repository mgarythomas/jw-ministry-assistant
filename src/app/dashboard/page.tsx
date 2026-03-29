import React from "react";
import { TopAppBar } from "@/components/TopAppBar";
import { BottomNavBar } from "@/components/BottomNavBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map, BookOpen, ContactRound, AudioLines, Users, PenTool, Calendar, Plus } from "lucide-react";

export default function ElderDashboard() {
  return (
    <div className="bg-surface text-on-surface min-h-screen pb-32">
      <TopAppBar
        title="Elder"
        role="Elder"
        showMenu={false}
        showTabs={false}
      />

      <main className="pt-24 px-6 max-w-5xl mx-auto">
        {/* Hero / Personalized Greeting */}
        <section className="mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">
            Welcome back, Brother Bennett
          </h1>
          <p className="text-on-surface-variant font-medium">
            Your spiritual week at a glance.
          </p>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Next Meeting Countdown Card (Large) */}
          <Card className="md:col-span-8 bg-surface-container-lowest rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group border-none shadow-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary-container/20 transition-colors"></div>
            <CardContent className="p-0 relative z-10">
              <Badge className="px-3 py-1 rounded-full bg-tertiary-container/10 hover:bg-tertiary-container/10 text-tertiary font-bold text-xs uppercase tracking-widest mb-6 border-none shadow-none">
                Upcoming
              </Badge>
              <h2 className="text-4xl font-bold text-on-surface leading-tight mb-4">
                Christian Life and Ministry
              </h2>
              <div className="flex items-baseline gap-2 text-primary font-bold">
                <span className="text-6xl tracking-tighter">1</span>
                <span className="text-2xl">days to go</span>
              </div>
            </CardContent>
            <div className="mt-8 flex items-center gap-4 relative z-10">
              <div className="flex flex-col">
                <span className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">
                  Date & Time
                </span>
                <span className="text-on-surface font-semibold">
                  Wednesday, 7:30 PM
                </span>
              </div>
            </div>
          </Card>

          {/* Quick Links (Vertical Stack) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Card className="flex-1 bg-surface-container-low p-6 rounded-2xl group hover:bg-primary-container transition-all border-none shadow-none cursor-pointer">
              <CardContent className="p-0 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-on-surface font-bold text-lg group-hover:text-on-primary">
                    Ministry (Territory)
                  </span>
                  <span className="text-on-surface-variant text-sm group-hover:text-on-primary/80">
                    View your active maps
                  </span>
                </div>
                <Map
                  size={32}
                  className="text-primary group-hover:text-on-primary"
                />
              </CardContent>
            </Card>
            <Card className="flex-1 bg-surface-container-low p-6 rounded-2xl group hover:bg-primary-container transition-all border-none shadow-none cursor-pointer">
              <CardContent className="p-0 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-on-surface font-bold text-lg group-hover:text-on-primary">
                    Study Materials
                  </span>
                  <span className="text-on-surface-variant text-sm group-hover:text-on-primary/80">
                    Research and references
                  </span>
                </div>
                <BookOpen
                  size={32}
                  className="text-primary group-hover:text-on-primary"
                />
              </CardContent>
            </Card>
          </div>

          {/* My Assignments (Detailed Card) */}
          <Card className="md:col-span-12 lg:col-span-5 bg-surface-container-lowest p-8 rounded-2xl border-none shadow-none">
            <CardHeader className="p-0 flex flex-row items-center justify-between mb-8 space-y-0">
              <CardTitle className="text-2xl font-bold tracking-tight">
                My Assignments
              </CardTitle>
              <ContactRound size={24} className="text-on-surface-variant" />
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="flex items-center gap-5 p-4 bg-surface-container rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <AudioLines size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-on-surface font-bold">Audio/Visual</span>
                  <span className="text-on-surface-variant text-sm">
                    Life & Ministry Meeting
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5 p-4 bg-surface-container rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Users size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-on-surface font-bold">Attendant</span>
                  <span className="text-on-surface-variant text-sm">
                    Public Talk
                  </span>
                </div>
              </div>
            </CardContent>
            <Button className="w-full mt-8 py-6 bg-primary text-on-primary font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform text-md">
              View Full Schedule
            </Button>
          </Card>

          {/* Meeting Previews */}
          <div className="md:col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CLM Preview */}
            <Card className="bg-surface-container-low p-6 rounded-2xl border-none shadow-none">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-4">
                  <PenTool size={16} />
                  <span>Midweek Meeting</span>
                </div>
                <CardTitle className="text-lg font-bold">
                  Christian Life & Ministry
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-xs text-on-surface-variant">
                      Treasures
                    </span>
                    <span className="text-sm font-medium">
                      Jehovah Blesses Loyal Ones
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xs text-on-surface-variant">
                      Apply Yourself
                    </span>
                    <span className="text-sm font-medium">
                      Return Visit: Isaiah 65:17
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Weekend Preview */}
            <Card className="bg-surface-container-low p-6 rounded-2xl border-none shadow-none">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center gap-2 text-tertiary font-bold text-xs uppercase mb-4">
                  <Calendar size={16} />
                  <span>Weekend Meeting</span>
                </div>
                <CardTitle className="text-lg font-bold">Public Talk & WT</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-xs text-on-surface-variant">
                      Public Talk
                    </span>
                    <span className="text-sm font-medium">
                      Keep Close in Mind the Day of Jehovah
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-xs text-on-surface-variant">
                      Watchtower
                    </span>
                    <span className="text-sm font-medium">
                      &quot;Continue Walking in the Truth&quot;
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <BottomNavBar activeTab="Dashboard" />

      {/* Floating Action Button Contextual */}
      <Button className="fixed bottom-28 right-6 w-16 h-16 bg-tertiary-container text-on-tertiary-container rounded-2xl shadow-2xl flex items-center justify-center hover:scale-105 transition-transform active:scale-90 z-40 p-0 hover:bg-tertiary-container">
        <Plus size={32} />
      </Button>
    </div>
  );
}

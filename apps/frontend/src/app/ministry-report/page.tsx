import React from "react";
import { TopAppBar } from "@/components/TopAppBar";
import { BottomNavBar } from "@/components/BottomNavBar";
import {
  CalendarDays, User, Star, HelpCircle,
  TrendingUp, TrendingDown, CheckCircle, Verified, Sparkles, LayoutDashboard, Group, Calendar, ClipboardList, Settings
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MinistryReport() {
  return (
    <div className="bg-surface text-on-surface min-h-screen font-body flex overflow-hidden">
      {/* SideNavBar Component */}
      <aside className="hidden md:flex flex-col py-8 bg-[#ffffff] dark:bg-slate-900 h-screen w-64 rounded-r-2xl shadow-xl shadow-black/5 z-40 transition-all duration-300 ease-in-out border-r border-outline-variant/30">
        <div className="px-6 mb-10 flex flex-col items-start gap-1">
          <h2 className="font-headline font-black text-2xl leading-tight text-[#0061a4] dark:text-[#2196f3]">Elder</h2>
          <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Congregation Admin</p>
        </div>
        <nav className="flex-1 space-y-1 font-body">
          <a className="flex items-center px-4 py-3 text-stone-600 dark:text-stone-400 mx-2 hover:bg-[#fbf9f8] dark:hover:bg-slate-800 transition-transform hover:translate-x-1 rounded-lg text-sm font-medium font-headline" href="/dashboard">
            <LayoutDashboard size={20} className="mr-3" />
            <span>Dashboard</span>
          </a>
          <a className="flex items-center px-4 py-3 text-stone-600 dark:text-stone-400 mx-2 hover:bg-[#fbf9f8] dark:hover:bg-slate-800 transition-transform hover:translate-x-1 rounded-lg text-sm font-medium font-headline" href="/publisher-directory">
            <Group size={20} className="mr-3" />
            <span>Publisher Directory</span>
          </a>
          <div className="space-y-1">
            <a className="flex items-center px-4 py-3 text-stone-600 dark:text-stone-400 mx-2 hover:bg-[#fbf9f8] dark:hover:bg-slate-800 transition-transform hover:translate-x-1 rounded-lg text-sm font-medium font-headline" href="/meeting-scheduler">
              <Calendar size={20} className="mr-3" />
              <span>Meetings</span>
            </a>
            <a className="flex items-center px-4 py-2 text-stone-600 dark:text-stone-400 ml-8 mr-2 hover:bg-[#fbf9f8] dark:hover:bg-slate-800 transition-transform hover:translate-x-1 rounded-lg text-sm font-medium font-headline opacity-80 scale-95" href="#">
              <ClipboardList size={16} className="mr-3" />
              <span>Take Attendance</span>
            </a>
          </div>
          <a className="flex items-center px-4 py-3 bg-[#efeded] dark:bg-slate-800 text-[#0061a4] dark:text-[#2196f3] font-semibold rounded-lg mx-2 text-sm font-headline" href="/ministry-report">
            <ClipboardList size={20} className="mr-3" />
            <span>Records</span>
          </a>
        </nav>
      </aside>

      <TopAppBar activeTab="Reports" />

      <div className="flex-1 flex flex-col h-screen relative">
        {/* Main Content Area */}
        <main className="flex-1 mt-16 p-6 md:p-10 md:pr-12 overflow-y-auto w-full">
          <div className="max-w-6xl mx-auto pb-24">

            {/* Header & Month Selector */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 mt-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">Ministry Report</h1>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 whitespace-nowrap">REGULAR PIONEER</span>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Track your organised service activity. Reports are standardised for congregation records.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-outline">Reporting Period</label>
                <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl">
                  <CalendarDays className="text-primary h-5 w-5" />
                  <Select defaultValue="september">
                    <SelectTrigger className="bg-transparent border-none focus:ring-0 font-semibold text-on-surface cursor-pointer w-[180px] p-0 h-auto">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="september">September 2026</SelectItem>
                      <SelectItem value="august">August 2026</SelectItem>
                      <SelectItem value="july">July 2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Reporting Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Main Reporting Column */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/30 space-y-8">

                  {/* Section 1: Standard Publisher Reporting */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 border-b border-outline-variant/20 pb-4">
                      <User className="text-primary h-6 w-6" />
                      <h3 className="text-xl font-bold font-headline">Publisher Activity</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center gap-4 p-5 bg-surface-container-low rounded-xl border border-outline-variant/10 cursor-pointer hover:bg-surface-container/50 transition-colors">
                        <Checkbox id="participated" defaultChecked className="h-6 w-6 border-2 data-[state=checked]:bg-primary data-[state=checked]:text-white rounded" />
                        <label className="text-on-surface font-semibold text-lg cursor-pointer flex-1" htmlFor="participated">Participated in Ministry</label>
                      </div>
                      <div className="space-y-2 p-5 bg-surface-container-low rounded-xl border border-outline-variant/10 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                        <label className="text-sm font-bold text-on-surface-variant uppercase tracking-tight">Number of Bible Studies</label>
                        <Input type="number" defaultValue="3" placeholder="0" className="w-full bg-white dark:bg-slate-800 border-2 border-outline-variant focus-visible:ring-0 focus-visible:border-primary transition-all px-4 py-6 rounded-lg outline-none font-bold text-xl" />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Pioneer Standing */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 border-b border-outline-variant/20 pb-4">
                      <h3 className="text-xl font-bold font-headline">Pioneer Standing</h3>
                    </div>
                    <div className="p-6 bg-primary/5 rounded-2xl border-2 border-primary/20 space-y-6">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-primary flex items-center gap-2">
                          <Star className="h-5 w-5 fill-current" />
                          Regular Pioneer Progress
                        </h4>
                        <span className="text-[10px] sm:text-xs font-bold text-primary uppercase bg-primary/10 px-2 py-1 rounded whitespace-nowrap">Annual Goal: 600 Hours</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-on-surface-variant">Actual Hours for September</label>
                          <div className="relative focus-within:ring-2 focus-within:ring-primary/20 rounded-xl transition-all">
                            <Input type="number" defaultValue="48" className="w-full bg-white dark:bg-slate-800 border-2 border-primary transition-all px-4 py-8 rounded-xl outline-none font-bold text-3xl text-primary focus-visible:ring-0 focus-visible:border-primary pr-24" />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-outline font-medium text-lg pointer-events-none">/ 50 Goal</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm font-bold">
                            <span>Year-to-date Progress</span>
                            <span>48 / 600 hrs</span>
                          </div>
                          <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                            <div className="bg-primary h-3 rounded-full" style={{ width: '8%' }}></div>
                          </div>
                          <p className="text-[11px] text-on-surface-variant italic">The service year began on 1 September 2026.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Auxiliary Pioneer Option */}
                  <div className="pt-4">
                    <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/20 transition-all focus-within:border-primary/50">
                      <div className="flex items-center gap-4">
                        <Checkbox id="aux-volunteer" className="h-6 w-6 border-2 data-[state=checked]:bg-primary data-[state=checked]:text-white rounded" />
                        <label className="text-on-surface font-bold text-lg cursor-pointer flex-1" htmlFor="aux-volunteer">
                          Volunteer as Auxiliary Pioneer for September
                        </label>
                        <HelpCircle className="text-outline h-6 w-6" />
                      </div>
                      <div className="mt-6 mb-6 space-y-2 p-5 bg-surface-container-low rounded-xl border border-outline-variant/10 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                        <label className="text-sm font-bold text-on-surface-variant uppercase tracking-tight">Actual Hours</label>
                        <Input type="number" defaultValue="0" placeholder="0" className="w-full bg-white dark:bg-slate-800 border-2 border-outline-variant focus-visible:ring-0 focus-visible:border-primary transition-all px-4 py-6 rounded-lg outline-none font-bold text-xl" />
                      </div>
                      <div className="mt-6 pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center gap-6">
                        <p className="text-sm font-medium text-on-surface-variant">Select your hour goal:</p>
                        <div className="flex bg-surface-container-high p-1 rounded-xl w-full sm:w-auto">
                          <label className="relative flex-1 sm:flex-none cursor-pointer">
                            <input type="radio" name="aux_goal" value="15" className="sr-only peer" defaultChecked />
                            <div className="px-8 py-2 rounded-lg font-bold text-center transition-all peer-checked:bg-white peer-checked:shadow-sm peer-checked:text-primary text-on-surface-variant">15 Hours</div>
                          </label>
                          <label className="relative flex-1 sm:flex-none cursor-pointer">
                            <input type="radio" name="aux_goal" value="30" className="sr-only peer" />
                            <div className="px-8 py-2 rounded-lg font-bold text-center transition-all peer-checked:bg-white peer-checked:shadow-sm peer-checked:text-primary text-on-surface-variant">30 Hours</div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-outline-variant/20 flex justify-end">
                    <Button className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-6 rounded-xl font-bold hover:shadow-lg hover:translate-y-[-2px] active:scale-95 transition-all shadow-md text-base border-none">
                      Submit Ministry Report
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar Dashboard */}
              <div className="space-y-8">

                {/* Visual Performance Graph */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-lg font-headline">Pioneer Analytics</h3>
                    <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full">ANNUAL</span>
                  </div>

                  {/* Graph */}
                  <div className="h-48 flex items-end justify-between gap-2 mb-8">
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-green-600 rounded-t-lg transition-all" style={{ height: '80%' }}></div>
                      <span className="text-[10px] font-bold text-outline">MAY</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-green-600 rounded-t-lg transition-all" style={{ height: '95%' }}></div>
                      <span className="text-[10px] font-bold text-outline">JUN</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-red-600 rounded-t-lg transition-all" style={{ height: '60%' }}></div>
                      <span className="text-[10px] font-bold text-outline">JUL</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-yellow-500 rounded-t-lg transition-all" style={{ height: '88%' }}></div>
                      <span className="text-[10px] font-bold text-outline">AUG</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-yellow-500 rounded-t-lg transition-all relative group" style={{ height: '92%' }}>
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">48 / 50 hrs</div>
                      </div>
                      <span className="text-[10px] font-bold text-primary">SEP</span>
                    </div>
                  </div>

                  {/* Status Indicators Legend */}
                  <div className="space-y-4 pt-6 border-t border-surface-container">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-600"></div>
                        <span className="text-sm font-medium text-on-surface-variant">On Target / Above</span>
                      </div>
                      <span className="text-xs font-bold text-outline">2 Months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="text-sm font-medium text-on-surface-variant">Within 10%</span>
                      </div>
                      <span className="text-xs font-bold text-outline">2 Months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        <span className="text-sm font-medium text-on-surface-variant">Below Target (&gt;10%)</span>
                      </div>
                      <span className="text-xs font-bold text-outline">1 Month</span>
                    </div>
                  </div>
                </div>

                {/* Guidance Note */}
                <div className="bg-tertiary-container/10 p-6 rounded-2xl border-l-4 border-tertiary">
                  <div className="flex gap-4">
                    <Sparkles className="text-tertiary h-6 w-6 shrink-0" />
                    <div>
                      <h4 className="font-bold text-tertiary mb-1">Pioneer Spirit</h4>
                      <p className="text-sm text-on-tertiary-fixed leading-relaxed">
                        Your diligent efforts in the ministry are greatly valued. Regular pioneers aim for approximately 50 hours each month to meet the 600-hour annual goal.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Recent History */}
            <section className="mt-16">
              <h3 className="text-2xl font-bold mb-8 font-headline">Recent History</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-surface-container-low p-5 rounded-xl flex items-center justify-between border border-outline-variant/10">
                  <div>
                    <p className="text-xs font-bold text-outline">AUGUST 2026</p>
                    <p className="text-lg font-bold">44 Hours</p>
                  </div>
                  <TrendingUp className="text-yellow-500 h-6 w-6" />
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl flex items-center justify-between border border-outline-variant/10">
                  <div>
                    <p className="text-xs font-bold text-outline">JULY 2026</p>
                    <p className="text-lg font-bold">30 Hours</p>
                  </div>
                  <TrendingDown className="text-red-600 h-6 w-6" />
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl flex items-center justify-between border border-outline-variant/10">
                  <div>
                    <p className="text-xs font-bold text-outline">JUNE 2026</p>
                    <p className="text-lg font-bold">52 Hours</p>
                  </div>
                  <Verified className="text-green-600 h-6 w-6" />
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl flex items-center justify-between border border-outline-variant/10">
                  <div>
                    <p className="text-xs font-bold text-outline">MAY 2026</p>
                    <p className="text-lg font-bold">48 Hours</p>
                  </div>
                  <CheckCircle className="text-green-600 h-6 w-6" />
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>

      {/* BottomNavBar is included for mobile screens */}
      <BottomNavBar activeTab="Reports" />
    </div>
  );
}

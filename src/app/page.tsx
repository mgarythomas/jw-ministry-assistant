import React from "react";
import { TopAppBar } from "@/components/TopAppBar";
import { BottomNavBar } from "@/components/BottomNavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquarePlus,
  Send,
  Mic,
  ChevronDown,
  FileText,
  Download,
  Users,
  XCircle,
  History,
  Plus,
} from "lucide-react";

export default function MeetingSchedules() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen pb-32">
      <TopAppBar title="Meeting Schedules" />

      <main className="pt-24 px-6 max-w-7xl mx-auto space-y-12">
        {/* Hero Title & Quick Actions Section */}
        <section className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-headline font-black text-4xl md:text-5xl text-primary tracking-tighter">
              Weekend Meeting Setup
            </h2>
            <p className="text-on-surface-variant text-lg">
              Managing resources for October 26-27 Service Year.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="px-6 py-6 bg-surface-container-highest text-on-surface font-semibold rounded-xl hover:bg-surface-dim transition-all flex items-center gap-2 active:scale-95">
              <MessageSquarePlus size={20} />
              Add Announcement
            </Button>
            <Button className="px-8 py-6 bg-gradient-to-br from-[#0061a4] to-[#2196f3] text-white font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 active:scale-95 border-none">
              <Send size={20} />
              Publish Schedule
            </Button>
          </div>
        </section>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Public Talk Scheduler (Left Column / 8 Cols) */}
          <section className="lg:col-span-8 space-y-6">
            <Card className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border-none">
              <CardHeader className="p-0 flex flex-row items-center gap-3 mb-8 space-y-0">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mic size={24} className="fill-current" />
                </div>
                <CardTitle className="font-headline font-bold text-2xl">
                  Public Talk Scheduler
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Talk Selection */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-on-surface-variant ml-1">
                    Outline Number & Title
                  </label>
                  <Select>
                    <SelectTrigger className="w-full h-auto bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-xl py-4 px-4 transition-all font-medium text-on-surface outline-none">
                      <SelectValue placeholder="#11 Is This Life All There Is?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="11">#11 Is This Life All There Is?</SelectItem>
                      <SelectItem value="21">#21 How to Keep Close to Jehovah</SelectItem>
                      <SelectItem value="155">#155 What Is Real Success?</SelectItem>
                      <SelectItem value="191">#191 How Love and Faith Conquer the World</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="p-4 bg-tertiary-fixed/30 rounded-2xl border-l-4 border-tertiary">
                    <p className="text-sm font-medium text-on-tertiary-fixed-variant leading-relaxed">
                      <span className="font-bold">Summary:</span> This talk
                      examines the hope of the resurrection and the purpose of
                      human existence beyond current suffering.
                    </p>
                  </div>
                </div>

                {/* Speaker Details */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-on-surface-variant ml-1">
                      Speaker Assignment
                    </label>
                    <Input
                      className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-xl py-6 px-4 transition-all shadow-none"
                      placeholder="Enter Brother's Name"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center gap-2 p-1 bg-surface-container rounded-xl w-fit">
                    <Button variant="ghost" className="px-4 py-2 rounded-lg bg-surface-container-lowest text-primary font-bold shadow-sm transition-all hover:bg-surface-container-lowest hover:text-primary">
                      Local
                    </Button>
                    <Button variant="ghost" className="px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface transition-all hover:bg-transparent">
                      Visiting
                    </Button>
                  </div>
                  <div className="space-y-4 opacity-50 pointer-events-none">
                    <label className="block text-sm font-semibold text-on-surface-variant ml-1">
                      Home Congregation
                    </label>
                    <Input
                      className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-xl py-6 px-4 transition-all shadow-none"
                      placeholder="e.g. North Circuit Central"
                      type="text"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resource Preview */}
            <Card className="bg-surface-container-low p-6 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 border-none shadow-none">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-inner">
                  <FileText size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Talk Outline PDF</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold">
                    Available for Download
                  </p>
                </div>
              </div>
              <Button variant="link" className="text-primary font-bold flex items-center gap-2 hover:underline px-0">
                Download Digital Copy
                <Download size={16} />
              </Button>
            </Card>
          </section>

          {/* Role Assignments (Right Column / 4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <Card className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm h-full border-none">
              <CardHeader className="p-0 flex flex-row items-center gap-3 mb-8 space-y-0">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <Users size={24} className="fill-current" />
                </div>
                <CardTitle className="font-headline font-bold text-2xl">
                  Meeting Roles
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 space-y-4">
                {/* Role Item */}
                <div className="group p-4 bg-surface rounded-2xl hover:bg-surface-container transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase tracking-tighter">
                        Audio & Sound
                      </p>
                      <p className="text-on-surface-variant text-sm font-medium mt-1">
                        Not Assigned
                      </p>
                    </div>
                    <Button variant="secondary" className="px-4 py-2 bg-surface-container-highest rounded-lg text-primary text-sm font-bold active:scale-95 transition-all hover:bg-surface-container-highest/80">
                      Assign
                    </Button>
                  </div>
                </div>

                {/* Role Item */}
                <div className="group p-4 bg-surface rounded-2xl hover:bg-surface-container transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase tracking-tighter">
                        Media Console
                      </p>
                      <p className="text-on-surface font-semibold mt-1">
                        Marcus Aurelius
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-outline-variant hover:text-error transition-all hover:bg-transparent">
                      <XCircle size={24} />
                    </Button>
                  </div>
                </div>

                {/* Role Item */}
                <div className="group p-4 bg-surface rounded-2xl hover:bg-surface-container transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase tracking-tighter">
                        Attendant (Main)
                      </p>
                      <p className="text-on-surface-variant text-sm font-medium mt-1">
                        Not Assigned
                      </p>
                    </div>
                    <Button variant="secondary" className="px-4 py-2 bg-surface-container-highest rounded-lg text-primary text-sm font-bold active:scale-95 transition-all hover:bg-surface-container-highest/80">
                      Assign
                    </Button>
                  </div>
                </div>

                {/* Role Item */}
                <div className="group p-4 bg-surface rounded-2xl hover:bg-surface-container transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase tracking-tighter">
                        Platform Assistant
                      </p>
                      <p className="text-on-surface font-semibold mt-1">
                        Timothy Silas
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-outline-variant hover:text-error transition-all hover:bg-transparent">
                      <XCircle size={24} />
                    </Button>
                  </div>
                </div>

                {/* Role Item */}
                <div className="group p-4 bg-surface rounded-2xl hover:bg-surface-container transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase tracking-tighter">
                        Post-Meeting Cleaning
                      </p>
                      <p className="text-on-surface-variant text-sm font-medium mt-1">
                        Group 4
                      </p>
                    </div>
                    <Button variant="secondary" className="px-4 py-2 bg-surface-container-highest rounded-lg text-primary text-sm font-bold active:scale-95 transition-all hover:bg-surface-container-highest/80">
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>

              <div className="mt-8 pt-6 border-t border-surface-container-high text-center">
                <Button variant="ghost" className="text-on-surface-variant font-medium text-sm flex items-center justify-center gap-2 mx-auto hover:text-primary transition-colors hover:bg-transparent">
                  <History size={16} />
                  View Last Week&apos;s Roster
                </Button>
              </div>
            </Card>
          </aside>
        </div>

        {/* Floating Special Section (Signature Component) */}
        <section className="bg-gradient-to-r from-surface-container-highest to-surface-container p-1 rounded-[2.5rem]">
          <div className="bg-surface-container-lowest rounded-[2.4rem] p-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 space-y-4">
              <Badge className="px-4 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-black uppercase tracking-widest hover:bg-tertiary-container border-none shadow-none">
                Digital Bulletin Board
              </Badge>
              <h3 className="font-headline font-bold text-3xl text-on-surface mt-4">
                Upcoming Circuit Overseer Visit
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Prepare the hospitality schedule and auxiliary roles for the
                week of November 12th. Special meetings with pioneers will be
                held on Friday evening.
              </p>
            </div>
            <div className="w-full md:w-72 bg-surface-container p-6 rounded-3xl space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary">Priority</span>
                <span className="w-3 h-3 rounded-full bg-error animate-pulse"></span>
              </div>
              <p className="text-sm font-medium text-on-surface-variant">
                Deadline for talk titles from visiting speakers is Wednesday.
              </p>
              <Button className="w-full py-6 bg-on-surface text-surface rounded-xl font-bold hover:bg-primary transition-all">
                Open Special Folder
              </Button>
            </div>
          </div>
        </section>
      </main>

      <BottomNavBar activeTab="Schedule" />

      {/* Contextual FAB (Only on Management Screens) */}
      <Button className="fixed right-6 bottom-24 md:bottom-8 w-16 h-16 bg-primary rounded-2xl shadow-2xl text-white flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-90 group z-40 p-0">
        <Plus
          size={32}
          className="group-hover:rotate-90 transition-transform"
        />
      </Button>
    </div>
  );
}

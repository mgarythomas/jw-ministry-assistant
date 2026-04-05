import React from "react";
import { TopAppBar } from "@/components/TopAppBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Menu, Mic, Settings, Users, Calendar,
  MessageSquarePlus, Send, FileText, Download, XCircle, Info, History, Plus, ShieldCheck
} from "lucide-react";

export default function MeetingResourceManager() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      {/* Sidebar Navigation (Desktop/Tablet) */}
      <aside className="hidden md:flex fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 flex-col bg-surface-container-low border-r border-outline-variant/30 z-40">
        <div className="px-6 py-8">
          <h1 className="font-headline font-bold text-2xl tracking-tight text-[#0061a4]">Meeting Schedules</h1>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <a className="flex items-center gap-4 px-4 py-3 bg-primary/10 text-primary font-bold rounded-xl transition-all" href="#">
            <Calendar size={20} className="fill-current" />
            <span>Schedule</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all rounded-xl" href="#">
            <Mic size={20} />
            <span>Speakers</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all rounded-xl" href="#">
            <Users size={20} />
            <span>Roles</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all rounded-xl" href="#">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>
        <div className="p-4 mt-auto">
          <div className="bg-surface-container-highest/50 rounded-2xl p-4 flex items-center gap-3">
            <Avatar className="w-10 h-10 rounded-full border border-primary/10">
              <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRR-TayNvlWwRavXgzoEhvIlNiKyEwf9NL9VG4ltF2Co3EoLzeKWPdvfegT2AL9QzFk6Hs8szl4CmusuKbX_uhI6-cbc7L5uBv2h4bZbK3CoCJLydL-xcLws5LEQyGf4Z5TJoX3v2byY0rDXYvAw5JO3QEfAzeHD8PD1XcEKDuLT3EfOJQC49Xh8wK3YK0kX14jM46-0wh_4PGD9tfw1UbWUefUIwQjIp-atC-CNBT_7T9PHTMvTnpXsRJHt64EPxkbgmugeDY" alt="Admin Profile" className="object-cover" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Congregation Admin</p>
              <p className="text-[10px] uppercase tracking-widest font-black text-primary">Elder</p>
            </div>
          </div>
        </div>
      </aside>

      <TopAppBar activeTab="Assignments" />
      {/* Main Content Area */}
      <main className="md:ml-64 pt-20 md:pt-12 px-6 lg:px-12 max-w-[1600px] mx-auto space-y-8 pb-32 md:pb-12">
        {/* Hero Title & Quick Actions Section */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <h2 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl text-primary tracking-tighter">Weekend Meeting Setup</h2>
            <p className="text-on-surface-variant text-lg">Managing resources for October 26-27 Service Year.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" className="px-6 py-6 bg-surface-container-highest text-on-surface font-semibold rounded-xl hover:bg-surface-dim transition-all flex items-center gap-2 active:scale-95 border-none shadow-none">
              <MessageSquarePlus size={20} />
              <span className="hidden sm:inline">Add Announcement</span>
              <span className="sm:hidden">Announcement</span>
            </Button>
            <Button className="px-8 py-6 bg-gradient-to-br from-[#0061a4] to-[#2196f3] text-white font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 active:scale-95 border-none">
              <Send size={20} />
              Publish Schedule
            </Button>
          </div>
        </section>

        {/* Main Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Public Talk Scheduler (Left Column / 7-8 Cols) */}
          <section className="lg:col-span-7 xl:col-span-8 space-y-6">
            <Card className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-sm border border-outline-variant/10">
              <CardHeader className="p-0 flex flex-row items-center gap-3 mb-8 space-y-0">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mic size={24} className="fill-current" />
                </div>
                <CardTitle className="font-headline font-bold text-2xl">Public Talk Scheduler</CardTitle>
              </CardHeader>
              <CardContent className="p-0 grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Talk Selection */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-on-surface-variant ml-1">Outline Number & Title</label>
                  <div className="relative group">
                    <Select defaultValue="11">
                      <SelectTrigger className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-xl py-6 px-4 transition-all font-medium text-on-surface shadow-none">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="11">#11 Is This Life All There Is?</SelectItem>
                        <SelectItem value="21">#21 How to Keep Close to Jehovah</SelectItem>
                        <SelectItem value="155">#155 What Is Real Success?</SelectItem>
                        <SelectItem value="191">#191 How Love and Faith Conquer the World</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="p-6 bg-tertiary-fixed/20 rounded-2xl border-l-4 border-tertiary">
                    <p className="text-sm font-medium text-on-tertiary-fixed-variant leading-relaxed">
                      <span className="font-bold block mb-1">Outline Summary:</span>
                      This talk examines the hope of the resurrection and the purpose of human existence beyond current suffering. It highlights how the scriptures offer a realistic perspective on death and life.
                    </p>
                  </div>
                </div>

                {/* Speaker Details */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-on-surface-variant ml-1">Speaker Assignment</label>
                    <Input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-xl py-6 px-4 transition-all shadow-none" placeholder="Enter Brother's Name" type="text" />
                  </div>
                  <div className="flex items-center gap-2 p-1 bg-surface-container rounded-xl w-fit">
                    <Button variant="ghost" className="px-6 py-6 rounded-lg bg-surface-container-lowest text-primary font-bold shadow-sm transition-all hover:text-primary hover:bg-surface-container-lowest h-auto">Local</Button>
                    <Button variant="ghost" className="px-6 py-6 rounded-lg text-on-surface-variant hover:text-on-surface transition-all h-auto hover:bg-transparent">Visiting</Button>
                  </div>
                  <div className="space-y-4 opacity-50 pointer-events-none">
                    <label className="block text-sm font-semibold text-on-surface-variant ml-1">Home Congregation</label>
                    <Input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-xl py-6 px-4 transition-all shadow-none" placeholder="e.g. North Circuit Central" type="text" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resource Preview */}
            <Card className="bg-surface-container-low p-8 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 border border-outline-variant/10 shadow-none">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-inner">
                  <FileText size={32} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-lg">Talk Outline PDF</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Available for Digital Download</p>
                </div>
              </div>
              <Button variant="secondary" className="px-6 py-6 bg-surface-container-highest rounded-xl text-primary font-bold flex items-center gap-2 hover:bg-surface-dim transition-all shadow-none border-none">
                Download Digital Copy
                <Download size={20} />
              </Button>
            </Card>
          </section>

          {/* Role Assignments (Right Column / 4-5 Cols) */}
          <aside className="lg:col-span-5 xl:col-span-4 space-y-6">
            <Card className="bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-sm border border-outline-variant/10 h-full flex flex-col">
              <CardHeader className="p-0 flex flex-row items-center gap-3 mb-8 space-y-0">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <Users size={24} className="fill-current" />
                </div>
                <CardTitle className="font-headline font-bold text-2xl">Meeting Roles</CardTitle>
              </CardHeader>

              <CardContent className="p-0 space-y-8 flex-1">
                {/* Support Assignments Group */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-2">
                    <h4 className="text-[11px] font-black text-secondary uppercase tracking-[0.15em]">Support Assignments</h4>
                    <Badge variant="secondary" className="px-2 py-0.5 rounded text-[9px] font-bold bg-secondary-container text-on-secondary-container uppercase border-none shadow-none">Non-Elder Eligible</Badge>
                  </div>
                  <div className="space-y-3">
                    {/* Role Item */}
                    <div className="group p-5 bg-surface rounded-[1.5rem] hover:bg-surface-container transition-all border border-transparent hover:border-outline-variant/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Audio & Sound</p>
                          <p className="text-on-surface-variant text-sm font-medium mt-1">Not Assigned</p>
                        </div>
                        <Button variant="ghost" className="px-4 py-2 bg-primary/10 rounded-lg text-primary text-sm font-bold active:scale-95 transition-all hover:bg-primary/20 hover:text-primary h-auto">Assign</Button>
                      </div>
                    </div>
                    {/* Role Item */}
                    <div className="group p-5 bg-surface rounded-[1.5rem] hover:bg-surface-container transition-all border border-transparent hover:border-outline-variant/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Media Console</p>
                          <p className="text-on-surface font-semibold mt-1">Marcus Aurelius</p>
                        </div>
                        <Button variant="ghost" size="icon" className="p-2 text-outline-variant hover:text-error transition-all hover:bg-transparent h-auto w-auto">
                          <XCircle size={24} />
                        </Button>
                      </div>
                    </div>
                    {/* Role Item */}
                    <div className="group p-5 bg-surface rounded-[1.5rem] hover:bg-surface-container transition-all border border-transparent hover:border-outline-variant/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Platform Assistant</p>
                          <p className="text-on-surface font-semibold mt-1">Timothy Silas</p>
                        </div>
                        <Button variant="ghost" size="icon" className="p-2 text-outline-variant hover:text-error transition-all hover:bg-transparent h-auto w-auto">
                          <XCircle size={24} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attendant Roles Group */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-2">
                    <h4 className="text-[11px] font-black text-secondary uppercase tracking-[0.15em]">Attendant Roles</h4>
                    <div title="Specific eligibility criteria required">
                      <Info size={20} className="text-outline-variant" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    {/* Role Item */}
                    <div className="group p-5 bg-surface rounded-[1.5rem] hover:bg-surface-container transition-all border border-transparent hover:border-outline-variant/20">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Auditorium Attendant</p>
                          <p className="text-on-surface-variant text-sm font-medium">Not Assigned</p>
                          <div className="flex items-center gap-1.5 mt-2">
                            <Badge variant="outline" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-on-primary-fixed text-primary-fixed text-[9px] font-bold uppercase tracking-wider border-none">
                              <ShieldCheck size={12} className="font-bold" /> Elder & Security Trained
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" className="px-4 py-2 bg-primary/10 rounded-lg text-primary text-sm font-bold active:scale-95 transition-all hover:bg-primary/20 hover:text-primary h-auto">Assign</Button>
                      </div>
                    </div>
                    {/* Role Item */}
                    <div className="group p-5 bg-surface rounded-[1.5rem] hover:bg-surface-container transition-all border border-transparent hover:border-outline-variant/20">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Entrance Attendant</p>
                          <p className="text-on-surface-variant text-sm font-medium">Not Assigned</p>
                          <div className="flex items-center gap-1.5 mt-2">
                            <Badge variant="outline" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-secondary-fixed text-on-secondary-fixed-variant text-[9px] font-bold uppercase tracking-wider border-none">
                              <ShieldCheck size={12} className="font-bold" /> Security Trained
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" className="px-4 py-2 bg-primary/10 rounded-lg text-primary text-sm font-bold active:scale-95 transition-all hover:bg-primary/20 hover:text-primary h-auto">Assign</Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Roles */}
                <div className="pt-2">
                  <div className="group p-5 bg-surface-container-low rounded-[1.5rem] border border-outline-variant/20">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Post-Meeting Cleaning</p>
                        <p className="text-on-surface-variant text-sm font-medium mt-1">Group 4 (Basement Area)</p>
                      </div>
                      <Button variant="ghost" className="px-4 py-2 bg-surface-container-highest rounded-lg text-primary text-sm font-bold active:scale-95 transition-all hover:bg-surface-dim hover:text-primary h-auto border-none">Edit</Button>
                    </div>
                  </div>
                </div>
              </CardContent>

              <div className="mt-8 pt-6 border-t border-surface-container-high text-center">
                <Button variant="ghost" className="text-on-surface-variant font-medium text-sm flex items-center justify-center gap-2 mx-auto hover:text-primary transition-colors hover:bg-transparent h-auto p-0">
                  <History size={20} /> View Last Week&apos;s Roster
                </Button>
              </div>
            </Card>
          </aside>
        </div>

        {/* Floating Special Section (Signature Component) */}
        <section className="bg-gradient-to-r from-surface-container-highest to-surface-container p-1 rounded-[3rem] shadow-sm">
          <div className="bg-surface-container-lowest rounded-[2.9rem] p-10 lg:p-14 flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1 space-y-6">
              <Badge variant="outline" className="inline-block px-5 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-[11px] font-black uppercase tracking-[0.2em] border-none">Digital Bulletin Board</Badge>
              <h3 className="font-headline font-bold text-3xl lg:text-4xl text-on-surface">Upcoming Circuit Overseer Visit</h3>
              <p className="text-on-surface-variant text-lg lg:text-xl leading-relaxed max-w-3xl">Prepare the hospitality schedule and auxiliary roles for the week of November 12th. Special meetings with pioneers will be held on Friday evening. Please ensure the Sound and Attendant rosters are finalized by Monday.</p>
            </div>
            <div className="w-full lg:w-80 bg-surface-container p-8 rounded-[2rem] space-y-6 shrink-0">
              <div className="flex justify-between items-center">
                <span className="font-bold text-primary tracking-wide">PRIORITY ACTION</span>
                <span className="w-3 h-3 rounded-full bg-error animate-pulse"></span>
              </div>
              <p className="text-sm font-medium text-on-surface-variant leading-relaxed">Deadline for talk titles from visiting speakers is Wednesday. Follow up with Brothers from the East Cong.</p>
              <Button className="w-full py-6 bg-on-surface text-surface rounded-2xl font-bold hover:bg-primary transition-all shadow-md active:scale-[0.98]">Open Special Folder</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Navigation Bar (Visible only on mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#ffffff]/80 backdrop-blur-xl z-50 rounded-t-[2.5rem] shadow-[0_-8px_32px_rgba(27,28,28,0.08)]">
        <a className="flex flex-col items-center justify-center bg-gradient-to-br from-[#0061a4] to-[#2196f3] text-white rounded-2xl px-5 py-2 active:scale-90 duration-300 ease-out" href="#">
          <Calendar size={20} className="mb-1" />
          <span className="font-body text-[11px] font-medium tracking-wide">Schedule</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1b1c1c] opacity-60 px-5 py-2 hover:opacity-100 transition-opacity active:scale-90 duration-300 ease-out" href="#">
          <Mic size={20} className="mb-1" />
          <span className="font-body text-[11px] font-medium tracking-wide">Speakers</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1b1c1c] opacity-60 px-5 py-2 hover:opacity-100 transition-opacity active:scale-90 duration-300 ease-out" href="#">
          <Users size={20} className="mb-1" />
          <span className="font-body text-[11px] font-medium tracking-wide">Roles</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1b1c1c] opacity-60 px-5 py-2 hover:opacity-100 transition-opacity active:scale-90 duration-300 ease-out" href="#">
          <Settings size={20} className="mb-1" />
          <span className="font-body text-[11px] font-medium tracking-wide">Settings</span>
        </a>
      </nav>

      {/* Contextual FAB (Responsive positioning) */}
      <Button className="fixed right-6 bottom-28 md:bottom-12 w-16 h-16 md:w-20 md:h-20 bg-primary rounded-[1.5rem] md:rounded-[2rem] shadow-2xl text-white flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-90 group z-40 p-0">
        <Plus size={32} className="group-hover:rotate-90 transition-transform" />
      </Button>
    </div>
  );
}
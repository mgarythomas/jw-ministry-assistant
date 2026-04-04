import React from "react";
import { TopAppBar } from "@/components/TopAppBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Users, User, ClipboardList, Settings,
  Map as MapIcon, BarChart3, LogOut, Badge as BadgeIcon,
  Contact, Calendar, Waves, ShieldCheck, Sparkles,
  UserCircle, HeartHandshake, Verified, Info
} from "lucide-react";

export default function PublisherProfile() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body">
      <TopAppBar activeTab="Publishers" />

      {/* SideNavBar (Desktop Only) */}
      <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-[#fbf9f8] dark:bg-slate-950 flex-col p-4 space-y-2 pt-20 border-r-0">
        <div className="px-4 py-6 mb-4">
          <h2 className="text-lg font-black text-[#0061a4] dark:text-[#2196f3] font-headline">The Serene Archivist</h2>
          <p className="text-xs font-semibold text-on-surface-variant/70 uppercase tracking-widest mt-1">Elder Management</p>
        </div>
        <nav className="space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 text-[#1b1c1c]/70 dark:text-slate-300 hover:bg-[#efeded] dark:hover:bg-slate-800 rounded-lg transition-all ease-in-out hover:translate-x-1 duration-300" href="#">
            <Users size={20} />
            <span className="font-headline text-sm font-semibold">Congregation</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#1b1c1c]/70 dark:text-slate-300 hover:bg-[#efeded] dark:hover:bg-slate-800 rounded-lg transition-all ease-in-out hover:translate-x-1 duration-300" href="#">
            <User size={20} />
            <span className="font-headline text-sm font-semibold">Publishers</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#1b1c1c]/70 dark:text-slate-300 hover:bg-[#efeded] dark:hover:bg-slate-800 rounded-lg transition-all ease-in-out hover:translate-x-1 duration-300" href="#">
            <ClipboardList size={20} />
            <span className="font-headline text-sm font-semibold">Assignments</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#1b1c1c]/70 dark:text-slate-300 hover:bg-[#efeded] dark:hover:bg-slate-800 rounded-lg transition-all ease-in-out hover:translate-x-1 duration-300" href="#">
            <MapIcon size={20} />
            <span className="font-headline text-sm font-semibold">Field Service</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#1b1c1c]/70 dark:text-slate-300 hover:bg-[#efeded] dark:hover:bg-slate-800 rounded-lg transition-all ease-in-out hover:translate-x-1 duration-300" href="#">
            <BarChart3 size={20} />
            <span className="font-headline text-sm font-semibold">Reports</span>
          </a>
        </nav>
        <div className="mt-auto pt-8 border-t border-surface-container">
          <a className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#0061a4] to-[#2196f3] text-white rounded-lg shadow-md transition-all ease-in-out hover:translate-x-1 duration-300" href="#">
            <Settings size={20} />
            <span className="font-headline text-sm font-semibold">Settings</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-[#1b1c1c]/70 dark:text-slate-300 hover:bg-[#efeded] dark:hover:bg-slate-800 rounded-lg transition-all ease-in-out hover:translate-x-1 duration-300" href="#">
            <LogOut size={20} />
            <span className="font-headline text-sm font-semibold">Log out</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-24 pb-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <header className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Publisher Profile</h1>
                <p className="text-on-surface-variant max-w-xl leading-relaxed">
                  Manage your personal and spiritual records. <span className="italic opacity-80 text-sm">Note: Some fields are restricted based on congregation permissions.</span>
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" className="px-6 py-6 text-secondary font-semibold hover:bg-surface-container transition-colors rounded-md hover:text-secondary">Cancel</Button>
                <Button className="px-8 py-6 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-md shadow-lg active:scale-95 transition-all border-none">Save Changes</Button>
              </div>
            </div>
          </header>

          {/* Bento Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column: Personal Info */}
            <div className="md:col-span-7 space-y-6">
              {/* Name & Identity Card */}
              <Card className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-none">
                <CardHeader className="p-0 flex flex-row items-center gap-3 mb-6 space-y-0">
                  <BadgeIcon size={24} className="text-primary" />
                  <CardTitle className="text-xl font-bold font-headline">Identity</CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">First Name</label>
                    <Input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-t-md rounded-b-none p-6 shadow-none" type="text" defaultValue="Julian" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Last Name</label>
                    <Input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-t-md rounded-b-none p-6 shadow-none" type="text" defaultValue="Sterling" />
                  </div>
                  <div className="col-span-full">
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Preferred Name</label>
                    <Input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-t-md rounded-b-none p-6 shadow-none" type="text" defaultValue="Jules" />
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details Card */}
              <Card className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-none">
                <CardHeader className="p-0 flex flex-row items-center gap-3 mb-6 space-y-0">
                  <Contact size={24} className="text-primary" />
                  <CardTitle className="text-xl font-bold font-headline">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Home Address</label>
                    <Textarea className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-t-md rounded-b-none p-4 shadow-none resize-none" rows={2} defaultValue="124 Serenity Lane, Archivist District, AP 40210" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Contact Email</label>
                      <Input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-t-md rounded-b-none p-6 shadow-none" type="email" defaultValue="j.sterling@archive.org" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Contact Phone</label>
                      <Input className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-t-md rounded-b-none p-6 shadow-none" type="tel" defaultValue="+1 (555) 012-3456" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Milestones */}
              <Card className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-none">
                <CardHeader className="p-0 flex flex-row items-center gap-3 mb-6 space-y-0">
                  <Calendar size={24} className="text-primary" />
                  <CardTitle className="text-xl font-bold font-headline">Personal Milestones</CardTitle>
                </CardHeader>
                <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Date of Birth</label>
                    <div className="flex items-center bg-surface-container-low rounded-t-md overflow-hidden border-b-2 border-transparent focus-within:border-primary">
                      <DatePicker 
                        className="w-full bg-transparent border-none focus-visible:ring-0 p-6 shadow-none rounded-none text-base hover:bg-transparent" 
                        defaultDate={new Date("1988-05-14T12:00:00Z")} 
                        icon={<Calendar size={20} className="mr-3 text-on-surface-variant" />} 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Date of Baptism</label>
                    <div className="flex items-center bg-surface-container-low rounded-t-md overflow-hidden border-b-2 border-transparent focus-within:border-primary">
                      <DatePicker 
                        className="w-full bg-transparent border-none focus-visible:ring-0 p-6 shadow-none rounded-none text-base hover:bg-transparent" 
                        defaultDate={new Date("2005-09-22T12:00:00Z")} 
                        icon={<Waves size={20} className="mr-3 text-on-surface-variant" />} 
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 pt-2">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                      Security Meeting Attendance Date
                      <Badge variant="outline" className="px-1.5 py-0.5 rounded-full bg-surface-variant/50 text-[9px] font-black uppercase text-outline tracking-tighter border border-outline/10 flex items-center gap-1">
                        <ShieldCheck size={12} /> Read Only
                      </Badge>
                    </label>
                    <div className="flex items-center bg-surface-container-low/50 rounded-t-md overflow-hidden border-b border-outline/10">
                      <DatePicker 
                        disabled
                        className="w-full bg-transparent border-none focus-visible:ring-0 p-6 shadow-none rounded-none text-base hover:bg-transparent text-on-surface/60 disabled:opacity-100" 
                        defaultDate={new Date("2023-11-15T12:00:00Z")} 
                        icon={<ShieldCheck size={20} className="mr-3 text-outline/50" />} 
                      />
                    </div>
                    <p className="text-[10px] text-on-surface-variant/70 mt-2 italic">This record is updated by the congregation administration after each security briefing.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Spiritual Status & Auxiliary */}
            <div className="md:col-span-5 space-y-6">
              {/* Spiritual Status Card */}
              <Card className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-none border-l-4 border-l-primary">
                <CardHeader className="p-0 flex flex-row items-center gap-3 mb-2 space-y-0">
                  <Sparkles size={24} className="text-primary" />
                  <CardTitle className="text-xl font-bold font-headline">Spiritual Status</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-on-surface-variant mb-6">Current appointments and roles within the congregation.</p>

                  <div className="space-y-8">
                    {/* Role Selection */}
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">Current Role</label>
                        <Badge variant="outline" className="px-2 py-0.5 rounded-full bg-surface-variant text-[10px] font-black uppercase text-outline tracking-tighter border border-outline/20 flex items-center gap-1">
                          <ShieldCheck size={14} /> ADMIN ONLY
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        <Button variant="outline" disabled className="flex items-center justify-between p-6 rounded-lg bg-surface-container-low/50 border border-transparent grayscale opacity-70 cursor-not-allowed h-auto w-full">
                          <div className="flex items-center gap-3 text-on-surface-variant">
                            <UserCircle size={24} />
                            <span className="font-semibold text-on-surface-variant text-base">Publisher</span>
                          </div>
                          <div className="w-4 h-4 rounded-full border-2 border-outline/40"></div>
                        </Button>
                        <Button variant="outline" disabled className="flex items-center justify-between p-6 rounded-lg bg-surface-container-low/50 border border-transparent grayscale opacity-70 cursor-not-allowed h-auto w-full">
                          <div className="flex items-center gap-3 text-on-surface-variant">
                            <HeartHandshake size={24} />
                            <span className="font-semibold text-on-surface-variant text-base">Ministerial Servant</span>
                          </div>
                          <div className="w-4 h-4 rounded-full border-2 border-outline/40"></div>
                        </Button>
                        <Button variant="outline" className="flex items-center justify-between p-6 rounded-lg bg-primary/10 hover:bg-primary/10 border-2 border-primary/30 h-auto w-full cursor-default">
                          <div className="flex items-center gap-3 text-primary">
                            <Verified size={24} className="fill-primary/20" />
                            <span className="font-bold text-primary text-base">Elder</span>
                          </div>
                          <Verified size={24} className="text-primary fill-primary text-white" />
                        </Button>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-3 leading-tight">Elders oversee the congregation&apos;s spiritual needs and coordinate teaching and pastoral activities.</p>
                    </div>

                    {/* Pioneer Status */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-4">Pioneer Service</label>
                      <div className="flex flex-wrap gap-2">
                        <Button className="px-6 py-5 rounded-full text-sm font-bold bg-secondary-container text-on-secondary-container hover:bg-primary hover:text-white transition-all h-auto border-none">Regular Pioneer</Button>
                        <Button variant="secondary" className="px-6 py-5 rounded-full text-sm font-bold bg-surface-container text-on-surface hover:bg-secondary-container transition-all h-auto border-none">Special Pioneer</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Auxiliary Pioneer Section */}
              <Card className="bg-tertiary-container/10 p-8 rounded-xl shadow-sm border border-tertiary-container/20">
                <CardHeader className="p-0 flex flex-row items-center gap-3 mb-2 space-y-0">
                  <HeartHandshake size={24} className="text-tertiary" />
                  <CardTitle className="text-xl font-bold font-headline text-on-tertiary-container">Auxiliary Pioneer</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-on-tertiary-container/80 mb-6">Select months you wish to volunteer for increased activity.</p>

                  <div className="grid grid-cols-3 gap-2">
                    {["JAN", "FEB"].map(month => (
                      <Button key={month} variant="outline" className="p-6 text-xs font-bold rounded bg-white/50 border border-tertiary-container/30 hover:bg-tertiary-container hover:text-white transition-all text-on-surface h-auto">{month}</Button>
                    ))}
                    {["MAR", "APR"].map(month => (
                      <Button key={month} className="p-6 text-xs font-bold rounded bg-tertiary-container text-white shadow-sm hover:bg-tertiary-container/90 h-auto border-none">{month}</Button>
                    ))}
                    {["MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].map(month => (
                      <Button key={month} variant="outline" className="p-6 text-xs font-bold rounded bg-white/50 border border-tertiary-container/30 hover:bg-tertiary-container hover:text-white transition-all text-on-surface h-auto">{month}</Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Security / Permission Note */}
              <div className="bg-surface-container-low p-6 rounded-xl flex items-start gap-4">
                <Info size={24} className="text-outline shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-outline mb-1">Permission Note</p>
                  <p className="text-xs text-on-surface-variant leading-normal">
                    Changes to &apos;Date of Baptism&apos; and &apos;Current Role&apos; require verification by the Secretary or a member of the Service Committee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

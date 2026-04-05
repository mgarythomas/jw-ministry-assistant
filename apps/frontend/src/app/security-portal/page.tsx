import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Bell,
  UserCircle,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Settings,
  LogOut,
  Verified,
  Users,
  Key,
  AlertTriangle,
  ListFilter,
  Cloud,
  CheckCircle2,
  MoreVertical,
  LayoutGrid,
  Clock,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function SecurityPortal() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen font-body flex">
      {/* Sidebar (Desktop) */}
      <aside className="hidden lg:flex flex-col h-[calc(100vh-4rem)] w-72 fixed left-0 top-16 bg-surface-container-lowest font-body text-sm antialiased border-r-0 shadow-xl z-40">
        <div className="p-6 pb-8">
          <div className="text-lg font-black text-blue-700 mb-8 font-headline">
            Admin Portal
          </div>
          <div className="flex items-center gap-3 mb-10 bg-surface-container-low p-3 rounded-xl">
            <Avatar className="w-12 h-12 border-2 border-primary-container">
              <AvatarImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM1MvqvtvCb8sKfILWcv7jFzYAhnWfwpZOpH5VRfGJG5nxxarS0BLwt05OUUR2YOFacHAia86P9r5llnHRCFOvhU9qY4DBBeH9DB8LyPHIJBUUVEnfIBnFPnynUpna4mbOXCkH2xXfx1RYvi07olobBG3JlXONgQ1xEoh7Z2u9e0dMUGpzqpylYJfgNa9HyYzGWME6TM2Tz1kmEaMcBS3LWTHhvXLQ8VzdQQpmGLhoKEMEp8jsW1UpV2-VbqNLEB9xb3ydwxPV"
                alt="Admin User"
                className="object-cover"
              />
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-bold text-on-surface">Admin User</div>
              <div className="text-xs text-on-surface-variant">
                Congregation Security
              </div>
            </div>
          </div>
          <nav className="space-y-1">
            <a
              className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-r-full font-medium transition-all duration-300 ease-in-out"
              href="#"
            >
              <Shield size={20} />
              <span>Security Overview</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container dark:hover:bg-slate-800 transition-all duration-300 ease-in-out"
              href="#"
            >
              <ShieldAlert size={20} />
              <span>User Audits</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container dark:hover:bg-slate-800 transition-all duration-300 ease-in-out"
              href="#"
            >
              <ShieldCheck size={20} />
              <span>MFA Management</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container dark:hover:bg-slate-800 transition-all duration-300 ease-in-out"
              href="#"
            >
              <Lock size={20} />
              <span>Permission Roles</span>
            </a>
          </nav>
        </div>
        <div className="mt-auto p-6 space-y-4">
          <Button className="w-full py-6 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-semibold shadow-sm hover:opacity-90 transition-all text-center border-none">
            Generate Audit Report
          </Button>
          <div className="pt-4 border-t border-outline-variant/10 space-y-1">
            <a
              className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              <Settings size={20} />
              <span>Settings</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-on-surface transition-colors"
              href="#"
            >
              <LogOut size={20} />
              <span>Log Out</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-72">
        {/* TopAppBar */}
        <header className="bg-surface/70 backdrop-blur-md font-headline tracking-tight shadow-sm dark:shadow-none sticky top-0 z-50 flex justify-between items-center w-full px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tighter text-on-surface">
              The Archivist
            </span>
            <span className="hidden md:block w-[1px] h-4 bg-outline-variant/30 mx-2"></span>
            <nav className="hidden md:flex gap-6 items-center">
              <a
                className="text-blue-700 font-semibold border-b-2 border-blue-600 px-1 py-0.5 transition-colors"
                href="#"
              >
                Security Overview
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-1 py-0.5"
                href="#"
              >
                User Audits
              </a>
              <a
                className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-1 py-0.5"
                href="#"
              >
                MFA Management
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex bg-surface-container-low px-3 py-1.5 rounded-full items-center gap-2 group">
              <Search className="text-outline w-4 h-4" />
              <input
                className="bg-transparent border-none outline-none focus:ring-0 text-sm p-0 w-48 placeholder:text-outline/70"
                placeholder="Search audit logs..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors">
                <Bell size={20} />
              </button>
              <button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors">
                <UserCircle size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pb-24 lg:pb-8 pt-6 px-4 md:px-8 max-w-7xl mx-auto w-full">
          {/* Editorial Header Section */}
          <header className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-on-surface mb-2">
                  Access Control
                </h1>
                <p className="text-on-surface-variant max-w-lg leading-relaxed">
                  Centralized oversight of congregational security protocols, user
                  identity verification, and permission hierarchies.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Verified size={18} />
                  98% MFA Verified
                </span>
              </div>
            </div>
          </header>

          {/* Stats Grid (Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-between min-h-[180px]">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-primary-fixed rounded-2xl text-primary">
                  <Users size={24} />
                </div>
                <span className="text-xs font-bold text-primary px-3 py-1 bg-primary-fixed rounded-full">
                  +4 this week
                </span>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-black font-headline">1,248</div>
                <div className="text-on-surface-variant text-sm font-medium">
                  Active Community Users
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between">
              <Key className="text-tertiary" size={24} />
              <div className="mt-4">
                <div className="text-2xl font-bold font-headline">42</div>
                <div className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold">
                  OpenID Connect
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between">
              <AlertTriangle className="text-error" size={24} />
              <div className="mt-4">
                <div className="text-2xl font-bold font-headline">12</div>
                <div className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold">
                  MFA Pending
                </div>
              </div>
            </div>
          </div>

          {/* Section Navigation / Tabs */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
            <Button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap shadow-md hover:bg-primary/90 rounded-full">
              All Users
            </Button>
            <Button
              variant="secondary"
              className="bg-surface-container-high text-on-surface-variant px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap hover:bg-surface-container-highest transition-colors shadow-none border-none rounded-full"
            >
              Administrators
            </Button>
            <Button
              variant="secondary"
              className="bg-surface-container-high text-on-surface-variant px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap hover:bg-surface-container-highest transition-colors shadow-none border-none rounded-full"
            >
              Elders & Staff
            </Button>
            <Button
              variant="secondary"
              className="bg-surface-container-high text-on-surface-variant px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap hover:bg-surface-container-highest transition-colors shadow-none border-none rounded-full"
            >
              Guest Access
            </Button>
          </div>

          {/* User Security Matrix (Custom Table) */}
          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(27,28,28,0.04)]">
            <div className="px-8 py-6 flex justify-between items-center bg-surface-container-low/50">
              <h3 className="font-headline font-bold text-xl">
                User Security Matrix
              </h3>
              <button className="text-primary flex items-center gap-1 text-sm font-semibold">
                <ListFilter size={16} />
                Advanced Filters
              </button>
            </div>
            <div className="overflow-x-auto">
              <Table className="w-full text-left border-collapse min-w-[800px]">
                <TableHeader>
                  <TableRow className="bg-surface-container-low/30 border-none hover:bg-surface-container-low/30">
                    <TableHead className="px-8 py-5 text-xs font-black uppercase tracking-wider text-on-surface-variant/70">
                      Member Identity
                    </TableHead>
                    <TableHead className="px-8 py-5 text-xs font-black uppercase tracking-wider text-on-surface-variant/70">
                      Auth Method
                    </TableHead>
                    <TableHead className="px-8 py-5 text-xs font-black uppercase tracking-wider text-on-surface-variant/70">
                      MFA Status
                    </TableHead>
                    <TableHead className="px-8 py-5 text-xs font-black uppercase tracking-wider text-on-surface-variant/70">
                      Permissions
                    </TableHead>
                    <TableHead className="px-8 py-5 text-xs font-black uppercase tracking-wider text-on-surface-variant/70">
                      Last Audit
                    </TableHead>
                    <TableHead className="px-8 py-5 w-16"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-surface-container">
                  {/* User Row 1 */}
                  <TableRow className="hover:bg-surface-container-low/50 transition-colors group border-none">
                    <TableCell className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10 rounded-xl">
                          <AvatarImage
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtNBub7wBAXaq1aHXqf3Qn14mUeNtHgJTsPVk6pOo2sAE_ypT2LTmivoNMEF0BSexORR6S1oxFm7KRMG63opRldtKens3Ts-JGMLKVvVEP3OJOmjXsF8i8jSRpR4MKFMf8ZxWZMdK-IYn3JyS79hLtY6vb3BylYCwFQMaxbZeMcmOPhkZ68cFMuYWG-o1DX0QiaVSzkr_bu_ji8FTfNVH8DpsEEyJ58sy1bNCM1NjrccQYelHCphyF5fHYPEd6Max1jpj3D8q-"
                            alt="Benjamin Thorne"
                            className="object-cover"
                          />
                          <AvatarFallback className="rounded-xl">BT</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-on-surface">
                            Benjamin Thorne
                          </div>
                          <div className="text-xs text-on-surface-variant">
                            b.thorne@congregation.org
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                        <Cloud className="text-primary w-5 h-5" />
                        OpenID Connect
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-xs font-bold flex items-center w-fit gap-1">
                        <CheckCircle2 size={14} className="fill-current text-white" />
                        Enabled
                      </span>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="text-xs font-bold text-tertiary px-3 py-1 bg-tertiary-fixed rounded-md w-fit">
                        Senior Admin
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="text-sm text-on-surface">14 mins ago</div>
                      <div className="text-[10px] text-on-surface-variant font-medium">
                        IP: 192.168.1.12
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6 text-right">
                      <button className="text-outline group-hover:text-primary transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </TableCell>
                  </TableRow>

                  {/* User Row 2 */}
                  <TableRow className="hover:bg-surface-container-low/50 transition-colors group border-none">
                    <TableCell className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10 rounded-xl">
                          <AvatarImage
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_aFnCob-EsoPIOPh0rZqP4e9AlAidY1Z9PQW7CUBFoYLecdkW61y20F69YES1OmPYga7-twTSYV3VdUv4frMaqVixSNKrGIubSflErzqf2he6DeJXIfdHjTKcQ71lQgEty5eIkNr8WoiGhrnBnfuZktwcW88UhUrJtT_2bGzl-7LFL0iJlxtM2-I2GVyCP9Kb9dLUYXJADuabe-bco-LyJ-qnGCt65JT_e6Al1tPYDViun-hBTU43VnSpNKndT-9xKvrIxEtK"
                            alt="Elena Rodriguez"
                            className="object-cover"
                          />
                          <AvatarFallback className="rounded-xl">ER</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-on-surface">
                            Elena Rodriguez
                          </div>
                          <div className="text-xs text-on-surface-variant">
                            e.rod@archive.io
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                        <LayoutGrid className="text-outline w-5 h-5" />
                        Application
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <span className="bg-error-container text-on-error-container px-3 py-1 rounded-lg text-xs font-bold flex items-center w-fit gap-1">
                        <AlertTriangle size={14} />
                        Disabled
                      </span>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="text-xs font-bold text-on-secondary-fixed-variant px-3 py-1 bg-secondary-fixed rounded-md w-fit">
                        Contributor
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="text-sm text-on-surface">Oct 24, 2023</div>
                      <div className="text-[10px] text-on-surface-variant font-medium">
                        IP: 104.22.4.156
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6 text-right">
                      <button className="text-outline group-hover:text-primary transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </TableCell>
                  </TableRow>

                  {/* User Row 3 */}
                  <TableRow className="hover:bg-surface-container-low/50 transition-colors group border-none">
                    <TableCell className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary font-bold">
                          SM
                        </div>
                        <div>
                          <div className="font-bold text-on-surface">
                            Samuel Miller
                          </div>
                          <div className="text-xs text-on-surface-variant">
                            s.miller@faith.net
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                        <Cloud className="text-primary w-5 h-5" />
                        OpenID Connect
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-xs font-bold flex items-center w-fit gap-1">
                        <Clock size={14} />
                        Pending
                      </span>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="text-xs font-bold text-on-secondary-fixed-variant px-3 py-1 bg-secondary-fixed rounded-md w-fit">
                        Moderator
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6">
                      <div className="text-sm text-on-surface">Yesterday</div>
                      <div className="text-[10px] text-on-surface-variant font-medium">
                        IP: 172.58.20.91
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-6 text-right">
                      <button className="text-outline group-hover:text-primary transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="px-8 py-6 bg-surface-container-low/20 flex justify-between items-center text-sm text-on-surface-variant">
              <span>Showing 1-12 of 1,248 members</span>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface hover:bg-surface-container-high transition-colors">
                  <ChevronLeft size={16} />
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-white">
                  1
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface hover:bg-surface-container-high transition-colors">
                  2
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface hover:bg-surface-container-high transition-colors">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* BottomNavBar (Mobile) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-xl rounded-t-3xl shadow-[0_-4px_16px_rgba(0,0,0,0.04)] font-medium font-body">
        <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 scale-95 active:scale-90 transition-transform">
          <LayoutGrid size={24} />
          <span className="text-[10px]">Dash</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 scale-95 active:scale-90 transition-transform">
          <Users size={24} />
          <span className="text-[10px]">Users</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-blue-100 text-blue-800 rounded-2xl px-5 py-1.5 scale-95 active:scale-90 transition-transform">
          <Shield size={24} className="fill-current" />
          <span className="text-[10px]">Security</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 scale-95 active:scale-90 transition-transform">
          <ShieldCheck size={24} />
          <span className="text-[10px]">Safety</span>
        </button>
      </nav>

      {/* Contextual FAB (Only for specific screens) */}
      <Button className="fixed right-6 bottom-24 lg:bottom-10 z-40 bg-tertiary-container text-on-tertiary-container p-4 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 font-bold h-auto border-none">
        <Plus size={24} />
        <span className="hidden md:inline">Invite New Admin</span>
      </Button>
    </div>
  );
}

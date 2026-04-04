import React from "react";
import { TopAppBar } from "@/components/TopAppBar";
import { BottomNavBar } from "@/components/BottomNavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Search, UserPlus,
  ChevronLeft, ChevronRight, TrendingUp, Edit2, BookOpen, Users, ClipboardList, Map as MapIcon, Settings
} from "lucide-react";

export default function PublisherDirectory() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex overflow-hidden font-body">
      {/* SideNavBar Component */}
      <aside className="hidden md:flex flex-col py-8 bg-[#ffffff] dark:bg-slate-900 h-screen w-64 rounded-r-2xl shadow-xl shadow-black/5 z-40 transition-all duration-300 ease-in-out border-r border-outline-variant/30">
        <div className="px-6 mb-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
            <BookOpen size={20} className="fill-current" />
          </div>
          <div>
            <h2 className="font-headline font-bold text-xl leading-tight">Elder Management</h2>
            <p className="text-xs text-on-surface-variant font-body">Congregation Admin</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 font-body">
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 mx-2 hover:bg-[#fbf9f8] dark:hover:bg-slate-800 transition-colors rounded-lg text-sm" href="#">
            <BookOpen size={20} className="mr-3" />
            <span>Meeting Schedule</span>
          </a>
          <a className="flex items-center px-4 py-3 bg-[#efeded] dark:bg-slate-800 text-[#0061a4] dark:text-[#2196f3] font-semibold rounded-lg mx-2 text-sm" href="#">
            <Users size={20} className="mr-3" />
            <span>Publishers</span>
          </a>
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 mx-2 hover:bg-[#fbf9f8] dark:hover:bg-slate-800 transition-colors rounded-lg text-sm" href="#">
            <ClipboardList size={20} className="mr-3" />
            <span>Assignments</span>
          </a>
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 mx-2 hover:bg-[#fbf9f8] dark:hover:bg-slate-800 transition-colors rounded-lg text-sm" href="#">
            <MapIcon size={20} className="mr-3" />
            <span>Field Service</span>
          </a>
          <a className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 mx-2 hover:bg-[#fbf9f8] dark:hover:bg-slate-800 transition-colors rounded-lg text-sm" href="#">
            <Settings size={20} className="mr-3" />
            <span>Settings</span>
          </a>
        </nav>
        <div className="px-4 mt-auto">
          <Button className="w-full py-6 px-4 bg-tertiary-container text-on-tertiary-container rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all border-none shadow-none">
            <ClipboardList size={20} />
            <span>Take Attendance</span>
          </Button>
          <div className="mt-6 pt-6 border-t border-surface-container flex items-center gap-3">
            <Avatar className="w-10 h-10 rounded-full border border-primary/10">
              <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGyMErK6HEo_jMbH7tB7jhJ1gtntvBsEcK8lhDFf5xyFum9PhtcI1Tdgzb0-_qRlwvYzzhDkHObFtAzG3dXBYglDSWUihssgCCH8folYYoGwUf25ni1L_jseaAvYvIyfDOaW_I6fyJF8qoPBE7Ryzhynq6tqURSmeYZFznwuZCiOgTZJVcPIgYHox6L9w7XvGWVF1t9SkvaL8Bgs8pNGTMcLyxczkF46E5kmnKe10hHoQAWys5F7UG4mQO8327aT6_rqpcKQYn" alt="Admin" className="object-cover" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className="overflow-hidden font-body">
              <p className="text-sm font-bold truncate">Samuel Adams</p>
              <p className="text-xs text-on-surface-variant truncate">Lead Elder</p>
            </div>
          </div>
        </div>
      </aside>

      <TopAppBar activeTab="Publishers" />

      <div className="flex-1 flex flex-col h-screen relative">
        {/* Main Content Area */}
        <main className="flex-1 mt-20 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* Editorial Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">Publisher Directory</h1>
                <p className="text-on-surface-variant text-lg max-w-xl font-body">A curated archive of congregation members and their current spiritual standing.</p>
              </div>
              <Button className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-6 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[0.98] transition-transform shadow-lg shadow-primary/10 border-none">
                <UserPlus size={20} />
                <span>Add New Publisher</span>
              </Button>
            </div>

            {/* Filters Bento */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-body">
              {/* Search Card */}
              <Card className="md:col-span-2 bg-surface-container-lowest p-6 rounded-2xl shadow-xl shadow-black/5 flex flex-col justify-center border-none">
                <CardContent className="p-0">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Quick Search</label>
                  <div className="relative group">
                    <input className="w-full bg-surface-container border-b-2 border-transparent focus:border-primary px-12 py-4 rounded-xl outline-none transition-all text-on-surface font-medium" placeholder="Start typing a name or number..." type="text" />
                    <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary" />
                  </div>
                </CardContent>
              </Card>

              {/* Group Filter */}
              <Card className="bg-surface-container-lowest p-6 rounded-2xl shadow-xl shadow-black/5 flex flex-col border-none">
                <CardContent className="p-0 h-full flex flex-col">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Service Group</label>
                  <Select>
                    <SelectTrigger className="w-full bg-surface-container border-none px-4 py-6 rounded-xl outline-none text-on-surface font-medium focus:ring-0">
                      <SelectValue placeholder="All Groups" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Groups</SelectItem>
                      <SelectItem value="north">North Central</SelectItem>
                      <SelectItem value="south">South Riverside</SelectItem>
                      <SelectItem value="east">East Valley</SelectItem>
                      <SelectItem value="mountain">Mountain View</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Status Filter */}
              <Card className="bg-surface-container-lowest p-6 rounded-2xl shadow-xl shadow-black/5 flex flex-col border-none">
                <CardContent className="p-0">
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Status</label>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full cursor-pointer hover:bg-primary border-none">Active</Badge>
                    <Badge variant="secondary" className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full cursor-pointer hover:bg-outline-variant transition-colors border-none shadow-none">Irregular</Badge>
                    <Badge variant="secondary" className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full cursor-pointer hover:bg-outline-variant transition-colors border-none shadow-none">Inactive</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Layers (Table) */}
            <div className="bg-surface-container-lowest rounded-3xl shadow-xl shadow-black/5 overflow-hidden font-body">
              <div className="overflow-x-auto">
                <Table className="w-full text-left">
                  <TableHeader>
                    <TableRow className="bg-surface-container-low hover:bg-surface-container-low border-none">
                      <TableHead className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant h-auto">Name</TableHead>
                      <TableHead className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant h-auto">Group</TableHead>
                      <TableHead className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant h-auto">Phone Number</TableHead>
                      <TableHead className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant text-center h-auto">Status</TableHead>
                      <TableHead className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right h-auto">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="divide-y divide-surface-container border-none">
                    {/* Row 1 */}
                    <TableRow className="hover:bg-surface-container-low transition-colors group border-none">
                      <TableCell className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant">
                            <AvatarFallback className="bg-tertiary-fixed font-bold">AB</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-on-surface">Arthur Bennett</p>
                            <p className="text-xs text-on-surface-variant">Regular Pioneer</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-8 py-6 font-medium text-on-surface-variant">North Central</TableCell>
                      <TableCell className="px-8 py-6 font-medium text-on-surface-variant">(555) 123-4567</TableCell>
                      <TableCell className="px-8 py-6 text-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                        </span>
                      </TableCell>
                      <TableCell className="px-8 py-6 text-right">
                        <Button variant="ghost" size="icon" className="p-2 text-primary hover:bg-primary-container/20 rounded-lg transition-all opacity-0 group-hover:opacity-100 hover:text-primary">
                          <Edit2 size={20} />
                        </Button>
                      </TableCell>
                    </TableRow>

                    {/* Row 2 */}
                    <TableRow className="hover:bg-surface-container-low transition-colors group border-none">
                      <TableCell className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant">
                            <AvatarFallback className="bg-secondary-fixed font-bold">CD</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-on-surface">Catherine Davis</p>
                            <p className="text-xs text-on-surface-variant">Publisher</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-8 py-6 font-medium text-on-surface-variant">East Valley</TableCell>
                      <TableCell className="px-8 py-6 font-medium text-on-surface-variant">(555) 987-6543</TableCell>
                      <TableCell className="px-8 py-6 text-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Irregular
                        </span>
                      </TableCell>
                      <TableCell className="px-8 py-6 text-right">
                        <Button variant="ghost" size="icon" className="p-2 text-primary hover:bg-primary-container/20 rounded-lg transition-all opacity-0 group-hover:opacity-100 hover:text-primary">
                          <Edit2 size={20} />
                        </Button>
                      </TableCell>
                    </TableRow>

                    {/* Row 3 */}
                    <TableRow className="hover:bg-surface-container-low transition-colors group border-none">
                      <TableCell className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-10 h-10 rounded-full bg-surface-container text-on-surface-variant">
                            <AvatarFallback className="bg-surface-container font-bold">EH</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-on-surface">Edward Harrison</p>
                            <p className="text-xs text-on-surface-variant">Unbaptized</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-8 py-6 font-medium text-on-surface-variant">Mountain View</TableCell>
                      <TableCell className="px-8 py-6 font-medium text-on-surface-variant">(555) 456-7890</TableCell>
                      <TableCell className="px-8 py-6 text-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Inactive
                        </span>
                      </TableCell>
                      <TableCell className="px-8 py-6 text-right">
                        <Button variant="ghost" size="icon" className="p-2 text-primary hover:bg-primary-container/20 rounded-lg transition-all opacity-0 group-hover:opacity-100 hover:text-primary">
                          <Edit2 size={20} />
                        </Button>
                      </TableCell>
                    </TableRow>

                    {/* Row 4 */}
                    <TableRow className="hover:bg-surface-container-low transition-colors group border-none">
                      <TableCell className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant">
                            <AvatarFallback className="bg-tertiary-fixed font-bold">LM</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-on-surface">Lydia Morales</p>
                            <p className="text-xs text-on-surface-variant">Regular Pioneer</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-8 py-6 font-medium text-on-surface-variant">South Riverside</TableCell>
                      <TableCell className="px-8 py-6 font-medium text-on-surface-variant">(555) 222-3344</TableCell>
                      <TableCell className="px-8 py-6 text-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                        </span>
                      </TableCell>
                      <TableCell className="px-8 py-6 text-right">
                        <Button variant="ghost" size="icon" className="p-2 text-primary hover:bg-primary-container/20 rounded-lg transition-all opacity-0 group-hover:opacity-100 hover:text-primary">
                          <Edit2 size={20} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* Table Pagination/Footer */}
              <div className="px-8 py-6 bg-surface-container flex items-center justify-between border-t-0">
                <p className="text-sm text-on-surface-variant">Showing <span className="font-bold text-on-surface">1-4</span> of 152 publishers</p>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest hover:bg-white text-on-surface-variant transition-colors hover:text-on-surface-variant border-none shadow-none">
                    <ChevronLeft size={24} />
                  </Button>
                  <Button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold border-none">1</Button>
                  <Button variant="ghost" className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest hover:bg-white text-on-surface-variant transition-colors hover:text-on-surface-variant border-none shadow-none">2</Button>
                  <Button variant="ghost" className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest hover:bg-white text-on-surface-variant transition-colors hover:text-on-surface-variant border-none shadow-none">3</Button>
                  <Button variant="ghost" size="icon" className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest hover:bg-white text-on-surface-variant transition-colors hover:text-on-surface-variant border-none shadow-none">
                    <ChevronRight size={24} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Footer Summary Asymmetric Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 font-body">
              <div className="md:col-span-1 bg-[#cfe6f2] p-8 rounded-3xl space-y-4">
                <TrendingUp size={36} className="text-[#0061a4]" />
                <h3 className="text-2xl font-bold text-[#071e27] font-headline">Growth Insight</h3>
                <p className="text-[#354a53] text-sm">Publisher activity has increased by 12% in the North Central group over the last service month.</p>
              </div>
              <div className="md:col-span-2 bg-[#1b1c1c] p-8 rounded-3xl flex flex-col justify-between text-white overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2 font-headline">Annual Reporting</h3>
                  <p className="text-slate-400 text-lg">Year-to-date congregation overview and spiritual progress charts.</p>
                </div>
                <div className="relative z-10 mt-10">
                  <Button className="px-6 py-6 border border-slate-700 bg-transparent rounded-xl hover:bg-slate-800 transition-colors font-bold text-white">Download Analysis</Button>
                </div>
                {/* Abstract Background Decoration */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

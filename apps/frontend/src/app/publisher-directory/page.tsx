"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  Search, UserPlus,
  ChevronLeft, ChevronRight, TrendingUp, Edit2, BookOpen, Users, ClipboardList, Map as MapIcon, Settings, Send, Info, X, User, ArrowRight, UserX, MoreHorizontal, ArrowLeftRight, Bell, Calendar, LogOut, Menu
} from "lucide-react";

export default function PublisherDirectory() {
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [showTransferModal, setShowTransferModal] = React.useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = React.useState(false);
  const [selectedPublisher, setSelectedPublisher] = React.useState<{name: string, type: string, id: string, image?: string} | null>(null);

  const handleTransferClick = (publisher: {name: string, type: string, id: string, image?: string}) => {
    setSelectedPublisher(publisher);
    setShowTransferModal(true);
  };

  const handleDeactivateClick = (publisher: {name: string, type: string, id: string, image?: string}) => {
    setSelectedPublisher(publisher);
    setShowDeactivateModal(true);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex overflow-hidden font-body">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#fbf9f8]/70 dark:bg-slate-950/70 backdrop-blur-md shadow-sm dark:shadow-none flex justify-between items-center px-8 h-16 font-headline tracking-tight">
        <div className="flex items-center gap-6">
          <span className="text-2xl font-bold tracking-tighter text-[#1b1c1c] dark:text-[#fbf9f8]">Elder</span>
          <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-1.5 transition-colors">
            <Search size={14} className="text-slate-500 mr-2" />
            <input className="bg-transparent border-none focus:ring-0 text-sm w-48 text-slate-900 dark:text-slate-100 outline-none placeholder:text-slate-500" placeholder="Search records..." type="text" />
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <a className="text-[#0061a4] dark:text-[#2196f3] font-semibold text-sm cursor-pointer active:scale-95 duration-200" href="#">Publisher</a>
          <a className="text-[#1b1c1c] dark:text-[#efeded] hover:text-[#0061a4] transition-colors text-sm cursor-pointer active:scale-95 duration-200" href="#">Meeting</a>
          <a className="text-[#1b1c1c] dark:text-[#efeded] hover:text-[#0061a4] transition-colors text-sm cursor-pointer active:scale-95 duration-200" href="#">Territory</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-[#efeded]/50 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-95 duration-200">
            <Bell size={20} />
          </button>
          <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-[#efeded]/50 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-95 duration-200">
            <Settings size={20} />
          </button>
          <div className="h-10 w-10 rounded-full overflow-hidden ml-2 ring-2 ring-primary/10 cursor-pointer active:scale-95 duration-200">
            <Avatar className="w-full h-full">
              <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgBZBneET4fAyVJqw90UEITpxiXIP61aRsOYnyrFVpxLciLj0c9pRhmhmj1IbWDgcV_rq-tY_abOV7Q3cNllVkr0ayOu9m1egDgWCpopWqlZ9nFH3wmaUo3a4ZrGwjG3RH3wGFQimzPXvDedbC3a1sYkfNs30-_v4tD9i0Og2eFN1cJM87uVW5rJtfcIFqmpUu0zoMz7apv5UFPRPuludVM0w8di46u4lqhV9V2dyFXpHUn9aSgogbWbo6ySi2WUApcvtY7-2h" alt="User" className="object-cover" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      {/* SideNavBar (Desktop Only) */}
      <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 pt-20 bg-[#fbf9f8] dark:bg-slate-950 flex-col gap-4 px-4 border-r-0 font-headline font-medium text-sm">
        <div className="px-4 py-4 mb-2">
          <h2 className="text-xl font-black text-[#1b1c1c] dark:text-[#fbf9f8]">Elder</h2>
          <p className="text-[10px] font-semibold text-on-surface-variant/70 uppercase tracking-widest mt-0.5">Congregation Management</p>
        </div>
        <nav className="flex flex-col gap-1">
          <div className="mb-2">
            <a className="flex items-center gap-3 px-4 py-3 text-[#0061a4] dark:text-[#2196f3] bg-[#efeded] dark:bg-slate-800 rounded-r-full hover:pl-2 transition-all duration-300 hover:translate-x-1" href="#">
              <Users size={20} />
              <span>Publisher</span>
            </a>
            <button onClick={() => setShowAddModal(true)} className="w-full mt-1 ml-8 text-left px-4 py-2 text-xs font-medium text-primary hover:bg-primary/5 rounded-l-full transition-all flex items-center gap-2 group">
              <UserPlus size={16} />
              <span>Add New Publisher</span>
            </button>
          </div>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-[#0061a4] hover:pl-2 transition-all duration-300 hover:translate-x-1" href="#">
            <Calendar size={20} />
            <span>Meeting</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-[#0061a4] hover:pl-2 transition-all duration-300 hover:translate-x-1" href="#">
            <MapIcon size={20} />
            <span>Territory</span>
          </a>
        </nav>
        <div className="mt-auto pb-8 flex flex-col gap-1">
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-[#0061a4] hover:pl-2 transition-all duration-300 hover:translate-x-1" href="#">
            <Settings size={20} />
            <span>Settings</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-[#0061a4] hover:pl-2 transition-all duration-300 hover:translate-x-1" href="#">
            <LogOut size={20} />
            <span>Log out</span>
          </a>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-screen relative md:pl-64">
        {/* Main Content Area */}
        <main className="flex-1 mt-16 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* Editorial Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface font-headline">Publisher Directory</h1>
                <p className="text-on-surface-variant text-lg max-w-xl font-body">A curated archive of congregation members and their current spiritual standing.</p>
              </div>
              <Button onClick={() => setShowAddModal(true)} className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-6 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[0.98] transition-transform shadow-lg shadow-primary/10 border-none">
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
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <div className="p-2 text-primary hover:bg-primary-container/20 rounded-lg transition-all opacity-0 group-hover:opacity-100 hover:text-primary cursor-pointer">
                              <MoreHorizontal size={20} />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48 bg-surface-container-lowest">
                            <DropdownMenuItem className="cursor-pointer font-medium hover:bg-surface-container-low">
                              <Edit2 size={16} className="mr-2 text-primary" /> Edit Details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="cursor-pointer font-medium hover:bg-surface-container-low"
                              onClick={() => handleTransferClick({name: "Arthur Bennett", type: "Regular Pioneer", id: "ARCH-10294-AB"})}
                            >
                              <ArrowLeftRight size={16} className="mr-2 text-secondary" /> Transfer Publisher
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="cursor-pointer font-medium hover:bg-error-container hover:text-error text-error focus:bg-error-container focus:text-error"
                              onClick={() => handleDeactivateClick({name: "Arthur Bennett", type: "Regular Pioneer", id: "ARCH-10294-AB"})}
                            >
                              <UserX size={16} className="mr-2 text-error" /> Deactivate
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <div className="p-2 text-primary hover:bg-primary-container/20 rounded-lg transition-all opacity-0 group-hover:opacity-100 hover:text-primary cursor-pointer">
                              <MoreHorizontal size={20} />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48 bg-surface-container-lowest">
                            <DropdownMenuItem className="cursor-pointer font-medium hover:bg-surface-container-low">
                              <Edit2 size={16} className="mr-2 text-primary" /> Edit Details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="cursor-pointer font-medium hover:bg-surface-container-low"
                              onClick={() => handleTransferClick({name: "Edward Harrison", type: "Unbaptized", id: "ARCH-10296-EH"})}
                            >
                              <ArrowLeftRight size={16} className="mr-2 text-secondary" /> Transfer Publisher
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="cursor-pointer font-medium hover:bg-error-container hover:text-error text-error focus:bg-error-container focus:text-error"
                              onClick={() => handleDeactivateClick({name: "Edward Harrison", type: "Unbaptized", id: "ARCH-10296-EH"})}
                            >
                              <UserX size={16} className="mr-2 text-error" /> Deactivate
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <div className="p-2 text-primary hover:bg-primary-container/20 rounded-lg transition-all opacity-0 group-hover:opacity-100 hover:text-primary cursor-pointer">
                              <MoreHorizontal size={20} />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48 bg-surface-container-lowest">
                            <DropdownMenuItem className="cursor-pointer font-medium hover:bg-surface-container-low">
                              <Edit2 size={16} className="mr-2 text-primary" /> Edit Details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="cursor-pointer font-medium hover:bg-surface-container-low"
                              onClick={() => handleTransferClick({name: "Lydia Morales", type: "Regular Pioneer", id: "ARCH-10297-LM"})}
                            >
                              <ArrowLeftRight size={16} className="mr-2 text-secondary" /> Transfer Publisher
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="cursor-pointer font-medium hover:bg-error-container hover:text-error text-error focus:bg-error-container focus:text-error"
                              onClick={() => handleDeactivateClick({name: "Lydia Morales", type: "Regular Pioneer", id: "ARCH-10297-LM"})}
                            >
                              <UserX size={16} className="mr-2 text-error" /> Deactivate
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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

        {/* Mobile Navigation Bar (Visible only on mobile) */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#ffffff]/80 backdrop-blur-xl z-50 rounded-t-[2.5rem] shadow-[0_-8px_32px_rgba(27,28,28,0.08)]">
          <a className="flex flex-col items-center justify-center bg-gradient-to-br from-[#0061a4] to-[#2196f3] text-white rounded-2xl px-5 py-2 active:scale-90 duration-300 ease-out" href="#">
            <Users size={20} className="mb-1" />
            <span className="font-body text-[11px] font-medium tracking-wide">Publisher</span>
          </a>
          <a className="flex flex-col items-center justify-center text-[#1b1c1c] opacity-60 px-5 py-2 hover:opacity-100 transition-opacity active:scale-90 duration-300 ease-out" href="#">
            <Calendar size={20} className="mb-1" />
            <span className="font-body text-[11px] font-medium tracking-wide">Meeting</span>
          </a>
          <a className="flex flex-col items-center justify-center text-[#1b1c1c] opacity-60 px-5 py-2 hover:opacity-100 transition-opacity active:scale-90 duration-300 ease-out" href="#">
            <MapIcon size={20} className="mb-1" />
            <span className="font-body text-[11px] font-medium tracking-wide">Territory</span>
          </a>
        </nav>
      </div>

      {/* Add Publisher Modal Overlay */}
      {showAddModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-on-background/30 backdrop-blur-md" onClick={() => setShowAddModal(false)}></div>
          {/* Focused Modal Card */}
          <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-8 pb-0 flex justify-between items-start">
              <div>
                <h2 className="font-headline text-2xl font-black text-primary tracking-tight mb-1">Add New Publisher</h2>
                <p className="text-on-surface-variant font-medium text-sm">Register a new member to the congregation directory.</p>
              </div>
              <button onClick={() => setShowAddModal(false)} className="text-on-surface-variant hover:bg-surface-container p-2 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            {/* Form Content */}
            <form className="p-8 space-y-6">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Full Name</label>
                <Input className="w-full px-4 py-6 bg-surface-container-low border-0 border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-t-md rounded-b-none transition-all placeholder:text-outline shadow-none" placeholder="e.g. Samuel Arkwright" type="text" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Email Address</label>
                <Input className="w-full px-4 py-6 bg-surface-container-low border-0 border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-t-md rounded-b-none transition-all placeholder:text-outline shadow-none" placeholder="samuel.a@example.org" type="email" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Phone Number</label>
                <Input className="w-full px-4 py-6 bg-surface-container-low border-0 border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-t-md rounded-b-none transition-all placeholder:text-outline shadow-none" placeholder="+44 7700 900000" type="tel" />
              </div>
              {/* Info Box */}
              <div className="flex gap-4 p-4 bg-tertiary-fixed rounded-xl text-on-tertiary-fixed-variant">
                <Info size={24} className="shrink-0" />
                <p className="text-sm leading-relaxed">
                  This action will send a secure welcome email and SMS. The link contains a <strong>temporary password (OTP)</strong> for the publisher's first login and verification.
                </p>
              </div>
              {/* Action Button */}
              <Button type="button" onClick={() => setShowAddModal(false)} className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-6 rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 border-none">
                Send Welcome Link & OTP
                <Send size={20} />
              </Button>
            </form>
            {/* Footer Meta */}
            <div className="bg-surface-container-high px-8 py-4 flex justify-center">
              <p className="text-[10px] text-outline font-bold tracking-widest uppercase">Serene Assembly Digital System • 2024</p>
            </div>
          </div>
        </div>
      )}

      {/* Transfer Publisher Modal Overlay */}
      {showTransferModal && selectedPublisher && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-on-background/20 backdrop-blur-md" onClick={() => setShowTransferModal(false)}></div>
          <div className="relative bg-surface-container-lowest w-full max-w-xl rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="px-8 pt-8 pb-6 bg-surface-container-low border-b-0">
              <div className="flex justify-between items-start mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-tertiary-container text-on-tertiary-container">
                  Administrative Action
                </span>
                <button onClick={() => setShowTransferModal(false)} className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container p-1 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>
              <h2 className="font-headline text-3xl font-extrabold text-on-surface leading-tight">Transfer Publisher</h2>
              <p className="text-on-surface-variant mt-2 font-body text-sm">Initiate a formal record migration to another organised congregation.</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8">
              {/* Selected Publisher Summary */}
              <div className="flex items-center gap-6 p-5 rounded-xl bg-surface-container-low">
                <div className="relative">
                  <Avatar className="w-16 h-16 shadow-sm border border-outline-variant/30 bg-surface-container-highest">
                    {selectedPublisher.image ? <AvatarImage src={selectedPublisher.image} /> : null}
                    <AvatarFallback className="text-xl bg-surface-container-highest text-on-surface-variant">{selectedPublisher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full flex items-center justify-center">
                    <User size={12} className="fill-current" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">{selectedPublisher.type}</p>
                  <h3 className="font-headline text-xl font-bold">{selectedPublisher.name}</h3>
                  <p className="text-sm text-on-surface-variant">ID: {selectedPublisher.id}</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Destination Search */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant ml-1">Destination Congregation</label>
                  <div className="relative group">
                    <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                    <Input className="w-full pl-12 pr-4 py-6 bg-surface-container-low border-b-2 border-transparent border-t-0 border-x-0 focus-visible:border-primary focus-visible:ring-0 rounded-t-lg rounded-b-none transition-all font-body text-on-surface placeholder:text-outline shadow-none" placeholder="e.g. Central Sydney, Bondi North" type="text" defaultValue="Central Sydney" />
                  </div>
                  <div className="mt-1 px-4 py-2 flex items-center gap-2 text-xs text-on-surface-variant italic">
                    <Info size={14} className="shrink-0" />
                    Ensures records are routed to the correct secretary.
                  </div>
                </div>

                {/* Date Picker */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant ml-1">Effective Transfer Date</label>
                  <div className="relative group">
                    <Input className="w-full pl-4 pr-4 py-6 bg-surface-container-low border-b-2 border-transparent border-t-0 border-x-0 focus-visible:border-primary focus-visible:ring-0 rounded-t-lg rounded-b-none transition-all font-body text-on-surface shadow-none" type="date" defaultValue="2024-11-24" />
                  </div>
                </div>
              </div>

              {/* Guidance Note */}
              <div className="bg-primary-fixed/30 p-4 rounded-xl border-l-4 border-primary">
                <p className="text-sm text-on-primary-fixed-variant leading-relaxed">
                  <strong className="font-semibold">Note:</strong> Once initiated, {selectedPublisher.name.split(' ')[0]}&apos;s digital file will be locked for editing in this portal and transferred to the <span className="font-bold">Central Sydney</span> administration queue.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 pb-8 pt-0 flex items-center justify-between gap-4">
              <Button variant="ghost" onClick={() => setShowTransferModal(false)} className="px-6 py-6 font-semibold text-on-surface-variant hover:bg-surface-container transition-all rounded-lg hover:text-on-surface-variant border-none shadow-none">
                Cancel
              </Button>
              <Button onClick={() => setShowTransferModal(false)} className="px-8 py-6 bg-gradient-to-r from-primary to-primary-container text-white font-headline font-bold rounded-lg shadow-sm hover:opacity-90 transition-all flex items-center gap-2 border-none">
                Initiate Transfer
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Deactivate Publisher Modal Overlay */}
      {showDeactivateModal && selectedPublisher && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-on-surface/20 backdrop-blur-sm">
          <div className="bg-surface-container-lowest w-full max-w-xl rounded-xl shadow-2xl overflow-hidden relative border border-outline-variant/30">
            {/* Modal Header */}
            <div className="p-8 bg-surface-container-low border-b-0">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Administrative Action
                </div>
                <button onClick={() => setShowDeactivateModal(false)} className="text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded-full">
                  <X size={24} />
                </button>
              </div>
              <h2 className="text-3xl font-extrabold text-on-surface tracking-tight leading-tight font-headline">
                Deactivate Publisher Account
              </h2>

              <div className="mt-6 flex items-center gap-4 bg-white/50 p-4 rounded-lg border border-outline-variant/10">
                <Avatar className="w-16 h-16 border-2 border-white shadow-sm">
                  {selectedPublisher.image ? <AvatarImage src={selectedPublisher.image} /> : null}
                  <AvatarFallback className="bg-surface-container-highest text-xl">{selectedPublisher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-on-surface-variant font-medium">Target Account</p>
                  <h3 className="text-xl font-bold text-on-surface font-headline">{selectedPublisher.name}</h3>
                  <p className="text-xs text-secondary-fixed-dim bg-on-secondary-fixed-variant px-2 py-0.5 rounded inline-block mt-1">ID: {selectedPublisher.id}</p>
                </div>
              </div>
            </div>

            {/* Modal Body (Form) */}
            <div className="p-8 space-y-8">
              {/* Reason Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase" htmlFor="reason">Reason for Deactivation</label>
                <div className="relative">
                  <Select defaultValue="">
                    <SelectTrigger id="reason" className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-lg px-4 py-6 text-on-surface transition-all shadow-none h-auto">
                      <SelectValue placeholder="Select a primary reason..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moved">Moved Out</SelectItem>
                      <SelectItem value="status">Spiritual Status Change</SelectItem>
                      <SelectItem value="inactive">Voluntary Inactivity</SelectItem>
                      <SelectItem value="deceased">Deceased</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Notes Area */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-on-surface-variant tracking-wide uppercase" htmlFor="notes">Administrative Notes</label>
                <Textarea
                  id="notes"
                  className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-t-lg rounded-b-none px-4 py-4 text-on-surface resize-none transition-all shadow-none"
                  placeholder="Enter detailed notes regarding this change for archival purposes..."
                  rows={4}
                />
                <p className="text-[11px] text-on-surface-variant italic leading-relaxed">
                  Note: These records are strictly confidential and only accessible by authorized Elder Management personnel.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 bg-surface-container-low flex items-center justify-end gap-6 pt-6">
              <Button variant="ghost" onClick={() => setShowDeactivateModal(false)} className="text-secondary font-semibold hover:text-on-secondary-container hover:bg-transparent transition-colors px-4 py-2 border-none shadow-none h-auto">
                Cancel Action
              </Button>
              <Button onClick={() => setShowDeactivateModal(false)} className="bg-gradient-to-r from-error to-[#d32f2f] text-white px-8 py-6 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 border-none">
                <UserX size={20} className="fill-current" />
                Deactivate Publisher
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

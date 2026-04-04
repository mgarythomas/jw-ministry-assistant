import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search, Bell, Settings, Grid, Building2, History,
  Map as MapIcon, Maximize2, LayoutGrid, Filter, Layers, MapPin,
  Store, AlertTriangle, PlusCircle, ChevronLeft, ChevronRight,
  Users, UserSearch, Calendar, BarChart3, MapPinned
} from "lucide-react";

export default function TerritoryManagement() {
  return (
    <div className="bg-surface text-on-surface min-h-screen pb-24 md:pb-0 font-body">
      {/* Top Navigation Shell */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(27,28,28,0.06)] border-none">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold tracking-tighter text-blue-800 font-headline">The Archivist</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 items-center font-headline text-sm tracking-tight">
              <a className="text-slate-500 hover:bg-slate-100/50 transition-colors px-3 py-2 rounded-xl" href="#">Congregation</a>
              <a className="text-slate-500 hover:bg-slate-100/50 transition-colors px-3 py-2 rounded-xl" href="#">Publishers</a>
              <a className="text-slate-500 hover:bg-slate-100/50 transition-colors px-3 py-2 rounded-xl" href="#">Assignments</a>
              <a className="text-blue-700 font-semibold px-3 py-2 rounded-xl bg-blue-50/50" href="#">Territory</a>
              <a className="text-slate-500 hover:bg-slate-100/50 transition-colors px-3 py-2 rounded-xl" href="#">Reports</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:flex items-center">
              <Search size={16} className="absolute left-3 text-slate-400" />
              <input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 transition-all outline-none" placeholder="Search maps or streets..." type="text" />
            </div>
            <button className="text-slate-500 hover:bg-slate-100/50 p-2 rounded-full transition-colors">
              <Bell size={20} />
            </button>
            <button className="text-slate-500 hover:bg-slate-100/50 p-2 rounded-full transition-colors">
              <Settings size={20} />
            </button>
            <Avatar className="w-9 h-9 rounded-full border-2 border-primary-container/20">
              <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBaK76rM8N2tNUloPjbSGqqA4D7TijzAEsJxuYTSY84LJ5gTughOEhR89Zf_vu6ia3LM7qLI1VRNyGlDk27ltnQZQosBEmRJuiUhB0lc9vGLmmNpgOPSIQ085kMEcQP9xBk5w8jKTxz_FRTHVzSGWQ400nGCEuniV4xuKFRm8zrCfCgF55CwGkfpPP6lXNwptudXrObFc14MBMs_q1oik0zqcOAzgV5cuULTdVmyak0FDktCSRvkDbiOcBWFr4uoCOFt77j7kc" alt="Admin" className="object-cover" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tighter text-on-surface mb-2 font-headline">Territory Management</h1>
                <p className="text-on-surface-variant text-sm leading-relaxed">Vector tile rendering engine active for 113 maps.</p>
              </div>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full flex items-center justify-start gap-3 px-4 py-6 bg-secondary-container text-on-secondary-fixed-variant rounded-xl font-medium transition-all active:scale-95 hover:bg-secondary-container">
                  <Grid size={20} className="fill-current" />
                  <span>All Suburbs</span>
                  <span className="ml-auto text-xs opacity-60">113</span>
                </Button>
                <Button variant="ghost" className="w-full flex items-center justify-start gap-3 px-4 py-6 text-on-surface-variant hover:bg-surface-container transition-all rounded-xl hover:text-on-surface-variant">
                  <Building2 size={20} />
                  <span>Business Territory</span>
                  <span className="ml-auto text-xs opacity-40">12</span>
                </Button>
                <Button variant="ghost" className="w-full flex items-center justify-start gap-3 px-4 py-6 text-on-surface-variant hover:bg-surface-container transition-all rounded-xl hover:text-on-surface-variant">
                  <History size={20} />
                  <span>Work History</span>
                </Button>
              </div>

              <div className="pt-6">
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4 px-4 font-headline">Suburbs</h3>
                <div className="space-y-1">
                  <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                    <span>Bondi</span>
                    <Badge variant="secondary" className="text-xs bg-surface-container px-2 py-0.5 rounded-full border-none shadow-none text-on-surface-variant hover:bg-surface-container">34</Badge>
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                    <span>Coogee</span>
                    <Badge variant="secondary" className="text-xs bg-surface-container px-2 py-0.5 rounded-full border-none shadow-none text-on-surface-variant hover:bg-surface-container">28</Badge>
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                    <span>Randwick</span>
                    <Badge variant="secondary" className="text-xs bg-surface-container px-2 py-0.5 rounded-full border-none shadow-none text-on-surface-variant hover:bg-surface-container">31</Badge>
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                    <span>Maroubra</span>
                    <Badge variant="secondary" className="text-xs bg-surface-container px-2 py-0.5 rounded-full border-none shadow-none text-on-surface-variant hover:bg-surface-container">20</Badge>
                  </button>
                </div>
              </div>

              <Button className="w-full bg-primary text-on-primary py-6 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                <MapPinned size={20} />
                <span>Add New Territory</span>
              </Button>
            </div>
          </aside>

          {/* Content Canvas */}
          <section className="flex-1 space-y-8">
            {/* Map Preview & Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 relative h-64 rounded-3xl overflow-hidden shadow-sm bg-slate-100 group cursor-pointer">
                {/* Vector Map Placeholder */}
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <img className="w-full h-full object-cover brightness-95 opacity-80" alt="Topographic map visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArMXhGpg5Y3A6G_aekZsxI8lwwtaOMnmAe5jafgTJ8mFI7SCE_7ffZ2kbh_T2QGMbZjLtCFNgQuqO6dms_8IWkhHBFiv1ZpfeeecAkX-JII2KZbHbsGvkiMckD8WuxpLy4vlfs5Nks9GOtbh39Whnltau06iOnWVTP5PgQBJTgiY_WUeJzCO3c9FGRAnX2l2NYN9mPuPrFMOxIV4yWsG2C2DgQ58s4h7N5Jt2UZZxUitHLM77Erd4xYDUNW4rJr3tHhHeM10pz" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-white/80 text-xs font-bold tracking-widest uppercase mb-1">
                    <MapIcon size={16} /> OpenStreetMap View
                  </div>
                  <h2 className="text-white text-2xl font-bold font-headline">Interactive Coverage View</h2>
                </div>
                <Button variant="secondary" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md px-6 py-6 rounded-full text-white font-bold flex items-center gap-2 transition-all opacity-0 group-hover:opacity-100 border-none">
                  <Maximize2 size={20} />
                  Expand Map
                </Button>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-slate-700">MAPLIBRE RENDERER ACTIVE</span>
                </div>
              </div>

              <Card className="bg-tertiary-container/10 p-6 rounded-3xl flex flex-col justify-between border border-tertiary/10 shadow-none">
                <CardContent className="p-0">
                  <div>
                    <BarChart3 size={32} className="text-tertiary mb-4 fill-current" />
                    <h4 className="text-on-surface font-bold font-headline">Tile Distribution</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Status across all sectors</p>
                  </div>
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Available</span>
                      <span className="font-bold text-primary">62</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary w-[62%] h-full"></div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Assigned</span>
                      <span className="font-bold text-secondary">48</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                      <div className="bg-secondary w-[48%] h-full"></div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Overdue</span>
                      <span className="font-bold text-error">3</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                      <div className="bg-error w-[15%] h-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filter & Search Mobile */}
            <div className="lg:hidden flex flex-col gap-4">
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input className="w-full bg-surface-container-lowest border-none rounded-2xl py-4 pl-12 pr-4 shadow-sm outline-none" placeholder="Search Map Tiles..." type="text" />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <Button className="whitespace-nowrap px-6 py-4 bg-primary text-on-primary rounded-full text-sm font-medium border-none h-auto">All Suburbs</Button>
                <Button variant="secondary" className="whitespace-nowrap px-6 py-4 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium border-none shadow-none hover:bg-surface-container h-auto">Bondi</Button>
                <Button variant="secondary" className="whitespace-nowrap px-6 py-4 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium border-none shadow-none hover:bg-surface-container h-auto">Coogee</Button>
                <Button variant="secondary" className="whitespace-nowrap px-6 py-4 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium border-none shadow-none hover:bg-surface-container h-auto">Randwick</Button>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between pb-2 border-b border-surface-container">
              <div className="flex items-center gap-4">
                <h3 className="font-bold text-lg font-headline">Map Tiles</h3>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-full">
                  <span className="text-[11px] font-bold text-slate-500">Business Territory</span>
                  <button className="w-8 h-4 bg-slate-300 rounded-full relative flex items-center transition-all hover:bg-slate-400">
                    <div className="absolute left-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                  <Filter size={24} />
                </button>
                <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                  <LayoutGrid size={24} />
                </button>
              </div>
            </div>

            {/* Territory Map Tile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Tile 1 */}
              <Card className="bg-surface-container-lowest rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden border border-transparent hover:border-primary/20 transition-all group p-0">
                <div className="relative h-40 bg-slate-50 overflow-hidden" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                  {/* Vector Map Component Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-slate-100 opacity-50"></div>
                    <div className="absolute w-24 h-24 border-2 border-primary/20 rounded-full flex items-center justify-center">
                      <Layers size={36} className="text-primary/30" />
                    </div>
                    <div className="absolute top-2 left-2 px-2 py-1 bg-white/80 backdrop-blur-md rounded-lg text-[9px] font-black tracking-tighter text-slate-500 uppercase">Vector v1.4</div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="bg-primary/90 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase">Map 104</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="px-2 py-1 bg-green-500 text-white text-[9px] font-black rounded shadow-sm uppercase tracking-wider">Available</div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h4 className="text-base font-bold leading-tight mb-1 font-headline">North Bondi Coastal</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                    <MapPin size={14} />
                    Bondi Beach • 12 Streets
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-4 border-t border-slate-100">
                    <span className="text-slate-400 uppercase tracking-tighter font-bold">Last Rendered</span>
                    <span className="font-medium text-slate-700">Oct 12, 2023</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1 py-5 bg-primary text-on-primary rounded-xl text-xs font-bold shadow-sm hover:shadow-primary/20 active:scale-95 transition-all border-none">Assign Map</Button>
                    <Button variant="secondary" className="px-4 py-5 bg-surface-container text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors border-none shadow-none">Details</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tile 2 (Checked Out) */}
              <Card className="bg-surface-container-lowest rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden border border-transparent hover:border-primary/20 transition-all group p-0">
                <div className="relative h-40 bg-blue-50 overflow-hidden" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-blue-100 opacity-30"></div>
                    <div className="absolute w-24 h-24 border-2 border-blue-500/10 rounded-full flex items-center justify-center">
                      <Building2 size={36} className="text-blue-500/20" />
                    </div>
                    <div className="absolute top-2 left-2 px-2 py-1 bg-white/80 backdrop-blur-md rounded-lg text-[9px] font-black tracking-tighter text-slate-500 uppercase">Vector v1.4</div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-blue-600/90 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase">Map 215</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="px-2 py-1 bg-blue-500 text-white text-[9px] font-black rounded shadow-sm uppercase tracking-wider">Checked Out</div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h4 className="text-base font-bold leading-tight mb-1 font-headline">Coogee Bay Road</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                    <Store size={14} />
                    Business Sector • 8 Streets
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-600">JS</div>
                      <span className="text-slate-600 font-semibold">Jonathan S.</span>
                    </div>
                    <span className="text-slate-400 font-medium">since Jan 15</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" className="flex-1 py-5 border-2 border-primary/20 text-primary rounded-xl text-xs font-bold hover:bg-primary/5 active:scale-95 transition-all bg-transparent">Check In</Button>
                    <Button variant="secondary" className="px-3 py-5 bg-surface-container text-slate-600 rounded-xl text-xs font-bold border-none shadow-none hover:bg-surface-container/80">
                      <span className="material-symbols-outlined text-lg leading-none tracking-widest px-1">...</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tile 3 (Overdue) */}
              <Card className="bg-surface-container-lowest rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden border border-transparent hover:border-error/20 transition-all group p-0">
                <div className="relative h-40 bg-error/5 overflow-hidden" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-error/5 opacity-40"></div>
                    <div className="absolute w-24 h-24 border-2 border-error/10 rounded-full flex items-center justify-center">
                      <AlertTriangle size={36} className="text-error/20" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-error/90 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase">Map 082</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="px-2 py-1 bg-error text-white text-[9px] font-black rounded shadow-sm uppercase tracking-wider">Overdue</div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h4 className="text-base font-bold leading-tight mb-1 font-headline">Randwick Heights</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                    <MapPin size={14} />
                    Randwick • 15 Streets
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600">SM</div>
                      <span className="text-slate-600 font-semibold">Sarah Miller</span>
                    </div>
                    <span className="text-error font-black uppercase tracking-tighter">6+ Months</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="destructive" className="flex-1 py-5 bg-error text-white rounded-xl text-xs font-bold shadow-sm hover:shadow-error/20 active:scale-95 transition-all">Request Return</Button>
                    <Button variant="secondary" className="px-4 py-5 bg-surface-container text-slate-600 rounded-xl text-xs font-bold hover:bg-surface-container/80 border-none shadow-none">Remind</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tile 4 */}
              <Card className="bg-surface-container-lowest rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden border border-transparent hover:border-primary/20 transition-all group p-0">
                <div className="relative h-40 bg-slate-50 overflow-hidden" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-slate-100 opacity-50"></div>
                    <div className="absolute w-24 h-24 border-2 border-primary/10 rounded-full flex items-center justify-center">
                      <MapIcon size={36} className="text-primary/20" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-primary/90 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase">Map 156</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="px-2 py-1 bg-green-500 text-white text-[9px] font-black rounded shadow-sm uppercase tracking-wider">Available</div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h4 className="text-base font-bold leading-tight mb-1 font-headline">Maroubra Junction</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                    <MapPin size={14} />
                    Maroubra • 9 Streets
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-4 border-t border-slate-100">
                    <span className="text-slate-400 uppercase tracking-tighter font-bold">Last Worked</span>
                    <span className="font-medium text-slate-700">Nov 22, 2023</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1 py-5 bg-primary text-on-primary rounded-xl text-xs font-bold shadow-sm active:scale-95 transition-all border-none">Assign Map</Button>
                    <Button variant="secondary" className="px-4 py-5 bg-surface-container text-slate-600 rounded-xl text-xs font-bold hover:bg-surface-container/80 border-none shadow-none">Details</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tile 5 */}
              <Card className="bg-surface-container-lowest rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden border border-transparent hover:border-primary/20 transition-all group p-0">
                <div className="relative h-40 bg-slate-50 overflow-hidden" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-slate-100 opacity-50"></div>
                    <div className="absolute w-24 h-24 border-2 border-primary/10 rounded-full flex items-center justify-center">
                      <MapIcon size={36} className="text-primary/20" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-primary/90 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase">Map 033</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="px-2 py-1 bg-green-500 text-white text-[9px] font-black rounded shadow-sm uppercase tracking-wider">Available</div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h4 className="text-base font-bold leading-tight mb-1 font-headline">Tamarama Walk</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                    <MapPin size={14} />
                    Bondi • 5 Streets
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-4 border-t border-slate-100">
                    <span className="text-slate-400 uppercase tracking-tighter font-bold">Last Worked</span>
                    <span className="font-medium text-slate-700">Dec 01, 2023</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1 py-5 bg-primary text-on-primary rounded-xl text-xs font-bold shadow-sm active:scale-95 transition-all border-none">Assign Map</Button>
                    <Button variant="secondary" className="px-4 py-5 bg-surface-container text-slate-600 rounded-xl text-xs font-bold hover:bg-surface-container/80 border-none shadow-none">Details</Button>
                  </div>
                </CardContent>
              </Card>

              {/* New Tile Placeholder */}
              <div className="border-2 border-dashed border-slate-200 rounded-3xl p-5 flex flex-col items-center justify-center text-slate-400 hover:border-primary/40 hover:text-primary transition-all cursor-pointer h-full min-h-[300px] group bg-white/50">
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <PlusCircle size={36} />
                </div>
                <span className="text-sm font-bold font-headline">Create New Map Tile</span>
                <p className="text-[10px] mt-1 text-slate-400">Add GeoJSON or street list</p>
              </div>
            </div>

            {/* Pagination / Scale indicator */}
            <div className="flex items-center justify-between py-12 border-t border-surface-container">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Showing 5 of 113 vector tiles</p>
              <div className="flex gap-2">
                <Button variant="ghost" className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-slate-600 hover:bg-slate-200 border-none shadow-none p-0">
                  <ChevronLeft size={20} />
                </Button>
                <Button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm border-none p-0">1</Button>
                <Button variant="outline" className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 hover:bg-slate-50 p-0">2</Button>
                <Button variant="outline" className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 hover:bg-slate-50 p-0">3</Button>
                <Button variant="ghost" className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-slate-600 hover:bg-slate-200 border-none shadow-none p-0">
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Navigation Shell (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-lg rounded-t-3xl shadow-[0_-4px_24px_rgba(0,0,0,0.04)] z-50">
        <a className="flex flex-col items-center justify-center text-slate-400 px-3 py-1.5 active:scale-90 transition-transform" href="#">
          <Users size={24} />
          <span className="font-body text-[10px] font-medium uppercase tracking-widest mt-1">Congregation</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 px-3 py-1.5 active:scale-90 transition-transform" href="#">
          <UserSearch size={24} />
          <span className="font-body text-[10px] font-medium uppercase tracking-widest mt-1">Publishers</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 px-3 py-1.5 active:scale-90 transition-transform" href="#">
          <Calendar size={24} />
          <span className="font-body text-[10px] font-medium uppercase tracking-widest mt-1">Assignments</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-xl px-3 py-1.5 active:scale-90 transition-transform" href="#">
          <MapIcon size={24} className="fill-current" />
          <span className="font-body text-[10px] font-medium uppercase tracking-widest mt-1">Territory</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 px-3 py-1.5 active:scale-90 transition-transform" href="#">
          <BarChart3 size={24} />
          <span className="font-body text-[10px] font-medium uppercase tracking-widest mt-1">Reports</span>
        </a>
      </nav>

      {/* Floating Action Button (Contextual) */}
      <Button className="md:hidden fixed right-6 bottom-24 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-90 z-50 p-0 border-none">
        <MapPinned size={24} />
      </Button>
    </div>
  );
}

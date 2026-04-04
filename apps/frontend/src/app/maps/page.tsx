import React from "react";
import { TopAppBar } from "@/components/TopAppBar";
import { BottomNavBar } from "@/components/BottomNavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronDown, Plus } from "lucide-react";

export default function TerritoryMapManagement() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen pb-32">
      <TopAppBar activeTab="Territory" />

      <main className="pt-24 px-6 max-w-7xl mx-auto">
        {/* Editorial Header Section */}
        <section className="mb-12">
          <h2 className="font-headline font-black text-4xl md:text-6xl text-on-background tracking-tighter mb-4 opacity-90">
            Territory Overview
          </h2>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed text-lg">
            Manage, assign, and track congregation boundaries with archival
            precision.
          </p>
        </section>

        {/* Search & Interactive Map Bento Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Search & Filters */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-none border-b-2 border-b-primary">
              <CardContent className="p-0 flex items-center gap-3 bg-surface-container-low px-4 py-1 rounded-lg group focus-within:ring-2 ring-primary/20 transition-all">
                <Search size={20} className="text-outline" />
                <Input
                  className="bg-transparent border-none focus-visible:ring-0 w-full text-on-surface placeholder:text-outline/60 font-medium outline-none shadow-none px-0"
                  placeholder="Search by name or suburb..."
                  type="text"
                />
              </CardContent>
            </Card>

            <Card className="bg-surface-container p-6 rounded-xl space-y-4 border-none shadow-none">
              <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-outline">
                Status Filter
              </h3>
              <CardContent className="p-0 flex flex-wrap gap-2">
                <Button className="px-4 py-2 bg-primary text-on-primary rounded-full text-sm font-semibold transition-transform active:scale-95 h-auto hover:bg-primary/90">
                  All
                </Button>
                <Button variant="secondary" className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium hover:bg-outline-variant transition-colors h-auto border-none">
                  Available
                </Button>
                <Button variant="secondary" className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium hover:bg-outline-variant transition-colors h-auto border-none">
                  Checked Out
                </Button>
                <Button variant="secondary" className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium hover:bg-outline-variant transition-colors h-auto border-none">
                  Overdue
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Graphical Map Overview */}
          <div className="lg:col-span-2 relative h-80 lg:h-auto min-h-[400px] bg-surface-container-highest rounded-2xl overflow-hidden group">
            <img
              alt="City Map"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFfLkXT9xj1ah9QewKvt52KQgWga1Ipv79kZQtIp7A76iee-bJx_Gi591kRo5M8U0btl5AbQCkck09msoNWfPe6DllUHyNJknBnmvdOREMohtDbnI3GQMzAgzcH27K6xrJkTaSieflPDrFBUM0uIKIiPB8CPsaHG6D9E6ohVeqT_ihXrQQJVeevZBQf53LMA7cIh2s7Dr3M-aflqRNKqD8MfxisJrSwhc41r_Mo3n_ytnn7iQqvPa1ApLDeIfJxEt6FMtVe8Hp"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/40 to-transparent pointer-events-none"></div>

            <div className="absolute top-6 left-6 shadow-lg">
              <Badge variant="secondary" className="bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 hover:bg-surface-container-lowest/90 border-none">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-xs font-bold tracking-tight uppercase text-on-surface">
                  Interactive Suburb View
                </span>
              </Badge>
            </div>

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium opacity-80">
                Greater North Region
              </p>
              <h4 className="text-2xl font-bold tracking-tight">
                Active Coverage: 84%
              </h4>
            </div>
          </div>
        </section>

        {/* Territory Grid */}
        <section>
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-headline font-bold text-2xl tracking-tight text-on-surface">
              Records & Assignments
            </h3>
            <span className="text-on-surface-variant text-sm font-medium">
              Showing 104 territories
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Territory Card: Available */}
            <Card className="group bg-surface-container-lowest p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-none shadow-sm">
              <CardContent className="p-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <span className="text-primary font-black text-3xl tracking-tighter">
                      #01
                    </span>
                    <h4 className="font-bold text-lg text-on-surface">
                      North Ryde
                    </h4>
                  </div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-none shadow-none">
                    Available
                  </Badge>
                </div>
                <div className="bg-surface-container rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-on-surface-variant">
                      Last Worked
                    </span>
                    <span className="text-xs font-bold">Oct 12, 2023</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-full"></div>
                  </div>
                </div>
                <Button variant="outline" className="w-full py-6 text-primary text-sm font-bold border-2 border-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                  View Details
                </Button>
              </CardContent>
            </Card>

            {/* Territory Card: Checked Out */}
            <Card className="group bg-surface-container-lowest p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-none shadow-sm">
              <CardContent className="p-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <span className="text-primary font-black text-3xl tracking-tighter">
                      #14
                    </span>
                    <h4 className="font-bold text-lg text-on-surface">
                      Macquarie Park
                    </h4>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-none shadow-none">
                    Checked Out
                  </Badge>
                </div>
                <div className="bg-surface-container rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-on-surface-variant">
                      Publisher
                    </span>
                    <span className="text-xs font-bold text-on-surface">
                      Samuel Thompson
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-on-surface-variant">
                      Due Date
                    </span>
                    <span className="text-xs font-bold">In 14 days</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full py-6 text-primary text-sm font-bold border-2 border-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                  View Details
                </Button>
              </CardContent>
            </Card>

            {/* Territory Card: Overdue */}
            <Card className="group bg-surface-container-lowest p-6 rounded-2xl border-2 border-error/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <CardContent className="p-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <span className="text-error font-black text-3xl tracking-tighter">
                      #28
                    </span>
                    <h4 className="font-bold text-lg text-on-surface">
                      Epping North
                    </h4>
                  </div>
                  <Badge className="bg-error-container text-on-error-container hover:bg-error-container px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-none shadow-none">
                    Overdue
                  </Badge>
                </div>
                <div className="bg-surface-container rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-on-surface-variant">
                      Publisher
                    </span>
                    <span className="text-xs font-bold text-error">
                      Sarah Chen
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-on-surface-variant">
                      Overdue By
                    </span>
                    <span className="text-xs font-bold text-error">8 days</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full py-6 text-error text-sm font-bold border-2 border-error/20 rounded-xl group-hover:bg-error group-hover:text-white transition-all hover:bg-error/10 hover:text-error">
                  View Details
                </Button>
              </CardContent>
            </Card>

            {/* Placeholder Grid Items (Simulation of ~100) */}
            <Card className="group bg-surface-container-lowest p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-60 border-none shadow-sm">
              <CardContent className="p-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <span className="text-primary font-black text-3xl tracking-tighter">
                      #02
                    </span>
                    <h4 className="font-bold text-lg text-on-surface">
                      Marsfield East
                    </h4>
                  </div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-none shadow-none">
                    Available
                  </Badge>
                </div>
                <div className="bg-surface-container rounded-xl p-4 mb-6 h-16"></div>
                <Button variant="outline" className="w-full py-6 text-primary text-sm font-bold border-2 border-primary/10 rounded-xl hover:bg-transparent hover:text-primary">
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="group bg-surface-container-lowest p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-60 border-none shadow-sm">
              <CardContent className="p-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <span className="text-primary font-black text-3xl tracking-tighter">
                      #03
                    </span>
                    <h4 className="font-bold text-lg text-on-surface">
                      Gladesville
                    </h4>
                  </div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-none shadow-none">
                    Available
                  </Badge>
                </div>
                <div className="bg-surface-container rounded-xl p-4 mb-6 h-16"></div>
                <Button variant="outline" className="w-full py-6 text-primary text-sm font-bold border-2 border-primary/10 rounded-xl hover:bg-transparent hover:text-primary">
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="group bg-surface-container-lowest p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-60 border-none shadow-sm">
              <CardContent className="p-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <span className="text-primary font-black text-3xl tracking-tighter">
                      #04
                    </span>
                    <h4 className="font-bold text-lg text-on-surface">Eastwood</h4>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-none shadow-none">
                    Checked Out
                  </Badge>
                </div>
                <div className="bg-surface-container rounded-xl p-4 mb-6 h-16"></div>
                <Button variant="outline" className="w-full py-6 text-primary text-sm font-bold border-2 border-primary/10 rounded-xl hover:bg-transparent hover:text-primary">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* View All Trigger */}
          <div className="mt-12 text-center">
            <Button variant="secondary" className="inline-flex items-center gap-2 px-8 py-6 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold rounded-full transition-all border-none">
              Load More Territories
              <ChevronDown size={20} />
            </Button>
          </div>
        </section>
      </main>

      <BottomNavBar activeTab="Maps" />

      {/* Floating Action Button */}
      <Button className="fixed bottom-28 right-8 w-16 h-16 bg-tertiary-container text-on-tertiary-container rounded-2xl shadow-[0_8px_32px_rgba(27,28,28,0.15)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 p-0 hover:bg-tertiary-container">
        <Plus size={32} />
      </Button>
    </div>
  );
}

import React from "react";
import { TopAppBar } from "@/components/TopAppBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Map as MapIcon, Users, BarChart3, Archive, Plus, LogOut, Search,
  Navigation, ZoomIn, ZoomOut, MapPin, LocateFixed
} from "lucide-react";

export default function PublisherPortal() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-container/30 h-screen font-body flex overflow-hidden">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-full py-8 px-4 bg-stone-50 dark:bg-stone-950 w-64 border-r-0 font-headline font-medium">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="relative">
            <Avatar className="w-10 h-10 rounded-full bg-surface-container">
              <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7kVA5-6wMnq7qD-WOaspO_Ii5QJ2cUTQ_GZA7dgZfMF8vh_gZq2--B6Z_1Q_Fpvpn50G1y89pdu6uArKe-5Mhmq6yxjoA-qV4APQhpG3VQ37TinfcbdQdq4lYtcfkGuwzIXHBFaP7cuIbCweAbFVq8hTk-oToyWdub8Tf5EORpNgB0Np4j7GRVganrf03IBWX7PNnUoLYoQm_CkRtPvf-vZzhuJg6cmFPB2ojDxxAlqNrVf1tnxiOPIoYfuze49VchzpqLAHc" alt="Publisher" className="object-cover" />
              <AvatarFallback>PB</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-stone-50 flex items-center justify-center">
              <Badge className="w-2 h-2 p-0 bg-white rounded-full border-none shadow-none"></Badge>
            </div>
          </div>
          <div>
            <p className="text-lg font-black text-blue-800 dark:text-blue-300 leading-tight font-headline">Publisher Portal</p>
            <p className="text-xs text-stone-500 font-body">North District</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 font-body">
          {/* Territory is active */}
          <a className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg transition-all duration-200 ease-in-out" href="#">
            <MapIcon size={20} className="fill-current" />
            <span>Territories</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800 rounded-lg transition-all duration-200 ease-in-out" href="#">
            <Users size={20} />
            <span>Congregation</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800 rounded-lg transition-all duration-200 ease-in-out" href="#">
            <BarChart3 size={20} />
            <span>Reports</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800 rounded-lg transition-all duration-200 ease-in-out" href="#">
            <Archive size={20} />
            <span>Inventory</span>
          </a>
        </nav>

        <div className="mt-auto pt-6 space-y-4 font-body">
          <Button className="w-full py-6 px-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow border-none shadow-none">
            <Plus size={20} />
            Request Territory
          </Button>
          <a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
            <LogOut size={20} />
            <span>Sign Out</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
      <TopAppBar activeTab="Territory" />

        <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
          {/* Map Container */}
          <section className="flex-1 relative bg-surface-container-high">
            <div className="absolute inset-0 w-full h-full overflow-hidden grayscale-[20%] hover:grayscale-0 transition-all duration-700">
              <img alt="Map of Eastern Suburbs Sydney" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvteUZ4K1qhA8Jbbpw19Py2QYtNMNEv5cze1bve7hNE7b-KofgGFCO6NKkXf7zX5tivJcQvxjcBUMcXEP2jXyQknlIbVBxschYDaJGOGPGQEds6YuUL3yX3XazjJOB4ywuL_sWqAqHojPtUpg0ZkSvKq3ATLeeAs_9DVVv-ygA74zKgMIXGwsrBMVRgo1coD4dtVJTxqkm_JWNrdW4rOWc7i-n3AolieOVErWPqPEuRsONr8JGkpa9_GTk3BArhSHZCm6oKzz-" />

              {/* Interactive Pins/Tiles Overlay Mockup */}
              <div className="absolute inset-0 pointer-events-none p-12">
                {/* Example Polygons/Pins */}
                <div className="absolute top-[20%] left-[30%] w-32 h-24 bg-primary/10 border-2 border-primary/40 rounded-lg backdrop-blur-[1px] pointer-events-auto cursor-pointer hover:bg-primary/20 flex flex-col items-center justify-center group transition-all">
                  <Badge className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold mb-1 hover:bg-primary border-none shadow-none">MAP 042</Badge>
                  <span className="text-[10px] font-bold text-primary tracking-wider font-headline">BONDI JUNCTION</span>
                  <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded shadow-xl border border-surface-variant flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-error"></div>
                    <span className="text-[10px] whitespace-nowrap text-on-surface">3 Pending Addresses</span>
                  </div>
                </div>

                <div className="absolute top-[45%] left-[55%] w-28 h-32 bg-tertiary/10 border-2 border-tertiary/40 rounded-lg backdrop-blur-[1px] pointer-events-auto cursor-pointer hover:bg-tertiary/20 flex flex-col items-center justify-center group transition-all">
                  <Badge className="bg-tertiary text-white text-[10px] px-2 py-0.5 rounded-full font-bold mb-1 hover:bg-tertiary border-none shadow-none">MAP 113</Badge>
                  <span className="text-[10px] font-bold text-tertiary tracking-wider font-headline">COOGEE BEACH</span>
                </div>

                <div className="absolute top-[60%] left-[20%] w-40 h-28 bg-secondary/10 border-2 border-secondary/40 rounded-lg backdrop-blur-[1px] pointer-events-auto cursor-pointer hover:bg-secondary/20 flex flex-col items-center justify-center group transition-all">
                  <Badge className="bg-secondary text-white text-[10px] px-2 py-0.5 rounded-full font-bold mb-1 hover:bg-secondary border-none shadow-none">MAP 089</Badge>
                  <span className="text-[10px] font-bold text-secondary tracking-wider font-headline">RANDWICK NORTH</span>
                </div>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute bottom-8 left-8 flex flex-col gap-2">
              <Button variant="outline" className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-on-surface-variant hover:bg-stone-50 transition-colors border-none p-0">
                <Plus size={24} />
              </Button>
              <Button variant="outline" className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-on-surface-variant hover:bg-stone-50 transition-colors border-none p-0">
                <ZoomOut size={24} />
              </Button>
              <Button variant="outline" className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-on-surface-variant hover:bg-stone-50 transition-colors border-none p-0">
                <LocateFixed size={24} className="fill-current text-primary" />
              </Button>
            </div>

            {/* Map Legend / Stats Floating Card */}
            <div className="absolute top-8 right-8 w-64 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-5 border border-white/20 hidden lg:block font-body">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-headline font-bold text-on-surface">District Status</h3>
                <Badge variant="secondary" className="text-[10px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold border-none shadow-none hover:bg-secondary-container">113 TILES</Badge>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs text-on-surface-variant">In Progress</span>
                  </div>
                  <span className="text-xs font-bold">42</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                    <span className="text-xs text-on-surface-variant">Recently Finished</span>
                  </div>
                  <span className="text-xs font-bold">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
                    <span className="text-xs text-on-surface-variant">Available</span>
                  </div>
                  <span className="text-xs font-bold">53</span>
                </div>
                <div className="pt-4 border-t border-surface-variant">
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold mb-2">Coverage</p>
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[65%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Information Sidebar */}
          <aside className="w-full md:w-80 lg:w-96 bg-surface-container-lowest overflow-y-auto p-6 flex flex-col gap-8 shadow-[-10px_0_30px_rgba(0,0,0,0.02)] z-10 font-body">
            {/* Recent Activity Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-headline font-bold text-lg text-on-surface">Recent Maps</h2>
                <Button variant="link" className="text-xs text-primary font-bold hover:underline p-0 h-auto">View All</Button>
              </div>

              <div className="space-y-3">
                {/* Card 1 */}
                <div className="p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="text-[10px] font-black text-primary tracking-tighter bg-primary-container/20 px-2 py-0.5 rounded hover:bg-primary-container/20 border-none shadow-none">MAP 012</Badge>
                    <span className="text-[10px] text-stone-400">2 days ago</span>
                  </div>
                  <p className="font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Campbell Parade</p>
                  <p className="text-xs text-on-surface-variant line-clamp-1">Bondi Beach, NSW 2026</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <Avatar className="w-6 h-6 border-2 border-surface-container-lowest bg-stone-200">
                        <AvatarFallback className="text-[8px] font-bold">JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-6 h-6 border-2 border-surface-container-lowest bg-stone-300">
                        <AvatarFallback className="text-[8px] font-bold">MK</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-[10px] text-stone-400">Worked by 2 publishers</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group border-l-4 border-error/50">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="text-[10px] font-black text-tertiary tracking-tighter bg-tertiary-container/20 px-2 py-0.5 rounded hover:bg-tertiary-container/20 border-none shadow-none">MAP 084</Badge>
                    <span className="text-[10px] text-stone-400">5 days ago</span>
                  </div>
                  <p className="font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Clovelly Road</p>
                  <p className="text-xs text-on-surface-variant line-clamp-1">Clovelly, NSW 2031</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] text-error font-bold flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-error/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-error"></div></div>
                      Expires in 4 days
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Nearby Suggestions */}
            <section>
              <h2 className="font-headline font-bold text-lg text-on-surface mb-4">Nearby Territories</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer">
                  <div className="w-16 h-16 rounded-xl bg-surface-container-highest overflow-hidden shrink-0">
                    <img alt="Street view thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwvjsgYpD1r_Pq0RFB7tDD1mhpM2lb1usu7axPrvjDx7QfyMLebgOEeWTr0382RpYEI3fEcXaoXs2wo82oXwKX7DPDYX0EUcfftE_lJepLEMOZYX-wIhV08aAcGo-D4dCxGUL__DV0KGjkVyCZqzj77cdNr0gVfIXE-TRcGVbci3hhYXuqzSWLrF6ArNOJdRjYRmfeou-RkFuPO_StAH7lri1NSqNHLAAz2__PCQFausChKcn3_sp-itE0N_2QICGCWHrevbTy" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-on-surface font-headline">Bronte South</p>
                    <p className="text-[11px] text-on-surface-variant">42 Households • 0.8km away</p>
                    <div className="flex gap-1 mt-1">
                      <Badge variant="secondary" className="text-[9px] px-1.5 py-0.5 bg-secondary-container/50 text-on-secondary-container rounded font-bold uppercase tracking-tighter border-none shadow-none hover:bg-secondary-container/50">Business</Badge>
                      <Badge variant="secondary" className="text-[9px] px-1.5 py-0.5 bg-surface-container text-on-surface-variant rounded font-bold uppercase tracking-tighter border-none shadow-none hover:bg-surface-container">Hilly</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer">
                  <div className="w-16 h-16 rounded-xl bg-surface-container-highest overflow-hidden shrink-0">
                    <img alt="Apartment block thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5qZiM42hYUuRhu7Q28MViBs3Cb1anQziFufUVQYhE4qjEYJ7ig0njHH0WKpXFPd2Y8QWYuduVGWNxdqx6xb4b2gIHmj1g5l--gxGOvE8tRiRP9NLRuQJow17kwmO3VgfT3x7CvNkhB19qL_0iesBdxd7f_wS-scinoTlBYDqhgWrIpwxMXo9Srtv0v9NHCEoyvc3ijyO9DeiyoIWenhTk_yTGvKK7704GBDEPFrExdL6jj37QqNEGJZwAyuMbfIrHmwRyfDpF" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-on-surface font-headline">Waverley Heights</p>
                    <p className="text-[11px] text-on-surface-variant">156 Households • 1.2km away</p>
                    <div className="flex gap-1 mt-1">
                      <Badge variant="secondary" className="text-[9px] px-1.5 py-0.5 bg-primary-container/20 text-on-primary-container rounded font-bold uppercase tracking-tighter border-none shadow-none hover:bg-primary-container/20">Apartments</Badge>
                      <Badge variant="secondary" className="text-[9px] px-1.5 py-0.5 bg-surface-container text-on-surface-variant rounded font-bold uppercase tracking-tighter border-none shadow-none hover:bg-surface-container">Level</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Signature Action Component */}
            <div className="mt-auto">
              <Button className="w-full bg-tertiary-container text-on-tertiary-container p-12 rounded-2xl flex flex-col items-center justify-center gap-3 hover:shadow-xl transition-all border border-tertiary-fixed-dim hover:bg-tertiary-container/90 h-auto">
                <MapPin size={36} className="fill-current" />
                <div className="text-center">
                  <p className="font-headline font-black text-lg">Check-in at Location</p>
                  <p className="text-xs opacity-70 font-medium">Auto-record territory map time</p>
                </div>
              </Button>
            </div>
          </aside>
        </div>
      </main>

      {/* Mobile Navigation (BottomNavBar) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-t border-surface-container flex items-center justify-around px-6 z-50">
        <a className="flex flex-col items-center gap-1 text-blue-700" href="#">
          <MapIcon size={24} className="fill-current" />
          <span className="text-[10px] font-bold">Territories</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-stone-500" href="#">
          <Users size={24} />
          <span className="text-[10px]">Congregation</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-stone-500" href="#">
          <BarChart3 size={24} />
          <span className="text-[10px]">Reports</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-stone-500" href="#">
          <Archive size={24} />
          <span className="text-[10px]">Stock</span>
        </a>
      </nav>
    </div>
  );
}

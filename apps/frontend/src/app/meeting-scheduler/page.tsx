import React from "react";
import { TopAppBar } from "@/components/TopAppBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Printer as Print, Upload, User, UserCircle, Users, MoreHorizontal, Lightbulb, UserPlus, Calendar, Plus, Search, Settings } from "lucide-react";

export default function MeetingScheduler() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar activeTab="Assignments" />

      {/* SideNavBar */}
      <aside className="h-[calc(100vh-4rem)] w-64 fixed left-0 top-16 bg-white dark:bg-zinc-950 flex flex-col py-6 z-40 transition-all duration-300 ease-in-out font-headline text-sm shadow-sm hidden lg:flex border-r border-outline-variant/30">
        <div className="px-6 mb-8 flex items-center gap-3">
          <Avatar className="w-10 h-10 rounded-full border-2 border-primary/10">
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuA30MIf--TUBIkhnf_w4LgPK5ClMhWayrwzI6NE2O_DHKvBHqtOpnMZuVpHjaxHxyqb9AzPpV9M2mjCC35ACslBFwmpirYmjiDEeF10qQW8nMTzU0HMHGrnYfQCShfZrxxG2ALb8zXGyChuMDpqIJQqPyVrq-TEnmRchiRfcLlRzFi-xbVOnd71YxCp2nOI3np_A0BvOil-fVQm33bW8U0C7VjKtijyoWo84cayyJkgWa_Fz3Kus8yghYhItz8n_g_ju6JkEDUD" alt="Elder" className="object-cover" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-black text-blue-900 dark:text-blue-100 leading-tight">Elder Management</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-body">Life and Ministry Admin</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 pr-4 font-body">
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors rounded-r-full" href="#">
            <Calendar size={20} /> Meeting Schedule
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors rounded-r-full" href="#">
            <Users size={20} /> Publishers
          </a>
          <a className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-r-full font-bold px-4 py-3" href="#">
            <BookOpen size={20} /> Assignments
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors rounded-r-full" href="#">
            <Search size={20} /> Field Service
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors rounded-r-full" href="#">
            <Settings size={20} /> Settings
          </a>
        </nav>
        <div className="px-6 mt-auto">
          <Button className="w-full py-6 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-container hover:text-white transition-all shadow-md active:scale-95 touch-manipulation">
            <Plus size={20} /> Create New Schedule
          </Button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <main className="lg:ml-64 pt-24 pb-12 px-4 md:px-10 min-h-screen">
        <div className="max-w-[1600px] mx-auto">
          {/* Page Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary font-bold mb-2">
                <BookOpen size={20} />
                <span className="tracking-widest uppercase text-[10px] font-body">Weekly Workbook Administration</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight mb-4 leading-tight font-headline">Life and Ministry Meeting Scheduler</h2>
              <p className="text-on-surface-variant leading-relaxed font-body">Week of May 22-28, 2024. Assigning roles for congregational growth and spiritual instruction.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" className="flex-1 md:flex-none px-6 py-6 bg-surface-container-high rounded-xl font-headline font-bold text-on-surface hover:bg-surface-variant transition-colors flex items-center justify-center gap-2 touch-manipulation border-none shadow-none">
                <Print size={20} /> Print
              </Button>
              <Button className="flex-1 md:flex-none px-6 py-6 bg-primary text-white rounded-xl font-headline font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg touch-manipulation border-none">
                <Upload size={20} /> Publish
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            {/* Center Column: Content Form */}
            <div className="xl:col-span-8 space-y-12">
              {/* Section 1: Treasures */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-on-tertiary-container rounded-full"></div>
                  <h3 className="text-2xl font-bold text-on-surface font-headline">Treasures from God&apos;s Word</h3>
                  <span className="text-zinc-400 text-sm font-normal ml-auto font-body">24 min</span>
                </div>
                <div className="space-y-4 font-body">
                  {/* Assignment Item */}
                  <Card className="bg-surface-container-lowest p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group border-none">
                    <CardContent className="p-0 flex flex-col sm:flex-row items-start justify-between gap-4">
                      <div className="flex-1 w-full">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-primary font-bold text-xs md:text-sm">10 min</span>
                          <h4 className="font-bold text-base md:text-lg text-on-surface leading-snug">&quot;Spiritual Recovery Is Not Hopeless&quot;</h4>
                        </div>
                        <p className="text-on-surface-variant text-sm mb-4">Instruction and spiritual highlights from the assigned bible chapters.</p>
                        <div className="flex items-center gap-4">
                          <div className="flex-1 max-w-sm">
                            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-tighter mb-1">Select Publisher</label>
                            <Select>
                              <SelectTrigger className="w-full bg-surface-container-low border-none rounded-lg text-sm py-6 px-4 focus:ring-2 focus:ring-primary appearance-none cursor-pointer outline-none">
                                <SelectValue placeholder="Select an Elder or Servant" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="jonathan">Jonathan Miller</SelectItem>
                                <SelectItem value="david">David Thompson</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-surface-container rounded-full flex items-center justify-center text-zinc-300 shrink-0">
                        <UserCircle size={32} className="text-zinc-400" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Assignment Item */}
                  <Card className="bg-surface-container-lowest p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-none">
                    <CardContent className="p-0 flex flex-col sm:flex-row items-start justify-between gap-4">
                      <div className="flex-1 w-full">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-primary font-bold text-sm">10 min</span>
                          <h4 className="font-bold text-base md:text-lg text-on-surface">Spiritual Gems</h4>
                        </div>
                        <p className="text-on-surface-variant text-sm mb-4">Question-and-answer discussion based on the weekly reading.</p>
                        <div className="flex items-center gap-4">
                          <div className="flex-1 max-w-sm">
                            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-tighter mb-1">Select Publisher</label>
                            <Select defaultValue="david">
                              <SelectTrigger className="w-full bg-surface-container-low border-none rounded-lg text-sm py-6 px-4 focus:ring-2 focus:ring-primary appearance-none cursor-pointer outline-none">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="david">David Thompson</SelectItem>
                                <SelectItem value="jonathan">Jonathan Miller</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <Avatar className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-primary-container/30 shrink-0">
                        <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQekwS1qunHcH8mo44PHLN7PRAW-OAAKC9c11K0vFCOqxPC8BW9zCTyhDxB3L58T5YXvrMohhDECFFWisgirMfwuKSzP1s8nmTbE-eSZrvY19PFX4tWVWXlnUgBMw-cDOoRTot4GMj_LZsx_wIGja7X_s-qGMJSdCOSp3pxxlu17Y_6-dM_Q1KtdYdO3VAcF8_e0wMKmmcQGivQfPlg5tN0HVw24dVqXe2e4itHSF0FMyVuDBVXHdv2TFC9xd5AMbryNho84qv" alt="Publisher" className="object-cover" />
                        <AvatarFallback>DT</AvatarFallback>
                      </Avatar>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Section 2: Field Ministry */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  <h3 className="text-2xl font-bold text-on-surface font-headline">Apply Yourself to the Field Ministry</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-body">
                  <Card className="bg-surface-container-lowest p-5 rounded-2xl border border-transparent hover:border-primary/20 transition-all flex flex-col justify-between shadow-sm min-h-[200px]">
                    <CardContent className="p-0">
                      <h4 className="font-bold text-on-surface mb-3">Starting a Conversation</h4>
                      <div className="flex -space-x-3 mb-6">
                        <Avatar className="w-9 h-9 rounded-full border-2 border-white">
                          <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3qyzZ-XoVXk30X-OWVIizOTPMnmGbahgToelfnnp-9n5YquMHIfZlRUan2QWwLS9Stofay8siwqHBEDOqNuluEPa1uUOQJoFuAY3BbNANdk6PLN6_pH35f8PTyW2t2Fxx-gZpgXUGXHwZpkwhR2CAIQUuCNujCKzBtU-5wvcUnM3b0Bq4OOJ1-XJVRLdA4UTB4iwd5P7ui7s0UKuoliHiTJrX09QLTtrkcywiKEgHxFKjSRybFnW5fr0_vIzgLA_NJMne6_BH" alt="Student" className="object-cover" />
                          <AvatarFallback>ST</AvatarFallback>
                        </Avatar>
                        <div className="w-9 h-9 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[10px] text-zinc-400 font-bold">?</div>
                      </div>
                    </CardContent>
                    <Button variant="ghost" className="w-full text-xs py-5 bg-surface-container text-primary font-bold rounded-lg hover:bg-primary-container/20 transition-colors touch-manipulation hover:text-primary">Assign Team</Button>
                  </Card>

                  <Card className="bg-surface-container-lowest p-5 rounded-2xl border border-transparent hover:border-primary/20 transition-all flex flex-col justify-between shadow-sm min-h-[200px]">
                    <CardContent className="p-0">
                      <h4 className="font-bold text-on-surface mb-3">Following Up</h4>
                      <div className="flex -space-x-3 mb-6">
                        <div className="w-9 h-9 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[10px] text-zinc-400 font-bold">?</div>
                        <div className="w-9 h-9 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[10px] text-zinc-400 font-bold">?</div>
                      </div>
                    </CardContent>
                    <Button variant="ghost" className="w-full text-xs py-5 bg-surface-container text-primary font-bold rounded-lg hover:bg-primary-container/20 transition-colors touch-manipulation hover:text-primary">Assign Team</Button>
                  </Card>

                  <Card className="bg-surface-container-lowest p-5 rounded-2xl border border-transparent hover:border-primary/20 transition-all flex flex-col justify-between shadow-sm min-h-[200px]">
                    <CardContent className="p-0">
                      <h4 className="font-bold text-on-surface mb-3">Explaining Beliefs</h4>
                      <div className="flex -space-x-3 mb-6">
                        <div className="w-9 h-9 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[10px] text-zinc-400 font-bold">?</div>
                      </div>
                    </CardContent>
                    <Button variant="ghost" className="w-full text-xs py-5 bg-surface-container text-primary font-bold rounded-lg hover:bg-primary-container/20 transition-colors touch-manipulation hover:text-primary">Assign Publisher</Button>
                  </Card>
                </div>
              </section>

              {/* Section 3: Living as Christians */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-error rounded-full"></div>
                  <h3 className="text-2xl font-bold text-on-surface font-headline">Living as Christians</h3>
                </div>
                <div className="bg-surface-container rounded-2xl overflow-hidden shadow-sm font-body">
                  <div className="p-4 bg-surface-container-highest flex justify-between items-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Admin Assignments</span>
                    <MoreHorizontal size={24} className="text-on-surface-variant cursor-pointer" />
                  </div>
                  <div className="divide-y divide-white/50">
                    {/* Item */}
                    <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-error font-bold text-sm">15 min</span>
                          <h4 className="font-bold text-on-surface text-lg">Steps to Spiritual Recovery</h4>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 self-end sm:self-auto">
                        <div className="text-right">
                          <p className="text-sm font-bold text-on-surface">Marcus Reed</p>
                          <p className="text-[10px] text-zinc-500">Assigned 2 days ago</p>
                        </div>
                        <Avatar className="w-10 h-10 rounded-full">
                          <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeIahvBKj7x8BjSWwLaSEpWGc3OKdYHApE4AmYwlULG0z56gPb2eL8GQn6YWS8b4poIAHgZ7GRnUnHKqouljLzqGgrqGtKLzrV1oZ4y2Dkz_ezzgDPmgA1wceaXR0njTVb8OuA-uQgft45chEN3r1QT_yQwIoxAYwO4TpdCQC3JKm5XqmZkui0HhNBbXdnIHG8Z2VAytwuoYtAUsQvGF68iJR6ENURCRoyoaR-4Sr21qVPMshK2ZxWkBetMGiJflf35u11IMME" alt="Marcus Reed" className="object-cover" />
                          <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                    {/* Item */}
                    <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-error font-bold text-sm">30 min</span>
                          <h4 className="font-bold text-on-surface text-lg">Congregation Bible Study</h4>
                        </div>
                        <p className="text-xs text-on-surface-variant italic mt-1">Book: Enjoy Life Forever! - Lesson 45</p>
                      </div>
                      <div className="flex items-center gap-4 self-end sm:self-auto">
                        <Button variant="ghost" className="px-4 py-2 bg-primary/10 text-primary font-bold text-sm rounded-lg flex items-center gap-1 hover:bg-primary/20 transition-colors touch-manipulation hover:text-primary">
                          <Plus size={16} /> Select Conductor
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Sidebar Reference */}
            <div className="xl:col-span-4 space-y-8 sticky xl:top-24">
              {/* Workbook Reference Card */}
              <Card className="bg-surface-container-lowest p-1 rounded-3xl shadow-lg overflow-hidden border border-zinc-100 font-body">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen size={24} className="text-primary fill-current" />
                    <span className="font-headline font-bold text-on-surface text-lg">Workbook Reference</span>
                  </div>
                  <div className="aspect-[3/4] rounded-2xl bg-zinc-100 overflow-hidden relative group">
                    <img alt="JW Workbook Reference" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT7bPSN1d6-BFg9nR3VeZgBru7r4OvcG2iAYJtwk8uueDhYDMaPEctMmc9Pgepy3FSuEj_FtDkwFu85BInXAAn-LMaa7GAlwcS100_gSr9-sSxux1CqQpF9N2817rNIZXzkcuq36enKFMA6nE4Fqxa052Z9_uXyI_e5g-EwKmDbKIHxS7el09bSTk1pRVxPy6fYHCqaPCUDjKj2F3682H3YHSrOQoqvgmnxV0fGlnjezVqZY-OjhayiTlGLkrByQQsEemJFDoI" />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="secondary" className="bg-white hover:bg-zinc-100 px-5 py-6 rounded-full font-headline font-bold text-xs shadow-xl flex items-center gap-2 touch-manipulation border-none">
                        View Large
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between font-body">
                    <div>
                      <p className="text-xs font-bold text-on-surface">Source: jw.org</p>
                      <p className="text-[10px] text-zinc-400 uppercase">May-June 2024 Vol 9</p>
                    </div>
                    <Badge className="bg-transparent hover:bg-transparent border-none text-primary-container p-0">
                       <User size={20} className="fill-current"/>
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Guidance/Tips Card */}
              <Card className="bg-primary-container/10 p-6 md:p-8 rounded-3xl border border-primary/10 shadow-none font-body">
                <CardContent className="p-0">
                  <h4 className="font-headline font-bold text-on-primary-container mb-5 flex items-center gap-2 text-lg">
                    <Lightbulb size={24} /> Scheduler Tips
                  </h4>
                  <ul className="space-y-4 text-sm text-on-primary-container/80">
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      </div>
                      <span>Ensure at least 3 weeks lead time for all main talk assignments.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      </div>
                      <span>Verify students have not had the same assignment type in the last 2 months.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      </div>
                      <span>Assign a backup reader for the Congregation Bible Study.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Secondary Actions */}
              <Card className="p-6 bg-tertiary-container text-on-tertiary-container rounded-3xl shadow-lg flex flex-col gap-5 border-none font-body">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-on-tertiary-container/10 rounded-full flex items-center justify-center">
                      <UserPlus size={24} />
                    </div>
                    <div>
                      <p className="font-bold">Attendance Record</p>
                      <p className="text-xs opacity-70">Ready for mid-week meeting</p>
                    </div>
                  </div>
                  <Button className="w-full mt-5 py-6 bg-on-tertiary-container text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity touch-manipulation border-none">
                    Take Attendance
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile FAB */}
      <Button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-50 touch-manipulation p-0 border-none">
        <Plus size={24} />
      </Button>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { CalendarDays, Megaphone, Users, Settings, Map, BookOpen, ContactRound, LayoutDashboard } from "lucide-react";

interface BottomNavBarProps {
  activeTab?: string;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab = "Schedule",
}) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#ffffff]/80 backdrop-blur-xl z-50 rounded-t-[2rem] shadow-[0_-8px_32px_rgba(27,28,28,0.06)]">
      <Link
        className={`flex flex-col items-center justify-center rounded-2xl px-5 py-2 active:scale-90 duration-300 ease-out ${
          activeTab === "Schedule"
            ? "bg-gradient-to-br from-[#0061a4] to-[#2196f3] text-white"
            : "text-[#1b1c1c] opacity-60 hover:opacity-100 transition-opacity"
        }`}
        href="/meeting-scheduler"
      >
        <CalendarDays size={20} />
        <span className="font-body text-[11px] font-medium tracking-wide">
          Schedule
        </span>
      </Link>
      <Link
        className={`flex flex-col items-center justify-center rounded-2xl px-5 py-2 active:scale-90 duration-300 ease-out ${
          activeTab === "Speakers"
            ? "bg-gradient-to-br from-[#0061a4] to-[#2196f3] text-white"
            : "text-[#1b1c1c] opacity-60 hover:opacity-100 transition-opacity"
        }`}
        href="/publisher-directory"
      >
        <Megaphone size={20} />
        <span className="font-body text-[11px] font-medium tracking-wide">
          Speakers
        </span>
      </Link>
      <Link
        className={`flex flex-col items-center justify-center rounded-2xl px-5 py-2 active:scale-90 duration-300 ease-out ${
          activeTab === "Roles"
            ? "bg-gradient-to-br from-[#0061a4] to-[#2196f3] text-white"
            : "text-[#1b1c1c] opacity-60 hover:opacity-100 transition-opacity"
        }`}
        href="/meeting-manager"
      >
        <Users size={20} />
        <span className="font-body text-[11px] font-medium tracking-wide">
          Roles
        </span>
      </Link>
      <Link
        className={`flex flex-col items-center justify-center rounded-2xl px-5 py-2 active:scale-90 duration-300 ease-out ${
          activeTab === "Settings" || activeTab === "Dashboard"
            ? "bg-gradient-to-br from-[#0061a4] to-[#2196f3] text-white"
            : "text-[#1b1c1c] opacity-60 hover:opacity-100 transition-opacity"
        }`}
        href="/dashboard"
      >
        <Settings size={20} />
        <span className="font-body text-[11px] font-medium tracking-wide">
          Settings
        </span>
      </Link>
    </nav>
  );
};

"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Bell, Settings, User, LogOut, ChevronDown } from "lucide-react";

interface TopAppBarProps {
  title?: string;
  activeTab?: string;
  role?: string;
  userName?: string;
  userImage?: string;
}

const NAV_ITEMS = [
  { label: "Congregation", href: "/dashboard" },
  { label: "Publishers", href: "/publisher-directory" },
  { label: "Assignments", href: "/meeting-scheduler" },
  { label: "Territory", href: "/territory-management" },
  { label: "Reports", href: "#" },
];

export const TopAppBar: React.FC<TopAppBarProps> = ({
  title = "The Archivist",
  activeTab,
  role = "Elder",
  userName = "Brother Bennett",
  userImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBRR-TayNvlWwRavXgzoEhvIlNiKyEwf9NL9VG4ltF2Co3EoLzeKWPdvfegT2AL9QzFk6Hs8szl4CmusuKbX_uhI6-cbc7L5uBv2h4bZbK3CoCJLydL-xcLws5LEQyGf4Z5TJoX3v2byY0rDXYvAw5JO3QEfAzeHD8PD1XcEKDuLT3EfOJQC49Xh8wK3YK0kX14jM46-0wh_4PGD9tfw1UbWUefUIwQjIp-atC-CNBT_7T9PHTMvTnpXsRJHt64EPxkbgmugeDY",
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = userName
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f8]/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(27,28,28,0.06)] border-b border-outline/5">
      <div className="flex items-center justify-between px-6 h-16 max-w-screen-2xl mx-auto w-full">
        {/* Left: App Brand */}
        <div className="flex items-center gap-8 shrink-0">
          <Link href="/dashboard" className="text-lg font-black tracking-tight text-[#0061a4] dark:text-blue-300 font-headline whitespace-nowrap">
            {title}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 font-headline text-sm tracking-tight">
            {NAV_ITEMS.map(({ label, href }) => {
              const isActive = activeTab === label;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`px-3 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-[#0061a4] font-semibold bg-blue-50/70 dark:bg-blue-900/30 dark:text-blue-300"
                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 hover:text-[#0061a4] dark:hover:text-blue-300"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Actions + User */}
        <div className="flex items-center gap-1">
          {/* Bell */}
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100/70 dark:hover:bg-slate-800 transition-colors active:scale-95"
            aria-label="Notifications"
          >
            <Bell size={20} />
          </button>

          {/* Settings */}
          <Link
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100/70 dark:hover:bg-slate-800 transition-colors active:scale-95"
            aria-label="Settings"
          >
            <Settings size={20} />
          </Link>

          {/* Divider */}
          <div className="w-px h-5 bg-outline/20 mx-2" />

          {/* Role badge (desktop only) */}
          <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-primary/8 text-[#0061a4] text-[11px] font-bold uppercase tracking-widest mr-2 border border-primary/10">
            {role}
          </span>

          {/* Avatar + Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center gap-1.5 pl-1 pr-1 py-1 rounded-full hover:bg-slate-100/70 dark:hover:bg-slate-800 transition-colors group active:scale-95"
              aria-label="User menu"
              aria-expanded={dropdownOpen}
            >
              <Avatar className="w-8 h-8 rounded-full border-2 border-primary/15 shadow-sm">
                <AvatarImage src={userImage} alt={userName} className="object-cover" />
                <AvatarFallback className="text-xs font-bold bg-primary-container text-on-primary-container">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <ChevronDown
                size={14}
                className={`text-slate-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-black/10 border border-outline/10 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150">
                {/* User info header */}
                <div className="px-4 py-3 border-b border-outline/10 bg-surface-container/40">
                  <p className="text-sm font-bold text-on-surface leading-tight">{userName}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{role}</p>
                </div>

                {/* Menu items */}
                <div className="py-1.5">
                  <Link
                    href="/publisher-profile"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-on-surface hover:bg-surface-container transition-colors font-body"
                  >
                    <User size={16} className="text-on-surface-variant" />
                    <span>My Profile</span>
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-on-surface hover:bg-surface-container transition-colors font-body"
                  >
                    <Settings size={16} className="text-on-surface-variant" />
                    <span>Settings</span>
                  </Link>
                </div>

                {/* Logout */}
                <div className="border-t border-outline/10 py-1.5">
                  <Link
                    href="/login/mobile"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-error hover:bg-error/5 transition-colors font-body"
                  >
                    <LogOut size={16} />
                    <span>Log Out</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

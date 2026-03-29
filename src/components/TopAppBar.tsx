import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Menu, Bell } from "lucide-react";

interface TopAppBarProps {
  title: string;
  showMenu?: boolean;
  showTabs?: boolean;
  role?: string;
  userImage?: string;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  title,
  showMenu = true,
  showTabs = true,
  role = "Admin",
  userImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBRR-TayNvlWwRavXgzoEhvIlNiKyEwf9NL9VG4ltF2Co3EoLzeKWPdvfegT2AL9QzFk6Hs8szl4CmusuKbX_uhI6-cbc7L5uBv2h4bZbK3CoCJLydL-xcLws5LEQyGf4Z5TJoX3v2byY0rDXYvAw5JO3QEfAzeHD8PD1XcEKDuLT3EfOJQC49Xh8wK3YK0kX14jM46-0wh_4PGD9tfw1UbWUefUIwQjIp-atC-CNBT_7T9PHTMvTnpXsRJHt64EPxkbgmugeDY",
}) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f8]/70 dark:bg-slate-900/70 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 w-full">
        <div className="flex items-center gap-4">
          {showMenu && (
            <button className="text-[#0061a4] active:scale-95 duration-200">
              <Menu size={24} />
            </button>
          )}
          {!showMenu && role === "Elder" && (
            <Avatar className="w-8 h-8 rounded-full bg-primary-container border-2 border-primary/10">
              <AvatarImage src={userImage} alt="profile" className="object-cover" />
              <AvatarFallback>EL</AvatarFallback>
            </Avatar>
          )}
          <h1 className="font-headline font-bold text-2xl tracking-tight text-[#0061a4]">
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          {showTabs && (
            <div className="hidden md:flex items-center gap-6 mr-6">
              <span className="text-[#0061a4] font-semibold cursor-pointer">
                Schedule
              </span>
              <span className="text-slate-500 hover:text-[#0061a4] cursor-pointer transition-colors">
                Speakers
              </span>
              <span className="text-slate-500 hover:text-[#0061a4] cursor-pointer transition-colors">
                Roles
              </span>
              <span className="text-slate-500 hover:text-[#0061a4] cursor-pointer transition-colors">
                Settings
              </span>
            </div>
          )}
          {role === "Admin" && (
            <Avatar className="w-10 h-10 rounded-full bg-primary-container shadow-sm border-2 border-primary/10">
              <AvatarImage src={userImage} alt={`${role} Profile`} className="object-cover" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          )}
          {role === "Elder" && !showTabs && (
             <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-50/50 transition-colors active:scale-95">
                <Bell className="text-blue-700" size={24} />
             </button>
          )}
        </div>
      </div>
    </header>
  );
};

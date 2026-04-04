import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, BookOpen, ArrowRight, Apple, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DesktopLogin() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex items-center justify-center p-4">
      {/* Main Container */}
      <main className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow">

        {/* Branding & Context Side */}
        <section className="hidden lg:flex flex-col justify-between p-12 bg-surface-container-low relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-primary mb-2">Elder</h1>
            <p className="font-headline text-xl text-on-surface-variant max-w-xs leading-relaxed">
              The Serene Archivist for your congregation’s spiritual journey.
            </p>
          </div>

          <div className="relative z-10 space-y-8">
            <div className="flex items-start gap-4">
              <ShieldCheck size={24} className="text-tertiary flex-shrink-0 fill-current" />
              <div>
                <h3 className="font-headline font-semibold text-on-surface">Secure by Design</h3>
                <p className="text-sm text-on-surface-variant">Enterprise-grade MFA and audit logs protect your community's private data.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BookOpen size={24} className="text-tertiary flex-shrink-0 fill-current" />
              <div>
                <h3 className="font-headline font-semibold text-on-surface">Digital Stewardship</h3>
                <p className="text-sm text-on-surface-variant">Focus on care and connection while we handle the organization.</p>
              </div>
            </div>
          </div>

          {/* Background Decorative Image */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv6mYaTkxILIthfXlnh2Z9Lb0S30A1ffsrnH4ORurXI6elGI_wqcKVd1CHwPbc4JzBh4fSfm2UzenMSdnfsisbehpZQ7HMoLEewSPjCsSjfUlR4WBQp-vKyh1AmSq9ghsVDhDYY-txJ8_K_xZR9BaASjCoz6BPW85ayf-LT86hKHCH3KV96BwthUx2N5IIxRZyIj8p5gdGpIzJuN2hoWf-9xXWPC7dc0yh3IW7qYYNoEjc7JpHux2jzUdQTe2nHe51FnIwOXa9"
              alt="Soft ethereal sunlight streaming through a minimalist library with tall white pillars and organized wooden bookshelves"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Form Side */}
        <section className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 lg:hidden">
            <h1 className="font-headline text-3xl font-extrabold tracking-tighter text-primary">Elder</h1>
          </div>

          <header className="mb-8">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">Welcome back</h2>
            <p className="text-on-surface-variant text-sm mt-1">Please enter your details to access the portal.</p>
          </header>

          {/* Login Form */}
          <form action="#" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">Email Address</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="name@congregation.org"
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-surface-container-highest focus-visible:ring-0 focus-visible:border-primary rounded-none transition-colors text-on-surface placeholder:text-outline-variant shadow-none"
              />
            </div>

            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Password</label>
                <Link href="#" className="text-xs text-primary font-medium hover:underline">Forgot password?</Link>
              </div>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-surface-container-highest focus-visible:ring-0 focus-visible:border-primary rounded-none transition-colors text-on-surface placeholder:text-outline-variant shadow-none"
              />
            </div>

            {/* MFA Indicator (Subtle) */}
            <div className="flex items-center gap-2 p-3 bg-surface-container-low rounded-lg">
              <ShieldCheck size={20} className="text-tertiary flex-shrink-0 fill-current" />
              <span className="text-xs text-on-surface-variant">Multi-Factor Authentication will be required upon sign-in.</span>
            </div>

            <Button type="submit" className="w-full py-6 bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group border-none">
              Sign In
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-surface-container-highest"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="bg-surface-container-lowest px-4 text-on-surface-variant font-medium">Or continue with</span>
            </div>
          </div>

          {/* SSO Options */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <Button variant="ghost" className="flex flex-col items-center justify-center gap-2 py-8 px-2 rounded-lg bg-surface-container-low text-on-surface text-[10px] font-semibold uppercase tracking-wider hover:bg-surface-container transition-colors h-auto">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfMyMm6mPUDyuRxeMJ2VSC_HF6htBh-WLVXNsLVQEgdX2GIEo2pKrqAKgqZzXtTuVrlMRgNgfe11SH3DxfrcV8V_siS6rJQVpljbg5TdPcIIgrGo_tP9TX5uW_0WCe1qAjF0Klm6xuQuSLfCn3UlhI9Sncf5t7Dd78LweHiRzVPe64dpppuUEzygNCyKdhWsao6kCiAaP6vEjAzy72RX7KlzzdZ0ACqQFVh8yukyk8iKfyKQZB8KhtKh5yntlBMIMuGNg_C1xp"
                alt="Google"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              Google
            </Button>

            <Button variant="ghost" className="flex flex-col items-center justify-center gap-2 py-8 px-2 rounded-lg bg-surface-container-low text-on-surface text-[10px] font-semibold uppercase tracking-wider hover:bg-surface-container transition-colors h-auto">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoyHs8p7tJc-IXBK2Di1hPkxbqvuAtGVQFEv7Ag6xlMvRz5eaUYVUCzqILEZhH7GNoosVUEJ_Zb5aEvGfcF8nj66b47wC1FYzUoEDmOIzKi61XUqObNvdx1SY0DfkRK3kRRot-_2PP_lRyDM63fPzPRhTaY5yLNMqGhs6Yn_rrAg6lxeEt8uo2kJArA_OvswWv8_Nqnv4jTikwZZsjAl0vzrGVKNdRphbSe_71KUS5m2QVNs6x8D285v2Wq7kz-iBGJZ0TopnB"
                alt="Microsoft"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              Microsoft
            </Button>

            <Button variant="ghost" className="flex flex-col items-center justify-center gap-2 py-8 px-2 rounded-lg bg-surface-container-low text-on-surface text-[10px] font-semibold uppercase tracking-wider hover:bg-surface-container transition-colors h-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.0729C24 5.40534 18.6274 0 12 0C5.37258 0 0 5.40534 0 12.0729C0 18.1006 4.38823 23.1006 10.125 24V15.5625H7.07812V12.0729H10.125V9.41624C10.125 6.38622 11.9165 4.71447 14.6576 4.71447C15.9705 4.71447 17.3438 4.95029 17.3438 4.95029V7.91572H15.8306C14.3399 7.91572 13.875 8.8465 13.875 9.80053V12.0729H17.2031L16.6711 15.5625H13.875V24C19.6118 23.1006 24 18.1006 24 12.0729Z" />
              </svg>
              Facebook
            </Button>

            <Button variant="ghost" className="flex flex-col items-center justify-center gap-2 py-8 px-2 rounded-lg bg-surface-container-low text-on-surface text-[10px] font-semibold uppercase tracking-wider hover:bg-surface-container transition-colors h-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.52a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.521 2.52 2.528 2.528 0 0 1-2.521 2.522h-2.522V8.833zm-1.268 0a2.528 2.528 0 0 1-2.523 2.52 2.528 2.528 0 0 1-2.52-2.52V2.521A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.522 2.521v6.312zM15.166 18.956a2.528 2.528 0 0 1 2.522 2.523 2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.523-2.521v-2.523h2.523zm0-1.271a2.527 2.527 0 0 1-2.523-2.521 2.527 2.527 0 0 1 2.523-2.521h6.312A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.521 2.521h-6.313z"/>
              </svg>
              Slack
            </Button>

            <Button variant="ghost" className="flex flex-col items-center justify-center gap-2 py-8 px-2 rounded-lg bg-surface-container-low text-on-surface text-[10px] font-semibold uppercase tracking-wider hover:bg-surface-container transition-colors h-auto">
              <Apple size={20} />
              Apple
            </Button>
          </div>

          {/* Footer Links */}
          <footer className="mt-12 text-center space-y-4">
            <p className="text-sm text-on-surface-variant">
              First time?
              <Link href="#" className="text-primary font-bold hover:underline ml-1">Setup Account</Link>
            </p>
            <div className="flex justify-center gap-6 text-[10px] text-outline uppercase tracking-tighter font-semibold">
              <Link href="#" className="hover:text-on-surface transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-on-surface transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-on-surface transition-colors">Support</Link>
            </div>
          </footer>
        </section>
      </main>

      {/* Contextual Floating Action - Back to Public Site */}
      <div className="fixed bottom-8 right-8 hidden md:block">
        <Button className="flex items-center gap-2 px-6 py-6 bg-tertiary-container text-on-tertiary-container font-headline font-bold text-sm rounded-full editorial-shadow hover:scale-105 transition-transform border-none hover:bg-tertiary-container">
          <Globe size={18} />
          Public Site
        </Button>
      </div>
    </div>
  );
}

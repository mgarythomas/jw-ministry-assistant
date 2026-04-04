import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Landmark, Eye, ShieldCheck, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MobileLogin() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col items-center justify-center p-6">
      {/* Hero Backdrop Decoration (Asymmetrical "Serene Archivist" touch) */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-container/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-primary-container/10 rounded-full blur-2xl"></div>
      </div>

      {/* Login Container */}
      <main className="w-full max-w-sm flex flex-col">
        {/* Branding Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Landmark size={24} className="text-white fill-current" />
            </div>
            <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">Elder</h1>
          </div>
          <div className="space-y-2">
            <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight leading-tight">Welcome back</h2>
            <p className="text-on-surface-variant font-body text-base">Enter your details to access the archives.</p>
          </div>
        </header>

        {/* Form Section */}
        <section className="space-y-6">
          {/* Input Groups */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="font-label text-sm font-semibold text-on-surface ml-1" htmlFor="username">Username or Email</label>
              <div className="relative">
                <Input
                  id="username"
                  type="text"
                  placeholder="name@congregation.org"
                  className="w-full h-14 px-4 bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-xl rounded-b-none transition-all font-body text-on-surface placeholder:text-on-surface-variant/50 shadow-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-label text-sm font-semibold text-on-surface ml-1" htmlFor="password">Password</label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-14 px-4 bg-surface-container-low border-none border-b-2 border-transparent focus-visible:border-primary focus-visible:ring-0 rounded-xl rounded-b-none transition-all font-body text-on-surface placeholder:text-on-surface-variant/50 shadow-none"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors">
                  <Eye size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* MFA Notice */}
          <div className="flex items-start gap-3 p-4 bg-surface-container-highest/30 rounded-xl">
            <ShieldCheck className="text-primary text-xl flex-shrink-0" size={20} />
            <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
              Multi-Factor Authentication (MFA) required. A verification code will be sent to your registered device after signing in.
            </p>
          </div>

          {/* Action Button */}
          <Button className="w-full h-14 bg-gradient-to-r from-primary to-primary-container text-white font-headline font-bold rounded-xl editorial-shadow active:scale-95 transition-transform border-none hover:opacity-90">
            Sign In
          </Button>

          {/* Separator */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-[1px] flex-1 bg-surface-container"></div>
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-semibold">Or continue with</span>
            <div className="h-[1px] flex-1 bg-surface-container"></div>
          </div>

          {/* Social Logins */}
          <div className="flex flex-col gap-3">
            {/* Google */}
            <Button variant="outline" className="flex items-center justify-center gap-3 h-12 bg-surface-container-lowest border border-outline-variant/15 rounded-xl hover:bg-surface-container transition-colors text-on-surface font-label text-sm font-semibold">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBON4EaESdvyyswI4bNd_delncH9j2pqAqD3Z0qYNrhMvuP9PZunp3L42ATaZT8oaJqgaUMQ448Wiv4vXRqDjicf71XttE9tcRXZ31YidWyljTQdulpFGfQO2ge4Upd2K2t254XfK66ZVe2HSR8Z2odaKgJaHFqzNZkYp5EKw_eGjwq1Mxi-oghRJ21Gk_6aezL7wEr9iYU3g3dd7Kne_DhJv3uu4KDHzcnMTEMe5yJetNwddNonLIQMp6DHVvXgKwi7NaP_8E"
                alt="Google"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              Continue with Google
            </Button>

            {/* Microsoft */}
            <Button variant="outline" className="flex items-center justify-center gap-3 h-12 bg-surface-container-lowest border border-outline-variant/15 rounded-xl hover:bg-surface-container transition-colors text-on-surface font-label text-sm font-semibold">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDpBXGGC4NHCe74HifHPR0jEilwB4IjF1XoG9pT8Cseyf5ofqZ4ItnPH9ITvmvopqsuYj1GzZ8NyErjShjOg6GCRhhWSOVZT3XnurbeaNNIQ1S-2utmRuqZdW3vRxlx9AUWhwkWVPyvX9_DyLopTVMBR_VF48_3VI5kad1cKjrT8SKS8ST2JsbNqrtBCz7yf3s6Wa8i-NSe9m8iKTGZ1N7IXz-UCbtbauScY3wQn_43xnmgLYfXa1S_sntEbpvgoTzWHZ4pHfv"
                alt="Microsoft"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              Continue with Microsoft
            </Button>

            {/* Apple */}
            <Button variant="outline" className="flex items-center justify-center gap-3 h-12 bg-surface-container-lowest border border-outline-variant/15 rounded-xl hover:bg-surface-container transition-colors text-on-surface font-label text-sm font-semibold">
              <Apple size={20} />
              Continue with Apple
            </Button>

            {/* Facebook */}
            <Button variant="outline" className="flex items-center justify-center gap-3 h-12 bg-surface-container-lowest border border-outline-variant/15 rounded-xl hover:bg-surface-container transition-colors text-on-surface font-label text-sm font-semibold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.0729C24 5.40534 18.6274 0 12 0C5.37258 0 0 5.40534 0 12.0729C0 18.1006 4.38823 23.1006 10.125 24V15.5625H7.07812V12.0729H10.125V9.41624C10.125 6.38622 11.9165 4.71447 14.6576 4.71447C15.9705 4.71447 17.3438 4.95029 17.3438 4.95029V7.91572H15.8306C14.3399 7.91572 13.875 8.8465 13.875 9.80053V12.0729H17.2031L16.6711 15.5625H13.875V24C19.6118 23.1006 24 18.1006 24 12.0729Z" />
              </svg>
              Continue with Facebook
            </Button>

            {/* Slack */}
            <Button variant="outline" className="flex items-center justify-center gap-3 h-12 bg-surface-container-lowest border border-outline-variant/15 rounded-xl hover:bg-surface-container transition-colors text-on-surface font-label text-sm font-semibold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.52a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.521 2.52 2.528 2.528 0 0 1-2.521 2.522h-2.522V8.833zm-1.268 0a2.528 2.528 0 0 1-2.523 2.52 2.528 2.528 0 0 1-2.52-2.52V2.521A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.522 2.521v6.312zM15.166 18.956a2.528 2.528 0 0 1 2.522 2.523 2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.523-2.521v-2.523h2.523zm0-1.271a2.527 2.527 0 0 1-2.523-2.521 2.527 2.527 0 0 1 2.523-2.521h6.312A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.521 2.521h-6.313z"/>
              </svg>
              Continue with Slack
            </Button>
          </div>
        </section>

        {/* Footer Links */}
        <footer className="mt-12 text-center space-y-4">
          <p className="text-sm text-on-surface-variant">
            Need an account?{" "}
            <Link href="#" className="text-primary font-bold hover:underline">
              Setup Account
            </Link>
          </p>
          <div className="flex justify-center gap-4 text-xs font-medium text-on-surface-variant/60">
            <Link href="#" className="hover:text-on-surface">Privacy Policy</Link>
            <span>•</span>
            <Link href="#" className="hover:text-on-surface">Terms of Service</Link>
          </div>
        </footer>
      </main>

      {/* Decorative Bottom Image */}
      <div className="mt-12 w-full max-w-sm aspect-video rounded-3xl overflow-hidden editorial-shadow opacity-90 grayscale hover:grayscale-0 transition-all duration-700">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4hIGLq_k69AvXFunVwL-JD_geBofKD8P6HIq2HZTr28sbo3yyoFoUrUyrDmzmxhhPjkBSaP42KsQjgY0h6NoVUCBUGjbGWZkIbbU7Xq68sVc6bpTZ0aLvHvWrA-ECsrECiXfqNgMp3vLAwTWR9Si2xJI3nNWVt5APnRmS5I_ItPtwgoxgS6gbb4TnABEc2XqhorCMHbzfIxAuBaifkIWGNUZmoAVRrTIra2fwTc17xDAIdDD1IYeXZn7eiAR1652GjefJRYlc"
          alt="Close-up of high-quality cream colored paper textures with subtle shadows and minimalist composition"
          width={400}
          height={225}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

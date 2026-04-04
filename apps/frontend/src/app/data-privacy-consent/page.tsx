import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, ArrowRight } from "lucide-react";

export default function DataPrivacyConsent() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      {/* Suppressing Navigation Shell for Transactional/Onboarding Flow as per Blueprint */}
      <main className="w-full max-w-2xl">
        {/* Brand Header - Asymmetrical Layout */}
        <header className="mb-12 ml-4 md:ml-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary editorial-shadow">
              <Shield size={24} />
            </div>
            <h2 className="font-headline text-lg font-bold tracking-tighter text-on-surface">Serene Assembly</h2>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-primary-fixed max-w-md">
            Data Privacy &amp; Consent
          </h1>
        </header>

        {/* Consent Card */}
        <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 editorial-shadow relative overflow-hidden">
          {/* Decorative Subtle Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/20 blur-3xl -mr-32 -mt-32 rounded-full"></div>

          <div className="relative z-10 space-y-8">
            {/* Serene Explanation Section */}
            <section className="space-y-4">
              <p className="text-on-surface-variant leading-relaxed text-lg">
                In Serene Assembly, we treat your information with the same reverence as our spiritual records. To provide an organised experience for our congregation, we carefully maintain essential data that helps us shepherd and support each other effectively.
              </p>
              <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary/30">
                <p className="text-sm text-on-secondary-container font-medium uppercase tracking-wider mb-2">Our Commitment</p>
                <p className="text-on-surface-variant">
                  Your names, addresses, and spiritual roles are used exclusively for congregation management. We do not share this information with third parties or use it for commercial purposes.
                </p>
              </div>
            </section>

            {/* Consents Checklist */}
            <form className="space-y-6">
              <label htmlFor="contact-info" className="group flex items-start gap-4 p-4 rounded-xl transition-all cursor-pointer hover:bg-surface-container transition-colors">
                <div className="relative flex items-center mt-1">
                  <Checkbox id="contact-info" className="h-6 w-6 rounded border-outline-variant text-primary focus-visible:ring-primary focus-visible:ring-offset-surface-container-lowest transition-all" />
                </div>
                <div className="space-y-1">
                  <span className="block font-semibold text-on-surface group-hover:text-primary transition-colors">Contact Information</span>
                  <span className="block text-sm text-on-surface-variant">
                    I consent to the congregation maintaining my contact information (Address, Email, and Phone numbers) for internal communication and support. This information will only be shared with Elders and only when required to perform their role as shepherds within the congregation.
                  </span>
                </div>
              </label>

              <label htmlFor="role-visibility" className="group flex items-start gap-4 p-4 rounded-xl transition-all cursor-pointer hover:bg-surface-container transition-colors">
                <div className="relative flex items-center mt-1">
                  <Checkbox id="role-visibility" className="h-6 w-6 rounded border-outline-variant text-primary focus-visible:ring-primary focus-visible:ring-offset-surface-container-lowest transition-all" />
                </div>
                <div className="space-y-1">
                  <span className="block font-semibold text-on-surface group-hover:text-primary transition-colors">Role Visibility</span>
                  <span className="block text-sm text-on-surface-variant">
                    I consent to my spiritual role and assignments being visible to authorized administrators for coordination.
                  </span>
                </div>
              </label>

              <label htmlFor="terms-service" className="group flex items-start gap-4 p-4 rounded-xl transition-all cursor-pointer hover:bg-surface-container transition-colors">
                <div className="relative flex items-center mt-1">
                  <Checkbox id="terms-service" className="h-6 w-6 rounded border-outline-variant text-primary focus-visible:ring-primary focus-visible:ring-offset-surface-container-lowest transition-all" />
                </div>
                <div className="space-y-1">
                  <span className="block font-semibold text-on-surface group-hover:text-primary transition-colors">Terms of Service</span>
                  <span className="block text-sm text-on-surface-variant">
                    I agree to the Terms of Service and understand how my data helps maintain an organised congregation environment.
                  </span>
                </div>
              </label>

              {/* Interaction Zone */}
              <div className="pt-8 flex flex-col md:flex-row gap-4 items-center">
                <Button className="w-full md:w-auto px-8 py-6 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl editorial-shadow hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 border-none">
                  Accept and Continue
                  <ArrowRight size={20} />
                </Button>
                <Button variant="ghost" className="w-full md:w-auto px-8 py-6 text-on-secondary-container font-semibold hover:bg-surface-container transition-colors rounded-xl">
                  Review Later
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-8 text-center">
          <p className="text-sm text-on-surface-variant/60">
            You can update your privacy preferences at any time in the Profile settings.
          </p>
        </footer>
      </main>
    </div>
  );
}

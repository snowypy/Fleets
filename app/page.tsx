import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AllianceSection } from "@/components/community-section"
import { SupportSection } from "@/components/support-section"
import { FaqSection } from "@/components/faq-section"

export default function Page() {
  return (
    <div className="bg-black">
      <main>
        <HeroSection />
        <AllianceSection />
        <SupportSection />
        <FaqSection />
      </main>
    </div>
  )
}
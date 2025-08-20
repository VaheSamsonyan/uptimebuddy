import HeroSection from "@/app/pages/home/components/hero-section";
import ContactSection from "@/app/pages/home/components/contact-section";
import InfoSection from "@/app/pages/home/components/info-section";
import GlobalBackgroundWrapper from "@/app/pages/home/components/core/global-wrapper";

export default function HomePage() {
  return (
    <GlobalBackgroundWrapper>
      <HeroSection />
      <InfoSection />
      <ContactSection />
    </GlobalBackgroundWrapper>
  );
}

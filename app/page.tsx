import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Symptoms from "@/components/Symptoms";
import ROICalculator from "@/components/ROICalculator";
import Services from "@/components/Services";
import Wins from "@/components/Wins";
import Tracks from "@/components/Tracks";
import Comparison from "@/components/Comparison";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Proof from "@/components/Proof";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ActivityToast from "@/components/ActivityToast";
import ScrollProgress from "@/components/ScrollProgress";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Symptoms />
      <ROICalculator />
      <Services />
      <Wins />
      <Tracks />
      <Comparison />
      <Process />
      <Team />
      <Proof />
      <FAQ />
      <CTA />
      <Footer />
      <StickyCTA />
      <ActivityToast />
    </main>
  );
}

import CallToAction from "./components/cta/callToAction";
import DownloadSection from "./components/download/download";
import FAQSection from "./components/faq/faq";
import FeaturesSection from "./components/features/featuresSection";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import NavBar from "./components/navBar/navBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <FeaturesSection />
        <DownloadSection />
        <FAQSection />
      </main>
      <footer>
        <CallToAction />
        <Footer />
      </footer>
    </>
  );
}

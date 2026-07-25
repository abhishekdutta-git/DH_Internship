import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ResultsTestimonials from "@/components/ResultsTestimonials";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Services />
        <ResultsTestimonials />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

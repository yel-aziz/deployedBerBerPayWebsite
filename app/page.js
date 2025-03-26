"use client";

import { useState } from "react";
import HowItWorksSection from "../components/About";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppDownloadBanner from "@/components/StickyButton";

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <AppDownloadBanner />
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <HowItWorksSection />
      {/* Contact Section */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}

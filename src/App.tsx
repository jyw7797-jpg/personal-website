import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CaseDetail from "./components/CaseDetail";
import CapabilityJourney from "./components/CapabilityJourney";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NextValueSection from "./components/NextValueSection";
import SelectedCases from "./components/SelectedCases";
import SideNav from "./components/SideNav";
import WorkingPrinciples from "./components/WorkingPrinciples";
import type { Language } from "./data/content";

function HomePage({ language }: { language: Language }) {
  return (
    <>
      <SideNav language={language} />
      <main>
        <Hero language={language} />
        <CapabilityJourney language={language} />
        <SelectedCases language={language} />
        <NextValueSection language={language} />
        <WorkingPrinciples language={language} />
      </main>
    </>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem("language") as Language | null) ?? "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  }, [language]);

  return (
    <BrowserRouter>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/case/:caseId" element={<CaseDetail language={language} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

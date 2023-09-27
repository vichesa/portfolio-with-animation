import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
// import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div class="container mx-auto py-12 px-4 mt-16">
        <HeroSection />
        <AboutMe />
        <ProjectSection />
        {/* <EmailSection /> */}
      </div>
      <Footer />
    </main>
  );
}

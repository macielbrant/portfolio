import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProfessionalGoal from '@/components/ProfessionalGoal';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Languages from '@/components/Languages';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProfessionalGoal />
        <Experience />
        <Education />
        <Languages />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

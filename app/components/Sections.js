import Hero from "./Hero";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
const Sections = () => {
  return (
    <div className="relative z-10 ">
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default Sections;
// bg-black mb-40

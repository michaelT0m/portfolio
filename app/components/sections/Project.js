import Section from "@/app/features/Section";
import Card from "@/app/features/Card";

const Project = () => {
  return (
    <Section id="projects">
      <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-neutral-900 to-white text-transparent bg-clip-text bg-white">
        Project
      </h2>
      <div className="py-10">

       <div className="flex flex-col md:flex-row gap-4 ">
         <Card />
         <Card />
         <Card />
       </div>
      </div>
    </Section>
  );
};

export default Project;

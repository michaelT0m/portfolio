import Section from "@/app/features/Section";
import Card from "@/app/features/Card";
import { projectItems } from "@/app/constant/data";

const Project = () => {
  return (
    <Section id="projects">
      {/* <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-neutral-900 to-white text-transparent bg-clip-text bg-white"> */}
      <h2 className="text-4xl md:text-6xl font-bold text-center">
        My Projects
      </h2>
      <div className="py-10">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {projectItems.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Project;

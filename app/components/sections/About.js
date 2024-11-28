import Section from "@/app/features/Section";

const About = () => {
  return (
    <Section
      id="about"
      className="bg-white dark:bg-black"
      sectionName="About Me"
      width="w-full"
    >
      <div className="w-4/5 mx-auto">
        <p className="text-4xl md:text-6xl font-bold dark:text-neutral-200">
          I am a passionate web developer specialized in crafting visually
          appealing websites that are responsive, functional and user-friendly
        </p>
      </div>
    </Section>
  );
};

export default About;

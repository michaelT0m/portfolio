import Section from "@/app/features/Section";

const About = () => {
  return (
    <Section id="about">
      <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-neutral-900 to-white text-transparent bg-clip-text">
        About Me
      </h2>
      <div className="py-10">
        <p className="text-6xl font-bold ">
          I am a passionate web developer specialized in crafting visually
          appealing websites that are responsive, functional and user-friendly
        </p>
      </div>
      {/* <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
        I am a passionate web developer specialized in crafting visually
        appealing websites that are responsive, functional and user-friendly
      </h1> */}
    </Section>
  );
};

export default About;

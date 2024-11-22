import Section from "@/app/features/Section"
import Button from "../ui/Button";
const Contact = () => {
  return (
    <Section id="contact">
      <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-neutral-900 to-white text-transparent bg-clip-text">
        Contact Me
      </h2>
      <div className="py-10 space-y-6">
        <p className="text-center font-bold text-xl md:text-4xl text-neutral-200">
          Ready to start a project together? Reach out to me via{" "}
          <a
            href="mailto:mic81070@gmail.com"
            className="bg-gradient-to-r from-neutral-700 to-white/90 text-transparent bg-clip-text"
          >
            email
          </a>{" "}
          or connect with me on Social Media
        </p>
        <div className="flex justify-center ">
          <Button text="Send me a Message" href="mailto:" icon />
        </div>
      </div>
    </Section>
  );
}

export default Contact

import Section from "@/app/features/Section"
import Button from "@/app/components/ui/Button";

const Contact = () => {
  return (
    <Section id="contact" sectionName="Contact Me" contentStyle="space-y-10">
        <p className="text-center font-bold text-xl md:text-4xl text-neutral-500 dark:text-neutral-200">
          Ready to start a project together? Reach out to me via email or
          connect with me on Social Media
        </p>
        <div className="flex justify-center ">
          <Button
            text="Send me a Message"
            href="mailto:mic81070@gmail.com"
            icon
          />
      </div>
    </Section>
  );
}

export default Contact

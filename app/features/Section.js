const Section = ({ children, id, className="", width="w-4/5", p="py-16" }) => {
  return (
    <section
      id={id}
      className={`mx-auto ${p} ${width} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;

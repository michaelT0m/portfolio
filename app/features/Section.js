const Section = ({ children, id, className="", width="w-4/5" }) => {
  return (
    <section
      id={id}
      className={`mx-auto ${width} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;

const Section = ({
  children,
  id,
  className = "",
  width = "w-4/5",
  p = "py-16",
  sectionName = "",
  contentStyle = "",
}) => {
  return (
    <section id={id} className={`mx-auto ${p} ${width} ${className}`}>
      <h2 className="text-4xl md:text-6xl font-bold text-center ">
        {sectionName}
      </h2>
      <div className={`py-10 ${contentStyle}`}>{children}</div>
    </section>
  );
};

export default Section;
/*
 <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-neutral-900 to-white text-transparent bg-clip-text">
          About Me
        </h2>
*/
/*
  <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
        I am a passionate web developer specialized in crafting visually
        appealing websites that are responsive, functional and user-friendly
      </h1>
*/

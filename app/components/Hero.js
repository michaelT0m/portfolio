function Hero() {
  return (
    <main
      id="hero"
      className="h-screen flex items-center mx-auto w-4/5 relative heroBg"
    >
      <div className="text-start md:text-center w-full ">
        <p className="text-xl font-medium text-neutral-400 font-mono">
          Hello My Name is,
        </p>
        <h1 className="text-4xl md:text-8xl font-bold dark:text-neutral-100 animate-fadeIn">
          Michael Tom<span className="dark:text-white font-mono">.</span>
        </h1>
        <p className="text-4xl lg:text-nowrap md:text-6xl font-bold text-neutral-500 dark:text-neutral-400 font-sans animate-fadeIn">
          I am a Frontend Web Developer.
        </p>
      </div>
    </main>
  );
}

export default Hero;

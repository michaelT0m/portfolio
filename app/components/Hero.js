import { LuArrowDown } from "react-icons/lu";
function Hero() {
  return (
    <main className="h-screen flex items-center mx-auto w-4/5 relative">
      <div className="text-center w-full ">
        <p className="text-xl font-medium text-neutral-400 font-mono">
          Hello My Name is,
        </p>
        <h1 className="text-4xl md:text-8xl font-bold text-neutral-100 animate-fadeIn ">
          Michael Tom<span className="text-white font-mono">.</span>
        </h1>
        <p className="text-xl text-nowrap md:text-6xl font-bold text-neutral-400 font-sans ">
          I am a Frontend Web Developer <span>.</span>
        </p>
        {/* <div className="absolute bottom-4 right-1/2">
          <LuArrowDown className="p-1 size-10 border-2 rounded-full" />
        </div> */}
      </div>
    </main>
  );
}

export default Hero;

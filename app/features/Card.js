import { LuArrowUpRight } from "react-icons/lu";
export default function Card({ title, description }) {
  return (
    <div className="max-w-96 rounded-xl p-8 bg-gradient-to-tr from-[hsl(231,14%,90%)] to-white dark:from-[hsl(231,14%,10%)] dark:to-black text-center space-y-4">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="text-xl font-medium">{description}</p>
      <div className="w-full flex justify-center">
        <LuArrowUpRight className="text-4xl border-2 border-neutral-500 rounded-full p-1" />
      </div>
    </div>
  );
}
// from-[hsl(231,14%,10%)] to-black
// #18181b

/*
I'm a student and developer, passionate about programming since I was 12 years old. I'm 16 years old, I live in Pirituba, São Paulo, and I'm studying Systems Development at Etec Jaraguá. I'm doing an internship as a Web Developer at Focus Têxtil, where I work with technologies such as Node.js, React, Express, Nest, Angular and React Native with TypeScript. I'm currently studying C# and MySQL.

In my free time, I like to play video games, play volleyball, listen to music, watch movies and series, as well as travel and develop projects. I'm excited to explore technology further and collaborate on innovative projects!
*/

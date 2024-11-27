import { LuArrowUpRight } from "react-icons/lu";
export default function Card({ title, description }) {
  return (
    <div className="max-w-96 rounded-xl p-8 bg-gradient-to-tr from-[hsl(231,14%,10%)] to-black text-center space-y-4">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="text-xl font-medium">{description}</p>
      <div className="w-full flex justify-center">
        <LuArrowUpRight className="text-4xl border-2 border-neutral-500 rounded-full p-1" />
      </div>
    </div>
  );
}

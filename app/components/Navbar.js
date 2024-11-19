import Link from "next/link";
import { navItems } from "../constant/data";
const Navbar = () => {
  return (
    <header className={`fixed w-full backdrop-blur-sm`}>
      <nav className="mx-auto w-4/5 py-2 flex h-16 justify-between items-center">
        <div>
          <div className="size-10 rounded-full flex justify-center items-center font-bold text-xl bg-black">
            MT
          </div>
        </div>
        <div>
          <ul className="flex gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>{item.pathName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

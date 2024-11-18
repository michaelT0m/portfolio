import Link from "next/link";
import { navItems } from "../constant/data";
const Navbar = () => {
  return (
    <header className="fixed w-full">
      <nav className="mx-auto w-4/5 py-2 flex justify-between items-center">
        <div>MT</div>
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

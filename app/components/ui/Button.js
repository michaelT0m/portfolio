"use client";
import Link from "next/link";
import { LuSendHorizonal } from "react-icons/lu";
export default function Button({
  text = "Learn More",
  href = "/",
  onClick,
  className,
  ibtn,
  padding = "p-4",
  Icon = LuSendHorizonal,
  alabel="links"
}) {
  return (
    <Link
      href={href}
      className={`bg-transparent dark:bg-neutral-100 rounded-lg ${padding} select-none text-black/90 font-bold text-xl block ${className}`}
      onClick={onClick}
      aria-label={alabel}
      target="_blank"
    >
      {ibtn ? (
        <Icon />
      ) : (
        <span className={`${Icon && "flex items-center gap-4"}`}>
          {text} {Icon && <Icon />}
        </span>
      )}
    </Link>
  );
}

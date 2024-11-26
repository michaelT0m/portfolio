"use client";
import Link from "next/link";
import { LuSendHorizonal } from "react-icons/lu";
export default function Button({
  text = "Learn More",
  href = "/",
  onClick,
  className,
  icon,
  ibtn,
  padding = "p-4",
  RIcon = LuSendHorizonal,
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent dark:bg-neutral-100 rounded-lg ${padding} select-none`}
    >
      {ibtn ? (
        <Link
          href={href}
          className={`text-black/90 font-bold text-xl  ${className}`}
        >
          <RIcon className="" />
        </Link>
      ) : (
        <Link
          href={href}
          className={`text-black/90 font-bold text-xl  ${className} ${
            icon && "flex items-center justify-center gap-2"
          }`}
        >
          {text}
          {icon && (
            <span>
              <RIcon className="" />
            </span>
          )}
        </Link>
      )}
    </button>
  );
}

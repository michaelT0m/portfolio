"use client"
const pageCSS = `

* {
  scroll-behavior: smooth;
}
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #000000;
    --foreground: #ededed;
  }
}

body {
  background: linear-gradient(to right, #33333346 1px, transparent 1px),
    linear-gradient(to bottom, #33333346 1px, transparent 1px);
  background-size: 70px 70px;
  color: var(--foreground);
  /* background: var(--background); */
  background-color: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}
`;

export function MyStyles() {
  const style = document.createElement("style");
  const head = document.querySelector("head");
  head.appendChild(style);
  style.innerHTML = pageCSS;
}

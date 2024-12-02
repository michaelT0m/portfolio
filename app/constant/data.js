import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

export const navItems = [
  {
    id: 1,
    path: "#about",
    pathName: "About",
  },
  {
    id: 2,
    path: "#projects",
    pathName: "Projects",
  },
  {
    id: 3,
    path: "#contact",
    pathName: "Contact",
  },
];

export const socialIcons = [
  {
    id: 0.3,
    Icon: LuMail,
    name: "",
    link: "mailto:mic81070@gmail.com",
  },
  {
    id: 0,
    Icon: LuGithub,
    name: "",
    link: "https://github.com/michaeltom1",
  },
  {
    id: 1,
    Icon: FaXTwitter,
    name: "",
    link: "https://x.com/mic81070",
  },
  {
    id: 2,
    Icon: LuLinkedin,
    name: "",
    link: "https://www.linkedin.com/in/michael-tom-7924a6333/",
  },
];

export const projectItems = [
  {
    id: 1,
    title: "Note App",
    description:
      "Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    title: "Blog Site",
    description:
      "Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

export const theme =
  "bg-light-background text-light-foreground dark:bg-dark-background dark:text-dark-foreground bg-bgSize bg-gridBg dark:bg-gridBgDark scroll-smooth selection:bg-[#2c2c75c5]";

/*
  ::selection {
  background-color: #15161c;
  color: #fcfafa;
  color: #15161c;
}

::-moz-selection {
  background-color: #ffcc00;
  color: #000;
}
  */

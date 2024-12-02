"use client";
import Section from "@/app/features/Section";
import Card from "@/app/features/Card";
import { projectItems } from "@/app/constant/data";
import Image from "next/image";
import { test } from "@/app/assets/asset";

const Project = () => {
  return (
    <Section id="projects" sectionName="My Projects">
      {/* <div>
        <div className="rounded-br-xl rounded-tl-xl overflow-hidden max-w-2xl bg-secondary">
          <Image src={test} alt="" className="bg-neutral-800 h-80 w-full object-cover" />
          <div className="p-4 space-y-4">
            <h3 className="text-4xl font-bold">The Title</h3>
            <p className="font-medium text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad, aut eaque tempore voluptate nihil tenetur iusto accusamus atque officiis quis ullam esse natus praesentium modi, eligendi placeat nisi quaerat.
            </p>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        {projectItems.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Project;

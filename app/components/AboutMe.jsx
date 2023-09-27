"use client";
import Image from "next/image";
import TabButton from "./TabButton";
import React, { useState, useTransition } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

const aboutMeTabs = [
  {
    tabActive: "skills",
    tabName: "Skills",
    content: ["HTML + CSS", "JavaScript", "React Js"],
  },
  {
    tabActive: "educations",
    tabName: "Educations",
    content: [
      "Bachelor Degree of Astronomy, Institut Teknologi Bandung",
      "Fullstact Web Development Bootcamp at dibimbing.id",
    ],
  },
  {
    tabActive: "certificates",
    tabName: "Certificates",
    content: [
      "Deanlist of FMIPA ITB 2016",
      "Top 5 students of Fillstact Web Development Bootcamp Batch 1 at dibimbing.id",
    ],
  },
];

const AboutMe = () => {
  const [tabActive, setTabActive] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabActive = (id) => {
    startTransition(() => {
      setTabActive(id);
    });
  };

  const activeTabContent = aboutMeTabs.find(
    (tab) => tabActive === tab.tabActive
  ).content;

  return (
    <section className="text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="place-self-center"
          src="/images/about-image.png"
          width={500}
          height={500}
        />
        <div className="lg:p-0 lg:m-0 h-full">
          <h2 className="text-3xl lg:text-5xl font-bold ">About Me</h2>
          <p className="mt-4 text-[#ADB7BE]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            impedit inventore voluptate ipsa vitae consequuntur non nesciunt
            beatae, quod totam praesentium, ipsam dolor mollitia necessitatibus
            temporibus, autem pariatur esse ullam numquam quidem recusandae
            dignissimos excepturi? Neque perferendis maiores natus accusantium!
          </p>
          <div className="flext flex-row justify-start mt-6">
            {aboutMeTabs.map((tab, index) => (
              <TabButton
                key={index}
                tabActive={tabActive === tab.tabActive}
                handleTabActive={() => handleTabActive(tab.tabActive)}
                tabName={tab.tabName}
              />
            ))}
          </div>
          <div className="mt-4">
            <ul className="list-disc pl-5">
              {activeTabContent.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

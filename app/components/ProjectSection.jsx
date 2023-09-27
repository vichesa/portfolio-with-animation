"use client";
import { useState, useTransition } from "react";
import ProjectCard from "./ProjectCards";
import ProjectTab from "./ProjectTab";

const projectTag = ["All", "Web", "Mobile"];

const projectData = [
  {
    id: 1,
    title: "Video 1",
    description: "Lorem ipsum dolor sit amet consectetur",
    imageUrl: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vichesa/my-blog",
    previewUrl: "https://www.youtube.com/watch?v=8RMGulQ8S_Y",
  },
  {
    id: 2,
    title: "Video 2",
    description: "Lorem ipsum dolor sit amet consectetur",
    imageUrl: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vichesa/my-blog",
    previewUrl: "https://www.youtube.com/watch?v=8RMGulQ8S_Y",
  },
  {
    id: 3,
    title: "Video 3",
    description: "Lorem ipsum dolor sit amet consectetur",
    imageUrl: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/vichesa/my-blog",
    previewUrl: "https://www.youtube.com/watch?v=8RMGulQ8S_Y",
  },
  {
    id: 4,
    title: "Video 4",
    description: "Lorem ipsum dolor sit amet consectetur",
    imageUrl: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/vichesa/my-blog",
    previewUrl: "https://www.youtube.com/watch?v=8RMGulQ8S_Y",
  },
];

const ProjectSection = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [isPending, startTransition] = useTransition();

  const handleProjectTag = (id) => {
    startTransition(() => {
      setActiveTag(id);
    });
  };

  const projectFilter = projectData.filter((pr) => pr.tag.includes(activeTag));
  console.log("filter", projectFilter);

  return (
    <div>
      <h2 className="text-3xl lg:text-5xl font-bold text-center">
        My Projects
      </h2>
      <div className="flex flex-cols justify-center gap-4 mt-6">
        {projectTag.map((proj, index) => (
          <ProjectTab
            key={index}
            name={proj}
            handleProjectTab={() => handleProjectTag(proj)}
            activeTag={activeTag === proj}
          />
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {projectFilter.map((project) => (
          <ProjectCard
            key={project.id}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;

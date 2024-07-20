import Link from "next/link";
import { Section } from "@/components/section";
import projectsJson from "@/data/projects.json";

interface ProjectItemProps {
  name: string;
  description: string;
  tags: string[];
  link: string;
}

function ProjectItem({ name, description, tags, link }: ProjectItemProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="block border-2 border-violet-light rounded-lg hover:shadow-lg hover:-translate-y-2 transition-all duration-200 p-4"
    >
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <p className="text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-violet-dark text-white text-xs px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function ProjectsSection() {
  return (
    <Section.Root id="projects">
      <Section.Title>projects</Section.Title>
      <Section.Description>
        Here are some of the projects I have worked on.
      </Section.Description>
      <Section.Content>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projectsJson.map((project) => (
            <li key={project.name}>
              <ProjectItem {...project} />
            </li>
          ))}
        </ul>
      </Section.Content>
    </Section.Root>
  );
}

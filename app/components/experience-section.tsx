import { Section } from "@/components/section";
import experienceJson from "@/data/experience.json";

interface ExperienceItemProps {
  startDate: string;
  endDate: string;
  jobDescription: string;
  company: string;
  about: string;
}

function ExperienceItem({
  startDate,
  endDate,
  jobDescription,
  company,
  about,
}: ExperienceItemProps) {
  return (
    <div className="mb-8">
      <span className="text-sm text-gray-500">
        {startDate} - {endDate}
      </span>
      <h3 className="font-bold text-lg mb-2">{company}</h3>
      <p className="mb-4">
        <mark className="bg-violet-light px-2">{jobDescription}</mark>
      </p>
      <p>{about}</p>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <Section.Root id="experience">
      <Section.Title>experience</Section.Title>
      <Section.Description>
        Here are the places I&apos;ve worked and the things I&apos;ve done in
        tech.
      </Section.Description>
      <Section.Content>
        {experienceJson.map((experience) => (
          <ExperienceItem key={experience.company} {...experience} />
        ))}
      </Section.Content>
    </Section.Root>
  );
}

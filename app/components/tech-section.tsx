import { Section } from "@/components/section";
import { TechList } from "@/components/tech-list";
import techJson from "@/data/tech.json";

export function TechSection() {
  return (
    <Section.Root id="tech">
      <Section.Title>tech stack</Section.Title>
      <Section.Description>
        Here is some of the tech I enjoy working with:
      </Section.Description>
      <Section.Content>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <TechList title="I use everyday" list={techJson.useEveryday} />
          <TechList title="I've used on the job" list={techJson.usedOnTheJob} />
          <TechList title="I've messed with" list={techJson.messedWith} />
          <TechList title="I'm learning about" list={techJson.learning} />
        </ul>
      </Section.Content>
    </Section.Root>
  );
}

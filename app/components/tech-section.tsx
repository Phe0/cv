import { TechList } from "@/components/tech-list";
import techJson from "@/data/tech.json";

export function TechSection() {
  return (
    <section id="tech" className="w-full">
      <h2 className="font-bold text-2xl mb-2 sm:text-3xl">tech stack</h2>
      <p className="w-3/5 min-w-72 mb-6">
        Here is some of the tech I enjoy working with:
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <TechList title="I use everyday" list={techJson.useEveryday} />
        <TechList title="I've used on the job" list={techJson.usedOnTheJob} />
        <TechList title="I've messed with" list={techJson.messedWith} />
        <TechList title="I'm learning about" list={techJson.learning} />
      </ul>
    </section>
  );
}

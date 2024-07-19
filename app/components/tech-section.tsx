import techJson from "../../data/tech.json";

interface ListCardProps {
  title: string;
  list: string[];
}

function ListCard({ title, list }: ListCardProps) {
  return (
    <li>
      <h3 className=" font-bold text-lg mb-2">
        <mark className="bg-violet-light px-2">{title}</mark>
      </h3>
      <ul>
        {list.map((tech) => (
          <li key={tech} className="text-base">
            {tech}
          </li>
        ))}
      </ul>
    </li>
  );
}

export function TechSection() {
  return (
    <section id="tech" className="w-full">
      <h2 className="font-bold text-2xl mb-2 sm:text-3xl">tech stack</h2>
      <p className="w-3/5 min-w-72 mb-6">
        Here is some of the tech I enjoy working with:
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ListCard title="I use everyday" list={techJson.useEveryday} />
        <ListCard title="I've used on the job" list={techJson.usedOnTheJob} />
        <ListCard title="I've messed with" list={techJson.messedWith} />
        <ListCard title="I'm learning about" list={techJson.learning} />
      </ul>
    </section>
  );
}

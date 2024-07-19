interface ListCardProps {
  title: string;
  list: string[];
}

export function TechList({ title, list }: ListCardProps) {
  return (
    <li>
      <h3 className=" font-bold text-lg mb-2">
        <mark className="bg-violet-light px-2">{title}</mark>
      </h3>
      <ul className="ml-2">
        {list.map((tech) => (
          <li key={tech} className="text-base">
            {tech}
          </li>
        ))}
      </ul>
    </li>
  );
}

import { PropsWithChildren } from "react";

function Root({ id, children }: PropsWithChildren<{ id: string }>) {
  return (
    <section id={id} className="w-full mb-16">
      {children}
    </section>
  );
}

function Title({ children }: PropsWithChildren) {
  return <h2 className="font-bold text-2xl mb-2 sm:text-3xl">{children}</h2>;
}

function Description({ children }: PropsWithChildren) {
  return <p className="w-3/5 min-w-72 mb-6">{children}</p>;
}

function Content({ children }: PropsWithChildren) {
  return children;
}

export const Section = {
  Root,
  Title,
  Description,
  Content,
};

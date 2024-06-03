import { CustomLink } from "@/components/custom-link";

export function MainSection() {
  return (
    <section className="flex flex-col justify-center h-[60vh]">
      <span className="text-black text-sm sm:text-base">hey, I&apos;m</span>
      <h1 className="font-bold text-4xl mb-4 sm:text-6xl sm:mb-6 mt-[-12px]">
        pedro féo
      </h1>
      <h2 className="sm:text-2xl text-xl text-black font-bold flex mb-10">
        <mark className="bg-violet-light px-2">
          software engineer | frontend dev | fullstack dev
        </mark>
      </h2>
      <p className="w-3/5 min-w-80">
        I&apos;m a software engineer with a passion for frontend development,
        though I&apos;ve worn many hats and tackled fullstack roles as well.
        Currently, I&apos;m a developer consultant at{" "}
        <CustomLink href="https://www.thoughtworks.com/">
          Thoughtworks
        </CustomLink>
        , helping clients craft fantastic user experiences. Outside of code, you
        can find me on the volleyball court!
      </p>
    </section>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col">
      <span className="text-black">hey, I&apos;m</span>
      <h1 className="font-bold text-4xl mb-4 sm:text-6xl sm:mb-6">pedro féo</h1>
      <h2 className="sm:text-2xl text-xl text-black font-bold flex mb-10">
        <mark className="bg-violet-light px-2">
          software engineer | frontend dev | fullstack dev
        </mark>
      </h2>
      <p className="w-3/5 min-w-72">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        aliquid quaerat consectetur nulla dignissimos accusamus facilis eligendi
        enim numquam explicabo, ab quam eum quasi, unde dicta repellat
        consequatur, facere nam.
      </p>
    </section>
  );
}

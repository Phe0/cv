import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";

export function ContactSection() {
  return (
    <Section.Root id="contact">
      <Section.Title>contact</Section.Title>
      <Section.Description>
        Open to new opportunities! Feel free to reach out for projects,
        questions, or just a chat. I&apos;ll get back to you as soon as I can.
      </Section.Description>
      <Section.Content>
        <ButtonLink href="mailto:pedrohafeo@gmail.com">Say Hi!</ButtonLink>
      </Section.Content>
    </Section.Root>
  );
}

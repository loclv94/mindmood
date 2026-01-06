import Link from "next/link";
import { Container } from "@/components/layouts/Container";

export const ContactSection = () => {
  return (
    <Container className="text-center py-10">
      <p className="text-neutral-600 font-light leading-[22.1px] my-[11.05px] font-museo_sans_rounded">
        MindMood.ai
        <br className="box-border caret-transparent" />
        1290 N. Palm Avenue (Bay Plaza Exec Ctr), Suite 108, Sarasota, FL,
        34236, US
      </p>
      <p className="text-neutral-600 font-light leading-[22.1px] my-[11.05px] font-museo_sans_rounded">
        <Link
          href="/privacy-policy/"
          className="text-brand max-w-full hover:text-slate-300"
        >
          Privacy Policy
        </Link>
      </p>
    </Container>
  );
};

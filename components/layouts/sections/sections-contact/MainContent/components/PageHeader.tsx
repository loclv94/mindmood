import { Container } from "@/components/layouts/Container";

export const PageHeader = () => {
  return (
    <Container>
      <main
        role="main"
        className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] mx-auto py-5"
      >
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <section className="box-border caret-transparent">
              <div className="clear-both">
                <h1 className="text-[19.5px] leading-[27.3px] text-center mb-3.5 font-museo_sans_rounded">
                  CONTACT
                </h1>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Container>
  );
};

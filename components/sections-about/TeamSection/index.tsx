import { TeamMember } from "./components/TeamMember";
import { Divider } from "@/components/Divider";
import { Container } from "@/components/Container";

export const TeamSection = () => {
  return (
    <div className="text-slate-700 bg-gray-100 box-border caret-transparent clear-both float-left min-h-[100px] w-full">
      <Container>
        <div className="relative caret-transparent clear-left float-left min-h-px w-full z-[1] mx-auto py-[50px]">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent block float-left table-fixed w-full md:table">
                <TeamMember name="Wendy Haggerty" showImage={false} />
                <div className="box-border caret-transparent table-cell w-[6%]"></div>
                <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent block min-h-px align-top w-full z-[1] ml-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[64.6667%] md:ml-[6%] md:mb-0">
                  <section className="box-border caret-transparent">
                    <div className="box-border caret-transparent clear-both">
                      <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                        Wendy Haggerty, LMFT, AASECT-Certified Sex Therapist
                        &amp; Supervisor, brings a wealth of expertise to the
                        mindmood team. As the founder of Sex and Love Therapy in
                        Connecticut and Florida, Wendy and her team have
                        provided invaluable support to thousands of individuals,
                        couples, and partners over many years. Her dedication
                        extends beyond the therapy room, as she has also
                        imparted her knowledge as a former professor of Family
                        Therapy, Human Sexuality, &amp; Systemic Sex Therapy at
                        the University of Saint Joseph.
                      </p>
                      <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                        Wendy’s commitment to advancing the field is evident in
                        her active involvement with AASECT (American Association
                        of Sexuality Educators, Counselors, and Therapists) over
                        the past decade. She has generously contributed her time
                        and expertise, serving in various capacities including
                        her current role on the Board of Directors and as the
                        Certification Steering Committee Chair.
                      </p>
                      <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                        Wendy’s passion for promoting sexual health and
                        well-being aligns seamlessly with mindmood’s mission to
                        provide inclusive and affirming mental health support.
                        With her extensive experience and dedication to
                        advancing the field, Wendy plays a pivotal role in
                        ensuring that mindmood remains at the forefront of
                        accessible and compassionate care.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
              <Divider />
              <div className="box-border caret-transparent block float-left table-fixed w-full mt-[50px] md:table">
                <TeamMember
                  name="Leah Diggle"
                  imageUrl="https://c.animaapp.com/mjr473f9JvwhGf/assets/Leya-Headshot-11-24-687x1030.jpg"
                  showImage={true}
                />
                <div className="box-border caret-transparent table-cell w-[6%]"></div>
                <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent block min-h-px align-top w-full z-[1] ml-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[64.6667%] md:ml-[6%] md:mb-0">
                  <section className="box-border caret-transparent">
                    <div className="box-border caret-transparent clear-both">
                      <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                        Leah Diggle is a passionate leader and advocate for
                        mental health, with a particular focus on supporting
                        marginalized and minority populations. With a career
                        spanning over two decades, Leah has amassed a wealth of
                        experience working with various companies to support
                        operations and has successfully launched her own
                        startups along the way.
                      </p>
                      <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                        Throughout her career, Leah has demonstrated a deep
                        commitment to ensuring that mental health services are
                        stigma-free and accessible to all individuals. Her drive
                        to break down barriers and provide inclusive support has
                        been a driving force behind her work.
                      </p>
                      <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                        In addition to her extensive experience working with
                        companies to optimize operations, Leah has also played a
                        pivotal role in launching and scaling successful
                        startups. Her entrepreneurial spirit and innovative
                        mindset have enabled her to identify gaps in the market
                        and develop solutions to address them effectively.
                      </p>
                      <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                        As the CEO and founder of Pineapple Support, a 501c3
                        nonprofit organization, Leah leads efforts to provide
                        essential mental health support to adult industry
                        professionals. Under her leadership, Pineapple Support
                        has become a beacon of hope for individuals within the
                        adult industry, offering a safe and confidential space
                        to access the care they need.
                      </p>
                      <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                        Leah’s tireless dedication to mental health advocacy and
                        her track record of success in both corporate and
                        startup environments make her a formidable force in the
                        field. Through her leadership and vision, she continues
                        to make significant strides towards creating a more
                        inclusive and supportive world for individuals
                        struggling with mental health challenges.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
              <Divider />
              <div className="box-border caret-transparent block float-left table-fixed w-full mt-[50px] md:table">
                <TeamMember
                  name="Daniel Keating"
                  imageUrl="https://c.animaapp.com/mjr473f9JvwhGf/assets/20856786-0-801x1030.jpg"
                  imageWidth="w-[801px]"
                  imageAspectRatio="aspect-[auto_801_/_1030]"
                  imageSizes="(max-width: 801px) 100vw, 801px"
                  showImage={true}
                />
                <div className="box-border caret-transparent table-cell w-[6%]"></div>
                <div className="relative bg-white shadow-[rgb(209,215,218)_0px_0px_10px_0px] box-border caret-transparent block min-h-px align-top w-full z-[1] ml-0 mb-5 p-[3%] rounded-[25px] md:table-cell md:w-[64.6667%] md:ml-[6%] md:mb-0">
                  <section className="box-border caret-transparent">
                    <div className="box-border caret-transparent clear-both">
                      <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                        Daniel Keating is the CEO and founder of SirenAI, a
                        pioneering company delivering AI-driven interactive
                        solutions for some of the most prominent digital
                        platforms. Under his leadership, a 30-person team has
                        built and deployed technologies that transform user
                        engagement and create scalable new revenue streams
                        across more than 40 partner platforms and agencies.
                      </p>
                      <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                        Before launching SirenAI, Daniel spent thousands of
                        hours as a volunteer first responder on a suicide
                        prevention hotline, supporting people in moments of
                        acute crisis. That frontline experience instilled in him
                        both a deep empathy for the human condition and a
                        conviction that technology should ultimately serve
                        people, not the other way around. This ethos shapes his
                        approach at mindmood: leveraging cutting-edge AI not
                        just for efficiency or scale, but to create interactions
                        that feel authentic, human, and meaningful.
                      </p>
                      <p className="text-neutral-600 text-[15.6px] font-light box-border caret-transparent leading-[24.96px] my-[13.26px] font-museo_sans_rounded">
                        Daniel’s unique blend of technical expertise and
                        crisis-response experience makes him a rare kind of
                        leader, one who understands both the complexity of
                        advanced AI systems and the urgency of human connection.
                        His work continues to be defined by a commitment to
                        quality, adaptability, and building technology that
                        enhances lives as much as it advances business.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

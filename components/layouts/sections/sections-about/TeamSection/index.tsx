import { Divider } from "@/components/ui/divider/Divider";
import { Container } from "@/components/layouts/Container";
import { TeamMemberRow } from "./components/TeamMemberRow";
import type { TeamMemberProps } from "./components/TeamMember";

type TeamMemberData = {
  member: TeamMemberProps;
  bioParagraphs: string[];
};

const teamMembers: TeamMemberData[] = [
  {
    member: {
      name: "Wendy Haggerty",
      imageUrl:
        "https://c.animaapp.com/mjr473f9JvwhGf/assets/mm-wendy-profile-2@1280x1920-687x1030.jpg",
    },
    bioParagraphs: [
      "Wendy Haggerty, LMFT, AASECT-Certified Sex Therapist & Supervisor, brings a wealth of expertise to the mindmood team. As the founder of Sex and Love Therapy in Connecticut and Florida, Wendy and her team have provided invaluable support to thousands of individuals, couples, and partners over many years. Her dedication extends beyond the therapy room, as she has also imparted her knowledge as a former professor of Family Therapy, Human Sexuality, & Systemic Sex Therapy at the University of Saint Joseph.",
      "Wendy's commitment to advancing the field is evident in her active involvement with AASECT (American Association of Sexuality Educators, Counselors, and Therapists) over the past decade. She has generously contributed her time and expertise, serving in various capacities including her current role on the Board of Directors and as the Certification Steering Committee Chair.",
      "Wendy's passion for promoting sexual health and well-being aligns seamlessly with mindmood's mission to provide inclusive and affirming mental health support. With her extensive experience and dedication to advancing the field, Wendy plays a pivotal role in ensuring that mindmood remains at the forefront of accessible and compassionate care.",
    ],
  },
  {
    member: {
      name: "Leah Diggle",
      imageUrl:
        "https://c.animaapp.com/mjr473f9JvwhGf/assets/Leya-Headshot-11-24-687x1030.jpg",
    },
    bioParagraphs: [
      "Leah Diggle is a passionate leader and advocate for mental health, with a particular focus on supporting marginalized and minority populations. With a career spanning over two decades, Leah has amassed a wealth of experience working with various companies to support operations and has successfully launched her own startups along the way.",
      "Throughout her career, Leah has demonstrated a deep commitment to ensuring that mental health services are stigma-free and accessible to all individuals. Her drive to break down barriers and provide inclusive support has been a driving force behind her work.",
      "In addition to her extensive experience working with companies to optimize operations, Leah has also played a pivotal role in launching and scaling successful startups. Her entrepreneurial spirit and innovative mindset have enabled her to identify gaps in the market and develop solutions to address them effectively.",
      "As the CEO and founder of Pineapple Support, a 501c3 nonprofit organization, Leah leads efforts to provide essential mental health support to adult industry professionals. Under her leadership, Pineapple Support has become a beacon of hope for individuals within the adult industry, offering a safe and confidential space to access the care they need.",
      "Leah's tireless dedication to mental health advocacy and her track record of success in both corporate and startup environments make her a formidable force in the field. Through her leadership and vision, she continues to make significant strides towards creating a more inclusive and supportive world for individuals struggling with mental health challenges.",
    ],
  },
  {
    member: {
      name: "Daniel Keating",
      imageUrl:
        "https://c.animaapp.com/mjr473f9JvwhGf/assets/20856786-0-801x1030.jpg",
    },
    bioParagraphs: [
      "Daniel Keating is the CEO and founder of SirenAI, a pioneering company delivering AI-driven interactive solutions for some of the most prominent digital platforms. Under his leadership, a 30-person team has built and deployed technologies that transform user engagement and create scalable new revenue streams across more than 40 partner platforms and agencies.",
      "Before launching SirenAI, Daniel spent thousands of hours as a volunteer first responder on a suicide prevention hotline, supporting people in moments of acute crisis. That frontline experience instilled in him both a deep empathy for the human condition and a conviction that technology should ultimately serve people, not the other way around. This ethos shapes his approach at mindmood: leveraging cutting-edge AI not just for efficiency or scale, but to create interactions that feel authentic, human, and meaningful.",
      "Daniel's unique blend of technical expertise and crisis-response experience makes him a rare kind of leader, one who understands both the complexity of advanced AI systems and the urgency of human connection. His work continues to be defined by a commitment to quality, adaptability, and building technology that enhances lives as much as it advances business.",
    ],
  },
];

export const TeamSection = () => {
  return (
    <Container className="py-6 md:py-12.5">
      {teamMembers.map((teamMember, index) => (
        <div key={teamMember.member.name}>
          {index > 0 && <Divider />}

          <TeamMemberRow
            member={teamMember.member}
            bioParagraphs={teamMember.bioParagraphs}
          />
        </div>
      ))}
    </Container>
  );
};

import styles from "../styles/Team.module.scss";
import Container from "./Container";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SectionTop from "./SectionTop";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    imgSrc: "/team/member-1.png",
    altText: "Saimon Harmer",
    title: "Saimon Harmer",
    designation: "CEO and Founder",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: "/team/member-2.png",
    altText: "Aaron Nunez",
    title: "Aaron Nunez",
    designation: "Founder",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: "/team/member-3.png",
    altText: "Aaron Nunez",
    title: "Aaron Nunez",
    designation: "Web Designer",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: "/team/member-4.png",
    altText: "Lina Jutila",
    title: "Lina Jutila",
    designation: "Web Developer",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: "/team/member-5.png",
    altText: "Saimon Harmer",
    title: "Saimon Harmer",
    designation: "CEO and Founder",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: "/team/member-6.png",
    altText: "Aaron Nunez",
    title: "Aaron Nunez",
    designation: "Web Designer",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function Team() {
  return (
    <section className={styles.team}>
      <Container>
        <SectionTop>
          <div className={styles.head}>
            <SectionSubTitle text="OUR TEAM" />
            <SectionTitle text="The most qualified and talented individuals" />
          </div>
        </SectionTop>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TeamCard({ member }) {
  return (
    <div className={styles.card}>
      <img
        src={member.imgSrc}
        alt={member.altText}
        className={styles.memberThumb}
      />
      <div className={styles.infoWrapper}>
        <h2 className={styles.name}> {member.title} </h2>
        <p className={styles.designation}> {member.designation} </p>
      </div>
      <div className={styles.socialShare}>
        {member.socialProfile.map((profile) => (
          <a
            href={profile.path}
            key={profile.id}
            className={styles.icon}
            target="_blank"
          >
            {profile.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

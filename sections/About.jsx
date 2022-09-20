import SectionHeader from '../components/SectionHeader'

const skills = [
  'JavaScript (ES6+)',
  'React.js',
  'Tailwind CSS',
  'TypeScript',
  'Framer Motion',
  'Cypress',
]

const Link = ({ children, href }) => (
  <a
    href={href}
    target="blank"
    rel="noopener noreferrer"
    className="text-green border-green hover:border-b-[1px]"
  >
    {children}
  </a>
)

const About = () => (
  <section id="about" className="max-w-[900px]">
    <SectionHeader number="01." title="About Me" />
    <div className="text-lg">
      <p className="mb-4">
        Hello! My name is Lautaro and I enjoy programming. My interest in
        software development started back in 2016 when I began the career of
        Systems Engineering at{' '}
        <Link href="https://frba.utn.edu.ar/">UTN FRBA</Link>. There I started
        learning algorithms and imperative programming using C++. Then I learnt
        the different programming paradigms focusing on OOP using Java. I also
        studied relational and no-relational Databases and Front-end
        technologies to build a Full-Stack project.
      </p>
      <p className="mb-4">
        When I got my first job I could consolidate my knowledge by maintaining
        both front-end (web & mobile) and back-end applications. There I learnt
        a few technologies like Angular, TypeScript, .NET Core, PostgreSQL and
        Hibernate.
      </p>
      <p className="mb-4">
        I&#39;m a strong advocate of code quality and better engineering
        practices as well as capable of understanding and influencing the
        business priorities.
      </p>
      <p className="mb-4">
        Currently, I am working as a Frontend Engineer and my preferred
        framework is React. I love to bring enjoyable digital experiences to
        users and customers. My plan is to use my qualities in a front-end
        developer role that allows me to further develop my skills.
      </p>
      <p>Here are a few technologies I&#39;ve been working with recently:</p>
      <ul className="styled skills-list font-mono text-sm mt-6">
        {skills.map((skillName) => (
          <li className="mb-2" key={skillName}>
            {skillName}
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default About

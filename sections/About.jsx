import SectionHeader from '../components/SectionHeader'

const skills = [
  'JavaScript (ES6+)',
  'Node.js',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'REST',
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
        When I got my first job at{' '}
        <Link href="http://datastar.com.ar/">Datastar</Link> I could consolidate
        my knowledge by maintaining both front-end (web & mobile) and back-end
        applications. There I learnt a few technologies like Angular,
        TypeScript, .NET Core, PostgreSQL and Hibernate.
      </p>
      <p className="mb-4">
        Currently, I am working on the development of a Next.js application at{' '}
        <Link href="https://institucional.telecom.com.ar/">Telecom</Link>. I
        love React.js and Next.js so I&apos;m interested in getting more
        experience in these technologies and the Front-end development.
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

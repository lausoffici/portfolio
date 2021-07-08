import SectionHeader from '../components/SectionHeader'

const skills = [
  'JavaScript (ES6+)',
  'React',
  'Node.js',
  '.NET Core',
  'SQL',
  'TypeScript',
]

const About = () => (
  <section id="about" className="max-w-[900px]">
    <SectionHeader number="01." title="About Me" />
    <div className="text-lg">
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        sapien eu augue sollicitudin bibendum malesuada non leo. Proin
        ullamcorper, tortor nec venenatis accumsan, purus lacus varius orci, ut
        feugiat tellus eros laoreet orci. Nunc et tempus enim. Maecenas eu
        sodales risus. Sed iaculis sit amet lectus id tincidunt. Maecenas at
        ligula ut augue tincidunt iaculis nec quis nibh. Nunc dui ligula,
        fringilla et lectus nec, sodales feugiat enim.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        sapien eu augue sollicitudin bibendum malesuada non leo. Proin
        ullamcorper, tortor nec venenatis accumsan, purus lacus varius orci, ut
        feugiat tellus eros laoreet orci. Nunc et tempus enim. Maecenas eu
        sodales risus. Sed iaculis sit amet lectus id tincidunt. Maecenas at
        ligula ut augue tincidunt iaculis nec quis nibh. Nunc dui ligula,
        fringilla et lectus nec, sodales feugiat enim.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        sapien eu augue sollicitudin bibendum malesuada non leo. Proin
        ullamcorper, tortor nec venenatis accumsan, purus lacus varius orci, ut
        feugiat tellus eros laoreet orci. Nunc et tempus enim.
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

const skills = [
  'JavaScript (ES6+)',
  'React',
  'Node.js',
  '.NET Core',
  'SQL',
  'TypeScript',
]

const About = () => {
  return (
    <section id="about" className="max-w-[900px]">
      <div className="flex items-center w-full mt-3 mb-8">
        <h3 className="font-mono text-green text-2xl mr-3">01.</h3>
        <h2 className="numbered-heading font-bold text-white mr-6">About Me</h2>
        <span className="w-full md:w-[300px] h-[1px] bg-[#233554]" />
      </div>
      <div className="text-lg">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          sapien eu augue sollicitudin bibendum malesuada non leo. Proin
          ullamcorper, tortor nec venenatis accumsan, purus lacus varius orci,
          ut feugiat tellus eros laoreet orci. Nunc et tempus enim. Maecenas eu
          sodales risus. Sed iaculis sit amet lectus id tincidunt. Maecenas at
          ligula ut augue tincidunt iaculis nec quis nibh. Nunc dui ligula,
          fringilla et lectus nec, sodales feugiat enim.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          sapien eu augue sollicitudin bibendum malesuada non leo. Proin
          ullamcorper, tortor nec venenatis accumsan, purus lacus varius orci,
          ut feugiat tellus eros laoreet orci. Nunc et tempus enim. Maecenas eu
          sodales risus. Sed iaculis sit amet lectus id tincidunt. Maecenas at
          ligula ut augue tincidunt iaculis nec quis nibh. Nunc dui ligula,
          fringilla et lectus nec, sodales feugiat enim.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          sapien eu augue sollicitudin bibendum malesuada non leo. Proin
          ullamcorper, tortor nec venenatis accumsan, purus lacus varius orci,
          ut feugiat tellus eros laoreet orci. Nunc et tempus enim.
        </p>
        <p>Here are a few technologies I&#39;ve been working with recently:</p>
        <ul className="skills-list font-mono text-sm mt-6">
          {skills.map((skillName) => (
            <li className="mb-2" key={skillName}>
              {skillName}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About

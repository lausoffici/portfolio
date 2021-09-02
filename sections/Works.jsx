import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'

const data = [
  {
    name: 'Frontend Web Developer',
    company: {
      name: 'Telecom',
      website: 'https://institucional.telecom.com.ar/',
    },
    range: 'Mar 2021 - Present',
    tasks: [
      "Development of a Next.js app, currently on an project's MVP stage.",
      'Propose refactors and new tools in order to achieve technical requirements.',
      'Promove team-working and communication.',
      'Consume of RESTful third party vendors.',
      'Team mentoring.',
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Storybook',
      'React Testing Library',
    ],
  },
  {
    name: 'Full Stack Developer',
    company: { name: 'Datastar', website: 'http://www.datastar.com.ar/' },
    range: 'Jul 2019 - Mar 2021',
    tasks: [
      'Complete implementation of new requirements.',
      'Research and incorporation of new technologies.',
      'Code refactor and bug fixes.',
      'Database migrations.',
      'Peer code review.',
    ],
    tech: [
      '.NET Core',
      'Angular',
      'PostgreSQL',
      'Ionic',
      'TypeScript',
      'NHibernate',
    ],
  },
]

const Works = () => {
  const [workSelected, setWorkSelected] = useState(data[0])

  return (
    <section id="works" className="max-w-[700px]">
      <SectionHeader number="02." title="Where I’ve Worked" />
      <div className="flex flex-col sm:flex-row">
        {/* Companies buttons */}
        <div className="flex sm:flex-col mb-5 sm:m-0">
          {data.map((d) => (
            <button
              key={d.company.name}
              className={`text-sm px-6 font-mono h-10 focus:bg-[#112240] hover:bg-[#112240] hover:text-green border-b-[1px] sm:border-b-0 sm:border-l-[1px] transition-all duration-200 text-left ${
                workSelected.company.name === d.company.name
                  ? 'text-green border-green border-b-2 sm:border-l-2 '
                  : 'border-primary'
              }`}
              onClick={() => setWorkSelected(d)}
            >
              {d.company.name}
            </button>
          ))}
        </div>
        {/* Info */}
        <div className="flex flex-col m-0 sm:ml-6">
          <h2 className="text-xl text-white">
            {workSelected.name}{' '}
            <span className="text-green">
              @{' '}
              <a
                href={workSelected.company.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="border-green hover:border-b-[1px]">
                  {workSelected.company.name}
                </span>
              </a>
            </span>
          </h2>
          <h3 className="font-mono">{workSelected.range}</h3>
          <ul className="styled flex flex-col mt-5">
            {workSelected.tasks.map((task, index) => (
              <li key={index} className="mb-2">
                {task}
              </li>
            ))}
          </ul>
          <ul className="font-mono text-xs flex gap-x-3 gap-y-1 mt-4 text-gray tracking-wide flex-wrap">
            {workSelected.tech.map((tech) => (
              <li key={tech} className="mb-2 bg-light rounded px-2 py-1">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Works

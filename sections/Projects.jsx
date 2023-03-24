import SectionHeader from '../components/SectionHeader'
import Project from '../components/Project'

const data = [
  {
    title: 'Word Game',
    description:
      'Recreation of the popular online word game, Wordle. This project was part of "Joy of React" course by @joshwcomeau.',
    github: 'https://github.com/lausoffici/word-clone',
    demo: 'https://word-clone-lsoffici.vercel.app/',
    tools: ['React.js'],
  },
  {
    title: 'LoL Team Randomizer',
    description:
      'Developed in order to have the best experience when randomizing 10 players (5vs5).',
    github: 'https://github.com/lausoffici/lol-team-randomizer',
    demo: 'https://lol-team-randomizer.netlify.app/',
    tools: ['React.js', 'Vite', 'Sass'],
  },
  {
    title: 'Weather Challenge',
    description:
      "Full client-side app to request current and 5-day forecast weather data of clients's location or of a specified city.",
    github: 'https://github.com/lausoffici/weather-challenge',
    demo: 'https://weather-challenge-rouge.vercel.app/',
    tools: ['React.js', 'TypeScript', 'styled-components'],
  },
  {
    title: 'My little house',
    description:
      "Managament of students' data like personal information, debts and notes.",
    github: 'https://github.com/lausoffici/my-little-house',
    tools: ['Next.js', 'MongoDB', 'TypeScript'],
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeader number="03." title="Some Things I’ve Built" />

      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 15,
        }}
      >
        {data.map(({ title, description, github, demo, tools }) => (
          <li key={title}>
            <Project
              title={title}
              description={description}
              github={github}
              demo={demo}
              tools={tools}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects

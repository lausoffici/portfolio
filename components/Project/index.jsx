import FolderIcon from '../../public/imgs/folder.svg'
import ExternalLinkIcon from '../../icons/ExternalLink'
import GithubIcon from '../../public/imgs/github.svg'

const Project = ({ title, description, github, demo, tools }) => {
  return (
    <a
      href={github}
      target="_blank"
      rel="noreferrer"
      aria-label="External Link"
      className="bg-light py-8 px-7 rounded text-white flex flex-col justify-between h-[100%] hover:-translate-y-2 transition-all duration-200 ease-in-out cursor-pointer hover:text-green"
    >
      <div className="flex justify-between items-center mb-6">
        <FolderIcon className="test" width={40} />
        <div className="flex items-center">
          <GithubIcon
            className="text-gray hover-green"
            width={22}
            alt="Github"
          />
          {demo && (
            <div
              onClick={() => window.open(demo, '_blank')}
              aria-label="External Link"
            >
              <ExternalLinkIcon
                className="ml-5 fill-gray hover:fill-green transition-all duration-300 ease-in-out"
                width={20}
                alt="Demo"
              />
            </div>
          )}
        </div>
      </div>

      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-[#97A2C1]">{description}</p>
      <ul className="flex gap-x-4 gap-y-2 text-[#54617F] text-sm font-bold font-mono mt-8 flex-wrap">
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </a>
  )
}

export default Project

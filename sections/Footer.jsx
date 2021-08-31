import { actions } from './ContactActions'

const Footer = () => (
  <footer className="flex flex-col justify-center font-mono py-5 items-center">
    <ul className="flex items-center relative mb-4 md:hidden">
      {actions.map((a) => {
        const LogoSvg = a.svg
        return (
          <li key={a.href} className="p-3.5">
            <a href={a.href} target="_blank" rel="noreferrer">
              <LogoSvg
                className="hover-green hover:-translate-y-1"
                width={20}
                height={20}
              />
            </a>
          </li>
        )
      })}
    </ul>
    <p className="text-sm flex flex-col sm:flex-row justify-center items-center">
      <a
        href="https://brittanychiang.com/"
        target="_blank"
        rel="noreferrer"
        className="mb-2 sm:m-0 hover-green"
      >
        Designed by Brittany Chiang
      </a>
      <span className="hidden sm:block mx-2 cursor-default">|</span>
      <a
        href="https://github.com/lausoffici/portfolio"
        target="_blank"
        rel="noreferrer"
        className="hover-green"
      >
        Built by me
      </a>
    </p>
  </footer>
)

export default Footer

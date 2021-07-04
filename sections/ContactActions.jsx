import GithubLogo from '../public/imgs/github.svg'
import InstagramLogo from '../public/imgs/instagram.svg'
import LinkedinLogo from '../public/imgs/linkedin.svg'
import TwitterLogo from '../public/imgs/twitter.svg'

const logos = [GithubLogo, InstagramLogo, TwitterLogo, LinkedinLogo]

const ContactActions = () => {
  return (
    <div className="hidden md:block text-[#A8B2D1]">
      <div className="w-10 fixed bottom-0 left-5 lg:left-10 right-auto">
        <ul className="flex flex-col items-center relative">
          {logos.map((l) => {
            const Logo = l
            return (
              <li key={l} className="p-3.5">
                <a>
                  <Logo
                    className="hover-green hover:-translate-y-1 cursor-[ne-resize]"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            )
          })}
          <li className="mt-5 w-[1px] h-[90px] border-l-[1px]" />
        </ul>
      </div>
      <div className="w-10 fixed bottom-0 right-5 lg:right-10 left-auto font-mono">
        <div className="flex flex-col items-center relative">
          <a
            className="text-sm tracking-widest my-2 hover-green hover:-translate-y-1 cursor-pointer"
            style={{ writingMode: 'vertical-rl' }}
            href="mailto:lautarosoffici@gmail.com"
          >
            lautarosoffici@gmail.com
          </a>
          <div className="mt-5 w-[1px] h-[90px] border-l-[1px]" />
        </div>
      </div>
    </div>
  )
}

export default ContactActions

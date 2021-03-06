import GithubLogo from '../public/imgs/github.svg'
import LinkedinLogo from '../public/imgs/linkedin.svg'
import TwitterLogo from '../public/imgs/twitter.svg'
import { motion } from 'framer-motion'

export const actions = [
  {
    href: 'https://github.com/lausoffici',
    svg: GithubLogo,
    alt: 'GitHub',
  },
  {
    href: 'https://twitter.com/lsoffici',
    svg: TwitterLogo,
    alt: 'Twitter',
  },
  {
    href: 'https://linkedin.com/in/lautarosoffici/',
    svg: LinkedinLogo,
    alt: 'LinkedIn',
  },
]

const ContactActions = () => (
  <div className="hidden md:block text-[#A8B2D1]">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="w-10 fixed bottom-0 left-5 lg:left-10 right-auto"
    >
      <ul className="flex flex-col items-center relative">
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
        <li className="mt-5 w-[1px] h-[90px] border-l-[1px]" />
      </ul>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="w-10 fixed bottom-0 right-5 lg:right-10 left-auto font-mono"
    >
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
    </motion.div>
  </div>
)

export default ContactActions

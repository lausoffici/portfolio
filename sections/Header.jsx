import { useState } from 'react'
import Button from '../components/Button'
import Logo from '../public/logo.svg'
import { useScrollPosition } from '../hooks/useScrollPosition'

const navBarItems = [
  {
    name: 'About',
    href: '/#about',
  },
  {
    name: 'Experience',
    href: '/#works',
  },
  {
    name: 'Work',
    href: '/#projects',
  },
  {
    name: 'Contact',
    href: '/#contact',
  },
]

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== isVisible) setIsVisible(isShow)
      setIsScrolled(currPos.y !== 0)
    },
    [isVisible]
  )

  return (
    <header
      className="fixed flex justify-between items-center w-full px-[25px] md:px-[50px] font-mono text-sm bg-[#0a192f]"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 250ms ease-in, height 300ms ease-in-out',
        height: isScrolled ? 70 : 100,
        boxShadow: isScrolled ? '0 10px 30px -10px #020c1bb3' : '',
      }}
    >
      <a href="#">
        <Logo id="logo" width={42} height={42} />
      </a>
      <div className="hidden md:flex">
        <ol className="flex justify-center items-center mr-4">
          {navBarItems.map((item) => (
            <li key={item.name} className="mx-1 p-2.5 hover-green">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ol>
        <a href="mailto:lautarosoffici@gmail.com">
          <Button className="px-4 py-2">Resume</Button>
        </a>
      </div>
      <div className="flex flex-col md:hidden w-6 h-6">
        <div className="h-[2px] bg-green mb-1" />
        <div className="h-[2px] bg-green mb-1" />
        <div className="h-[2px] bg-green" />
      </div>
    </header>
  )
}

export default Header

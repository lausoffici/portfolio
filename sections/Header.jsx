import Button from '../components/Button'
import Logo from '../public/logo.svg'

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

const Header = () => (
  <header className="h-[100px] fixed flex justify-between items-center w-full px-[25px] md:px-[50px] font-mono text-sm">
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

export default Header

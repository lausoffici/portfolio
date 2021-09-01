import { useState, useEffect, useCallback, useRef } from 'react'
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
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAsideVisible, setIsAsideVisible] = useState(false)
  const headerRef = useRef()

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y || currPos.y > -5
      if (isShow !== isHeaderVisible) setIsHeaderVisible(isShow)
      setIsScrolled(currPos.y !== 0)
    },
    [isHeaderVisible]
  )

  const toggleAside = useCallback(() => {
    setIsAsideVisible(!isAsideVisible)
    document.body.classList.toggle('stop-scrolling')
    document.getElementById('content').classList.toggle('blur-content')
  }, [isAsideVisible])

  const closeAside = useCallback(
    () => isAsideVisible && toggleAside(),
    [isAsideVisible, toggleAside]
  )

  // close the aside when click outside interaction
  useEffect(() => {
    document.body.addEventListener('click', closeAside)
    return () => document.body.removeEventListener('click', closeAside)
  }, [closeAside])

  // close the aside when click Escape
  useEffect(() => {
    const onKeyDown = (e) => e.keyCode === 27 && isAsideVisible && closeAside()
    document.body.addEventListener('keydown', onKeyDown)
    return () => document.body.removeEventListener('keydown', onKeyDown)
  }, [closeAside, isAsideVisible])

  // focus trap on aside
  const keyDownHandler = (e) => {
    if (e.key !== 'Tab') return

    const focusableElements = headerRef.current.querySelectorAll(
      'a[href], button:not([disabled])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // if going forward by pressing tab and lastElement is active shift focus to first focusable element
    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus()
      return e.preventDefault()
    }
    // if going backward by pressing tab and firstElement is active shift focus to last focusable element
    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus()
      e.preventDefault()
    }
  }

  return (
    <header
      className="fixed flex justify-between items-center w-full px-[25px] md:px-[50px] font-mono text-sm bg-[#0a192f] z-10"
      style={{
        transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition:
          'transform 250ms ease-in, height 300ms ease-in-out, box-shadow 300ms ease-in-out',
        height: isScrolled ? 70 : 100,
        boxShadow: isScrolled ? '0 10px 30px -10px #020c1bb3' : '',
      }}
      ref={headerRef}
    >
      <a href="#">
        <Logo id="logo" width={42} height={42} />
      </a>
      <div className="hidden md:flex">
        <ol className="flex justify-center items-center mr-4 text-[#C7D1F0] tracking-wider">
          {navBarItems.map((item) => (
            <li key={item.name} className="mx-1 p-2.5 hover-green">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ol>
        <ResumeButton className="px-4 py-2" />
      </div>
      <div
        className="flex flex-col md:hidden w-6 h-6 cursor-pointer z-50"
        role="button"
        onClick={(e) => {
          e.stopPropagation()
          toggleAside()
        }}
      >
        <div className="h-[2px] bg-green mb-1" />
        <div className="h-[2px] bg-green mb-1" />
        <div className="h-[2px] bg-green" />
      </div>
      <aside
        tabIndex={1}
        className="fixed md:hidden right-0 top-0 h-screen bg-light flex justify-center"
        style={{
          width: 'min(75vw, 400px)',
          transform: isAsideVisible ? '' : 'translateX(100%)',
          transition: 'transform 200ms ease-in-out',
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={keyDownHandler}
      >
        <nav className="flex flex-col items-center justify-center w-full">
          <ol className="flex flex-col justify-center items-center mr-4 px-[10px] text-xl text-white">
            {navBarItems.map((item) => (
              <li
                key={item.name}
                className="mx-1 p-2.5 hover-green mb-4 last:mb-0"
                onClick={toggleAside}
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ol>
          <ResumeButton className="px-14 py-4 mt-14" />
        </nav>
      </aside>
    </header>
  )
}

const ResumeButton = ({ className }) => (
  <a href="mailto:lautarosoffici@gmail.com">
    <Button className={className}>Resume</Button>
  </a>
)

export default Header

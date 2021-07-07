const Footer = () => {
  return (
    <footer className="flex justify-center font-mono py-5">
      <p className="text-sm flex flex-col sm:flex-row justify-center items-center">
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer"
          className="mb-2 sm:m-0 hover-green hover:cursor-[ne-resize]"
        >
          Designed by Brittany Chiang
        </a>
        <span className="hidden sm:block mx-2 cursor-default">|</span>
        <a
          href="https://github.com/lausoffici/portfolio"
          target="_blank"
          rel="noreferrer"
          className="hover-green hover:cursor-[ne-resize]"
        >
          Built by me
        </a>
      </p>
    </footer>
  )
}

export default Footer

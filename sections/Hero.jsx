import Button from '../components/Button'

const Hero = () => {
  return (
    <section className="flex flex-col items-start justify-center min-h-[100vh] py-0">
      <h1 className="font-mono text-primary-400 mb-4 text-lg">
        Hi, my name is
      </h1>
      <div className="font-bold text-7xl mb-8">
        <h2 className="big-heading text-primary-200 mb-4">Lautaro Soffici.</h2>
        <h3 className="big-heading text-primary-300">
          I build things for the web.
        </h3>
      </div>
      <p className="text-primary-300 text-lg max-w-[500px] mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        sapien eu augue sollicitudin bibendum malesuada non leo. Proin
        ullamcorper, tortor nec venenatis accumsan, purus lacus varius orci, ut
        feugiat tellus eros laoreet.
      </p>
      <a href="mailto:lautarosoffici@gmail.com">
        <Button className="font-mono px-7 py-4">Get In Touch</Button>
      </a>
    </section>
  )
}

export default Hero

import Button from '../components/Button'

const Hero = () => (
  <section className="flex flex-col items-start justify-center min-h-[100vh] py-0">
    <h1 className="font-mono text-green mb-4 text-lg">Hi, my name is</h1>
    <div className="font-bold text-7xl mb-8">
      <h2 className="big-heading text-white mb-4">Lautaro Soffici.</h2>
      <h3 className="big-heading">I build things for the web.</h3>
    </div>
    <p className="text-lg max-w-[500px] mb-12">
      I&apos;m a software developer passionate of learning new technologies and
      the correct use of them. I enjoy teamwork, especially when I can improve
      my skills learning or teaching when working. Always looking for develope
      high quality products.
    </p>
    <a href="mailto:lautarosoffici@gmail.com">
      <Button className="font-mono px-7 py-4">Get In Touch</Button>
    </a>
  </section>
)

export default Hero

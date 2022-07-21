import Button from '../components/Button'
import { motion } from 'framer-motion'

const Hero = () => (
  <motion.div
    initial={{ opacity: 0, translateY: 15 }}
    animate={{ opacity: 1, translateY: 0 }}
    transition={{ duration: 0.4, delay: 0.7 }}
  >
    <section className="flex flex-col justify-center min-h-screen pt-[100px]">
      <h1 className="font-mono text-green mb-4 text-lg">Hi, my name is</h1>
      <div className="font-bold text-7xl mb-8">
        <h2 className="big-heading text-white mb-4">Lautaro Soffici.</h2>
        <h3 className="big-heading">I build things for the web.</h3>
      </div>
      <p className="text-lg max-w-[500px] mb-12">
        I&apos;m a young and enthusiastic software developer passionate about
        learning new technologies and the correct use of them. I enjoy teamwork,
        especially when I can improve my skills learning or teaching when
        working. I am always working to develop high quality products.
      </p>
      <a href="mailto:lautarosoffici@gmail.com">
        <Button className="font-mono px-7 py-4">Get In Touch</Button>
      </a>
    </section>
  </motion.div>
)

export default Hero

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
        As a highly motivated and skilled software developer, I am committed to
        constantly expanding my knowledge of the latest technologies and best
        practices in the industry. I thrive in collaborative environments where
        I can both learn from and teach my peers, and I am always seeking to
        improve my skills and contribute to the development of high-quality
        products. With a passion for innovation and a dedication to excellence,
        I am confident in my ability to make valuable contributions to any team.
      </p>
      <a href="mailto:lautarosoffici@gmail.com">
        <Button className="font-mono px-7 py-4">Get In Touch</Button>
      </a>
    </section>
  </motion.div>
)

export default Hero

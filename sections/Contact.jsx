import Button from '../components/Button'

export default function Contact() {
  return (
    <section id="contact" className="text-center max-w-[600px] mb-[100px]">
      <h2 className="font-mono text-green text-lg">04. What&apos;s Next?</h2>
      <h2 className="medium-heading font-bold text-white mb-4">Get In Touch</h2>
      <p className="text-lg mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
        sapien eu augue sollicitudin bibendum malesuada non leo. Proin
        ullamcorper, tortor nec venenatis accumsan.
      </p>
      <a href="mailto:lautarosoffici@gmail.com">
        <Button className="px-7 py-4 font-mono">Say Hello</Button>
      </a>
    </section>
  )
}

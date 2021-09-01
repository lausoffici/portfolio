import Button from '../components/Button'

export default function Contact() {
  return (
    <section id="contact" className="text-center max-w-[600px] mb-[100px]">
      <h2 className="font-mono text-green text-lg">04. What&apos;s Next?</h2>
      <h2 className="medium-heading font-bold text-white mb-4">Get In Touch</h2>
      <p className="text-lg mb-12">
        My inbox is always open for new opportunities. Feel free to contact me
        if you have any doubts or just to say hi!
      </p>
      <a href="mailto:lautarosoffici@gmail.com">
        <Button className="px-7 py-4 font-mono">Say Hello</Button>
      </a>
    </section>
  )
}

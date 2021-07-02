import 'tailwindcss/tailwind.css'
import '../styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />{' '}
      <style jsx global>
        {'body {background: #0a192f; color: #ccd6f6}'}
      </style>
    </>
  )
}

export default MyApp

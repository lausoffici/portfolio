const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`text-primary-400 border border-primary-400 rounded outline-none focus:outline-none ease-in-out hover:bg-primary-400 hover:bg-opacity-10 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

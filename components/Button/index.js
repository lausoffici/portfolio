const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`text-green border border-green rounded outline-none focus:outline-none ease-in-out hover:bg-green hover:bg-opacity-10 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

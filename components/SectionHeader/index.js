const SectionHeader = ({ number, title }) => (
  <div className="flex items-center w-full mt-3 mb-8">
    <h3 className="font-mono text-green text-2xl mr-3">{number}</h3>
    <h2 className="numbered-heading font-bold text-white mr-6">{title}</h2>
    <span className="w-full md:w-[300px] h-[1px] bg-[#233554]" />
  </div>
)

export default SectionHeader

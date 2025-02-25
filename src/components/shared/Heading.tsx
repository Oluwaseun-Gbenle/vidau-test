interface IHeading {
 className?: string;
 text:string;
}

const Heading = ({className,text}: IHeading) => {
  return (
    <div
    className={`font-medium text-xl sm:text-5xl text-center ${className}`}
  >
  {text}
  </div>
  )
}

export default Heading
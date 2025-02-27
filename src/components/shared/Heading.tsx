interface IHeading {
 className?: string;
 text:string;
}

const Heading = ({className,text}: IHeading) => {
  return (
    <div
    className={`font-medium  xl:w-[75%] mx-auto text-4xl md:text-5xl text-center md:leading-[80px] ${className}`}
  >
  {text}
  </div>
  )
}

export default Heading
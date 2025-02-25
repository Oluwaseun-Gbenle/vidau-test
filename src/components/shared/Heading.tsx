interface IHeading {
 className?: string;
 text:string;
}

const Heading = ({className,text}: IHeading) => {
  return (
    <div
    className={`font-medium text-xl xl:w-[75%] mx-auto sm:text-5xl text-center leading-[80px] ${className}`}
  >
  {text}
  </div>
  )
}

export default Heading
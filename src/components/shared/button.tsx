import { ReactNode } from "react";
interface IButton {
 className?: string;
 text:string;
 onClick?:()=>void;
 icon?: ReactNode;
}

const Button = ({className,text, icon: Icon}: IButton) => {
  return (
    <button
    onClick={() => { }}
    className={`text-xs sm:text-sm px-4 py-3 rounded-[58px] font-semibold ${className}`}
  >
   <div className='flex items-center gap-4'>{text} {Icon ?  Icon: ""}</div> 
  </button>
  )
}

export default Button
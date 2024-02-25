import { ReactNode } from "react";

type PropsT = {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Card = ({ children, className, id }: PropsT) => {
  return (
    <div id={id} className={`px-5 py-10 shadow ${className}`}>
      { children }
    </div>
  )
}

import { ReactNode } from "react";

type PropsT = {
  children: ReactNode;
}

export const Card = ({ children }: PropsT) => {
  return (
    <div className="px-5 py-10 shadow">
      { children }
    </div>
  )
}

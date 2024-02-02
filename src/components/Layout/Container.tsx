import { ReactNode } from 'react';

type PropsT = {
  children: ReactNode,
  rootClassNames?: string,
};

export const Container = ({ children, rootClassNames }: PropsT) => {
  return (
    <div className={`${'container mx-auto'} ${rootClassNames}`}>
      { children }
    </div>
  )
}

import { ReactNode } from 'react';

type PropsT = {
  children: ReactNode,
  rootClassNames?: string,
  type?: 'header' | 'footer' | 'aside',
  onScroll?: (event: any) => void,
};

export const Container = ({ children, rootClassNames, type, onScroll }: PropsT) => {
  if (type === 'header') return (
    <header onScroll={onScroll} className={`${'container mx-auto'} ${rootClassNames}`}>
      { children }
    </header>
  )
  if (type === 'footer') return (
    <footer className={`${'container mx-auto'} ${rootClassNames}`}>
      { children }
    </footer>
  )
  if (type === 'aside') return (
    <aside className={`${rootClassNames}`}>
      { children }
    </aside>
  )
  return (
    <section className={`${'container mx-auto'} ${rootClassNames}`}>
      { children }
    </section>
  )
}

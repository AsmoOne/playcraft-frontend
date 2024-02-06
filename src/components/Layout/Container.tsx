import { ReactNode } from 'react';

type PropsT = {
  children: ReactNode,
  rootClassNames?: string,
  type?: 'header' | 'footer' | 'aside',
};

export const Container = ({ children, rootClassNames, type }: PropsT) => {
  if (type === 'header') return (
    <header className={`${'container mx-auto'} ${rootClassNames}`}>
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

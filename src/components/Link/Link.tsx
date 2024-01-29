import { useState } from 'react';

type PropsT = {
  children: React.ReactNode,
  to: string,
  target?: '_blank' | '_self' | '_parent' | '_top',
  withDropdown?: boolean,
  rootClassNames?: string,
};

const baseClassNames = 'font-main text-base text-white hover:text-primary transition-all';

export const Link = ({
  children,
  to,
  target,
  withDropdown,
  rootClassNames,
  ...restProps
 }: PropsT) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    //TODO: do it using refs
    const target = e.target as HTMLAnchorElement;
    if (target.tagName === 'A') {
      const img = target.querySelector('img');
      if (img) {
        img.style.transform = 'rotate(180deg)';
      }
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    if (target.tagName === 'A') {
      const img = target.querySelector('img');
      if (img) {
        img.style.transform = 'rotate(0deg)';
      }
    }
  }

  return (
    <a
      href={to}
      target={target}
      className={`
        ${baseClassNames}
        ${withDropdown ? 'flex gap-2 items-center' : ''}
        ${rootClassNames}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...restProps}
    >
      { children }

      { withDropdown ? (
        <img src="/assets/arrow_down.svg" alt="arrow down icon" />
      ) : null}
    </a>
  )
}

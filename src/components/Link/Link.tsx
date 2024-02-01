type PropsT = {
  children: React.ReactNode,
  to: string,
  target?: '_blank' | '_self' | '_parent' | '_top',
  withDropdown?: boolean,
  rootClassNames?: string,
};

const baseClassNames = 'flex items-center font-main text-base text-white hover:text-primary transition-all';

export const Link = ({
  children,
  to,
  target,
  withDropdown,
  rootClassNames,
  ...restProps
 }: PropsT) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    //TODO: Dropdown should be opened only if mouse enters the link
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    //TODO: Dropdown should be closed only if mouse leaves the link
  }

  return (
    <a
      href={to}
      target={target}
      className={`
        ${baseClassNames}
        ${withDropdown ? 'gap-2' : ''}
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
type PropsT = {
  children: React.ReactNode,
  to: string,
  target?: '_blank' | '_self' | '_parent' | '_top',
};

export const Link = ({
  children,
  to,
  target,
  ...restProps
 }: PropsT) => {
  return (
    <a
      href={to}
      target={target}
      className="font-main text-base text-white hover:text-primary transition-all"
      {...restProps}
    >
      { children }
    </a>
  )
}

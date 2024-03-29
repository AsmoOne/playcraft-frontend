type PropsT = {
  children: React.ReactNode,
  type?: 'button' | 'submit' | 'reset',
  onClick?: () => void,
  variant?: 'primary' | 'secondary' | 'tertiary',
  rootClassNames?: string,
};

export const Button = ({
  children,
  type = 'button',
  onClick,
  variant,
  rootClassNames,
  ...restProps
 }: PropsT) => {
  return (
    <button
      {...restProps}
      type={type}
      onClick={onClick}
      className={`
        ${'flex justify-center items-center px-12 py-4 rounded font-main select-none'}
        ${variant === 'primary' ? 'bg-primary text-black transition-all hover:text-white' : null}
        ${variant === 'secondary' ? 'bg-transparent text-primary border-2 border-primary transition-all hover:bg-primary hover:text-black' : null}
        ${variant === 'tertiary' ? ' bg-red-400 text-black transition-all hover:bg-red-300' : null}
        ${rootClassNames}
      `}
    >
      { children }
    </button>
  )
}

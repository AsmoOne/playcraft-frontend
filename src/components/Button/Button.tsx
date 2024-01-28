type PropsT = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  variant?: 'primary' | 'secondary'
};

export const Button = ({
  children,
  type = 'button',
  onClick,
  variant,
 }: PropsT) => {
  return (
    <button type={type} onClick={onClick} className={`${variant}`}>
      { children }
    </button>
  )
}

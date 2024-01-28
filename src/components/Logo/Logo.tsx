type PropsT = {
  size?: 'small' | 'large',
};

export const Logo = ({ size = 'small' }: PropsT) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src="/logo.png"
        alt="logo icon"
        className={`${size === 'large' ? 'w-20' : 'w-12'}`}
      />

      <p className="text-2xl">
        Playcraft
      </p>
    </div>
  )
}

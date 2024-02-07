import { Link } from "../Link";

type PropsT = {
  size: 'small' | 'large',
  textColor?: 'white' | 'black',
  rootClassNames?: string,
};

export const Logo = ({
  size,
  textColor = 'white',
  rootClassNames,
 }: PropsT) => {
  return (
    <Link to="/" rootClassNames={`flex gap-4 items-center font-main ${rootClassNames}`}>
      <img
        src="/assets/logo.png"
        alt="logo icon"
        className={`${size === 'large' ? 'w-20' : 'w-12'}`}
      />

      <p className={`${"text-2xl"} text-${textColor}`}>
        Playcraft
      </p>
    </Link>
  )
}

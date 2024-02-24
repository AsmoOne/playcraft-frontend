import { Button } from '../../../Button';
import { Link } from '../../../Link';

import { links } from './links';

type PropsT = {
  isOpen: boolean;
};

export const Navigation = ({ isOpen }: PropsT) => {
  const baseNavigationClasses = 'gap-4 md:flex-row md:flex';
  const baseOpenedClasses = 'flex flex-col items-center justify-center bg-[#6291A6] absolute top-0 left-0 right-0 bottom-0 h-svh';

  return (
    <div className={`${baseNavigationClasses} ${isOpen ? baseOpenedClasses : 'hidden'} md:bg-transparent md:static px-6`}>
      {links.map(({ id, name, path, dropdownItems }, index) => (
        <Link
          key={`${index}-${id}`}
          to={path}
          withDropdown={!!dropdownItems}
          rootClassNames=''
        >
          {name}
        </Link>
      ))}

      <Button variant="primary" rootClassNames='w-full max-w-md mt-10 md:mt-0 md:w-auto md:ml-4 lg:ml-15'>Вхід</Button>
    </div>
  )
}

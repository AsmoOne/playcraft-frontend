import { Button } from '../../../Button';
import { Link } from '../../../Link';

import { links } from './links';

type PropsT = {
  isOpen: boolean;
};

export const Navigation = ({ isOpen }: PropsT) => {
  const baseNavigationClasses = 'flex gap-4';
  const baseOpenedClasses = 'flex-col items-center bg-[#6291A6] absolute top-0 left-0 right-0 bottom-0';

  return (
    <div className={`${baseNavigationClasses} ${isOpen ? baseOpenedClasses : ''}`}>
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

      <Button variant="primary" rootClassNames='ml-15'>Вхід</Button>
    </div>
  )
}

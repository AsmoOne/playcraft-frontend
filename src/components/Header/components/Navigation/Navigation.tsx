import { Link } from '../../../Link';
import { links } from './links';

export const Navigation = () => {
  return (
    <div className='flex gap-4'>
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
    </div>
  )
}

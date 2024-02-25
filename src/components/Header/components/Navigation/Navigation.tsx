import { Button } from '../../../Button';
import { Link } from '../../../Link';
import { Menu, Transition } from '@headlessui/react';

import { links } from '../../../../utils/routes';
import { Fragment } from 'react';

type PropsT = {
  isOpen: boolean;
};

export const Navigation = ({ isOpen }: PropsT) => {
  const baseNavigationClasses = 'gap-4 md:flex-row md:flex';
  const baseOpenedClasses = 'flex flex-col items-center justify-center bg-[#6291A6] absolute top-0 left-0 right-0 bottom-0 h-svh';

  const renderDropdownItems = (dropdownItems: any) => {
    return (
      <Menu.Items className="absolute top-12 z-10 mt-1 w-56 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {dropdownItems.map(({ id, path, name }: any) => (
          <Menu.Item key={id}>
            {({ active }) => (
              <Link
                to={path}
                rootClassNames={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
              >
                {name}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    );
  };

  return (
    <div className={`${baseNavigationClasses} ${isOpen ? baseOpenedClasses : 'hidden'} md:bg-transparent md:static px-6`}>
      {links.map(({ name, dropdownItems }, index) => (
        <Menu as="div" className="relative flex" key={index}>
          {({ open }) => (
            <>
              <Menu.Button className="block w-full px-4 py-2 text-base text-white bg-transparent border-0 rounded-md md:bg-transparent md:border-0 md:hover:bg-transparent md:hover:text-primary focus:outline-none">
                {name}
              </Menu.Button>
              {dropdownItems && (
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {renderDropdownItems(dropdownItems)}
                </Transition>
              )}
            </>
          )}
        </Menu>
      ))}

      <Button variant="primary" rootClassNames='w-full max-w-md mt-10 md:mt-0 md:w-auto md:ml-4 lg:ml-15'>Вхід</Button>
    </div>
  )
}

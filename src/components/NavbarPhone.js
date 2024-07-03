import React, { useState } from 'react';
import {
  BellAlertIcon as BellAlertIconOutline,
  HomeIcon as HomeIconOutline,
  UserCircleIcon as UserCircleIconOutline
} from '@heroicons/react/24/outline';

import {
  BellAlertIcon as BellAlertIconSolid,
  HomeIcon as HomeIconSolid,
  UserCircleIcon as UserCircleIconSolid
} from '@heroicons/react/24/solid';

const Navbar = () => {
  const [active, setActive] = useState('home');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <NavItem
          icon={active === 'notifications' ? <BellAlertIconSolid className="h-6 w-6 text-gray-600" /> : <BellAlertIconOutline className="h-6 w-6 text-gray-600" />}
          isActive={active === 'notifications'}
          onClick={() => setActive('notifications')}
        />
        <NavItem
          icon={active === 'home' ? <HomeIconSolid className="h-6 w-6 text-gray-600" /> : <HomeIconOutline className="h-6 w-6 text-gray-600" />}
          isActive={active === 'home'}
          onClick={() => setActive('home')}
        />
        <NavItem
          icon={active === 'profile' ? <UserCircleIconSolid className="h-6 w-6 text-gray-600" /> : <UserCircleIconOutline className="h-6 w-6 text-gray-600" />}
          isActive={active === 'profile'}
          onClick={() => setActive('profile')}
        />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, onClick }) => (
  <div className="flex flex-col items-center justify-center" onClick={onClick}>
    {icon}
  </div>
);

export default Navbar;

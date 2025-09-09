import Logo from '@/assets/images/logo.svg';

import UnitsDropdown from './units-dropdown';

export default function Navbar() {
  return (
    <header className='mx-auto max-w-7xl p-200 sm:p-300 lg:px-400'>
      <div className='flex items-center justify-between'>
        <img src={Logo} alt='' className='h-[28px] sm:h-500' />
        <UnitsDropdown />
      </div>
    </header>
  );
}

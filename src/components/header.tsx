import Logo from '../assets/images/logo.svg';
import UnitsDropdown from './units-dropdown';

export default function Navbar() {
  return (
    <header className='flex h-24 items-center justify-between'>
      <img src={Logo} alt='' />
      <UnitsDropdown />
    </header>
  );
}

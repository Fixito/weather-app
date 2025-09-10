import SearchIcon from '@/assets/images/icon-search.svg';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function SearchBar() {
  return (
    <form className='mx-auto grid max-w-[41rem] items-center gap-150 sm:grid-cols-[1fr_auto] sm:gap-200'>
      <div className='relative'>
        <img
          src={SearchIcon}
          alt=''
          className='absolute top-1/2 left-6 -translate-y-1/2'
        />
        <Input
          type='text'
          name='query'
          placeholder='Search for a place...'
          className='bg-secondary placeholder:text-md py-200 pl-[3.75rem] hover:bg-neutral-700'
        />
      </div>

      <Button
        type='submit'
        size='lg'
        className='focus-visible:ring-primary text-md rounded-12 px-300 py-200 hover:bg-blue-700'
      >
        Search
      </Button>
    </form>
  );
}

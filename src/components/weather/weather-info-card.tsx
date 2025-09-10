import IconSunny from '@/assets/images/icon-sunny.webp';

import { Card } from '../ui/card';

export default function WeatherInfoCard() {
  return (
    <Card className="rounded-20 min-h-[286px] border-none bg-[url('/bg-today-small.svg')] bg-cover bg-no-repeat p-[24.5px] sm:flex-row sm:items-center sm:justify-between sm:bg-[url('/bg-today-large.svg')] sm:p-300">
      <div className='text-center sm:text-start'>
        <p className='text-lg font-bold'>Berlin, Germany</p>
        <p className='mt-150 opacity-80'>Tuesday, Aug 5, 2025</p>
      </div>
      <div className='flex items-center justify-center gap-250 text-3xl font-semibold italic'>
        <img src={IconSunny} alt='Sunny' className='w-[7.5rem]' />
        <p>20°</p>
      </div>
    </Card>
  );
}

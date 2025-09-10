import IconOvercast from '@/assets/images/icon-overcast.webp';

import { Card, CardContent } from '../../ui/card';

export default function HourlyForecastCard() {
  return (
    <Card className='bg-muted py-125 pr-200 pl-150'>
      <CardContent className='flex items-center justify-between'>
        <div className='flex items-center gap-100'>
          <img src={IconOvercast} alt='Overcast' className='w-500' />
          <p className='text-md font-medium'>3 PM</p>
        </div>
        <p className='text-base font-medium'>20°</p>
      </CardContent>
    </Card>
  );
}

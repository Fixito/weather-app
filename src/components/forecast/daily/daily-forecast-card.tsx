import IconDrizzle from '@/assets/images/icon-drizzle.webp';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card';

export default function DailyForecastCard() {
  return (
    <Card className='rounded-12 gap-200 px-125 py-200'>
      <CardHeader>
        <CardTitle className='text-center text-base font-medium'>Tue</CardTitle>
      </CardHeader>
      <CardContent className='mx-auto'>
        <img src={IconDrizzle} alt='' className='w-[3.75rem]' />
      </CardContent>
      <CardFooter className='justify-between'>
        <p className='text-sm font-medium'>20°</p>
        <p className='text-muted-foreground text-sm font-medium'>14°</p>
      </CardFooter>
    </Card>
  );
}

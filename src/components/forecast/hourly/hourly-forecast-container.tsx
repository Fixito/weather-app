import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import HourlyForecastCard from './hourly-forecast-card';
import HourlyForecastDropdown from './hourly-forecast-dropdown';

export default function HourlyForecastContainer() {
  return (
    <Card className='rounded-20'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle className='text-md font-semibold'>Hourly Forecast</CardTitle>
        <HourlyForecastDropdown />
      </CardHeader>
      <CardContent className='grid gap-200'>
        <HourlyForecastCard />
        <HourlyForecastCard />
        <HourlyForecastCard />
        <HourlyForecastCard />
        <HourlyForecastCard />
        <HourlyForecastCard />
        <HourlyForecastCard />
        <HourlyForecastCard />
      </CardContent>
    </Card>
  );
}

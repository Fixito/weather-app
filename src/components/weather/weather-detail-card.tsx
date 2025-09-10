import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface WeatherDetailCardProps {
  label: string;
  value: string;
}

export default function WeatherDetailCard({
  label,
  value,
}: WeatherDetailCardProps) {
  return (
    <Card className='rounded-12 p-250'>
      <CardHeader className='block'>
        <CardTitle className='text-muted-foreground text-base font-medium'>
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-xl font-light'>{value}</p>
      </CardContent>
    </Card>
  );
}

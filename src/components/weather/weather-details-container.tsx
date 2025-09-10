import WeatherDetailCard from './weather-detail-card';

export default function WeatherDetailsContainer() {
  return (
    <div className='grid grid-cols-2 gap-200 sm:grid-cols-4 sm:gap-250'>
      <WeatherDetailCard label='Feels Like' value='18°' />
      <WeatherDetailCard label='Humidity' value='46%' />
      <WeatherDetailCard label='Wind' value='14 km/h' />
      <WeatherDetailCard label='Precipitation' value='0 mm' />
    </div>
  );
}

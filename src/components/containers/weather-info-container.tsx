import DailyForecastContainer from '../forecast/daily/daily-forecast-container';
import HourlyForecastContainer from '../forecast/hourly/hourly-forecast-container';
import WeatherInfo from '../weather/weather-now-card';

export default function WeatherInfoContainer() {
  return (
    <div className='grid gap-400 lg:grid-cols-[1fr_24rem]'>
      <div className='space-y-400 lg:space-y-600'>
        <WeatherInfo />
        <DailyForecastContainer />
      </div>
      <HourlyForecastContainer />
    </div>
  );
}

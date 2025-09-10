import WeatherDetailsContainer from './weather-details-container';
import WeatherInfoCard from './weather-info-card';

export default function WeatherInfo() {
  return (
    <section className='space-y-250 lg:space-y-400'>
      <WeatherInfoCard />
      <WeatherDetailsContainer />
    </section>
  );
}

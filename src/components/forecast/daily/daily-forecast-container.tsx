import DailyForecastCard from './daily-forecast-card';

export default function DailyForecastContainer() {
  return (
    <section>
      <h2 className='text-md font-semibold'>Daily Forecast</h2>

      <div className='mt-250 grid grid-cols-3 gap-200 sm:grid-cols-7'>
        <DailyForecastCard />
        <DailyForecastCard />
        <DailyForecastCard />
        <DailyForecastCard />
        <DailyForecastCard />
        <DailyForecastCard />
        <DailyForecastCard />
      </div>
    </section>
  );
}

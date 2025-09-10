import WeatherInfoContainer from './components/containers/weather-info-container';
import Header from './components/layout/header';
import SearchBar from './components/layout/search-bar';

export default function App() {
  return (
    <>
      <Header />

      <h1 className='font-display mx-auto px-200 py-400 text-center text-2xl font-bold text-balance sm:max-w-md lg:max-w-full lg:py-600'>
        How's the sky looking today?
      </h1>

      <main className='mx-auto max-w-7xl space-y-400 p-200 pb-600 sm:space-y-600 sm:px-300 sm:pb-1000 lg:px-400'>
        <SearchBar />
        <WeatherInfoContainer />
      </main>
    </>
  );
}

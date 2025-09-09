import Header from './components/header';
import SearchBar from './components/search-bar';

export default function App() {
  return (
    <>
      <Header />
      <h1 className='font-display my-600 text-center text-2xl font-bold text-balance lg:my-800'>
        How's the sky looking today?
      </h1>

      <main className='mx-auto max-w-7xl px-200 pb-600 sm:px-300 sm:pb-1000 lg:px-0'>
        <SearchBar />
      </main>
    </>
  );
}

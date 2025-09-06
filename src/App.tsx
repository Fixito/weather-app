import { Button } from './components/ui/button';

export default function App() {
  return (
    <main className='flex min-h-svh flex-col items-center justify-center gap-2'>
      <h1 className='text-3xl font-bold'>Weather App</h1>
      <Button>Click me</Button>
    </main>
  );
}

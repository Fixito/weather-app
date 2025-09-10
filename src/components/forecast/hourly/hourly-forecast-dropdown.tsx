import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

export default function HourlyForecastDropdown() {
  return (
    <Select>
      <SelectTrigger
        className='bg-accent focus-visible:ring-ring data-[placeholder]:text-foreground cursor-pointer border-none text-sm focus-visible:ring-offset-2'
        aria-label='Select day for hourly forecast'
      >
        <SelectValue placeholder='-' />
      </SelectTrigger>
      <SelectContent className='space-y-50'>
        <SelectItem value='monday'>Monday</SelectItem>
        <SelectItem value='tuesday'>Tuesday</SelectItem>
        <SelectItem value='wednesday'>Wednesday</SelectItem>
        <SelectItem value='thursday'>Thursday</SelectItem>
        <SelectItem value='friday'>Friday</SelectItem>
        <SelectItem value='saturday'>Saturday</SelectItem>
        <SelectItem value='sunday'>Sunday</SelectItem>
      </SelectContent>
    </Select>
  );
}

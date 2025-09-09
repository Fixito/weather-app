import { useState } from 'react';

import IconCheckmark from '@/assets/images/icon-checkmark.svg';
import IconDropdown from '@/assets/images/icon-dropdown.svg';
import IconUnits from '@/assets/images/icon-units.svg';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Units {
  temperature: 'celsius' | 'fahrenheit';
  windSpeed: 'kmh' | 'mph';
  precipitation: 'mm' | 'inches';
}

export default function DropdownUnits() {
  const [units, setUnits] = useState<Units>({
    temperature: 'celsius',
    windSpeed: 'kmh',
    precipitation: 'mm',
  });

  const switchToImperial = () => {
    setUnits({
      temperature: 'fahrenheit',
      windSpeed: 'mph',
      precipitation: 'inches',
    });
  };

  const updateUnit = (type: keyof Units, value: string) => {
    setUnits((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='bg-secondary focus-visible:ring-offset-background focus-visible:ring-ring border-none px-100 py-125 text-sm focus-visible:ring-[3px] focus-visible:ring-offset-2 sm:h-[43px]'
        >
          <img src={IconUnits} alt='' />
          Units
          <img src={IconDropdown} alt='' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='border-none'>
        <DropdownMenuItem onClick={switchToImperial}>
          Switch to Imperial
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Temperature</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => updateUnit('temperature', 'celsius')}>
          Celsius (°C)
          {units.temperature === 'celsius' && (
            <img src={IconCheckmark} alt='' />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => updateUnit('temperature', 'fahrenheit')}
        >
          Fahrenheit (°F)
          {units.temperature === 'fahrenheit' && (
            <img src={IconCheckmark} alt='' />
          )}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Wind Speed</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => updateUnit('windSpeed', 'kmh')}>
          km/h
          {units.windSpeed === 'kmh' && <img src={IconCheckmark} alt='' />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateUnit('windSpeed', 'mph')}>
          mph
          {units.windSpeed === 'mph' && <img src={IconCheckmark} alt='' />}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Precipitation</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => updateUnit('precipitation', 'mm')}>
          Millimeters (mm)
          {units.precipitation === 'mm' && <img src={IconCheckmark} alt='' />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateUnit('precipitation', 'inches')}>
          Inches (in)
          {units.precipitation === 'inches' && (
            <img src={IconCheckmark} alt='' />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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
          className='bg-secondary focus-visible:ring-ring sm:rounded-8 border-none px-100 py-125 text-sm focus-visible:ring-offset-2 sm:h-[43px] sm:px-200 sm:py-150'
        >
          <img src={IconUnits} alt='' />
          Units
          <img src={IconDropdown} alt='' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={switchToImperial}>
          Switch to Imperial
        </DropdownMenuItem>

        <DropdownMenuSeparator className='bg-popover' />

        <DropdownMenuLabel>Temperature</DropdownMenuLabel>
        <div className='space-y-050'>
          <DropdownMenuItem
            onClick={() => updateUnit('temperature', 'celsius')}
          >
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
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Wind Speed</DropdownMenuLabel>
        <div className='space-y-050 mt-100'>
          <DropdownMenuItem onClick={() => updateUnit('windSpeed', 'kmh')}>
            km/h
            {units.windSpeed === 'kmh' && <img src={IconCheckmark} alt='' />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => updateUnit('windSpeed', 'mph')}>
            mph
            {units.windSpeed === 'mph' && <img src={IconCheckmark} alt='' />}
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Precipitation</DropdownMenuLabel>
        <div className='space-y-050 mt-100'>
          <DropdownMenuItem onClick={() => updateUnit('precipitation', 'mm')}>
            Millimeters (mm)
            {units.precipitation === 'mm' && <img src={IconCheckmark} alt='' />}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => updateUnit('precipitation', 'inches')}
          >
            Inches (in)
            {units.precipitation === 'inches' && (
              <img src={IconCheckmark} alt='' />
            )}
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

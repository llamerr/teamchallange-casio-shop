'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { FilterState, MachineEvents } from '@/state/FilterMachine';

const generateAccordionItem = (
  filterName: keyof FilterState,
  filterTitle: string,
  options: Record<string, string>,
  currentFilters: string[],
  handleFilterChange: (filterValue: string) => void,
) => (
  <AccordionItem key={filterName} value={filterName}>
    <AccordionTrigger className="text-sm text-blue-800">{filterTitle}</AccordionTrigger>
    <AccordionContent className="space-y-2">
      {Object.entries(options).map(([value, label]) => (
        <Label key={value} className="flex items-center gap-2 text-blue-800">
          <Checkbox
            checked={currentFilters.includes(value)}
            onCheckedChange={() => handleFilterChange(value)}
          />
          {label}
        </Label>
      ))}
    </AccordionContent>
  </AccordionItem>
);

type Filter = {
  title: string;
  event: MachineEvents['type'];
  options: Record<string, string>;
};
const FILTERS: Record<keyof FilterState, Filter> = {
  price: {
    title: 'Price',
    event: 'UPDATE_PRICE',
    options: {
      under50: 'Under $50',
      under100: '$50 - $100',
      under200: '$100 - $200',
    },
  },
  gender: {
    title: 'Gender',
    event: 'UPDATE_GENDER',
    options: {
      men: 'Men',
      women: 'Women',
      unisex: 'Unisex',
    },
  },
  color: {
    title: 'Color',
    event: 'UPDATE_COLOR',
    options: {
      black: 'Black',
      blue: 'Blue',
      silver: 'Silver',
      gold: 'Gold',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      brown: 'Brown',
      orange: 'Orange',
      purple: 'Purple',
      pink: 'Pink',
      white: 'White',
    },
  },
  movement: {
    title: 'Movement',
    event: 'UPDATE_MOVEMENT',
    options: {
      solar: 'Solar Quartz',
      digital: 'Quartz Digital',
      mechanical: 'Mechanical',
      automatic: 'Automatic',
    },
  },
};

export type ProductFiltersProps = {
  state: {
    context: FilterState;
  };
  sendAction: (event: MachineEvents) => void;
};

export function ProductFilters({ state, sendAction }: ProductFiltersProps) {
  const filters = state.context;

  const handleFilterChange = (filterName: keyof FilterState) => (filterValue: string) => {
    const currentFilterValue = filters[filterName];
    const newFilterValue = currentFilterValue.includes(filterValue)
      ? currentFilterValue.filter(p => p !== filterValue)
      : [...currentFilterValue, filterValue];

    sendAction({
      type: FILTERS[filterName].event,
      payload: newFilterValue,
    });
  };

  const handleResetFilters = () => {
    sendAction({ type: 'RESET_FILTERS' });
  };

  const handleApplyFilters = () => {
    sendAction({ type: 'APPLY_FILTERS' });
  };

  return (
    <div className="space-y-4">
      <Accordion type="multiple" className="space-y-2">
        {Object.entries(FILTERS).map(([name, { title, options }]) => (
          generateAccordionItem(
            name as keyof FilterState,
            title,
            options,
            filters[name as keyof FilterState],
            handleFilterChange(name as keyof FilterState),
          )
        ))}
      </Accordion>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={handleResetFilters}
        >
          Reset Filters
        </Button>
        <Button
          size="sm"
          className="flex-1"
          onClick={handleApplyFilters}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}

import { useMachine } from '@xstate/react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { filterMachine, type FilterState, type MachineEvents } from '@/state/FilterMachine';

const generateAccordionItem = (
  value: string,
  title: string,
  options: string[],
  currentFilters: string[],
  handleFilterChange: (filterValue: string) => void,
) => (
  <AccordionItem key={value} value={value}>
    <AccordionTrigger className="text-sm text-blue-800">{title}</AccordionTrigger>
    <AccordionContent className="space-y-2">
      {options.map(value => (
        <Label key={value} className="flex items-center gap-2 text-blue-800">
          <Checkbox
            checked={currentFilters.includes(value)}
            onCheckedChange={() => handleFilterChange(value)}
          />
          {value}
        </Label>
      ))}
    </AccordionContent>
  </AccordionItem>
);

type Filter = {
  title: string;
  event: MachineEvents['type'];
  options: string[];
};
const FILTERS: Record<keyof FilterState, Filter> = {
  price: {
    title: 'Price',
    event: 'UPDATE_PRICE',
    options: ['Under $50', '$50 - $100', '$100 - $200'],
  },
  gender: {
    title: 'Gender',
    event: 'UPDATE_GENDER',
    options: ['Men', 'Women', 'Unisex'],
  },
  color: {
    title: 'Color',
    event: 'UPDATE_COLOR',
    options: ['Black', 'Blue', 'Silver', 'Gold', 'Red', 'Green', 'Yellow', 'Brown', 'Orange', 'Purple', 'Pink', 'White'],
  },
  movement: {
    title: 'Movement',
    event: 'UPDATE_MOVEMENT',
    options: ['Solar Quartz', 'Quartz Digital', 'Mechanical', 'Automatic'],
  },
};

export function ProductFilters() {
  // TODO: get from searchParams
  const [state, send] = useMachine(filterMachine, { input: {
    price: [],
    gender: [],
    color: [],
    movement: [],
  } });
  const filters = state.context;

  const handleFilterChange = (filterName: keyof FilterState) => (filterValue: string) => {
    const currentFilterValue = filters[filterName];
    const newFilterValue = currentFilterValue.includes(filterValue)
      ? currentFilterValue.filter(p => p !== filterValue)
      : [...currentFilterValue, filterValue];

    send({
      type: FILTERS[filterName].event,
      payload: newFilterValue,
    });
  };

  const handleResetFilters = () => {
    send({ type: 'RESET_FILTERS' });
  };

  const handleApplyFilters = () => {
    send({ type: 'APPLY_FILTERS' });
  };

  return (
    <div className="space-y-4">
      <Accordion type="multiple" className="space-y-2">
        {Object.entries(FILTERS).map(([name, { title, options }]) => (
          generateAccordionItem(
            name,
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

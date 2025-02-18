'use client';

import { isEqual, uniq } from 'lodash';
import { useEffect, useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useQueryParams } from '@/hooks/useQueryParams';
import { type AllMachineEvents, type FilterKeys, FILTERS, type FilterState, type OptionsFor } from '@/state/FilterMachine';

const generateAccordionItem = <Key extends FilterKeys>({
  filterName,
  filterTitle,
  options,
  currentFilters,
  handleFilterChange,
}: {
  filterName: keyof FilterState;
  filterTitle: string;
  options: Partial<Record<OptionsFor<Key>, string>>;
  currentFilters: OptionsFor<Key>[];
  handleFilterChange: (filterValue: OptionsFor<Key>) => void;
}) => (
  <AccordionItem key={filterName} value={filterName}>
    <AccordionTrigger className="text-sm text-blue-800">{filterTitle}</AccordionTrigger>
    <AccordionContent className="space-y-2">
      {Object.entries(options).map(([value, label]) => (
        <Label key={value} className="flex items-center gap-2 text-blue-800">
          <Checkbox
            checked={currentFilters.includes(value as OptionsFor<Key>)}
            onCheckedChange={() => handleFilterChange(value as OptionsFor<Key>)}
          />
          {label as string}
        </Label>
      ))}
    </AccordionContent>
  </AccordionItem>
);

export type ProductFiltersProps = {
  state: {
    context: FilterState;
  };
  sendAction: (event: AllMachineEvents) => void;
};

export function ProductFilters({ state, sendAction }: ProductFiltersProps) {
  const filters = state.context;
  const [expandedFilters, setExpandedFilters] = useState<FilterKeys[]>(
    (Object.keys(filters) as FilterKeys[]).filter(p => filters[p].length > 0),
  );

  const { get, set: setQueryParams } = useQueryParams();

  // When navigating from header, we update active filters from url, which should expand them
  useEffect(() => {
    const newExpandedFilters = uniq([
      ...expandedFilters,
      ...(Object.keys(filters) as FilterKeys[]).filter(p => filters[p].length > 0),
    ]);
    // but prevent update when user manually expanded or collapsed something
    if (typeof get('expandedFilters') === 'undefined' && !isEqual(expandedFilters, newExpandedFilters)) {
      setExpandedFilters(newExpandedFilters);
      setQueryParams('expandedFilters', expandedFilters);
    }
  }, [filters, expandedFilters, get, setQueryParams]);

  const handleFilterChange = <Key extends FilterKeys>(filterName: Key) => (filterValue: OptionsFor<Key>) => {
    const currentFilterValue = filters[filterName];
    const newFilterValue = currentFilterValue.includes(filterValue)
      ? currentFilterValue.filter(p => p !== filterValue)
      : [...currentFilterValue, filterValue];

    sendAction({
      type: FILTERS[filterName].event,
      payload: newFilterValue,
    } as Extract<AllMachineEvents, { type: typeof FILTERS[Key]['event'] }>);

    setQueryParams(filterName, newFilterValue);
  };

  const handleResetFilters = () => {
    sendAction({ type: 'RESET_FILTERS' });
  };

  const handleApplyFilters = () => {
    sendAction({ type: 'APPLY_FILTERS' });
  };

  return (
    <div className="space-y-4">
      <Accordion
        type="multiple"
        value={expandedFilters}
        onValueChange={(value) => {
          setExpandedFilters(value as FilterKeys[]);
          setQueryParams('expandedFilters', value.length > 0 ? value : ['']);
        }}
        className="space-y-2"
      >
        {Object.entries(FILTERS).map(([name, { title, options }]) => (
          generateAccordionItem({
            filterName: name as FilterKeys,
            filterTitle: title,
            options,
            currentFilters: filters[name as FilterKeys],
            handleFilterChange: handleFilterChange(name as FilterKeys),
          })
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

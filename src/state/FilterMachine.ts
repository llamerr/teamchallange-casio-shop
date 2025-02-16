import { assign, setup } from 'xstate';

type PriceOptions = 'under50' | 'under100' | 'under200';
type FeaturesOptions = 'bluetooth' | 'altimeter' | 'pressure' | 'temperature' | 'step-tracker' | 'heart-rate';
type GenderOptions = 'men' | 'women' | 'unisex';
type ColorOptions = 'black' | 'blue' | 'silver' | 'gold' | 'red' | 'green' | 'yellow' | 'brown' | 'orange' | 'purple' | 'pink' | 'white';
type MovementOptions = 'solar' | 'digital' | 'mechanical' | 'automatic';

type FilterOptions = {
  price: PriceOptions;
  features: FeaturesOptions;
  gender: GenderOptions;
  color: ColorOptions;
  movement: MovementOptions;
};

export type FilterKeys = 'price' | 'features' | 'gender' | 'color' | 'movement';

export type OptionsFor<Key extends FilterKeys> = FilterOptions[Key];

export type FilterState = {
  [Key in FilterKeys]: OptionsFor<Key>[];
};

type Filter<TOptions extends PriceOptions | FeaturesOptions | GenderOptions | ColorOptions | MovementOptions> = {
  title: string;
  event: AllMachineEvents['type'];
  options: Record<TOptions, string>;
};

export const FILTERS: {
  [Key in FilterKeys]: Filter<FilterOptions[Key]>
} = {
  price: {
    title: 'Price',
    event: 'UPDATE_PRICE',
    options: {
      under50: 'Under $50',
      under100: '$50 - $100',
      under200: '$100 - $200',
    },
  },
  features: {
    title: 'Features',
    event: 'UPDATE_FEATURES',
    options: {
      'bluetooth': 'Bluetooth',
      'altimeter': 'Altimeter',
      'pressure': 'Pressure',
      'temperature': 'Temperature',
      'step-tracker': 'Step tracker',
      'heart-rate': 'Heart rate',
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
} as const;

// Initial filter state matching the FilterState type
export const initialFilterState: ({ input }: { input?: FilterState }) => FilterState = ({ input }) => ({
  price: input?.price || [],
  features: input?.features || [],
  gender: input?.gender || [],
  color: input?.color || [],
  movement: input?.movement || [],
});

type PriceUpdateEvent = { type: 'UPDATE_PRICE'; payload: PriceOptions[] };
type FeaturesUpdateEvent = { type: 'UPDATE_FEATURES'; payload: FeaturesOptions[] };
type GenderUpdateEvent = { type: 'UPDATE_GENDER'; payload: GenderOptions[] };
type ColorUpdateEvent = { type: 'UPDATE_COLOR'; payload: ColorOptions[] };
type MovementUpdateEvent = { type: 'UPDATE_MOVEMENT'; payload: MovementOptions[] };
type ApplyFiltersEvent = { type: 'APPLY_FILTERS' };
type ResetFiltersEvent = { type: 'RESET_FILTERS' };

export type AllMachineEvents =
  | PriceUpdateEvent
  | FeaturesUpdateEvent
  | GenderUpdateEvent
  | ColorUpdateEvent
  | MovementUpdateEvent
  | ApplyFiltersEvent
  | ResetFiltersEvent;

export const filterMachine = setup({
  types: {
    context: {} as FilterState,
    input: {} as FilterState,
    events: {} as AllMachineEvents,
  },
  actions: {
    updatePrice: assign({
      price: ({ event }) => (event as PriceUpdateEvent).payload,
    }),
    updateFeatures: assign({
      features: ({ event }) => (event as FeaturesUpdateEvent).payload,
    }),
    updateGender: assign({
      gender: ({ event }) => (event as GenderUpdateEvent).payload,
    }),
    updateColor: assign({
      color: ({ event }) => (event as ColorUpdateEvent).payload,
    }),
    updateMovement: assign({
      movement: ({ event }) => (event as MovementUpdateEvent).payload,
    }),
  },
}).createMachine({
  id: 'filterMachine',
  initial: 'idle',
  context: initialFilterState,
  states: {
    idle: {
      on: {
        UPDATE_PRICE: {
          actions: ['updatePrice'],
        },
        UPDATE_FEATURES: {
          actions: ['updateFeatures'],
        },
        UPDATE_GENDER: {
          actions: ['updateGender'],
        },
        UPDATE_COLOR: {
          actions: ['updateColor'],
        },
        UPDATE_MOVEMENT: {
          actions: ['updateMovement'],
        },
        APPLY_FILTERS: 'filtering',
      },
    },
    filtering: {
      on: {
        UPDATE_PRICE: {
          target: 'idle',
          actions: 'updatePrice',
        },
        UPDATE_FEATURES: {
          target: 'idle',
          actions: 'updateFeatures',
        },
        UPDATE_GENDER: {
          target: 'idle',
          actions: 'updateGender',
        },
        UPDATE_COLOR: {
          target: 'idle',
          actions: 'updateColor',
        },
        UPDATE_MOVEMENT: {
          target: 'idle',
          actions: 'updateMovement',
        },
        RESET_FILTERS: {
          target: 'idle',
          actions: assign(initialFilterState({})),
        },
      },
    },
  },
});

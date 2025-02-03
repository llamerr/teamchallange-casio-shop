import { assign, setup } from 'xstate';

export type FilterState = {
  price: string[];
  gender: string[];
  color: string[];
  movement: string[];
};

// Initial filter state matching the FilterState type
export const initialFilterState: ({ input }: { input?: FilterState }) => FilterState = ({ input }) => ({
  price: input?.price || [],
  gender: input?.gender || [],
  color: input?.color || [],
  movement: input?.movement || [],
});

type PriceUpdateEvent = { type: 'UPDATE_PRICE'; payload: string[] };
type GenderUpdateEvent = { type: 'UPDATE_GENDER'; payload: string[] };
type ColorUpdateEvent = { type: 'UPDATE_COLOR'; payload: string[] };
type MovementUpdateEvent = { type: 'UPDATE_MOVEMENT'; payload: string[] };
type ApplyFiltersEvent = { type: 'APPLY_FILTERS' };
type ResetFiltersEvent = { type: 'RESET_FILTERS' };

export type MachineEvents =
  | PriceUpdateEvent
  | GenderUpdateEvent
  | ColorUpdateEvent
  | MovementUpdateEvent
  | ApplyFiltersEvent
  | ResetFiltersEvent;

export const filterMachine = setup({
  types: {
    context: {} as FilterState,
    input: {} as FilterState,
    events: {} as MachineEvents,
  },
  actions: {
    updatePrice: assign({
      price: ({ event }) => (event as PriceUpdateEvent).payload,
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

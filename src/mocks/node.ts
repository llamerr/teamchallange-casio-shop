import { setupServer } from 'msw/node';

import { mockHandlers } from '@/services/api/mockHandlers';

export const server = setupServer(...mockHandlers);

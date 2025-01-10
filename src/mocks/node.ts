import { setupServer } from 'msw/node';

import { collectionsHandlers } from '@/services/api/dto/Collection.mock';
import { productHandlers } from '@/services/api/dto/Product.mock';

export const server = setupServer(...productHandlers, ...collectionsHandlers);

import { collectionsHandlers } from './dto/Collection.mock';
import { newsHandlers } from './dto/News.mock';
import { productHandlers } from './dto/Product.mock';

export const mockHandlers = [...productHandlers, ...collectionsHandlers, ...newsHandlers];

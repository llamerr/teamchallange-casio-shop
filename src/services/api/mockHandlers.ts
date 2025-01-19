import { collectionsHandlers } from './dto/Collection.mock';
import { keyFeaturesHandlers } from './dto/KeyFeature.mock';
import { newsHandlers } from './dto/News.mock';
import { productHandlers } from './dto/Product.mock';

export const mockHandlers = [
  ...productHandlers,
  ...collectionsHandlers,
  ...newsHandlers,
  ...keyFeaturesHandlers,
];

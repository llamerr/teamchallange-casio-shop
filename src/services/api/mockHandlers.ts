import { collectionsHandlers } from './dto/Collection/Collection.mock';
import { keyFeaturesHandlers } from './dto/KeyFeature/KeyFeature.mock';
import { newsHandlers } from './dto/News/News.mock';
import { productHandlers } from './dto/Product/Product.mock';

export const mockHandlers = [
  ...productHandlers,
  ...collectionsHandlers,
  ...newsHandlers,
  ...keyFeaturesHandlers,
];

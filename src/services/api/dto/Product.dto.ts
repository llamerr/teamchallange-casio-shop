export type ProductDTO = {
  id: string;
  badges: string[];
  image?: string;
  title: string;
  slug: string;
  collection: string;
  collectionSlug: string;
  size: string;
  colors: number;
  price: number;
  originalPrice?: number;
};

export type ProductDetailsDTO = ProductDTO & {
  imagePromo: string;
  basicInformation: {
    sections: Array<{
      title: string;
      description: string;
    }>;
  };
  specifications: {
    specs: Array<{
      label: string;
      value: string;
    }>;
    features: string[];
  };
  deliveryAndReturns: {
    shipping: {
      title: string;
      options: string[];
    };
    payment: {
      title: string;
      options: string[];
    };
    returns: {
      title: string;
      description: string;
    };
  };
  manual: {
    description: string;
    list: Array<{
      language: string;
      url: string;
    }>;
  };
};

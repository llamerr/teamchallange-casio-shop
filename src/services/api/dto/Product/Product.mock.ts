import { http, HttpResponse } from 'msw';

import { Env } from '@/libs/Env';
import type { ProductDetailsDTO, ProductDTO } from '@/services/api/dto/Product/Product.dto';
import { LANDSCAPE_IMAGES, PORTRAIT_IMAGES } from '@/services/api/uploadThingFiles';

export const products: ProductDTO[] = [
  {
    badges: ['Limited', 'Bluetooth', 'Touch Solar', 'Water Resistant'],
    image: '',
    title: 'Casio G-Shock Frogman',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    id: 'JY8146-54A',
    slug: 'casio-g-shock-frogman-jy8146-54a',
  },
  {
    badges: ['Bestsellers', 'New', 'Water Resistant'],
    image: PORTRAIT_IMAGES[0],
    title: 'Casio G-Shock GB5600',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    id: 'JY8146-54B',
    slug: 'casio-g-shock-gb5600-jy8146-54b',
  },
  {
    badges: ['Touch Solar', 'Water Resistant', 'Limited', 'Bluetooth'],
    image: PORTRAIT_IMAGES[1],
    title: 'Casio G-Shock GB5600',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    id: 'JY8146-54E',
    slug: 'casio-g-shock-gb5600-jy8146-54e',
  },
  {
    badges: [],
    image: PORTRAIT_IMAGES[2],
    title: 'Casio G-Shock GA-100',
    collection: 'SOLAR POWERED',
    collectionSlug: 'solar-powered',
    size: '42 mm',
    colors: 5,
    price: 110.00,
    originalPrice: 150.00,
    id: 'AB1234-XY',
    slug: 'casio-g-shock-ga-100-ab1234-xy',
  },
];

export const similarProducts: ProductDTO[] = [
  {
    badges: ['Limited', 'Bluetooth'],
    image: '',
    title: 'Seiko 5 Sports',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    id: 'JY8147-54A',
    slug: 'seiko-5-sports-jy8146-54a',
  },
  {
    badges: ['Bestsellers', 'New'],
    image: PORTRAIT_IMAGES[3],
    title: 'Casio G-Shock GB5600',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    id: 'JY8147-54B',
    slug: 'casio-g-shock-gb5600-jy8146-54b',
  },
  {
    badges: ['Touch Solar'],
    image: PORTRAIT_IMAGES[4],
    title: 'Casio G-Shock GA-100',
    collection: 'SOLAR POWERED',
    collectionSlug: 'solar-powered',
    size: '42 mm',
    colors: 5,
    price: 110.00,
    originalPrice: 150.00,
    id: 'AB1237-XY',
    slug: 'casio-g-shock-ga-100-ab1234-xy',
  },
  {
    badges: ['Children', 'Water Resistant', 'Lightweight'],
    image: PORTRAIT_IMAGES[5],
    title: 'Casio Baby-G BA-110',
    collection: 'SOLAR POWERED',
    collectionSlug: 'solar-powered',
    size: '42 mm',
    colors: 5,
    price: 110.00,
    originalPrice: 150.00,
    id: 'AB1237-XZ',
    slug: 'casio-baby-g-ba-110-ab1234-xy',
  },
];

export const newProducts: ProductDTO[] = [
  {
    badges: ['Limited', 'Bluetooth'],
    image: '',
    title: 'Casio G-Shock GA-100',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '45 mm',
    colors: 3,
    price: 99.00,
    originalPrice: 139.00,
    id: 'GA100-1A',
    slug: 'casio-g-shock-ga-100-ga100-1a',
  },
  {
    badges: ['Bestsellers', 'New'],
    image: PORTRAIT_IMAGES[6],
    title: 'Casio G-Shock GA-2100',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '45 mm',
    colors: 3,
    price: 99.00,
    originalPrice: 139.00,
    id: 'GA2100-1A',
    slug: 'casio-g-shock-ga-2100-ga2100-1a',
  },
  {
    badges: ['Touch Solar'],
    image: PORTRAIT_IMAGES[7],
    title: 'Casio G-Shock GB-5600',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '43 mm',
    colors: 3,
    price: 99.00,
    originalPrice: 139.00,
    id: 'GB5600-1',
    slug: 'casio-g-shock-gb-5600-gb5600-1',
  },
  {
    badges: [],
    image: PORTRAIT_IMAGES[8],
    title: 'Casio Baby-G BA-110',
    collection: 'SOLAR POWERED',
    collectionSlug: 'solar-powered',
    size: '43 mm',
    colors: 5,
    price: 69.00,
    originalPrice: 89.00,
    id: 'BA110-1A',
    slug: 'casio-baby-g-ba-110-ba110-1a',
  },
];

export const detailedProducts: ProductDetailsDTO[] = [
  {
    badges: ['Limited', 'Bluetooth'],
    image: '',
    imagePromo: LANDSCAPE_IMAGES[0],
    images: [],
    title: 'Casio G-Shock GA-100',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '45 mm',
    colors: 3,
    price: 99.00,
    originalPrice: 139.00,
    id: 'GA100-1A',
    slug: 'casio-g-shock-ga-100-ga100-1a',
    basicInformation: {
      sections: [
        {
          title: 'Timeless Durability with Advanced Technology',
          description: 'The Casio G-Shock GA-100 represents the pinnacle of rugged design and cutting-edge functionality. Engineered to withstand extreme conditions, this watch combines shock resistance, water resistance, and a bold aesthetic that stands out in any environment.',
        },
        {
          title: 'Why Choose the Casio G-Shock GA-100?',
          description: 'Perfect for adventurers, athletes, and those who demand uncompromising performance, the GA-100 offers unparalleled durability without sacrificing style and advanced features.',
        },
      ],
    },
    specifications: {
      specs: [
        { label: 'Collection', value: 'G-Shock' },
        { label: 'Gender', value: 'Unisex' },
        { label: 'Movement', value: 'Quartz Digital' },
        { label: 'Water Resistance', value: '200M' },
        { label: 'Case Material', value: 'Resin' },
        { label: 'Strap Material', value: 'Resin Band' },
      ],
      features: [
        'Shock Resistant',
        'World Time',
        'LED Backlight',
        'Multiple Alarms',
        'Stopwatch',
        'Auto Calendar',
        'Battery Life: Approximately 3 years',
      ],
    },
    deliveryAndReturns: {
      shipping: {
        title: 'Flexible Shipping Options',
        options: [
          'Standard Delivery (3-5 business days)',
          'Express Shipping (1-2 business days)',
          'Free Shipping on Orders Over $100',
        ],
      },
      payment: {
        title: 'Convenient Payment Methods',
        options: [
          'Credit Card',
          'PayPal',
          'Apple Pay',
          'Google Pay',
          'Installment Plans Available',
        ],
      },
      returns: {
        title: 'Hassle-Free Returns',
        description: 'Enjoy peace of mind with our 30-day return policy. If you\'re not completely satisfied, return the watch in its original condition for a full refund or exchange.',
      },
    },
    manual: {
      description: 'Comprehensive user manual to help you maximize the potential of your G-Shock GA-100 watch. Includes detailed instructions for all functions and features.',
      list: [
        { language: 'English', url: '/manuals/ga-100-en.pdf' },
        { language: 'Spanish', url: '/manuals/ga-100-es.pdf' },
        { language: 'French', url: '/manuals/ga-100-fr.pdf' },
        { language: 'German', url: '/manuals/ga-100-de.pdf' },
      ],
    },
  },
  {
    badges: ['Bestsellers', 'Water Resistant'],
    image: PORTRAIT_IMAGES[9],
    images: [
      {
        src: PORTRAIT_IMAGES[12],
        alt: 'Image 1',
      },
      {
        src: PORTRAIT_IMAGES[11],
        alt: 'Image 1',
      },
      {
        src: PORTRAIT_IMAGES[10],
        alt: 'Image 1',
      },
    ],
    imagePromo: LANDSCAPE_IMAGES[1],
    title: 'Casio Edifice EFR-556',
    collection: 'PROFESSIONAL',
    collectionSlug: 'professional',
    size: '44 mm',
    colors: 2,
    price: 129.00,
    originalPrice: 179.00,
    id: 'EFR-556',
    slug: 'casio-edifice-efr-556',
    basicInformation: {
      sections: [
        {
          title: 'Precision Engineering Meets Elegant Design',
          description: 'The Casio Edifice EFR-556 embodies sophistication and technical prowess. Designed for professionals who demand both style and functionality, this watch combines chronograph features with a sleek, modern aesthetic.',
        },
        {
          title: 'Why Choose the Casio Edifice EFR-556?',
          description: 'Perfect for the modern professional who values precision, durability, and a refined look. Its robust construction and elegant design make it suitable for both boardroom and weekend adventures.',
        },
      ],
    },
    specifications: {
      specs: [
        { label: 'Collection', value: 'Edifice' },
        { label: 'Gender', value: 'Men\'s' },
        { label: 'Movement', value: 'Quartz Chronograph' },
        { label: 'Water Resistance', value: '100M' },
        { label: 'Case Material', value: 'Stainless Steel' },
        { label: 'Strap Material', value: 'Stainless Steel' },
      ],
      features: [
        'Chronograph Function',
        'Date Display',
        'Luminous Hands',
        'Tachymeter Scale',
        'Scratch-Resistant Mineral Crystal',
        'Battery Life: Approximately 3 years',
      ],
    },
    deliveryAndReturns: {
      shipping: {
        title: 'Premium Shipping Services',
        options: [
          'Next Day Delivery',
          'International Shipping Available',
          'Free Shipping on Luxury Watches',
        ],
      },
      payment: {
        title: 'Flexible Payment Solutions',
        options: [
          'Credit Card',
          'Bank Transfer',
          'Cryptocurrency',
          '0% Installment Plans',
        ],
      },
      returns: {
        title: 'Luxury Watch Guarantee',
        description: 'Enjoy a 45-day return policy with our premium watch collection. Return or exchange your watch if it doesn\'t meet your expectations.',
      },
    },
    manual: {
      description: 'Comprehensive user guide for the Casio Edifice EFR-556, providing detailed instructions to help you utilize all advanced features of your sophisticated timepiece.',
      list: [
        { language: 'English', url: '/manuals/edifice-efr-556-en.pdf' },
        { language: 'Japanese', url: '/manuals/edifice-efr-556-jp.pdf' },
        { language: 'Chinese', url: '/manuals/edifice-efr-556-cn.pdf' },
      ],
    },
  },
  {
    badges: ['Solar Powered', 'Bluetooth'],
    image: PORTRAIT_IMAGES[10],
    imagePromo: LANDSCAPE_IMAGES[0],
    images: [
      {
        src: PORTRAIT_IMAGES[11],
        alt: 'Image 1',
      },
      {
        src: PORTRAIT_IMAGES[7],
        alt: 'Image 1',
      },
      {
        src: PORTRAIT_IMAGES[0],
        alt: 'Image 1',
      },
      {
        src: PORTRAIT_IMAGES[5],
        alt: 'Image 1',
      },
      {
        src: PORTRAIT_IMAGES[3],
        alt: 'Image 1',
      },
      {
        src: PORTRAIT_IMAGES[8],
        alt: 'Image 1',
      },
      {
        src: PORTRAIT_IMAGES[2],
        alt: 'Image 1',
      },
      {
        src: PORTRAIT_IMAGES[12],
        alt: 'Image 1',
      },
      {
        src: PORTRAIT_IMAGES[4],
        alt: 'Image 1',
      },
    ],
    title: 'Casio Pro Trek PRG-600',
    collection: 'OUTDOOR',
    collectionSlug: 'outdoor',
    size: '52 mm',
    colors: 1,
    price: 199.00,
    originalPrice: 249.00,
    id: 'PRG-600',
    slug: 'casio-pro-trek-prg-600',
    basicInformation: {
      sections: [
        {
          title: 'Advanced Outdoor Companion',
          description: 'The Casio Pro Trek PRG-600 is the ultimate tool for outdoor enthusiasts. Featuring solar power, multiple sensors, and rugged construction, this watch is designed to support your most challenging adventures.',
        },
        {
          title: 'Why Choose the Casio Pro Trek PRG-600?',
          description: 'Ideal for hikers, climbers, and outdoor professionals who need a reliable, feature-rich timepiece that can withstand extreme conditions while providing critical environmental data.',
        },
      ],
    },
    specifications: {
      specs: [
        { label: 'Collection', value: 'Pro Trek' },
        { label: 'Gender', value: 'Unisex' },
        { label: 'Movement', value: 'Solar Quartz' },
        { label: 'Water Resistance', value: '100M' },
        { label: 'Case Material', value: 'Resin' },
        { label: 'Strap Material', value: 'Resin' },
      ],
      features: [
        'Solar Powered',
        'Altimeter',
        'Barometer',
        'Compass',
        'Thermometer',
        'World Time',
        'Bluetooth Connectivity',
        'Sunrise/Sunset Data',
      ],
    },
    deliveryAndReturns: {
      shipping: {
        title: 'Adventure-Ready Shipping',
        options: [
          'Expedited Outdoor Gear Shipping',
          'Free Shipping for Outdoor Enthusiasts',
          'International Expedition Delivery',
        ],
      },
      payment: {
        title: 'Flexible Outdoor Gear Payments',
        options: [
          'Credit Card',
          'PayPal',
          'Outdoor Gear Financing',
          'Gift Cards Available',
        ],
      },
      returns: {
        title: 'Adventure Guarantee',
        description: 'Confidence in every journey with our 60-day return policy. If your Pro Trek doesn\'t meet your outdoor needs, we\'ll make it right.',
      },
    },
    manual: {
      description: 'Comprehensive guide to mastering your Pro Trek PRG-600, with in-depth instructions on utilizing its advanced outdoor tracking and environmental sensing capabilities.',
      list: [
        { language: 'English', url: '/manuals/pro-trek-prg-600-en.pdf' },
        { language: 'French', url: '/manuals/pro-trek-prg-600-fr.pdf' },
        { language: 'German', url: '/manuals/pro-trek-prg-600-de.pdf' },
      ],
    },
  },
  {
    badges: ['Luxury', 'Limited Edition'],
    image: PORTRAIT_IMAGES[11],
    imagePromo: LANDSCAPE_IMAGES[1],
    images: [
      {
        src: PORTRAIT_IMAGES[8],
        alt: 'Image 1',
      },
      {
        src: PORTRAIT_IMAGES[0],
        alt: 'Image 1',
      },
    ],
    title: 'Casio Oceanus OCW-T200S',
    collection: 'PREMIUM',
    collectionSlug: 'premium',
    size: '41 mm',
    colors: 1,
    price: 799.00,
    originalPrice: 999.00,
    id: 'OCW-T200S',
    slug: 'casio-oceanus-ocw-t200s',
    basicInformation: {
      sections: [
        {
          title: 'Pinnacle of Technological Elegance',
          description: 'The Casio Oceanus OCW-T200S represents the zenith of Japanese watchmaking. Combining cutting-edge technology with exquisite craftsmanship, this timepiece is a statement of refined luxury and precision engineering.',
        },
        {
          title: 'Why Choose the Casio Oceanus OCW-T200S?',
          description: 'For the discerning individual who demands the highest standards of performance, design, and technological innovation. A true collector\'s piece that transcends mere timekeeping.',
        },
      ],
    },
    specifications: {
      specs: [
        { label: 'Collection', value: 'Oceanus' },
        { label: 'Gender', value: 'Unisex' },
        { label: 'Movement', value: 'Solar Atomic' },
        { label: 'Water Resistance', value: '100M' },
        { label: 'Case Material', value: 'Titanium' },
        { label: 'Strap Material', value: 'Titanium' },
      ],
      features: [
        'Atomic Timekeeping',
        'Solar Powered',
        'Bluetooth Connectivity',
        'World Time',
        'Perpetual Calendar',
        'Sapphire Crystal',
        'Chronograph',
        'Super Illuminator',
      ],
    },
    deliveryAndReturns: {
      shipping: {
        title: 'Luxury Timepiece Delivery',
        options: [
          'White Glove Delivery',
          'Insured International Shipping',
          'Complimentary Premium Packaging',
        ],
      },
      payment: {
        title: 'Exclusive Payment Options',
        options: [
          'Concierge Payment Service',
          'Luxury Watch Financing',
          'Cryptocurrency',
          'Bank Transfer',
        ],
      },
      returns: {
        title: 'Luxury Timepiece Assurance',
        description: 'Our premium 90-day return policy ensures your complete satisfaction. Each Oceanus comes with a comprehensive warranty and personalized support.',
      },
    },
    manual: {
      description: 'Exclusive user guide for the Oceanus OCW-T200S, providing detailed insights into its advanced technological features and maintenance recommendations.',
      list: [
        { language: 'English', url: '/manuals/oceanus-ocw-t200s-en.pdf' },
        { language: 'Japanese', url: '/manuals/oceanus-ocw-t200s-jp.pdf' },
        { language: 'Chinese', url: '/manuals/oceanus-ocw-t200s-cn.pdf' },
      ],
    },
  },
  {
    id: 'JY8146-54F',
    slug: 'casio-g-shock-frogman-jy8146-54f',
    image: PORTRAIT_IMAGES[12],
    imagePromo: LANDSCAPE_IMAGES[0],
    images: [
      {
        src: PORTRAIT_IMAGES[1],
        alt: 'Image 1',
      },
    ],
    title: 'Casio G-Shock Frogman',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    badges: ['Limited', 'Bluetooth', 'Touch Solar', 'Water Resistant'],
    basicInformation: {
      sections: [
        {
          title: 'Unparalleled Performance',
          description: 'The Frogman JY8146-54F raises the bar for outdoor smartwatches with its cutting-edge features and rugged design. The Casio Vintage A1000MG-9 combines old-fashioned design with modern functionality. Crafted with a sleek gold-tone stainless steel case and a durable Milanese mesh band, this watch embodies sophisticated style. Its scratch-resistant mineral glass ensures durability, while the ion-plated finish provides long-lasting shine.',
        },
        {
          title: 'Uncompromising Quality',
          description: 'The Frogman JY8146-54F is a testament to Casio\'s commitment to quality and precision engineering. It features a robust design, durable materials, and cutting-edge features to ensure you\'ll be able to rely on this watch for years to come.',
        },
      ],
    },
    specifications: {
      specs: [
        { label: 'Movement', value: 'Solar Quartz' },
        { label: 'Water Resistance', value: '100M' },
        { label: 'Case Material', value: 'Resin' },
        { label: 'Strap Material', value: 'Resin' },
        { label: 'Collection', value: 'G-Shock' },
        { label: 'Gender', value: 'Unisex' },
        { label: 'Movement', value: 'Quartz Digital' },
        { label: 'Water Resistance', value: '200M' },
        { label: 'Case Material', value: 'Resin' },
        { label: 'Strap Material', value: 'Resin Band' },
      ],
      features: [
        '1/100-second stopwatch',
        'Measuring capacity: 59\'59.99\'\'',
        'Elapsed time, Split time, 1st-2nd place times',
        'Daily alarm',
        'Hourly time signal',
        'LED backlight (Super Illuminator): White',
        'Auto-calendar (28 days for February)',
        'Accuracy: ±30 seconds per month',
        '12/24-hour format',
        'Regular timekeeping: Hour, Minute, Second, pm, Date, Day',
      ],
    },
    deliveryAndReturns: {
      shipping: {
        title: 'Adventure-Ready Shipping',
        options: [
          'Expedited Outdoor Gear Shipping',
          'Free Shipping for Outdoor Enthusiasts',
          'International Expedition Delivery',
        ],
      },
      payment: {
        title: 'Flexible Outdoor Gear Payments',
        options: [
          'Credit Card',
          'PayPal',
          'Outdoor Gear Financing',
          'Gift Cards Available',
        ],
      },
      returns: {
        title: 'Adventure Guarantee',
        description: 'Confidence in every journey with our 60-day return policy. If your Frogman doesn\'t meet your outdoor needs, we\'ll make it right.',
      },
    },
    manual: {
      description: 'Comprehensive guide to mastering your Frogman JY8146-54F, with in-depth instructions on utilizing its advanced outdoor tracking and environmental sensing capabilities.',
      list: [
        { language: 'English', url: '/manuals/frogman-jy8146-54f-en.pdf' },
        { language: 'French', url: '/manuals/frogman-jy8146-54f-fr.pdf' },
        { language: 'German', url: '/manuals/frogman-jy8146-54f-de.pdf' },
      ],
    },
  },
];

export const productToDetailsMap: Record<string, string> = {
  'JY8146-54A': 'GA100-1A',
  'JY8146-54B': 'JY8146-54F',
  'JY8146-54E': 'OCW-T200S',
  'AB1234-XY': 'GA100-1A',
  'JY8147-54A': 'EFR-556',
  'JY8147-54B': 'JY8146-54F',
  'AB1237-XY': 'OCW-T200S',
  'AB1237-XZ': 'EFR-556',
  'GA100-1A': 'PRG-600',
  'GA2100-1A': 'JY8146-54F',
  'GB5600-1': 'OCW-T200S',
  'BA110-1A': 'PRG-600',
};

type GetProductParams = {
  slug: string;
};

export const productHandlers = [
  http.get<GetProductParams>(`${Env.NEXT_PUBLIC_API_URL}/api/product/:slug`, ({ params }) => {
    const id = productToDetailsMap[
      [...products, ...similarProducts, ...newProducts]
        .find(product => product.slug === params.slug)
        ?.id as string
    ];
    return HttpResponse.json(
      detailedProducts.find(product => product.id === id),
    );
  }),
  http.get(`${Env.NEXT_PUBLIC_API_URL}/api/products`, () => {
    return HttpResponse.json(products);
  }),
  http.get(`${Env.NEXT_PUBLIC_API_URL}/api/products/similar`, () => {
    return HttpResponse.json(similarProducts);
  }),
  http.get(`${Env.NEXT_PUBLIC_API_URL}/api/products/new`, () => {
    return HttpResponse.json(newProducts);
  }),
];

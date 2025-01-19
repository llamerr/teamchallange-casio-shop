import type { Meta, StoryObj } from '@storybook/react';

import { PORTRAIT_IMAGES } from '@/services/api/uploadThingFiles';

import { ProductCard } from './ProductCard';

const meta = {
  title: 'Components/Products/ProductCard',
  component: ProductCard,
  argTypes: {
    badges: {
      type: 'string',
      control: { type: 'object' },
    },
    image: {
      type: 'string',
      control: { type: 'text' },
    },
    title: {
      type: 'string',
      control: { type: 'text' },
    },
    collection: {
      type: 'string',
      control: { type: 'text' },
    },
    size: {
      type: 'string',
      control: { type: 'text' },
    },
    colors: {
      type: 'number',
      control: { type: 'number' },
    },
    price: {
      type: 'number',
      control: { type: 'number' },
    },
    originalPrice: {
      type: 'number',
      control: { type: 'number' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'ProductCard is used on HomePage or ProductPage.'
          + 'Also see [ProductCardSkeleton](?path=/docs/components-genderblock-gendercard--docs) loader component.',
      },
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCardLight = {
  args: {
    variant: 'light',
    badges: ['New', 'Limited', 'Bluetooth', 'Touch Solar', 'Water Resistant', 'Bestsellers'],
    image: PORTRAIT_IMAGES[0],
    title: 'Casio Baby-G BA-110',
    slug: 'casio-baby-g-ba-110',
    collection: 'SOLAR POWERED',
    collectionSlug: 'solar-powered',
    size: '43 mm',
    colors: 5,
    price: 69.00,
    originalPrice: 89.00,
  },
} satisfies Story;

export const ProductCardDark = {
  args: {
    variant: 'dark',
    badges: ['New', 'Limited', 'Bluetooth', 'Touch Solar', 'Water Resistant', 'Bestsellers'],
    image: PORTRAIT_IMAGES[1],
    title: 'Casio Baby-G BA-110',
    slug: 'casio-baby-g-ba-110',
    collection: 'SOLAR POWERED',
    collectionSlug: 'solar-powered',
    size: '43 mm',
    colors: 5,
    price: 69.00,
    originalPrice: 89.00,
  },
} satisfies Story;

export const ProductCardWithoutImage = {
  args: {
    badges: ['New', 'Limited', 'Bluetooth', 'Touch Solar', 'Water Resistant', 'Bestsellers'],
    title: 'Casio Baby-G BA-110',
    slug: 'casio-baby-g-ba-110',
    collection: 'SOLAR POWERED',
    collectionSlug: 'solar-powered',
    size: '43 mm',
    colors: 5,
    price: 69.00,
    originalPrice: 89.00,
  },
} satisfies Story;

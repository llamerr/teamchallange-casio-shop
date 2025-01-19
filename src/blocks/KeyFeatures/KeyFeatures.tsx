import { Section } from '@/components/Section/Section';
import type { KeyFeatureDTO } from '@/services/api/dto/KeyFeature.dto';

import { KeyFeaturesCard } from './KeyFeaturesCard';

export function KeyFeatures({ features }: { features: KeyFeatureDTO[] }) {
  return (
    <Section title="Key Features">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <KeyFeaturesCard
            key={index}
            {...feature}
          />
        ))}
      </div>
    </Section>
  );
}

import Hero from '@/components/sections/Hero';
import Company from '@/components/sections/Company';
import Challenges from '@/components/sections/Challenges';
import MarketOpportunity from '@/components/sections/MarketOpportunity';
import ProductPropositions from '@/components/sections/ProductPropositions';
import Solutions from '@/components/sections/Solutions';
import Advantages from '@/components/sections/Advantages';
import Stats from '@/components/sections/Stats';
import Team from '@/components/sections/Team';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Company />
      <Challenges />
      <MarketOpportunity />
      <ProductPropositions />
      <Solutions />
      <Advantages />
      <Stats />
      <Team />
      <CTA />
      <Contact />
    </div>
  );
}

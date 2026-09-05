import data from './surgicalOutcomes.json';

export type LocalizedString = { en: string; hi: string };
export interface CaseStage {
  label: LocalizedString;
  image: string;
  width: number;
  height: number;
  alt: LocalizedString;
  caption: LocalizedString;
}
export interface SurgicalCase {
  slug: string;
  title: LocalizedString;
  technique: LocalizedString;
  relatedService: string;
  relatedServiceName: LocalizedString;
  tags: LocalizedString[];
  metaDescription: LocalizedString;
  stages: CaseStage[];
  narrative: LocalizedString;
  takeaway?: LocalizedString;
  collageImage: string;
  year: number;
  consent: boolean;
  featured?: boolean;
}

// Only cases with consent === true are ever rendered.
export const surgicalCases: SurgicalCase[] = (data as SurgicalCase[]).filter((c) => c.consent);
export const getCaseBySlug = (slug?: string): SurgicalCase | undefined =>
  surgicalCases.find((c) => c.slug === slug);

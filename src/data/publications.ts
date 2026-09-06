export interface Publication {
  slug: string;
  title: string;
  authors: string[];
  journal: string;
  journalAbbrev: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  pmid?: string;
  pmcid?: string;
  url: string;
}

// Names that identify Dr Saumika Singh in an author list
// (used to emphasise her name on the page and to link her as the author in schema.org).
export const DOCTOR_AUTHOR_ALIASES = ['Singh S', 'Saumika Singh'];

export const isDoctorAuthor = (name: string): boolean =>
  DOCTOR_AUTHOR_ALIASES.includes(name.trim());

// Listed newest first. To add a paper later, append one entry — no other file needs editing.
export const publications: Publication[] = [
  {
    slug: 'intracranial-extramedullary-hematopoiesis-compressive-optic-neuropathy-beta-thalassemia',
    title:
      'Intracranial extramedullary hematopoiesis presenting as compressive optic neuropathy in beta-thalassemia',
    authors: ['Chakraborti C', 'Singh S'],
    journal: 'Indian Journal of Ophthalmology - Case Reports',
    journalAbbrev: 'Indian J Ophthalmol Case Rep',
    year: 2025,
    volume: '5',
    issue: '2',
    pages: '335-336',
    doi: '10.4103/IJO.IJO_2426_24',
    url: 'https://doi.org/10.4103/IJO.IJO_2426_24',
  },
  {
    slug: 'dacryoadenitis-post-covid-19-infection-and-immunization',
    title: 'Dacryoadenitis post COVID-19 infection and immunization',
    authors: ['Singh S', 'Gandhi A', 'Das S'],
    journal: 'Indian Journal of Ophthalmology',
    journalAbbrev: 'Indian J Ophthalmol',
    year: 2023,
    volume: '71',
    issue: '8',
    pages: '3100-3102',
    doi: '10.4103/IJO.IJO_30_23',
    pmid: '37530288',
    pmcid: 'PMC10538829',
    url: 'https://doi.org/10.4103/IJO.IJO_30_23',
  },
  {
    slug: 'analysis-of-profile-of-destructive-eye-surgeries-tertiary-eye-care-centre-west-bengal',
    title:
      'Analysis of Profile of Destructive Eye Surgeries at a Tertiary Eye Care Centre in West Bengal',
    authors: ['Chakraborti C', 'Sumiko KV', 'Singh S', 'Majumdar S', 'Ghosh AK'],
    journal: 'Journal of Evidence Based Medicine and Healthcare',
    journalAbbrev: 'J Evid Based Med Healthc',
    year: 2020,
    volume: '7',
    issue: '17',
    pages: '876-879',
    doi: '10.18410/jebmh/2020/191',
    url: 'https://doi.org/10.18410/jebmh/2020/191',
  },
];
export function formatRef(p: Publication): string {
  let s = `${p.journalAbbrev}. ${p.year}`;
  if (p.volume) s += `;${p.volume}`;
  if (p.issue) s += `(${p.issue})`;
  if (p.pages) s += `:${p.pages}`;
  return `${s}.`;
}

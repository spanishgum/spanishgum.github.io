export type SamplePost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  size: string;
  tags: string[];
  readingMinutes: number;
};

export const samplePosts: SamplePost[] = [
  {
    slug: 'on-running-llms-locally',
    title: 'Notes on running LLMs locally without losing your mind',
    date: '2026-04-28',
    excerpt:
      'A modest defense of small models, mediocre GPUs, and the joy of latency you can actually feel.',
    size: '4.2K',
    tags: ['ai', 'homelab'],
    readingMinutes: 9,
  },
  {
    slug: 'k3s-bare-metal',
    title: 'K3s on three bare-metal boxes: a year in',
    date: '2026-04-12',
    excerpt: "What works, what doesn't, and what I'd do differently if I were starting over today.",
    size: '6.7K',
    tags: ['homelab', 'kubernetes'],
    readingMinutes: 14,
  },
  {
    slug: 'embeddings-for-personal-search',
    title: 'Embeddings for personal search, finally',
    date: '2026-03-30',
    excerpt: 'I indexed seven years of notes. What came back surprised me.',
    size: '3.1K',
    tags: ['ai', 'tools'],
    readingMinutes: 7,
  },
  {
    slug: 'why-i-still-write-tcl',
    title: 'Why I still write Tcl',
    date: '2026-03-15',
    excerpt: 'In defense of weird, old, perfectly good things.',
    size: '2.4K',
    tags: ['languages'],
    readingMinutes: 6,
  },
  {
    slug: 'observability-on-a-budget',
    title: 'Observability on a $40/month budget',
    date: '2026-02-22',
    excerpt: 'Prometheus, Loki, Grafana — and the discipline to stop adding more.',
    size: '5.8K',
    tags: ['homelab', 'tools'],
    readingMinutes: 11,
  },
];

export function fmtDate(iso: string): { mon: string; day: string; time: string } {
  const d = new Date(`${iso}T14:32:00Z`);
  const mon = d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
  const day = d.getUTCDate().toString().padStart(2, ' ');
  const time = '14:32';
  return { mon, day, time };
}

import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'work'>;

/** Published projects, newest first. */
export async function getWork(): Promise<Work[]> {
  const entries = await getCollection('work', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.start.localeCompare(a.data.start));
}

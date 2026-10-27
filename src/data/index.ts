import type { Bi, Chapter } from './types';
import { chapter1 } from './ch1';
import { chapter2 } from './ch2';
import { chapter3 } from './ch3';
import { chapter4 } from './ch4';
import { chapter5 } from './ch5';

export const chapters: Chapter[] = [chapter1, chapter2, chapter3, chapter4, chapter5];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.slug === slug);
}

export function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

const biText = (value: Bi | undefined): string =>
  value ? `${value.en} ${value.id}` : '';

export function chapterSearchText(chapter: Chapter): string {
  const parts: string[] = [biText(chapter.title), biText(chapter.subtitle), biText(chapter.lead)];

  chapter.objectives.forEach((objective) => parts.push(biText(objective)));
  chapter.sections.forEach((section) => {
    parts.push(section.num, biText(section.tag), biText(section.title));
    section.blocks.forEach((block) => {
      switch (block.type) {
        case 'p':
        case 'h4':
          parts.push(biText(block.text));
          break;
        case 'list':
          block.items.forEach((item) => parts.push(biText(item)));
          break;
        case 'table':
          parts.push(biText(block.caption));
          block.head.forEach((cell) => parts.push(typeof cell === 'string' ? cell : biText(cell)));
          block.rows.forEach((row) =>
            row.forEach((cell) => parts.push(typeof cell === 'string' ? cell : biText(cell)))
          );
          break;
        case 'formula':
          parts.push(plainText(block.expr), biText(block.label), biText(block.note));
          break;
        case 'callout':
          parts.push(biText(block.title), biText(block.text));
          break;
        case 'terms':
          block.items.forEach((item) => parts.push(item.term, item.id, biText(item.def)));
          break;
      }
    });
  });

  return parts.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}

export function readingMinutes(chapter: Chapter): number {
  const words = chapterSearchText(chapter).split(/\s+/).length;
  return Math.max(4, Math.round(words / 240));
}

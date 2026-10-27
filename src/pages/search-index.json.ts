import type { APIRoute } from 'astro';
import { chapters, plainText } from '../data';
import { accounts, groupLabels } from '../data/accounts';
import { cycleSteps } from '../data/cycle';
import { glossary } from '../data/glossary';
import type { Block } from '../data/types';

type SearchRecord = {
  kind: string;
  title: string;
  url: string;
  text: string;
  meta: string;
};

const bi = (value: { en: string; id: string }): string => `${value.en} · ${value.id}`;

const blockText = (block: Block): string => {
  switch (block.type) {
    case 'p':
    case 'h4':
      return bi(block.text);
    case 'list':
      return block.items.map(bi).join(' ');
    case 'table':
      return [
        block.caption ? bi(block.caption) : '',
        ...block.head.map((cell) => (typeof cell === 'string' ? cell : bi(cell))),
        ...block.rows.flatMap((row) =>
          row.map((cell) => (typeof cell === 'string' ? cell : bi(cell)))
        ),
      ].join(' ');
    case 'formula':
      return [block.label ? bi(block.label) : '', plainText(block.expr), block.note ? bi(block.note) : ''].join(' ');
    case 'callout':
      return `${bi(block.title)} ${bi(block.text)}`;
    case 'terms':
      return block.items.map((item) => `${item.term} ${item.id} ${bi(item.def)}`).join(' ');
    default:
      return '';
  }
};

export const GET: APIRoute = () => {
  const records: SearchRecord[] = [
    {
      kind: 'Halaman · Page',
      title: 'Beranda · Home',
      url: '',
      text: 'Rangkuman bilingual 250 halaman pertama Kieso Financial Accounting IFRS, bab 1–5, tabel saldo normal, alur akuntansi, glosarium.',
      meta: 'home beranda akuntansi dasar kieso ifrs',
    },
    {
      kind: 'Halaman · Page',
      title: 'Rangkuman · Summaries',
      url: 'rangkuman',
      text: 'Daftar lima bab: Accounting in Action, The Recording Process, Adjusting the Accounts, Completing the Accounting Cycle, Accounting for Merchandising Operations.',
      meta: 'rangkuman summaries bab chapters',
    },
    {
      kind: 'Halaman · Page',
      title: 'Tabel Saldo Normal · Normal-Balance Table',
      url: 'saldo-normal',
      text: 'Tabel 59 akun dengan klasifikasi, laporan keuangan, dan saldo normal debit atau kredit. Aturan debit dan kredit, persamaan akuntansi, contoh akun T.',
      meta: 'saldo normal normal balance debit kredit tabel akun',
    },
    {
      kind: 'Halaman · Page',
      title: 'Alur Akuntansi · Accounting Cycle',
      url: 'alur-akuntansi',
      text: 'Sembilan langkah siklus akuntansi dan studi kasus Yazici Advertising dari jurnal umum sampai neraca saldo setelah penutupan.',
      meta: 'alur akuntansi accounting cycle jurnal buku besar neraca saldo laporan keuangan',
    },
    {
      kind: 'Halaman · Page',
      title: 'Glosarium · Glossary',
      url: 'glosarium',
      text: 'Glosarium bilingual istilah akuntansi dari bab 1–5.',
      meta: 'glosarium glossary istilah terms',
    },
    {
      kind: 'Halaman · Page',
      title: 'Latihan Soal · Practice Exercises',
      url: 'latihan',
      text: 'Semua Brief Exercises, DO IT! Exercises, dan Exercises dari Bab 1–5 Kieso IFRS dengan jawaban dan penjelasan lengkap untuk persiapan UTS.',
      meta: 'latihan practice exercises brief exercises do it exercises jawaban answers penjelasan explanation uts',
    },
  ];

  chapters.forEach((chapter) => {
    records.push({
      kind: `Bab ${chapter.number} · Chapter ${chapter.number}`,
      title: bi(chapter.title),
      url: `rangkuman/${chapter.slug}`,
      text: `${bi(chapter.subtitle)} ${bi(chapter.lead)} ${chapter.objectives.map(bi).join(' ')}`,
      meta: `bab ${chapter.number} chapter ${chapter.number} ${chapter.sourcePages}`,
    });

    chapter.sections.forEach((section) => {
      records.push({
        kind: `Bab ${chapter.number} · ${section.num}`,
        title: bi(section.title),
        url: `rangkuman/${chapter.slug}#${section.id}`,
        text: section.blocks.map(blockText).join(' '),
        meta: `${bi(chapter.title)} ${section.num} ${section.tag ? bi(section.tag) : ''}`,
      });
    });
  });

  accounts.forEach((account) => {
    records.push({
      kind: 'Saldo normal · Normal balance',
      title: `${account.name} · ${account.id}`,
      url: `saldo-normal#account-${account.id}`,
      text: `${bi(account.classification)} ${bi(account.statement)} ${groupLabels[account.group].en} ${groupLabels[account.group].id} ${
        account.note ? bi(account.note) : ''
      } ${account.normal}`,
      meta: `akun account ${account.normal} ${account.group}`,
    });
  });

  cycleSteps.forEach((step) => {
    records.push({
      kind: `Langkah ${step.n} · Step ${step.n}`,
      title: bi(step.title),
      url: `alur-akuntansi#step-${step.n}`,
      text: `${bi(step.short)} ${bi(step.body)} ${bi(step.output)} ${bi(step.tip)}`,
      meta: `siklus akuntansi accounting cycle langkah ${step.n}`,
    });
  });

  glossary.forEach((term) => {
    records.push({
      kind: `Glosarium · Bab ${term.chapter}`,
      title: `${term.term} · ${term.id}`,
      url: `glosarium#term-${term.id}`,
      text: bi(term.def),
      meta: `istilah term bab ${term.chapter} chapter ${term.chapter}`,
    });
  });

  return new Response(JSON.stringify(records), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

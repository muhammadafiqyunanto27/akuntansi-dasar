import { b } from './types';

export const site = {
  name: 'Akuntansi Dasar',
  tagline: b('Kieso · IFRS · Chapters 1–5', 'Kieso · IFRS · Bab 1–5'),
  title: 'Accounting in Action — Rangkuman Bilingual',
  description: b(
    'A structured bilingual summary of the first 250 pages of Kieso, Weygandt & Kimmel, Financial Accounting: IFRS (3rd edition) — chapters 1–5, plus a complete normal-balance table and the accounting cycle.',
    'Rangkuman terstruktur dua bahasa dari 250 halaman pertama Kieso, Weygandt & Kimmel, Financial Accounting: IFRS (edisi 3) — bab 1–5, lengkap dengan tabel saldo normal dan alur akuntansi.'
  ),
  book: 'Kieso, Weygandt & Kimmel — Financial Accounting: IFRS, 3rd Edition',
  sourceNote: b(
    'Source: PDF pages 1–250 (front matter and chapters 1–5, book pages 1–232). Page references use the printed book page numbers. Chapter 5 covers pages 219–232; its remaining material lies beyond the extracted range.',
    'Sumber: halaman PDF 1–250 (front matter dan bab 1–5, halaman buku 1–232). Rujukan halaman memakai nomor halaman cetak buku. Bab 5 mencakup hlm. 219–232; materi sisanya berada di luar rentang yang diekstrak.'
  ),
};

export const nav = [
  { href: '/', label: b('Home', 'Beranda'), key: 'home' },
  { href: '/rangkuman', label: b('Summaries', 'Rangkuman'), key: 'rangkuman' },
  { href: '/saldo-normal', label: b('Normal Balances', 'Saldo Normal'), key: 'saldo-normal' },
  { href: '/alur-akuntansi', label: b('Accounting Cycle', 'Alur Akuntansi'), key: 'alur-akuntansi' },
  { href: '/latihan', label: b('Practice Exercises', 'Latihan Soal'), key: 'latihan' },
  { href: '/p-latihan', label: b('P-type Exercises', 'Latihan Tipe P'), key: 'p-latihan' },
  { href: '/glosarium', label: b('Glossary', 'Glosarium'), key: 'glosarium' },
];

export const ui = {
  search: b('Search', 'Cari'),
  searchHint: b(
    'Type at least 2 characters — search chapter titles, section text, accounts, and glossary terms.',
    'Ketik minimal 2 karakter — cari judul bab, isi materi, nama akun, dan istilah glosarium.'
  ),
  menu: b('Table of contents', 'Daftar isi'),
  langLabel: b('Language', 'Bahasa'),
  theme: b('Toggle light / dark mode', 'Ganti mode terang / gelap'),
  read: b('Read', 'Baca'),
  chapter: b('Chapter', 'Bab'),
  topics: b('topics', 'topik'),
  minutes: b('min read', 'menit baca'),
  source: b('Source', 'Sumber'),
  onThisPage: b('On this page', 'Di halaman ini'),
  objectives: b('Learning objectives', 'Tujuan pembelajaran'),
  keyTerms: b('Key terms', 'Istilah kunci'),
  quickCheck: b('Quick check', 'Uji cepat'),
  answer: b('Show answer', 'Lihat jawaban'),
  next: b('Next', 'Berikutnya'),
  prev: b('Previous', 'Sebelumnya'),
  allChapters: b('All chapters', 'Semua bab'),
  bilingual: b('Bilingual', 'Dua bahasa'),
};

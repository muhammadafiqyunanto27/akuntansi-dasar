/** A bilingual string. English first, Indonesian second. */
export type Bi = { en: string; id: string };

/** A table cell is either bilingual or a language-neutral value (amounts, dates). */
export type Cell = string | Bi;

export type Align = 'left' | 'right' | 'center';

export type Block =
  | { type: 'p'; text: Bi }
  | { type: 'h4'; text: Bi }
  | { type: 'list'; items: Bi[]; ordered?: boolean }
  | {
      type: 'table';
      head: Cell[];
      rows: Cell[][];
      caption?: Bi;
      align?: Align[];
      compact?: boolean;
    }
  | { type: 'formula'; label?: Bi; expr: string; note?: Bi }
  | { type: 'callout'; title: Bi; text: Bi; tone?: 'note' | 'tip' | 'warn' }
  | { type: 'terms'; items: { term: string; id: string; def: Bi }[] };

export type Section = {
  id: string;
  num: string;
  tag?: Bi;
  title: Bi;
  blocks: Block[];
};

export type Chapter = {
  slug: string;
  number: number;
  roman: string;
  title: Bi;
  subtitle: Bi;
  kicker: Bi;
  sourcePages: string;
  lead: Bi;
  objectives: Bi[];
  sections: Section[];
  quiz: { q: Bi; a: Bi }[];
};

export type GlossaryTerm = {
  term: string;
  id: string;
  def: Bi;
  chapter: number;
};

export type Normal = 'debit' | 'credit' | 'varies';
export type AccountGroup = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';

export type Account = {
  name: string;
  id: string;
  classification: Bi;
  statement: Bi;
  normal: Normal;
  group: AccountGroup;
  note?: Bi;
};

export type CycleStep = {
  n: number;
  title: Bi;
  short: Bi;
  body: Bi;
  output: Bi;
  tip: Bi;
  optional?: boolean;
};

export const b = (en: string, id: string): Bi => ({ en, id });

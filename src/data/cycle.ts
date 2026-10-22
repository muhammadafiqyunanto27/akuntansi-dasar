import { b, type Bi, type CycleStep } from './types';

export const cycleSteps: CycleStep[] = [
  {
    n: 1,
    title: b('Analyse business transactions', 'Analisis transaksi bisnis'),
    short: b('Evidence → accounts', 'Bukti → akun'),
    body: b(
      'Start from source documents — receipts, invoices, cheques, contracts. Decide whether the event changes assets, liabilities, or equity. Every recorded transaction has a dual effect, so at least two accounts are touched.',
      'Mulai dari dokumen sumber — kuitansi, faktur, cek, kontrak. Tentukan apakah peristiwa mengubah aset, liabilitas, atau ekuitas. Setiap transaksi yang dicatat punya efek ganda, sehingga minimal dua akun terpengaruh.'
    ),
    output: b('A debit–credit analysis for each transaction.', 'Analisis debit–kredit untuk setiap transaksi.'),
    tip: b(
      'Hiring employees or placing an order is not yet a transaction. Wait until work is performed or goods change hands.',
      'Merekrut karyawan atau memesan barang belum merupakan transaksi. Tunggu sampai jasa dikerjakan atau barang berpindah tangan.'
    ),
  },
  {
    n: 2,
    title: b('Journalise the transactions', 'Jurnal transaksi'),
    short: b('General journal', 'Jurnal umum'),
    body: b(
      'Record each transaction chronologically in the general journal: date, accounts debited and credited, amounts, and a short explanation. Debits are written first; credits are indented.',
      'Catat setiap transaksi secara kronologis di jurnal umum: tanggal, akun yang didebit dan dikredit, jumlah, serta penjelasan singkat. Debit ditulis lebih dulu; kredit menjorok ke dalam.'
    ),
    output: b('A complete journal entry for every transaction.', 'Jurnal lengkap untuk setiap transaksi.'),
    tip: b(
      'Use specific account titles. "Cash paid" is a description, not an account.',
      'Gunakan nama akun yang spesifik. "Kas dibayar" adalah keterangan, bukan nama akun.'
    ),
  },
  {
    n: 3,
    title: b('Post to the ledger', 'Posting ke buku besar'),
    short: b('Ledger accounts', 'Akun buku besar'),
    body: b(
      'Transfer each journal line to its account in the general ledger. The ledger keeps one running balance per account, which is what the financial statements will eventually summarise.',
      'Pindahkan setiap baris jurnal ke akunnya di buku besar. Buku besar menyimpan satu saldo berjalan per akun, yang nantinya diringkas dalam laporan keuangan.'
    ),
    output: b('Updated account balances in the ledger.', 'Saldo akun yang diperbarui di buku besar.'),
    tip: b(
      'Post all debits and credits of one entry before moving to the next, and tick the reference column.',
      'Posting semua debit dan kredit dari satu jurnal sebelum pindah ke jurnal berikutnya, dan centang kolom referensi.'
    ),
  },
  {
    n: 4,
    title: b('Prepare the trial balance', 'Menyusun neraca saldo'),
    short: b('Prove the equality', 'Uji keseimbangan'),
    body: b(
      'List every account and its balance at a point in time. Debit balances go in the left column, credit balances in the right. Total debits must equal total credits.',
      'Daftar semua akun dan saldonya pada satu titik waktu. Saldo debit di kolom kiri, saldo kredit di kolom kanan. Total debit harus sama dengan total kredit.'
    ),
    output: b('An unadjusted trial balance.', 'Neraca saldo sebelum penyesuaian.'),
    tip: b(
      'A balanced trial balance is not proof of correctness. It cannot catch omitted, duplicated, or offsetting entries.',
      'Neraca saldo yang seimbang bukan bukti kebenaran. Ia tidak menangkap transaksi yang terlewat, tercatat dua kali, atau kesalahan yang saling meniadakan.'
    ),
  },
  {
    n: 5,
    title: b('Journalise and post adjusting entries', 'Jurnal dan posting ayat penyesuaian'),
    short: b('Accrual basis', 'Dasar akrual'),
    body: b(
      'At the end of the period, update balances so revenues are recognised when earned and expenses when incurred. Adjust for prepaid expenses, unearned revenues, accrued revenues, accrued expenses, and depreciation.',
      'Di akhir periode, perbarui saldo agar pendapatan diakui saat diperoleh dan beban saat terjadi. Sesuaikan beban dibayar di muka, pendapatan diterima di muka, pendapatan yang masih harus diterima, beban yang masih harus dibayar, dan penyusutan.'
    ),
    output: b('Adjusting journal entries and updated ledger balances.', 'Ayat jurnal penyesuaian dan saldo buku besar yang diperbarui.'),
    tip: b(
      'Every adjusting entry touches at least one statement of financial position account and one income statement account. Cash is never adjusted.',
      'Setiap ayat penyesuaian menyentuh minimal satu akun laporan posisi keuangan dan satu akun laba rugi. Kas tidak pernah disesuaikan.'
    ),
  },
  {
    n: 6,
    title: b('Prepare the adjusted trial balance', 'Menyusun neraca saldo setelah penyesuaian'),
    short: b('After adjustments', 'Setelah penyesuaian'),
    body: b(
      'Repeat the trial balance using the adjusted ledger balances. This is the direct source for the income statement, retained earnings statement, and statement of financial position.',
      'Ulangi neraca saldo memakai saldo buku besar setelah penyesuaian. Ini adalah sumber langsung untuk laporan laba rugi, laporan saldo laba, dan laporan posisi keuangan.'
    ),
    output: b('An adjusted trial balance that feeds all statements.', 'Neraca saldo setelah penyesuaian yang menjadi dasar semua laporan.'),
    tip: b(
      'If it does not balance, check the adjustment postings before touching the statements.',
      'Jika tidak seimbang, periksa posting penyesuaian sebelum menyentuh laporan keuangan.'
    ),
  },
  {
    n: 7,
    title: b('Prepare the financial statements', 'Menyusun laporan keuangan'),
    short: b('IS → RE → SFP', 'LR → SL → LPK'),
    body: b(
      'Prepare the income statement first, then the retained earnings statement, then the statement of financial position. Net income flows into retained earnings; ending retained earnings flows into equity; cash flows into the statement of cash flows.',
      'Susun laporan laba rugi lebih dulu, lalu laporan saldo laba, lalu laporan posisi keuangan. Laba bersih mengalir ke saldo laba; saldo laba akhir mengalir ke ekuitas; kas mengalir ke laporan arus kas.'
    ),
    output: b('The four primary statements, linked to each other.', 'Empat laporan utama yang saling terhubung.'),
    tip: b(
      'The statements are dated differently: the income statement covers a period, the statement of financial position is a snapshot at a date.',
      'Tanggal laporannya berbeda: laporan laba rugi mencakup suatu periode, laporan posisi keuangan adalah potret pada satu tanggal.'
    ),
  },
  {
    n: 8,
    title: b('Journalise and post closing entries', 'Jurnal dan posting ayat penutup'),
    short: b('Temporary → zero', 'Akun nominal → nol'),
    body: b(
      'Close revenues and expenses into Income Summary, close Income Summary into Retained Earnings, and close Dividends directly to Retained Earnings. Temporary accounts end at zero.',
      'Tutup pendapatan dan beban ke Ikhtisar Laba Rugi, tutup Ikhtisar Laba Rugi ke Saldo Laba, dan tutup Dividen langsung ke Saldo Laba. Akun nominal berakhir dengan saldo nol.'
    ),
    output: b('Zero balances in all temporary accounts.', 'Saldo nol pada semua akun nominal.'),
    tip: b(
      'Dividends are not an expense. Never close them through Income Summary.',
      'Dividen bukan beban. Jangan pernah menutupnya melalui Ikhtisar Laba Rugi.'
    ),
  },
  {
    n: 9,
    title: b('Prepare the post-closing trial balance', 'Menyusun neraca saldo setelah penutupan'),
    short: b('Permanent accounts only', 'Hanya akun permanen'),
    body: b(
      'List only permanent accounts — assets, liabilities, and equity. All temporary accounts have been closed, so the post-closing trial balance carries the opening balances into the next period.',
      'Daftar hanya akun permanen — aset, liabilitas, dan ekuitas. Semua akun nominal sudah ditutup, sehingga neraca saldo setelah penutupan membawa saldo awal ke periode berikutnya.'
    ),
    output: b('A clean starting point for the next accounting period.', 'Titik awal yang bersih untuk periode akuntansi berikutnya.'),
    tip: b(
      'If a revenue or expense account still has a balance here, the closing entries are incomplete.',
      'Jika akun pendapatan atau beban masih bersaldo di sini, ayat penutup belum lengkap.'
    ),
  },
];

export const optionalSteps = [
  {
    title: b('Worksheet (optional)', 'Kertas kerja (opsional)'),
    body: b(
      'A multi-column working paper that combines the trial balance, adjustments, adjusted trial balance, and statement columns. It is a tool, not a financial statement, and it never replaces the journal or ledger.',
      'Kertas kerja multi-kolom yang menggabungkan neraca saldo, penyesuaian, neraca saldo setelah penyesuaian, dan kolom laporan. Ini alat bantu, bukan laporan keuangan, dan tidak menggantikan jurnal atau buku besar.'
    ),
  },
  {
    title: b('Reversing entries (optional)', 'Ayat jurnal pembalik (opsional)'),
    body: b(
      'At the start of the next period, some accountants reverse certain accrual adjustments to simplify routine recording. Reversing entries are optional and do not change the financial statements.',
      'Di awal periode berikutnya, sebagian akuntan membalik ayat penyesuaian tertentu untuk menyederhanakan pencatatan rutin. Ayat pembalik bersifat opsional dan tidak mengubah laporan keuangan.'
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Worked case: Yazici Advertising A.Ş. (book chapters 2–4)           */
/* ------------------------------------------------------------------ */

export type JournalLine = { account: string; debit?: string; credit?: string };

export type JournalEntry = {
  date: string;
  lines: JournalLine[];
  note: Bi;
};

export const yaziciJournal: JournalEntry[] = [
  {
    date: 'Oct 1',
    lines: [
      { account: 'Cash', debit: '10,000' },
      { account: 'Share Capital—Ordinary', credit: '10,000' },
    ],
    note: b('Issued shares for cash.', 'Menerbitkan saham untuk kas.'),
  },
  {
    date: 'Oct 1',
    lines: [
      { account: 'Equipment', debit: '5,000' },
      { account: 'Notes Payable', credit: '5,000' },
    ],
    note: b('3-month, 12% note for office equipment.', 'Wesel 3 bulan, 12% untuk peralatan kantor.'),
  },
  {
    date: 'Oct 2',
    lines: [
      { account: 'Cash', debit: '1,200' },
      { account: 'Unearned Service Revenue', credit: '1,200' },
    ],
    note: b('Cash advance from R. Knox for future services.', 'Uang muka dari R. Knox untuk jasa yang akan datang.'),
  },
  {
    date: 'Oct 3',
    lines: [
      { account: 'Rent Expense', debit: '900' },
      { account: 'Cash', credit: '900' },
    ],
    note: b('Paid October rent.', 'Membayar sewa Oktober.'),
  },
  {
    date: 'Oct 4',
    lines: [
      { account: 'Prepaid Insurance', debit: '600' },
      { account: 'Cash', credit: '600' },
    ],
    note: b('One-year insurance policy, effective 1 October.', 'Polis asuransi satu tahun, efektif 1 Oktober.'),
  },
  {
    date: 'Oct 5',
    lines: [
      { account: 'Supplies', debit: '2,500' },
      { account: 'Accounts Payable', credit: '2,500' },
    ],
    note: b('Purchased supplies on account from Aero Supply.', 'Membeli perlengkapan secara kredit dari Aero Supply.'),
  },
  {
    date: 'Oct 20',
    lines: [
      { account: 'Dividends', debit: '500' },
      { account: 'Cash', credit: '500' },
    ],
    note: b('Declared and paid a cash dividend.', 'Mengumumkan dan membayar dividen kas.'),
  },
  {
    date: 'Oct 26',
    lines: [
      { account: 'Salaries and Wages Expense', debit: '4,000' },
      { account: 'Cash', credit: '4,000' },
    ],
    note: b('Paid salaries to date.', 'Membayar gaji sampai tanggal ini.'),
  },
  {
    date: 'Oct 31',
    lines: [
      { account: 'Cash', debit: '10,000' },
      { account: 'Service Revenue', credit: '10,000' },
    ],
    note: b('Cash received for services performed in October.', 'Kas diterima untuk jasa yang dikerjakan di Oktober.'),
  },
];

export const yaziciTrialBalance = [
  { account: 'Cash', debit: '15,200', credit: '' },
  { account: 'Supplies', debit: '2,500', credit: '' },
  { account: 'Prepaid Insurance', debit: '600', credit: '' },
  { account: 'Equipment', debit: '5,000', credit: '' },
  { account: 'Notes Payable', debit: '', credit: '5,000' },
  { account: 'Accounts Payable', debit: '', credit: '2,500' },
  { account: 'Unearned Service Revenue', debit: '', credit: '1,200' },
  { account: 'Share Capital—Ordinary', debit: '', credit: '10,000' },
  { account: 'Dividends', debit: '500', credit: '' },
  { account: 'Service Revenue', debit: '', credit: '10,000' },
  { account: 'Salaries and Wages Expense', debit: '4,000', credit: '' },
  { account: 'Rent Expense', debit: '900', credit: '' },
];

export const yaziciAdjustments: JournalEntry[] = [
  {
    date: 'Oct 31',
    lines: [
      { account: 'Supplies Expense', debit: '1,500' },
      { account: 'Supplies', credit: '1,500' },
    ],
    note: b('Supplies count shows €1,000 remaining; €1,500 was used.', 'Sisa perlengkapan €1.000; €1.500 telah terpakai.'),
  },
  {
    date: 'Oct 31',
    lines: [
      { account: 'Insurance Expense', debit: '50' },
      { account: 'Prepaid Insurance', credit: '50' },
    ],
    note: b('One month of the €600 annual policy has expired.', 'Satu bulan dari polis tahunan €600 telah jatuh tempo.'),
  },
  {
    date: 'Oct 31',
    lines: [
      { account: 'Depreciation Expense', debit: '40' },
      { account: 'Accumulated Depreciation—Equipment', credit: '40' },
    ],
    note: b('Monthly depreciation on office equipment.', 'Penyusutan bulanan peralatan kantor.'),
  },
  {
    date: 'Oct 31',
    lines: [
      { account: 'Unearned Service Revenue', debit: '400' },
      { account: 'Service Revenue', credit: '400' },
    ],
    note: b('€400 of the €1,200 advance has now been earned.', '€400 dari uang muka €1.200 telah menjadi pendapatan.'),
  },
  {
    date: 'Oct 31',
    lines: [
      { account: 'Accounts Receivable', debit: '200' },
      { account: 'Service Revenue', credit: '200' },
    ],
    note: b('Services performed but not yet billed or collected.', 'Jasa sudah dikerjakan tetapi belum ditagih atau diterima kasnya.'),
  },
  {
    date: 'Oct 31',
    lines: [
      { account: 'Salaries and Wages Expense', debit: '1,200' },
      { account: 'Salaries and Wages Payable', credit: '1,200' },
    ],
    note: b('Three days of unpaid salaries at month end.', 'Tiga hari gaji yang belum dibayar pada akhir bulan.'),
  },
  {
    date: 'Oct 31',
    lines: [
      { account: 'Interest Expense', debit: '50' },
      { account: 'Interest Payable', credit: '50' },
    ],
    note: b('One month of interest on the 12% note (€5,000 × 12% × 1/12).', 'Bunga satu bulan atas wesel 12% (€5.000 × 12% × 1/12).'),
  },
];

export const yaziciAdjustedTrialBalance = [
  { account: 'Cash', debit: '15,200', credit: '' },
  { account: 'Accounts Receivable', debit: '200', credit: '' },
  { account: 'Supplies', debit: '1,000', credit: '' },
  { account: 'Prepaid Insurance', debit: '550', credit: '' },
  { account: 'Equipment', debit: '5,000', credit: '' },
  { account: 'Accumulated Depreciation—Equipment', debit: '', credit: '40' },
  { account: 'Notes Payable', debit: '', credit: '5,000' },
  { account: 'Accounts Payable', debit: '', credit: '2,500' },
  { account: 'Unearned Service Revenue', debit: '', credit: '800' },
  { account: 'Salaries and Wages Payable', debit: '', credit: '1,200' },
  { account: 'Interest Payable', debit: '', credit: '50' },
  { account: 'Share Capital—Ordinary', debit: '', credit: '10,000' },
  { account: 'Dividends', debit: '500', credit: '' },
  { account: 'Service Revenue', debit: '', credit: '10,600' },
  { account: 'Salaries and Wages Expense', debit: '5,200', credit: '' },
  { account: 'Supplies Expense', debit: '1,500', credit: '' },
  { account: 'Rent Expense', debit: '900', credit: '' },
  { account: 'Insurance Expense', debit: '50', credit: '' },
  { account: 'Depreciation Expense', debit: '40', credit: '' },
  { account: 'Interest Expense', debit: '50', credit: '' },
];

export const yaziciIncomeStatement = [
  { label: 'Service Revenue', amount: '10,600', kind: 'total' as const },
  { label: 'Salaries and Wages Expense', amount: '(5,200)' },
  { label: 'Rent Expense', amount: '(900)' },
  { label: 'Supplies Expense', amount: '(1,500)' },
  { label: 'Depreciation Expense', amount: '(40)' },
  { label: 'Insurance Expense', amount: '(50)' },
  { label: 'Interest Expense', amount: '(50)' },
  { label: 'Total expenses', amount: '(7,740)', kind: 'subtotal' as const },
  { label: 'Net income', amount: '2,860', kind: 'grand' as const },
];

export const yaziciRetainedEarnings = [
  { label: 'Retained earnings, 1 October', amount: '0' },
  { label: 'Add: Net income', amount: '2,860' },
  { label: 'Less: Dividends', amount: '(500)' },
  { label: 'Retained earnings, 31 October', amount: '2,360', kind: 'grand' as const },
];

export const yaziciStatementOfFinancialPosition = {
  assets: [
    { label: 'Cash', amount: '15,200' },
    { label: 'Accounts receivable', amount: '200' },
    { label: 'Supplies', amount: '1,000' },
    { label: 'Prepaid insurance', amount: '550' },
    { label: 'Equipment', amount: '5,000' },
    { label: 'Less: Accumulated depreciation', amount: '(40)' },
    { label: 'Total assets', amount: '21,910', kind: 'grand' as const },
  ],
  liabilities: [
    { label: 'Notes payable', amount: '5,000' },
    { label: 'Accounts payable', amount: '2,500' },
    { label: 'Unearned service revenue', amount: '800' },
    { label: 'Salaries and wages payable', amount: '1,200' },
    { label: 'Interest payable', amount: '50' },
    { label: 'Total liabilities', amount: '9,550', kind: 'subtotal' as const },
  ],
  equity: [
    { label: 'Share capital—ordinary', amount: '10,000' },
    { label: 'Retained earnings', amount: '2,360' },
    { label: 'Total equity', amount: '12,360', kind: 'subtotal' as const },
    { label: 'Total liabilities and equity', amount: '21,910', kind: 'grand' as const },
  ],
};

export const yaziciClosing: JournalEntry[] = [
  {
    date: 'Oct 31',
    lines: [
      { account: 'Service Revenue', debit: '10,600' },
      { account: 'Income Summary', credit: '10,600' },
    ],
    note: b('Close revenue to Income Summary.', 'Menutup pendapatan ke Ikhtisar Laba Rugi.'),
  },
  {
    date: 'Oct 31',
    lines: [
      { account: 'Income Summary', debit: '7,740' },
      { account: 'Salaries and Wages Expense', credit: '5,200' },
      { account: 'Supplies Expense', credit: '1,500' },
      { account: 'Rent Expense', credit: '900' },
      { account: 'Insurance Expense', credit: '50' },
      { account: 'Depreciation Expense', credit: '40' },
      { account: 'Interest Expense', credit: '50' },
    ],
    note: b('Close all expenses to Income Summary.', 'Menutup semua beban ke Ikhtisar Laba Rugi.'),
  },
  {
    date: 'Oct 31',
    lines: [
      { account: 'Income Summary', debit: '2,860' },
      { account: 'Retained Earnings', credit: '2,860' },
    ],
    note: b('Close net income to Retained Earnings.', 'Menutup laba bersih ke Saldo Laba.'),
  },
  {
    date: 'Oct 31',
    lines: [
      { account: 'Retained Earnings', debit: '500' },
      { account: 'Dividends', credit: '500' },
    ],
    note: b('Close dividends directly to Retained Earnings.', 'Menutup dividen langsung ke Saldo Laba.'),
  },
];

export const yaziciPostClosing = [
  { account: 'Cash', debit: '15,200', credit: '' },
  { account: 'Accounts Receivable', debit: '200', credit: '' },
  { account: 'Supplies', debit: '1,000', credit: '' },
  { account: 'Prepaid Insurance', debit: '550', credit: '' },
  { account: 'Equipment', debit: '5,000', credit: '' },
  { account: 'Accumulated Depreciation—Equipment', debit: '', credit: '40' },
  { account: 'Notes Payable', debit: '', credit: '5,000' },
  { account: 'Accounts Payable', debit: '', credit: '2,500' },
  { account: 'Unearned Service Revenue', debit: '', credit: '800' },
  { account: 'Salaries and Wages Payable', debit: '', credit: '1,200' },
  { account: 'Interest Payable', debit: '', credit: '50' },
  { account: 'Share Capital—Ordinary', debit: '', credit: '10,000' },
  { account: 'Retained Earnings', debit: '', credit: '2,360' },
];

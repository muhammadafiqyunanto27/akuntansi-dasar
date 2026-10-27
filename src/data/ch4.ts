import { b, type Chapter } from './types';

export const chapter4: Chapter = {
  slug: '4',
  number: 4,
  roman: 'IV',
  title: b('Completing the Accounting Cycle', 'Menuntaskan Siklus Akuntansi'),
  subtitle: b(
    'Worksheets, closing entries, correcting entries, and the classified statement of financial position.',
    'Kertas kerja, ayat penutup, ayat koreksi, dan laporan posisi keuangan terklasifikasi.'
  ),
  kicker: b('Chapter 4 · pages 160–199', 'Bab 4 · hlm. 160–199'),
  sourcePages: '160–199',
  lead: b(
    'The cycle is not finished when the statements are prepared. Temporary accounts must be closed, the ledger must be checked after closing, and the statement of financial position should be organised into meaningful classifications.',
    'Siklus belum selesai saat laporan tersusun. Akun nominal harus ditutup, buku besar diperiksa setelah penutupan, dan laporan posisi keuangan perlu disusun dalam klasifikasi yang bermakna.'
  ),
  objectives: [
    b('Explain how a worksheet supports the adjustment and statement process.', 'Menjelaskan bagaimana kertas kerja membantu proses penyesuaian dan penyusunan laporan.'),
    b('Prepare closing entries and a post-closing trial balance.', 'Menyusun ayat penutup dan neraca saldo setelah penutupan.'),
    b('Describe the steps of the accounting cycle.', 'Menjelaskan langkah-langkah siklus akuntansi.'),
    b('Prepare a classified statement of financial position.', 'Menyusun laporan posisi keuangan terklasifikasi.'),
  ],
  sections: [
    {
      id: 'worksheet',
      num: '4.1',
      tag: b('Tool', 'Alat'),
      title: b('The worksheet', 'Kertas kerja'),
      blocks: [
        {
          type: 'p',
          text: b(
            'A <strong>worksheet</strong> is a multiple-column form used in the adjustment process and in preparing financial statements. It is a working tool, not a financial statement, and it does not replace the journal or the ledger. The book treats it as an optional step.',
            '<strong>Kertas kerja</strong> adalah formulir multi-kolom yang dipakai dalam proses penyesuaian dan penyusunan laporan keuangan. Ia alat bantu, bukan laporan keuangan, dan tidak menggantikan jurnal atau buku besar. Buku ini memperlakukannya sebagai langkah opsional.'
          ),
        },
        {
          type: 'list',
          ordered: true,
          items: [
            b('Enter the unadjusted trial balance in the first pair of columns.', 'Masukkan neraca saldo sebelum penyesuaian pada pasangan kolom pertama.'),
            b('Enter the adjustments in the next pair of columns, keyed by number.', 'Masukkan penyesuaian pada pasangan kolom berikutnya, diberi nomor kunci.'),
            b('Extend adjusted balances to the adjusted trial balance columns.', 'Pindahkan saldo setelah penyesuaian ke kolom neraca saldo setelah penyesuaian.'),
            b('Extend each account to the income statement or statement of financial position columns.', 'Pindahkan setiap akun ke kolom laporan laba rugi atau laporan posisi keuangan.'),
            b('Total the columns. Net income is the difference between the statement columns; it is added to the retained earnings column.', 'Jumlahkan kolom. Laba bersih adalah selisih kolom laporan; ia ditambahkan ke kolom saldo laba.'),
          ],
        },
        {
          type: 'callout',
          title: b('Worksheet errors are cheap; statement errors are not', 'Kesalahan di kertas kerja murah; kesalahan di laporan mahal'),
          text: b(
            'The worksheet lets you see the effect of an adjustment before posting it. If the statement columns do not balance, the adjustment or the extension is wrong.',
            'Kertas kerja memperlihatkan efek penyesuaian sebelum diposting. Jika kolom laporan tidak seimbang, penyesuaian atau pemindahannya salah.'
          ),
          tone: 'tip',
        },
      ],
    },
    {
      id: 'closing',
      num: '4.2',
      tag: b('Period end', 'Akhir periode'),
      title: b('Closing the books', 'Menutup buku'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Closing entries transfer the balances of <strong>temporary accounts</strong> to retained earnings so that each new period starts from zero. Temporary accounts are revenues, expenses, dividends, and Income Summary. <strong>Permanent accounts</strong> — assets, liabilities, and equity — carry their balances into the next period.',
            'Ayat penutup memindahkan saldo <strong>akun nominal</strong> ke saldo laba agar setiap periode baru dimulai dari nol. Akun nominal adalah pendapatan, beban, dividen, dan Ikhtisar Laba Rugi. <strong>Akun permanen</strong> — aset, liabilitas, dan ekuitas — membawa saldonya ke periode berikutnya.'
          ),
        },
        {
          type: 'table',
          head: [b('Temporary (closed)', 'Nominal (ditutup)'), b('Permanent (not closed)', 'Permanen (tidak ditutup)')],
          rows: [
            [b('Revenues', 'Pendapatan'), b('Assets', 'Aset')],
            [b('Expenses', 'Beban'), b('Liabilities', 'Liabilitas')],
            [b('Dividends', 'Dividen'), b('Share capital—ordinary', 'Modal saham biasa')],
            [b('Income Summary', 'Ikhtisar Laba Rugi'), b('Retained earnings', 'Saldo laba')],
          ],
        },
        {
          type: 'table',
          head: [b('Closing entry', 'Ayat penutup'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          rows: [
            [b('1. Close revenues', '1. Tutup pendapatan'), b('Service Revenue 10,600', 'Pendapatan Jasa 10.600'), b('Income Summary 10,600', 'Ikhtisar Laba Rugi 10.600')],
            [b('2. Close expenses', '2. Tutup beban'), b('Income Summary 7,740', 'Ikhtisar Laba Rugi 7.740'), b('Each expense account, total 7,740', 'Masing-masing akun beban, total 7.740')],
            [b('3. Close net income', '3. Tutup laba bersih'), b('Income Summary 2,860', 'Ikhtisar Laba Rugi 2.860'), b('Retained Earnings 2,860', 'Saldo Laba 2.860')],
            [b('4. Close dividends', '4. Tutup dividen'), b('Retained Earnings 500', 'Saldo Laba 500'), b('Dividends 500', 'Dividen 500')],
          ],
        },
        {
          type: 'callout',
          title: b('Dividends bypass Income Summary', 'Dividen melewati Ikhtisar Laba Rugi'),
          text: b(
            'Dividends are not an expense. They are closed directly against Retained Earnings, which is why they never affect net income.',
            'Dividen bukan beban. Dividen ditutup langsung ke Saldo Laba, karena itu dividen tidak pernah memengaruhi laba bersih.'
          ),
          tone: 'warn',
        },
        {
          type: 'formula',
          label: b('Income Summary behaves like a clearing account', 'Ikhtisar Laba Rugi seperti akun penampung sementara'),
          expr: 'Revenues − Expenses = Net income → Retained Earnings',
          note: b(
            'A credit balance in Income Summary is net income; a debit balance is a net loss. The account ends at zero after closing.',
            'Saldo kredit Ikhtisar Laba Rugi berarti laba bersih; saldo debit berarti rugi bersih. Akun ini berakhir nol setelah penutupan.'
          ),
        },
      ],
    },
    {
      id: 'post-closing',
      num: '4.3',
      tag: b('Check', 'Pemeriksaan'),
      title: b('The post-closing trial balance', 'Neraca saldo setelah penutupan'),
      blocks: [
        {
          type: 'p',
          text: b(
            'After closing entries are posted, a post-closing trial balance is prepared from the permanent accounts only. It proves that debits still equal credits and that all temporary accounts have zero balances. It becomes the opening trial balance for the next period.',
            'Setelah ayat penutup diposting, neraca saldo setelah penutupan disusun hanya dari akun permanen. Ia membuktikan debit masih sama dengan kredit dan semua akun nominal bersaldo nol. Neraca ini menjadi saldo awal periode berikutnya.'
          ),
        },
        {
          type: 'table',
          head: [b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'right', 'right'],
          rows: [
            [b('Cash', 'Kas'), '15,200', ''],
            [b('Accounts Receivable', 'Piutang Usaha'), '200', ''],
            [b('Supplies', 'Perlengkapan'), '1,000', ''],
            [b('Prepaid Insurance', 'Asuransi Dibayar di Muka'), '550', ''],
            [b('Equipment', 'Peralatan'), '5,000', ''],
            [b('Accumulated Depreciation—Equipment', 'Akumulasi Penyusutan — Peralatan'), '', '40'],
            [b('Notes Payable', 'Utang Wesel'), '', '5,000'],
            [b('Accounts Payable', 'Utang Usaha'), '', '2,500'],
            [b('Unearned Service Revenue', 'Pendapatan Jasa Diterima di Muka'), '', '800'],
            [b('Salaries and Wages Payable', 'Utang Gaji dan Upah'), '', '1,200'],
            [b('Interest Payable', 'Utang Bunga'), '', '50'],
            [b('Share Capital—Ordinary', 'Modal Saham — Biasa'), '', '10,000'],
            [b('Retained Earnings', 'Saldo Laba'), '', '2,360'],
            [b('Total', 'Total'), '21,950', '21,950'],
          ],
        },
      ],
    },
    {
      id: 'cycle',
      num: '4.4',
      tag: b('Summary', 'Ringkasan'),
      title: b('The accounting cycle in nine steps', 'Siklus akuntansi dalam sembilan langkah'),
      blocks: [
        {
          type: 'p',
          text: b(
            'The accounting cycle is the sequence repeated every period: analyse, journalise, post, trial balance, adjust, adjusted trial balance, statements, close, and post-closing trial balance. Two steps are optional: a worksheet (during steps 4–6) and reversing entries (at the start of the next period).',
            'Siklus akuntansi adalah urutan yang diulang setiap periode: analisis, jurnal, posting, neraca saldo, penyesuaian, neraca saldo setelah penyesuaian, laporan, penutupan, dan neraca saldo setelah penutupan. Dua langkah bersifat opsional: kertas kerja (pada langkah 4–6) dan ayat pembalik (di awal periode berikutnya).'
          ),
        },
        {
          type: 'formula',
          label: b('The nine steps', 'Sembilan langkah'),
          expr: 'Analyse → Journalise → Post → Trial balance → Adjust → Adjusted TB → Statements → Close → Post-closing TB',
          note: b('Open the Accounting Cycle page for the full walkthrough with Yazici numbers.', 'Buka halaman Alur Akuntansi untuk penelusuran lengkap dengan angka Yazici.'),
        },
        {
          type: 'p',
          text: b(
            'Reversing entries are the exact opposite of certain adjusting entries, made at the beginning of the next period. They simplify routine recording but are optional and do not change the statements.',
            'Ayat pembalik adalah kebalikan persis dari ayat penyesuaian tertentu, dibuat di awal periode berikutnya. Mereka menyederhanakan pencatatan rutin tetapi opsional dan tidak mengubah laporan keuangan.'
          ),
        },
      ],
    },
    {
      id: 'correcting',
      num: '4.5',
      tag: b('Fix', 'Koreksi'),
      title: b('Correcting entries', 'Ayat koreksi'),
      blocks: [
        {
          type: 'p',
          text: b(
            'A correcting entry fixes an error after it has been journalised and posted. Unlike adjusting entries, correcting entries are not part of the normal cycle; they are made whenever an error is discovered, and they may involve any combination of accounts. They must be posted before closing entries.',
            'Ayat koreksi memperbaiki kesalahan setelah dijurnal dan diposting. Berbeda dari ayat penyesuaian, ayat koreksi bukan bagian dari siklus normal; ia dibuat kapan pun kesalahan ditemukan, dan dapat melibatkan kombinasi akun apa pun. Ayat koreksi harus diposting sebelum ayat penutup.'
          ),
        },
        {
          type: 'p',
          text: b(
            'The method is to compare the incorrect entry with the correct entry, then record only the difference. Case 1: Bai Co. collected NT$500 on account but credited Service Revenue instead of Accounts Receivable. Cash is correct; the correcting entry is debit Service Revenue NT$500 and credit Accounts Receivable NT$500.',
            'Caranya adalah membandingkan ayat yang salah dengan ayat yang benar, lalu mencatat hanya selisihnya. Kasus 1: Bai Co. menagih NT$500 piutang tetapi mengkredit Pendapatan Jasa, seharusnya Piutang Usaha. Kas sudah benar; ayat koreksinya debit Pendapatan Jasa NT$500 dan kredit Piutang Usaha NT$500.'
          ),
        },
        {
          type: 'p',
          text: b(
            'Case 2: Bai Co. bought equipment on account for NT$4,500 but recorded NT$450. Both Equipment and Accounts Payable are understated by NT$4,050. The correcting entry is debit Equipment NT$4,050 and credit Accounts Payable NT$4,050.',
            'Kasus 2: Bai Co. membeli peralatan secara kredit NT$4.500 tetapi mencatat NT$450. Peralatan dan Utang Usaha sama-sama kurang NT$4.050. Ayat koreksinya debit Peralatan NT$4.050 dan kredit Utang Usaha NT$4.050.'
          ),
        },
        {
          type: 'table',
          head: [b('Error', 'Kesalahan'), b('Correcting entry', 'Ayat koreksi')],
          rows: [
            [b('Collection on account credited to Service Revenue.', 'Penagihan piutang dikreditkan ke Pendapatan Jasa.'), b('Dr Service Revenue 500 / Cr Accounts Receivable 500', 'Dr Pendapatan Jasa 500 / Cr Piutang Usaha 500')],
            [b('Equipment purchase of 4,500 recorded as 450.', 'Pembelian peralatan 4.500 dicatat 450.'), b('Dr Equipment 4,050 / Cr Accounts Payable 4,050', 'Dr Peralatan 4.050 / Cr Utang Usaha 4.050')],
          ],
        },
      ],
    },
    {
      id: 'classified',
      num: '4.6',
      tag: b('Presentation', 'Penyajian'),
      title: b('The classified statement of financial position', 'Laporan posisi keuangan terklasifikasi'),
      blocks: [
        {
          type: 'p',
          text: b(
            'A classified statement of financial position groups similar assets and similar liabilities into standard sections. The groupings help readers judge the claims of short- and long-term creditors and whether the company has enough assets to pay debts as they come due.',
            'Laporan posisi keuangan terklasifikasi mengelompokkan aset dan liabilitas sejenis ke bagian standar. Pengelompokan ini membantu pembaca menilai klaim kreditor jangka pendek dan panjang serta apakah perusahaan punya cukup aset untuk membayar utang saat jatuh tempo.'
          ),
        },
        {
          type: 'table',
          head: [b('Section', 'Bagian'), b('Contents', 'Isi'), b('Order', 'Urutan')],
          rows: [
            [b('Intangible assets', 'Aset takberwujud'), b('Goodwill, patents, copyrights, trademarks.', 'Goodwill, paten, hak cipta, merek dagang.'), b('Often shown first in the book’s illustration.', 'Sering ditampilkan pertama pada ilustrasi buku.')],
            [b('Property, plant, and equipment', 'Aset tetap'), b('Land, buildings, equipment, less accumulated depreciation.', 'Tanah, bangunan, peralatan, dikurangi akumulasi penyusutan.'), b('After intangibles / long-term investments.', 'Setelah aset takberwujud / investasi jangka panjang.')],
            [b('Long-term investments', 'Investasi jangka panjang'), b('Shares and bonds of other companies held for years; land or buildings not used in operations.', 'Saham dan obligasi perusahaan lain yang dipegang bertahun-tahun; tanah atau bangunan yang tidak dipakai operasi.'), b('Before current assets.', 'Sebelum aset lancar.')],
            [b('Current assets', 'Aset lancar'), b('Prepaid expenses, inventory, receivables, short-term investments, cash.', 'Beban dibayar di muka, persediaan, piutang, investasi jangka pendek, kas.'), b('Reverse order of expected conversion to cash.', 'Urutan terbalik dari perkiraan konversi menjadi kas.')],
            [b('Equity', 'Ekuitas'), b('Share capital—ordinary and retained earnings.', 'Modal saham biasa dan saldo laba.'), b('After liabilities in the book’s format.', 'Setelah liabilitas pada format buku.')],
            [b('Non-current liabilities', 'Liabilitas jangka panjang'), b('Bonds, mortgages, long-term notes, lease and pension liabilities.', 'Obligasi, hipotek, wesel jangka panjang, liabilitas sewa dan pensiun.'), b('Before current liabilities.', 'Sebelum liabilitas jangka pendek.')],
            [b('Current liabilities', 'Liabilitas jangka pendek'), b('Notes payable, accounts payable, salaries payable, interest payable, taxes payable, unearned revenue, current maturities of long-term debt.', 'Utang wesel, utang usaha, utang gaji, utang bunga, utang pajak, pendapatan diterima di muka, bagian lancar utang jangka panjang.'), b('Notes payable first, then accounts payable, then by size.', 'Utang wesel dulu, lalu utang usaha, lalu menurut besarnya.')],
          ],
        },
        {
          type: 'p',
          text: b(
            '<strong>Current assets</strong> are expected to be converted to cash or used up within one year or the operating cycle, whichever is longer. The <strong>operating cycle</strong> is the average time to buy inventory, sell it on account, and collect cash. Most businesses use a one-year cutoff; vineyards and aircraft manufacturers may use longer.',
            '<strong>Aset lancar</strong> diperkirakan akan menjadi kas atau terpakai dalam satu tahun atau siklus operasi, mana yang lebih lama. <strong>Siklus operasi</strong> adalah waktu rata-rata untuk membeli persediaan, menjualnya secara kredit, dan menagih kas. Kebanyakan bisnis memakai batas satu tahun; perkebunan anggur dan produsen pesawat bisa lebih lama.'
          ),
        },
        {
          type: 'callout',
          title: b('Classify by nature, then by timing', 'Klasifikasikan menurut sifat, lalu waktu'),
          text: b(
            'First decide whether an item is an asset, a liability, or equity. Then decide whether it is current or non-current. A mortgage payable due in three years is a non-current liability; the portion due within one year is a current liability.',
            'Pertama tentukan apakah suatu pos adalah aset, liabilitas, atau ekuitas. Lalu tentukan apakah ia lancar atau tidak lancar. Utang hipotek yang jatuh tempo tiga tahun lagi adalah liabilitas jangka panjang; bagian yang jatuh tempo dalam satu tahun adalah liabilitas jangka pendek.'
          ),
          tone: 'tip',
        },
      ],
    },
    {
      id: 'reversing',
      num: '4.7',
      tag: b('Optional', 'Opsional'),
      title: b('Reversing entries', 'Ayat pembalik'),
      blocks: [
        {
          type: 'p',
          text: b(
            'After preparing the financial statements and closing the books, it is often helpful to reverse some of the adjusting entries before recording the regular transactions of the next period. Such entries are <strong>reversing entries</strong>. A company makes a reversing entry at the beginning of the next accounting period, and each one is the exact opposite of the adjusting entry made in the previous period. Recording reversing entries is an <strong>optional</strong> step in the accounting cycle.',
            'Setelah menyusun laporan keuangan dan menutup buku, sering kali berguna untuk membalik beberapa ayat penyesuaian sebelum mencatat transaksi reguler periode berikutnya. Ayat semacam itu disebut <strong>ayat pembalik</strong>. Perusahaan membuat ayat pembalik di awal periode akuntansi berikutnya, dan setiap ayat pembalik adalah kebalikan persis dari ayat penyesuaian yang dibuat pada periode sebelumnya. Pencatatan ayat pembalik adalah langkah <strong>opsional</strong> dalam siklus akuntansi.'
          ),
        },
        {
          type: 'p',
          text: b(
            'The purpose of reversing entries is to <strong>simplify the recording of a subsequent transaction</strong> related to an adjusting entry. For example, in Chapter 3 the payment of salaries after an adjusting entry required two debits: one to Salaries and Wages Payable and one to Salaries and Wages Expense. With reversing entries, the company can debit the entire subsequent payment to Salaries and Wages Expense. Reversing entries do not change the amounts reported in the financial statements; they only simplify the recording of later transactions.',
            'Tujuan ayat pembalik adalah untuk <strong>menyederhanakan pencatatan transaksi berikutnya</strong> yang terkait dengan ayat penyesuaian. Misalnya, pada Bab 3 pembayaran gaji setelah ayat penyesuaian memerlukan dua debit: satu ke Utang Gaji dan Upah dan satu ke Beban Gaji dan Upah. Dengan ayat pembalik, perusahaan dapat mendebit seluruh pembayaran berikutnya ke Beban Gaji dan Upah. Ayat pembalik tidak mengubah jumlah yang dilaporkan dalam laporan keuangan; ia hanya menyederhanakan pencatatan transaksi berikutnya.'
          ),
        },
        {
          type: 'callout',
          title: b('Which adjusting entries are reversed?', 'Ayat penyesuaian mana yang dibalik?'),
          text: b(
            'Companies most often use reversing entries to reverse two types of adjusting entries: <strong>accrued revenues</strong> and <strong>accrued expenses</strong>. Deferrals (prepaid expenses and unearned revenues) are not reversed.',
            'Perusahaan paling sering memakai ayat pembalik untuk membalik dua jenis ayat penyesuaian: <strong>pendapatan yang masih harus diterima</strong> dan <strong>beban yang masih harus dibayar</strong>. Deferral (beban dibayar di muka dan pendapatan diterima di muka) tidak dibalik.'
          ),
          tone: 'tip',
        },
        {
          type: 'h4',
          text: b('Yazici Advertising — accrued salaries', 'Yazici Advertising — gaji akrual'),
        },
        {
          type: 'p',
          text: b(
            'Yazici pays salaries of 4,000 on October 26 for work from October 15–26, then makes an adjusting entry on October 31 for 1,200 of salaries earned October 29–31 (to be paid in the November 9 payroll). The November 9 payroll is 4,000: 1,200 for the accrued salaries and 2,800 earned November 1–9.',
            'Yazici membayar gaji 4.000 pada 26 Oktober untuk pekerjaan 15–26 Oktober, lalu membuat ayat penyesuaian pada 31 Oktober sebesar 1.200 gaji yang diperoleh 29–31 Oktober (akan dibayar pada penggajian 9 November). Penggajian 9 November sebesar 4.000: 1.200 untuk gaji akrual dan 2.800 yang diperoleh 1–9 November.'
          ),
        },
        {
          type: 'table',
          caption: b('Illustration 4A-1 — entries WITHOUT reversing entries', 'Ilustrasi 4A-1 — entri TANPA ayat pembalik'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['Oct. 26', b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '4,000', ''],
            ['', b('Cash', 'Kas'), '', '4,000'],
            ['Oct. 31', b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '1,200', ''],
            ['', b('Salaries and Wages Payable', 'Utang Gaji dan Upah'), '', '1,200'],
            ['Oct. 31', b('Income Summary', 'Ikhtisar Laba Rugi'), '5,200', ''],
            ['', b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '', '5,200'],
            ['Nov. 1', b('No reversing entry is made.', 'Tidak ada ayat pembalik yang dibuat.'), '', ''],
            ['Nov. 9', b('Salaries and Wages Payable', 'Utang Gaji dan Upah'), '1,200', ''],
            ['', b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '2,800', ''],
            ['', b('Cash', 'Kas'), '', '4,000'],
          ],
        },
        {
          type: 'table',
          caption: b('Illustration 4A-1 — entries WITH reversing entries', 'Ilustrasi 4A-1 — entri DENGAN ayat pembalik'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['Oct. 26', b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '4,000', ''],
            ['', b('Cash', 'Kas'), '', '4,000'],
            ['Oct. 31', b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '1,200', ''],
            ['', b('Salaries and Wages Payable', 'Utang Gaji dan Upah'), '', '1,200'],
            ['Oct. 31', b('Income Summary', 'Ikhtisar Laba Rugi'), '5,200', ''],
            ['', b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '', '5,200'],
            ['Nov. 1', b('Salaries and Wages Payable', 'Utang Gaji dan Upah'), '1,200', ''],
            ['', b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '', '1,200'],
            ['Nov. 9', b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '4,000', ''],
            ['', b('Cash', 'Kas'), '', '4,000'],
          ],
        },
        {
          type: 'p',
          text: b(
            'The first three entries are the same whether or not Yazici uses reversing entries. The November 1 reversing entry eliminates the 1,200 balance in Salaries and Wages Payable created by the October 31 adjusting entry, and it creates a 1,200 <strong>credit balance</strong> in Salaries and Wages Expense. That credit balance is correct because it anticipates that the entire first salaries payment in the new period will be debited to the expense account; the debit then eliminates the credit balance, leaving a debit balance of 2,800 — exactly the expense incurred in the new period.',
            'Tiga entri pertama sama, baik Yazici memakai ayat pembalik maupun tidak. Ayat pembalik 1 November menghapus saldo 1.200 di Utang Gaji dan Upah yang dibuat oleh ayat penyesuaian 31 Oktober, dan menciptakan saldo <strong>kredit</strong> 1.200 di Beban Gaji dan Upah. Saldo kredit itu benar karena mengantisipasi bahwa seluruh pembayaran gaji pertama pada periode baru akan didebit ke akun beban; debit itu lalu menghapus saldo kredit, menyisakan saldo debit 2.800 — persis beban yang terjadi pada periode baru.'
          ),
        },
        {
          type: 'p',
          text: b(
            'With reversing entries, Yazici can debit all cash payments of expenses to the expense account, without regard to any accrued salaries payable. Being able to make the same entry each payday simplifies the recording process: subsequent transactions are recorded as if the related adjusting entry had never been made.',
            'Dengan ayat pembalik, Yazici dapat mendebit semua pembayaran kas beban ke akun beban, tanpa memperhatikan utang gaji akrual. Kemampuan membuat entri yang sama setiap hari gaji menyederhanakan proses pencatatan: transaksi berikutnya dicatat seolah-olah ayat penyesuaian terkait tidak pernah dibuat.'
          ),
        },
        {
          type: 'table',
          caption: b('Reversing an accrued revenue adjusting entry', 'Membalik ayat penyesuaian pendapatan akrual'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['Nov. 1', b('Service Revenue', 'Pendapatan Jasa'), '200', ''],
            ['', b('Accounts Receivable', 'Piutang Usaha'), '', '200'],
            ['', b('(To reverse the October 31 adjusting entry)', '(Membalik ayat penyesuaian 31 Oktober)'), '', ''],
          ],
        },
        {
          type: 'p',
          text: b(
            'When Yazici later collects the accrued service revenue, it debits Cash and credits Service Revenue. The same logic applies: the reversing entry makes the collection entry straightforward.',
            'Saat Yazici kemudian menagih pendapatan jasa akrual itu, ia mendebit Kas dan mengkredit Pendapatan Jasa. Logika yang sama berlaku: ayat pembalik membuat entri penagihan menjadi sederhana.'
          ),
        },
        {
          type: 'callout',
          title: b('Key points', 'Poin kunci'),
          text: b(
            'Reversing entries are optional and occur between closing (step 8) and the next period’s first transaction. They only reverse accrued (accrual) adjusting entries, not deferrals. They do not change reported financial-statement amounts; they only simplify later recording. They are most useful for accrued salaries and accrued revenues.',
            'Ayat pembalik bersifat opsional dan terjadi antara penutupan (langkah 8) dan transaksi pertama periode berikutnya. Ia hanya membalik ayat penyesuaian akrual (accrued), bukan deferral. Ia tidak mengubah jumlah yang dilaporkan dalam laporan keuangan; ia hanya menyederhanakan pencatatan berikutnya. Paling berguna untuk gaji akrual dan pendapatan akrual.'
          ),
          tone: 'note',
        },
      ],
    },
  ],
  quiz: [
    {
      q: b('Which accounts are closed at period end?', 'Akun mana yang ditutup di akhir periode?'),
      a: b('Revenues, expenses, dividends, and Income Summary — the temporary accounts.', 'Pendapatan, beban, dividen, dan Ikhtisar Laba Rugi — akun nominal.'),
    },
    {
      q: b('What does the post-closing trial balance contain?', 'Apa isi neraca saldo setelah penutupan?'),
      a: b('Only permanent accounts: assets, liabilities, and equity.', 'Hanya akun permanen: aset, liabilitas, dan ekuitas.'),
    },
    {
      q: b('Are correcting entries part of the normal accounting cycle?', 'Apakah ayat koreksi bagian dari siklus akuntansi normal?'),
      a: b('No. They are made only when an error is discovered, before closing entries.', 'Tidak. Ayat koreksi dibuat hanya saat kesalahan ditemukan, sebelum ayat penutup.'),
    },
    {
      q: b('In what order are current assets usually listed?', 'Dalam urutan apa aset lancar biasanya disajikan?'),
      a: b('Reverse order of expected conversion to cash: prepaid expenses, inventory, receivables, short-term investments, cash.', 'Urutan terbalik dari perkiraan konversi ke kas: beban dibayar di muka, persediaan, piutang, investasi jangka pendek, kas.'),
    },
    {
      q: b('What is the purpose of a reversing entry?', 'Apa tujuan ayat pembalik?'),
      a: b('To simplify the recording of a subsequent transaction related to an accrued adjusting entry, by making the entry the exact opposite of the prior adjusting entry. It is optional and does not change reported amounts.', 'Untuk menyederhanakan pencatatan transaksi berikutnya yang terkait dengan ayat penyesuaian akrual, dengan membuat entri yang merupakan kebalikan persis dari ayat penyesuaian sebelumnya. Bersifat opsional dan tidak mengubah jumlah yang dilaporkan.'),
    },
  ],
};

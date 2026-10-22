import { b, type Chapter } from './types';

export const chapter2: Chapter = {
  slug: '2',
  number: 2,
  roman: 'II',
  title: b('The Recording Process', 'Proses Pencatatan'),
  subtitle: b(
    'Accounts, debits and credits, journals, ledgers, and the trial balance.',
    'Akun, debit dan kredit, jurnal, buku besar, dan neraca saldo.'
  ),
  kicker: b('Chapter 2 · pages 52–99', 'Bab 2 · hlm. 52–99'),
  sourcePages: '52–99',
  lead: b(
    'Chapter 1 analysed transactions with plus and minus signs. Chapter 2 replaces that informal method with the double-entry system: every transaction is recorded as equal debits and credits, first in a journal, then in the ledger.',
    'Bab 1 menganalisis transaksi dengan tanda plus dan minus. Bab 2 menggantinya dengan sistem berpasangan: setiap transaksi dicatat sebagai debit dan kredit yang sama besar, pertama di jurnal, lalu di buku besar.'
  ),
  objectives: [
    b('Explain what an account is and how a T-account works.', 'Menjelaskan apa itu akun dan cara kerja akun T.'),
    b('Apply the rules of debits and credits to assets, liabilities, and equity.', 'Menerapkan aturan debit dan kredit pada aset, liabilitas, dan ekuitas.'),
    b('Journalise transactions and post them to the ledger.', 'Menjurnal transaksi dan mempostingnya ke buku besar.'),
    b('Prepare and interpret a trial balance.', 'Menyusun dan menafsirkan neraca saldo.'),
  ],
  sections: [
    {
      id: 'account',
      num: '2.1',
      tag: b('Tool', 'Alat'),
      title: b('The account and the T-account', 'Akun dan akun T'),
      blocks: [
        {
          type: 'p',
          text: b(
            'An <strong>account</strong> is an individual accounting record of increases and decreases in a specific asset, liability, or equity item. In its simplest form it has three parts: a title, a left (debit) side, and a right (credit) side. Because it resembles the letter T, we call it a <strong>T-account</strong>.',
            '<strong>Akun</strong> adalah catatan akuntansi individual untuk kenaikan dan penurunan aset, liabilitas, atau ekuitas tertentu. Dalam bentuk paling sederhana, akun punya tiga bagian: judul, sisi kiri (debit), dan sisi kanan (kredit). Karena bentuknya seperti huruf T, kita menyebutnya <strong>akun T</strong>.'
          ),
        },
        {
          type: 'p',
          text: b(
            'Debit means the left side; credit means the right side. They do <strong>not</strong> mean increase or decrease. Whether a debit increases or decreases an account depends on the type of account. An account has a debit balance when total debits exceed total credits, and a credit balance in the opposite case.',
            'Debit berarti sisi kiri; kredit berarti sisi kanan. Keduanya <strong>bukan</strong> berarti naik atau turun. Apakah debit menambah atau mengurangi bergantung pada jenis akun. Akun bersaldo debit bila total debit melebihi kredit, dan bersaldo kredit bila sebaliknya.'
          ),
        },
        {
          type: 'table',
          head: [b('Account type', 'Jenis akun'), b('Debit', 'Debit'), b('Credit', 'Kredit'), b('Normal balance', 'Saldo normal')],
          rows: [
            [b('Asset', 'Aset'), b('Increase', 'Menambah'), b('Decrease', 'Mengurangi'), b('Debit', 'Debit')],
            [b('Liability', 'Liabilitas'), b('Decrease', 'Mengurangi'), b('Increase', 'Menambah'), b('Credit', 'Kredit')],
            [b('Share capital', 'Modal saham'), b('Decrease', 'Mengurangi'), b('Increase', 'Menambah'), b('Credit', 'Kredit')],
            [b('Retained earnings', 'Saldo laba'), b('Decrease', 'Mengurangi'), b('Increase', 'Menambah'), b('Credit', 'Kredit')],
            [b('Dividends', 'Dividen'), b('Increase', 'Menambah'), b('Decrease', 'Mengurangi'), b('Debit', 'Debit')],
            [b('Revenue', 'Pendapatan'), b('Decrease', 'Mengurangi'), b('Increase', 'Menambah'), b('Credit', 'Kredit')],
            [b('Expense', 'Beban'), b('Increase', 'Menambah'), b('Decrease', 'Mengurangi'), b('Debit', 'Debit')],
          ],
        },
        {
          type: 'p',
          text: b(
            'This is the <strong>double-entry system</strong>: the dual effect of each transaction is recorded in appropriate accounts, and total debits must equal total credits. Equality of debits and credits keeps the accounting equation in balance and helps detect errors.',
            'Inilah <strong>sistem berpasangan</strong>: efek ganda setiap transaksi dicatat pada akun yang tepat, dan total debit harus sama dengan total kredit. Kesamaan debit dan kredit menjaga persamaan akuntansi tetap seimbang dan membantu menemukan kesalahan.'
          ),
        },
        {
          type: 'callout',
          title: b('Normal balance as a diagnostic', 'Saldo normal sebagai alat diagnosa'),
          text: b(
            'A credit balance in an asset account such as Land, or a debit balance in a liability account such as Salaries and Wages Payable, usually signals an error. An overdrawn bank account is the classic exception: Cash can legitimately show a credit balance.',
            'Saldo kredit pada akun aset seperti Tanah, atau saldo debit pada akun liabilitas seperti Utang Gaji, biasanya menandakan kesalahan. Rekening bank yang cerukan adalah pengecualian klasik: Kas boleh bersaldo kredit.'
          ),
          tone: 'tip',
        },
      ],
    },
    {
      id: 'equity-relationships',
      num: '2.2',
      tag: b('Map', 'Peta'),
      title: b('Equity relationships', 'Hubungan dalam ekuitas'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Equity has five subdivisions: share capital—ordinary, retained earnings, dividends, revenues, and expenses. Each gets its own account. Share capital is reported in the statement of financial position; revenues and expenses on the income statement; dividends on the retained earnings statement.',
            'Ekuitas punya lima subbagian: modal saham biasa, saldo laba, dividen, pendapatan, dan beban. Masing-masing punya akun sendiri. Modal saham dilaporkan di laporan posisi keuangan; pendapatan dan beban di laporan laba rugi; dividen di laporan saldo laba.'
          ),
        },
        {
          type: 'table',
          head: [b('Account', 'Akun'), b('Increased by', 'Bertambah dengan'), b('Decreased by', 'Berkurang dengan'), b('Where reported', 'Dilaporkan di')],
          rows: [
            [b('Share capital—ordinary', 'Modal saham biasa'), b('Credit', 'Kredit'), b('Debit', 'Debit'), b('Statement of financial position', 'Laporan posisi keuangan')],
            [b('Retained earnings', 'Saldo laba'), b('Credit (net income)', 'Kredit (laba bersih)'), b('Debit (net loss, dividends)', 'Debit (rugi bersih, dividen)'), b('Statement of financial position', 'Laporan posisi keuangan')],
            [b('Dividends', 'Dividen'), b('Debit', 'Debit'), b('Credit', 'Kredit'), b('Retained earnings statement', 'Laporan saldo laba')],
            [b('Revenues', 'Pendapatan'), b('Credit', 'Kredit'), b('Debit', 'Debit'), b('Income statement', 'Laporan laba rugi')],
            [b('Expenses', 'Beban'), b('Debit', 'Debit'), b('Credit', 'Kredit'), b('Income statement', 'Laporan laba rugi')],
          ],
        },
        {
          type: 'formula',
          label: b('Why dividends sit with equity', 'Mengapa dividen masuk ekuitas'),
          expr: 'Ending RE = Beginning RE + Net income − Dividends',
          note: b(
            'Dividends, revenues, and expenses are eventually transferred to retained earnings at the end of the period. None of them is an asset or a liability.',
            'Dividen, pendapatan, dan beban pada akhirnya dipindahkan ke saldo laba di akhir periode. Tidak satu pun merupakan aset atau liabilitas.'
          ),
        },
      ],
    },
    {
      id: 'journal',
      num: '2.3',
      tag: b('Step 2', 'Langkah 2'),
      title: b('The journal: chronological recording', 'Jurnal: pencatatan kronologis'),
      blocks: [
        {
          type: 'p',
          text: b(
            'The recording process has three steps: <strong>analyse</strong> each transaction, <strong>enter</strong> it in a journal, and <strong>transfer</strong> it to the ledger. The journal is the <strong>book of original entry</strong> because transactions are recorded there first, in the order they occur.',
            'Proses pencatatan punya tiga langkah: <strong>analisis</strong> setiap transaksi, <strong>catat</strong> di jurnal, dan <strong>pindahkan</strong> ke buku besar. Jurnal adalah <strong>buku pencatatan pertama</strong> karena transaksi dicatat di sana lebih dulu, sesuai urutan kejadian.'
          ),
        },
        {
          type: 'p',
          text: b(
            'The journal contributes three things: it shows the complete effect of a transaction in one place, it provides a chronological record, and it helps prevent or locate errors because each debit and credit can be compared directly.',
            'Jurnal memberi tiga manfaat: menunjukkan efek lengkap satu transaksi di satu tempat, menyediakan catatan kronologis, dan membantu mencegah atau menemukan kesalahan karena setiap debit dan kredit dapat dibandingkan langsung.'
          ),
        },
        {
          type: 'table',
          head: [b('Part of an entry', 'Bagian ayat jurnal'), b('Content', 'Isi')],
          rows: [
            [b('Date', 'Tanggal'), b('When the transaction occurred.', 'Kapan transaksi terjadi.')],
            [b('Accounts', 'Akun'), b('Specific account titles; debits listed first, credits indented.', 'Nama akun yang spesifik; debit ditulis lebih dulu, kredit menjorok.')],
            [b('Amounts', 'Jumlah'), b('Debit amount in the left column, credit amount in the right.', 'Jumlah debit di kolom kiri, kredit di kolom kanan.')],
            [b('Explanation', 'Penjelasan'), b('A brief description of the transaction.', 'Keterangan singkat tentang transaksi.')],
            [b('Reference', 'Referensi'), b('Account number added when the entry is posted.', 'Nomor akun ditambahkan saat posting.')],
          ],
        },
        { type: 'h4', text: b('Simple and compound entries', 'Ayat sederhana dan gabungan') },
        {
          type: 'p',
          text: b(
            'A <strong>simple entry</strong> has one debit and one credit. A <strong>compound entry</strong> has three or more accounts. Example: Tsai Company buys a truck for NT$420,000, paying NT$240,000 cash and agreeing to pay NT$180,000 later. Debit Equipment NT$420,000; credit Cash NT$240,000; credit Accounts Payable NT$180,000.',
            '<strong>Ayat sederhana</strong> memiliki satu debit dan satu kredit. <strong>Ayat gabungan</strong> melibatkan tiga akun atau lebih. Contoh: Tsai Company membeli truk NT$420.000, membayar NT$240.000 tunai dan sisanya NT$180.000 nanti. Debit Peralatan NT$420.000; kredit Kas NT$240.000; kredit Utang Usaha NT$180.000.'
          ),
        },
        {
          type: 'table',
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['Oct 1', b('Cash', 'Kas'), '10,000', ''],
            ['', b('Share Capital—Ordinary', 'Modal Saham — Biasa'), '', '10,000'],
            ['', b('(Issued shares for cash)', '(Menerbitkan saham untuk kas)'), '', ''],
            ['Oct 1', b('Equipment', 'Peralatan'), '5,000', ''],
            ['', b('Notes Payable', 'Utang Wesel'), '', '5,000'],
            ['', b('(3-month, 12% note for office equipment)', '(Wesel 3 bulan, 12% untuk peralatan kantor)'), '', ''],
          ],
        },
        {
          type: 'callout',
          title: b('Account titles matter', 'Nama akun itu penting'),
          text: b(
            'Use specific titles and keep using them consistently. Erroneous or vague titles produce incorrect statements. “Cash paid” is not an account; “Rent Expense” is.',
            'Gunakan nama akun yang spesifik dan konsisten. Nama yang salah atau kabur menghasilkan laporan yang salah. “Kas dibayar” bukan nama akun; “Beban Sewa” adalah nama akun.'
          ),
        },
      ],
    },
    {
      id: 'ledger',
      num: '2.4',
      tag: b('Step 3', 'Langkah 3'),
      title: b('The ledger and posting', 'Buku besar dan posting'),
      blocks: [
        {
          type: 'p',
          text: b(
            'The <strong>ledger</strong> is the entire group of accounts maintained by a company. The general ledger contains all asset, liability, and equity accounts, each numbered for identification. It keeps one running balance per account and shows the amount available or owed at any time.',
            '<strong>Buku besar</strong> adalah keseluruhan akun yang dipelihara perusahaan. Buku besar umum memuat semua akun aset, liabilitas, dan ekuitas, masing-masing bernomor untuk identifikasi. Buku besar menyimpan saldo berjalan per akun dan menunjukkan jumlah yang tersedia atau terutang pada suatu waktu.'
          ),
        },
        {
          type: 'p',
          text: b(
            '<strong>Posting</strong> is transferring journal entries to the ledger accounts. Post all debits and credits of one journal entry before moving to the next, and post on a timely basis so the ledger stays current. The reference column records the journal page from which the amount came.',
            '<strong>Posting</strong> adalah memindahkan ayat jurnal ke akun buku besar. Posting semua debit dan kredit satu ayat jurnal sebelum pindah ke ayat berikutnya, dan lakukan tepat waktu agar buku besar selalu mutakhir. Kolom referensi mencatat halaman jurnal asal angka tersebut.'
          ),
        },
        {
          type: 'list',
          ordered: true,
          items: [
            b('Enter the date, journal page, and debit amount in the account debited.', 'Masukkan tanggal, halaman jurnal, dan jumlah debit ke akun yang didebit.'),
            b('Write the account number in the journal’s reference column.', 'Tulis nomor akun di kolom referensi jurnal.'),
            b('Enter the date, journal page, and credit amount in the account credited.', 'Masukkan tanggal, halaman jurnal, dan jumlah kredit ke akun yang dikredit.'),
            b('Write the account number in the journal’s reference column.', 'Tulis nomor akun di kolom referensi jurnal.'),
          ],
        },
        { type: 'h4', text: b('Chart of accounts', 'Daftar akun') },
        {
          type: 'p',
          text: b(
            'A chart of accounts lists the accounts and the numbers that identify their location in the ledger. The numbering usually starts with statement of financial position accounts and then moves to income statement accounts. In the book’s illustration: 101–199 assets, 200–299 liabilities, 300–399 equity, 400–499 revenues, 500–799 expenses, 800–899 other revenues, 900–999 other expenses.',
            'Daftar akun memuat nama akun dan nomor yang menunjukkan lokasinya di buku besar. Penomoran biasanya dimulai dari akun laporan posisi keuangan lalu akun laba rugi. Pada ilustrasi buku: 101–199 aset, 200–299 liabilitas, 300–399 ekuitas, 400–499 pendapatan, 500–799 beban, 800–899 pendapatan lain, 900–999 beban lain.'
          ),
        },
        {
          type: 'callout',
          title: b('Gaps are intentional', 'Celah nomor memang disengaja'),
          text: b(
            'Numbers are skipped so new accounts can be inserted later without renumbering the whole ledger.',
            'Nomor dilewati agar akun baru bisa disisipkan kemudian tanpa menomori ulang seluruh buku besar.'
          ),
          tone: 'note',
        },
      ],
    },
    {
      id: 'trial-balance',
      num: '2.5',
      tag: b('Checkpoint', 'Titik kontrol'),
      title: b('The trial balance', 'Neraca saldo'),
      blocks: [
        {
          type: 'p',
          text: b(
            'A <strong>trial balance</strong> is a list of accounts and their balances at a given time. Debit balances go in the left column and credit balances in the right. Its purpose is to prove the mathematical equality of debits and credits after posting.',
            '<strong>Neraca saldo</strong> adalah daftar akun dan saldonya pada waktu tertentu. Saldo debit di kolom kiri dan saldo kredit di kolom kanan. Tujuannya membuktikan kesamaan matematis debit dan kredit setelah posting.'
          ),
        },
        {
          type: 'table',
          head: [b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'right', 'right'],
          rows: [
            [b('Cash', 'Kas'), '15,200', ''],
            [b('Supplies', 'Perlengkapan'), '2,500', ''],
            [b('Prepaid Insurance', 'Asuransi Dibayar di Muka'), '600', ''],
            [b('Equipment', 'Peralatan'), '5,000', ''],
            [b('Notes Payable', 'Utang Wesel'), '', '5,000'],
            [b('Accounts Payable', 'Utang Usaha'), '', '2,500'],
            [b('Unearned Service Revenue', 'Pendapatan Jasa Diterima di Muka'), '', '1,200'],
            [b('Share Capital—Ordinary', 'Modal Saham — Biasa'), '', '10,000'],
            [b('Dividends', 'Dividen'), '500', ''],
            [b('Service Revenue', 'Pendapatan Jasa'), '', '10,000'],
            [b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '4,000', ''],
            [b('Rent Expense', 'Beban Sewa'), '900', ''],
            [b('Total', 'Total'), '28,700', '28,700'],
          ],
        },
        {
          type: 'p',
          text: b(
            'The trial balance is a checkpoint, not a guarantee. It may still balance when a transaction is not journalised, a correct entry is not posted, an entry is posted twice, the wrong accounts are used, or offsetting errors are made. It proves mathematical equality, not completeness or correctness.',
            'Neraca saldo adalah titik kontrol, bukan jaminan. Ia bisa tetap seimbang ketika transaksi tidak dijurnal, ayat yang benar tidak diposting, ayat diposting dua kali, akun yang dipakai salah, atau terjadi kesalahan yang saling meniadakan. Ia membuktikan kesamaan matematis, bukan kelengkapan atau kebenaran.'
          ),
        },
        {
          type: 'table',
          head: [b('When the trial balance does not balance', 'Bila neraca saldo tidak seimbang'), b('What to check', 'Yang diperiksa')],
          rows: [
            [b('Difference is €1, €10, €100…', 'Selisih €1, €10, €100…'), b('Addition or subtraction error in the columns.', 'Kesalahan penjumlahan atau pengurangan kolom.')],
            [b('Difference is divisible by 2', 'Selisih habis dibagi 2'), b('A debit may have been posted as a credit (or vice versa) for half the difference. Scan the ledger for that amount.', 'Debit mungkin diposting sebagai kredit (atau sebaliknya) sebesar setengah selisih. Periksa buku besar untuk jumlah itu.')],
            [b('Difference is divisible by 9', 'Selisih habis dibagi 9'), b('Likely a transposition (e.g. 45 written as 54) or a slide (e.g. 100 written as 1,000).', 'Kemungkinan transposisi (mis. 45 ditulis 54) atau pergeseran (mis. 100 ditulis 1.000).')],
            [b('One balance is missing', 'Satu saldo hilang'), b('An account balance was not copied into the trial balance.', 'Saldo akun tidak disalin ke neraca saldo.')],
          ],
        },
      ],
    },
    {
      id: 'yazici',
      num: '2.6',
      tag: b('Worked example', 'Contoh kerja'),
      title: b('Yazici Advertising: from journal to trial balance', 'Yazici Advertising: dari jurnal ke neraca saldo'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Yazici Advertising A.Ş. is a service company. Its October transactions show the complete recording process. The two October 1 transactions are the opening investment and the purchase of equipment financed by a note.',
            'Yazici Advertising A.Ş. adalah perusahaan jasa. Transaksi Oktober menunjukkan proses pencatatan lengkap. Dua transaksi 1 Oktober adalah setoran modal awal dan pembelian peralatan yang dibiayai wesel.'
          ),
        },
        {
          type: 'table',
          head: [b('Date', 'Tanggal'), b('Transaction', 'Transaksi'), b('Entry', 'Ayat')],
          rows: [
            ['Oct 1', b('Invest €10,000 cash.', 'Menyetor kas €10.000.'), b('Dr Cash 10,000 / Cr Share Capital 10,000', 'Dr Kas 10.000 / Cr Modal Saham 10.000')],
            ['Oct 1', b('Buy equipment €5,000 with a 12% note.', 'Membeli peralatan €5.000 dengan wesel 12%.'), b('Dr Equipment 5,000 / Cr Notes Payable 5,000', 'Dr Peralatan 5.000 / Cr Utang Wesel 5.000')],
            ['Oct 2', b('Receive €1,200 advance for future services.', 'Menerima uang muka €1.200 untuk jasa mendatang.'), b('Dr Cash 1,200 / Cr Unearned Service Revenue 1,200', 'Dr Kas 1.200 / Cr Pendapatan Jasa Diterima di Muka 1.200')],
            ['Oct 3', b('Pay October rent €900.', 'Membayar sewa Oktober €900.'), b('Dr Rent Expense 900 / Cr Cash 900', 'Dr Beban Sewa 900 / Cr Kas 900')],
            ['Oct 4', b('Pay €600 for a one-year insurance policy.', 'Membayar €600 untuk polis asuransi satu tahun.'), b('Dr Prepaid Insurance 600 / Cr Cash 600', 'Dr Asuransi Dibayar di Muka 600 / Cr Kas 600')],
            ['Oct 5', b('Buy supplies €2,500 on account.', 'Membeli perlengkapan €2.500 secara kredit.'), b('Dr Supplies 2,500 / Cr Accounts Payable 2,500', 'Dr Perlengkapan 2.500 / Cr Utang Usaha 2.500')],
            ['Oct 20', b('Declare and pay a €500 dividend.', 'Mengumumkan dan membayar dividen €500.'), b('Dr Dividends 500 / Cr Cash 500', 'Dr Dividen 500 / Cr Kas 500')],
            ['Oct 26', b('Pay salaries €4,000.', 'Membayar gaji €4.000.'), b('Dr Salaries and Wages Expense 4,000 / Cr Cash 4,000', 'Dr Beban Gaji dan Upah 4.000 / Cr Kas 4.000')],
            ['Oct 31', b('Receive €10,000 cash for services performed.', 'Menerima kas €10.000 untuk jasa yang dikerjakan.'), b('Dr Cash 10,000 / Cr Service Revenue 10,000', 'Dr Kas 10.000 / Cr Pendapatan Jasa 10.000')],
          ],
        },
        {
          type: 'callout',
          title: b('No entry on 9 October', 'Tidak ada ayat pada 9 Oktober'),
          text: b(
            'Yazici hired four employees on 9 October. Hiring is an agreement, not a transaction; the first accounting entry occurs on 26 October when salaries are paid.',
            'Yazici merekrut empat karyawan pada 9 Oktober. Perekrutan adalah kesepakatan, bukan transaksi; ayat pertama terjadi pada 26 Oktober saat gaji dibayar.'
          ),
          tone: 'note',
        },
        {
          type: 'p',
          text: b(
            'After posting, the ledger balances produce the trial balance shown in section 2.5. Total debits and credits are €28,700. Chapter 3 will add the end-of-period adjustments that this unadjusted trial balance still lacks.',
            'Setelah posting, saldo buku besar menghasilkan neraca saldo pada bagian 2.5. Total debit dan kredit €28.700. Bab 3 akan menambahkan penyesuaian akhir periode yang belum ada di neraca saldo ini.'
          ),
        },
      ],
    },
  ],
  quiz: [
    {
      q: b('What does a debit mean?', 'Apa arti debit?'),
      a: b('The left side of an account. It is not automatically an increase.', 'Sisi kiri akun. Debit tidak otomatis berarti kenaikan.'),
    },
    {
      q: b('What is the normal balance of an expense account?', 'Apa saldo normal akun beban?'),
      a: b('Debit.', 'Debit.'),
    },
    {
      q: b('Why is the journal called the book of original entry?', 'Mengapa jurnal disebut buku pencatatan pertama?'),
      a: b('Because transactions are first recorded there, in chronological order, before being posted to the ledger.', 'Karena transaksi pertama kali dicatat di sana, secara kronologis, sebelum diposting ke buku besar.'),
    },
    {
      q: b('Does a balanced trial balance prove there are no errors?', 'Apakah neraca saldo yang seimbang membuktikan tidak ada kesalahan?'),
      a: b('No. It only proves that total debits equal total credits; transactions can still be omitted, duplicated, or posted to the wrong accounts.', 'Tidak. Itu hanya membuktikan total debit sama dengan total kredit; transaksi bisa tetap terlewat, tercatat dua kali, atau salah akun.'),
    },
  ],
};

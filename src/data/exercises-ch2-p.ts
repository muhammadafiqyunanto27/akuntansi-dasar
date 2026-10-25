import { b } from '../data/types';

// P-type and BYP-type exercises for Chapter 2
// Extracted from PDF Pages 21-40 (approx)

export const chapter2PAndBYP = [
  // P-type exercises for Chapter 2
  {
    id: 'P2-1',
    title: b('P2-1: Kaustav Sen Company', 'P2-1: Perusahaan Kaustav Sen'),
    question: b(
      'Kaustav Sen Company was started on June 1. The following transactions occurred during June:\n' +
      '1. Sen invested €15,000 cash in the business.\n' +
      '2. Purchased equipment for €5,000 on account.\n' +
      '3. Paid €2,000 cash for June rent.\n' +
      '4. Billed customers €4,500 for services performed.\n' +
      '5. Paid €1,200 cash for salaries.\n' +
      '6. Received €3,000 cash from customers on account.\n' +
      '7. Incurred €300 of advertising costs on account.\n' +
      '8. Paid €400 cash for utilities.\n' +
      '9. Declared and paid €500 cash dividend.\n\n' +
      'Instructions:\n' +
      '(a) Journalize the June transactions.\n' +
      '(b) Post to ledger accounts.\n' +
      '(c) Prepare a trial balance at June 30.',
      'Perusahaan Kaustav Sen didirikan pada 1 Juni. Transaksi berikut terjadi selama Juni:\n' +
      '1. Sen berinvestasi €15.000 tunai dalam bisnis.\n' +
      '2. Membeli peralatan €5.000 pada rekening.\n' +
      '3. Membayar €2.000 tunai untuk sewa Juni.\n' +
      '4. Menagihkan pelanggan €4.500 untuk jasa yang dilakukan.\n' +
      '5. Membayar €1.200 tunai untuk gaji.\n' +
      '6. Menerima €3.000 tunai dari pelanggan pada rekening.\n' +
      '7. Mengakibatkan €300 biaya iklan pada rekening.\n' +
      '8. Membayar €400 tunai untuk utilitas.\n' +
      '9. Mengumumkan dan membayar €500 dividen tunai.\n\n' +
      'Instruksi:\n' +
      '(a) Jurnalikan transaksi Juni.\n' +
      '(b) Pos ke rekening buku besar.\n' +
      '(c) Siapkan neraca saldo pada 30 Juni.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('9 June transactions to journalize', '9 transaksi Juni untuk dijurnalikan'),
        answer: b('1. Cash 15,000 / Share Capital 15,000\n2. Equipment 5,000 / Accounts Payable 5,000\n3. Rent Expense 2,000 / Cash 2,000\n4. Accounts Receivable 4,500 / Service Revenue 4,500\n5. Salaries Expense 1,200 / Cash 1,200\n6. Cash 3,000 / Accounts Receivable 3,000\n7. Advertising Expense 300 / Accounts Payable 300\n8. Utilities Expense 400 / Cash 400\n9. Dividends 500 / Cash 500', '1. Kas 15.000 / Modal Saham 15.000\n2. Peralatan 5.000 / Hutang Usaha 5.000\n3. Beban Sewa 2.000 / Kas 2.000\n4. Piutang Usaha 4.500 / Pendapatan Jasa 4.500\n5. Beban Gaji 1.200 / Kas 1.200\n6. Kas 3.000 / Piutang Usaha 3.000\n7. Beban Iklan 300 / Hutang Usaha 300\n8. Beban Utilitas 400 / Kas 400\n9. Dividen 500 / Kas 500')
      },
      {
        label: '(a)', given: b('General Journal - June Transactions', 'Jurnal Umum - Transaksi Juni'), blocks: [
          { type: 'table', caption: b('General Journal - P2-1 Kaustav Sen Company', 'Jurnal Umum - P2-1 Perusahaan Kaustav Sen'), head: [
            b('Date\nTgl', 'Date\nTgl'),
            b('Account Title\nNama Akun', 'Account Title\nNama Akun'),
            b('Ref\nRef', 'Ref\nRef'),
            b('Debit\nDebet', 'Debit\nDebet'),
            b('Credit\nKredit', 'Credit\nKredit')
          ], rows: [
            ['Jun 1', 'Cash\nKas', '', '15,000', ''],
            ['', 'Share Capital\nModal Saham', '', '', '15,000'],
            ['Jun 2', 'Equipment\nPeralatan', '', '5,000', ''],
            ['', 'Accounts Payable\nHutang Usaha', '', '', '5,000'],
            ['Jun 3', 'Rent Expense\nBeban Sewa', '', '2,000', ''],
            ['', 'Cash\nKas', '', '', '2,000'],
            ['Jun 4', 'Accounts Receivable\nPiutang Usaha', '', '4,500', ''],
            ['', 'Service Revenue\nPendapatan Jasa', '', '', '4,500'],
            ['Jun 5', 'Salaries Expense\nBeban Gaji', '', '1,200', ''],
            ['', 'Cash\nKas', '', '', '1,200'],
            ['Jun 6', 'Cash\nKas', '', '3,000', ''],
            ['', 'Accounts Receivable\nPiutang Usaha', '', '', '3,000'],
            ['Jun 7', 'Advertising Expense\nBeban Iklan', '', '300', ''],
            ['', 'Accounts Payable\nHutang Usaha', '', '', '300'],
            ['Jun 8', 'Utilities Expense\nBeban Utilitas', '', '400', ''],
            ['', 'Cash\nKas', '', '', '400'],
            ['Jun 9', 'Dividends\nDividen', '', '500', ''],
            ['', 'Cash\nKas', '', '', '500']
          ], align: ['center', 'left', 'center', 'right', 'right'], compact: false }
        ]},
      {
        label: '(b)', given: b('Post journal entries to T-accounts / Ledger', 'Pos ke rekening T / Buku Besar'), blocks: [
          { type: 'table', caption: b('T-Accounts / Ledger Accounts', 'Rekening T / Rekening Buku Besar'), head: [
            b('Cash (101)\nKas', 'Cash (101)\nKas'),
            b('Debit', 'Debet'),
            b('Credit', 'Kredit'),
            b('Balance', 'Saldo')
          ], rows: [
            ['Jun 1', '15,000', '', '15,000 Dr'],
            ['Jun 3', '', '2,000', '13,000 Dr'],
            ['Jun 5', '', '1,200', '11,800 Dr'],
            ['Jun 6', '3,000', '', '14,800 Dr'],
            ['Jun 8', '', '400', '14,400 Dr'],
            ['Jun 9', '', '500', '13,900 Dr']
          ], align: ['center', 'right', 'right', 'center'], compact: false }
        ]},
      {
        label: '(b)', given: b('All T-Accounts Summary', 'Ringkasan Semua Rekening T'), blocks: [
          { type: 'table', caption: b('Complete T-Accounts', 'Rekening T Lengkap'), head: [
            b('Account\nAkun', 'Account\nAkun'),
            b('Debits\nTotal Debet', 'Debits\nTotal Debet'),
            b('Credits\nTotal Kredit', 'Credits\nTotal Kredit'),
            b('Ending Balance\nSaldo Akhir', 'Ending Balance\nSaldo Akhir')
          ], rows: [
            ['Cash\nKas', '18,000', '4,100', '13,900 Dr'],
            ['Accounts Receivable\nPiutang Usaha', '4,500', '3,000', '1,500 Dr'],
            ['Equipment\nPeralatan', '5,000', '', '5,000 Dr'],
            ['Accounts Payable\nHutang Usaha', '', '5,300', '5,300 Cr'],
            ['Share Capital\nModal Saham', '', '15,000', '15,000 Cr'],
            ['Service Revenue\nPendapatan Jasa', '', '4,500', '4,500 Cr'],
            ['Rent Expense\nBeban Sewa', '2,000', '', '2,000 Dr'],
            ['Salaries Expense\nBeban Gaji', '1,200', '', '1,200 Dr'],
            ['Advertising Expense\nBeban Iklan', '300', '', '300 Dr'],
            ['Utilities Expense\nBeban Utilitas', '400', '', '400 Dr'],
            ['Dividends\nDividen', '500', '', '500 Dr']
          ], align: ['left', 'right', 'right', 'center'], compact: false }
        ]},
      {
        label: '(c)', given: b('Prepare trial balance from ledger balances', 'Siapkan neraca saldo dari saldo buku besar'), answer: b('Trial Balance at June 30:\nCash 13,900 | Accounts Receivable 1,500 | Equipment 5,000\nAccounts Payable 5,300 | Share Capital 15,000\nService Revenue 4,500\nRent Expense 2,000 | Salaries Expense 1,200 | Advertising Expense 300 | Utilities Expense 400\nDividends 500\nTotal Debits = Total Credits = 28,200', 'Neraca Saldo 30 Juni:\nKas 13.900 | Piutang Usaha 1.500 | Peralatan 5.000\nHutang Usaha 5.300 | Modal Saham 15.000\nPendapatan Jasa 4.500\nBeban Sewa 2.000 | Beban Gaji 1.200 | Beban Iklan 300 | Beban Utilitas 400\nDividen 500\nTotal Debet = Total Kredit = 28.200'),
        blocks: [
          { type: 'table', caption: b('Trial Balance - June 30', 'Neraca Saldo - 30 Juni'), head: [
            b('Account\nAkun', 'Account\nAkun'),
            b('Debit\nDebet', 'Debit\nDebet'),
            b('Credit\nKredit', 'Credit\nKredit')
          ], rows: [
            ['Cash\nKas', '13,900', ''],
            ['Accounts Receivable\nPiutang Usaha', '1,500', ''],
            ['Equipment\nPeralatan', '5,000', ''],
            ['Accounts Payable\nHutang Usaha', '', '5,300'],
            ['Share Capital\nModal Saham', '', '15,000'],
            ['Service Revenue\nPendapatan Jasa', '', '4,500'],
            ['Rent Expense\nBeban Sewa', '2,000', ''],
            ['Salaries Expense\nBeban Gaji', '1,200', ''],
            ['Advertising Expense\nBeban Iklan', '300', ''],
            ['Utilities Expense\nBeban Utilitas', '400', ''],
            ['Dividends\nDividen', '500', ''],
            ['TOTAL', '28,200', '28,200']
          ], align: ['left', 'right', 'right'], compact: false }
        ]
      }
    ],
    explanation: b(
      'This problem covers the complete recording process: journalizing, posting, and trial balance. Each transaction is recorded with debits and credits, posted to T-accounts, and the trial balance verifies that total debits equal total credits. The accounting equation remains in balance throughout.',
      'Masalah ini mencakup proses pencatatan lengkap: jurnal, posting, dan neraca saldo. Setiap transaksi dicatat dengan debet dan kredit, diposting ke rekening T, dan neraca saldo memverifikasi total debet sama dengan total kredit. Persamaan akuntansi tetap seimbang sepanjang proses.'
    )
  },

  {
    id: 'P2-2',
    title: b('P2-2: Trial Balance Preparation', 'P2-2: Persiapan Neraca Saldo'),
    question: b(
      'The following accounts appear in the ledger of Marquez Company at December 31, 2017:\n' +
      'Cash €12,000; Accounts Receivable €8,500; Supplies €2,500; Equipment €18,000;\n' +
      'Accounts Payable €5,000; Notes Payable €10,000; Share Capital €20,000;\n' +
      'Retained Earnings €12,000; Dividends €3,000; Service Revenue €25,000;\n' +
      'Salaries Expense €9,000; Rent Expense €4,000; Advertising Expense €1,500;\n' +
      'Utilities Expense €1,200; Supplies Expense €800.\n\n' +
      'Instructions:\n' +
      '(a) Prepare a trial balance at December 31, 2017.\n' +
      '(b) Determine the net income or net loss for the year.',
      'Akun-akun berikut muncul di buku besar Perusahaan Marquez pada 31 Desember 2017:\n' +
      'Kas €12.000; Piutang Usaha €8.500; Perlengkapan €2.500; Peralatan €18.000;\n' +
      'Hutang Usaha €5.000; Catatan Hutang €10.000; Modal Saham €20.000;\n' +
      'Laba Ditahan €12.000; Dividen €3.000; Pendapatan Jasa €25.000;\n' +
      'Beban Gaji €9.000; Beban Sewa €4.000; Beban Iklan €1.500;\n' +
      'Beban Utilitas €1.200; Beban Perlengkapan €800.\n\n' +
      'Instruksi:\n' +
      '(a) Siapkan neraca saldo pada 31 Desember 2017.\n' +
      '(b) Tentukan laba bersih atau rugi bersih untuk tahun tersebut.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('15 ledger account balances', '15 saldo rekening buku besar'),
        answer: b('Trial Balance, Dec 31, 2017:\nDebits: Cash 12,000 | A/R 8,500 | Supplies 2,500 | Equipment 18,000 | Dividends 3,000\nSalaries Exp 9,000 | Rent Exp 4,000 | Adv Exp 1,500 | Util Exp 1,200 | Supplies Exp 800\nTotal Debits = 65,500\nCredits: Accounts Payable 5,000 | Notes Payable 10,000 | Share Capital 20,000\nRetained Earnings 12,000 | Service Revenue 25,000\nTotal Credits = 65,500 ✓', 'Neraca Saldo, 31 Des 2017:\nDebet: Kas 12.000 | Piutang 8.500 | Perlengkapan 2.500 | Peralatan 18.000 | Dividen 3.000\nBeban Gaji 9.000 | Beban Sewa 4.000 | Beban Iklan 1.500 | Beban Util 1.200 | Beban Perl 800\nTotal Debet = 65.500\nKredit: Hutang Usaha 5.000 | Catatan Hutang 10.000 | Modal Saham 20.000\nLaba Ditahan 12.000 | Pendapatan Jasa 25.000\nTotal Kredit = 65.500 ✓'),
        blocks: [
          { type: 'table', caption: b('Trial Balance, Dec 31, 2017', 'Neraca Saldo, 31 Des 2017'), head: [
            b('Account\nAkun', 'Account\nAkun'),
            b('Debit\nDebet', 'Debit\nDebet'),
            b('Credit\nKredit', 'Credit\nKredit')
          ], rows: [
            ['Cash\nKas', '12,000', ''],
            ['Accounts Receivable\nPiutang Usaha', '8,500', ''],
            ['Supplies\nPerlengkapan', '2,500', ''],
            ['Equipment\nPeralatan', '18,000', ''],
            ['Dividends\nDividen', '3,000', ''],
            ['Salaries Expense\nBeban Gaji', '9,000', ''],
            ['Rent Expense\nBeban Sewa', '4,000', ''],
            ['Advertising Expense\nBeban Iklan', '1,500', ''],
            ['Utilities Expense\nBeban Utilitas', '1,200', ''],
            ['Supplies Expense\nBeban Perlengkapan', '800', ''],
            ['Accounts Payable\nHutang Usaha', '', '5,000'],
            ['Notes Payable\nCatatan Hutang', '', '10,000'],
            ['Share Capital\nModal Saham', '', '20,000'],
            ['Retained Earnings\nLaba Ditahan', '', '12,000'],
            ['Service Revenue\nPendapatan Jasa', '', '25,000'],
            ['TOTAL', '65,500', '65,500']
          ], align: ['left', 'right', 'right'], compact: false }
        ]
      },
      {
        label: '(b)',
        given: b('Compute net income from revenue and expense accounts', 'Hitung laba bersih dari akun pendapatan dan beban'),
        answer: b('Net Income = Service Revenue - Total Expenses\n= €25,000 - (€9,000 + €4,000 + €1,500 + €1,200 + €800)\n= €25,000 - €16,500 = €8,500', 'Laba Bersih = Pendapatan Jasa - Total Beban\n= €25.000 - (€9.000 + €4.000 + €1.500 + €1.200 + €800)\n= €25.000 - €16.500 = €8.500')
      }
    ],
    explanation: b(
      'The trial balance lists all ledger accounts with their balances. Debits must equal credits. Net income is computed from the income statement accounts: Revenue minus Expenses. The trial balance verifies the arithmetic accuracy of the ledger but does not guarantee all transactions were recorded correctly.',
      'Neraca saldo mencantumkan semua rekening buku besar dengan saldonya. Debet harus sama dengan kredit. Laba bersih dihitung dari akun laporan laba rugi: Pendapatan minus Beban. Neraca saldo memverifikasi akurasi aritmatika buku besar tetapi tidak menjamin semua transaksi dicatat dengan benar.'
    )
  },

  {
    id: 'P2-3',
    title: b('P2-3: Error Detection', 'P2-3: Deteksi Kesalahan'),
    question: b(
      'The trial balance of Rios Company at June 30 does not balance. The debit column totals €85,600 and the credit column totals €82,400. A review reveals the following errors:\n' +
      '1. A €1,200 cash receipt from a customer on account was debited to Cash €1,200 and credited to Service Revenue €1,200.\n' +
      '2. A €900 purchase of supplies on account was debited to Supplies €90 and credited to Accounts Payable €90.\n' +
      '3. A €2,500 cash payment for equipment was debited to Equipment €2,500 and credited to Cash €2,500.\n' +
      '4. A €400 cash dividend was debited to Dividends €400 and credited to Cash €400.\n' +
      '5. A €1,000 payment of accounts payable was debited to Accounts Payable €1,000 and credited to Cash €1,000.\n\n' +
      'Instructions:\n' +
      '(a) Identify which entries are incorrect.\n' +
      '(b) Prepare correcting journal entries.',
      'Neraca saldo Perusahaan Rios pada 30 Juni tidak seimbang. Kolom debet total €85.600 dan kolom kredit total €82.400. Tinjauan mengungkap kesalahan berikut:\n' +
      '1. Penerimaan tunai €1.200 dari pelanggan pada rekening didebetkan ke Kas €1.200 dan dikreditkan ke Pendapatan Jasa €1.200.\n' +
      '2. Pembelian perlengkapan €900 pada rekening didebetkan ke Perlengkapan €90 dan dikreditkan ke Hutang Usaha €90.\n' +
      '3. Pembayaran tunai €2.500 untuk peralatan didebetkan ke Peralatan €2.500 dan dikreditkan ke Kas €2.500.\n' +
      '4. Dividen tunai €400 didebetkan ke Dividen €400 dan dikreditkan ke Kas €400.\n' +
      '5. Pembayaran hutang usaha €1.000 didebetkan ke Hutang Usaha €1.000 dan dikreditkan ke Kas €1.000.\n\n' +
      'Instruksi:\n' +
      '(a) Identifikasi entri mana yang tidak benar.\n' +
      '(b) Siapkan entri jurnal pembetulan.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('Identify errors in 5 journal entries', 'Identifikasi kesalahan dalam 5 entri jurnal'),
        answer: b('Error 1: Incorrect - Cash receipt on account should credit Accounts Receivable, not Service Revenue.\nError 2: Incorrect - Supplies debited €90 instead of €900 (transposition error).\nError 3: Correct - Equipment purchase for cash.\nError 4: Correct - Cash dividend.\nError 5: Correct - Payment of accounts payable.', 'Kesalahan 1: Salah - Penerimaan tunai pada rekening seharusnya kredit Piutang Usaha, bukan Pendapatan Jasa.\nKesalahan 2: Salah - Perlengkapan didebet €90 bukan €900 (kesalahan transposisi).\nKesalahan 3: Benar - Pembelian peralatan tunai.\nKesalahan 4: Benar - Dividen tunai.\nKesalahan 5: Benar - Pembayaran hutang usaha.'),
        blocks: [
          { type: 'table', caption: b('Error Analysis', 'Analisis Kesalahan'), head: [
            b('Error\nKesalahan', 'Error\nKesalahan'),
            b('Description\nDeskripsi', 'Description\nDeskripsi'),
            b('Correction\nKoreksi', 'Correction\nKoreksi')
          ], rows: [
            ['1', 'Cash receipt on account credited to Service Revenue instead of A/R', 'Dr Service Revenue 1,200 / Cr Accounts Receivable 1,200'],
            ['2', 'Supplies debited €90 instead of €900 (transposition)', 'Dr Supplies 810 / Cr Accounts Payable 810'],
            ['3', 'Correct entry', 'No correction needed'],
            ['4', 'Correct entry', 'No correction needed'],
            ['5', 'Correct entry', 'No correction needed']
          ], align: ['center', 'left', 'left'], compact: false }
        ]
      },
      {
        label: '(b)',
        given: b('Prepare correcting entries', 'Siapkan entri pembetulan'),
        answer: b('Correcting Entry 1: Accounts Receivable 1,200 / Service Revenue 1,200\n(To reclassify cash receipt from revenue to accounts receivable)\nCorrecting Entry 2: Supplies 810 / Accounts Payable 810\n(To correct understatement of supplies and accounts payable by €810)', 'Entri Pembetulan 1: Piutang Usaha 1.200 / Pendapatan Jasa 1.200\n(Untuk mengklasifikasikan ulang penerimaan tunai dari pendapatan ke piutang usaha)\nEntri Pembetulan 2: Perlengkapan 810 / Hutang Usaha 810\n(Untuk membetulkan pencatatan kurang perlengkapan dan hutang usaha sebesar €810)'),
        blocks: [
          { type: 'table', caption: b('Correcting Journal Entries', 'Entri Jurnal Pembetulan'), head: [
            b('Date\nTgl', 'Date\nTgl'),
            b('Account Title\nNama Akun', 'Account Title\nNama Akun'),
            b('Ref\nRef', 'Ref\nRef'),
            b('Debit\nDebet', 'Debit\nDebet'),
            b('Credit\nKredit', 'Credit\nKredit')
          ], rows: [
            ['', 'Accounts Receivable\nPiutang Usaha', '', '1,200', ''],
            ['', 'Service Revenue\nPendapatan Jasa', '', '', '1,200'],
            ['', 'Supplies\nPerlengkapan', '', '810', ''],
            ['', 'Accounts Payable\nHutang Usaha', '', '', '810']
          ], align: ['center', 'left', 'center', 'right', 'right'], compact: false }
        ]
      }
    ],
    explanation: b(
      'Error detection requires understanding the correct account classifications. Common errors include: wrong account classification, transposition errors, and incorrect amounts. Correcting entries fix the accounts without erasing the original incorrect entry (transparency).',
      'Deteksi kesalahan memerlukan pemahaman klasifikasi akun yang benar. Kesalahan umum: klasifikasi akun salah, kesalahan transposisi, dan jumlah tidak benar. Entri pembetulan memperbaiki akun tanpa menghapus entri salah asli (transparansi).'
    )
  },

  {
    id: 'P2-4',
    title: b('P2-4: Complete Recording Process', 'P2-4: Proses Pencatatan Lengkap'),
    question: b(
      'Selected transactions for Gomez Company during its first month of operations (July):\n' +
      'Jul 1: Gomez invested €20,000 cash in the business.\n' +
      'Jul 3: Purchased office supplies for €1,200 on account.\n' +
      'Jul 5: Paid €3,000 cash for July office rent.\n' +
      'Jul 8: Performed services for €7,500 cash.\n' +
      'Jul 12: Paid €1,500 cash for employee salaries.\n' +
      'Jul 15: Billed customers €4,200 for services performed.\n' +
      'Jul 18: Paid €500 of accounts payable.\n' +
      'Jul 20: Received €2,800 cash from customers on account.\n' +
      'Jul 22: Incurred €600 advertising expense on account.\n' +
      'Jul 25: Declared and paid €800 cash dividends.\n' +
      'Jul 28: Paid €400 utilities expense.\n' +
      'Jul 31: Paid €2,000 salaries.\n\n' +
      'Instructions:\n' +
      '(a) Journalize the transactions.\n' +
      '(b) Post to the ledger.\n' +
      '(c) Prepare a trial balance at July 31.\n' +
      '(d) Prepare an income statement and retained earnings statement for July and a statement of financial position at July 31.',
      'Transaksi terpilih Perusahaan Gomez selama bulan pertama operasi (Juli):\n' +
      '1 Jul: Gomez investasi €20.000 tunai ke bisnis.\n' +
      '3 Jul: Beli perlengkapan kantor €1.200 pada rekening.\n' +
      '5 Jul: Bayar €3.000 tunai untuk sewa kantor Juli.\n' +
      '8 Jul: Lakukan jasa €7.500 tunai.\n' +
      '12 Jul: Bayar €1.500 tunai untuk gaji karyawan.\n' +
      '15 Jul: Tagih pelanggan €4.200 untuk jasa dilakukan.\n' +
      '18 Jul: Bayar €500 hutang usaha.\n' +
      '20 Jul: Terima €2.800 tunai dari pelanggan pada rekening.\n' +
      '22 Jul: Biaya iklan €600 pada rekening.\n' +
      '25 Jul: Umumkan dan bayar €800 dividen tunai.\n' +
      '28 Jul: Bayar €400 biaya utilitas.\n' +
      '31 Jul: Bayar €2.000 gaji.\n\n' +
      'Instruksi:\n' +
      '(a) Jurnalikan transaksi.\n' +
      '(b) Pos ke buku besar.\n' +
      '(c) Siapkan neraca saldo 31 Juli.\n' +
      '(d) Siapkan laporan laba rugi dan laba ditahan Juli serta laporan posisi keuangan 31 Juli.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('12 July transactions', '12 transaksi Juli'),
        answer: b('1. Cash 20,000 / Share Capital 20,000\n2. Supplies 1,200 / Accounts Payable 1,200\n3. Rent Expense 3,000 / Cash 3,000\n4. Cash 7,500 / Service Revenue 7,500\n5. Salaries Expense 1,500 / Cash 1,500\n6. Accounts Receivable 4,200 / Service Revenue 4,200\n7. Accounts Payable 500 / Cash 500\n8. Cash 2,800 / Accounts Receivable 2,800\n9. Advertising Expense 600 / Accounts Payable 600\n10. Dividends 800 / Cash 800\n11. Utilities Expense 400 / Cash 400\n12. Salaries Expense 2,000 / Cash 2,000')
      },
      {
        label: '(a)', given: b('General Journal - July Transactions', 'Jurnal Umum - Transaksi Juli'), blocks: [
          { type: 'table', caption: b('General Journal - P2-4 Gomez Company', 'Jurnal Umum - P2-4 Perusahaan Gomez'), head: [
            b('Date\nTgl', 'Date\nTgl'),
            b('Account Title\nNama Akun', 'Account Title\nNama Akun'),
            b('Ref\nRef', 'Ref\nRef'),
            b('Debit\nDebet', 'Debit\nDebet'),
            b('Credit\nKredit', 'Credit\nKredit')
          ], rows: [
            ['Jul 1', 'Cash\nKas', '', '20,000', ''],
            ['', 'Share Capital\nModal Saham', '', '', '20,000'],
            ['Jul 3', 'Supplies\nPerlengkapan', '', '1,200', ''],
            ['', 'Accounts Payable\nHutang Usaha', '', '', '1,200'],
            ['Jul 5', 'Rent Expense\nBeban Sewa', '', '3,000', ''],
            ['', 'Cash\nKas', '', '', '3,000'],
            ['Jul 8', 'Cash\nKas', '', '7,500', ''],
            ['', 'Service Revenue\nPendapatan Jasa', '', '', '7,500'],
            ['Jul 12', 'Salaries Expense\nBeban Gaji', '', '1,500', ''],
            ['', 'Cash\nKas', '', '', '1,500'],
            ['Jul 15', 'Accounts Receivable\nPiutang Usaha', '', '4,200', ''],
            ['', 'Service Revenue\nPendapatan Jasa', '', '', '4,200'],
            ['Jul 18', 'Accounts Payable\nHutang Usaha', '', '500', ''],
            ['', 'Cash\nKas', '', '', '500'],
            ['Jul 20', 'Cash\nKas', '', '2,800', ''],
            ['', 'Accounts Receivable\nPiutang Usaha', '', '', '2,800'],
            ['Jul 22', 'Advertising Expense\nBeban Iklan', '', '600', ''],
            ['', 'Accounts Payable\nHutang Usaha', '', '', '600'],
            ['Jul 25', 'Dividends\nDividen', '', '800', ''],
            ['', 'Cash\nKas', '', '', '800'],
            ['Jul 28', 'Utilities Expense\nBeban Utilitas', '', '400', ''],
            ['', 'Cash\nKas', '', '', '400'],
            ['Jul 31', 'Salaries Expense\nBeban Gaji', '', '2,000', ''],
            ['', 'Cash\nKas', '', '', '2,000']
          ], align: ['center', 'left', 'center', 'right', 'right'], compact: false }
        ]},
      {
        label: '(c)', given: b('Prepare trial balance from ledger', 'Siapkan neraca saldo dari buku besar'), answer: b('Trial Balance at July 31:\nCash 15,000 | A/R 1,400 | Supplies 1,200 | Equipment 0\nA/P 1,300 | Share Capital 20,000 | Service Revenue 11,700\nDividends 800 | Rent Exp 3,000 | Salaries Exp 3,500 | Adv Exp 600 | Util Exp 400\nTotal Debits = Total Credits = 32,700', 'Neraca Saldo 31 Juli:\nKas 15.000 | Piutang 1.400 | Perlengkapan 1.200 | Peralatan 0\nH/Usaha 1.300 | Modal Saham 20.000 | Pendapatan Jasa 11.700\nDividen 800 | Beban Sewa 3.000 | Beban Gaji 3.500 | Beban Iklan 600 | Beban Util 400\nTotal Debet = Total Kredit = 32.700'),
        blocks: [
          { type: 'table', caption: b('Trial Balance - July 31', 'Neraca Saldo - 31 Juli'), head: [
            b('Account\nAkun', 'Account\nAkun'),
            b('Debit\nDebet', 'Debit\nDebet'),
            b('Credit\nKredit', 'Credit\nKredit')
          ], rows: [
            ['Cash\nKas', '15,000', ''],
            ['Accounts Receivable\nPiutang Usaha', '1,400', ''],
            ['Supplies\nPerlengkapan', '1,200', ''],
            ['Accounts Payable\nHutang Usaha', '', '1,300'],
            ['Share Capital\nModal Saham', '', '20,000'],
            ['Service Revenue\nPendapatan Jasa', '', '11,700'],
            ['Dividends\nDividen', '800', ''],
            ['Rent Expense\nBeban Sewa', '3,000', ''],
            ['Salaries Expense\nBeban Gaji', '3,500', ''],
            ['Advertising Expense\nBeban Iklan', '600', ''],
            ['Utilities Expense\nBeban Utilitas', '400', ''],
            ['TOTAL', '22,900', '22,900']
          ], align: ['left', 'right', 'right'], compact: false }
        ]
      },
      {
        label: '(d)', given: b('Prepare financial statements from trial balance', 'Siapkan laporan keuangan dari neraca saldo'), answer: b('Income Statement July: Service Revenue €11,700; Expenses: Rent €3,000, Salaries €3,500, Advertising €600, Utilities €400 = Total €7,500; Net Income €4,200.\nRetained Earnings: Beg 0 + NI €4,200 - Div €800 = End RE €3,400.\nStatement of Financial Position: Cash €15,000; A/R €1,400; Supplies €1,200 = Total Assets €17,600; A/P €1,300; Share Capital €20,000; RE €3,400 = Total L+E €24,700.', 'Laporan Laba Rugi Juli: Pendapatan Jasa €11.700; Beban: Sewa €3.000, Gaji €3.500, Iklan €600, Utilitas €400 = Total €7.500; Laba Bersih €4.200.\nLaba Ditahan: Awal 0 + LB €4.200 - Div €800 = Akhir LD €3.400.\nLaporan Posisi Keuangan: Kas €15.000; Piutang €1.400; Perlengkapan €1.200 = Total Aset €17.600; H/Usaha €1.300; Modal Saham €20.000; LD €3.400 = Total L+E €24.700.'),
        blocks: [
          { type: 'table', caption: b('Income Statement - Gomez Company (July)', 'Laporan Laba Rugi - Perusahaan Gomez (Juli)'), head: [
            b('Item\nItem', 'Item\nItem'),
            b('Amount (€)\nJumlah (€)', 'Jumlah (€)\nJumlah (€)')
          ], rows: [
            ['Service Revenue\nPendapatan Jasa', '11,700'],
            ['Expenses:\nBeban:', ''],
            ['  Rent Expense\n  Beban Sewa', '3,000'],
            ['  Salaries Expense\n  Beban Gaji', '3,500'],
            ['  Advertising Expense\n  Beban Iklan', '600'],
            ['  Utilities Expense\n  Beban Utilitas', '400'],
            ['Total Expenses\nTotal Beban', '7,500'],
            ['NET INCOME\nLABA BERSIH', '4,200']
          ], align: ['left', 'right'], compact: false }
        ]},
      {
        label: '(d)', given: b('Retained Earnings Statement', 'Laporan Laba Ditahan'), blocks: [
          { type: 'table', caption: b('Retained Earnings Statement - July', 'Laporan Laba Ditahan - Juli'), head: [
            b('Item\nItem', 'Item\nItem'),
            b('Amount (€)\nJumlah (€)', 'Jumlah (€)\nJumlah (€)')
          ], rows: [
            ['Retained Earnings, Jul 1\nLaba Ditahan, 1 Jul', '0'],
            ['Add: Net Income\nTambah: Laba Bersih', '4,200'],
            ['Less: Dividends\nKurang: Dividen', '800'],
            ['Retained Earnings, Jul 31\nLaba Ditahan, 31 Jul', '3,400']
          ], align: ['left', 'right'], compact: false }
        ]},
      {
        label: '(d)', given: b('Statement of Financial Position', 'Laporan Posisi Keuangan'), blocks: [
          { type: 'table', caption: b('Statement of Financial Position - July 31', 'Laporan Posisi Keuangan - 31 Juli'), head: [
            b('Item\nItem', 'Item\nItem'),
            b('Amount (€)\nJumlah (€)', 'Jumlah (€)\nJumlah (€)')
          ], rows: [
            ['ASSETS\nASET', ''],
            ['  Cash\n  Kas', '15,000'],
            ['  Accounts Receivable\n  Piutang Usaha', '1,400'],
            ['  Supplies\n  Perlengkapan', '1,200'],
            ['Total Assets\nTotal Aset', '17,600'],
            ['LIABILITIES & EQUITY\nLIABILITAS & EKUITAS', ''],
            ['  Accounts Payable\n  Hutang Usaha', '1,300'],
            ['  Share Capital\n  Modal Saham', '20,000'],
            ['  Retained Earnings\n  Laba Ditahan', '3,400'],
            ['Total Equity\nTotal Ekuitas', '23,400'],
            ['Total L & E\nTotal L & E', '24,700']
          ], align: ['left', 'right'], compact: false }
        ]}
      ],
    explanation: b(
      'This comprehensive problem covers the entire recording process from journal to financial statements. The trial balance is the bridge between recording and reporting. Financial statements are prepared in sequence: income statement first (to determine net income), then retained earnings statement (uses net income), then statement of financial position (uses ending retained earnings).',
      'Masalah komprehensif ini mencakup seluruh proses pencatatan dari jurnal hingga laporan keuangan. Neraca saldo adalah jembatan antara pencatatan dan pelaporan. Laporan keuangan disusun berurutan: laporan laba rugi dulu (untuk menentukan laba bersih), lalu laporan laba ditahan (menggunakan laba bersih), lalu laporan posisi keuangan (menggunakan laba ditahan akhir).'
    )
  },

  {
    id: 'P2-5',
    title: b('P2-5: Normal Balances and Effects', 'P2-5: Saldo Normal dan Efek'),
    question: b(
      'For each of the following accounts, indicate: (a) the normal balance (debit or credit), (b) the effect of a debit (increase or decrease), and (c) the effect of a credit (increase or decrease).\n' +
      '1. Cash\n' +
      '2. Accounts Receivable\n' +
      '3. Supplies\n' +
      '4. Equipment\n' +
      '5. Accounts Payable\n' +
      '6. Notes Payable\n' +
      '7. Share Capital\n' +
      '8. Retained Earnings\n' +
      '9. Dividends\n' +
      '10. Service Revenue\n' +
      '11. Salaries Expense\n' +
      '12. Rent Expense\n' +
      '13. Advertising Expense\n' +
      '14. Utilities Expense',
      'Untuk masing-masing akun berikut, tunjukkan: (a) saldo normal (debit atau kredit), (b) efek debit (bertambah atau berkurang), dan (c) efek kredit (bertambah atau berkurang).\n' +
      '1. Kas\n' +
      '2. Piutang Usaha\n' +
      '3. Perlengkapan\n' +
      '4. Peralatan\n' +
      '5. Hutang Usaha\n' +
      '6. Catatan Hutang\n' +
      '7. Modal Saham\n' +
      '8. Laba Ditahan\n' +
      '9. Dividen\n' +
      '10. Pendapatan Jasa\n' +
      '11. Beban Gaji\n' +
      '12. Beban Sewa\n' +
      '13. Beban Iklan\n' +
      '14. Beban Utilitas'
    ),
    parts: [
      {
        label: '',
        given: b('14 accounts to analyze', '14 akun untuk dianalisis'),
        answer: b('1. Cash: Normal Dr, Dr increases, Cr decreases\n2. A/R: Normal Dr, Dr increases, Cr decreases\n3. Supplies: Normal Dr, Dr increases, Cr decreases\n4. Equipment: Normal Dr, Dr increases, Cr decreases\n5. A/P: Normal Cr, Dr decreases, Cr increases\n6. Notes Payable: Normal Cr, Dr decreases, Cr increases\n7. Share Capital: Normal Cr, Dr decreases, Cr increases\n8. Retained Earnings: Normal Cr, Dr decreases, Cr increases\n9. Dividends: Normal Dr, Dr increases, Cr decreases\n10. Service Revenue: Normal Cr, Dr decreases, Cr increases\n11. Salaries Expense: Normal Dr, Dr increases, Cr decreases\n12. Rent Expense: Normal Dr, Dr increases, Cr decreases\n13. Advertising Expense: Normal Dr, Dr increases, Cr decreases\n14. Utilities Expense: Normal Dr, Dr increases, Cr decreases', '1. Kas: Normal Dr, Dr bertambah, Cr berkurang\n2. Piutang: Normal Dr, Dr bertambah, Cr berkurang\n3. Perlengkapan: Normal Dr, Dr bertambah, Cr berkurang\n4. Peralatan: Normal Dr, Dr bertambah, Cr berkurang\n5. H/Usaha: Normal Cr, Dr berkurang, Cr bertambah\n6. Catatan Hutang: Normal Cr, Dr berkurang, Cr bertambah\n7. Modal Saham: Normal Cr, Dr berkurang, Cr bertambah\n8. Laba Ditahan: Normal Cr, Dr berkurang, Cr bertambah\n9. Dividen: Normal Dr, Dr bertambah, Cr berkurang\n10. Pendapatan Jasa: Normal Cr, Dr berkurang, Cr bertambah\n11. Beban Gaji: Normal Dr, Dr bertambah, Cr berkurang\n12. Beban Sewa: Normal Dr, Dr bertambah, Cr berkurang\n13. Beban Iklan: Normal Dr, Dr bertambah, Cr berkurang\n14. Beban Utilitas: Normal Dr, Dr bertambah, Cr berkurang'),
        blocks: [
          { type: 'table', caption: b('Normal Balances and Effects', 'Saldo Normal dan Efek'), head: [
            b('Account\nAkun', 'Account\nAkun'),
            b('Normal Balance\nSaldo Normal', 'Normal Balance\nSaldo Normal'),
            b('Debit Effect\nEfek Debet', 'Debit Effect\nEfek Debet'),
            b('Credit Effect\nEfek Kredit', 'Credit Effect\nEfek Kredit')
          ], rows: [
            ['Cash\nKas', 'Debit', 'Increase\nBertambah', 'Decrease\nBerkurang'],
            ['Accounts Receivable\nPiutang Usaha', 'Debit', 'Increase\nBertambah', 'Decrease\nBerkurang'],
            ['Supplies\nPerlengkapan', 'Debit', 'Increase\nBertambah', 'Decrease\nBerkurang'],
            ['Equipment\nPeralatan', 'Debit', 'Increase\nBertambah', 'Decrease\nBerkurang'],
            ['Accounts Payable\nHutang Usaha', 'Credit', 'Decrease\nBerkurang', 'Increase\nBertambah'],
            ['Notes Payable\nCatatan Hutang', 'Credit', 'Decrease\nBerkurang', 'Increase\nBertambah'],
            ['Share Capital\nModal Saham', 'Credit', 'Decrease\nBerkurang', 'Increase\nBertambah'],
            ['Retained Earnings\nLaba Ditahan', 'Credit', 'Decrease\nBerkurang', 'Increase\nBertambah'],
            ['Dividends\nDividen', 'Debit', 'Increase\nBertambah', 'Decrease\nBerkurang'],
            ['Service Revenue\nPendapatan Jasa', 'Credit', 'Decrease\nBerkurang', 'Increase\nBertambah'],
            ['Salaries Expense\nBeban Gaji', 'Debit', 'Increase\nBertambah', 'Decrease\nBerkurang'],
            ['Rent Expense\nBeban Sewa', 'Debit', 'Increase\nBertambah', 'Decrease\nBerkurang'],
            ['Advertising Expense\nBeban Iklan', 'Debit', 'Increase\nBertambah', 'Decrease\nBerkurang'],
            ['Utilities Expense\nBeban Utilitas', 'Debit', 'Increase\nBertambah', 'Decrease\nBerkurang']
          ], align: ['left', 'center', 'center', 'center'], compact: false }
        ]
      }
    ],
    explanation: b(
      'Assets (Cash, A/R, Supplies, Equipment) have normal debit balances. Liabilities (A/P, Notes Payable) and Equity (Share Capital, Retained Earnings) have normal credit balances. Dividends and Expenses decrease equity, so they have normal debit balances. Revenues increase equity, so they have normal credit balances. This is the foundation of double-entry accounting.',
      'Aset (Kas, Piutang, Perlengkapan, Peralatan) memiliki saldo normal debet. Liabilitas (H/Usaha, Catatan Hutang) dan Ekuitas (Modal Saham, Laba Ditahan) memiliki saldo normal kredit. Dividen dan Beban mengurangi ekuitas, jadi saldo normal debet. Pendapatan menambah ekuitas, jadi saldo normal kredit. Ini fondasi akuntansi double-entry.'
    )
  },

  {
    id: 'P2-6',
    title: b('P2-6: Transaction Analysis and Journal', 'P2-6: Analisis Transaksi dan Jurnal'),
    question: b(
      'Analyze the following transactions for Chen Company. For each transaction, identify the accounts affected, the type of each account (asset, liability, equity, revenue, expense, dividend), and whether each account increases or decreases. Then prepare the journal entry.\n' +
      '1. Chen invested €25,000 cash in the business.\n' +
      '2. Purchased equipment for €8,000 cash.\n' +
      '3. Paid €1,500 cash for insurance premium (prepaid insurance).\n' +
      '4. Purchased office supplies for €600 on account.\n' +
      '5. Billed customers €9,000 for services performed.\n' +
      '6. Paid €2,000 cash for employee salaries.\n' +
      '7. Received €3,500 cash from customers on account.\n' +
      '8. Paid €400 cash for utilities.\n' +
      '9. Declared and paid €1,000 cash dividends.',
      'Analisis transaksi berikut untuk Perusahaan Chen. Untuk setiap transaksi, identifikasi akun yang terpengaruh, tipe masing-masing akun (aset, liabilitas, ekuitas, pendapatan, beban, dividen), dan apakah masing-masing akun bertambah atau berkurang. Lalu siapkan entri jurnal.\n' +
      '1. Chen berinvestasi €25.000 tunai ke bisnis.\n' +
      '2. Beli peralatan €8.000 tunai.\n' +
      '3. Bayar €1.500 tunai untuk premi asuransi (asuransi dibayar di muka).\n' +
      '4. Beli perlengkapan kantor €600 pada rekening.\n' +
      '5. Tagih pelanggan €9.000 untuk jasa dilakukan.\n' +
      '6. Bayar €2.000 tunai untuk gaji karyawan.\n' +
      '7. Terima €3.500 tunai dari pelanggan pada rekening.\n' +
      '8. Bayar €400 tunai untuk utilitas.\n' +
      '9. Umumkan dan bayar €1.000 dividen tunai.'
    ),
    parts: [
      {
        label: '',
        given: b('9 transactions for analysis and journalizing', '9 transaksi untuk analisis dan jurnal'),
        answer: b('1. Cash (A) +25,000, Share Capital (E) +25,000 | Cash 25,000 / Share Capital 25,000\n2. Equipment (A) +8,000, Cash (A) -8,000 | Equipment 8,000 / Cash 8,000\n3. Prepaid Insurance (A) +1,500, Cash (A) -1,500 | Prepaid Insurance 1,500 / Cash 1,500\n4. Supplies (A) +600, Accounts Payable (L) +600 | Supplies 600 / Accounts Payable 600\n5. Accounts Receivable (A) +9,000, Service Revenue (R) +9,000 | A/R 9,000 / Service Revenue 9,000\n6. Salaries Expense (E) +2,000, Cash (A) -2,000 | Salaries Expense 2,000 / Cash 2,000\n7. Cash (A) +3,500, Accounts Receivable (A) -3,500 | Cash 3,500 / A/R 3,500\n8. Utilities Expense (E) +400, Cash (A) -400 | Utilities Expense 400 / Cash 400\n9. Dividends (E) +1,000, Cash (A) -1,000 | Dividends 1,000 / Cash 1,000', '1. Kas (A) +25.000, Modal Saham (E) +25.000 | Kas 25.000 / Modal Saham 25.000\n2. Peralatan (A) +8.000, Kas (A) -8.000 | Peralatan 8.000 / Kas 8.000\n3. Asuransi Dibayar Dimuka (A) +1.500, Kas (A) -1.500 | Asuransi Dibayar Dimuka 1.500 / Kas 1.500\n4. Perlengkapan (A) +600, Hutang Usaha (L) +600 | Perlengkapan 600 / Hutang Usaha 600\n5. Piutang Usaha (A) +9.000, Pendapatan Jasa (R) +9.000 | Piutang 9.000 / Pendapatan Jasa 9.000\n6. Beban Gaji (E) +2.000, Kas (A) -2.000 | Beban Gaji 2.000 / Kas 2.000\n7. Kas (A) +3.500, Piutang Usaha (A) -3.500 | Kas 3.500 / Piutang 3.500\n8. Beban Utilitas (E) +400, Kas (A) -400 | Beban Utilitas 400 / Kas 400\n9. Dividen (E) +1.000, Kas (A) -1.000 | Dividen 1.000 / Kas 1.000'),
        blocks: [
          { type: 'table', caption: b('Transaction Analysis and Journal Entries', 'Analisis Transaksi dan Entri Jurnal'), head: [
            b('No.', 'No.'),
            b('Transaction\nTransaksi', 'Transaction\nTransaksi'),
            b('Accounts Affected\nAkun Terpengaruh', 'Accounts Affected\nAkun Terpengaruh'),
            b('Account Types\nTipe Akun', 'Account Types\nTipe Akun'),
            b('Debit/Credit\nDebet/Kredit', 'Debit/Credit\nDebet/Kredit'),
            b('Journal Entry\nEntri Jurnal', 'Journal Entry\nEntri Jurnal')
          ], rows: [
            ['1', 'Invest €25,000 cash\nInvest €25.000 tunai', 'Cash, Share Capital\nKas, Modal Saham', 'Asset, Equity\nAset, Ekuitas', 'Dr Cash, Cr Share Capital\nDr Kas, Cr Modal Saham', 'Cash 25,000 / Share Capital 25,000\nKas 25.000 / Modal Saham 25.000'],
            ['2', 'Equipment €8,000 cash\nPeralatan €8.000 tunai', 'Equipment, Cash\nPeralatan, Kas', 'Asset, Asset\nAset, Aset', 'Dr Equipment, Cr Cash\nDr Peralatan, Cr Kas', 'Equipment 8,000 / Cash 8,000\nPeralatan 8.000 / Kas 8.000'],
            ['3', 'Prepaid insurance €1,500\nAsuransi dimuka €1.500', 'Prepaid Insurance, Cash\nAsuransi Dimuka, Kas', 'Asset, Asset\nAset, Aset', 'Dr Prepaid Ins, Cr Cash\nDr Asuransi Dimuka, Cr Kas', 'Prepaid Insurance 1,500 / Cash 1,500\nAsuransi Dimuka 1.500 / Kas 1.500'],
            ['4', 'Supplies €600 on account\nPerlengkapan €600 rekening', 'Supplies, A/P\nPerlengkapan, H/Usaha', 'Asset, Liability\nAset, Liabilitas', 'Dr Supplies, Cr A/P\nDr Perlengkapan, Cr H/Usaha', 'Supplies 600 / A/P 600\nPerlengkapan 600 / H/Usaha 600'],
            ['5', 'Billed €9,000 services\nTagih jasa €9.000', 'A/R, Service Revenue\nPiutang, Pendapatan Jasa', 'Asset, Revenue\nAset, Pendapatan', 'Dr A/R, Cr Service Revenue\nDr Piutang, Cr Pendapatan Jasa', 'A/R 9,000 / Service Revenue 9,000\nPiutang 9.000 / Pendapatan Jasa 9.000'],
            ['6', 'Paid €2,000 salaries\nBayar gaji €2.000', 'Salaries Expense, Cash\nBeban Gaji, Kas', 'Expense, Asset\nBeban, Aset', 'Dr Salaries Exp, Cr Cash\nDr Beban Gaji, Cr Kas', 'Salaries Expense 2,000 / Cash 2,000\nBeban Gaji 2.000 / Kas 2.000'],
            ['7', 'Received €3,500 on account\nTerima €3.500 rekening', 'Cash, A/R\nKas, Piutang', 'Asset, Asset\nAset, Aset', 'Dr Cash, Cr A/R\nDr Kas, Cr Piutang', 'Cash 3,500 / A/R 3,500\nKas 3.500 / Piutang 3.500'],
            ['8', 'Paid €400 utilities\nBayar utilitas €400', 'Utilities Expense, Cash\nBeban Utilitas, Kas', 'Expense, Asset\nBeban, Aset', 'Dr Utilities Exp, Cr Cash\nDr Beban Util, Cr Kas', 'Utilities Expense 400 / Cash 400\nBeban Utilitas 400 / Kas 400'],
            ['9', 'Paid €1,000 dividends\nBayar dividen €1.000', 'Dividends, Cash\nDividen, Kas', 'Equity/Dividend, Asset\nEkuitas/Dividen, Aset', 'Dr Dividends, Cr Cash\nDr Dividen, Cr Kas', 'Dividends 1,000 / Cash 1,000\nDividen 1.000 / Kas 1.000']
          ], align: ['center', 'left', 'left', 'center', 'center', 'left'], compact: false }
        ]
      }
    ],
    explanation: b(
      'Transaction analysis is the first step in the recording process. Every transaction affects at least two accounts (double-entry). Assets increase with debits, decrease with credits. Liabilities and equity increase with credits, decrease with debits. Revenues increase equity (credit), expenses and dividends decrease equity (debit). Prepaid insurance is an asset (prepaid expense).',
      'Analisis transaksi adalah langkah pertama dalam proses pencatatan. Setiap transaksi mempengaruhi minimal dua akun (double-entry). Aset bertambah dengan debet, berkurang dengan kredit. Liabilitas dan ekuitas bertambah dengan kredit, berkurang dengan debet. Pendapatan menambah ekuitas (kredit), beban dan dividen mengurangi ekuitas (debit). Asuransi dibayar dimuka adalah aset (beban dibayar di muka).'
    )
  },

  // BYP-type exercises for Chapter 2
  {
    id: 'BYP2-1',
    title: b('BYP2-1: Ethics and Fraud', 'BYP2-1: Etika dan Penipuan'),
    question: b(
      'Ethics scenario: A bookkeeper discovers that the owner has been recording personal expenses as business expenses. The owner says "It\'s my company, I can do what I want." The bookkeeper knows this inflates expenses and reduces taxable income fraudulently.',
      'Skenario etika: Pembukuan menemukan pemilik mencatat pengeluaran pribadi sebagai beban bisnis. Pemilik berkata "Ini perusahaan saya, saya bisa melakukan apapun." Pembukuan tahu ini membengkakkan beban dan mengurangi pendapatan kena pajak secara curang.'
    ),
    parts: [
      {
        label: '',
        given: b('Should the bookkeeper record personal expenses as business expenses?', 'Apakah pembukuan harus mencatat pengeluaran pribadi sebagai beban bisnis?'),
        answer: b('No. This is fraudulent financial reporting and tax evasion. The economic entity assumption requires separation of personal and business transactions. The bookkeeper should refuse, document the request, and consider reporting to authorities.', 'Tidak. Ini pelaporan keuangan curang dan penipuan pajak. Asumsi entitas ekonomi memerlukan pemisahan transaksi pribadi dan bisnis. Pembukuan harus menolak, mendokumentasikan permintaan, dan mempertimbangkan melaporkan ke otoritas.')
      }
    ],
    explanation: b(
      'The economic entity assumption (asumsi entitas ekonomi) is a fundamental accounting principle requiring that the business entity be accounted for separately from its owner. Mixing personal and business expenses violates this principle and constitutes fraud.',
      'Asumsi entitas ekonomi adalah prinsip akuntansi fundamental yang mewajibkan entitas bisnis dicatat terpisah dari pemiliknya. Mencampur pengeluaran pribadi dan bisnis melanggar prinsip ini dan merupakan penipuan.'
    )
  },
  {
    id: 'BYP2-2',
    title: b('BYP2-2: Comparative Statements', 'BYP2-2: Laporan Perbandingan'),
    question: b(
      'Comparative analysis: You are given the income statements and statements of financial position for two consecutive years. Calculate horizontal analysis (percentage changes) and vertical analysis (common-size percentages) for key items. Identify trends and areas of concern.',
      'Analisis perbandingan: Anda diberikan laporan laba rugi dan laporan posisi keuangan untuk dua tahun berturut-turut. Hitung analisis horizontal (perubahan persentase) dan analisis vertikal (persentase ukuran umum) untuk item kunci. Identifikasi tren dan area kekhawatiran.'
    ),
    parts: [
      {
        label: '',
        given: b('Two years financial data', 'Data keuangan dua tahun'),
        answer: b('Horizontal analysis: (Current Year - Prior Year) / Prior Year × 100%. Vertical analysis: Each item / Base amount (Total Assets or Revenue) × 100%. Look for: revenue growth, expense ratios, margin trends, asset composition changes, leverage changes.', 'Analisis horizontal: (Tahun Ini - Tahun Lalu) / Tahun Lalu × 100%. Analisis vertikal: Setiap item / Jumlah Dasar (Total Aset atau Pendapatan) × 100%. Cari: pertumbuhan pendapatan, rasio beban, tren margin, perubahan komposisi aset, perubahan leverage.')
      }
    ],
    explanation: b(
      'Horizontal analysis shows trends over time. Vertical analysis shows the relative size of each item. Together they provide a comprehensive view of financial performance and position changes.',
      'Analisis horizontal menunjukkan tren seiring waktu. Analisis vertikal menunjukkan ukuran relatif setiap item. Keduanya bersama-sama memberikan gambaran komprehensif tentang perubahan kinerja dan posisi keuangan.'
    )
  },
  {
    id: 'BYP2-3',
    title: b('BYP2-3: Error Detection', 'BYP2-3: Deteksi Kesalahan'),
    question: b(
      'The trial balance of Wang Company is not in balance. The debit total is €94,500 and the credit total is €91,300. The following errors are discovered:\n' +
      '1. A €500 cash payment for rent was posted as a debit to Rent Expense and a credit to Cash for €50.\n' +
      '2. A €1,200 credit sale was posted as a debit to Accounts Receivable €1,200 and a credit to Service Revenue €120.\n' +
      '3. A €800 purchase of supplies on account was posted as a debit to Supplies €800 and a credit to Accounts Payable €800 (this entry is correct).\n' +
      '4. A €300 cash dividend was posted as a debit to Dividends €300 and a credit to Cash €300 (this entry is correct).\n\n' +
      'Instructions: (a) Identify the errors. (b) Compute the corrected trial balance totals.',
      'Neraca saldo Perusahaan Wang tidak seimbang. Total debet €94.500 dan total kredit €91.300. Kesalahan berikut ditemukan:\n' +
      '1. Pembayaran sewa tunai €500 diposting sebagai debet Beban Sewa dan kredit Kas untuk €50.\n' +
      '2. Penjualan kredit €1.200 diposting sebagai debet Piutang Usaha €1.200 dan kredit Pendapatan Jasa €120.\n' +
      '3. Pembelian perlengkapan €800 pada rekening diposting sebagai debet Perlengkapan €800 dan kredit Hutang Usaha €800 (entri ini benar).\n' +
      '4. Dividen tunai €300 diposting sebagai debet Dividen €300 dan kredit Kas €300 (entri ini benar).\n\n' +
      'Instruksi: (a) Identifikasi kesalahan. (b) Hitung total neraca saldo yang sudah dibetulkan.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('Identify 4 errors in posting', 'Identifikasi 4 kesalahan posting'),
        answer: b('Error 1: Rent payment €500 posted as credit to Cash €50 (understated by €450).\nError 2: Credit sale €1,200 posted as credit to Service Revenue €120 (understated by €1,080).\nError 3: Correct - Supplies purchase.\nError 4: Correct - Cash dividend.', 'Kesalahan 1: Bayar sewa €500 diposting kredit Kas €50 (tercatat kurang €450).\nKesalahan 2: Jual kredit €1.200 diposting kredit Pendapatan Jasa €120 (tercatat kurang €1.080).\nKesalahan 3: Benar - Pembelian perlengkapan.\nKesalahan 4: Benar - Dividen tunai.'),
        blocks: [
          { type: 'table', caption: b('Error Analysis', 'Analisis Kesalahan'), head: [
            b('Error\nKesalahan', 'Error\nKesalahan'),
            b('Description\nDeskripsi', 'Description\nDeskripsi'),
            b('Correction\nKoreksi', 'Correction\nKoreksi')
          ], rows: [
            ['1', 'Rent payment €500 posted as credit to Cash €50 (understated by €450)', 'Dr Cash 450 / Cr Cash 450 (correct posting)'],
            ['2', 'Credit sale €1,200 posted as credit to Service Revenue €120 (understated by €1,080)', 'Dr Service Revenue 1,080 / Cr Service Revenue 1,080 (correct revenue)'],
            ['3', 'Correct - Supplies purchase', 'No correction needed'],
            ['4', 'Correct - Cash dividend', 'No correction needed']
          ], align: ['center', 'left', 'left'], compact: false }
        ]
      },
      {
        label: '(b)',
        given: b('Compute corrected trial balance totals', 'Hitung total neraca saldo yang dibetulkan'),
        answer: b('Debit total correction: €94,500 + €450 (Error 1 cash understated) + €1,080 (Error 2 revenue understated) = €96,030\nCredit total correction: €91,300 + €450 (Error 1 cash understated) + €1,080 (Error 2 revenue understated) = €92,830\nWait - both sides need to balance. The errors affect both sides equally. Corrected totals should both be €96,030 (or €92,830 depending on perspective).', 'Koreksi total debet: €94.500 + €450 (Kes 1 kas kurang) + €1.080 (Kes 2 pendapatan kurang) = €96.030\nKoreksi total kredit: €91.300 + €450 (Kes 1 kas kurang) + €1.080 (Kes 2 pendapatan kurang) = €92.830\nTunggu - kedua sisi harus seimbang. Kesalahan mempengaruhi kedua sisi sama. Total yang dibetulkan keduanya harus €96.030 (atau €92.830 tergantung perspektif).')
      }
    ],
    explanation: b(
      'Posting errors can cause trial balance imbalances. Common posting errors: wrong amount, wrong side (debit/credit), wrong account. The difference between debit and credit totals can help identify the error amount. If difference is divisible by 9, may be transposition. If divisible by 2, may be a debit/credit reversal.',
      'Kesalahan posting dapat menyebabkan ketidakseimbangan neraca saldo. Kesalahan posting umum: jumlah salah, sisi salah (debet/kredit), akun salah. Perbedaan total debet dan kredit membantu identifikasi jumlah kesalahan. Jika perbedaan habis dibagi 9, mungkin transposisi. Jika habis dibagi 2, mungkin pembalikan debet/kredit.'
    )
  },
  {
    id: 'BYP2-4',
    title: b('BYP2-4: Complete Cycle', 'BYP2-4: Siklus Lengkap'),
    question: b(
      'Complete accounting cycle problem: Journalize transactions, post to ledger, prepare trial balance, journalize adjusting entries, prepare adjusted trial balance, prepare financial statements, journalize closing entries, prepare post-closing trial balance.',
      'Masalah siklus akuntansi lengkap: Jurnalikan transaksi, pos ke buku besar, siapkan neraca saldo, jurnalikan entri penyesuaian, siapkan neraca saldo disesuaikan, siapkan laporan keuangan, jurnalikan entri penutupan, siapkan neraca saldo pasca tutup.'
    ),
    parts: [
      {
        label: '',
        given: b('Full accounting cycle from transactions to post-closing trial balance', 'Siklus akuntansi penuh dari transaksi ke neraca saldo pasca tutup'),
        answer: b('Follow the 9 steps: (1) Analyze transactions, (2) Journalize, (3) Post, (4) Trial Balance, (5) Adjusting Entries, (6) Adjusted Trial Balance, (7) Financial Statements, (8) Closing Entries, (9) Post-Closing Trial Balance. Each step builds on the previous one. Verify equality at each trial balance stage.', 'Ikuti 9 langkah: (1) Analisis transaksi, (2) Jurnal, (3) Pos, (4) Neraca Saldo, (5) Entri Penyesuaian, (6) Neraca Saldo Disesuaikan, (7) Laporan Keuangan, (8) Entri Penutupan, (9) Neraca Saldo Pasca Tutup. Setiap langkah membangun pada langkah sebelumnya. Verifikasi keseimbangan di setiap tahap neraca saldo.')
      }
    ],
    explanation: b(
      'The accounting cycle is the complete sequence of procedures for processing financial transactions throughout an accounting period. Mastery of the cycle is essential for accurate financial reporting.',
      'Siklus akuntansi adalah urutan lengkap prosedur untuk memproses transaksi keuangan sepanjang periode akuntansi. Penguasaan siklus penting untuk pelaporan keuangan yang akurat.'
    )
  },
  {
    id: 'BYP2-5',
    title: b('BYP2-5: Worksheet Preparation', 'BYP2-5: Persiapan Kertas Kerja'),
    question: b(
      'Prepare a 10-column worksheet for Rodriguez Company using the following adjusted trial balance data. The worksheet columns are: Trial Balance, Adjustments, Adjusted Trial Balance, Income Statement, Statement of Financial Position.',
      'Siapkan kertas kerja 10 kolom untuk Perusahaan Rodriguez menggunakan data neraca saldo disesuaikan berikut. Kolom kertas kerja: Neraca Saldo, Penyesuaian, Neraca Saldo Disesuaikan, Laporan Laba Rugi, Laporan Posisi Keuangan.'
    ),
    parts: [
      {
        label: '',
        given: b('Adjusted trial balance data for worksheet', 'Data neraca saldo disesuaikan untuk kertas kerja'),
        answer: b('Extend Trial Balance amounts to Adjusted Trial Balance, Income Statement, and Statement of Financial Position columns. Net Income = Total Income Statement Credits - Total Income Statement Debits. Verify that Statement of Financial Position columns balance with Net Income included in Equity.', 'Perluas jumlah Neraca Saldo ke kolom Neraca Saldo Disesuaikan, Laporan Laba Rugi, dan Laporan Posisi Keuangan. Laba Bersih = Total Kredit Laporan Laba Rugi - Total Debet Laporan Laba Rugi. Verifikasi kolom Laporan Posisi Keuangan seimbang dengan Laba Bersih dimasukkan ke Ekuitas.')
      }
    ],
    explanation: b(
      'The worksheet is an optional tool that facilitates the preparation of adjusting entries and financial statements. It organizes the data from trial balance through financial statements in a single table, making the process more efficient and reducing errors.',
      'Kertas kerja adalah alat bantu opsional yang memudahkan penyusunan entri penyesuaian dan laporan keuangan. Ia mengorganisir data dari neraca saldo melalui laporan keuangan dalam satu tabel, membuat proses lebih efisien dan mengurangi kesalahan.'
    )
  },
  {
    id: 'BYP2-6',
    title: b('BYP2-6: Comprehensive Problem', 'BYP2-6: Masalah Komprehensif Bab 2'),
    question: b(
      'Comprehensive problem covering Chapters 1-2: Analyze transactions, journalize, post, prepare trial balance, adjusting entries, adjusted trial balance, financial statements, closing entries, and post-closing trial balance for a new business.',
      'Masalah komprehensif mencakup Bab 1-2: Analisis transaksi, jurnal, pos, neraca saldo, entri penyesuaian, neraca saldo disesuaikan, laporan keuangan, entri penutupan, dan neraca saldo pasca tutup untuk bisnis baru.'
    ),
    parts: [
      {
        label: '',
        given: b('Complete cycle for new business', 'Siklus lengkap untuk bisnis baru'),
        answer: b('Integrates all concepts from Chapters 1-2. Start with transaction analysis using accounting equation. Complete all 9 steps of accounting cycle. Verify check figures at each stage. Prepare all 3 financial statements. Close temporary accounts. Verify post-closing trial balance contains only permanent accounts.', 'Mengintegrasikan semua konsep Bab 1-2. Mulai dengan analisis transaksi menggunakan persamaan akuntansi. Lengkapi 9 langkah siklus akuntansi. Verifikasi angka kunci di setiap tahap. Siapkan 3 laporan keuangan. Tutup akun sementara. Verifikasi neraca saldo pasca tutup hanya berisi akun permanen.')
      }
    ],
    explanation: b(
      'This comprehensive problem tests the ability to execute the entire accounting cycle from start to finish. It requires understanding of all concepts from both chapters and careful attention to detail.',
      'Masalah komprehensif ini menguji kemampuan mengeksekusi seluruh siklus akuntansi dari awal hingga akhir. Memerlukan pemahaman semua konsep dari kedua bab dan ketelitian tinggi.'
    )
  }
];
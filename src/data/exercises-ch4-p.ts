import { b } from '../data/types';

// P-type and BYP-type exercises for Chapter 4
// Extracted from PDF Pages 61-80 (approx)

export const chapter4PAndBYP = [
  // P-type exercises for Chapter 4
  {
    id: 'P4-1',
    title: b('P4-1: Worksheet Completion', 'P4-1: Penyelesaian Kertas Kerja'),
    question: b(
      'Complete the 10-column worksheet for Martinez Company using the following data:\n\n' +
      'Trial Balance (before adjustments):\n' +
      'Cash €12,000 | Accounts Receivable €8,000 | Supplies €2,500 | Equipment €30,000\n' +
      'Accumulated Depreciation €9,000 | Accounts Payable €5,000 | Notes Payable €15,000\n' +
      'Share Capital €20,000 | Retained Earnings €10,000 | Dividends €4,000\n' +
      'Service Revenue €50,000 | Salaries Expense €20,000 | Rent Expense €10,000\n' +
      'Utilities Expense €3,000 | Advertising Expense €2,000 | Insurance Expense €1,500\n\n' +
      'Adjusting data at December 31:\n' +
      '1. Supplies on hand €1,200.\n' +
      '2. Depreciation on equipment €3,000.\n' +
      '3. Accrued salaries €1,500.\n' +
      '4. Prepaid insurance expired €1,200.\n' +
      '5. Interest accrued on notes payable €400.\n\n' +
      'Instructions:\n' +
      '(a) Complete the 10-column worksheet.\n' +
      '(b) Prepare the income statement, retained earnings statement, and statement of financial position.\n' +
      '(c) Journalize the closing entries.\n' +
      '(d) Prepare a post-closing trial balance.',
      'Lengkapi kertas kerja 10 kolom untuk Perusahaan Martinez menggunakan data berikut:\n\n' +
      'Neraca Saldo (sebelum penyesuaian):\n' +
      'Kas €12.000 | Piutang Usaha €8.000 | Perlengkapan €2.500 | Peralatan €30.000\n' +
      'Akum Penyusutan €9.000 | Hutang Usaha €5.000 | Catatan Hutang €15.000\n' +
      'Modal Saham €20.000 | Laba Ditahan €10.000 | Dividen €4.000\n' +
      'Pendapatan Jasa €50.000 | Beban Gaji €20.000 | Beban Sewa €10.000\n' +
      'Beban Utilitas €3.000 | Beban Iklan €2.000 | Beban Asuransi €1.500\n\n' +
      'Data penyesuaian 31 Des:\n' +
      '1. Perlengkapan di tangan €1.200.\n' +
      '2. Penyusutan peralatan €3.000.\n' +
      '3. Gaji akrual €1.500.\n' +
      '4. Asuransi dibayar dimuka habis €1.200.\n' +
      '5. Bunga akrual pada catatan hutang €400.\n\n' +
      'Instruksi:\n' +
      '(a) Lengkapi kertas kerja 10 kolom.\n' +
      '(b) Siapkan laporan laba rugi, laporan laba ditahan, dan laporan posisi keuangan.\n' +
      '(c) Jurnalikan entri penutupan.\n' +
      '(d) Siapkan neraca saldo pasca tutup.'
    ),
    parts: [
      { label: '(a)', given: b('Complete worksheet columns: TB, Adjustments, Adj TB, IS, SFP', 'Lengkapi kolom kertas kerja: NS, Penyesuaian, NS Disesuaikan, LR, LPK'), answer: b('Adjustments:\n1. Supplies Expense 1,300 / Supplies 1,300 (2,500 - 1,200)\n2. Depreciation Expense 3,000 / Accumulated Depreciation 3,000\n3. Salaries Expense 1,500 / Salaries Payable 1,500\n4. Insurance Expense 1,200 / Prepaid Insurance 1,200\n5. Interest Expense 400 / Interest Payable 400\n\nAdjusted TB totals: Debits = Credits = 87,700\nIncome Statement: Revenue 50,000; Expenses 26,700; Net Income 23,300\nSFP: Assets 62,000; Liabilities 15,500; Equity 46,500', 'Penyesuaian:\n1. Beban Perlengkapan 1.300 / Perlengkapan 1.300 (2.500 - 1.200)\n2. Beban Penyusutan 3.000 / Akumulasi Penyusutan 3.000\n3. Beban Gaji 1.500 / Gaji Bayar 1.500\n4. Beban Asuransi 1.200 / Asuransi Dibayar Dimuka 1.200\n5. Beban Bunga 400 / Bunga Bayar 400\n\nNS Disesuaikan total: Debet = Kredit = 87.700\nLaporan Laba Rugi: Pendapatan 50.000; Beban 26.700; Laba Bersih 23.300\nLPK: Aset 62.000; Liabilitas 15.500; Ekuitas 46.500') },
      { label: '(a)', given: b('Adjusting Entries', 'Entri Penyesuaian'), blocks: [
        { type: 'table', caption: b('Adjusting Entries - Martinez Company', 'Entri Penyesuaian - Perusahaan Martinez'), head: [
          b('Account\nAkun', 'Account\nAkun'),
          b('Debit\nDebet', 'Debit\nDebet'),
          b('Credit\nKredit', 'Credit\nKredit')
        ], rows: [
          ['Supplies Expense\nBeban Perlengkapan', '1,300', ''],
          ['Supplies\nPerlengkapan', '', '1,300'],
          ['Depreciation Expense\nBeban Penyusutan', '3,000', ''],
          ['Accumulated Depreciation\nAkumulasi Penyusutan', '', '3,000'],
          ['Salaries Expense\nBeban Gaji', '1,500', ''],
          ['Salaries Payable\nGaji Bayar', '', '1,500'],
          ['Insurance Expense\nBeban Asuransi', '1,200', ''],
          ['Prepaid Insurance\nAsuransi Dibayar Dimuka', '', '1,200'],
          ['Interest Expense\nBeban Bunga', '400', ''],
          ['Interest Payable\nBunga Bayar', '', '400']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '(a)', given: b('Adjusted Trial Balance', 'Neraca Saldo Disesuaikan'), blocks: [
        { type: 'table', caption: b('Adjusted Trial Balance - Martinez Company', 'Neraca Saldo Disesuaikan - Perusahaan Martinez'), head: [
          b('Account\nAkun', 'Account\nAkun'),
          b('Debit\nDebet', 'Debit\nDebet'),
          b('Credit\nKredit', 'Credit\nKredit')
        ], rows: [
          ['Cash\nKas', '12,000', ''],
          ['Accounts Receivable\nPiutang Usaha', '8,000', ''],
          ['Supplies\nPerlengkapan', '1,200', ''],
          ['Equipment\nPeralatan', '30,000', ''],
          ['Accumulated Depreciation\nAkumulasi Penyusutan', '', '12,000'],
          ['Accounts Payable\nHutang Usaha', '', '5,000'],
          ['Notes Payable\nCatatan Hutang', '', '15,000'],
          ['Share Capital\nModal Saham', '', '20,000'],
          ['Retained Earnings\nLaba Ditahan', '', '10,000'],
          ['Dividends\nDividen', '4,000', ''],
          ['Service Revenue\nPendapatan Jasa', '', '50,000'],
          ['Salaries Expense\nBeban Gaji', '21,500', ''],
          ['Rent Expense\nBeban Sewa', '10,000', ''],
          ['Utilities Expense\nBeban Utilitas', '3,000', ''],
          ['Advertising Expense\nBeban Iklan', '2,000', ''],
          ['Insurance Expense\nBeban Asuransi', '2,700', ''],
          ['Depreciation Expense\nBeban Penyusutan', '3,000', ''],
          ['Interest Expense\nBeban Bunga', '400', ''],
          ['TOTAL', '87,700', '87,700']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '(b)', given: b('Prepare financial statements from worksheet', 'Siapkan laporan keuangan dari kertas kerja'), answer: b('Income Statement: Service Revenue €50,000; Expenses: Salaries €21,500, Rent €10,000, Utilities €3,000, Advertising €2,000, Insurance €2,700, Depreciation €3,000, Interest €400 = Total €26,700; Net Income €23,300\nRetained Earnings: Beg €10,000 + NI €23,300 - Div €4,000 = End €29,300\nStatement of Financial Position: Assets: Cash €12,000, A/R €?, Supplies €?, Equipment €30,000 - Acc Dep €? = Total; Liabilities: A/P €5,000, Notes Payable €15,000, Salaries Payable €?, Interest Payable €?; Equity: Share Capital €20,000 + RE €? = Total', 'Laporan Laba Rugi: Pendapatan Jasa €50.000; Beban: Gaji €21.500, Sewa €10.000, Utilitas €3.000, Iklan €2.000, Asuransi €2.700, Penyusutan €3.000, Bunga €400 = Total €26.700; Laba Bersih €23.300\nLaba Ditahan: Awal €10.000 + LB €23.300 - Div €4.000 = Akhir €29.300\nLaporan Posisi Keuangan: Aset: Kas €12.000, Piutang €?, Perlengkapan €?, Peralatan €30.000 - Akum Peny €? = Total; Liabilitas: H/Usaha €5.000, Catatan Hutang €15.000, Gaji Bayar €?, Bunga Bayar €?; Ekuitas: Modal Saham €20.000 + LD €? = Total') },
      { label: '(b)', given: b('Income Statement', 'Laporan Laba Rugi'), blocks: [
        { type: 'table', caption: b('Income Statement - Martinez Company', 'Laporan Laba Rugi - Perusahaan Martinez'), head: [
          b('Item\nItem', 'Item\nItem'),
          b('Amount\nJumlah', 'Amount\nJumlah')
        ], rows: [
          ['Service Revenue\nPendapatan Jasa', '50,000'],
          ['Expenses:\nBeban:', '', ''],
          ['  Salaries Expense\n  Beban Gaji', '21,500'],
          ['  Rent Expense\n  Beban Sewa', '10,000'],
          ['  Utilities Expense\n  Beban Utilitas', '3,000'],
          ['  Advertising Expense\n  Beban Iklan', '2,000'],
          ['  Insurance Expense\n  Beban Asuransi', '2,700'],
          ['  Depreciation Expense\n  Beban Penyusutan', '3,000'],
          ['  Interest Expense\n  Beban Bunga', '400'],
          ['Total Expenses\nTotal Beban', '26,700'],
          ['NET INCOME\nLABA BERSIH', '23,300']
        ], align: ['left', 'right'], compact: false }
      ]},
      { label: '(c)', given: b('Journalize closing entries', 'Jurnalikan entri penutupan'), answer: b('1. Dr Service Revenue 50,000 / Cr Income Summary 50,000\n2. Dr Income Summary 26,700 / Cr Salaries Exp 21,500, Rent Exp 10,000, Util Exp 3,000, Adv Exp 2,000, Ins Exp 2,700, Dep Exp 3,000, Interest Exp 400\n3. Dr Income Summary 23,300 / Cr Retained Earnings 23,300\n4. Dr Retained Earnings 4,000 / Cr Dividends 4,000', '1. Dr Pendapatan Jasa 50.000 / Cr Ikhtisar Laba Rugi 50.000\n2. Dr Ikhtisar Laba Rugi 26.700 / Cr Beban Gaji 21.500, Beban Sewa 10.000, Beban Util 3.000, Beban Iklan 2.000, Beban Asuransi 2.700, Beban Peny 3.000, Beban Bunga 400\n3. Dr Ikhtisar Laba Rugi 23.300 / Cr Laba Ditahan 23.300\n4. Dr Laba Ditahan 4.000 / Cr Dividen 4.000') },
      { label: '(c)', given: b('Closing Entries', 'Entri Penutupan'), blocks: [
        { type: 'table', caption: b('Closing Entries - Martinez Company', 'Entri Penutupan - Perusahaan Martinez'), head: [
          b('Account\nAkun', 'Account\nAkun'),
          b('Debit\nDebet', 'Debit\nDebet'),
          b('Credit\nKredit', 'Credit\nKredit')
        ], rows: [
          ['Service Revenue\nPendapatan Jasa', '50,000', ''],
          ['Income Summary\nIkhtisar Laba Rugi', '', '50,000'],
          ['Income Summary\nIkhtisar Laba Rugi', '26,700', ''],
          ['Salaries Expense\nBeban Gaji', '', '21,500'],
          ['Rent Expense\nBeban Sewa', '', '10,000'],
          ['Utilities Expense\nBeban Utilitas', '', '3,000'],
          ['Advertising Expense\nBeban Iklan', '', '2,000'],
          ['Insurance Expense\nBeban Asuransi', '', '2,700'],
          ['Depreciation Expense\nBeban Penyusutan', '', '3,000'],
          ['Interest Expense\nBeban Bunga', '', '400'],
          ['Income Summary\nIkhtisar Laba Rugi', '23,300', ''],
          ['Retained Earnings\nLaba Ditahan', '', '23,300'],
          ['Retained Earnings\nLaba Ditahan', '4,000', ''],
          ['Dividends\nDividen', '', '4,000']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '(d)', given: b('Post-closing trial balance', 'Neraca saldo pasca tutup'), answer: b('Post-Closing Trial Balance:\nCash €12,000 | Accounts Receivable €? | Supplies €? | Equipment €30,000\nAccumulated Depreciation €? | Accounts Payable €5,000 | Notes Payable €15,000\nSalaries Payable €? | Interest Payable €?\nShare Capital €20,000 | Retained Earnings €29,300\nTotal Debits = Total Credits = ?\n(Only permanent accounts remain - all temporary accounts zero)', 'Neraca Saldo Pasca Tutup:\nKas €12.000 | Piutang Usaha €? | Perlengkapan €? | Peralatan €30.000\nAkum Penyusutan €? | Hutang Usaha €5.000 | Catatan Hutang €15.000\nGaji Bayar €? | Bunga Bayar €?\nModal Saham €20.000 | Laba Ditahan €29.300\nTotal Debet = Total Kredit = ?\n(Hanya akun permanen tersisa - semua akun sementara nol)') },
      { label: '(d)', given: b('Post-Closing Trial Balance', 'Neraca Saldo Pasca Tutup'), blocks: [
        { type: 'table', caption: b('Post-Closing Trial Balance - Martinez Company', 'Neraca Saldo Pasca Tutup - Perusahaan Martinez'), head: [
          b('Account\nAkun', 'Account\nAkun'),
          b('Debit\nDebet', 'Debit\nDebet'),
          b('Credit\nKredit', 'Credit\nKredit')
        ], rows: [
          ['Cash\nKas', '12,000', ''],
          ['Accounts Receivable\nPiutang Usaha', '', ''],
          ['Supplies\nPerlengkapan', '', ''],
          ['Equipment\nPeralatan', '30,000', ''],
          ['Accumulated Depreciation\nAkumulasi Penyusutan', '', ''],
          ['Accounts Payable\nHutang Usaha', '', '5,000'],
          ['Notes Payable\nCatatan Hutang', '', '15,000'],
          ['Salaries Payable\nGaji Bayar', '', ''],
          ['Interest Payable\nBunga Bayar', '', ''],
          ['Share Capital\nModal Saham', '', '20,000'],
          ['Retained Earnings\nLaba Ditahan', '', '29,300'],
          ['TOTAL', '42,000+', '42,000+']
        ], align: ['left', 'right', 'right'], compact: false }
      ]}
    ],
    explanation: b(
      'The worksheet is a tool that facilitates the entire end-of-period process. It organizes: (1) Trial Balance (unadjusted), (2) Adjustments, (3) Adjusted Trial Balance, (4) Income Statement columns, (5) Statement of Financial Position columns. The worksheet bridges the gap between recording and reporting. Closing entries zero out temporary accounts. Post-closing trial balance contains only permanent (real) accounts - assets, liabilities, equity. This verifies the ledger is ready for the next period.',
      'Kertas kerja adalah alat yang memudahkan seluruh proses akhir periode. Ia mengorganisir: (1) Neraca Saldo (tidak disesuaikan), (2) Penyesuaian, (3) Neraca Saldo Disesuaikan, (4) Kolom Laporan Laba Rugi, (5) Kolom Laporan Posisi Keuangan. Kertas kerja menjembatani pencatatan dan pelaporan. Entri penutupan mengosongkan akun sementara. Neraca saldo pasca tutup hanya berisi akun permanen (real) - aset, liabilitas, ekuitas. Ini memverifikasi buku besar siap untuk periode berikutnya.'
    )
  },
  {
    id: 'P4-2',
    title: b('P4-2: Post-Closing Trial Balance', 'P4-2: Neraca Saldo Pasca Tutup'),
    question: b(
      'The adjusted trial balance of Torres Company at December 31 is shown below. Prepare the closing entries and a post-closing trial balance.\n\n' +
      'Adjusted Trial Balance, Dec 31:\n' +
      'Cash €8,000 | Accounts Receivable €5,000 | Supplies €1,500 | Equipment €25,000\n' +
      'Accumulated Depreciation €7,500 | Accounts Payable €3,000 | Notes Payable €10,000\n' +
      'Share Capital €15,000 | Retained Earnings €8,000 | Dividends €2,000\n' +
      'Service Revenue €35,000 | Salaries Expense €15,000 | Rent Expense €8,000\n' +
      'Utilities Expense €2,500 | Advertising Expense €1,500 | Insurance Expense €1,000\n' +
      'Depreciation Expense €2,000 | Interest Expense €500 | Supplies Expense €800\n\n' +
      'Instructions:\n' +
      '(a) Journalize the four closing entries.\n' +
      '(b) Prepare a post-closing trial balance.\n' +
      '(c) Explain why Retained Earnings has a different balance after closing.',
      'Neraca saldo disesuaikan Perusahaan Torres 31 Des ditunjukkan di bawah. Siapkan entri penutupan dan neraca saldo pasca tutup.\n\n' +
      'Neraca Saldo Disesuaikan, 31 Des:\n' +
      'Kas €8.000 | Piutang Usaha €5.000 | Perlengkapan €1.500 | Peralatan €25.000\n' +
      'Akum Penyusutan €7.500 | Hutang Usaha €3.000 | Catatan Hutang €10.000\n' +
      'Modal Saham €15.000 | Laba Ditahan €8.000 | Dividen €2.000\n' +
      'Pendapatan Jasa €35.000 | Beban Gaji €15.000 | Beban Sewa €8.000\n' +
      'Beban Utilitas €2.500 | Beban Iklan €1.500 | Beban Asuransi €1.000\n' +
      'Beban Penyusutan €2.000 | Beban Bunga €500 | Beban Perlengkapan €800\n\n' +
      'Instruksi:\n' +
      '(a) Jurnalikan empat entri penutupan.\n' +
      '(b) Siapkan neraca saldo pasca tutup.\n' +
      '(c) Jelaskan mengapa Laba Ditahan memiliki saldo berbeda setelah penutupan.'
    ),
    parts: [
      { label: '(a)', given: b('Four closing entries from adjusted TB', 'Empat entri penutupan dari neraca saldo disesuaikan'), answer: b('1. Dr Service Revenue 35,000 / Cr Income Summary 35,000\n2. Dr Income Summary 20,800 / Cr Salaries Exp 15,000, Rent Exp 8,000, Util Exp 2,500, Adv Exp 1,500, Ins Exp 1,000, Dep Exp 2,000, Interest Exp 500, Supplies Exp 800\n3. Dr Income Summary 14,200 / Cr Retained Earnings 14,200\n4. Dr Retained Earnings 2,000 / Cr Dividends 2,000', '1. Dr Pendapatan Jasa 35.000 / Cr Ikhtisar Laba Rugi 35.000\n2. Dr Ikhtisar Laba Rugi 20.800 / Cr Beban Gaji 15.000, Beban Sewa 8.000, Beban Util 2.500, Beban Iklan 1.500, Beban Asuransi 1.000, Beban Peny 2.000, Beban Bunga 500, Beban Perl 800\n3. Dr Ikhtisar Laba Rugi 14.200 / Cr Laba Ditahan 14.200\n4. Dr Laba Ditahan 2.000 / Cr Dividen 2.000') },
      { label: '(b)', given: b('Post-closing trial balance', 'Neraca saldo pasca tutup'), answer: b('Post-Closing Trial Balance:\nCash €8,000 | Accounts Receivable €? | Supplies €? | Equipment €25,000\nAccumulated Depreciation €? | Accounts Payable €3,000 | Notes Payable €10,000\nShare Capital €15,000 | Retained Earnings €22,200 (8,000 + 14,200 - 2,000)\nTotal Debits = Total Credits = ?\n(Only permanent accounts: Cash, A/R, Supplies, Equipment, Acc Dep, A/P, Notes Payable, Share Capital, Retained Earnings)', 'Neraca Saldo Pasca Tutup:\nKas €8.000 | Piutang Usaha €? | Perlengkapan €? | Peralatan €25.000\nAkum Penyusutan €? | Hutang Usaha €3.000 | Catatan Hutang €10.000\nModal Saham €15.000 | Laba Ditahan €22.200 (8.000 + 14.200 - 2.000)\nTotal Debet = Total Kredit = ?\n(Hanya akun permanen: Kas, Piutang, Perlengkapan, Peralatan, Akum Peny, H/Usaha, Catatan Hutang, Modal Saham, Laba Ditahan)') },
      { label: '(c)', given: b('Explain RE balance change', 'Jelaskan perubahan saldo LD'), answer: b('Retained Earnings changes because: (1) Net income (€14,200) is closed to RE via Income Summary, increasing RE. (2) Dividends (€2,000) are closed directly to RE, decreasing RE. The new RE balance = Beginning RE (€8,000) + Net Income (€14,200) - Dividends (€2,000) = €20,200. RE is the only equity account that changes during closing (besides temporary accounts being zeroed).', 'Laba Ditahan berubah karena: (1) Laba bersih (€14.200) ditutup ke LD lewat Ikhtisar Laba Rugi, menambah LD. (2) Dividen (€2.000) ditutup langsung ke LD, mengurangi LD. Saldo LD baru = LD Awal (€8.000) + Laba Bersih (€14.200) - Dividen (€2.000) = €20.200. LD adalah satu-satunya akun ekuitas yang berubah saat penutupan (selain akun sementara dinolkan).') }
    ],
    explanation: b(
      'The closing process serves two purposes: (1) Reset temporary (nominal) accounts to zero for the new period, (2) Transfer net income/loss and dividends to Retained Earnings. The Income Summary account is a temporary clearing account used only during closing. After closing, the post-closing trial balance contains only permanent (real) accounts. Retained Earnings is updated to reflect the cumulative earnings retained in the business.',
      'Proses penutupan memiliki dua tujuan: (1) Mengatur ulang akun sementara (nominal) ke nol untuk periode baru, (2) Mentransfer laba/rugi bersih dan dividen ke Laba Ditahan. Akun Ikhtisar Laba Rugi adalah akun pembantu sementara yang hanya digunakan saat penutupan. Setelah penutupan, neraca saldo pasca tutup hanya berisi akun permanen (real). Laba Ditahan diperbarui untuk mencerminkan kumulatif laba yang dipertahankan dalam bisnis.'
    )
  },

  // BYP-type exercises for Chapter 4
  {
    id: 'BYP4-1',
    title: b('BYP4-1: Closing Entries', 'BYP4-1: Entri Penutupan'),
    question: b(
      'Prepare the closing entries for the following accounts from the adjusted trial balance of Vega Company:\n' +
      'Service Revenue €40,000; Salaries Expense €15,000; Rent Expense €10,000;\n' +
      'Utilities Expense €3,000; Advertising Expense €2,000; Depreciation Expense €4,000;\n' +
      'Interest Expense €500; Supplies Expense €1,500; Dividends €3,000.\n\n' +
      'Instructions: (a) Prepare the four closing entries. (b) What is the net income? (c) What is the ending Retained Earnings if beginning was €12,000?',
      'Siapkan entri penutupan untuk akun-akun berikut dari neraca saldo disesuaikan Perusahaan Vega:\n' +
      'Pendapatan Jasa €40.000; Beban Gaji €15.000; Beban Sewa €10.000;\n' +
      'Beban Utilitas €3.000; Beban Iklan €2.000; Beban Penyusutan €4.000;\n' +
      'Beban Bunga €500; Beban Perlengkapan €1.500; Dividen €3.000.\n\n' +
      'Instruksi: (a) Siapkan empat entri penutupan. (b) Berapa laba bersih? (c) Berapa Laba Ditahan akhir jika awalnya €12.000?'
    ),
    parts: [
      { label: '(a)', given: b('Four closing entries', 'Empat entri penutupan'), answer: b('1. Dr Service Revenue 40,000 / Cr Income Summary 40,000\n2. Dr Income Summary 23,000 / Cr Salaries Exp 15,000, Rent Exp 10,000, Util Exp 3,000, Adv Exp 2,000, Dep Exp 4,000, Supplies Exp 1,500\n3. Dr Income Summary 17,000 / Cr Retained Earnings 17,000\n4. Dr Retained Earnings 3,000 / Cr Dividends 3,000', '1. Dr Pendapatan Jasa 40.000 / Cr Ikhtisar Laba Rugi 40.000\n2. Dr Ikhtisar Laba Rugi 23.000 / Cr Beban Gaji 15.000, Beban Sewa 10.000, Beban Util 3.000, Beban Iklan 2.000, Beban Peny 4.000, Beban Perl 1.500\n3. Dr Ikhtisar Laba Rugi 17.000 / Cr Laba Ditahan 17.000\n4. Dr Laba Ditahan 3.000 / Cr Dividen 3.000') },
      { label: '(b)', given: b('Net income calculation', 'Perhitungan laba bersih'), answer: b('Net Income = €40,000 - €23,000 = €17,000', 'Laba Bersih = €40.000 - €23.000 = €17.000') },
      { label: '(c)', given: b('Ending Retained Earnings', 'Laba Ditahan akhir'), answer: b('Ending RE = €12,000 + €17,000 - €3,000 = €26,000', 'Akhir LD = €12.000 + €17.000 - €3.000 = €26.000') }
    ],
    explanation: b(
      'Closing entries are the final step in the accounting cycle. They serve to: (1) Close revenue accounts to Income Summary, (2) Close expense accounts to Income Summary, (3) Close Income Summary (net income) to Retained Earnings, (4) Close Dividends directly to Retained Earnings. Dividends bypass Income Summary because they are not an expense - they are a distribution of earnings to owners.',
      'Entri penutupan adalah langkah terakhir dalam siklus akuntansi. Fungsinya: (1) Tutup akun pendapatan ke Ikhtisar Laba Rugi, (2) Tutup akun beban ke Ikhtisar Laba Rugi, (3) Tutup Ikhtisar Laba Rugi (laba bersih) ke Laba Ditahan, (4) Tutup Dividen langsung ke Laba Ditahan. Dividen melewati Ikhtisar Laba Rugi karena bukan beban - itu distribusi laba ke pemilik.'
    )
  },
  {
    id: 'BYP4-2',
    title: b('BYP4-2: Reversing Entries', 'BYP4-2: Entri Pembalikan'),
    question: b(
      'Discuss the purpose and mechanics of reversing entries. When are they used? Prepare reversing entries for the following adjusting entries made at December 31:\n' +
      '1. Accrued salaries €2,500 (Salaries Expense / Salaries Payable)\n' +
      '2. Accrued interest €400 (Interest Expense / Interest Payable)\n' +
      '3. Accrued revenue €3,000 (Accounts Receivable / Service Revenue)\n\n' +
      'Instructions: (a) Prepare the reversing entries dated January 1. (b) Show how the subsequent cash payments/receipts are recorded with and without reversing entries.',
      'Diskusikan tujuan dan mekanika entri pembalikan. Kapan digunakan? Siapkan entri pembalikan untuk entri penyesuaian berikut pada 31 Des:\n' +
      '1. Gaji akrual €2.500 (Beban Gaji / Gaji Bayar)\n' +
      '2. Bunga akrual €400 (Beban Bunga / Bunga Bayar)\n' +
      '3. Pendapatan akrual €3.000 (Piutang Usaha / Pendapatan Jasa)\n\n' +
      'Instruksi: (a) Siapkan entri pembalikan tanggal 1 Januari. (b) Tunjukkan bagaimana pembayaran/penerimaan kas berikutnya dicatat dengan dan tanpa entri pembalikan.'
    ),
    parts: [
      { label: '(a)', given: b('Reversing entries for 3 adjusting entries', 'Entri pembalikan untuk 3 entri penyesuaian'), answer: b('Reversing Entry 1 (Jan 1): Salaries Payable 2,500 / Salaries Expense 2,500\nReversing Entry 2 (Jan 1): Interest Payable 400 / Interest Expense 400\nReversing Entry 3 (Jan 1): Service Revenue 3,000 / Accounts Receivable 3,000\n\nNote: Reversing entries are optional. They simplify subsequent cash transaction recording by eliminating the need to remember which portion of the payment relates to prior period accruals.', 'Entri Pembalikan 1 (1 Jan): Gaji Bayar 2.500 / Beban Gaji 2.500\nEntri Pembalikan 2 (1 Jan): Bunga Bayar 400 / Beban Bunga 400\nEntri Pembalikan 3 (1 Jan): Pendapatan Jasa 3.000 / Piutang Usaha 3.000\n\nCatatan: Entri pembalikan bersifat opsional. Mereka menyederhanakan pencatatan transaksi kas berikutnya dengan menghilangkan kebutuhan mengingat bagian mana dari pembayaran terkait akrual periode sebelumnya.') },
      { label: '(b)', given: b('Subsequent cash payments with/without reversing entries', 'Pembayaran kas berikutnya dengan/tanpa entri pembalikan'), answer: b('WITH reversing entries: When cash paid for salaries, debit Salaries Expense full amount (no need to split between Payable and Expense).\nWITHOUT reversing entries: Must debit Salaries Payable (for prior period) and Salaries Expense (for current period portion) separately.\n\nExample: Jan 15 pay €4,000 salaries.\nWith RE: Dr Salaries Exp 4,000 / Cr Cash 4,000\nWithout RE: Dr Salaries Payable 2,500, Dr Salaries Exp 1,500 / Cr Cash 4,000', 'DENGAN entri pembalikan: Saat bayar gaji, debet Beban Gaji jumlah penuh (tidak perlu bagi antara Bayar dan Beban).\nTANPA entri pembalikan: Harus debet Gaji Bayar (untuk periode lalu) dan Beban Gaji (untuk bagian periode ini) terpisah.\n\nContoh: 15 Jan bayar €4.000 gaji.\nDgn RE: Dr Beban Gaji 4.000 / Cr Kas 4.000\nTdk RE: Dr Gaji Bayar 2.500, Dr Beban Gaji 1.500 / Cr Kas 4.000') }
    ],
    explanation: b(
      'Reversing entries are optional journal entries made at the beginning of a new period to reverse certain adjusting entries (accrued expenses and accrued revenues). They simplify the recording of subsequent cash transactions by eliminating the need to split payments between prior period liabilities and current period expenses. Reversing entries are NOT used for prepaid expenses, unearned revenues, or depreciation.',
      'Entri pembalikan adalah entri jurnal opsional di awal periode baru untuk membalikkan entri penyesuaian tertentu (beban akrual dan pendapatan akrual). Mereka menyederhanakan pencatatan transaksi kas berikutnya dengan menghilangkan kebutuhan memisahkan pembayaran antara liabilitas periode sebelumnya dan beban periode ini. Entri pembalikan TIDAK digunakan untuk beban dibayar dimuka, pendapatan belum diperoleh, atau penyusutan.'
    )
  },
  {
    id: 'BYP4-3',
    title: b('BYP4-3: Comprehensive Chapter 1-4', 'BYP4-3: Komprehensif Bab 1-4'),
    question: b(
      'Comprehensive problem integrating all concepts from Chapters 1-4:\n' +
      '1. Transaction analysis using accounting equation (Ch 1)\n' +
      '2. Journalizing, posting, trial balance (Ch 2)\n' +
      '3. Adjusting entries, adjusted trial balance, financial statements (Ch 3)\n' +
      '4. Closing entries, post-closing trial balance, reversing entries (Ch 4)\n\n' +
      'Scenario: A new consulting business starts on January 1. Students must process 25 transactions through the complete accounting cycle for the first quarter, prepare all financial statements, close the books, and prepare reversing entries for the second quarter.',
      'Masalah komprehensif mengintegrasikan semua konsep Bab 1-4:\n' +
      '1. Analisis transaksi menggunakan persamaan akuntansi (Bab 1)\n' +
      '2. Jurnal, pos, neraca saldo (Bab 2)\n' +
      '3. Entri penyesuaian, neraca saldo disesuaikan, laporan keuangan (Bab 3)\n' +
      '4. Entri penutupan, neraca saldo pasca tutup, entri pembalikan (Bab 4)\n\n' +
      'Skenario: Bisnis konsultasi baru dimulai 1 Januari. Mahasiswa harus memproses 25 transaksi melalui siklus akuntansi lengkap untuk kuartal pertama, menyiapkan semua laporan keuangan, menutup buku, dan menyiapkan entri pembalikan untuk kuartal kedua.'
    ),
    parts: [
      { label: '', given: b('Complete accounting cycle for new business', 'Siklus akuntansi lengkap untuk bisnis baru'), answer: b('This capstone problem integrates all four chapters. Steps: (1) Analyze 25 transactions using accounting equation. (2) Journalize each. (3) Post to ledger. (4) Prepare trial balance. (5) Make 6-8 adjusting entries (supplies, depreciation, accruals, deferrals). (6) Prepare adjusted trial balance. (7) Prepare all 3 financial statements. (8) Journalize 4 closing entries. (9) Prepare post-closing trial balance. (10) Prepare 3-4 reversing entries for accrued items. (11) Verify post-closing TB has only permanent accounts with correct balances.', 'Masalah puncak ini mengintegrasikan keempat bab. Langkah: (1) Analisis 25 transaksi pakai persamaan akuntansi. (2) Jurnalikan masing-masing. (3) Pos ke buku besar. (4) Siapkan neraca saldo. (5) Buat 6-8 entri penyesuaian (perlengkapan, penyusutan, akrual, tangguhan). (6) Siapkan neraca saldo disesuaikan. (7) Siapkan 3 laporan keuangan. (8) Jurnalikan 4 entri penutupan. (9) Siapkan neraca saldo pasca tutup. (10) Siapkan 3-4 entri pembalikan untuk item akrual. (11) Verifikasi neraca saldo pasca tutup hanya akun permanen dengan saldo benar.') }
    ],
    explanation: b(
      'This capstone problem tests mastery of the entire accounting cycle. It requires: understanding the accounting equation, double-entry mechanics, adjusting entries for all four types, financial statement preparation sequence, closing process mechanics, and the purpose of reversing entries. Success demonstrates readiness for intermediate accounting.',
      'Masalah puncak ini menguji penguasaan seluruh siklus akuntansi. Memerlukan: pemahaman persamaan akuntansi, mekanika double-entry, entri penyesuaian keempat tipe, urutan penyusunan laporan keuangan, mekanika proses penutupan, dan tujuan entri pembalikan. Keberhasilan menunjukkan kesiapan untuk akuntansi menengah.'
    )
  }
];
import { b } from '../data/types';

export const chapter4PAndBYP = [
  // ============================================================
  // P4-1: Worksheet Completion - Complete with all tables
  // ============================================================
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
      {
        label: '(a)',
        given: b('Complete Worksheet Columns: TB, Adjustments, Adj TB, IS, SFP', 'Lengkapi Kolom Kertas Kerja: NS, Penyesuaian, NS Disesuaikan, LR, LPK'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Adjusting Entries - Martinez Company', 'Entri Penyesuaian - Perusahaan Martinez'),
            head: [
              b('Account\nAkun', 'Account\nAkun'),
              b('Debit\nDebet', 'Debit\nDebet'),
              b('Credit\nKredit', 'Credit\nKredit')
            ],
            rows: [
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
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(a)',
        given: b('Adjusted Trial Balance', 'Neraca Saldo Disesuaikan'),
        blocks: [
          {
            type: 'table',
            caption: b('Adjusted Trial Balance - Martinez Company', 'Neraca Saldo Disesuaikan - Perusahaan Martinez'),
            head: [
              b('Account\nAkun', 'Account\nAkun'),
              b('Debit\nDebet', 'Debit\nDebet'),
              b('Credit\nKredit', 'Credit\nKredit')
            ],
            rows: [
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
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Prepare Financial Statements from Worksheet', 'Siapkan Laporan Keuangan dari Kertas Kerja'),
        blocks: [
          {
            type: 'table',
            caption: b('Income Statement - Martinez Company', 'Laporan Laba Rugi - Perusahaan Martinez'),
            head: [
              b('Item\nItem', 'Item\nItem'),
              b('Amount (€)\nJumlah (€)', 'Jumlah (€)\nJumlah (€)')
            ],
            rows: [
              ['Service Revenue\nPendapatan Jasa', '50,000'],
              ['Expenses:\nBeban:', ''],
              ['  Salaries Expense\n  Beban Gaji', '21,500'],
              ['  Rent Expense\n  Beban Sewa', '10,000'],
              ['  Utilities Expense\n  Beban Utilitas', '3,000'],
              ['  Advertising Expense\n  Beban Iklan', '2,000'],
              ['  Insurance Expense\n  Beban Asuransi', '2,700'],
              ['  Depreciation Expense\n  Beban Penyusutan', '3,000'],
              ['  Interest Expense\n  Beban Bunga', '400'],
              ['Total Expenses\nTotal Beban', '26,700'],
              ['NET INCOME\nLABA BERSIH', '23,300']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Retained Earnings Statement', 'Laporan Laba Ditahan'),
        blocks: [
          {
            type: 'table',
            caption: b('Retained Earnings Statement - Martinez Company', 'Laporan Laba Ditahan - Perusahaan Martinez'),
            head: [
              b('Item\nItem', 'Item\nItem'),
              b('Amount (€)\nJumlah (€)', 'Jumlah (€)\nJumlah (€)')
            ],
            rows: [
              ['Retained Earnings, Jan 1\nLaba Ditahan, 1 Jan', '10,000'],
              ['Add: Net Income\nTambah: Laba Bersih', '23,300'],
              ['Less: Dividends\nKurang: Dividen', '4,000'],
              ['Retained Earnings, Dec 31\nLaba Ditahan, 31 Des', '29,300']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Statement of Financial Position', 'Laporan Posisi Keuangan'),
        blocks: [
          {
            type: 'table',
            caption: b('Statement of Financial Position - Martinez Company (Dec 31)', 'Laporan Posisi Keuangan - Perusahaan Martinez (31 Des)'),
            head: [
              b('Item\nItem', 'Item\nItem'),
              b('Amount (€)\nJumlah (€)', 'Jumlah (€)\nJumlah (€)')
            ],
            rows: [
              ['ASSETS\nASET', ''],
              ['  Cash\n  Kas', '12,000'],
              ['  Accounts Receivable\n  Piutang Usaha', '8,000'],
              ['  Supplies\n  Perlengkapan', '1,200'],
              ['  Equipment\n  Peralatan', '30,000'],
              ['  Less: Accumulated Depreciation\n  Kurang: Akum Penyusutan', '(12,000)'],
              ['  Total Equipment (Net)\n  Total Peralatan (Bersih)', '18,000'],
              ['Total Assets\nTotal Aset', '62,000'],
              ['LIABILITIES & EQUITY\nLIABILITAS & EKUITAS', ''],
              ['  Accounts Payable\n  Hutang Usaha', '5,000'],
              ['  Notes Payable\n  Catatan Hutang', '15,000'],
              ['  Salaries Payable\n  Gaji Bayar', '1,500'],
              ['  Interest Payable\n  Bunga Bayar', '400'],
              ['Total Liabilities\nTotal Liabilitas', '21,900'],
              ['  Share Capital\n  Modal Saham', '20,000'],
              ['  Retained Earnings\n  Laba Ditahan', '29,300'],
              ['Total Equity\nTotal Ekuitas', '40,100'],
              ['Total L & E\nTotal L & E', '62,000']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(c)',
        given: b('Journalize Closing Entries', 'Jurnalikan Entri Penutupan'),
        blocks: [
          {
            type: 'table',
            caption: b('Closing Entries - Martinez Company', 'Entri Penutupan - Perusahaan Martinez'),
            head: [
              b('Account\nAkun', 'Account\nAkun'),
              b('Debit\nDebet', 'Debit\nDebet'),
              b('Credit\nKredit', 'Credit\nKredit')
            ],
            rows: [
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
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(d)',
        given: b('Post-Closing Trial Balance', 'Neraca Saldo Pasca Tutup'),
        blocks: [
          {
            type: 'table',
            caption: b('Post-Closing Trial Balance - Martinez Company', 'Neraca Saldo Pasca Tutup - Perusahaan Martinez'),
            head: [
              b('Account\nAkun', 'Account\nAkun'),
              b('Debit\nDebet', 'Debit\nDebet'),
              b('Credit\nKredit', 'Credit\nKredit')
            ],
            rows: [
              ['Cash\nKas', '12,000', ''],
              ['Accounts Receivable\nPiutang Usaha', '8,000', ''],
              ['Supplies\nPerlengkapan', '1,200', ''],
              ['Equipment\nPeralatan', '30,000', ''],
              ['Accumulated Depreciation\nAkumulasi Penyusutan', '', '12,000'],
              ['Accounts Payable\nHutang Usaha', '', '5,000'],
              ['Notes Payable\nCatatan Hutang', '', '15,000'],
              ['Share Capital\nModal Saham', '', '20,000'],
              ['Retained Earnings\nLaba Ditahan', '', '29,300'],
              ['TOTAL', '59,200', '59,200']
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'The worksheet is a tool that facilitates the entire end-of-period process. It organizes: (1) Trial Balance (unadjusted), (2) Adjustments, (3) Adjusted Trial Balance, (4) Income Statement columns, (5) Statement of Financial Position columns. The worksheet bridges the gap between recording and reporting. Closing entries zero out temporary accounts. Post-closing trial balance contains only permanent (real) accounts - assets, liabilities, equity. This verifies the ledger is ready for the next period.',
      'Kertas kerja adalah alat yang memudahkan seluruh proses akhir periode. Ia mengorganisir: (1) Neraca Saldo (tidak disesuaikan), (2) Penyesuaian, (3) Neraca Saldo Disesuaikan, (4) Kolom Laporan Laba Rugi, (5) Kolom Laporan Posisi Keuangan. Kertas kerja menjembatani pencatatan dan pelaporan. Entri penutupan mengosongkan akun sementara. Neraca saldo pasca tutup hanya berisi akun permanen (real) - aset, liabilitas, ekuitas. Ini memverifikasi buku besar siap untuk periode berikutnya.'
    )
  },

  // ============================================================
  // P4-2: Post-Closing Trial Balance
  // ============================================================
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
      {
        label: '(a)',
        given: b('Four Closing Entries from Adjusted TB', 'Empat Entri Penutupan dari Neraca Saldo Disesuaikan'),
        blocks: [
          {
            type: 'table',
            caption: b('Closing Entries - Torres Company', 'Entri Penutupan - Perusahaan Torres'),
            head: [
              b('Account\nAkun', 'Account\nAkun'),
              b('Debit\nDebet', 'Debit\nDebet'),
              b('Credit\nKredit', 'Credit\nKredit')
            ],
            rows: [
              ['Service Revenue\nPendapatan Jasa', '35,000', ''],
              ['Income Summary\nIkhtisar Laba Rugi', '', '35,000'],
              ['Income Summary\nIkhtisar Laba Rugi', '20,800', ''],
              ['Salaries Expense\nBeban Gaji', '', '15,000'],
              ['Rent Expense\nBeban Sewa', '', '8,000'],
              ['Utilities Expense\nBeban Utilitas', '', '2,500'],
              ['Advertising Expense\nBeban Iklan', '', '1,500'],
              ['Insurance Expense\nBeban Asuransi', '', '1,000'],
              ['Depreciation Expense\nBeban Penyusutan', '', '2,000'],
              ['Interest Expense\nBeban Bunga', '', '500'],
              ['Supplies Expense\nBeban Perlengkapan', '', '800'],
              ['Income Summary\nIkhtisar Laba Rugi', '14,200', ''],
              ['Retained Earnings\nLaba Ditahan', '', '14,200'],
              ['Retained Earnings\nLaba Ditahan', '2,000', ''],
              ['Dividends\nDividen', '', '2,000']
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Post-Closing Trial Balance', 'Neraca Saldo Pasca Tutup'),
        blocks: [
          {
            type: 'table',
            caption: b('Post-Closing Trial Balance - Torres Company', 'Neraca Saldo Pasca Tutup - Perusahaan Torres'),
            head: [
              b('Account\nAkun', 'Account\nAkun'),
              b('Debit\nDebet', 'Debit\nDebet'),
              b('Credit\nKredit', 'Credit\nKredit')
            ],
            rows: [
              ['Cash\nKas', '8,000', ''],
              ['Accounts Receivable\nPiutang Usaha', '5,000', ''],
              ['Supplies\nPerlengkapan', '1,500', ''],
              ['Equipment\nPeralatan', '25,000', ''],
              ['Accumulated Depreciation\nAkumulasi Penyusutan', '', '7,500'],
              ['Accounts Payable\nHutang Usaha', '', '3,000'],
              ['Notes Payable\nCatatan Hutang', '', '10,000'],
              ['Share Capital\nModal Saham', '', '15,000'],
              ['Retained Earnings\nLaba Ditahan', '', '22,200'],
              ['TOTAL', '39,500', '39,500']
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(c)',
        given: b('Explain RE Balance Change', 'Jelaskan Perubahan Saldo LD'),
        answer: b('Retained Earnings changes because: (1) Net income (€14,200) is closed to RE via Income Summary, increasing RE. (2) Dividends (€2,000) are closed directly to RE, decreasing RE. The new RE balance = Beginning RE (€8,000) + Net Income (€14,200) - Dividends (€2,000) = €20,200. RE is the only equity account that changes during closing (besides temporary accounts being zeroed).', 'Laba Ditahan berubah karena: (1) Laba bersih (€14.200) ditutup ke LD lewat Ikhtisar Laba Rugi, menambah LD. (2) Dividen (€2.000) ditutup langsung ke LD, mengurangi LD. Saldo LD baru = LD Awal (€8.000) + Laba Bersih (€14.200) - Dividen (€2.000) = €20.200. LD adalah satu-satunya akun ekuitas yang berubah saat penutupan (selain akun sementara dinolkan).')
      }
    ],
    explanation: b(
      'The closing process serves two purposes: (1) Reset temporary (nominal) accounts to zero for the new period, (2) Transfer net income/loss and dividends to Retained Earnings. The Income Summary account is a temporary clearing account used only during closing. After closing, the post-closing trial balance contains only permanent (real) accounts. Retained Earnings is updated to reflect the cumulative earnings retained in the business.',
      'Proses penutupan memiliki dua tujuan: (1) Mengatur ulang akun sementara (nominal) ke nol untuk periode baru, (2) Mentransfer laba/rugi bersih dan dividen ke Laba Ditahan. Akun Ikhtisar Laba Rugi adalah akun pembantu sementara yang hanya digunakan saat penutupan. Setelah penutupan, neraca saldo pasca tutup hanya berisi akun permanen (real). Laba Ditahan diperbarui untuk mencerminkan kumulatif laba yang dipertahankan dalam bisnis.'
    )
  },

  // ============================================================
  // BYP4-1: Closing Entries
  // ============================================================
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
      {
        label: '(a)',
        given: b('Four Closing Entries', 'Empat Entri Penutupan'),
        blocks: [
          {
            type: 'table',
            caption: b('Closing Entries - Vega Company', 'Entri Penutupan - Perusahaan Vega'),
            head: [
              b('Account\nAkun', 'Account\nAkun'),
              b('Debit\nDebet', 'Debit\nDebet'),
              b('Credit\nKredit', 'Credit\nKredit')
            ],
            rows: [
              ['Service Revenue\nPendapatan Jasa', '40,000', ''],
              ['Income Summary\nIkhtisar Laba Rugi', '', '40,000'],
              ['Income Summary\nIkhtisar Laba Rugi', '23,000', ''],
              ['Salaries Expense\nBeban Gaji', '', '15,000'],
              ['Rent Expense\nBeban Sewa', '', '10,000'],
              ['Utilities Expense\nBeban Utilitas', '', '3,000'],
              ['Advertising Expense\nBeban Iklan', '', '2,000'],
              ['Depreciation Expense\nBeban Penyusutan', '', '4,000'],
              ['Supplies Expense\nBeban Perlengkapan', '', '1,500'],
              ['Income Summary\nIkhtisar Laba Rugi', '17,000', ''],
              ['Retained Earnings\nLaba Ditahan', '', '17,000'],
              ['Retained Earnings\nLaba Ditahan', '3,000', ''],
              ['Dividends\nDividen', '', '3,000']
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Net Income Calculation', 'Perhitungan Laba Bersih'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Net Income Calculation', 'Perhitungan Laba Bersih'),
            head: [
              b('Item\nItem', 'Amount (€)\nJumlah (€)'),
              ['Service Revenue\nPendapatan Jasa', '40,000'],
              ['Total Expenses\nTotal Beban', '23,000'],
              ['NET INCOME\nLABA BERSIH', '17,000']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(c)',
        given: b('Ending Retained Earnings', 'Laba Ditahan Akhir'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Retained Earnings Calculation', 'Perhitungan Laba Ditahan'),
            head: [
              b('Item\nItem', 'Amount (€)\nJumlah (€)'),
              ['Beginning Retained Earnings\nLaba Ditahan Awal', '12,000'],
              ['Add: Net Income\nTambah: Laba Bersih', '17,000'],
              ['Less: Dividends\nKurang: Dividen', '3,000'],
              ['Ending Retained Earnings\nLaba Ditahan Akhir', '26,000']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'Closing entries are the final step in the accounting cycle. They serve to: (1) Close revenue accounts to Income Summary, (2) Close expense accounts to Income Summary, (3) Close Income Summary (net income) to Retained Earnings, (4) Close Dividends directly to Retained Earnings. Dividends bypass Income Summary because they are not an expense - they are a distribution of earnings to owners.',
      'Entri penutupan adalah langkah terakhir dalam siklus akuntansi. Fungsinya: (1) Tutup akun pendapatan ke Ikhtisar Laba Rugi, (2) Tutup akun beban ke Ikhtisar Laba Rugi, (3) Tutup Ikhtisar Laba Rugi (laba bersih) ke Laba Ditahan, (4) Tutup Dividen langsung ke Laba Ditahan. Dividen melewati Ikhtisar Laba Rugi karena bukan beban - itu distribusi laba ke pemilik.'
    )
  },

  // ============================================================
  // BYP4-2: Reversing Entries
  // ============================================================
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
      {
        label: '(a)',
        given: b('Reversing Entries for 3 Adjusting Entries', 'Entri Pembalikan untuk 3 Entri Penyesuaian'),
        blocks: [
          {
            type: 'table',
            caption: b('Reversing Entries - January 1', 'Entri Pembalikan - 1 Januari'),
            head: [
              b('Account\nAkun', 'Account\nAkun'),
              b('Debit\nDebet', 'Debit\nDebet'),
              b('Credit\nKredit', 'Credit\nKredit')
            ],
            rows: [
              ['Salaries Payable\nGaji Bayar', '2,500', ''],
              ['Salaries Expense\nBeban Gaji', '', '2,500'],
              ['Interest Payable\nBunga Bayar', '400', ''],
              ['Interest Expense\nBeban Bunga', '', '400'],
              ['Service Revenue\nPendapatan Jasa', '3,000', ''],
              ['Accounts Receivable\nPiutang Usaha', '', '3,000']
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Subsequent Cash Payments With/Without Reversing Entries', 'Pembayaran Kas Berikutnya Dengan/Tanpa Entri Pembalikan'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Subsequent Salary Payment Comparison', 'Perbandingan Pembayaran Gaji Berikutnya'),
            head: [
              b('Scenario\nSkenario', 'Scenario\nSkenario'),
              b('With Reversing Entries\nDengan Entri Pembalikan', 'With Reversing Entries\nDengan Entri Pembalikan'),
              b('Without Reversing Entries\nTanpa Entri Pembalikan', 'Without Reversing Entries\nTanpa Entri Pembalikan')
            ],
            rows: [
              ['Jan 15 pay €4,000 salaries\n15 Jan bayar €4.000 gaji', 'Dr Salaries Exp 4,000 / Cr Cash 4,000\nDr Beban Gaji 4.000 / Cr Kas 4.000', 'Dr Salaries Payable 2,500\nDr Salaries Exp 1,500 / Cr Cash 4,000\nDr Gaji Bayar 2.500\nDr Beban Gaji 1.500 / Cr Kas 4.000']
            ],
            align: ['left', 'center', 'center'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'Reversing entries are optional journal entries made at the beginning of a new period to reverse certain adjusting entries (accrued expenses and accrued revenues). They simplify the recording of subsequent cash transactions by eliminating the need to split payments between prior period liabilities and current period expenses. Reversing entries are NOT used for prepaid expenses, unearned revenues, or depreciation.',
      'Entri pembalikan adalah entri jurnal opsional di awal periode baru untuk membalikkan entri penyesuaian tertentu (beban akrual dan pendapatan akrual). Mereka menyederhanakan pencatatan transaksi kas berikutnya dengan menghilangkan kebutuhan memisahkan pembayaran antara liabilitas periode sebelumnya dan beban periode ini. Entri pembalikan TIDAK digunakan untuk beban dibayar dimuka, pendapatan belum diperoleh, atau penyusutan.'
    )
  },

  // ============================================================
  // BYP4-3: Comprehensive Chapter 1-4
  // ============================================================
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
      {
        label: '',
        given: b('Complete Accounting Cycle for New Business', 'Siklus Akuntansi Lengkap untuk Bisnis Baru'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Complete Accounting Cycle Steps', 'Langkah-langkah Siklus Akuntansi Lengkap'),
            head: [
              b('Step\nLangkah', 'Step\nLangkah'),
              b('Chapter\nBab', 'Chapter\nBab'),
              b('Description\nDeskripsi', 'Description\nDeskripsi'),
              b('Key Output\nOutput Kunci', 'Key Output\nOutput Kunci')
            ],
            rows: [
              ['1', 'Ch 1', 'Analyze 25 transactions using accounting equation\nAnalisis 25 transaksi pakai persamaan akuntansi', 'Transaction Analysis\nAnalisis Transaksi'],
              ['2', 'Ch 2', 'Journalize each transaction\nJurnalikan masing-masing', 'General Journal\nJurnal Umum'],
              ['3', 'Ch 2', 'Post to ledger accounts\nPos ke buku besar', 'Ledger Accounts\nRekening Buku Besar'],
              ['4', 'Ch 2', 'Prepare trial balance\nSiapkan neraca saldo', 'Trial Balance\nNeraca Saldo'],
              ['5', 'Ch 3', 'Make 6-8 adjusting entries\nBuat 6-8 entri penyesuaian', 'Adjusting Entries\nEntri Penyesuaian'],
              ['6', 'Ch 3', 'Prepare adjusted trial balance\nSiapkan neraca saldo disesuaikan', 'Adjusted Trial Balance\nNeraca Saldo Disesuaikan'],
              ['7', 'Ch 3', 'Prepare all 3 financial statements\nSiapkan 3 laporan keuangan', 'IS, RE, SFP\nLR, LD, LPK'],
              ['8', 'Ch 4', 'Journalize 4 closing entries\nJurnalikan 4 entri penutupan', 'Closing Entries\nEntri Penutupan'],
              ['9', 'Ch 4', 'Prepare post-closing trial balance\nSiapkan neraca saldo pasca tutup', 'Post-Closing TB\nNeraca Saldo Pasca Tutup'],
              ['10', 'Ch 4', 'Prepare 3-4 reversing entries\nSiapkan 3-4 entri pembalikan', 'Reversing Entries\nEntri Pembalikan'],
              ['11', 'Ch 4', 'Verify post-closing TB has only permanent accounts\nVerifikasi neraca pasca tutup hanya akun permanen', 'Verification\nVerifikasi']
            ],
            align: ['center', 'center', 'left', 'left'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'This capstone problem tests mastery of the entire accounting cycle. It requires: understanding the accounting equation, double-entry mechanics, adjusting entries for all four types, financial statement preparation sequence, closing process mechanics, and the purpose of reversing entries. Success demonstrates readiness for intermediate accounting.',
      'Masalah puncak ini menguji penguasaan seluruh siklus akuntansi. Memerlukan: pemahaman persamaan akuntansi, mekanika double-entry, entri penyesuaian keempat tipe, urutan penyusunan laporan keuangan, mekanika proses penutupan, dan tujuan entri pembalikan. Keberhasilan menunjukkan kesiapan untuk akuntansi menengah.'
    )
  }
];
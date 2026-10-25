import { b } from '../data/types';

export const chapter3PAndBYP = [
  // ============================================================
  // P3-1: Timing Concepts
  // ============================================================
  {
    id: 'P3-1',
    title: b('P3-1: Timing Concepts', 'P3-1: Konsep Waktu'),
    question: b(
      'Explain the following timing concepts and their impact on financial statements:\n' +
      '(a) Accrual basis vs. cash basis accounting\n' +
      '(b) Revenue recognition principle\n' +
      '(c) Expense recognition (matching) principle\n' +
      '(d) Time period assumption\n\n' +
      'Provide examples for each concept.',
      'Jelaskan konsep waktu berikut dan dampaknya pada laporan keuangan:\n' +
      '(a) Akrual basis vs. cash basis accounting\n' +
      '(b) Prinsip pengakuan pendapatan\n' +
      '(c) Prinsip pengakuan beban (pencocokan)\n' +
      '(d) Asumsi periode waktu\n\n' +
      'Berikan contoh untuk setiap konsep.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('Accrual vs Cash Basis', 'Akrual vs Kas Basis'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Accrual vs Cash Basis Comparison / Perbandingan Akrual vs Kas Basis', 'Perbandingan Akrual vs Kas Basis'),
            head: [
              b('Aspect / Aspek', 'Aspect / Aspek'),
              b('Accrual Basis / Akrual Basis', 'Accrual Basis / Akrual Basis'),
              b('Cash Basis / Kas Basis', 'Cash Basis / Kas Basis')
            ],
            rows: [
              ['Revenue Recognition / Pengakuan Pendapatan', 'When earned (service performed) / Saat diperoleh (jasa dilakukan)', 'When cash received / Saat kas diterima'],
              ['Expense Recognition / Pengakuan Beban', 'When incurred (resource consumed) / Saat timbul (sumber daya digunakan)', 'When cash paid / Saat kas dibayar'],
              ['Matching Principle / Prinsip Pencocokan', 'Followed - revenues matched with expenses / Diikuti - pendapatan dicocokkan dengan beban', 'Not followed - no matching / Tidak diikuti - tidak ada pencocokan'],
              ['GAAP/IFRS Compliance / Kepatuhan GAAP/IFRS', 'Required / Diwajibkan', 'Not permitted for external reporting / Tidak diperbolehkan untuk pelaporan eksternal']
            ],
            align: ['left', 'left', 'left'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Revenue Recognition Principle / Prinsip Pengakuan Pendapatan', 'Prinsip Pengakuan Pendapatan'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Revenue Recognition Principle / Prinsip Pengakuan Pendapatan', 'Prinsip Pengakuan Pendapatan'),
            head: [
              b('Criteria / Kriteria', 'Criteria / Kriteria'),
              b('Description / Deskripsi', 'Description / Deskripsi')
            ],
            rows: [
              ['Performance Obligation / Kewajiban Kinerja', 'Revenue recognized when obligation satisfied / Pendapatan diakui saat kewajiban terpenuhi'],
              ['Measurability / Dapat Diukur', 'Amount can be measured reliably / Jumlah bisa diukur andal'],
              ['Collectibility / Ketertagihan', 'Probable economic benefits will flow / Manfaat ekonomis mungkin mengalir'],
              ['Example / Contoh', 'Service performed Dec, paid Jan -> Recognize Dec / Jasa Des, bayar Jan -> Akui Des']
            ],
            align: ['left', 'left'],
            compact: false
          }
        ]
      },
      {
        label: '(c)',
        given: b('Matching Principle / Prinsip Pencocokan', 'Prinsip Pencocokan'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Matching Principle (Prinsip Pencocokan) / Prinsip Pencocokan', 'Prinsip Pencocokan'),
            head: [
              b('Concept / Konsep', 'Concept / Konsep'),
              b('Application / Aplikasi', 'Application / Aplikasi')
            ],
            rows: [
              ['Definition / Definisi', 'Expenses recognized in same period as revenues they help generate / Beban diakui di periode yang sama dengan pendapatan yang dibantu men-generate'],
              ['COGS / HPP', 'Matched with sales revenue in same period / Dicocokkan dengan pendapatan penjualan di periode yang sama'],
              ['Depreciation / Penyusutan', 'Matches equipment cost to periods of use / Mencocokkan biaya peralatan ke periode penggunaan'],
              ['Accrued Expenses / Beban Akrual', 'Recorded when incurred, not when paid / Dicatat saat timbul, bukan saat dibayar']
            ],
            align: ['left', 'left'],
            compact: false
          }
        ]
      },
      {
        label: '(d)',
        given: b('Time Period Assumption / Asumsi Periode Waktu', 'Asumsi Periode Waktu'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Time Period Assumption (Asumsi Periode Waktu) / Asumsi Periode Waktu', 'Asumsi Periode Waktu'),
            head: [
              b('Aspect / Aspek', 'Aspect / Aspek'),
              b('Description / Deskripsi', 'Description / Deskripsi')
            ],
            rows: [
              ['Definition / Definisi', 'Economic life divided into artificial time periods / Usia ekonomis dibagi ke periode waktu artifisial'],
              ['Periods / Periode', 'Months, quarters, years / Bulan, kuartal, tahun'],
              ['Purpose / Tujuan', 'Enables periodic reporting / Memungkinkan pelaporan berkala'],
              ['Adjusting Entries / Entri Penyesuaian', 'Required to assign revenues/expenses to correct periods / Diperlukan untuk menetapkan pendapatan/beban ke periode yg benar']
            ],
            align: ['left', 'left'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'These four concepts form the foundation of accrual accounting under IFRS. They ensure that financial statements reflect the economic reality of business activities rather than just cash flows. Understanding these is essential for proper adjusting entries.',
      'Keempat konsep ini membentuk fondasi akuntansi akrual di bawah IFRS. Mereka memastikan laporan keuangan mencerminkan realitas ekonomi aktivitas bisnis bukan hanya arus kas. Memahami ini esensial untuk entri penyesuaian yang benar.'
    )
  },

  // ============================================================
  // P3-2: Adjusting Entries Practice - All 7 Types
  // ============================================================
  {
    id: 'P3-2',
    title: b('P3-2: Adjusting Entries Practice', 'P3-2: Latihan Entri Penyesuaian'),
    question: b(
      'Prepare the necessary adjusting entries at December 31 for Yang Company:\n' +
      '1. Supplies on hand at December 31: €800. Beginning supplies €2,500. Purchases during year €4,200.\n' +
      '2. Prepaid insurance at January 1: €3,600 (24-month policy). No additional policies purchased.\n' +
      '3. Equipment cost €50,000. Estimated useful life 10 years, residual value €5,000. Straight-line depreciation.\n' +
      '4. Unearned service revenue at December 31: €1,200. Beginning balance €5,000. Cash received during year €15,000.\n' +
      '5. Salaries owed but unpaid at December 31: €2,400. (5 employees, €480 each per week, Dec 31 is Wednesday).\n' +
      '6. Interest accrued on note payable: 6% on €20,000 note, 3 months accrued.\n' +
      '7. Services performed but not billed at December 31: €3,500.',
      'Siapkan entri penyesuaian yang diperlukan pada 31 Desember untuk Perusahaan Yang:\n' +
      '1. Perlengkapan di tangan 31 Des: €800. Perlengkapan awal €2.500. Pembelian tahunan €4.200.\n' +
      '2. Asuransi dibayar dimuka 1 Jan: €3.600 (polis 24 bulan). Tidak ada polis tambahan.\n' +
      '3. Peralatan €50.000. Umur pakai 10 tahun, nilai residu €5.000. Penyusutan garis lurus.\n' +
      '4. Pendapatan jasa belum diperoleh 31 Des: €1.200. Saldo awal €5.000. Kas diterima tahunan €15.000.\n' +
      '5. Gaji yang belum dibayar 31 Des: €2.400. (5 karyawan, €480/minggu, 31 Des hari Rabu).\n' +
      '6. Bunga akrual pada catatan hutang: 6% pada catatan €20.000, 3 bulan akrual.\n' +
      '7. Jasa dilakukan tetapi belum ditagih 31 Des: €3.500.'
    ),
    parts: [
      { label: '1', given: b('Supplies Adjustment / Penyesuaian Perlengkapan', 'Penyesuaian Perlengkapan'), answer: b('', ''), blocks: [
        { type: 'table', caption: b('Supplies Adjustment Calculation / Perhitungan Penyesuaian Perlengkapan', 'Perhitungan Penyesuaian Perlengkapan'), head: [
          b('Item / Item', 'Amount (€) / Jumlah (€)'),
          ['Beginning Supplies / Perlengkapan Awal', '2,500'],
          ['Purchases / Pembelian', '4,200'],
          ['Total Available / Total Tersedia', '6,700'],
          ['Ending Supplies / Perlengkapan Akhir', '(800)'],
          ['Supplies Expense / Beban Perlengkapan', '5,900']
        ], align: ['left', 'right'], compact: false }
      ]},
      { label: '1', given: b('Supplies Adjusting Entry / Entri Penyesuaian Perlengkapan', 'Entri Penyesuaian Perlengkapan'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Supplies / Entri Penyesuaian - Perlengkapan', 'Entri Penyesuaian - Perlengkapan'), head: [
          b('Account / Akun', 'Account / Akun'),
          b('Debit / Debet', 'Debit / Debet'),
          b('Credit / Kredit', 'Credit / Kredit')
        ], rows: [
          ['Supplies Expense / Beban Perlengkapan', '5,900', ''],
          ['Supplies / Perlengkapan', '', '5,900']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '2', given: b('Prepaid Insurance: 3,600 / 24 months = 150/month × 12 months = 1,800 / Asuransi dibayar dimuka: 3.600 / 24 bulan = 150/bulan × 12 bulan = 1.800', 'Asuransi dibayar dimuka: 3.600 / 24 bulan = 150/bulan × 12 bulan = 1.800'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Prepaid Insurance / Entri Penyesuaian - Asuransi Dibayar Dimuka', 'Entri Penyesuaian - Asuransi Dibayar Dimuka'), head: [
          b('Account / Akun', 'Account / Akun'),
          b('Debit / Debet', 'Debit / Debet'),
          b('Credit / Kredit', 'Credit / Kredit')
        ], rows: [
          ['Insurance Expense / Beban Asuransi', '1,800', ''],
          ['Prepaid Insurance / Asuransi Dibayar Dimuka', '', '1,800']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '3', given: b('Depreciation: (50,000 - 5,000) / 10 = 4,500/year / Penyusutan: (50.000 - 5.000) / 10 = 4.500/tahun', 'Penyusutan: (50.000 - 5.000) / 10 = 4.500/tahun'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Depreciation / Entri Penyesuaian - Penyusutan', 'Entri Penyesuaian - Penyusutan'), head: [
          b('Account / Akun', 'Account / Akun'),
          b('Debit / Debet', 'Debit / Debet'),
          b('Credit / Kredit', 'Credit / Kredit')
        ], rows: [
          ['Depreciation Expense / Beban Penyusutan', '4,500', ''],
          ['Accumulated Depreciation / Akumulasi Penyusutan', '', '4,500']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '4', given: b('Unearned Revenue: Beg 5,000 + Received 15,000 - End 1,200 = Earned 18,800 / Pendapatan blm diperoleh: Awal 5.000 + Diterima 15.000 - Akhir 1.200 = Diperoleh 18.800', 'Pendapatan blm diperoleh: Awal 5.000 + Diterima 15.000 - Akhir 1.200 = Diperoleh 18.800'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Unearned Revenue / Entri Penyesuaian - Pendapatan Belum Diperoleh', 'Entri Penyesuaian - Pendapatan Belum Diperoleh'), head: [
          b('Account / Akun', 'Account / Akun'),
          b('Debit / Debet', 'Debit / Debet'),
          b('Credit / Kredit', 'Credit / Kredit')
        ], rows: [
          ['Unearned Service Revenue / Pendapatan Jasa Blm Diperoleh', '18,800', ''],
          ['Service Revenue / Pendapatan Jasa', '', '18,800']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '5', given: b('Accrued Salaries: 5 employees × €480/week × 3 days (Mon-Wed) = 5 × 480 × 3/5 = 1,440 / Gaji akrual: 5 karyawan × €480/minggu × 3 hari (Sen-Rab) = 5 × 480 × 3/5 = 1.440', 'Gaji akrual: 5 karyawan × €480/minggu × 3 hari (Sen-Rab) = 5 × 480 × 3/5 = 1.440'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Accrued Salaries / Entri Penyesuaian - Gaji Akrual', 'Entri Penyesuaian - Gaji Akrual'), head: [
          b('Account / Akun', 'Account / Akun'),
          b('Debit / Debet', 'Debit / Debet'),
          b('Credit / Kredit', 'Credit / Kredit')
        ], rows: [
          ['Salaries Expense / Beban Gaji', '1,440', ''],
          ['Salaries Payable / Gaji Bayar', '', '1,440']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '6', given: b('Accrued Interest: 20,000 × 6% × 3/12 = 300 / Bunga akrual: 20.000 × 6% × 3/12 = 300', 'Bunga akrual: 20.000 × 6% × 3/12 = 300'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Accrued Interest / Entri Penyesuaian - Bunga Akrual', 'Entri Penyesuaian - Bunga Akrual'), head: [
          b('Account / Akun', 'Account / Akun'),
          b('Debit / Debet', 'Debit / Debet'),
          b('Credit / Kredit', 'Credit / Kredit')
        ], rows: [
          ['Interest Expense / Beban Bunga', '300', ''],
          ['Interest Payable / Bunga Bayar', '', '300']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '7', given: b('Accrued Revenue: Services performed but not billed €3,500 / Pendapatan akrual: Jasa dilakukan tapi belum ditagih €3.500', 'Pendapatan akrual: Jasa dilakukan tapi belum ditagih €3.500'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Accrued Revenue / Entri Penyesuaian - Pendapatan Akrual', 'Entri Penyesuaian - Pendapatan Akrual'), head: [
          b('Account / Akun', 'Account / Akun'),
          b('Debit / Debet', 'Debit / Debet'),
          b('Credit / Kredit', 'Credit / Kredit')
        ], rows: [
          ['Accounts Receivable / Piutang Usaha', '3,500', ''],
          ['Service Revenue / Pendapatan Jasa', '', '3,500']
        ], align: ['left', 'right', 'right'], compact: false }
      ]}
    ],
    explanation: b(
      'This problem covers all four types of adjusting entries: (1) Prepaid expenses (supplies, insurance), (2) Unearned revenues, (3) Accrued expenses (salaries, interest), (4) Accrued revenues. Each adjusting entry involves one balance sheet account and one income statement account. Cash is never involved in adjusting entries.',
      'Masalah ini mencakup keempat jenis entri penyesuaian: (1) Beban dibayar di muka (perlengkapan, asuransi), (2) Pendapatan belum diperoleh, (3) Beban akrual (gaji, bunga), (4) Pendapatan akrual. Setiap entri penyesuaian melibatkan satu akun neraca saldo dan satu akun laporan laba rugi. Kas tidak pernah terlibat dalam entri penyesuaian.'
    )
  },

  // ============================================================
  // P3-3: Financial Statements from Adjusted Trial Balance
  // ============================================================
  {
    id: 'P3-3',
    title: b('P3-3: Financial Statements from Adjusted TB', 'P3-3: Laporan Keuangan dari Neraca Saldo Disesuaikan'),
    question: b(
      'The adjusted trial balance of Chen Company at December 31, 2017 is shown below. Prepare the income statement, retained earnings statement, and statement of financial position.\n\n' +
      'Adjusted Trial Balance, Dec 31, 2017:\n' +
      'Cash €12,000 | Accounts Receivable €8,500 | Supplies €2,500 | Prepaid Insurance €1,200\n' +
      'Equipment €40,000 | Accumulated Depreciation €12,000\n' +
      'Accounts Payable €5,000 | Salaries Payable €1,200 | Interest Payable €300\n' +
      'Unearned Service Revenue €2,000 | Notes Payable €20,000\n' +
      'Share Capital €30,000 | Retained Earnings €15,000 | Dividends €4,000\n' +
      'Service Revenue €45,000 | Salaries Expense €18,000 | Rent Expense €12,000\n' +
      'Insurance Expense €1,500 | Depreciation Expense €4,000 | Utilities Expense €3,000\n' +
      'Interest Expense €600 | Supplies Expense €1,200\n\n' +
      'Instructions:\n' +
      '(a) Prepare an income statement for the year.\n' +
      '(b) Prepare a retained earnings statement.\n' +
      '(c) Prepare a statement of financial position at December 31.\n' +
      '(d) Prepare the closing entries.',
      'Neraca saldo disesuaikan Perusahaan Chen pada 31 Des 2017 ditunjukkan di bawah. Siapkan laporan laba rugi, laporan laba ditahan, dan laporan posisi keuangan.\n\n' +
      'Neraca Saldo Disesuaikan, 31 Des 2017:\n' +
      'Kas €12.000 | Piutang Usaha €8.500 | Perlengkapan €2.500 | Asuransi Dibayar Dimuka €1.200\n' +
      'Peralatan €40.000 | Akumulasi Penyusutan €12.000\n' +
      'Hutang Usaha €5.000 | Gaji Bayar €1.200 | Bunga Bayar €300\n' +
      'Pendapatan Jasa Blm Diperoleh €2.000 | Catatan Hutang €20.000\n' +
      'Modal Saham €30.000 | Laba Ditahan €15.000 | Dividen €4.000\n' +
      'Pendapatan Jasa €45.000 | Beban Gaji €18.000 | Beban Sewa €12.000\n' +
      'Beban Asuransi €1.500 | Beban Penyusutan €4.000 | Beban Utilitas €3.000\n' +
      'Beban Bunga €600 | Beban Perlengkapan €1.200\n\n' +
      'Instruksi:\n' +
      '(a) Siapkan laporan laba rugi untuk tahun tersebut.\n' +
      '(b) Siapkan laporan laba ditahan.\n' +
      '(c) Siapkan laporan posisi keuangan pada 31 Desember.\n' +
      '(d) Siapkan entri penutupan.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('Income Statement from Adjusted TB / Laporan Laba Rugi dari Neraca Saldo Disesuaikan', 'Laporan Laba Rugi dari Neraca Saldo Disesuaikan'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Income Statement - Chen Company (Year Ended Dec 31, 2017) / Laporan Laba Rugi - Perusahaan Chen (Tahun Berakhir 31 Des 2017)', 'Laporan Laba Rugi - Perusahaan Chen (Tahun Berakhir 31 Des 2017)'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (€) / Jumlah (€)', 'Jumlah (€) / Jumlah (€)')
            ],
            rows: [
              ['Service Revenue / Pendapatan Jasa', '45,000'],
              ['Expenses / Beban:', ''],
              ['  Salaries Expense / Beban Gaji', '18,000'],
              ['  Rent Expense / Beban Sewa', '12,000'],
              ['  Insurance Expense / Beban Asuransi', '1,500'],
              ['  Depreciation Expense / Beban Penyusutan', '4,000'],
              ['  Utilities Expense / Beban Utilitas', '3,000'],
              ['  Interest Expense / Beban Bunga', '600'],
              ['  Supplies Expense / Beban Perlengkapan', '1,200'],
              ['Total Expenses / Total Beban', '23,700'],
              ['NET INCOME / LABA BERSIH', '21,300']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Retained Earnings Statement / Laporan Laba Ditahan', 'Laporan Laba Ditahan'),
        blocks: [
          {
            type: 'table',
            caption: b('Retained Earnings Statement - Chen Company (Year Ended Dec 31, 2017) / Laporan Laba Ditahan - Perusahaan Chen (Tahun Berakhir 31 Des 2017)', 'Laporan Laba Ditahan - Perusahaan Chen (Tahun Berakhir 31 Des 2017)'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (€) / Jumlah (€)', 'Jumlah (€) / Jumlah (€)')
            ],
            rows: [
              ['Retained Earnings, Jan 1 / Laba Ditahan, 1 Jan', '15,000'],
              ['Add: Net Income / Tambah: Laba Bersih', '21,300'],
              ['Less: Dividends / Kurang: Dividen', '4,000'],
              ['Retained Earnings, Dec 31 / Laba Ditahan, 31 Des', '32,300']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(c)',
        given: b('Statement of Financial Position / Laporan Posisi Keuangan', 'Laporan Posisi Keuangan'),
        blocks: [
          {
            type: 'table',
            caption: b('Statement of Financial Position - December 31, 2017 / Laporan Posisi Keuangan - 31 Desember 2017', 'Laporan Posisi Keuangan - 31 Desember 2017'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (€) / Jumlah (€)', 'Jumlah (€) / Jumlah (€)')
            ],
            rows: [
              ['ASSETS / ASET', ''],
              ['  Cash / Kas', '12,000'],
              ['  Accounts Receivable / Piutang Usaha', '8,500'],
              ['  Supplies / Perlengkapan', '2,500'],
              ['  Prepaid Insurance / Asuransi Dibayar Dimuka', '1,200'],
              ['  Equipment / Peralatan', '40,000'],
              ['  Accumulated Depreciation / Akumulasi Penyusutan', '-12,000'],
              ['Total Assets / Total Aset', '52,200'],
              ['LIABILITIES & EQUITY / LIABILITAS & EKUITAS', ''],
              ['  Accounts Payable / Hutang Usaha', '5,000'],
              ['  Salaries Payable / Gaji Bayar', '1,200'],
              ['  Interest Payable / Bunga Bayar', '300'],
              ['  Unearned Service Revenue / Pendapatan Jasa Blm Diperoleh', '2,000'],
              ['  Notes Payable / Catatan Hutang', '20,000'],
              ['Total Liabilities / Total Liabilitas', '28,500'],
              ['  Share Capital / Modal Saham', '30,000'],
              ['  Retained Earnings / Laba Ditahan', '32,300'],
              ['Total Equity / Total Ekuitas', '32,300'],
              ['Total L & E / Total L & E', '60,800']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(d)',
        given: b('Closing Entries from Adjusted TB / Entri Penutupan dari Neraca Saldo Disesuaikan', 'Entri Penutupan dari Neraca Saldo Disesuaikan'),
        blocks: [
          {
            type: 'table',
            caption: b('Closing Entries - Chen Company / Entri Penutupan - Perusahaan Chen', 'Entri Penutupan - Perusahaan Chen'),
            head: [
              b('Account / Akun', 'Account / Akun'),
              b('Debit / Debet', 'Debit / Debet'),
              b('Credit / Kredit', 'Credit / Kredit')
            ],
            rows: [
              ['Service Revenue / Pendapatan Jasa', '45,000', ''],
              ['Income Summary / Ikhtisar Laba Rugi', '', '45,000'],
              ['Income Summary / Ikhtisar Laba Rugi', '23,700', ''],
              ['Salaries Expense / Beban Gaji', '', '18,000'],
              ['Rent Expense / Beban Sewa', '', '12,000'],
              ['Insurance Expense / Beban Asuransi', '', '1,500'],
              ['Depreciation Expense / Beban Penyusutan', '', '4,000'],
              ['Utilities Expense / Beban Utilitas', '', '3,000'],
              ['Interest Expense / Beban Bunga', '', '600'],
              ['Supplies Expense / Beban Perlengkapan', '', '1,200'],
              ['Income Summary / Ikhtisar Laba Rugi', '21,300', ''],
              ['Retained Earnings / Laba Ditahan', '', '21,300'],
              ['Retained Earnings / Laba Ditahan', '4,000', ''],
              ['Dividends / Dividen', '', '4,000']
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'Financial statements are prepared from the adjusted trial balance in sequence: (1) Income Statement determines net income, (2) Retained Earnings Statement uses net income to compute ending RE, (3) Statement of Financial Position uses ending RE. Closing entries zero out temporary accounts (revenue, expense, dividends) and transfer net income to Retained Earnings. The four closing entries are: close revenues to IS, close expenses to IS, close IS to RE, close dividends to RE.',
      'Laporan keuangan disusun dari neraca saldo disesuaikan berurutan: (1) Laporan Laba Rugi menentukan laba bersih, (2) Laporan Laba Ditahan menggunakan laba bersih menghitung LD akhir, (3) Laporan Posisi Keuangan menggunakan LD akhir. Entri penutupan mengosongkan akun sementara (pendapatan, beban, dividen) dan mentransfer laba bersih ke Laba Ditahan. Empat entri penutupan: tutup pendapatan ke IS, tutup beban ke IS, tutup IS ke LD, tutup dividen ke LD.'
    )
  },

  // ============================================================
  // BYP3-1: Lafaye Adjusting Entries
  // ============================================================
  {
    id: 'BYP3-1',
    title: b('BYP3-1: Lafaye Adjusting Entries', 'BYP3-1: Entri Penyesuaian Lafaye'),
    question: b(
      'Lafaye SA has the following adjusting entry situations at December 31:\n' +
      '1. Salaries of €3,500 are earned but unpaid.\n' +
      '2. Depreciation on equipment is €2,800.\n' +
      '3. Supplies on hand €600. Beginning €2,000, purchases €4,500.\n' +
      '4. Unearned revenue €1,200 earned this period.\n' +
      '5. Accrued interest expense €400.\n' +
      '6. Services performed €3,000 not yet billed.\n\n' +
      'Instructions: Prepare all adjusting entries.',
      'Lafaye SA memiliki situasi penyesuaian berikut pada 31 Des:\n' +
      '1. Gaji €3.500 sudah diperoleh tapi belum dibayar.\n' +
      '2. Penyusutan peralatan €2.800.\n' +
      '3. Perlengkapan di tangan €600. Awal €2.000, pembelian €4.500.\n' +
      '4. Pendapatan belum diperoleh €1.200 sudah diperoleh periode ini.\n' +
      '5. Beban bunga akrual €400.\n' +
      '6. Jasa €3.000 sudah dilakukan belum ditagih.\n\n' +
      'Instruksi: Siapkan semua entri penyesuaian.'
    ),
    parts: [
      {
        label: '',
        given: b('6 Adjusting Entry Situations / 6 Situasi Entri Penyesuaian', '6 Situasi Entri Penyesuaian'),
        blocks: [
          {
            type: 'table',
            caption: b('Adjusting Entries - Lafaye SA / Entri Penyesuaian - Lafaye SA', 'Entri Penyesuaian - Lafaye SA'),
            head: [
              b('Account / Akun', 'Account / Akun'),
              b('Debit / Debet', 'Debit / Debet'),
              b('Credit / Kredit', 'Credit / Kredit')
            ],
            rows: [
              ['Salaries Expense / Beban Gaji', '3,500', ''],
              ['Salaries Payable / Gaji Bayar', '', '3,500'],
              ['Depreciation Expense / Beban Penyusutan', '2,800', ''],
              ['Accumulated Depreciation / Akumulasi Penyusutan', '', '2,800'],
              ['Supplies Expense / Beban Perlengkapan', '4,400', ''],
              ['Supplies / Perlengkapan', '', '4,400'],
              ['Unearned Revenue / Pendapatan Blm Diperoleh', '1,200', ''],
              ['Service Revenue / Pendapatan Jasa', '', '1,200'],
              ['Interest Expense / Beban Bunga', '400', ''],
              ['Interest Payable / Bunga Bayar', '', '400'],
              ['Accounts Receivable / Piutang Usaha', '3,000', ''],
              ['Service Revenue / Pendapatan Jasa', '', '3,000']
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'This problem reviews all four categories of adjusting entries. Remember: Cash is never in an adjusting entry. Each entry pairs a balance sheet account with an income statement account. The goal is to match revenues and expenses to the correct period per the matching principle.',
      'Masalah ini meninjau keempat kategori entri penyesuaian. Ingat: Kas tidak pernah ada di entri penyesuaian. Setiap entri memasangkan akun neraca saldo dengan akun laporan laba rugi. Tujuannya mencocokkan pendapatan dan beban ke periode yang benar per prinsip pencocokan.'
    )
  },

  // ============================================================
  // BYP3-2: Pegasus Computer Services
  // ============================================================
  {
    id: 'BYP3-2',
    title: b('BYP3-2: Pegasus Computer Services', 'BYP3-2: Pegasus Computer Services'),
    question: b(
      'Pegasus Computer Services has the following trial balance at December 31, 2017:\n' +
      'Cash €15,000; Accounts Receivable €8,000; Supplies €2,000; Equipment €30,000;\n' +
      'Accumulated Depreciation €8,000; Accounts Payable €5,000; Notes Payable €10,000;\n' +
      'Share Capital €20,000; Retained Earnings €10,000; Dividends €5,000;\n' +
      'Service Revenue €60,000; Salaries Expense €25,000; Rent Expense €12,000;\n' +
      'Utilities Expense €4,000; Advertising Expense €2,000; Insurance Expense €3,000.\n\n' +
      'Adjusting data at December 31:\n' +
      '1. Supplies on hand €800.\n' +
      '2. Depreciation on equipment €3,000.\n' +
      '3. Accrued salaries €1,500.\n' +
      '4. Prepaid insurance expired €1,200.\n' +
      '5. Interest accrued on notes payable €400.\n\n' +
      'Instructions: (a) Prepare adjusting entries. (b) Prepare adjusted trial balance. (c) Prepare financial statements.',
      'Pegasus Computer Services memiliki neraca saldo berikut 31 Des 2017:\n' +
      'Kas €15.000; Piutang Usaha €8.000; Perlengkapan €2.000; Peralatan €30.000;\n' +
      'Akum Penyusutan €8.000; Hutang Usaha €5.000; Catatan Hutang €10.000;\n' +
      'Modal Saham €20.000; Laba Ditahan €10.000; Dividen €5.000;\n' +
      'Pendapatan Jasa €60.000; Beban Gaji €25.000; Beban Sewa €12.000;\n' +
      'Beban Utilitas €4.000; Beban Iklan €2.000; Beban Asuransi €3.000.\n\n' +
      'Data penyesuaian 31 Des:\n' +
      '1. Perlengkapan di tangan €800.\n' +
      '2. Penyusutan peralatan €3.000.\n' +
      '3. Gaji akrual €1.500.\n' +
      '4. Asuransi dibayar dimuka habis €1.200.\n' +
      '5. Bunga akrual pada catatan hutang €400.\n\n' +
      'Instruksi: (a) Siapkan entri penyesuaian. (b) Siapkan neraca saldo disesuaikan. (c) Siapkan laporan keuangan.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('5 Adjusting Entries Needed / 5 Entri Penyesuaian Diperlukan', '5 Entri Penyesuaian Diperlukan'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Adjusting Entries - Pegasus Computer Services / Entri Penyesuaian - Pegasus Computer Services', 'Entri Penyesuaian - Pegasus Computer Services'),
            head: [
              b('Account / Akun', 'Account / Akun'),
              b('Debit / Debet', 'Debit / Debet'),
              b('Credit / Kredit', 'Credit / Kredit')
            ],
            rows: [
              ['Supplies Expense / Beban Perlengkapan', '1,200', ''],
              ['Supplies / Perlengkapan', '', '1,200'],
              ['Depreciation Expense / Beban Penyusutan', '3,000', ''],
              ['Accumulated Depreciation / Akumulasi Penyusutan', '', '3,000'],
              ['Salaries Expense / Beban Gaji', '1,500', ''],
              ['Salaries Payable / Gaji Bayar', '', '1,500'],
              ['Insurance Expense / Beban Asuransi', '1,200', ''],
              ['Prepaid Insurance / Asuransi Dibayar Dimuka', '', '1,200'],
              ['Interest Expense / Beban Bunga', '400', ''],
              ['Interest Payable / Bunga Bayar', '', '400']
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(c)',
        given: b('Prepare Financial Statements from Adjusted TB / Siapkan Laporan Keuangan dari Neraca Saldo Disesuaikan', 'Siapkan Laporan Keuangan dari Neraca Saldo Disesuaikan'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Income Statement - Pegasus Computer Services / Laporan Laba Rugi - Pegasus Computer Services', 'Laporan Laba Rugi - Pegasus Computer Services'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (€) / Jumlah (€)', 'Jumlah (€) / Jumlah (€)')
            ],
            rows: [
              ['Service Revenue / Pendapatan Jasa', '60,000'],
              ['Expenses / Beban:', ''],
              ['  Salaries Expense / Beban Gaji', '26,500'],
              ['  Rent Expense / Beban Sewa', '12,000'],
              ['  Utilities Expense / Beban Utilitas', '4,000'],
              ['  Advertising Expense / Beban Iklan', '2,000'],
              ['  Insurance Expense / Beban Asuransi', '4,200'],
              ['  Depreciation Expense / Beban Penyusutan', '3,000'],
              ['  Interest Expense / Beban Bunga', '400'],
              ['Total Expenses / Total Beban', '49,700'],
              ['NET INCOME / LABA BERSIH', '10,300']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'This problem integrates adjusting entries with financial statement preparation. The adjusted trial balance is the key link - all adjustments must be posted before financial statements are prepared. Net income flows from income statement to retained earnings statement to statement of financial position.',
      'Masalah ini mengintegrasikan entri penyesuaian dengan penyusunan laporan keuangan. Neraca saldo disesuaikan adalah kunci utama - semua penyesuaian harus diposting sebelum laporan keuangan disusun. Laba bersih mengalir dari laporan laba rugi ke laporan laba ditahan ke laporan posisi keuangan.'
    )
  },

  // ============================================================
  // BYP3-3: Natal Co. Quarterly
  // ============================================================
  {
    id: 'BYP3-3',
    title: b('BYP3-3: Natal Co. Quarterly', 'BYP3-3: Natal Co. Triwulanan'),
    question: b(
      'Natal Co. prepares quarterly financial statements. At March 31, the following adjustments are needed:\n' +
      '1. Supplies used during quarter: €1,200.\n' +
      '2. Depreciation for quarter: €2,500.\n' +
      '3. Accrued interest on note payable: €600.\n' +
      '4. Services performed but not billed: €4,000.\n' +
      '5. Prepaid rent expired: €3,000.\n' +
      '6. Unearned revenue earned: €2,500.\n\n' +
      'Instructions: (a) Prepare adjusting entries. (b) Discuss how quarterly adjustments differ from annual adjustments.',
      'Natal Co. menyusun laporan keuangan triwulanan. Pada 31 Maret, penyesuaian berikut diperlukan:\n' +
      '1. Perlengkapan digunakan kuartal: €1.200.\n' +
      '2. Penyusutan kuartal: €2.500.\n' +
      '3. Bunga akrual catatan hutang: €600.\n' +
      '4. Jasa dilakukan belum ditagih: €4.000.\n' +
      '5. Sewa dibayar dimuka habis: €3.000.\n' +
      '6. Pendapatan blm diperoleh sudah diperoleh: €2.500.\n\n' +
      'Instruksi: (a) Siapkan entri penyesuaian. (b) Diskusikan perbedaan penyesuaian kuartal vs tahunan.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('6 Quarterly Adjusting Entries / 6 Entri Penyesuaian Triwulanan', '6 Entri Penyesuaian Triwulanan'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Quarterly Adjusting Entries - Natal Co. / Entri Penyesuaian Triwulanan - Natal Co.', 'Entri Penyesuaian Triwulanan - Natal Co.'),
            head: [
              b('Account / Akun', 'Account / Akun'),
              b('Debit / Debet', 'Debit / Debet'),
              b('Credit / Kredit', 'Credit / Kredit')
            ],
            rows: [
              ['Supplies Expense / Beban Perlengkapan', '1,200', ''],
              ['Supplies / Perlengkapan', '', '1,200'],
              ['Depreciation Expense / Beban Penyusutan', '2,500', ''],
              ['Accumulated Depreciation / Akumulasi Penyusutan', '', '2,500'],
              ['Interest Expense / Beban Bunga', '600', ''],
              ['Interest Payable / Bunga Bayar', '', '600'],
              ['Accounts Receivable / Piutang Usaha', '4,000', ''],
              ['Service Revenue / Pendapatan Jasa', '', '4,000'],
              ['Rent Expense / Beban Sewa', '3,000', ''],
              ['Prepaid Rent / Sewa Dibayar Dimuka', '', '3,000'],
              ['Unearned Revenue / Pendapatan Blm Diperoleh', '2,500', ''],
              ['Service Revenue / Pendapatan Jasa', '', '2,500']
            ],
            align: ['left', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Quarterly vs Annual Adjustments Discussion / Diskusi Penyesuaian Triwulanan vs Tahunan', 'Diskusi Penyesuaian Triwulanan vs Tahunan'),
        answer: b('Quarterly adjustments: Use 3-month periods for accruals/deferrals. Depreciation = annual/4. Accruals based on 3-month activity. More frequent but smaller amounts. Requires more estimation for partial periods. Annual adjustments: Use full year. Less frequent but larger amounts. More accurate for items like physical inventory counts. Both follow same principles but quarterly requires more interim estimates.', 'Penyesuaian triwulanan: Gunakan periode 3 bulan untuk akrual/tangguhan. Penyusutan = tahunan/4. Akrual berdasarkan aktivitas 3 bulan. Lebih sering tapi jumlah lebih kecil. Memerlukan lebih banyak estimasi untuk periode parsial. Penyesuaian tahunan: Gunakan tahun penuh. Lebih jarang tapi jumlah lebih besar. Lebih akurat untuk item seperti penghitungan inventaris fisik. Keduanya mengikuti prinsip sama tapi triwulanan butuh lebih banyak estimasi interim.')
      }
    ],
    explanation: b(
      'Quarterly financial statements require the same adjusting entry principles as annual statements, but with shorter time periods. This means more frequent estimates and smaller adjustment amounts. The matching principle applies equally - revenues and expenses must be matched to the quarter they relate to.',
      'Laporan keuangan triwulanan memerlukan prinsip entri penyesuaian yang sama seperti laporan tahunan, tapi dengan periode waktu lebih pendek. Artinya estimasi lebih sering dan jumlah penyesuaian lebih kecil. Prinsip pencocokan berlaku sama - pendapatan dan beban harus dicocokkan ke kuartal yang berkaitan.'
    )
  },

  // ============================================================
  // BYP3-4: Comprehensive Chapter 3
  // ============================================================
  {
    id: 'BYP3-4',
    title: b('BYP3-4: Comprehensive Chapter 3', 'BYP3-4: Komprehensif Bab 3'),
    question: b(
      'Comprehensive problem covering all Chapter 3 concepts: Timing concepts, adjusting entries (4 types), adjusted trial balance, financial statements from adjusted TB, and the relationship between adjusting entries and financial statement quality.',
      'Masalah komprehensif mencakup semua konsep Bab 3: Konsep waktu, entri penyesuaian (4 tipe), neraca saldo disesuaikan, laporan keuangan dari neraca saldo disesuaikan, dan hubungan entri penyesuaian dengan kualitas laporan keuangan.'
    ),
    parts: [
      {
        label: '',
        given: b('Full Chapter 3 Review / Ulasan Penuh Bab 3', 'Ulasan Penuh Bab 3'),
        answer: b('Key concepts: (1) Accrual vs cash basis - accrual matches revenues/expenses to period. (2) Revenue recognition - when earned, not when cash received. (3) Matching principle - expenses matched to revenues they generate. (4) Four adjusting entry types: prepaid expenses, unearned revenues, accrued expenses, accrued revenues. (5) Adjusted trial balance verifies equality after adjustments. (6) Financial statements prepared in order: IS → RE → SFP. (7) Quality of earnings depends on proper accruals - aggressive accruals can manipulate earnings.', 'Konsep kunci: (1) Akrual vs kas basis - akrual mencocokkan pendapatan/beban ke periode. (2) Pengakuan pendapatan - saat diperoleh, bukan saat kas diterima. (3) Prinsip pencocokan - beban dicocokkan ke pendapatan yang di-generate. (4) 4 tipe entri penyesuaian: beban dibayar dimuka, pendapatan blm diperoleh, beban akrual, pendapatan akrual. (5) Neraca saldo disesuaikan verifikasi keseimbangan setelah penyesuaian. (6) Laporan keuangan urutan: LR → LD → LPK. (7) Kualitas laba bergantung pada akrual yang benar - akrual agresif bisa memanipulasi laba.')
      }
    ],
    explanation: b(
      'Chapter 3 is the heart of accrual accounting. Understanding the four types of adjusting entries and their impact on financial statement quality is critical. The matching principle drives all adjusting entries - ensuring revenues and expenses are reported in the correct period. This is the foundation for reliable financial reporting under IFRS.',
      'Bab 3 adalah jantung akuntansi akrual. Memahami empat jenis entri penyesuaian dan dampaknya pada kualitas laporan keuangan adalah kritis. Prinsip pencocokan mendorong semua entri penyesuaian - memastikan pendapatan dan beban dilaporkan di periode yang benar. Ini fondasi pelaporan keuangan andal di bawah IFRS.'
    )
  }
];
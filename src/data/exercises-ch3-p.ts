import { b } from '../data/types';

// P-type and BYP-type exercises for Chapter 3
// Extracted from PDF Pages 41-60 (approx)

export const chapter3PAndBYP = [
  // P-type exercises for Chapter 3
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
      { label: '(a)', given: b('Accrual vs cash basis', 'Akrual vs kas basis'), answer: b('Accrual basis: Revenues recognized when earned, expenses when incurred (regardless of cash flow). Cash basis: Revenues when cash received, expenses when cash paid. Accrual provides better matching of revenues and expenses to the period they relate to.', 'Akrual basis: Pendapatan diakui saat diperoleh, beban saat timbul (terlepas dari arus kas). Kas basis: Pendapatan saat kas diterima, beban saat kas dibayar. Akrual memberikan pencocokan yang lebih baik antara pendapatan dan beban ke periode terkait.') },
      { label: '(b)', given: b('Revenue recognition principle', 'Prinsip pengakuan pendapatan'), answer: b('Revenue is recognized when: (1) performance obligation is satisfied, (2) amount can be measured reliably, (3) probable economic benefits will flow. Example: Service performed in December but paid in January - recognize revenue in December.', 'Pendapatan diakui ketika: (1) kewajiban kinerja terpenuhi, (2) jumlah bisa diukur andal, (3) manfaat ekonomis mungkin mengalir. Contoh: Jasa dilakukan Desember dibayar Januari - akui pendapatan Desember.') },
      { label: '(c)', given: b('Matching principle', 'Prinsip pencocokan'), answer: b('Expenses recognized in the same period as the revenues they help generate. Example: Cost of goods sold matched with sales revenue in same period. Depreciation matches equipment cost to periods of use.', 'Beban diakui di periode yang sama dengan pendapatan yang dibantu men-generate. Contoh: HPP dicocokkan dengan pendapatan penjualan di periode yang sama. Penyusutan mencocokkan biaya peralatan ke periode penggunaan.') },
      { label: '(d)', given: b('Time period assumption', 'Asumsi periode waktu'), answer: b('Economic life of a business can be divided into artificial time periods (months, quarters, years) for reporting purposes. Enables periodic financial statements but requires adjusting entries to properly assign revenues/expenses to correct periods.', 'Usia ekonomis bisnis bisa dibagi ke periode waktu artifisial (bulan, kuartal, tahun) untuk pelaporan. Memungkinkan laporan keuangan berkala tetapi memerlukan entri penyesuaian untuk menetapkan pendapatan/beban ke periode yang benar.') }
    ],
    explanation: b(
      'These four concepts form the foundation of accrual accounting under IFRS. They ensure that financial statements reflect the economic reality of business activities rather than just cash flows. Understanding these is essential for proper adjusting entries.',
      'Keempat konsep ini membentuk fondasi akuntansi akrual di bawah IFRS. Mereka memastikan laporan keuangan mencerminkan realitas ekonomi aktivitas bisnis bukan hanya arus kas. Memahami ini esensial untuk entri penyesuaian yang benar.'
    )
  },
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
      { label: '1', given: b('Supplies adjustment: Beginning 2,500 + Purchases 4,200 - Ending 800 = Expense 5,900', 'Penyesuaian perlengkapan: Awal 2.500 + Pembelian 4.200 - Akhir 800 = Beban 5.900'), answer: b('Supplies Expense 5,900 / Supplies 5,900', 'Beban Perlengkapan 5.900 / Perlengkapan 5.900') },
      { label: '1', given: b('Supplies Adjusting Entry', 'Entri Penyesuaian Perlengkapan'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Supplies', 'Entri Penyesuaian - Perlengkapan'), head: [
          b('Account\nAkun', 'Account\nAkun'),
          b('Debit\nDebet', 'Debit\nDebet'),
          b('Credit\nKredit', 'Credit\nKredit')
        ], rows: [
          ['Supplies Expense\nBeban Perlengkapan', '5,900', ''],
          ['Supplies\nPerlengkapan', '', '5,900']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '2', given: b('Prepaid insurance: 3,600 / 24 months = 150/month × 12 months = 1,800', 'Asuransi dibayar dimuka: 3.600 / 24 bulan = 150/bulan × 12 bulan = 1.800'), answer: b('Insurance Expense 1,800 / Prepaid Insurance 1,800', 'Beban Asuransi 1.800 / Asuransi Dibayar Dimuka 1.800') },
      { label: '2', given: b('Prepaid Insurance Adjusting Entry', 'Entri Penyesuaian Asuransi Dibayar Dimuka'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Prepaid Insurance', 'Entri Penyesuaian - Asuransi Dibayar Dimuka'), head: [
          b('Account\nAkun', 'Account\nAkun'),
          b('Debit\nDebet', 'Debit\nDebet'),
          b('Credit\nKredit', 'Credit\nKredit')
        ], rows: [
          ['Insurance Expense\nBeban Asuransi', '1,800', ''],
          ['Prepaid Insurance\nAsuransi Dibayar Dimuka', '', '1,800']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '3', given: b('Depreciation: (50,000 - 5,000) / 10 = 4,500/year', 'Penyusutan: (50.000 - 5.000) / 10 = 4.500/tahun'), answer: b('Depreciation Expense 4,500 / Accumulated Depreciation 4,500', 'Beban Penyusutan 4.500 / Akumulasi Penyusutan 4.500') },
      { label: '3', given: b('Depreciation Adjusting Entry', 'Entri Penyesuaian Penyusutan'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Depreciation', 'Entri Penyesuaian - Penyusutan'), head: [
          b('Account\nAkun', 'Account\nAkun'),
          b('Debit\nDebet', 'Debit\nDebet'),
          b('Credit\nKredit', 'Credit\nKredit')
        ], rows: [
          ['Depreciation Expense\nBeban Penyusutan', '4,500', ''],
          ['Accumulated Depreciation\nAkumulasi Penyusutan', '', '4,500']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '4', given: b('Unearned revenue: Beg 5,000 + Received 15,000 - End 1,200 = Earned 18,800', 'Pendapatan blm diperoleh: Awal 5.000 + Diterima 15.000 - Akhir 1.200 = Diperoleh 18.800'), answer: b('Unearned Service Revenue 18,800 / Service Revenue 18,800', 'Pendapatan Jasa Blm Diperoleh 18.800 / Pendapatan Jasa 18.800') },
      { label: '4', given: b('Unearned Revenue Adjusting Entry', 'Entri Penyesuaian Pendapatan Belum Diperoleh'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Unearned Revenue', 'Entri Penyesuaian - Pendapatan Belum Diperoleh'), head: [
          b('Account\nAkun', 'Account\nAkun'),
          b('Debit\nDebet', 'Debit\nDebet'),
          b('Credit\nKredit', 'Credit\nKredit')
        ], rows: [
          ['Unearned Service Revenue\nPendapatan Jasa Blm Diperoleh', '18,800', ''],
          ['Service Revenue\nPendapatan Jasa', '', '18,800']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '5', given: b('Accrued salaries: 5 employees × €480/week × 3 days (Mon-Wed) = 5 × 480 × 3/5 = 1,440', 'Gaji akrual: 5 karyawan × €480/minggu × 3 hari (Sen-Rab) = 5 × 480 × 3/5 = 1.440'), answer: b('Salaries Expense 1,440 / Salaries Payable 1,440', 'Beban Gaji 1.440 / Gaji Bayar 1.440') },
      { label: '5', given: b('Accrued Salaries Adjusting Entry', 'Entri Penyesuaian Gaji Akrual'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Accrued Salaries', 'Entri Penyesuaian - Gaji Akrual'), head: [
          b('Account\nAkun', 'Account\nAkun'),
          b('Debit\nDebet', 'Debit\nDebet'),
          b('Credit\nKredit', 'Credit\nKredit')
        ], rows: [
          ['Salaries Expense\nBeban Gaji', '1,440', ''],
          ['Salaries Payable\nGaji Bayar', '', '1,440']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '6', given: b('Accrued interest: 20,000 × 6% × 3/12 = 300', 'Bunga akrual: 20.000 × 6% × 3/12 = 300'), answer: b('Interest Expense 300 / Interest Payable 300', 'Beban Bunga 300 / Bunga Bayar 300') },
      { label: '6', given: b('Accrued Interest Adjusting Entry', 'Entri Penyesuaian Bunga Akrual'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Accrued Interest', 'Entri Penyesuaian - Bunga Akrual'), head: [
          b('Account\nAkun', 'Account\nAkun'),
          b('Debit\nDebet', 'Debit\nDebet'),
          b('Credit\nKredit', 'Credit\nKredit')
        ], rows: [
          ['Interest Expense\nBeban Bunga', '300', ''],
          ['Interest Payable\nBunga Bayar', '', '300']
        ], align: ['left', 'right', 'right'], compact: false }
      ]},
      { label: '7', given: b('Accrued revenue: Services performed but not billed €3,500', 'Pendapatan akrual: Jasa dilakukan tapi belum ditagih €3.500'), answer: b('Accounts Receivable 3,500 / Service Revenue 3,500', 'Piutang Usaha 3.500 / Pendapatan Jasa 3.500') },
      { label: '7', given: b('Accrued Revenue Adjusting Entry', 'Entri Penyesuaian Pendapatan Akrual'), blocks: [
        { type: 'table', caption: b('Adjusting Entry - Accrued Revenue', 'Entri Penyesuaian - Pendapatan Akrual'), head: [
          b('Account\nAkun', 'Account\nAkun'),
          b('Debit\nDebet', 'Debit\nDebet'),
          b('Credit\nKredit', 'Credit\nKredit')
        ], rows: [
          ['Accounts Receivable\nPiutang Usaha', '3,500', ''],
          ['Service Revenue\nPendapatan Jasa', '', '3,500']
        ], align: ['left', 'right', 'right'], compact: false }
      ]}
    ],
    explanation: b(
      'This problem covers all four types of adjusting entries: (1) Prepaid expenses (supplies, insurance), (2) Unearned revenues, (3) Accrued expenses (salaries, interest), (4) Accrued revenues. Each adjusting entry involves one balance sheet account and one income statement account. Cash is never involved in adjusting entries.',
      'Masalah ini mencakup keempat jenis entri penyesuaian: (1) Beban dibayar di muka (perlengkapan, asuransi), (2) Pendapatan belum diperoleh, (3) Beban akrual (gaji, bunga), (4) Pendapatan akrual. Setiap entri penyesuaian melibatkan satu akun neraca saldo dan satu akun laporan laba rugi. Kas tidak pernah terlibat dalam entri penyesuaian.'
    )
  },
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
      { label: '(a)', given: b('Income statement from adjusted TB', 'Laporan laba rugi dari neraca saldo disesuaikan'), answer: b('Income Statement for Year Ended Dec 31:\nService Revenue €45,000\nExpenses: Salaries €18,000, Rent €12,000, Insurance €1,500, Depreciation €4,000,\nUtilities €3,000, Interest €600, Supplies €1,200 = Total €23,700\nNet Income = €45,000 - €23,700 = €21,300', 'Laporan Laba Rugi Tahun Berakhir 31 Des:\nPendapatan Jasa €45.000\nBeban: Gaji €18.000, Sewa €12.000, Asuransi €1.500, Penyusutan €4.000,\nUtilitas €3.000, Bunga €600, Perlengkapan €1.200 = Total €23.700\nLaba Bersih = €45.000 - €23.700 = €21.300') },
      { label: '(b)', given: b('Retained earnings statement', 'Laporan laba ditahan'), answer: b('Retained Earnings Statement:\nBeginning Retained Earnings €15,000\nAdd: Net Income €21,300\nLess: Dividends €4,000\nEnding Retained Earnings = €32,300', 'Laporan Laba Ditahan:\nLaba Ditahan Awal €15.000\nTambah: Laba Bersih €21.300\nKurang: Dividen €4.000\nLaba Ditahan Akhir = €32.300') },
      { label: '(c)', given: b('Statement of financial position', 'Laporan posisi keuangan'), answer: b('Statement of Financial Position, Dec 31:\nAssets: Cash €12,000 + A/R €? + Supplies €? + Equipment €? - Acc Dep €12,000 = Total Assets\nLiabilities: A/P €? + Notes Payable €? + Salaries Payable €1,200 + Interest Payable €300 + Unearned Rev €?\nEquity: Share Capital €30,000 + Retained Earnings €32,300 = €32,300\n(Need all adjusted TB balances to complete)', 'Laporan Posisi Keuangan, 31 Des:\nAset: Kas €12.000 + Piutang €? + Perlengkapan €? + Peralatan €? - Akum Peny €12.000 = Total Aset\nLiabilitas: H/Usaha €? + Catatan Hutang €? + Gaji Bayar €1.200 + Bunga Bayar €300 + Pend Blm Diperoleh €?\nEkuitas: Modal Saham €30.000 + Laba Ditahan €32.300 = €32.300\n(Perlu semua saldo neraca saldo disesuaikan untuk melengkapi)') },
      { label: '(d)', given: b('Closing entries from adjusted TB', 'Entri penutupan dari neraca saldo disesuaikan'), answer: b('1. Dr Service Revenue 45,000 / Cr Income Summary 45,000\n2. Dr Income Summary 23,700 / Cr Salaries Exp 18,000, Rent Exp 12,000, Insurance Exp 1,500, Dep Exp 4,000, Util Exp 3,000, Interest Exp 600, Supplies Exp 1,200\n3. Dr Income Summary 21,300 / Cr Retained Earnings 21,300\n4. Dr Retained Earnings 4,000 / Cr Dividends 4,000', '1. Dr Pendapatan Jasa 45.000 / Cr Ikhtisar Laba Rugi 45.000\n2. Dr Ikhtisar Laba Rugi 23.700 / Cr Beban Gaji 18.000, Beban Sewa 12.000, Beban Asuransi 1.500, Beban Peny 4.000, Beban Util 3.000, Beban Bunga 600, Beban Perl 1.200\n3. Dr Ikhtisar Laba Rugi 21.300 / Cr Laba Ditahan 21.300\n4. Dr Laba Ditahan 4.000 / Cr Dividen 4.000') }
    ],
    explanation: b(
      'Financial statements are prepared from the adjusted trial balance in sequence: (1) Income Statement determines net income, (2) Retained Earnings Statement uses net income to compute ending RE, (3) Statement of Financial Position uses ending RE. Closing entries zero out temporary accounts (revenue, expense, dividends) and transfer net income to Retained Earnings. The four closing entries are: close revenues to IS, close expenses to IS, close IS to RE, close dividends to RE.',
      'Laporan keuangan disusun dari neraca saldo disesuaikan berurutan: (1) Laporan Laba Rugi menentukan laba bersih, (2) Laporan Laba Ditahan menggunakan laba bersih menghitung LD akhir, (3) Laporan Posisi Keuangan menggunakan LD akhir. Entri penutupan mengosongkan akun sementara (pendapatan, beban, dividen) dan mentransfer laba bersih ke Laba Ditahan. Empat entri penutupan: tutup pendapatan ke IS, tutup beban ke IS, tutup IS ke LD, tutup dividen ke LD.'
    )
  },

  // BYP-type exercises for Chapter 3
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
      { label: '', given: b('6 adjusting entry situations', '6 situasi entri penyesuaian'), answer: b('1. Salaries Expense 3,500 / Salaries Payable 3,500\n2. Depreciation Expense 2,800 / Accumulated Depreciation 2,800\n3. Supplies Expense 4,400 (2,000 + Purchases - 600) / Supplies 4,400\n4. Unearned Revenue 1,200 / Service Revenue 1,200\n5. Interest Expense 400 / Interest Payable 400\n6. Accounts Receivable 3,000 / Service Revenue 3,000', '1. Beban Gaji 3.500 / Gaji Bayar 3.500\n2. Beban Penyusutan 2.800 / Akumulasi Penyusutan 2.800\n3. Beban Perlengkapan 4.400 (2.000 + Pembelian - 600) / Perlengkapan 4.400\n4. Pendapatan Blm Diperoleh 1.200 / Pendapatan Jasa 1.200\n5. Beban Bunga 400 / Bunga Bayar 400\n6. Piutang Usaha 3.000 / Pendapatan Jasa 3.000') }
    ],
    explanation: b(
      'This problem reviews all four categories of adjusting entries. Remember: Cash is never in an adjusting entry. Each entry pairs a balance sheet account with an income statement account. The goal is to match revenues and expenses to the correct period per the matching principle.',
      'Masalah ini meninjau keempat kategori entri penyesuaian. Ingat: Kas tidak pernah ada di entri penyesuaian. Setiap entri memasangkan akun neraca saldo dengan akun laporan laba rugi. Tujuannya mencocokkan pendapatan dan beban ke periode yang benar per prinsip pencocokan.'
    )
  },
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
      { label: '(a)', given: b('5 adjusting entries needed', '5 entri penyesuaian diperlukan'), answer: b('1. Supplies Expense 1,200 / Supplies 1,200 (2,000 - 800)\n2. Depreciation Expense 3,000 / Accumulated Depreciation 3,000\n3. Salaries Expense 1,500 / Salaries Payable 1,500\n4. Insurance Expense 1,200 / Prepaid Insurance 1,200\n5. Interest Expense 400 / Interest Payable 400', '1. Beban Perlengkapan 1.200 / Perlengkapan 1.200 (2.000 - 800)\n2. Beban Penyusutan 3.000 / Akumulasi Penyusutan 3.000\n3. Beban Gaji 1.500 / Gaji Bayar 1.500\n4. Beban Asuransi 1.200 / Asuransi Dibayar Dimuka 1.200\n5. Beban Bunga 400 / Bunga Bayar 400') },
      { label: '(c)', given: b('Prepare financial statements from adjusted TB', 'Siapkan laporan keuangan dari neraca saldo disesuaikan'), answer: b('Net Income = Service Revenue 60,000 - Expenses (Salaries 26,500 + Rent 12,000 + Utilities 4,000 + Advertising 2,000 + Insurance 4,200 + Depreciation 3,000 + Interest 400) = 60,000 - 49,700 = €10,300\nEnding RE = 10,000 + 10,300 - 5,000 = €15,300', 'Laba Bersih = Pendapatan Jasa 60.000 - Beban (Gaji 26.500 + Sewa 12.000 + Utilitas 4.000 + Iklan 2.000 + Asuransi 4.200 + Penyusutan 3.000 + Bunga 400) = 60.000 - 49.700 = €10.300\nAkhir LD = 10.000 + 10.300 - 5.000 = €15.300') }
    ],
    explanation: b(
      'This problem integrates adjusting entries with financial statement preparation. The adjusted trial balance is the key link - all adjustments must be posted before financial statements are prepared. Net income flows from income statement to retained earnings statement to statement of financial position.',
      'Masalah ini mengintegrasikan entri penyesuaian dengan penyusunan laporan keuangan. Neraca saldo disesuaikan adalah kunci utama - semua penyesuaian harus diposting sebelum laporan keuangan disusun. Laba bersih mengalir dari laporan laba rugi ke laporan laba ditahan ke laporan posisi keuangan.'
    )
  },
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
      { label: '(a)', given: b('6 quarterly adjusting entries', '6 entri penyesuaian triwulanan'), answer: b('1. Supplies Expense 1,200 / Supplies 1,200\n2. Depreciation Expense 2,500 / Accumulated Depreciation 2,500\n3. Interest Expense 600 / Interest Payable 600\n4. Accounts Receivable 4,000 / Service Revenue 4,000\n5. Rent Expense 3,000 / Prepaid Rent 3,000\n6. Unearned Revenue 2,500 / Service Revenue 2,500', '1. Beban Perlengkapan 1.200 / Perlengkapan 1.200\n2. Beban Penyusutan 2.500 / Akumulasi Penyusutan 2.500\n3. Beban Bunga 600 / Bunga Bayar 600\n4. Piutang Usaha 4.000 / Pendapatan Jasa 4.000\n5. Beban Sewa 3.000 / Sewa Dibayar Dimuka 3.000\n6. Pendapatan Blm Diperoleh 2.500 / Pendapatan Jasa 2.500') },
      { label: '(b)', given: b('Quarterly vs annual adjustments discussion', 'Diskusi penyesuaian triwulanan vs tahunan'), answer: b('Quarterly adjustments: Use 3-month periods for accruals/deferrals. Depreciation = annual/4. Accruals based on 3-month activity. More frequent but smaller amounts. Requires more estimation for partial periods. Annual adjustments: Use full year. Less frequent but larger amounts. More accurate for items like physical inventory counts. Both follow same principles but quarterly requires more interim estimates.', 'Penyesuaian triwulanan: Gunakan periode 3 bulan untuk akrual/tangguhan. Penyusutan = tahunan/4. Akrual berdasarkan aktivitas 3 bulan. Lebih sering tapi jumlah lebih kecil. Memerlukan lebih banyak estimasi untuk periode parsial. Penyesuaian tahunan: Gunakan tahun penuh. Lebih jarang tapi jumlah lebih besar. Lebih akurat untuk item seperti penghitungan inventaris fisik. Keduanya mengikuti prinsip sama tapi triwulanan butuh lebih banyak estimasi interim.') }
    ],
    explanation: b(
      'Quarterly financial statements require the same adjusting entry principles as annual statements, but with shorter time periods. This means more frequent estimates and smaller adjustment amounts. The matching principle applies equally - revenues and expenses must be matched to the quarter they relate to.',
      'Laporan keuangan triwulanan memerlukan prinsip entri penyesuaian yang sama seperti laporan tahunan, tapi dengan periode waktu lebih pendek. Artinya estimasi lebih sering dan jumlah penyesuaian lebih kecil. Prinsip pencocokan berlaku sama - pendapatan dan beban harus dicocokkan ke kuartal yang berkaitan.'
    )
  },
  {
    id: 'BYP3-4',
    title: b('BYP3-4: Comprehensive Chapter 3', 'BYP3-4: Komprehensif Bab 3'),
    question: b(
      'Comprehensive problem covering all Chapter 3 concepts: Timing concepts, adjusting entries (4 types), adjusted trial balance, financial statements from adjusted TB, and the relationship between adjusting entries and financial statement quality.',
      'Masalah komprehensif mencakup semua konsep Bab 3: Konsep waktu, entri penyesuaian (4 tipe), neraca saldo disesuaikan, laporan keuangan dari neraca saldo disesuaikan, dan hubungan entri penyesuaian dengan kualitas laporan keuangan.'
    ),
    parts: [
      { label: '', given: b('Full Chapter 3 review', 'Ulasan penuh Bab 3'), answer: b('Key concepts: (1) Accrual vs cash basis - accrual matches revenues/expenses to period. (2) Revenue recognition - when earned, not when cash received. (3) Matching principle - expenses matched to revenues they generate. (4) Four adjusting entry types: prepaid expenses, unearned revenues, accrued expenses, accrued revenues. (5) Adjusted trial balance verifies equality after adjustments. (6) Financial statements prepared in order: IS → RE → SFP. (7) Quality of earnings depends on proper accruals - aggressive accruals can manipulate earnings.', 'Konsep kunci: (1) Akrual vs kas basis - akrual mencocokkan pendapatan/beban ke periode. (2) Pengakuan pendapatan - saat diperoleh, bukan saat kas diterima. (3) Prinsip pencocokan - beban dicocokkan ke pendapatan yang di-generate. (4) 4 tipe entri penyesuaian: beban dibayar dimuka, pendapatan blm diperoleh, beban akrual, pendapatan akrual. (5) Neraca saldo disesuaikan verifikasi keseimbangan setelah penyesuaian. (6) Laporan keuangan urutan: LR → LD → LPK. (7) Kualitas laba bergantung pada akrual yang benar - akrual agresif bisa memanipulasi laba.') }
    ],
    explanation: b(
      'Chapter 3 is the heart of accrual accounting. Understanding the four types of adjusting entries and their impact on financial statement quality is critical. The matching principle drives all adjusting entries - ensuring revenues and expenses are reported in the correct period. This is the foundation for reliable financial reporting under IFRS.',
      'Bab 3 adalah jantung akuntansi akrual. Memahami empat jenis entri penyesuaian dan dampaknya pada kualitas laporan keuangan adalah kritis. Prinsip pencocokan mendorong semua entri penyesuaian - memastikan pendapatan dan beban dilaporkan di periode yang benar. Ini fondasi pelaporan keuangan andal di bawah IFRS.'
    )
  }
];
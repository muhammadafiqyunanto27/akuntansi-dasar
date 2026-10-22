import { b, type Chapter } from './types';

export const chapter3: Chapter = {
  slug: '3',
  number: 3,
  roman: 'III',
  title: b('Adjusting the Accounts', 'Menyesuaikan Akun'),
  subtitle: b(
    'Accrual accounting, the four types of adjusting entries, and the adjusted trial balance.',
    'Akuntansi akrual, empat jenis ayat penyesuaian, dan neraca saldo setelah penyesuaian.'
  ),
  kicker: b('Chapter 3 · pages 100–159', 'Bab 3 · hlm. 100–159'),
  sourcePages: '100–159',
  lead: b(
    'A trial balance is a starting point, not a finished set of statements. Some revenues have been earned but not recorded; some expenses have been incurred but not paid. Adjusting entries bring the accounts onto the accrual basis before the statements are prepared.',
    'Neraca saldo adalah titik awal, bukan laporan yang selesai. Sebagian pendapatan sudah diperoleh tetapi belum dicatat; sebagian beban sudah terjadi tetapi belum dibayar. Ayat penyesuaian membawa akun ke dasar akrual sebelum laporan disusun.'
  ),
  objectives: [
    b('Explain the time period, revenue recognition, and expense recognition principles.', 'Menjelaskan asumsi periode waktu, prinsip pengakuan pendapatan, dan prinsip pengakuan beban.'),
    b('Distinguish accrual-basis from cash-basis accounting.', 'Membedakan akuntansi dasar akrual dari dasar kas.'),
    b('Prepare adjusting entries for deferrals and accruals.', 'Menyusun ayat penyesuaian untuk deferral dan akrual.'),
    b('Prepare an adjusted trial balance and the related statements.', 'Menyusun neraca saldo setelah penyesuaian dan laporan terkait.'),
  ],
  sections: [
    {
      id: 'timing',
      num: '3.1',
      tag: b('Timing', 'Waktu'),
      title: b('Timing issues: when is revenue earned?', 'Masalah waktu: kapan pendapatan diperoleh?'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Users need periodic reports, so accountants divide the economic life of a business into artificial time periods — a month, a quarter, or a year. This is the <strong>time period assumption</strong>. A <strong>fiscal year</strong> is an accounting period of one year; a <strong>calendar year</strong> runs from 1 January to 31 December.',
            'Pemakai membutuhkan laporan berkala, sehingga akuntan membagi umur ekonomi bisnis menjadi periode buatan — bulan, kuartal, atau tahun. Ini adalah <strong>asumsi periode waktu</strong>. <strong>Tahun fiskal</strong> adalah periode akuntansi satu tahun; <strong>tahun kalender</strong> berjalan 1 Januari sampai 31 Desember.'
          ),
        },
        {
          type: 'p',
          text: b(
            'The <strong>revenue recognition principle</strong> requires companies to recognise revenue in the period in which the performance obligation is satisfied — usually when the service is performed or the goods are delivered, not necessarily when cash is received. The <strong>expense recognition principle</strong> (matching) requires expenses to be matched with the revenues they helped generate in the same period.',
            '<strong>Prinsip pengakuan pendapatan</strong> mewajibkan perusahaan mengakui pendapatan pada periode ketika kewajiban pelaksanaan dipenuhi — biasanya saat jasa dikerjakan atau barang diserahkan, belum tentu saat kas diterima. <strong>Prinsip pengakuan beban</strong> (pencocokan) mewajibkan beban dicocokkan dengan pendapatan yang dihasilkannya pada periode yang sama.'
          ),
        },
        {
          type: 'table',
          head: [b('Basis', 'Dasar'), b('Revenue recorded', 'Pendapatan dicatat'), b('Expense recorded', 'Beban dicatat'), b('Status under IFRS', 'Status menurut IFRS')],
          rows: [
            [
              b('Accrual basis', 'Dasar akrual'),
              b('When earned, regardless of cash.', 'Saat diperoleh, terlepas dari kas.'),
              b('When incurred, regardless of payment.', 'Saat terjadi, terlepas dari pembayaran.'),
              b('Required by IFRS.', 'Diwajibkan IFRS.'),
            ],
            [
              b('Cash basis', 'Dasar kas'),
              b('When cash is received.', 'Saat kas diterima.'),
              b('When cash is paid.', 'Saat kas dibayar.'),
              b('Not in accordance with IFRS.', 'Tidak sesuai IFRS.'),
            ],
          ],
        },
        {
          type: 'callout',
          title: b('Why adjusting entries exist', 'Mengapa ayat penyesuaian ada'),
          text: b(
            'The unadjusted trial balance may not contain up-to-date information. Adjusting entries update the accounts at the end of the period so that the statements reflect accrual accounting rather than the timing of cash.',
            'Neraca saldo sebelum penyesuaian mungkin belum memuat informasi terkini. Ayat penyesuaian memperbarui akun di akhir periode agar laporan mencerminkan akuntansi akrual, bukan waktu arus kas.'
          ),
          tone: 'note',
        },
      ],
    },
    {
      id: 'types',
      num: '3.2',
      tag: b('Map', 'Peta'),
      title: b('The four types of adjusting entries', 'Empat jenis ayat penyesuaian'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Adjusting entries fall into two families. <strong>Deferrals</strong> occur when cash has already changed hands but the revenue or expense has not yet been fully recognised. <strong>Accruals</strong> occur when the revenue or expense has been earned or incurred but cash has not yet changed hands.',
            'Ayat penyesuaian terbagi dua keluarga. <strong>Deferral</strong> terjadi ketika kas sudah berpindah tetapi pendapatan atau beban belum sepenuhnya diakui. <strong>Akrual</strong> terjadi ketika pendapatan sudah diperoleh atau beban sudah terjadi tetapi kas belum berpindah.'
          ),
        },
        {
          type: 'table',
          head: [b('Type', 'Jenis'), b('Before adjustment', 'Sebelum penyesuaian'), b('Adjusting entry', 'Ayat penyesuaian'), b('Example', 'Contoh')],
          rows: [
            [
              b('Prepaid expense (deferral)', 'Beban dibayar di muka (deferral)'),
              b('Asset is overstated; expense is understated.', 'Aset terlalu besar; beban terlalu kecil.'),
              b('Dr Expense / Cr Asset', 'Dr Beban / Cr Aset'),
              b('Supplies, prepaid insurance, depreciation.', 'Perlengkapan, asuransi dibayar di muka, penyusutan.'),
            ],
            [
              b('Unearned revenue (deferral)', 'Pendapatan diterima di muka (deferral)'),
              b('Liability is overstated; revenue is understated.', 'Liabilitas terlalu besar; pendapatan terlalu kecil.'),
              b('Dr Liability / Cr Revenue', 'Dr Liabilitas / Cr Pendapatan'),
              b('Cash advance from a customer.', 'Uang muka dari pelanggan.'),
            ],
            [
              b('Accrued revenue (accrual)', 'Pendapatan yang masih harus diterima (akrual)'),
              b('Asset is understated; revenue is understated.', 'Aset terlalu kecil; pendapatan terlalu kecil.'),
              b('Dr Asset / Cr Revenue', 'Dr Aset / Cr Pendapatan'),
              b('Services performed but not yet billed.', 'Jasa sudah dikerjakan tetapi belum ditagih.'),
            ],
            [
              b('Accrued expense (accrual)', 'Beban yang masih harus dibayar (akrual)'),
              b('Expense is understated; liability is understated.', 'Beban terlalu kecil; liabilitas terlalu kecil.'),
              b('Dr Expense / Cr Liability', 'Dr Beban / Cr Liabilitas'),
              b('Unpaid salaries, interest, utilities.', 'Gaji, bunga, utilitas yang belum dibayar.'),
            ],
          ],
        },
        {
          type: 'callout',
          title: b('Two rules that never fail', 'Dua aturan yang selalu berlaku'),
          text: b(
            'Every adjusting entry affects at least one statement of financial position account and one income statement account. No adjusting entry ever debits or credits Cash.',
            'Setiap ayat penyesuaian memengaruhi minimal satu akun laporan posisi keuangan dan satu akun laporan laba rugi. Tidak ada ayat penyesuaian yang mendebit atau mengkredit Kas.'
          ),
          tone: 'tip',
        },
      ],
    },
    {
      id: 'prepaid',
      num: '3.3',
      tag: b('Deferral', 'Deferral'),
      title: b('Prepaid expenses and depreciation', 'Beban dibayar di muka dan penyusutan'),
      blocks: [
        {
          type: 'p',
          text: b(
            'A <strong>prepaid expense</strong> is a payment that benefits more than the current period. It is initially recorded as an asset. At the end of the period, the portion used or expired becomes an expense. If the adjustment is omitted, assets and equity are overstated and expenses are understated.',
            '<strong>Beban dibayar di muka</strong> adalah pembayaran yang manfaatnya melebihi periode berjalan. Awalnya dicatat sebagai aset. Di akhir periode, bagian yang terpakai atau kedaluwarsa menjadi beban. Jika penyesuaian dilewatkan, aset dan ekuitas terlalu besar serta beban terlalu kecil.'
          ),
        },
        {
          type: 'table',
          head: [b('Item', 'Pos'), b('Yazici data', 'Data Yazici'), b('Adjusting entry', 'Ayat penyesuaian'), b('Remaining balance', 'Saldo tersisa')],
          rows: [
            [
              b('Supplies', 'Perlengkapan'),
              b('€2,500 purchased; €1,000 remains.', '€2.500 dibeli; sisa €1.000.'),
              b('Dr Supplies Expense 1,500 / Cr Supplies 1,500', 'Dr Beban Perlengkapan 1.500 / Cr Perlengkapan 1.500'),
              b('Supplies €1,000', 'Perlengkapan €1.000'),
            ],
            [
              b('Prepaid insurance', 'Asuransi dibayar di muka'),
              b('€600 for 12 months; 1 month expired.', '€600 untuk 12 bulan; 1 bulan terpakai.'),
              b('Dr Insurance Expense 50 / Cr Prepaid Insurance 50', 'Dr Beban Asuransi 50 / Cr Asuransi Dibayar di Muka 50'),
              b('Prepaid insurance €550', 'Asuransi dibayar di muka €550'),
            ],
            [
              b('Depreciation—equipment', 'Penyusutan — peralatan'),
              b('€40 of equipment cost allocated to October.', '€40 biaya peralatan dialokasikan ke Oktober.'),
              b('Dr Depreciation Expense 40 / Cr Accumulated Depreciation—Equipment 40', 'Dr Beban Penyusutan 40 / Cr Akumulasi Penyusutan — Peralatan 40'),
              b('Equipment €5,000 less accumulated depreciation €40', 'Peralatan €5.000 dikurangi akumulasi penyusutan €40'),
            ],
          ],
        },
        {
          type: 'p',
          text: b(
            '<strong>Depreciation</strong> is the allocation of an asset’s cost to the periods that benefit from its use. It is not a valuation of the asset and it does not set aside cash. The contra asset <strong>Accumulated Depreciation</strong> accumulates the total depreciation expensed over the asset’s life, so the statement of financial position shows cost less accumulated depreciation — the <strong>carrying amount</strong> (book value).',
            '<strong>Penyusutan</strong> adalah alokasi biaya aset ke periode yang menikmati manfaatnya. Ini bukan penilaian aset dan tidak menyisihkan kas. Akun kontra <strong>Akumulasi Penyusutan</strong> mengumpulkan total penyusutan yang telah dibebankan sepanjang umur aset, sehingga laporan posisi keuangan menyajikan biaya dikurangi akumulasi penyusutan — <strong>nilai tercatat</strong> (nilai buku).'
          ),
        },
        {
          type: 'formula',
          label: b('Carrying amount', 'Nilai tercatat'),
          expr: 'Carrying amount = Cost − Accumulated depreciation',
          note: b('The asset is not reduced directly; the contra account carries the accumulated total.', 'Aset tidak dikurangi langsung; akun kontra yang membawa total akumulasinya.'),
        },
      ],
    },
    {
      id: 'unearned',
      num: '3.4',
      tag: b('Deferral', 'Deferral'),
      title: b('Unearned revenues', 'Pendapatan diterima di muka'),
      blocks: [
        {
          type: 'p',
          text: b(
            'An <strong>unearned revenue</strong> arises when a customer pays in advance. The company owes a service or a product, so the receipt is a liability, not revenue. As the service is performed, the liability is reduced and revenue is recognised.',
            '<strong>Pendapatan diterima di muka</strong> muncul ketika pelanggan membayar lebih dulu. Perusahaan masih berutang jasa atau barang, sehingga penerimaan itu adalah liabilitas, bukan pendapatan. Saat jasa dikerjakan, liabilitas berkurang dan pendapatan diakui.'
          ),
        },
        {
          type: 'table',
          head: [b('Date', 'Tanggal'), b('Event', 'Peristiwa'), b('Entry', 'Ayat')],
          rows: [
            ['Oct 2', b('Received €1,200 from R. Knox for future advertising services.', 'Menerima €1.200 dari R. Knox untuk jasa iklan mendatang.'), b('Dr Cash 1,200 / Cr Unearned Service Revenue 1,200', 'Dr Kas 1.200 / Cr Pendapatan Jasa Diterima di Muka 1.200')],
            ['Oct 31', b('€400 of the advance has now been earned.', '€400 dari uang muka telah menjadi pendapatan.'), b('Dr Unearned Service Revenue 400 / Cr Service Revenue 400', 'Dr Pendapatan Jasa Diterima di Muka 400 / Cr Pendapatan Jasa 400')],
          ],
        },
        {
          type: 'p',
          text: b(
            'After adjustment, the liability is €800 and revenue includes the €400 earned. The cash entry does not change; only the classification between liability and revenue changes.',
            'Setelah penyesuaian, liabilitas menjadi €800 dan pendapatan mencakup €400 yang telah diperoleh. Ayat kas tidak berubah; hanya klasifikasi antara liabilitas dan pendapatan yang berubah.'
          ),
        },
      ],
    },
    {
      id: 'accruals',
      num: '3.5',
      tag: b('Accrual', 'Akrual'),
      title: b('Accrued revenues and accrued expenses', 'Pendapatan dan beban yang masih harus diakui'),
      blocks: [
        { type: 'h4', text: b('Accrued revenues', 'Pendapatan yang masih harus diterima') },
        {
          type: 'p',
          text: b(
            'Revenue may be earned before cash is received or before a bill is sent. The company records an asset (receivable) and revenue. Yazici performed €200 of services on 31 October that had not been billed: debit Accounts Receivable €200; credit Service Revenue €200.',
            'Pendapatan bisa diperoleh sebelum kas diterima atau sebelum tagihan dikirim. Perusahaan mencatat aset (piutang) dan pendapatan. Yazici mengerjakan jasa €200 pada 31 Oktober yang belum ditagih: debit Piutang Usaha €200; kredit Pendapatan Jasa €200.'
          ),
        },
        { type: 'h4', text: b('Accrued expenses', 'Beban yang masih harus dibayar') },
        {
          type: 'p',
          text: b(
            'Expenses may be incurred before they are paid. The company records an expense and a liability. Yazici owed €1,200 of salaries at 31 October and €50 of interest on the 12% note: debit the expenses; credit Salaries and Wages Payable and Interest Payable.',
            'Beban bisa terjadi sebelum dibayar. Perusahaan mencatat beban dan liabilitas. Yazici berutang gaji €1.200 pada 31 Oktober dan bunga €50 atas wesel 12%: debit beban; kredit Utang Gaji dan Upah serta Utang Bunga.'
          ),
        },
        {
          type: 'formula',
          label: b('Interest accrual', 'Akrual bunga'),
          expr: 'Interest = Principal × Annual rate × Fraction of the year',
          note: b('€5,000 × 12% × 1/12 = €50 for October.', '€5.000 × 12% × 1/12 = €50 untuk Oktober.'),
        },
        {
          type: 'table',
          head: [b('Adjustment', 'Penyesuaian'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          rows: [
            [b('Accrued revenue', 'Pendapatan akrual'), b('Accounts Receivable 200', 'Piutang Usaha 200'), b('Service Revenue 200', 'Pendapatan Jasa 200')],
            [b('Accrued salaries', 'Gaji akrual'), b('Salaries and Wages Expense 1,200', 'Beban Gaji dan Upah 1.200'), b('Salaries and Wages Payable 1,200', 'Utang Gaji dan Upah 1.200')],
            [b('Accrued interest', 'Bunga akrual'), b('Interest Expense 50', 'Beban Bunga 50'), b('Interest Payable 50', 'Utang Bunga 50')],
          ],
        },
      ],
    },
    {
      id: 'adjusted-trial-balance',
      num: '3.6',
      tag: b('Output', 'Keluaran'),
      title: b('The adjusted trial balance and the statements', 'Neraca saldo setelah penyesuaian dan laporan'),
      blocks: [
        {
          type: 'p',
          text: b(
            'After all adjusting entries are journalised and posted, the adjusted trial balance is prepared. It is the direct source of the financial statements: revenues and expenses produce net income, net income flows to retained earnings, and ending retained earnings flows into equity.',
            'Setelah semua ayat penyesuaian dijurnal dan diposting, neraca saldo setelah penyesuaian disusun. Inilah sumber langsung laporan keuangan: pendapatan dan beban menghasilkan laba bersih, laba bersih mengalir ke saldo laba, dan saldo laba akhir mengalir ke ekuitas.'
          ),
        },
        {
          type: 'table',
          head: [b('Yazici — adjusted balances', 'Yazici — saldo setelah penyesuaian'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
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
            [b('Dividends', 'Dividen'), '500', ''],
            [b('Service Revenue', 'Pendapatan Jasa'), '', '10,600'],
            [b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '5,200', ''],
            [b('Supplies Expense', 'Beban Perlengkapan'), '1,500', ''],
            [b('Rent Expense', 'Beban Sewa'), '900', ''],
            [b('Insurance Expense', 'Beban Asuransi'), '50', ''],
            [b('Depreciation Expense', 'Beban Penyusutan'), '40', ''],
            [b('Interest Expense', 'Beban Bunga'), '50', ''],
            [b('Total', 'Total'), '30,190', '30,190'],
          ],
        },
        {
          type: 'table',
          head: [b('Result', 'Hasil'), b('Amount', 'Jumlah'), b('Computation', 'Perhitungan')],
          align: ['left', 'right', 'left'],
          rows: [
            [b('Service revenue', 'Pendapatan jasa'), '€10,600', b('€10,000 + €400 + €200', '€10.000 + €400 + €200')],
            [b('Total expenses', 'Total beban'), '€7,740', b('€5,200 + €1,500 + €900 + €50 + €40 + €50', '€5.200 + €1.500 + €900 + €50 + €40 + €50')],
            [b('Net income', 'Laba bersih'), '€2,860', b('€10,600 − €7,740', '€10.600 − €7.740')],
            [b('Retained earnings, ending', 'Saldo laba akhir'), '€2,360', b('€0 + €2,860 − €500', '€0 + €2.860 − €500')],
            [b('Total assets', 'Total aset'), '€21,910', b('€15,200 + €200 + €1,000 + €550 + €5,000 − €40', '€15.200 + €200 + €1.000 + €550 + €5.000 − €40')],
            [b('Total liabilities', 'Total liabilitas'), '€9,550', b('€5,000 + €2,500 + €800 + €1,200 + €50', '€5.000 + €2.500 + €800 + €1.200 + €50')],
            [b('Total equity', 'Total ekuitas'), '€12,360', b('€10,000 + €2,360', '€10.000 + €2.360')],
          ],
        },
        {
          type: 'callout',
          title: b('Check the balance', 'Periksa keseimbangan'),
          text: b(
            'Total assets €21,910 must equal total liabilities and equity €9,550 + €12,360 = €21,910. If it does not, an adjustment is missing or posted incorrectly.',
            'Total aset €21.910 harus sama dengan total liabilitas dan ekuitas €9.550 + €12.360 = €21.910. Jika tidak, ada penyesuaian yang terlewat atau salah posting.'
          ),
          tone: 'tip',
        },
      ],
    },
    {
      id: 'alternative',
      num: '3.7',
      tag: b('Appendix 3A', 'Lampiran 3A'),
      title: b('Alternative treatment of deferrals', 'Perlakuan alternatif untuk deferral'),
      blocks: [
        {
          type: 'p',
          text: b(
            'The standard approach records prepayments as assets and advances as liabilities. An acceptable alternative records them initially in expense or revenue accounts, then adjusts at period end to the correct asset or liability. Ending balances and net income are identical either way.',
            'Pendekatan standar mencatat pembayaran di muka sebagai aset dan uang muka sebagai liabilitas. Alternatif yang diperbolehkan mencatatnya lebih dulu ke akun beban atau pendapatan, lalu menyesuaikan di akhir periode ke aset atau liabilitas yang benar. Saldo akhir dan laba bersih sama pada kedua cara.'
          ),
        },
        {
          type: 'table',
          head: [b('Item', 'Pos'), b('Standard initial entry', 'Ayat awal standar'), b('Alternative initial entry', 'Ayat awal alternatif')],
          rows: [
            [b('Prepaid insurance €600', 'Asuransi dibayar di muka €600'), b('Dr Prepaid Insurance 600', 'Dr Asuransi Dibayar di Muka 600'), b('Dr Insurance Expense 600', 'Dr Beban Asuransi 600')],
            [b('Cash advance €1,200', 'Uang muka €1.200'), b('Dr Cash 1,200 / Cr Unearned Revenue 1,200', 'Dr Kas 1.200 / Cr Pendapatan Diterima di Muka 1.200'), b('Dr Cash 1,200 / Cr Service Revenue 1,200', 'Dr Kas 1.200 / Cr Pendapatan Jasa 1.200')],
          ],
        },
        {
          type: 'p',
          text: b(
            'Under the alternative treatment, the year-end adjustment for the unused insurance is debit Prepaid Insurance and credit Insurance Expense. For the unearned portion of the advance, debit Service Revenue and credit Unearned Service Revenue. The result is the same as the standard method.',
            'Pada perlakuan alternatif, penyesuaian akhir tahun untuk asuransi yang belum terpakai adalah debit Asuransi Dibayar di Muka dan kredit Beban Asuransi. Untuk bagian uang muka yang belum menjadi pendapatan, debit Pendapatan Jasa dan kredit Pendapatan Jasa Diterima di Muka. Hasilnya sama dengan metode standar.'
          ),
        },
      ],
    },
  ],
  quiz: [
    {
      q: b('Why are adjusting entries needed?', 'Mengapa ayat penyesuaian diperlukan?'),
      a: b('To update accounts at period end so revenues are recognised when earned and expenses when incurred, not when cash moves.', 'Untuk memperbarui akun di akhir periode agar pendapatan diakui saat diperoleh dan beban saat terjadi, bukan saat kas berpindah.'),
    },
    {
      q: b('Which account is credited when supplies are used?', 'Akun apa yang dikredit saat perlengkapan terpakai?'),
      a: b('Supplies (the asset), while Supplies Expense is debited.', 'Perlengkapan (aset), sedangkan Beban Perlengkapan didebit.'),
    },
    {
      q: b('Does depreciation create a cash fund for replacing the asset?', 'Apakah penyusutan membentuk dana kas untuk mengganti aset?'),
      a: b('No. Depreciation allocates cost; it does not set aside cash.', 'Tidak. Penyusutan mengalokasikan biaya; ia tidak menyisihkan kas.'),
    },
    {
      q: b('What is the normal balance of Accumulated Depreciation?', 'Apa saldo normal Akumulasi Penyusutan?'),
      a: b('Credit — it is a contra asset.', 'Kredit — akun kontra aset.'),
    },
  ],
};

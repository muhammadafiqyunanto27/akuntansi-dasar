import { b } from '../data/types';

export const chapter1PAndBYP = [
  // ============================================================
  // P1-1A: Kinney Repair Ltd - Tabular Analysis
  // ============================================================
  {
    id: 'P1-1A',
    title: b('P1-1A: Kinney\'s Repair Ltd', 'P1-1A: Kinney\'s Repair Ltd'),
    question: b(
      'Prepare a tabular analysis of the May transactions using column headings: Cash, Accounts Receivable, Supplies, Equipment, Accounts Payable, Share Capital, and Retained Earnings (with separate columns for Revenues, Expenses, and Dividends). Include margin explanations for changes in Retained Earnings.',
      'Siapkan analisis tabel transaksi Mei menggunakan kolom: Kas, Piutang Usaha, Perlengkapan, Peralatan, Hutang Usaha, Modal Saham, dan Laba Ditahan (dengan kolom terpisah untuk Pendapatan, Beban, dan Dividen). Sertakan penjelasan margin untuk perubahan Laba Ditahan.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('Tabular Analysis Format', 'Format Analisis Tabel'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Tabular Analysis - Kinney Repair Ltd (May)', 'Analisis Tabel - Kinney Repair Ltd (Mei)'),
            head: [
              b('Trans.', 'Trans.'),
              b('Cash / Kas', 'Cash / Kas'),
              b('A/R / Piutang', 'A/R / Piutang'),
              b('Supplies / Perlengkapan', 'Supplies / Perlengkapan'),
              b('Equipment / Peralatan', 'Equipment / Peralatan'),
              b('A/P / Hutang Usaha', 'A/P / Hutang Usaha'),
              b('Share Cap. / Modal Saham', 'Share Cap. / Modal Saham'),
              b('Revenue / Pendapatan', 'Revenue / Pendapatan'),
              b('Expenses / Beban', 'Expenses / Beban'),
              b('Dividends / Dividen', 'Dividends / Dividen'),
              b('Ret. Earnings / Laba Ditahan', 'Ret. Earnings / Laba Ditahan')
            ],
            rows: [
              ['1', '10,000', '', '', '', '', '10,000', '', '', '', ''],
              ['2', '-5,000', '', '', '5,000', '', '', '', '', '', ''],
              ['3', '-400', '', '', '', '', '', '400', '', '-400'],
              ['4', '-700', '', '700', '', '', '', '', '', '', ''],
              ['5', '', '', '', '', '250', '', '', '', '', ''],
              ['6', '4,700', '', '', '', '', '', '4,700', '', '', '4,700'],
              ['7', '-1,000', '', '', '', '', '', '', '', '1,000', '-1,000'],
              ['8', '-1,000', '', '', '', '', '', '1,000', '', '-1,000'],
              ['9', '-160', '', '', '', '', '', '160', '', '-160'],
              ['10', '', '980', '', '', '', '', '980', '', '', '980'],
              ['11', '120', '-120', '', '', '', '', '', '', '', ''],
              ['Bal.', '8,020', '860', '700', '5,000', '250', '10,000', '4,700', '3,250', '1,000', '1,450']
            ],
            align: ['center', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Compute Net Income from Retained Earnings', 'Hitung Laba Bersih dari Laba Ditahan'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Income Statement - Kinney Repair Ltd (May)', 'Laporan Laba Rugi - Kinney Repair Ltd (Mei)'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (€) / Jumlah (€)', 'Jumlah (€) / Jumlah (€)')
            ],
            rows: [
              ['Service Revenue / Pendapatan Jasa', '4,700'],
              ['Expenses / Beban:', ''],
              ['  Rent Expense / Beban Sewa', '400'],
              ['  Advertising Expense / Beban Iklan', '250'],
              ['  Salaries Expense / Beban Gaji', '1,000'],
              ['  Utilities Expense / Beban Utilitas', '160'],
              ['Total Expenses / Total Beban', '1,810'],
              ['NET INCOME / LABA BERSIH', '2,890'],
              ['Less: Dividends / Kurang: Dividen', '1,000'],
              ['CHANGE IN RETAINED EARNINGS / PERUBAHAN LABA DITAHAN', '1,890']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'Each transaction affects the accounting equation. Revenue increases equity, expenses and dividends decrease equity. The tabular analysis tracks each account separately. Net income is computed from the Retained Earnings columns: Revenue minus Expenses minus Dividends = Ending Retained Earnings.',
      'Setiap transaksi mempengaruhi persamaan akuntansi. Pendapatan menambah ekuitas, beban dan dividen mengurangi ekuitas. Analisis tabel melacak setiap akun terpisah. Laba bersih dihitung dari kolom Laba Ditahan: Pendapatan minus Beban minus Dividen = Laba Ditahan Akhir.'
    )
  },

  // ============================================================
  // P1-1B: Holiday Travel Agency - Tabular Analysis
  // ============================================================
  {
    id: 'P1-1B',
    title: b('P1-1B: Holiday Travel Agency', 'P1-1B: Holiday Travel Agency'),
    question: b(
      'Holiday Travel Agency was started on April 1. A summary of April transactions is presented below.\n' +
      '1. Shareholders invested €15,000 cash in exchange for ordinary shares.\n' +
      '2. Purchased office equipment for €3,000 cash.\n' +
      '3. Paid €600 cash for April office rent.\n' +
      '4. Purchased office supplies for €800 on account.\n' +
      '5. Received €2,500 cash from customers for travel services.\n' +
      '6. Paid €1,200 cash for employee salaries.\n' +
      '7. Billed customers €3,200 for travel services on account.\n' +
      '8. Paid €400 cash for advertising.\n' +
      '9. Received €1,000 cash from customers on account.\n' +
      '10. Declared and paid €800 cash dividend.\n\n' +
      'Instructions:\n' +
      '(a) Prepare a tabular analysis of the transactions.\n' +
      '(b) Compute net income or net loss for April.',
      'Agen Perjalanan Holiday didirikan pada 1 April. Ringkasan transaksi April disajikan di bawah ini.\n' +
      '1. Pemegang saham berinvestasi €15.000 tunai untuk saham biasa.\n' +
      '2. Membeli peralatan kantor €3.000 tunai.\n' +
      '3. Membayar €600 tunai untuk sewa kantor April.\n' +
      '4. Membeli perlengkapan kantor €800 pada rekening.\n' +
      '5. Menerima €2.500 tunai dari pelanggan untuk jasa perjalanan.\n' +
      '6. Membayar €1.200 tunai untuk gaji karyawan.\n' +
      '7. Menagihkan pelanggan €3.200 untuk jasa perjalanan pada rekening.\n' +
      '8. Membayar €400 tunai untuk iklan.\n' +
      '9. Menerima €1.000 tunai dari pelanggan pada rekening.\n' +
      '10. Mengumumkan dan membayar dividen tunai €800.\n\n' +
      'Instruksi:\n' +
      '(a) Siapkan analisis tabel transaksi.\n' +
      '(b) Hitung laba atau rugi bersih untuk April.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('Tabular Analysis Format', 'Format Analisis Tabel'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Tabular Analysis - Holiday Travel Agency (April)', 'Analisis Tabel - Holiday Travel Agency (April)'),
            head: [
              b('Trans.', 'Trans.'),
              b('Cash / Kas', 'Cash / Kas'),
              b('A/R / Piutang', 'A/R / Piutang'),
              b('Supplies / Perlengkapan', 'Supplies / Perlengkapan'),
              b('Equipment / Peralatan', 'Equipment / Peralatan'),
              b('A/P / Hutang Usaha', 'A/P / Hutang Usaha'),
              b('Share Cap. / Modal Saham', 'Share Cap. / Modal Saham'),
              b('Revenue / Pendapatan', 'Revenue / Pendapatan'),
              b('Expenses / Beban', 'Expenses / Beban'),
              b('Dividends / Dividen', 'Dividends / Dividen'),
              b('Ret. Earnings / Laba Ditahan', 'Ret. Earnings / Laba Ditahan')
            ],
            rows: [
              ['1', '15,000', '', '', '', '', '15,000', '', '', '', ''],
              ['2', '-3,000', '', '', '3,000', '', '', '', '', '', ''],
              ['3', '-600', '', '', '', '', '', '600', '', '-600'],
              ['4', '', '', '800', '', '800', '', '', '', '', ''],
              ['5', '2,500', '', '', '', '', '', '2,500', '', '', '2,500'],
              ['6', '-1,200', '', '', '', '', '', '1,200', '', '-1,200'],
              ['7', '', '3,200', '', '', '', '', '3,200', '', '', '3,200'],
              ['8', '-400', '', '', '', '', '', '400', '', '-400'],
              ['9', '1,000', '-1,000', '', '', '', '', '', '', '', ''],
              ['10', '-800', '', '', '', '', '', '', '', '800', '-800'],
              ['Bal.', '13,500', '2,200', '800', '3,000', '800', '15,000', '5,700', '2,200', '800', '3,100']
            ],
            align: ['center', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Compute Net Income from Retained Earnings', 'Hitung Laba Bersih dari Laba Ditahan'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Income Statement - Holiday Travel Agency (April)', 'Laporan Laba Rugi - Holiday Travel Agency (April)'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (€) / Jumlah (€)', 'Jumlah (€) / Jumlah (€)')
            ],
            rows: [
              ['Service Revenue / Pendapatan Jasa', '5,700'],
              ['Expenses / Beban:', ''],
              ['  Rent Expense / Beban Sewa', '600'],
              ['  Salaries Expense / Beban Gaji', '1,200'],
              ['  Advertising Expense / Beban Iklan', '400'],
              ['Total Expenses / Total Beban', '1,800'],
              ['NET INCOME / LABA BERSIH', '3,900'],
              ['Less: Dividends / Kurang: Dividen', '800'],
              ['CHANGE IN RETAINED EARNINGS / PERUBAHAN LABA DITAHAN', '3,100']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'Similar to P1-1A, each transaction is analyzed for its effect on the accounting equation. Service revenue increases equity, while rent, salaries, and advertising are expenses that decrease equity. Dividends also decrease equity directly.',
      'Mirip P1-1A, setiap transaksi dianalisis pengaruhnya pada persamaan akuntansi. Pendapatan jasa menambah ekuitas, sedangkan sewa, gaji, dan iklan adalah beban yang mengurangi ekuitas. Dividen juga mengurangi ekuitas langsung.'
    )
  },

  // ============================================================
  // P1-2A: Donahue Veterinary Clinic - Tabular Analysis + Financial Statements
  // ============================================================
  {
    id: 'P1-2A',
    title: b('P1-2A: Donahue Veterinary Clinic', 'P1-2A: Donahue Veterinary Clinic'),
    question: b(
      'On August 31, 2017, the statement of financial position of Donahue Veterinary Clinic Ltd. showed:\n' +
      'Cash €9,000; Accounts Receivable €1,700; Supplies €600; Equipment €6,000;\n' +
      'Accounts Payable €3,600; Share Capital-Ordinary €13,000; Retained Earnings €700.\n\n' +
      'During September, the following transactions occurred:\n' +
      '1. Paid €2,900 cash for accounts payable due.\n' +
      '2. Collected €1,300 of accounts receivable.\n' +
      '3. Purchased additional equipment for €2,100, paying €800 in cash and the balance on account.\n' +
      '4. Recognized revenue of €7,300, of which €2,500 is collected in cash and the balance is due in October.\n' +
      '5. Declared and paid a €400 cash dividend.\n' +
      '6. Paid salaries €1,700, rent for September €900, and advertising expense €200.\n' +
      '7. Incurred utilities expense for month on account €170.\n' +
      '8. Received €10,000 from Capital Bank on a 6-month note payable.\n\n' +
      'Instructions:\n' +
      '(a) Prepare a tabular analysis of the September transactions beginning with August 31 balances.\n' +
      'Column headings: Cash + Accounts Receivable + Supplies + Equipment = Notes Payable + Accounts Payable + Share Capital + Retained Earnings + Revenues - Expenses - Dividends.\n' +
      '(b) Prepare an income statement for September, a retained earnings statement for September, and a statement of financial position at September 30, 2017.',
      'Pada 31 Agustus 2017, laporan posisi keuangan Klinik Hewan Donahue Ltd. menunjukkan:\n' +
      'Kas €9.000; Piutang Usaha €1.700; Perlengkapan €600; Peralatan €6.000;\n' +
      'Hutang Usaha €3.600; Modal Saham-Biasa €13.000; Laba Ditahan €700.\n\n' +
      'Selama September, transaksi berikut terjadi:\n' +
      '1. Membayar €2.900 tunai untuk hutang usaha yang jatuh tempo.\n' +
      '2. Mengumpulkan €1.300 piutang usaha.\n' +
      '3. Membeli peralatan tambahan €2.100, bayar €800 tunai dan sisanya pada rekening.\n' +
      '4. Mencatat pendapatan €7.300, dari mana €2.500 dikumpulkan tunai dan sisanya jatuh tempo Oktober.\n' +
      '5. Mengumumkan dan membayar dividen tunai €400.\n' +
      '6. Membayar gaji €1.700, sewa September €900, dan biaya iklan €200.\n' +
      '7. Mengakibatkan biaya utilitas bulan ini pada rekening €170.\n' +
      '8. Menerima €10.000 dari Bank Capital atas catatan hutang 6 bulan.\n\n' +
      'Instruksi:\n' +
      '(a) Siapkan analisis tabel transaksi September dimulai dari saldo 31 Agustus.\n' +
      'Judul kolom: Kas + Piutang Usaha + Perlengkapan + Peralatan = Catatan Hutang + Hutang Usaha + Modal Saham + Laba Ditahan + Pendapatan - Beban - Dividen.\n' +
      '(b) Siapkan laporan laba rugi September, laporan laba ditahan September, dan laporan posisi keuangan 30 September 2017.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('Beginning Balances + 8 September Transactions', 'Saldo Awal + 8 Transaksi September'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Tabular Analysis - September Transactions (Donahue Veterinary Clinic)', 'Analisis Tabel - Transaksi September (Klinik Hewan Donahue)'),
            head: [
              b('Date / Tgl', 'Date / Tgl'),
              b('Cash / Kas', 'Cash / Kas'),
              b('A/R / Piutang', 'A/R / Piutang'),
              b('Supplies / Perlengkapan', 'Supplies / Perlengkapan'),
              b('Equipment / Peralatan', 'Equipment / Peralatan'),
              b('Notes Pay. / Catatan Hutang', 'Notes Pay. / Catatan Hutang'),
              b('A/P / Hutang Usaha', 'A/P / Hutang Usaha'),
              b('Share Cap. / Modal Saham', 'Share Cap. / Modal Saham'),
              b('Ret. Earn. / Laba Ditahan', 'Ret. Earn. / Laba Ditahan'),
              b('Revenue / Pendapatan', 'Revenue / Pendapatan'),
              b('Expenses / Beban', 'Expenses / Beban'),
              b('Dividends / Dividen', 'Dividends / Dividen')
            ],
            rows: [
              ['Aug 31 Bal', '9,000', '1,700', '600', '6,000', '', '3,600', '13,000', '700', '', '', ''],
              ['1', '-2,900', '', '', '', '', '-2,900', '', '', '', ''],
              ['2', '1,300', '-1,300', '', '', '', '', '', '', '', ''],
              ['3', '-800', '', '', '2,100', '', '1,300', '', '', '', ''],
              ['4', '2,500', '4,800', '', '', '', '', '', '7,300', '', '7,300'],
              ['5', '-400', '', '', '', '', '', '', '', '400', '-400'],
              ['6', '-3,600', '', '', '', '', '', '', '', '3,600', '-3,600'],
              ['7', '', '', '', '', '', '170', '', '', '170', '-170'],
              ['8', '10,000', '', '', '', '10,000', '', '', '', '', ''],
              ['Bal.', '13,100', '4,800', '600', '8,100', '10,000', '970', '13,000', '4,570', '7,300', '2,970', '400']
            ],
            align: ['center', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Prepare Financial Statements from Tabular Analysis', 'Siapkan Laporan Keuangan dari Analisis Tabel'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Income Statement - Donahue Veterinary Clinic (September 2017)', 'Laporan Laba Rugi - Donahue Veterinary Clinic (September 2017)'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (€) / Jumlah (€)', 'Jumlah (€) / Jumlah (€)')
            ],
            rows: [
              ['Service Revenue / Pendapatan Jasa', '7,300'],
              ['Expenses / Beban:', ''],
              ['  Salaries Expense / Beban Gaji', '1,700'],
              ['  Rent Expense / Beban Sewa', '900'],
              ['  Advertising Expense / Beban Iklan', '200'],
              ['  Utilities Expense / Beban Utilitas', '170'],
              ['Total Expenses / Total Beban', '2,970'],
              ['NET INCOME / LABA BERSIH', '4,330'],
              ['Less: Dividends / Kurang: Dividen', '400'],
              ['CHANGE IN RETAINED EARNINGS / PERUBAHAN LABA DITAHAN', '3,930']
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
            caption: b('Retained Earnings Statement - September 2017', 'Laporan Laba Ditahan - September 2017'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (€) / Jumlah (€)', 'Jumlah (€) / Jumlah (€)')
            ],
            rows: [
              ['Retained Earnings, Aug 31 / Laba Ditahan, 31 Agu', '700'],
              ['Add: Net Income / Tambah: Laba Bersich', '4,330'],
              ['Less: Dividends / Kurang: Dividen', '400'],
              ['Retained Earnings, Sep 30 / Laba Ditahan, 30 Sep', '4,630']
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
            caption: b('Statement of Financial Position - September 30, 2017', 'Laporan Posisi Keuangan - 30 September 2017'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (€) / Jumlah (€)', 'Jumlah (€) / Jumlah (€)')
            ],
            rows: [
              ['ASSETS / ASET', ''],
              ['  Cash / Kas', '13,100'],
              ['  Accounts Receivable / Piutang Usaha', '4,800'],
              ['  Supplies / Perlengkapan', '600'],
              ['  Equipment / Peralatan', '8,100'],
              ['Total Assets / Total Aset', '26,600'],
              ['LIABILITIES & EQUITY / LIABILITAS & EKUITAS', ''],
              ['  Notes Payable / Catatan Hutang', '10,000'],
              ['  Accounts Payable / Hutang Usaha', '970'],
              ['Total Liabilities / Total Liabilitas', '10,970'],
              ['  Share Capital / Modal Saham', '13,000'],
              ['  Retained Earnings / Laba Ditahan', '4,630'],
              ['Total Equity / Total Ekuitas', '17,630'],
              ['Total L & E / Total L & E', '28,600']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'This problem combines transaction analysis with financial statement preparation. The tabular analysis tracks all account changes. Key check figures: Total assets €13,120; Net income €4,330. The income statement, retained earnings statement, and statement of financial position are prepared from the final column balances of the tabular analysis.',
      'Masalah ini menggabungkan analisis transaksi dengan penyusunan laporan keuangan. Analisis tabel melacak perubahan semua akun. Angka kunci: Total aset €13.120; Laba bersih €4.330. Laporan laba rugi, laporan laba ditahan, dan laporan posisi keuangan disusun dari saldo kolom akhir analisis tabel.'
    )
  },

  // ============================================================
  // P1-3A: Park Flying School - Financial Statements
  // ============================================================
  {
    id: 'P1-3A',
    title: b('P1-3A: Park Flying School', 'P1-3A: Park Flying School'),
    question: b(
      'On May 1, 2017, Park Flying School Ltd. was started with an investment of W45,000 cash.\n' +
      'Following are the assets and liabilities on May 31, 2017, and revenues and expenses for May (all amounts in thousands):\n' +
      'Cash W4,500; Accounts Receivable W7,420; Equipment W64,000;\n' +
      'Notes Payable W28,000; Accounts Payable W1,400;\n' +
      'Service Revenue W6,800; Rent Expense W1,000; Maintenance and Repairs Expense W400;\n' +
      'Advertising Expense W500; Gasoline Expense W2,500; Utilities Expense W400.\n\n' +
      'No additional investments were made in May, but the company paid dividends of W480,000 during the month.\n\n' +
      'Instructions:\n' +
      '(a) Prepare an income statement and a retained earnings statement for the month of May and a statement of financial position at May 31. (Show numbers in thousands.)\n' +
      '(b) Prepare an income statement and a retained earnings statement for May assuming the following data are not included above: (1) W900,000 worth of services were performed and billed but not collected at May 31, and (2) W1,500,000 of gasoline expense was incurred but not paid.',
      'Pada 1 Mei 2017, Park Flying School Ltd. didirikan dengan investasi W45.000 tunai.\n' +
      'Berikut aset dan liabilitas pada 31 Mei 2017, serta pendapatan dan beban untuk Mei (semua jumlah dalam ribuan):\n' +
      'Kas W4.500; Piutang Usaha W7.420; Peralatan W64.000;\n' +
      'Catatan Hutang W28.000; Hutang Usaha W1.400;\n' +
      'Pendapatan Jasa W6.800; Beban Sewa W1.000; Beban Perawatan & Perbaikan W400;\n' +
      'Beban Iklan W500; Beban Bensin W2.500; Beban Utilitas W400.\n\n' +
      'Tidak ada investasi tambahan di Mei, tetapi perusahaan membayar dividen W480.000 selama bulan ini.\n\n' +
      'Instruksi:\n' +
      '(a) Siapkan laporan laba rugi dan laporan laba ditahan untuk bulan Mei serta laporan posisi keuangan pada 31 Mei. (Tampilkan angka dalam ribuan.)\n' +
      '(b) Siapkan laporan laba rugi dan laporan laba ditahan untuk Mei dengan asumsi data berikut tidak termasuk di atas: (1) Jasa senilai W900.000 telah dilakukan dan ditagihkan tetapi belum dikumpulkan pada 31 Mei, dan (2) Beban bensin W1.500.000 telah timbul tetapi belum dibayar.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('Income Statement', 'Laporan Laba Rugi'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Income Statement - Park Flying School (May 2017)', 'Laporan Laba Rugi - Park Flying School (Mei 2017)'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (W thousands) / Jumlah (W ribuan)', 'Jumlah (W ribuan) / Jumlah (W ribuan)')
            ],
            rows: [
              ['Service Revenue / Pendapatan Jasa', '6,800'],
              ['Expenses / Beban:', ''],
              ['  Rent Expense / Beban Sewa', '1,000'],
              ['  Maintenance & Repairs / Perawatan & Perbaikan', '400'],
              ['  Advertising Expense / Beban Iklan', '500'],
              ['  Gasoline Expense / Beban Bensin', '2,500'],
              ['  Utilities Expense / Beban Utilitas', '400'],
              ['Total Expenses / Total Beban', '4,800'],
              ['NET INCOME / LABA BERSIH', '2,000']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(a)',
        given: b('Retained Earnings Statement', 'Laporan Laba Ditahan'),
        blocks: [
          {
            type: 'table',
            caption: b('Retained Earnings Statement - May 2017', 'Laporan Laba Ditahan - Mei 2017'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (W thousands) / Jumlah (W ribuan)', 'Jumlah (W ribuan) / Jumlah (W ribuan)')
            ],
            rows: [
              ['Retained Earnings, May 1 / Laba Ditahan, 1 Mei', '0'],
              ['Add: Net Income / Tambah: Laba Bersih', '2,000'],
              ['Less: Dividends / Kurang: Dividen', '480'],
              ['Retained Earnings, May 31 / Laba Ditahan, 31 Mei', '1,520']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(a)',
        given: b('Statement of Financial Position', 'Laporan Posisi Keuangan'),
        blocks: [
          {
            type: 'table',
            caption: b('Statement of Financial Position - May 31, 2017', 'Laporan Posisi Keuangan - 31 Mei 2017'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (W thousands) / Jumlah (W ribuan)', 'Jumlah (W ribuan) / Jumlah (W ribuan)')
            ],
            rows: [
              ['ASSETS / ASET', ''],
              ['  Cash / Kas', '4,500'],
              ['  Accounts Receivable / Piutang Usaha', '7,420'],
              ['  Equipment / Peralatan', '64,000'],
              ['Total Assets / Total Aset', '75,920'],
              ['LIABILITIES & EQUITY / LIABILITAS & EKUITAS', ''],
              ['  Notes Payable / Catatan Hutang', '28,000'],
              ['  Accounts Payable / Hutang Usaha', '1,400'],
              ['Total Liabilities / Total Liabilitas', '29,400'],
              ['  Share Capital / Modal Saham', '45,000'],
              ['  Retained Earnings / Laba Ditahan', '1,520'],
              ['Total Equity / Total Ekuitas', '46,520'],
              ['Total L & E / Total L & E', '75,920']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Additional accruals: unbilled revenue W900, unpaid gas expense W1,500', 'Penyesuaian tambahan: pendapatan belum ditagih W900, beban bensin belum dibayar W1.500'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Income Statement - Park Flying School (May 2017) - Adjusted', 'Laporan Laba Rugi - Park Flying School (Mei 2017) - Disesuaikan'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (W thousands) / Jumlah (W ribuan)', 'Jumlah (W ribuan) / Jumlah (W ribuan)')
            ],
            rows: [
              ['Service Revenue / Pendapatan Jasa', '7,700'],
              ['Expenses / Beban:', ''],
              ['  Rent Expense / Beban Sewa', '1,000'],
              ['  Maintenance & Repairs / Perawatan & Perbaikan', '400'],
              ['  Advertising Expense / Beban Iklan', '500'],
              ['  Gasoline Expense / Beban Bensin', '4,000'],
              ['  Utilities Expense / Beban Utilitas', '400'],
              ['Total Expenses / Total Beban', '6,300'],
              ['NET INCOME / LABA BERSIH', '1,400']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'Part (a) uses the given data directly. Part (b) requires accrual adjustments: recognizing revenue earned but not yet billed (accrued revenue) and recognizing expense incurred but not yet paid (accrued expense). These are the two main types of accrual adjustments.',
      'Bagian (a) menggunakan data yang diberikan langsung. Bagian (b) memerlukan penyesuaian akrual: mengenali pendapatan yang sudah diperoleh tetapi belum ditagih (pendapatan akrual) dan mengenali beban yang sudah timbul tetapi belum dibayar (beban akrual). Ini dua jenis utama penyesuaian akrual.'
    )
  },

  // ============================================================
  // P1-4A: Stiner Deliveries - Accounting Equation + Financial Statements
  // ============================================================
  {
    id: 'P1-4A',
    title: b('P1-4A: Stiner Deliveries', 'P1-4A: Stiner Deliveries'),
    question: b(
      'Matt Stiner started a delivery service, Stiner Deliveries Ltd., on June 1, 2017.\n' +
      'Transactions during June:\n' +
      'Jun 1: Shareholders invested €10,000 cash for ordinary shares.\n' +
      'Jun 2: Purchased used van for €14,000; paid €2,000 cash, signed note payable for balance.\n' +
      'Jun 3: Paid €500 office rent.\n' +
      'Jun 5: Performed services worth €4,800 on account.\n' +
      'Jun 9: Declared and paid €300 cash dividends.\n' +
      'Jun 12: Purchased supplies €150 on account.\n' +
      'Jun 15: Received €1,250 cash for services on Jun 5.\n' +
      'Jun 17: Purchased gasoline €100 on account.\n' +
      'Jun 20: Received €1,500 cash for services performed.\n' +
      'Jun 23: Paid €500 on note payable.\n' +
      'Jun 26: Paid €250 for utilities.\n' +
      'Jun 29: Paid gasoline purchased on account Jun 17.\n' +
      'Jun 30: Paid €1,000 employee salaries.\n\n' +
      'Check figures: (a) Ending cash €15,900; (b) Net income €4,330; Total assets €29,800.\n\n' +
      'Instructions:\n' +
      '(a) Show effects on accounting equation: Assets = Liabilities + Equity with columns for Cash, A/R, Supplies, Equipment, A/P, Note Payable, Share Capital, Retained Earnings (Rev - Exp - Div).\n' +
      '(b) Prepare income statement for June.\n' +
      '(c) Prepare statement of financial position at June 30, 2017.',
      'Matt Stiner memulai jasa pengiriman, Stiner Deliveries Ltd., pada 1 Juni 2017.\n' +
      'Transaksi Juni:\n' +
      '1 Jun: Pemegang saham investasi €10.000 tunai untuk saham biasa.\n' +
      '2 Jun: Beli van bekas €14.000; bayar €2.000 tunai, tanda tangan catatan hutang untuk sisanya.\n' +
      '3 Jun: Bayar €500 sewa kantor.\n' +
      '5 Jun: Lakukan jasa €4.800 pada rekening.\n' +
      '9 Jun: Umumkan dan bayar €300 dividen tunai.\n' +
      '12 Jun: Beli perlengkapan €150 pada rekening.\n' +
      '15 Jun: Terima €1.250 tunai untuk jasa 5 Jun.\n' +
      '17 Jun: Beli bensin €100 pada rekening.\n' +
      '20 Jun: Terima €1.500 tunai untuk jasa dilakukan.\n' +
      '23 Jun: Bayar €500 pada catatan hutang.\n' +
      '26 Jun: Bayar €250 untuk utilitas.\n' +
      '29 Jun: Bayar bensin dibeli pada rekening 17 Jun.\n' +
      '30 Jun: Bayar €1.000 gaji karyawan.\n\n' +
      'Angka kunci: (a) Kas akhir €15.900; (b) Laba bersih €4.330; Total aset €29.800.\n\n' +
      'Instruksi:\n' +
      '(a) Tunjukkan efek pada persamaan akuntansi: Aset = Liabilitas + Ekuitas dengan kolom Kas, Piutang, Perlengkapan, Peralatan, H/Usaha, Catatan Hutang, Modal Saham, Laba Ditahan (Pend - Beban - Div).\n' +
      '(b) Siapkan laporan laba rugi Juni.\n' +
      '(c) Siapkan laporan posisi keuangan 30 Juni 2017.'
    ),
    parts: [
      {
        label: '(a)',
        given: b('13 June Transactions with Beginning Zero Balances', '13 Transaksi Juni dengan Saldo Awal Nol'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Tabular Analysis - Stiner Deliveries (June)', 'Analisis Tabel - Stiner Deliveries (Juni)'),
            head: [
              b('Date / Tgl', 'Date / Tgl'),
              b('Cash / Kas', 'Cash / Kas'),
              b('A/R / Piutang', 'A/R / Piutang'),
              b('Supplies / Perlengkapan', 'Supplies / Perlengkapan'),
              b('Van/Equip. / Van/Peralatan', 'Van/Equip. / Van/Peralatan'),
              b('A/P / Hutang Usaha', 'A/P / Hutang Usaha'),
              b('Note Pay. / Catatan Hutang', 'Note Pay. / Catatan Hutang'),
              b('Share Cap. / Modal Saham', 'Share Cap. / Modal Saham'),
              b('Revenue / Pendapatan', 'Revenue / Pendapatan'),
              b('Expenses / Beban', 'Expenses / Beban'),
              b('Dividends / Dividen', 'Dividends / Dividen'),
              b('Ret. Earn. / Laba Ditahan', 'Ret. Earn. / Laba Ditahan')
            ],
            rows: [
              ['1', '10,000', '', '', '', '', '', '10,000', '', '', '', ''],
              ['2', '-2,000', '', '', '14,000', '', '12,000', '', '', '', ''],
              ['3', '-500', '', '', '', '', '', '', '500', '', '-500'],
              ['5', '', '4,800', '', '', '', '', '4,800', '', '', '4,800'],
              ['9', '-300', '', '', '', '', '', '', '', '300', '-300'],
              ['12', '', '', '150', '', '150', '', '', '', '', ''],
              ['15', '1,250', '-1,250', '', '', '', '', '', '', '', ''],
              ['17', '', '', '', '', '100', '', '', '', '', ''],
              ['20', '1,500', '-1,500', '', '', '', '', '', '', '', ''],
              ['23', '-500', '', '', '', '', '-500', '', '', '', ''],
              ['26', '-250', '', '', '', '', '', '', '250', '', '-250'],
              ['29', '', '', '', '', '-100', '', '', '', '', ''],
              ['30', '-1,000', '', '', '', '', '', '', '1,000', '', '-1,000'],
              ['Bal.', '15,900', '2,050', '150', '14,000', '250', '11,500', '10,000', '6,300', '1,850', '300', '4,330']
            ],
            align: ['center', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(b)',
        given: b('Prepare Income Statement from Tabular Analysis', 'Siapkan Laporan Laba Rugi dari Analisis Tabel'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Income Statement - Stiner Deliveries (June 2017)', 'Laporan Laba Rugi - Stiner Deliveries (Juni 2017)'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (€) / Jumlah (€)', 'Jumlah (€) / Jumlah (€)')
            ],
            rows: [
              ['Service Revenue / Pendapatan Jasa', '6,300'],
              ['Expenses / Beban:', ''],
              ['  Rent Expense / Beban Sewa', '500'],
              ['  Gasoline Expense / Beban Bensin', '100'],
              ['  Utilities Expense / Beban Utilitas', '250'],
              ['  Salaries Expense / Beban Gaji', '1,000'],
              ['Total Expenses / Total Beban', '1,850'],
              ['NET INCOME / LABA BERSIH', '4,450']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      },
      {
        label: '(c)',
        given: b('Prepare Statement of Financial Position at June 30', 'Siapkan Laporan Posisi Keuangan 30 Juni'),
        answer: b('', ''),
        blocks: [
          {
            type: 'table',
            caption: b('Statement of Financial Position - June 30, 2017', 'Laporan Posisi Keuangan - 30 Juni 2017'),
            head: [
              b('Item / Item', 'Item / Item'),
              b('Amount (€) / Jumlah (€)', 'Jumlah (€) / Jumlah (€)')
            ],
            rows: [
              ['ASSETS / ASET', ''],
              ['  Cash / Kas', '15,900'],
              ['  Accounts Receivable / Piutang Usaha', '2,050'],
              ['  Supplies / Perlengkapan', '150'],
              ['  Van/Equipment / Van/Peralatan', '14,000'],
              ['Total Assets / Total Aset', '32,100'],
              ['LIABILITIES & EQUITY / LIABILITAS & EKUITAS', ''],
              ['  Accounts Payable / Hutang Usaha', '250'],
              ['  Notes Payable / Catatan Hutang', '11,500'],
              ['Total Liabilities / Total Liabilitas', '11,750'],
              ['  Share Capital / Modal Saham', '10,000'],
              ['  Retained Earnings / Laba Ditahan', '4,330'],
              ['Total Equity / Total Ekuitas', '14,330'],
              ['Total L & E / Total L & E', '26,080']
            ],
            align: ['left', 'right'],
            compact: false
          }
        ]
      }
    ],
    explanation: b(
      'This comprehensive problem requires transaction analysis using the expanded accounting equation, then preparing the two main financial statements. The check figures help verify accuracy. The van is recorded as equipment. Note payable decreases with each payment.',
      'Masalah komprehensif ini memerlukan analisis transaksi menggunakan persamaan akuntansi yang diperluas, lalu menyusun dua laporan keuangan utama. Angka kunci membantu verifikasi akurasi. Van dicatat sebagai peralatan. Catatan hutang berkurang dengan setiap pembayaran.'
    )
  },

  // ============================================================
  // BYP-type exercises for Chapter 1 (Summary only - no tables needed for essay questions)
  // ============================================================
  {
    id: 'BYP1-1',
    title: b('BYP1-1: Ethics and Investments', 'BYP1-1: Etika dan Investasi'),
    question: b(
      'Ethics scenario: A company controller is pressured by the CFO to delay recording expenses until the next quarter to meet earnings targets. The controller knows this violates the matching principle and IFRS.',
      'Skenario etika: Kontroler perusahaan ditekan oleh CFO untuk menunda pencatatan beban hingga kuartal berikutnya untuk mencapai target laba. Kontroler tahu ini melanggar prinsip pencocokan dan IFRS.'
    ),
    parts: [
      {
        label: '',
        given: b('Should the controller delay recording expenses?', 'Apakah kontroler harus menunda pencatatan beban?'),
        answer: b('No. The matching principle requires expenses to be recorded in the same period as the related revenues. Delaying expense recognition misstates financial statements and violates IFRS (IAS 1). The controller should refuse and document the pressure.', 'Tidak. Prinsip pencocokan mewajibkan beban dicatat di periode yang sama dengan pendapatan terkait. Menunda pengakuan beban menyesatkan laporan keuangan dan melanggar IFRS (IAS 1). Kontroler harus menolak dan mendokumentasikan tekanan tersebut.')
      }
    ],
    explanation: b(
      'The matching principle (prinsip pencocokan) is fundamental to accrual accounting and IFRS. Expenses must be matched with the revenues they help generate in the same period. Deliberate manipulation violates ethical standards and accounting standards.',
      'Prinsip pencocokan fundamental untuk akuntansi akrual dan IFRS. Beban harus dicocokkan dengan pendapatan yang dibantu di periode yang sama. Manipulasi sengaja melanggar standar etika dan standar akuntansi.'
    )
  },
  {
    id: 'BYP1-2',
    title: b('BYP1-2: Comparative Analysis', 'BYP1-2: Analisis Perbandingan'),
    question: b(
      'Comparative analysis: You are given the financial statements of two companies in the same industry. Company A uses IFRS, Company B uses local GAAP. Identify key differences in presentation and measurement.',
      'Analisis perbandingan: Anda diberikan laporan keuangan dua perusahaan di industri yang sama. Perusahaan A menggunakan IFRS, Perusahaan B menggunakan GAAP lokal. Identifikasi perbedaan kunci dalam presentasi dan pengukuran.'
    ),
    parts: [
      {
        label: '',
        given: b('Two companies financial statements', 'Laporan keuangan dua perusahaan'),
        answer: b('Key differences may include: revenue recognition timing, lease classification, financial instrument measurement, impairment testing, and presentation of statement of financial position (IFRS requires current/non-current classification).', 'Perbedaan kunci bisa mencakup: pengakuan pendapatan timing, klasifikasi sewa, pengukuran instrumen keuangan, pengujian penurunan nilai, dan presentasi laporan posisi keuangan (IFRS mewajibkan klasifikasi lancar/tidak lancar).')
      }
    ],
    explanation: b(
      'IFRS and local GAAP often differ in specific measurement and presentation requirements. Understanding these differences is crucial for comparative analysis and investment decisions.',
      'IFRS dan GAAP lokal sering berbeda dalam persyaratan pengukuran dan presentasi spesifik. Memahami perbedaan ini penting untuk analisis perbandingan dan keputusan investasi.'
    )
  },
  {
    id: 'BYP1-3',
    title: b('BYP1-3: Missing Information', 'BYP1-3: Informasi yang Hilang'),
    question: b(
      'Given partial financial statement data, determine the missing amounts using the accounting equation and relationships between statements.',
      'Diberikan data laporan keuangan parsial, tentukan jumlah yang hilang menggunakan persamaan akuntansi dan hubungan antar laporan.'
    ),
    parts: [
      {
        label: '',
        given: b('Partial financial data with missing amounts', 'Data keuangan parsial dengan jumlah yang hilang'),
        answer: b('Use the accounting equation Assets = Liabilities + Equity. Net Income = Revenue - Expenses. Retained Earnings_end = Retained Earnings_beg + Net Income - Dividends. Total Assets = Total Liabilities + Total Equity.', 'Gunakan persamaan akuntansi Aset = Liabilitas + Ekuitas. Laba Bersih = Pendapatan - Beban. Laba Ditahan_akhir = Laba Ditahan_awal + Laba Bersih - Dividen. Total Aset = Total Liabilitas + Total Ekuitas.')
      }
    ],
    explanation: b(
      'Financial statements are interconnected. The accounting equation and the relationships between the income statement, retained earnings statement, and statement of financial position allow computation of missing values.',
      'Laporan keuangan saling berkaitan. Persamaan akuntansi dan hubungan antara laporan laba rugi, laporan laba ditahan, dan laporan posisi keuangan memungkinkan perhitungan nilai yang hilang.'
    )
  },
  {
    id: 'BYP1-4',
    title: b('BYP1-4: Comprehensive Problem', 'BYP1-4: Masalah Komprehensif'),
    question: b(
      'Comprehensive problem covering all Chapter 1 concepts: accounting equation, transaction analysis, financial statements, and ethics.',
      'Masalah komprehensif mencakup semua konsep Bab 1: persamaan akuntansi, analisis transaksi, laporan keuangan, dan etika.'
    ),
    parts: [
      {
        label: '',
        given: b('Multi-part problem covering Chapter 1', 'Masalah multi-bagian mencakup Bab 1'),
        answer: b('Apply accounting equation to each transaction. Prepare all three financial statements. Identify ethical issues in financial reporting. Use check figures to verify accuracy.', 'Terapkan persamaan akuntansi pada setiap transaksi. Siapkan tiga laporan keuangan. Identifikasi isu etika dalam pelaporan keuangan. Gunakan angka kunci untuk memverifikasi akurasi.')
      }
    ],
    explanation: b(
      'Comprehensive problems integrate multiple concepts. They test the ability to apply the accounting cycle from transaction analysis through financial statement preparation, while considering ethical implications.',
      'Masalah komprehensif mengintegrasikan banyak konsep. Menguji kemampuan menerapkan siklus akuntansi dari analisis transaksi hingga penyusunan laporan keuangan, sambil mempertimbangkan implikasi etika.'
    )
  },
  {
    id: 'BYP1-5',
    title: b('BYP1-5: Analysis and Evaluation', 'BYP1-5: Analisis dan Evaluasi'),
    question: b(
      'Analysis and evaluation exercise requiring critical thinking about financial statement relationships and accounting policy choices.',
      'Latihan analisis dan evaluasi yang memerlukan pemikiran kritis tentang hubungan laporan keuangan dan pilihan kebijakan akuntansi.'
    ),
    parts: [
      {
        label: '',
        given: b('Scenario requiring analysis', 'Skenario yang memerlukan analisis'),
        answer: b('Evaluate the impact of different accounting policies on financial statements. Consider the qualitative characteristics of useful financial information: relevance, faithful representation, comparability, verifiability, timeliness, understandability.', 'Evaluasi dampak kebijakan akuntansi berbeda pada laporan keuangan. Pertimbangkan kualitatif karakteristik informasi keuangan yang berguna: relevansi, representasi setimbang, komparabilitas, keberverifikasi, ketepatan waktu, kemudahan pemahaman.')
      }
    ],
    explanation: b(
      'Analysis and evaluation require going beyond mechanical application of rules to understanding the economic substance and implications of accounting choices.',
      'Analisis dan evaluasi memerlukan melampaui penerapan mekanis aturan untuk memahami substansi ekonomi dan implikasi pilihan akuntansi.'
    )
  },
  {
    id: 'BYP1-6',
    title: b('BYP1-6: Full Chapter Review', 'BYP1-6: Ulasan Lengkap Bab'),
    question: b(
      'Full chapter review exercise covering all learning objectives of Chapter 1.',
      'Latihan ulasan lengkap bab mencakup semua tujuan pembelajaran Bab 1.'
    ),
    parts: [
      {
        label: '',
        given: b('Review questions for Chapter 1', 'Pertanyaan ulasan untuk Bab 1'),
        answer: b('Review all key concepts: accounting equation, transaction analysis, financial statements, accounting assumptions and principles, ethics in accounting, IFRS framework.', 'Ulas semua konsep kunci: persamaan akuntansi, analisis transaksi, laporan keuangan, asumsi dan prinsip akuntansi, etika dalam akuntansi, kerangka IFRS.')
      }
    ],
    explanation: b(
      'Chapter review consolidates learning. Ensure understanding of the accounting equation as the foundation, how transactions affect it, and how financial statements communicate results to users.',
      'Ulasan bab mengkonsolidasi pembelajaran. Pastikan pemahaman persamaan akuntansi sebagai fondasi, bagaimana transaksi mempengaruhinya, dan bagaimana laporan keuangan mengomunikasikan hasil kepada pengguna.'
    )
  }
];
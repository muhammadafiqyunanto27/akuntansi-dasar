import { b, type Chapter } from './types';

export const chapter1: Chapter = {
  slug: '1',
  number: 1,
  roman: 'I',
  title: b('Accounting in Action', 'Akuntansi dalam Aksi'),
  subtitle: b(
    'The language of business, the accounting equation, and the five financial statements.',
    'Bahasa bisnis, persamaan akuntansi, dan lima laporan keuangan.'
  ),
  kicker: b('Chapter 1 · pages 2–51', 'Bab 1 · hlm. 2–51'),
  sourcePages: '2–51',
  lead: b(
    'Accounting is the financial information system that identifies, records, and communicates economic events to people who make decisions. This chapter builds the vocabulary and the equation that every later chapter depends on.',
    'Akuntansi adalah sistem informasi keuangan yang mengidentifikasi, mencatat, dan mengomunikasikan peristiwa ekonomi kepada pihak yang mengambil keputusan. Bab ini membangun kosakata dan persamaan yang menjadi fondasi seluruh bab berikutnya.'
  ),
  objectives: [
    b('Explain the three activities of accounting and who uses accounting data.', 'Menjelaskan tiga aktivitas akuntansi dan siapa yang memakai data akuntansi.'),
    b('Describe the building blocks: ethics, standards, measurement principles, and assumptions.', 'Menjelaskan fondasi akuntansi: etika, standar, prinsip pengukuran, dan asumsi.'),
    b('Apply the basic accounting equation to business transactions.', 'Menerapkan persamaan dasar akuntansi pada transaksi bisnis.'),
    b('Explain how the five financial statements interrelate.', 'Menjelaskan keterkaitan lima laporan keuangan.'),
  ],
  sections: [
    {
      id: 'what-is-accounting',
      num: '1.1',
      tag: b('Foundation', 'Fondasi'),
      title: b('What is accounting?', 'Apa itu akuntansi?'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Accounting is the <strong>financial information system</strong> that provides the insights needed to understand what is happening financially inside an organisation. It is not just bookkeeping: it is the whole chain from capturing an event to explaining what the numbers mean.',
            'Akuntansi adalah <strong>sistem informasi keuangan</strong> yang memberi wawasan untuk memahami apa yang terjadi secara finansial di dalam organisasi. Akuntansi bukan sekadar pembukuan: ia adalah rantai lengkap dari menangkap peristiwa sampai menjelaskan makna angka-angka tersebut.'
          ),
        },
        {
          type: 'p',
          text: b(
            'The book defines three basic activities: <strong>identify</strong> economic events, <strong>record</strong> them in a systematic and chronological diary measured in money, and <strong>communicate</strong> the collected information through accounting reports called financial statements.',
            'Buku ini mendefinisikan tiga aktivitas dasar: <strong>mengidentifikasi</strong> peristiwa ekonomi, <strong>mencatat</strong> secara sistematis dan kronologis dalam satuan uang, serta <strong>mengomunikasikan</strong> informasi melalui laporan akuntansi yang disebut laporan keuangan.'
          ),
        },
        {
          type: 'table',
          head: [b('Activity', 'Aktivitas'), b('What happens', 'Yang terjadi'), b('Example', 'Contoh')],
          rows: [
            [
              b('Identify', 'Identifikasi'),
              b('Select the events that are relevant to the business.', 'Memilih peristiwa yang relevan bagi bisnis.'),
              b('A sale, a purchase, a loan, a payment of wages.', 'Penjualan, pembelian, pinjaman, pembayaran upah.'),
            ],
            [
              b('Record', 'Pencatatan'),
              b('Keep a systematic, chronological diary in monetary units.', 'Menyimpan catatan sistematis dan kronologis dalam satuan uang.'),
              b('Journal entries, ledger accounts.', 'Ayat jurnal, akun buku besar.'),
            ],
            [
              b('Communicate', 'Komunikasi'),
              b('Aggregate similar transactions and report them in standard statements.', 'Menggabungkan transaksi sejenis dan melaporkannya dalam format baku.'),
              b('Income statement, statement of financial position.', 'Laporan laba rugi, laporan posisi keuangan.'),
            ],
          ],
        },
        {
          type: 'callout',
          title: b('Bookkeeping vs accounting', 'Pembukuan vs akuntansi'),
          text: b(
            'Bookkeeping covers only the recording step. Accounting also includes identification, analysis, interpretation, and communication of the reported information.',
            'Pembukuan hanya mencakup langkah pencatatan. Akuntansi juga mencakup identifikasi, analisis, interpretasi, dan komunikasi atas informasi yang dilaporkan.'
          ),
        },
        { type: 'h4', text: b('Internal users: running the business', 'Pemakai internal: menjalankan bisnis') },
        {
          type: 'p',
          text: b(
            'Internal users are managers who plan, organise, and run the business — marketing managers, production supervisors, finance directors, and company officers. They need detailed, timely information. Managerial accounting provides internal reports for these decisions.',
            'Pemakai internal adalah manajer yang merencanakan, mengorganisasi, dan menjalankan bisnis — manajer pemasaran, supervisor produksi, direktur keuangan, dan pejabat perusahaan. Mereka membutuhkan informasi rinci dan tepat waktu. Akuntansi manajemen menyediakan laporan internal untuk keputusan tersebut.'
          ),
        },
        { type: 'h4', text: b('External users: judging the business from outside', 'Pemakai eksternal: menilai bisnis dari luar') },
        {
          type: 'p',
          text: b(
            'External users are individuals and organisations outside the company. The two most common are <strong>investors</strong>, who decide whether to buy, hold, or sell shares, and <strong>creditors</strong>, who evaluate whether to grant credit or lend money. Tax authorities, regulators, customers, and labour unions also use the statements.',
            'Pemakai eksternal adalah individu dan organisasi di luar perusahaan. Dua yang paling umum adalah <strong>investor</strong>, yang memutuskan membeli, menahan, atau menjual saham, dan <strong>kreditor</strong>, yang menilai apakah akan memberi kredit atau pinjaman. Otoritas pajak, regulator, pelanggan, dan serikat pekerja juga memakai laporan keuangan.'
          ),
        },
        {
          type: 'table',
          head: [b('Group', 'Kelompok'), b('Typical question', 'Pertanyaan khas')],
          rows: [
            [b('Investors', 'Investor'), b('Is the company earning satisfactory income?', 'Apakah perusahaan memperoleh laba yang memuaskan?')],
            [b('Creditors', 'Kreditor'), b('Will the company be able to pay its debts as they come due?', 'Apakah perusahaan mampu membayar utang saat jatuh tempo?')],
            [b('Management', 'Manajemen'), b('Which product line is the most profitable?', 'Lini produk mana yang paling menguntungkan?')],
            [b('Tax authorities', 'Otoritas pajak'), b('Does the company comply with tax laws?', 'Apakah perusahaan mematuhi peraturan pajak?')],
          ],
        },
      ],
    },
    {
      id: 'building-blocks',
      num: '1.2',
      tag: b('Framework', 'Kerangka'),
      title: b('Ethics, standards, and measurement', 'Etika, standar, dan pengukuran'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Standards only work if behaviour is ethical. The book defines <strong>ethics</strong> as the standards of conduct by which actions are judged as right or wrong, honest or dishonest, fair or not fair. Effective financial reporting depends on sound ethical behaviour — investors will not trust numbers they believe are rigged.',
            'Standar hanya berfungsi jika perilaku etis. Buku ini mendefinisikan <strong>etika</strong> sebagai standar perilaku untuk menilai tindakan benar atau salah, jujur atau tidak, adil atau tidak. Pelaporan keuangan yang efektif bergantung pada perilaku etis — investor tidak akan percaya pada angka yang dianggap dimanipulasi.'
          ),
        },
        { type: 'h4', text: b('Two standard-setting bodies', 'Dua lembaga penyusun standar') },
        {
          type: 'p',
          text: b(
            '<strong>IFRS</strong> (International Financial Reporting Standards) are issued by the <strong>IASB</strong> in London and are used in more than 130 countries. <strong>U.S. GAAP</strong> is issued by the <strong>FASB</strong>. The effort to reduce differences between the two is called <strong>convergence</strong>.',
            '<strong>IFRS</strong> (International Financial Reporting Standards) diterbitkan oleh <strong>IASB</strong> di London dan dipakai di lebih dari 130 negara. <strong>U.S. GAAP</strong> diterbitkan oleh <strong>FASB</strong>. Upaya mengurangi perbedaan keduanya disebut <strong>konvergensi</strong>.'
          ),
        },
        { type: 'h4', text: b('Two measurement principles', 'Dua prinsip pengukuran') },
        {
          type: 'table',
          head: [b('Principle', 'Prinsip'), b('Rule', 'Aturan'), b('Trade-off', 'Kompromi')],
          rows: [
            [
              b('Historical cost', 'Biaya historis'),
              b('Record assets at their cost, and keep that cost over the life of the asset.', 'Mencatat aset sebesar biayanya, dan mempertahankan biaya itu sepanjang umur aset.'),
              b('Factual and verifiable, but may become less relevant over time.', 'Faktual dan dapat diverifikasi, tetapi bisa makin tidak relevan seiring waktu.'),
            ],
            [
              b('Fair value', 'Nilai wajar'),
              b('Report assets and liabilities at the price to sell the asset or settle the liability.', 'Melaporkan aset dan liabilitas sebesar harga jual aset atau penyelesaian liabilitas.'),
              b('More relevant for actively traded items, but less factual.', 'Lebih relevan untuk item yang diperdagangkan aktif, tetapi kurang faktual.'),
            ],
          ],
        },
        {
          type: 'p',
          text: b(
            'The choice weighs <strong>relevance</strong> (information can make a difference in a decision) against <strong>faithful representation</strong> (the numbers and descriptions match reality). Most companies use cost for property, plant, and equipment; fair value is used extensively only where assets are actively traded, such as investment securities.',
            'Pilihannya menimbang <strong>relevansi</strong> (informasi dapat memengaruhi keputusan) dengan <strong>penyajian jujur</strong> (angka dan deskripsi sesuai kenyataan). Kebanyakan perusahaan memakai biaya historis untuk aset tetap; nilai wajar dipakai luas hanya ketika aset diperdagangkan aktif, seperti sekuritas investasi.'
          ),
        },
        { type: 'h4', text: b('Two key assumptions', 'Dua asumsi kunci') },
        {
          type: 'list',
          items: [
            b('<strong>Monetary unit assumption</strong> — only transaction data that can be expressed in money is recorded. The health of the owner or the morale of employees is important, but it cannot be quantified in money and is therefore excluded.', '<strong>Asumsi satuan moneter</strong> — hanya data transaksi yang dapat dinyatakan dalam uang yang dicatat. Kesehatan pemilik atau moral karyawan penting, tetapi tidak dapat diukur dalam uang sehingga tidak dimasukkan.'),
            b('<strong>Economic entity assumption</strong> — the activities of the entity are kept separate from the activities of its owner and of all other entities. Sally’s personal living costs do not belong in Sally’s Boutique.', '<strong>Asumsi entitas ekonomi</strong> — aktivitas entitas dipisahkan dari aktivitas pemilik dan entitas lain. Biaya hidup pribadi Sally tidak boleh masuk ke pembukuan Sally’s Boutique.'),
          ],
        },
      ],
    },
    {
      id: 'business-forms',
      num: '1.3',
      tag: b('Organisation', 'Bentuk usaha'),
      title: b('Forms of business organisation', 'Bentuk organisasi bisnis'),
      blocks: [
        {
          type: 'table',
          head: [b('Form', 'Bentuk'), b('Ownership', 'Kepemilikan'), b('Liability', 'Tanggung jawab'), b('Accounting note', 'Catatan akuntansi')],
          rows: [
            [
              b('Proprietorship', 'Usaha perseorangan'),
              b('One owner.', 'Satu pemilik.'),
              b('Unlimited personal liability.', 'Tanggung jawab pribadi tidak terbatas.'),
              b('Owner’s capital account; records kept separate from personal affairs.', 'Akun modal pemilik; pembukuan dipisahkan dari urusan pribadi.'),
            ],
            [
              b('Partnership', 'Persekutuan'),
              b('Two or more partners.', 'Dua pemilik atau lebih.'),
              b('Generally unlimited personal liability.', 'Umumnya tanggung jawab pribadi tidak terbatas.'),
              b('A capital account for each partner; a partnership agreement governs profit sharing.', 'Akun modal untuk setiap sekutu; perjanjian persekutuan mengatur pembagian laba.'),
            ],
            [
              b('Corporation', 'Perseroan'),
              b('Shareholders; ownership is easily transferable.', 'Pemegang saham; kepemilikan mudah dialihkan.'),
              b('Limited liability; unlimited life.', 'Tanggung jawab terbatas; umur tidak terbatas.'),
              b('Share capital—ordinary and retained earnings are reported separately in equity.', 'Modal saham biasa dan saldo laba dilaporkan terpisah di ekuitas.'),
            ],
          ],
        },
        {
          type: 'callout',
          title: b('Why the form matters', 'Mengapa bentuk usaha penting'),
          text: b(
            'The form determines how equity is presented. A proprietorship has one capital account; a partnership has one per partner; a corporation splits equity into share capital and retained earnings.',
            'Bentuk usaha menentukan penyajian ekuitas. Usaha perseorangan punya satu akun modal; persekutuan punya satu akun per sekutu; perseroan memisahkan ekuitas menjadi modal saham dan saldo laba.'
          ),
          tone: 'note',
        },
      ],
    },
    {
      id: 'accounting-equation',
      num: '1.4',
      tag: b('Core model', 'Model inti'),
      title: b('The basic accounting equation', 'Persamaan dasar akuntansi'),
      blocks: [
        {
          type: 'formula',
          label: b('The basic accounting equation', 'Persamaan dasar akuntansi'),
          expr: '<var>Assets</var> = <var>Liabilities</var> + <var>Equity</var>',
          note: b(
            'The equation applies to every economic entity, from a corner grocery store to a multinational corporation.',
            'Persamaan ini berlaku untuk semua entitas ekonomi, dari warung kecil sampai perusahaan multinasional.'
          ),
        },
        {
          type: 'list',
          items: [
            b('<strong>Assets</strong> are resources the business owns, with the capacity to provide future services or benefits that eventually produce cash inflows. Examples: cash, accounts receivable, supplies, equipment, land.', '<strong>Aset</strong> adalah sumber daya yang dimiliki bisnis, yang mampu memberi jasa atau manfaat masa depan dan pada akhirnya menghasilkan arus kas masuk. Contoh: kas, piutang usaha, perlengkapan, peralatan, tanah.'),
            b('<strong>Liabilities</strong> are claims against assets — existing debts and obligations such as accounts payable, notes payable, salaries and wages payable, and taxes payable. Creditors’ claims are paid before owners’ claims.', '<strong>Liabilitas</strong> adalah klaim atas aset — utang dan kewajiban yang ada seperti utang usaha, utang wesel, utang gaji dan upah, serta utang pajak. Klaim kreditor dibayar lebih dulu daripada klaim pemilik.'),
            b('<strong>Equity</strong> is the ownership claim on total assets: assets minus liabilities. It is residual equity — what is left after creditors are satisfied.', '<strong>Ekuitas</strong> adalah klaim pemilik atas total aset: aset dikurangi liabilitas. Ini adalah ekuitas residual — sisa setelah klaim kreditor dipenuhi.'),
          ],
        },
        { type: 'h4', text: b('Equity has two parts', 'Ekuitas terdiri dari dua bagian') },
        {
          type: 'p',
          text: b(
            '<strong>Share capital—ordinary</strong> is the amount paid in by shareholders for the ordinary shares they purchase. <strong>Retained earnings</strong> is the portion of equity accumulated through profitable operations, and it is affected by revenues, expenses, and dividends.',
            '<strong>Modal saham biasa</strong> adalah jumlah yang dibayarkan pemegang saham untuk saham biasa yang mereka beli. <strong>Saldo laba</strong> adalah bagian ekuitas yang terakumulasi dari operasi yang menguntungkan, dan dipengaruhi pendapatan, beban, serta dividen.'
          ),
        },
        {
          type: 'table',
          head: [b('Item', 'Unsur'), b('Effect on equity', 'Pengaruh terhadap ekuitas'), b('Why', 'Sebab')],
          rows: [
            [b('Investments by shareholders', 'Investasi pemegang saham'), b('Increase', 'Meningkatkan'), b('Owners put capital into the business.', 'Pemilik menanamkan modal ke bisnis.')],
            [b('Revenues', 'Pendapatan'), b('Increase', 'Meningkatkan'), b('Result from selling goods or performing services.', 'Hasil menjual barang atau memberi jasa.')],
            [b('Expenses', 'Beban'), b('Decrease', 'Mengurangi'), b('Cost of assets consumed or services used to earn revenue.', 'Biaya aset yang dipakai atau jasa yang digunakan untuk memperoleh pendapatan.')],
            [b('Dividends', 'Dividen'), b('Decrease', 'Mengurangi'), b('Distribution of income to shareholders — not an expense.', 'Pembagian laba kepada pemegang saham — bukan beban.')],
          ],
        },
        {
          type: 'formula',
          label: b('Expanded equation', 'Persamaan yang diperluas'),
          expr: '<var>Assets</var> = <var>Liabilities</var> + <var>Share Capital</var> + <var>Revenues</var> − <var>Expenses</var> − <var>Dividends</var>',
          note: b(
            'Expand equity to see how each transaction moves the equation.',
            'Uraikan ekuitas untuk melihat bagaimana setiap transaksi menggerakkan persamaan.'
          ),
        },
      ],
    },
    {
      id: 'transaction-analysis',
      num: '1.5',
      tag: b('Worked example', 'Contoh kerja'),
      title: b('Transaction analysis: Softbyte SA', 'Analisis transaksi: Softbyte SA'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Ray and Barbara Neal incorporate Softbyte SA, a smartphone app company. Follow nine transactions. After each one, ask: what accounts are affected, in which direction, and by how much? The equation must stay in balance after every transaction.',
            'Ray dan Barbara Neal mendirikan Softbyte SA, perusahaan aplikasi ponsel. Ikuti sembilan transaksi. Setelah setiap transaksi, tanyakan: akun apa yang terpengaruh, ke arah mana, dan berapa besar? Persamaan harus tetap seimbang setelah setiap transaksi.'
          ),
        },
        {
          type: 'table',
          head: ['#', b('Transaction', 'Transaksi'), b('Effect on the equation', 'Pengaruh pada persamaan')],
          rows: [
            [
              '1',
              b('Shareholders invest €15,000 cash.', 'Pemegang saham menyetor kas €15.000.'),
              b('Cash +€15,000; Share capital +€15,000.', 'Kas +€15.000; Modal saham +€15.000.'),
            ],
            [
              '2',
              b('Buy computer equipment for €7,000 cash.', 'Membeli peralatan komputer €7.000 tunai.'),
              b('Cash −€7,000; Equipment +€7,000.', 'Kas −€7.000; Peralatan +€7.000.'),
            ],
            [
              '3',
              b('Buy supplies €1,600 on account.', 'Membeli perlengkapan €1.600 secara kredit.'),
              b('Supplies +€1,600; Accounts payable +€1,600.', 'Perlengkapan +€1.600; Utang usaha +€1.600.'),
            ],
            [
              '4',
              b('Perform services for €1,200 cash.', 'Memberi jasa dan menerima kas €1.200.'),
              b('Cash +€1,200; Service revenue +€1,200.', 'Kas +€1.200; Pendapatan jasa +€1.200.'),
            ],
            [
              '5',
              b('Pay advertising €250 cash.', 'Membayar iklan €250 tunai.'),
              b('Cash −€250; Advertising expense −€250 (equity down).', 'Kas −€250; Beban iklan −€250 (ekuitas turun).'),
            ],
            [
              '6',
              b('Perform services €3,500: €1,500 cash and €2,000 on account.', 'Memberi jasa €3.500: €1.500 tunai dan €2.000 kredit.'),
              b('Cash +€1,500; Accounts receivable +€2,000; Service revenue +€3,500.', 'Kas +€1.500; Piutang usaha +€2.000; Pendapatan jasa +€3.500.'),
            ],
            [
              '7',
              b('Pay rent €600, salaries €900, utilities €200.', 'Membayar sewa €600, gaji €900, utilitas €200.'),
              b('Cash −€1,700; expenses −€1,700 (equity down).', 'Kas −€1.700; beban −€1.700 (ekuitas turun).'),
            ],
            [
              '8',
              b('Pay dividends €1,300 cash.', 'Membayar dividen €1.300 tunai.'),
              b('Cash −€1,300; dividends −€1,300 (equity down).', 'Kas −€1.300; dividen −€1.300 (ekuitas turun).'),
            ],
            [
              '9',
              b('Collect €600 from the receivable.', 'Menagih €600 dari piutang.'),
              b('Cash +€600; accounts receivable −€600. Total assets unchanged.', 'Kas +€600; piutang usaha −€600. Total aset tidak berubah.'),
            ],
          ],
        },
        {
          type: 'callout',
          title: b('The dual-effect rule', 'Aturan efek ganda'),
          text: b(
            'If an asset increases, at least one of the following must happen: another asset decreases, a liability increases, or equity increases. Collecting a receivable changes only the composition of assets — it is not revenue.',
            'Jika aset bertambah, salah satu dari berikut harus terjadi: aset lain berkurang, liabilitas bertambah, atau ekuitas bertambah. Menagih piutang hanya mengubah komposisi aset — bukan pendapatan.'
          ),
          tone: 'tip',
        },
        {
          type: 'table',
          head: [b('Final balance', 'Saldo akhir'), b('Amount', 'Jumlah')],
          align: ['left', 'right'],
          rows: [
            [b('Cash', 'Kas'), '€8,050'],
            [b('Accounts receivable', 'Piutang usaha'), '€1,400'],
            [b('Supplies', 'Perlengkapan'), '€1,600'],
            [b('Equipment', 'Peralatan'), '€7,000'],
            [b('Total assets', 'Total aset'), '€18,050'],
            [b('Accounts payable', 'Utang usaha'), '€1,600'],
            [b('Share capital—ordinary', 'Modal saham biasa'), '€15,000'],
            [b('Retained earnings', 'Saldo laba'), '€1,450'],
            [b('Total liabilities and equity', 'Total liabilitas dan ekuitas'), '€18,050'],
          ],
        },
      ],
    },
    {
      id: 'financial-statements',
      num: '1.6',
      tag: b('Output', 'Keluaran'),
      title: b('The five financial statements', 'Lima laporan keuangan'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Companies prepare five statements from the summarised accounting data. Four are shown here; the comprehensive income statement adds other comprehensive income items that are not part of net income.',
            'Perusahaan menyusun lima laporan dari data akuntansi yang telah diringkas. Empat ditunjukkan di sini; laporan laba komprehensif menambahkan pos pendapatan komprehensif lain yang bukan bagian dari laba bersih.'
          ),
        },
        {
          type: 'table',
          head: [b('Statement', 'Laporan'), b('What it shows', 'Isinya'), b('Time basis', 'Dasar waktu')],
          rows: [
            [
              b('Income statement', 'Laporan laba rugi'),
              b('Revenues − expenses = net income (or net loss).', 'Pendapatan − beban = laba (atau rugi) bersih.'),
              b('For a period', 'Untuk suatu periode'),
            ],
            [
              b('Retained earnings statement', 'Laporan saldo laba'),
              b('Beginning retained earnings + net income − dividends = ending retained earnings.', 'Saldo laba awal + laba bersih − dividen = saldo laba akhir.'),
              b('For a period', 'Untuk suatu periode'),
            ],
            [
              b('Statement of financial position', 'Laporan posisi keuangan'),
              b('Assets = liabilities + equity at a specific date. Also called the balance sheet.', 'Aset = liabilitas + ekuitas pada tanggal tertentu. Disebut juga neraca.'),
              b('At a date', 'Pada satu tanggal'),
            ],
            [
              b('Statement of cash flows', 'Laporan arus kas'),
              b('Cash receipts and payments in operating, investing, and financing activities.', 'Penerimaan dan pengeluaran kas pada aktivitas operasi, investasi, dan pendanaan.'),
              b('For a period', 'Untuk suatu periode'),
            ],
            [
              b('Comprehensive income statement', 'Laporan laba komprehensif'),
              b('Net income plus other comprehensive income items.', 'Laba bersih ditambah pos pendapatan komprehensif lain.'),
              b('For a period', 'Untuk suatu periode'),
            ],
          ],
        },
        { type: 'h4', text: b('How the statements link', 'Bagaimana laporan saling terhubung') },
        {
          type: 'formula',
          label: b('The chain', 'Rantai laporan'),
          expr: 'Net income → Retained earnings → Equity → Statement of financial position',
          note: b(
            'Net income €2,750 is added to beginning retained earnings; ending retained earnings €1,450 appears in equity; cash €8,050 appears in the statement of financial position and in the statement of cash flows.',
            'Laba bersih €2.750 ditambahkan ke saldo laba awal; saldo laba akhir €1.450 muncul di ekuitas; kas €8.050 muncul di laporan posisi keuangan dan laporan arus kas.'
          ),
        },
        {
          type: 'table',
          head: [b('Softbyte SA — month ended 30 September 2017', 'Softbyte SA — bulan berakhir 30 September 2017'), b('Amount', 'Jumlah')],
          align: ['left', 'right'],
          rows: [
            [b('Service revenue', 'Pendapatan jasa'), '€4,700'],
            [b('Total expenses', 'Total beban'), '(€1,950)'],
            [b('Net income', 'Laba bersih'), '€2,750'],
            [b('Retained earnings, ending', 'Saldo laba akhir'), '€1,450'],
            [b('Total assets', 'Total aset'), '€18,050'],
            [b('Cash at end of period', 'Kas akhir periode'), '€8,050'],
          ],
        },
        {
          type: 'callout',
          title: b('Dividends are not expenses', 'Dividen bukan beban'),
          text: b(
            'Dividends reduce retained earnings directly and appear on the retained earnings statement. They never appear on the income statement.',
            'Dividen mengurangi saldo laba secara langsung dan muncul di laporan saldo laba. Dividen tidak pernah muncul di laporan laba rugi.'
          ),
          tone: 'warn',
        },
      ],
    },
  ],
  quiz: [
    {
      q: b('What are the three basic activities of accounting?', 'Apa tiga aktivitas dasar akuntansi?'),
      a: b('Identification, recording, and communication.', 'Identifikasi, pencatatan, dan komunikasi.'),
    },
    {
      q: b('A company has assets of €100,000 and liabilities of €35,000. What is equity?', 'Perusahaan memiliki aset €100.000 dan liabilitas €35.000. Berapa ekuitasnya?'),
      a: b('€65,000 (assets − liabilities).', '€65.000 (aset − liabilitas).'),
    },
    {
      q: b('Does collecting an account receivable increase revenue?', 'Apakah penagihan piutang menambah pendapatan?'),
      a: b('No. It increases cash and decreases accounts receivable; total assets do not change.', 'Tidak. Kas bertambah dan piutang berkurang; total aset tidak berubah.'),
    },
    {
      q: b('Which statement reports the financial position at a single date?', 'Laporan mana yang menyajikan posisi keuangan pada satu tanggal?'),
      a: b('The statement of financial position (balance sheet).', 'Laporan posisi keuangan (neraca).'),
    },
  ],
};

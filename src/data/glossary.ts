import { b, type GlossaryTerm } from './types';

export const glossary: GlossaryTerm[] = [
  {
    term: 'Account',
    id: 'Akun',
    chapter: 2,
    def: b(
      'An individual accounting record of increases and decreases in a specific asset, liability, or equity item.',
      'Catatan akuntansi individual untuk kenaikan dan penurunan aset, liabilitas, atau ekuitas tertentu.'
    ),
  },
  {
    term: 'Accounting',
    id: 'Akuntansi',
    chapter: 1,
    def: b(
      'The financial information system that identifies, records, and communicates the economic events of an organisation to interested users.',
      'Sistem informasi keuangan yang mengidentifikasi, mencatat, dan mengomunikasikan peristiwa ekonomi organisasi kepada pihak yang berkepentingan.'
    ),
  },
  {
    term: 'Accrual basis',
    id: 'Dasar akrual',
    chapter: 3,
    def: b(
      'Accounting that recognises revenue when earned and expenses when incurred, regardless of when cash changes hands.',
      'Akuntansi yang mengakui pendapatan saat diperoleh dan beban saat terjadi, terlepas dari kapan kas berpindah.'
    ),
  },
  {
    term: 'Accrued expense',
    id: 'Beban yang masih harus dibayar',
    chapter: 3,
    def: b(
      'An expense already incurred but not yet paid; the adjustment debits an expense and credits a liability.',
      'Beban yang sudah terjadi tetapi belum dibayar; penyesuaiannya mendebit beban dan mengkredit liabilitas.'
    ),
  },
  {
    term: 'Accrued revenue',
    id: 'Pendapatan yang masih harus diterima',
    chapter: 3,
    def: b(
      'Revenue already earned but not yet billed or collected; the adjustment debits a receivable and credits revenue.',
      'Pendapatan yang sudah diperoleh tetapi belum ditagih atau diterima; penyesuaiannya mendebit piutang dan mengkredit pendapatan.'
    ),
  },
  {
    term: 'Accumulated depreciation',
    id: 'Akumulasi penyusutan',
    chapter: 3,
    def: b(
      'A contra asset account that accumulates the total depreciation expensed over the life of a plant asset.',
      'Akun kontra aset yang mengumpulkan total penyusutan yang telah dibebankan sepanjang umur aset tetap.'
    ),
  },
  {
    term: 'Adjusting entries',
    id: 'Ayat penyesuaian',
    chapter: 3,
    def: b(
      'Entries made at period end to bring accounts to the accrual basis; they always affect at least one statement of financial position account and one income statement account, never Cash.',
      'Ayat yang dibuat di akhir periode untuk membawa akun ke dasar akrual; selalu memengaruhi minimal satu akun posisi keuangan dan satu akun laba rugi, tidak pernah Kas.'
    ),
  },
  {
    term: 'Assets',
    id: 'Aset',
    chapter: 1,
    def: b(
      'Resources a business owns that have the capacity to provide future services or benefits.',
      'Sumber daya yang dimiliki bisnis dan mampu memberikan jasa atau manfaat di masa depan.'
    ),
  },
  {
    term: 'Book value (carrying amount)',
    id: 'Nilai buku (nilai tercatat)',
    chapter: 3,
    def: b(
      'The cost of an asset less its accumulated depreciation.',
      'Biaya aset dikurangi akumulasi penyusutannya.'
    ),
  },
  {
    term: 'Cash basis',
    id: 'Dasar kas',
    chapter: 3,
    def: b(
      'Accounting that recognises revenue when cash is received and expenses when cash is paid; not in accordance with IFRS.',
      'Akuntansi yang mengakui pendapatan saat kas diterima dan beban saat kas dibayar; tidak sesuai IFRS.'
    ),
  },
  {
    term: 'Chart of accounts',
    id: 'Daftar akun',
    chapter: 2,
    def: b(
      'A list of accounts and the account numbers that identify their location in the ledger.',
      'Daftar nama akun dan nomor akun yang menunjukkan lokasinya di buku besar.'
    ),
  },
  {
    term: 'Closing entries',
    id: 'Ayat penutup',
    chapter: 4,
    def: b(
      'Entries that transfer temporary account balances to Retained Earnings so each new period starts from zero.',
      'Ayat yang memindahkan saldo akun nominal ke Saldo Laba agar setiap periode baru dimulai dari nol.'
    ),
  },
  {
    term: 'Compound entry',
    id: 'Ayat gabungan',
    chapter: 2,
    def: b(
      'A journal entry that involves three or more accounts.',
      'Ayat jurnal yang melibatkan tiga akun atau lebih.'
    ),
  },
  {
    term: 'Contra account',
    id: 'Akun kontra',
    chapter: 3,
    def: b(
      'An account that reduces another account, such as Accumulated Depreciation reducing Equipment.',
      'Akun yang mengurangi akun lain, seperti Akumulasi Penyusutan yang mengurangi Peralatan.'
    ),
  },
  {
    term: 'Contra revenue account',
    id: 'Akun kontra pendapatan',
    chapter: 5,
    def: b(
      'An account offset against a revenue account on the income statement, such as Sales Returns and Allowances or Sales Discounts; it has a normal debit balance.',
      'Akun yang dikurangkan dari akun pendapatan pada laporan laba rugi, seperti Retur dan Potongan Penjualan atau Diskon Penjualan; saldo normalnya debit.'
    ),
  },
  {
    term: 'Convergence',
    id: 'Konvergensi',
    chapter: 1,
    def: b(
      'The effort to reduce differences between IFRS and U.S. GAAP.',
      'Upaya mengurangi perbedaan antara IFRS dan U.S. GAAP.'
    ),
  },
  {
    term: 'Cost of goods sold',
    id: 'Harga pokok penjualan',
    chapter: 5,
    def: b(
      'The total cost of merchandise sold during the period, matched against the sales revenue it helped generate.',
      'Total biaya barang dagangan yang terjual selama periode, dipasangkan dengan pendapatan penjualan yang dihasilkannya.'
    ),
  },
  {
    term: 'Credit',
    id: 'Kredit',
    chapter: 2,
    def: b(
      'The right side of an account. It may increase or decrease depending on the account type.',
      'Sisi kanan akun. Bisa menambah atau mengurangi tergantung jenis akun.'
    ),
  },
  {
    term: 'Debit',
    id: 'Debit',
    chapter: 2,
    def: b(
      'The left side of an account. It may increase or decrease depending on the account type.',
      'Sisi kiri akun. Bisa menambah atau mengurangi tergantung jenis akun.'
    ),
  },
  {
    term: 'Deferral',
    id: 'Deferral (penangguhan)',
    chapter: 3,
    def: b(
      'An adjustment where cash has already changed hands but the related revenue or expense has not yet been fully recognised — prepaid expenses and unearned revenues.',
      'Penyesuaian ketika kas sudah berpindah tetapi pendapatan atau beban terkait belum sepenuhnya diakui — beban dibayar di muka dan pendapatan diterima di muka.'
    ),
  },
  {
    term: 'Depreciation',
    id: 'Penyusutan',
    chapter: 3,
    def: b(
      'The systematic allocation of the cost of a plant asset to the periods that benefit from its use.',
      'Alokasi sistematis biaya aset tetap ke periode yang menikmati manfaatnya.'
    ),
  },
  {
    term: 'Dividends',
    id: 'Dividen',
    chapter: 1,
    def: b(
      'A distribution of income to shareholders. Dividends reduce retained earnings but are not expenses.',
      'Pembagian laba kepada pemegang saham. Dividen mengurangi saldo laba tetapi bukan beban.'
    ),
  },
  {
    term: 'Double-entry system',
    id: 'Sistem berpasangan',
    chapter: 2,
    def: b(
      'A system in which the dual effect of each transaction is recorded so that total debits equal total credits.',
      'Sistem yang mencatat efek ganda setiap transaksi sehingga total debit sama dengan total kredit.'
    ),
  },
  {
    term: 'Economic entity assumption',
    id: 'Asumsi entitas ekonomi',
    chapter: 1,
    def: b(
      'The assumption that an entity’s activities are kept separate from those of its owner and all other entities.',
      'Asumsi bahwa aktivitas entitas dipisahkan dari aktivitas pemilik dan entitas lain.'
    ),
  },
  {
    term: 'Equity',
    id: 'Ekuitas',
    chapter: 1,
    def: b(
      'The ownership claim on total assets; assets minus liabilities. It consists of share capital and retained earnings.',
      'Klaim pemilik atas total aset; aset dikurangi liabilitas. Terdiri dari modal saham dan saldo laba.'
    ),
  },
  {
    term: 'Expense recognition principle',
    id: 'Prinsip pengakuan beban',
    chapter: 3,
    def: b(
      'The principle that expenses are matched with the revenues they helped generate in the same period.',
      'Prinsip bahwa beban dicocokkan dengan pendapatan yang dihasilkannya pada periode yang sama.'
    ),
  },
  {
    term: 'Expenses',
    id: 'Beban',
    chapter: 1,
    def: b(
      'The cost of assets consumed or services used in the process of earning revenue.',
      'Biaya aset yang dipakai atau jasa yang digunakan dalam proses memperoleh pendapatan.'
    ),
  },
  {
    term: 'Fair value principle',
    id: 'Prinsip nilai wajar',
    chapter: 1,
    def: b(
      'The principle that assets and liabilities should be reported at the price received to sell an asset or settle a liability.',
      'Prinsip bahwa aset dan liabilitas dilaporkan sebesar harga yang diterima untuk menjual aset atau menyelesaikan liabilitas.'
    ),
  },
  {
    term: 'Fiscal year',
    id: 'Tahun fiskal',
    chapter: 3,
    def: b(
      'An accounting period of one year that may or may not coincide with the calendar year.',
      'Periode akuntansi satu tahun yang bisa sama atau berbeda dengan tahun kalender.'
    ),
  },
  {
    term: 'FOB destination',
    id: 'FOB tujuan',
    chapter: 5,
    def: b(
      'Freight terms meaning the seller places the goods free on board to the buyer’s place of business and therefore pays the freight.',
      'Termin pengiriman yang berarti penjual menyerahkan barang sampai tempat usaha pembeli sehingga penjual membayar ongkos angkut.'
    ),
  },
  {
    term: 'FOB shipping point',
    id: 'FOB titik pengiriman',
    chapter: 5,
    def: b(
      'Freight terms meaning the seller places the goods free on board the carrier and therefore the buyer pays the freight.',
      'Termin pengiriman yang berarti penjual menyerahkan barang di atas alat angkut sehingga pembeli membayar ongkos angkut.'
    ),
  },
  {
    term: 'Freight-out',
    id: 'Beban angkut keluar',
    chapter: 5,
    def: b(
      'An operating expense account debited by the seller for freight costs on outgoing merchandise (also called Delivery Expense).',
      'Akun beban operasi yang didebit penjual untuk ongkos angkut barang keluar (juga disebut Beban Pengiriman).'
    ),
  },
  {
    term: 'General journal',
    id: 'Jurnal umum',
    chapter: 2,
    def: b(
      'The basic journal in which transactions are recorded chronologically, with debits and credits and a brief explanation.',
      'Jurnal dasar tempat transaksi dicatat secara kronologis, dengan debit, kredit, dan penjelasan singkat.'
    ),
  },
  {
    term: 'General ledger',
    id: 'Buku besar umum',
    chapter: 2,
    def: b(
      'The ledger containing all asset, liability, and equity accounts.',
      'Buku besar yang memuat semua akun aset, liabilitas, dan ekuitas.'
    ),
  },
  {
    term: 'Gross profit',
    id: 'Laba bruto',
    chapter: 5,
    def: b(
      'Sales revenue less cost of goods sold; the margin available to cover operating expenses and produce net income.',
      'Pendapatan penjualan dikurangi harga pokok penjualan; marjin yang tersedia untuk menutup beban operasi dan menghasilkan laba bersih.'
    ),
  },
  {
    term: 'Historical cost principle',
    id: 'Prinsip biaya historis',
    chapter: 1,
    def: b(
      'The principle that companies record assets at their cost, both at purchase and while held.',
      'Prinsip bahwa perusahaan mencatat aset sebesar biayanya, baik saat dibeli maupun selama dimiliki.'
    ),
  },
  {
    term: 'Income statement',
    id: 'Laporan laba rugi',
    chapter: 1,
    def: b(
      'A statement that presents revenues and expenses and the resulting net income or net loss for a period.',
      'Laporan yang menyajikan pendapatan dan beban serta laba atau rugi bersih yang dihasilkan untuk suatu periode.'
    ),
  },
  {
    term: 'Income Summary',
    id: 'Ikhtisar Laba Rugi',
    chapter: 4,
    def: b(
      'A temporary clearing account used to close revenues and expenses before transferring net income to Retained Earnings.',
      'Akun penampung sementara untuk menutup pendapatan dan beban sebelum memindahkan laba bersih ke Saldo Laba.'
    ),
  },
  {
    term: 'Intangible assets',
    id: 'Aset takberwujud',
    chapter: 4,
    def: b(
      'Long-lived assets without physical substance, such as goodwill, patents, copyrights, and trademarks.',
      'Aset berumur panjang tanpa wujud fisik, seperti goodwill, paten, hak cipta, dan merek dagang.'
    ),
  },
  {
    term: 'Inventory',
    id: 'Persediaan',
    chapter: 5,
    def: b(
      'The asset account for goods held for resale; under a perpetual system it is debited for purchases and credited for sales at cost.',
      'Akun aset untuk barang yang dimiliki untuk dijual kembali; dalam sistem perpetual didebit saat pembelian dan dikredit saat penjualan sebesar biaya.'
    ),
  },
  {
    term: 'Journalising',
    id: 'Penjurnalan',
    chapter: 2,
    def: b(
      'Entering transaction data in the journal.',
      'Memasukkan data transaksi ke dalam jurnal.'
    ),
  },
  {
    term: 'Liabilities',
    id: 'Liabilitas',
    chapter: 1,
    def: b(
      'Claims against assets — existing debts and obligations owed to creditors.',
      'Klaim atas aset — utang dan kewajiban yang ada kepada kreditor.'
    ),
  },
  {
    term: 'Merchandising company',
    id: 'Perusahaan dagang',
    chapter: 5,
    def: b(
      'A business that buys and sells merchandise rather than performing services; retailers sell to consumers and wholesalers sell to retailers.',
      'Bisnis yang membeli dan menjual barang dagangan, bukan memberikan jasa; pengecer menjual ke konsumen dan pedagang grosir menjual ke pengecer.'
    ),
  },
  {
    term: 'Monetary unit assumption',
    id: 'Asumsi satuan moneter',
    chapter: 1,
    def: b(
      'The assumption that only transaction data that can be expressed in money terms is included in the accounting records.',
      'Asumsi bahwa hanya data transaksi yang dapat dinyatakan dalam uang yang dimasukkan ke catatan akuntansi.'
    ),
  },
  {
    term: 'Net income',
    id: 'Laba bersih',
    chapter: 1,
    def: b(
      'Revenues minus expenses for a period.',
      'Pendapatan dikurangi beban untuk suatu periode.'
    ),
  },
  {
    term: 'Net sales',
    id: 'Penjualan neto',
    chapter: 5,
    def: b(
      'Sales revenue less sales returns and allowances and sales discounts.',
      'Pendapatan penjualan dikurangi retur dan potongan penjualan serta diskon penjualan.'
    ),
  },
  {
    term: 'Normal balance',
    id: 'Saldo normal',
    chapter: 2,
    def: b(
      'The side (debit or credit) on which an account normally increases and is expected to carry its balance.',
      'Sisi (debit atau kredit) tempat akun biasanya bertambah dan diharapkan menyimpan saldonya.'
    ),
  },
  {
    term: 'Operating cycle',
    id: 'Siklus operasi',
    chapter: 4,
    def: b(
      'The average time it takes to purchase inventory, sell it on account, and collect cash from customers.',
      'Waktu rata-rata untuk membeli persediaan, menjualnya secara kredit, dan menagih kas dari pelanggan.'
    ),
  },
  {
    term: 'Operating expenses',
    id: 'Beban operasi',
    chapter: 5,
    def: b(
      'Expenses of running the business other than cost of goods sold, such as salaries, utilities, advertising, depreciation, and freight-out.',
      'Beban menjalankan usaha selain harga pokok penjualan, seperti gaji, utilitas, iklan, penyusutan, dan beban angkut keluar.'
    ),
  },
  {
    term: 'Periodic inventory system',
    id: 'Sistem persediaan periodik',
    chapter: 5,
    def: b(
      'An inventory system in which cost of goods sold is determined only at the end of the period, using a physical count; no detailed records are kept during the period.',
      'Sistem persediaan yang menentukan harga pokok penjualan hanya pada akhir periode melalui perhitungan fisik; tidak ada catatan rinci selama periode.'
    ),
  },
  {
    term: 'Permanent accounts',
    id: 'Akun permanen',
    chapter: 4,
    def: b(
      'Statement of financial position accounts — assets, liabilities, and equity — whose balances carry forward to the next period.',
      'Akun laporan posisi keuangan — aset, liabilitas, dan ekuitas — yang saldonya berlanjut ke periode berikutnya.'
    ),
  },
  {
    term: 'Perpetual inventory system',
    id: 'Sistem persediaan perpetual',
    chapter: 5,
    def: b(
      'An inventory system that keeps detailed records of the cost of each purchase and sale and determines cost of goods sold at the time of each sale.',
      'Sistem persediaan yang menyimpan catatan rinci biaya setiap pembelian dan penjualan serta menentukan harga pokok penjualan pada saat setiap penjualan.'
    ),
  },
  {
    term: 'Posting',
    id: 'Posting',
    chapter: 2,
    def: b(
      'Transferring journal entries to the ledger accounts.',
      'Memindahkan ayat jurnal ke akun buku besar.'
    ),
  },
  {
    term: 'Prepaid expenses',
    id: 'Beban dibayar di muka',
    chapter: 3,
    def: b(
      'Expenses paid in advance that benefit more than the current period; initially recorded as assets.',
      'Beban yang dibayar lebih dulu dan manfaatnya melebihi periode berjalan; awalnya dicatat sebagai aset.'
    ),
  },
  {
    term: 'Property, plant, and equipment',
    id: 'Aset tetap',
    chapter: 4,
    def: b(
      'Assets with relatively long useful lives used in operating the business, such as land, buildings, and equipment.',
      'Aset berumur pakai relatif panjang yang dipakai dalam operasi bisnis, seperti tanah, bangunan, dan peralatan.'
    ),
  },
  {
    term: 'Purchase allowance',
    id: 'Potongan pembelian',
    chapter: 5,
    def: b(
      'A deduction from the purchase price granted by the seller so the buyer will keep goods that are damaged, defective, or not as ordered; the buyer debits Accounts Payable and credits Inventory.',
      'Potongan harga dari penjual agar pembeli tetap menyimpan barang yang rusak, cacat, atau tidak sesuai pesanan; pembeli mendebit Utang Usaha dan mengkredit Persediaan.'
    ),
  },
  {
    term: 'Purchase discount',
    id: 'Diskon pembelian',
    chapter: 5,
    def: b(
      'A cash discount offered to the buyer for prompt payment, such as 2/10, n/30; the buyer credits Inventory for the discount taken.',
      'Diskon tunai yang ditawarkan kepada pembeli untuk pembayaran cepat, seperti 2/10, n/30; pembeli mengkredit Persediaan sebesar diskon yang diambil.'
    ),
  },
  {
    term: 'Purchase return',
    id: 'Retur pembelian',
    chapter: 5,
    def: b(
      'Goods returned by the buyer to the seller for credit or refund; the buyer debits Accounts Payable and credits Inventory.',
      'Barang yang dikembalikan pembeli kepada penjual untuk kredit atau pengembalian uang; pembeli mendebit Utang Usaha dan mengkredit Persediaan.'
    ),
  },
  {
    term: 'Relevance and faithful representation',
    id: 'Relevansi dan penyajian jujur',
    chapter: 1,
    def: b(
      'The two primary qualities that make accounting information useful: it can make a difference in a decision, and it matches what really happened.',
      'Dua kualitas utama yang membuat informasi akuntansi berguna: dapat memengaruhi keputusan, dan sesuai dengan kenyataan.'
    ),
  },
  {
    term: 'Retailer',
    id: 'Pengecer',
    chapter: 5,
    def: b(
      'A merchandising company that sells directly to consumers.',
      'Perusahaan dagang yang menjual langsung kepada konsumen.'
    ),
  },
  {
    term: 'Retained earnings',
    id: 'Saldo laba',
    chapter: 1,
    def: b(
      'Net income kept in the business; increased by revenues and net income, decreased by expenses, net losses, and dividends.',
      'Laba bersih yang ditahan di bisnis; bertambah oleh pendapatan dan laba bersih, berkurang oleh beban, rugi bersih, dan dividen.'
    ),
  },
  {
    term: 'Revenue recognition principle',
    id: 'Prinsip pengakuan pendapatan',
    chapter: 3,
    def: b(
      'The principle that revenue is recognised in the period in which the performance obligation is satisfied.',
      'Prinsip bahwa pendapatan diakui pada periode ketika kewajiban pelaksanaan dipenuhi.'
    ),
  },
  {
    term: 'Reversing entry',
    id: 'Ayat pembalik',
    chapter: 4,
    def: b(
      'An optional entry at the start of the next period that is the exact opposite of a prior adjusting entry.',
      'Ayat opsional di awal periode berikutnya yang merupakan kebalikan persis dari ayat penyesuaian sebelumnya.'
    ),
  },
  {
    term: 'Sales discounts',
    id: 'Diskon penjualan',
    chapter: 5,
    def: b(
      'A contra revenue account debited by the seller for cash discounts taken by customers for prompt payment.',
      'Akun kontra pendapatan yang didebit penjual atas diskon tunai yang diambil pelanggan karena membayar cepat.'
    ),
  },
  {
    term: 'Sales returns and allowances',
    id: 'Retur dan potongan penjualan',
    chapter: 5,
    def: b(
      'A contra revenue account debited by the seller when goods are returned or a price allowance is granted; it is offset against Sales Revenue.',
      'Akun kontra pendapatan yang didebit penjual saat barang diretur atau potongan harga diberikan; dikurangkan dari Pendapatan Penjualan.'
    ),
  },
  {
    term: 'Sales revenue',
    id: 'Pendapatan penjualan',
    chapter: 5,
    def: b(
      'The primary revenue of a merchandising company, recognised when goods transfer to the buyer and the performance obligation is satisfied.',
      'Pendapatan utama perusahaan dagang, diakui saat barang berpindah ke pembeli dan kewajiban pelaksanaan terpenuhi.'
    ),
  },
  {
    term: 'Share capital—ordinary',
    id: 'Modal saham biasa',
    chapter: 1,
    def: b(
      'The amounts paid in by shareholders for the ordinary shares they purchase.',
      'Jumlah yang dibayarkan pemegang saham untuk saham biasa yang mereka beli.'
    ),
  },
  {
    term: 'Statement of cash flows',
    id: 'Laporan arus kas',
    chapter: 1,
    def: b(
      'A statement that reports cash receipts and payments from operating, investing, and financing activities for a period.',
      'Laporan yang menyajikan penerimaan dan pengeluaran kas dari aktivitas operasi, investasi, dan pendanaan untuk suatu periode.'
    ),
  },
  {
    term: 'Statement of financial position',
    id: 'Laporan posisi keuangan',
    chapter: 1,
    def: b(
      'A statement that reports assets, liabilities, and equity at a specific date; also called the balance sheet.',
      'Laporan yang menyajikan aset, liabilitas, dan ekuitas pada tanggal tertentu; disebut juga neraca.'
    ),
  },
  {
    term: 'Temporary accounts',
    id: 'Akun nominal',
    chapter: 4,
    def: b(
      'Revenue, expense, dividend, and Income Summary accounts; they are closed at the end of each period.',
      'Akun pendapatan, beban, dividen, dan Ikhtisar Laba Rugi; ditutup pada akhir setiap periode.'
    ),
  },
  {
    term: 'Transaction',
    id: 'Transaksi',
    chapter: 1,
    def: b(
      'A business’s economic event that is recorded because it changes assets, liabilities, or equity.',
      'Peristiwa ekonomi bisnis yang dicatat karena mengubah aset, liabilitas, atau ekuitas.'
    ),
  },
  {
    term: 'Trial balance',
    id: 'Neraca saldo',
    chapter: 2,
    def: b(
      'A list of accounts and their balances at a given time, used to prove the mathematical equality of debits and credits.',
      'Daftar akun dan saldonya pada waktu tertentu, dipakai untuk membuktikan kesamaan matematis debit dan kredit.'
    ),
  },
  {
    term: 'Unearned revenue',
    id: 'Pendapatan diterima di muka',
    chapter: 3,
    def: b(
      'Cash received before the service is performed or the goods delivered; reported as a liability until earned.',
      'Kas yang diterima sebelum jasa dikerjakan atau barang diserahkan; dilaporkan sebagai liabilitas sampai menjadi pendapatan.'
    ),
  },
  {
    term: 'Wholesaler',
    id: 'Pedagang grosir',
    chapter: 5,
    def: b(
      'A merchandising company that sells to retailers rather than directly to consumers.',
      'Perusahaan dagang yang menjual kepada pengecer, bukan langsung kepada konsumen.'
    ),
  },
  {
    term: 'Worksheet',
    id: 'Kertas kerja',
    chapter: 4,
    def: b(
      'A multi-column working paper used to organise the trial balance, adjustments, adjusted balances, and statement columns.',
      'Kertas kerja multi-kolom untuk menata neraca saldo, penyesuaian, saldo setelah penyesuaian, dan kolom laporan.'
    ),
  },
];

import { b, type Chapter } from './types';

export const chapter5: Chapter = {
  slug: '5',
  number: 5,
  roman: 'V',
  title: b('Accounting for Merchandising Operations', 'Akuntansi untuk Operasi Perdagangan'),
  subtitle: b(
    'Inventory, purchases, sales, freight, returns, discounts, and closing the cycle for a merchandiser.',
    'Persediaan, pembelian, penjualan, ongkos angkut, retur, diskon, dan penutupan siklus perusahaan dagang.'
  ),
  kicker: b('Chapter 5 · pages 219–232', 'Bab 5 · hlm. 219–232'),
  sourcePages: '219–232',
  lead: b(
    'A merchandising company earns revenue by buying and selling goods, not by performing services. That single difference adds an Inventory account, a cost of goods sold expense, and a longer operating cycle — and it changes how purchases, sales, freight, returns, and discounts are journalised.',
    'Perusahaan dagang memperoleh pendapatan dengan membeli dan menjual barang, bukan dengan memberikan jasa. Perbedaan itu menambah akun Persediaan, beban harga pokok penjualan, dan siklus operasi yang lebih panjang — serta mengubah cara pembelian, penjualan, ongkos angkut, retur, dan diskon dijurnal.'
  ),
  objectives: [
    b('Identify the differences between service and merchandising companies.', 'Mengidentifikasi perbedaan perusahaan jasa dan perusahaan dagang.'),
    b('Explain the recording of purchases under a perpetual inventory system.', 'Menjelaskan pencatatan pembelian dalam sistem persediaan perpetual.'),
    b('Explain the recording of sales revenues under a perpetual inventory system.', 'Menjelaskan pencatatan pendapatan penjualan dalam sistem persediaan perpetual.'),
    b('Explain the steps in the accounting cycle for a merchandising company.', 'Menjelaskan langkah-langkah siklus akuntansi perusahaan dagang.'),
  ],
  sections: [
    {
      id: 'operations',
      num: '5.1',
      tag: b('LO1 · Concepts', 'LO1 · Konsep'),
      title: b('Merchandising operations and the flow of costs', 'Operasi perdagangan dan aliran biaya'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Merchandising companies buy and sell merchandise rather than perform services as their primary source of revenue. Those that sell directly to consumers are <strong>retailers</strong> (Metro, Carrefour, Tesco); those that sell to retailers are <strong>wholesalers</strong>. Their primary revenue is the sale of merchandise — usually called sales revenue, or simply sales.',
            'Perusahaan dagang membeli dan menjual barang, bukan memberikan jasa sebagai sumber pendapatan utama. Yang menjual langsung ke konsumen disebut <strong>pengecer</strong> (Metro, Carrefour, Tesco); yang menjual ke pengecer disebut <strong>pedagang grosir</strong>. Pendapatan utamanya adalah penjualan barang — biasa disebut pendapatan penjualan, atau singkatnya penjualan.'
          ),
        },
        {
          type: 'p',
          text: b(
            'A merchandiser has two categories of expenses: <strong>cost of goods sold</strong> and <strong>operating expenses</strong>. Cost of goods sold is the total cost of the merchandise sold during the period; it is matched directly against the revenue from those sales. Operating expenses are the remaining expenses of running the business.',
            'Perusahaan dagang punya dua kategori beban: <strong>harga pokok penjualan</strong> dan <strong>beban operasi</strong>. Harga pokok penjualan adalah total biaya barang yang terjual selama periode; ia dipasangkan langsung dengan pendapatan dari penjualan tersebut. Beban operasi adalah beban lain untuk menjalankan usaha.'
          ),
        },
        {
          type: 'formula',
          label: b('Income measurement for a merchandiser', 'Pengukuran laba perusahaan dagang'),
          expr: 'Sales revenue − Cost of goods sold = Gross profit<br>Gross profit − Operating expenses = Net income (loss)',
          note: b(
            'The two blue boxes in the book — cost of goods sold and gross profit — do not exist for a service company.',
            'Dua kotak biru dalam buku — harga pokok penjualan dan laba bruto — tidak ada pada perusahaan jasa.'
          ),
        },
        {
          type: 'h4',
          text: b('The operating cycle is longer', 'Siklus operasi lebih panjang'),
        },
        {
          type: 'p',
          text: b(
            'A service company goes from cash to accounts receivable to cash again. A merchandiser adds inventory in the middle: buy inventory, sell it, record a receivable, then collect cash. The purchase and eventual sale of inventory lengthen the cycle, and inventory is reported as a current asset on the statement of financial position.',
            'Perusahaan jasa bergerak dari kas ke piutang usaha lalu kembali ke kas. Perusahaan dagang menambahkan persediaan di tengahnya: beli persediaan, jual, catat piutang, lalu tagih kas. Pembelian dan penjualan persediaan memanjangkan siklus, dan persediaan dilaporkan sebagai aset lancar pada laporan posisi keuangan.'
          ),
        },
        {
          type: 'table',
          head: [b('Stage', 'Tahap'), b('Service company', 'Perusahaan jasa'), b('Merchandising company', 'Perusahaan dagang')],
          rows: [
            [b('Starting point', 'Titik awal'), b('Cash', 'Kas'), b('Cash → Inventory', 'Kas → Persediaan')],
            [b('Work performed', 'Pekerjaan'), b('Perform services', 'Memberikan jasa'), b('Buy and sell inventory', 'Membeli dan menjual persediaan')],
            [b('Claim on customer', 'Klaim ke pelanggan'), b('Accounts receivable', 'Piutang usaha'), b('Accounts receivable', 'Piutang usaha')],
            [b('Ending point', 'Titik akhir'), b('Receive cash', 'Menerima kas'), b('Receive cash', 'Menerima kas')],
          ],
        },
        {
          type: 'h4',
          text: b('Flow of costs', 'Aliran biaya'),
        },
        {
          type: 'formula',
          label: b('Cost of goods available for sale', 'Biaya barang tersedia untuk dijual'),
          expr: 'Beginning inventory + Cost of goods purchased = Cost of goods available for sale',
          note: b(
            'Goods sold become cost of goods sold; goods not sold become ending inventory.',
            'Barang yang terjual menjadi harga pokok penjualan; barang yang tidak terjual menjadi persediaan akhir.'
          ),
        },
        {
          type: 'table',
          head: [b('Feature', 'Ciri'), b('Perpetual system', 'Sistem perpetual'), b('Periodic system', 'Sistem periodik')],
          rows: [
            [b('Inventory records', 'Catatan persediaan'), b('Detailed records of the cost of each purchase and sale, kept continuously.', 'Catatan rinci biaya setiap pembelian dan penjualan, diperbarui terus-menerus.'), b('No detailed records during the period; a physical count is taken at period end.', 'Tidak ada catatan rinci selama periode; perhitungan fisik dilakukan di akhir periode.')],
            [b('Cost of goods sold', 'Harga pokok penjualan'), b('Determined and recorded each time a sale occurs.', 'Ditentukan dan dicatat setiap kali terjadi penjualan.'), b('Determined only at the end of the period.', 'Ditentukan hanya pada akhir periode.')],
            [b('Physical count', 'Perhitungan fisik'), b('Still taken for control, even though not needed to compute cost of goods sold.', 'Tetap dilakukan untuk pengendalian, meski tidak diperlukan untuk menghitung harga pokok penjualan.'), b('Required to determine ending inventory and cost of goods sold.', 'Wajib untuk menentukan persediaan akhir dan harga pokok penjualan.')],
            [b('Control', 'Pengendalian'), b('Better control: actual goods on hand can be compared with records at any time.', 'Pengendalian lebih baik: barang fisik dapat dibandingkan dengan catatan kapan saja.'), b('Weaker day-to-day control; shortages are found only at the count.', 'Pengendalian harian lebih lemah; kekurangan baru diketahui saat perhitungan.')],
          ],
        },
        {
          type: 'callout',
          title: b('Which system does this chapter use?', 'Sistem mana yang dipakai bab ini?'),
          text: b(
            'Because perpetual systems are now widespread, the chapter illustrates the perpetual system. The periodic system is covered in Appendix 5B, beyond the pages summarised here.',
            'Karena sistem perpetual kini banyak dipakai, bab ini mengilustrasikan sistem perpetual. Sistem periodik dibahas pada Lampiran 5B, di luar halaman yang diringkas di sini.'
          ),
          tone: 'note',
        },
      ],
    },
    {
      id: 'purchases',
      num: '5.2',
      tag: b('LO2 · Buyer', 'LO2 · Pembeli'),
      title: b('Recording purchases of merchandise', 'Mencatat pembelian barang dagangan'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Purchases are recorded when the goods are received from the seller. Under a perpetual system, the buyer debits <strong>Inventory</strong> — not a Purchases account — because the goods are held for resale. Assets bought for use, such as supplies or equipment, go to their own asset accounts instead.',
            'Pembelian dicatat saat barang diterima dari penjual. Dalam sistem perpetual, pembeli mendebit <strong>Persediaan</strong> — bukan akun Pembelian — karena barang tersebut dimiliki untuk dijual kembali. Aset yang dibeli untuk dipakai, seperti perlengkapan atau peralatan, masuk ke akun asetnya masing-masing.'
          ),
        },
        {
          type: 'p',
          text: b(
            'Sauk Stereo buys €3,800 of goods on account from PW Audio Supply on May 4, terms 2/10, n/30, FOB shipping point. The purchase invoice is the seller’s sales invoice, kept as written evidence of the credit purchase.',
            'Sauk Stereo membeli barang €3.800 secara kredit dari PW Audio Supply pada 4 Mei, termin 2/10, n/30, FOB shipping point. Faktur pembelian adalah faktur penjualan dari penjual, disimpan sebagai bukti tertulis pembelian kredit.'
          ),
        },
        {
          type: 'table',
          caption: b('Sauk Stereo — purchase on account (buyer’s books)', 'Sauk Stereo — pembelian kredit (buku pembeli)'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['May 4', b('Inventory', 'Persediaan'), '3,800', ''],
            ['', b('Accounts Payable', 'Utang Usaha'), '', '3,800'],
            ['', b('(To record goods purchased on account from PW Audio Supply)', '(Mencatat pembelian barang secara kredit dari PW Audio Supply)'), '', ''],
          ],
        },
        {
          type: 'h4',
          text: b('Freight costs: who pays?', 'Ongkos angkut: siapa yang membayar?'),
        },
        {
          type: 'p',
          text: b(
            '<strong>FOB shipping point</strong> means the seller places the goods free on board the carrier, so the buyer pays the freight. <strong>FOB destination</strong> means the seller places the goods free on board to the buyer’s place of business, so the seller pays. The invoice in this example is FOB shipping point, so Sauk Stereo pays €150 to Acme Freight Company on May 6.',
            '<strong>FOB shipping point</strong> berarti penjual menyerahkan barang di atas alat angkut, sehingga pembeli membayar ongkos angkut. <strong>FOB destination</strong> berarti penjual menyerahkan barang sampai tempat usaha pembeli, sehingga penjual yang membayar. Faktur pada contoh ini FOB shipping point, jadi Sauk Stereo membayar €150 kepada Acme Freight Company pada 6 Mei.'
          ),
        },
        {
          type: 'table',
          head: [b('Who pays', 'Siapa membayar'), b('Account debited', 'Akun yang didebit'), b('Why', 'Alasan')],
          rows: [
            [b('Buyer', 'Pembeli'), b('Inventory', 'Persediaan'), b('Freight is part of the cost of acquiring the inventory; it becomes cost of goods sold when the goods are sold.', 'Ongkos angkut adalah bagian biaya memperoleh persediaan; menjadi harga pokok penjualan saat barang terjual.')],
            [b('Seller', 'Penjual'), b('Freight-Out (Delivery Expense)', 'Beban Angkut Keluar (Beban Pengiriman)'), b('Freight on outgoing merchandise is an operating expense of selling.', 'Ongkos angkut barang keluar adalah beban operasi penjualan.')],
          ],
        },
        {
          type: 'table',
          caption: b('Freight entries', 'Ayat jurnal ongkos angkut'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['May 6', b('Inventory (buyer)', 'Persediaan (pembeli)'), '150', ''],
            ['', b('Cash', 'Kas'), '', '150'],
            ['May 4', b('Freight-Out (seller)', 'Beban Angkut Keluar (penjual)'), '150', ''],
            ['', b('Cash', 'Kas'), '', '150'],
          ],
        },
        {
          type: 'h4',
          text: b('Purchase returns and allowances', 'Retur dan potongan pembelian'),
        },
        {
          type: 'p',
          text: b(
            'If goods are damaged, defective, of inferior quality, or do not meet specifications, the buyer may return them (<strong>purchase return</strong>) or keep them in exchange for a price reduction (<strong>purchase allowance</strong>). Either way the buyer debits Accounts Payable and credits Inventory, because Inventory was increased when the goods were received.',
            'Jika barang rusak, cacat, bermutu rendah, atau tidak sesuai spesifikasi, pembeli dapat mengembalikannya (<strong>retur pembelian</strong>) atau menyimpannya dengan imbalan penurunan harga (<strong>potongan pembelian</strong>). Keduanya dicatat pembeli dengan mendebit Utang Usaha dan mengkredit Persediaan, karena Persediaan sudah ditambah saat barang diterima.'
          ),
        },
        {
          type: 'table',
          caption: b('Return of €300 and allowance of €50', 'Retur €300 dan potongan €50'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['May 8', b('Accounts Payable', 'Utang Usaha'), '300', ''],
            ['', b('Inventory', 'Persediaan'), '', '300'],
            ['', b('(To record return of goods purchased)', '(Mencatat retur barang yang dibeli)'), '', ''],
            ['', b('Accounts Payable — if an allowance is granted instead', 'Utang Usaha — jika diberikan potongan harga'), '50', ''],
            ['', b('Inventory', 'Persediaan'), '', '50'],
          ],
        },
        {
          type: 'h4',
          text: b('Purchase discounts', 'Diskon pembelian'),
        },
        {
          type: 'p',
          text: b(
            'Credit terms such as <strong>2/10, n/30</strong> mean a 2% discount is available if the invoice is paid within 10 days; otherwise the net amount is due in 30 days. The discount is computed on the invoice price less returns and allowances. For Sauk Stereo the balance is €3,500, the discount is €70 (2% × €3,500), and cash paid is €3,430.',
            'Termin kredit seperti <strong>2/10, n/30</strong> berarti diskon 2% tersedia bila faktur dibayar dalam 10 hari; jika tidak, jumlah neto jatuh tempo dalam 30 hari. Diskon dihitung dari harga faktur setelah dikurangi retur dan potongan. Untuk Sauk Stereo saldonya €3.500, diskonnya €70 (2% × €3.500), dan kas yang dibayar €3.430.'
          ),
        },
        {
          type: 'table',
          caption: b('Payment within and after the discount period', 'Pembayaran dalam dan setelah periode diskon'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['May 14', b('Accounts Payable', 'Utang Usaha'), '3,500', ''],
            ['', b('Cash', 'Kas'), '', '3,430'],
            ['', b('Inventory (discount)', 'Persediaan (diskon)'), '', '70'],
            ['', b('(To record payment within the discount period)', '(Mencatat pembayaran dalam periode diskon)'), '', ''],
            ['June 3', b('Accounts Payable', 'Utang Usaha'), '3,500', ''],
            ['', b('Cash', 'Kas'), '', '3,500'],
            ['', b('(To record payment with no discount taken)', '(Mencatat pembayaran tanpa mengambil diskon)'), '', ''],
          ],
        },
        {
          type: 'callout',
          title: b('Take the discount', 'Ambil diskonnya'),
          text: b(
            'Passing up 2/10, n/30 is like paying 2% interest to use €3,500 for 20 days — roughly 36.5% a year (2% × 365/20). Borrowing at 6%–10% from a bank is far cheaper.',
            'Melewatkan 2/10, n/30 sama seperti membayar bunga 2% untuk memakai €3.500 selama 20 hari — sekitar 36,5% per tahun (2% × 365/20). Meminjam dari bank dengan bunga 6%–10% jauh lebih murah.'
          ),
          tone: 'tip',
        },
        {
          type: 'table',
          caption: b('Summary of Sauk Stereo’s Inventory account', 'Ringkasan akun Persediaan Sauk Stereo'),
          head: [b('Date', 'Tanggal'), b('Description', 'Keterangan'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['May 4', b('Purchase on account', 'Pembelian kredit'), '3,800', ''],
            ['May 6', b('Freight-in paid by buyer', 'Ongkos angkut masuk dibayar pembeli'), '150', ''],
            ['May 8', b('Purchase return', 'Retur pembelian'), '', '300'],
            ['May 14', b('Purchase discount (2% × €3,500)', 'Diskon pembelian (2% × €3.500)'), '', '70'],
            [b('Balance', 'Saldo'), b('Inventory on hand', 'Persediaan di tangan'), '3,580', ''],
          ],
        },
      ],
    },
    {
      id: 'sales',
      num: '5.3',
      tag: b('LO3 · Seller', 'LO3 · Penjual'),
      title: b('Recording sales of merchandise', 'Mencatat penjualan barang dagangan'),
      blocks: [
        {
          type: 'p',
          text: b(
            'Revenue is recorded when the performance obligation is satisfied — normally when the goods transfer to the buyer. The seller makes <strong>two entries for each sale</strong>: one for the selling price, and one for the cost of the goods sold.',
            'Pendapatan dicatat saat kewajiban pelaksanaan terpenuhi — biasanya saat barang berpindah ke pembeli. Penjual membuat <strong>dua ayat untuk setiap penjualan</strong>: satu untuk harga jual, dan satu untuk biaya barang yang terjual.'
          ),
        },
        {
          type: 'table',
          caption: b('PW Audio Supply — credit sale of €3,800, cost €2,400', 'PW Audio Supply — penjualan kredit €3.800, biaya €2.400'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['May 4', b('Accounts Receivable', 'Piutang Usaha'), '3,800', ''],
            ['', b('Sales Revenue', 'Pendapatan Penjualan'), '', '3,800'],
            ['', b('(To record credit sale to Sauk Stereo, invoice #731)', '(Mencatat penjualan kredit ke Sauk Stereo, faktur #731)'), '', ''],
            ['May 4', b('Cost of Goods Sold', 'Harga Pokok Penjualan'), '2,400', ''],
            ['', b('Inventory', 'Persediaan'), '', '2,400'],
            ['', b('(To record cost of merchandise sold)', '(Mencatat biaya barang yang terjual)'), '', ''],
          ],
        },
        {
          type: 'p',
          text: b(
            'For internal decisions a company may keep several sales accounts — by product line, for example — but reports a single sales figure to outside investors. Detailed product-line sales would lengthen the statement and reveal operating results to competitors.',
            'Untuk keputusan internal, perusahaan dapat memakai beberapa akun penjualan — misalnya per lini produk — tetapi melaporkan satu angka penjualan kepada investor luar. Rincian penjualan per lini akan memanjangkan laporan dan membuka hasil operasi kepada pesaing.'
          ),
        },
        {
          type: 'h4',
          text: b('Sales returns and allowances', 'Retur dan potongan penjualan'),
        },
        {
          type: 'p',
          text: b(
            'When a customer returns goods, the seller debits <strong>Sales Returns and Allowances</strong> — a contra revenue account — and credits Accounts Receivable at the selling price. It also restores the goods to Inventory and reduces Cost of Goods Sold at their cost. For defective goods, the inventory is recorded at fair value instead of cost.',
            'Saat pelanggan mengembalikan barang, penjual mendebit <strong>Retur dan Potongan Penjualan</strong> — akun kontra pendapatan — dan mengkredit Piutang Usaha sebesar harga jual. Penjual juga mengembalikan barang ke Persediaan dan mengurangi Harga Pokok Penjualan sebesar biayanya. Untuk barang cacat, persediaan dicatat sebesar nilai wajar, bukan biaya.'
          ),
        },
        {
          type: 'table',
          caption: b('Return of goods sold at €300, cost €140 (good condition)', 'Retur barang jual €300, biaya €140 (kondisi baik)'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['May 8', b('Sales Returns and Allowances', 'Retur dan Potongan Penjualan'), '300', ''],
            ['', b('Accounts Receivable', 'Piutang Usaha'), '', '300'],
            ['', b('(To record credit granted for returned goods)', '(Mencatat kredit yang diberikan atas barang retur)'), '', ''],
            ['May 8', b('Inventory', 'Persediaan'), '140', ''],
            ['', b('Cost of Goods Sold', 'Harga Pokok Penjualan'), '', '140'],
            ['', b('(To record cost of goods returned)', '(Mencatat biaya barang yang dikembalikan)'), '', ''],
          ],
        },
        {
          type: 'callout',
          title: b('Why use a contra account?', 'Mengapa memakai akun kontra?'),
          text: b(
            'Debiting Sales Revenue directly would hide how large returns are relative to sales. A separate contra account discloses the amount, so management can spot inferior merchandise, billing errors, or shipping mistakes — and compare returns across periods.',
            'Mendebit Pendapatan Penjualan secara langsung akan menyembunyikan besarnya retur terhadap penjualan. Akun kontra terpisah mengungkapkan jumlahnya, sehingga manajemen dapat melihat barang bermutu rendah, kesalahan penagihan, atau kesalahan pengiriman — dan membandingkan retur antarperiode.'
          ),
          tone: 'note',
        },
        {
          type: 'h4',
          text: b('Sales discounts', 'Diskon penjualan'),
        },
        {
          type: 'p',
          text: b(
            'A <strong>sales discount</strong> is the seller’s side of a purchase discount: a cash discount for prompt payment, based on the invoice price less returns and allowances. The seller debits Sales Discounts, another contra revenue account, when the customer pays within the discount period.',
            '<strong>Diskon penjualan</strong> adalah sisi penjual dari diskon pembelian: potongan tunai untuk pembayaran cepat, dihitung dari harga faktur setelah retur dan potongan. Penjual mendebit Diskon Penjualan, akun kontra pendapatan lainnya, saat pelanggan membayar dalam periode diskon.'
          ),
        },
        {
          type: 'table',
          caption: b('Collection within the 2/10, n/30 discount period', 'Penagihan dalam periode diskon 2/10, n/30'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['May 14', b('Cash', 'Kas'), '3,430', ''],
            ['', b('Sales Discounts', 'Diskon Penjualan'), '70', ''],
            ['', b('Accounts Receivable', 'Piutang Usaha'), '', '3,500'],
            ['', b('(To record collection within the discount period from Sauk Stereo)', '(Mencatat penagihan dalam periode diskon dari Sauk Stereo)'), '', ''],
          ],
        },
        {
          type: 'table',
          caption: b('Net sales from the three sales-related transactions', 'Penjualan neto dari tiga transaksi penjualan'),
          head: [b('Item', 'Pos'), b('Amount', 'Jumlah')],
          align: ['left', 'right'],
          rows: [
            [b('Sales Revenue', 'Pendapatan Penjualan'), '3,800'],
            [b('Less: Sales Returns and Allowances', 'Dikurangi: Retur dan Potongan Penjualan'), '(300)'],
            [b('Less: Sales Discounts', 'Dikurangi: Diskon Penjualan'), '(70)'],
            [b('Net sales', 'Penjualan neto'), '3,430'],
          ],
        },
        {
          type: 'callout',
          title: b('Two contra revenue accounts, one normal side', 'Dua akun kontra pendapatan, satu sisi normal'),
          text: b(
            'Sales Returns and Allowances and Sales Discounts both have a normal debit balance and are offset against Sales Revenue on the income statement. Neither is an expense.',
            'Retur dan Potongan Penjualan serta Diskon Penjualan keduanya bersaldo normal debit dan dikurangkan dari Pendapatan Penjualan pada laporan laba rugi. Keduanya bukan beban.'
          ),
          tone: 'tip',
        },
      ],
    },
    {
      id: 'cycle',
      num: '5.4',
      tag: b('LO4 · Period end', 'LO4 · Akhir periode'),
      title: b('Completing the accounting cycle', 'Menuntaskan siklus akuntansi'),
      blocks: [
        {
          type: 'p',
          text: b(
            'The cycle for a merchandiser follows the same steps as for a service company. A perpetual system, however, needs <strong>one additional adjusting entry</strong>: the recorded Inventory balance is compared with a physical count and adjusted to agree with the goods actually on hand. Recording errors, theft, or waste can make the records wrong.',
            'Siklus perusahaan dagang mengikuti langkah yang sama seperti perusahaan jasa. Namun sistem perpetual memerlukan <strong>satu ayat penyesuaian tambahan</strong>: saldo Persediaan menurut catatan dibandingkan dengan perhitungan fisik dan disesuaikan agar sama dengan barang yang benar-benar ada. Kesalahan pencatatan, pencurian, atau susut dapat membuat catatan keliru.'
          ),
        },
        {
          type: 'table',
          caption: b('PW Audio Supply — inventory write-down at December 31', 'PW Audio Supply — penurunan persediaan pada 31 Desember'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['Dec. 31', b('Cost of Goods Sold', 'Harga Pokok Penjualan'), '500', ''],
            ['', b('Inventory', 'Persediaan'), '', '500'],
            ['', b('(To adjust inventory from €40,500 to the physical count of €40,000)', '(Menyesuaikan persediaan dari €40.500 ke hasil hitung fisik €40.000)'), '', ''],
          ],
        },
        {
          type: 'h4',
          text: b('Closing entries', 'Ayat penutup'),
        },
        {
          type: 'p',
          text: b(
            'Closing works exactly as in Chapter 4: credit every temporary account with a debit balance, debit every temporary account with a credit balance, close Income Summary to Retained Earnings, then close Dividends. For a merchandiser, Cost of Goods Sold, Sales Returns and Allowances, Sales Discounts, and Freight-Out are temporary accounts too, so they are closed as well.',
            'Penutupan bekerja persis seperti Bab 4: kreditkan setiap akun nominal bersaldo debit, debitkan setiap akun nominal bersaldo kredit, tutup Ikhtisar Laba Rugi ke Saldo Laba, lalu tutup Dividen. Bagi perusahaan dagang, Harga Pokok Penjualan, Retur dan Potongan Penjualan, Diskon Penjualan, dan Beban Angkut Keluar juga akun nominal, sehingga ikut ditutup.'
          ),
        },
        {
          type: 'table',
          caption: b('PW Audio Supply — closing entries at December 31', 'PW Audio Supply — ayat penutup pada 31 Desember'),
          head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
          align: ['left', 'left', 'right', 'right'],
          rows: [
            ['Dec. 31', b('Sales Revenue', 'Pendapatan Penjualan'), '480,000', ''],
            ['', b('Income Summary', 'Ikhtisar Laba Rugi'), '', '480,000'],
            ['', b('(To close income statement accounts with credit balances)', '(Menutup akun laba rugi bersaldo kredit)'), '', ''],
            ['Dec. 31', b('Income Summary', 'Ikhtisar Laba Rugi'), '450,000', ''],
            ['', b('Cost of Goods Sold', 'Harga Pokok Penjualan'), '', '316,000'],
            ['', b('Salaries and Wages Expense', 'Beban Gaji dan Upah'), '', '64,000'],
            ['', b('Utilities Expense', 'Beban Utilitas'), '', '17,000'],
            ['', b('Advertising Expense', 'Beban Iklan'), '', '16,000'],
            ['', b('Sales Returns and Allowances', 'Retur dan Potongan Penjualan'), '', '12,000'],
            ['', b('Sales Discounts', 'Diskon Penjualan'), '', '8,000'],
            ['', b('Depreciation Expense', 'Beban Penyusutan'), '', '8,000'],
            ['', b('Freight-Out', 'Beban Angkut Keluar'), '', '7,000'],
            ['', b('Insurance Expense', 'Beban Asuransi'), '', '2,000'],
            ['', b('(To close income statement accounts with debit balances)', '(Menutup akun laba rugi bersaldo debit)'), '', ''],
            ['Dec. 31', b('Income Summary', 'Ikhtisar Laba Rugi'), '30,000', ''],
            ['', b('Retained Earnings', 'Saldo Laba'), '', '30,000'],
            ['', b('(To close net income to retained earnings)', '(Menutup laba bersih ke saldo laba)'), '', ''],
            ['Dec. 31', b('Retained Earnings', 'Saldo Laba'), '15,000', ''],
            ['', b('Dividends', 'Dividen'), '', '15,000'],
            ['', b('(To close dividends to retained earnings)', '(Menutup dividen ke saldo laba)'), '', ''],
          ],
        },
        {
          type: 'formula',
          label: b('Proof of the closing figures', 'Bukti angka penutupan'),
          expr: 'Sales 480,000 − Expenses 450,000 = Net income 30,000<br>Income Summary closes to 0; Retained Earnings increases by 30,000 − 15,000',
          note: b(
            'After posting, all temporary accounts have zero balances and Retained Earnings carries forward to the next period.',
            'Setelah diposting, semua akun nominal bersaldo nol dan Saldo Laba dibawa ke periode berikutnya.'
          ),
        },
        {
          type: 'callout',
          title: b('Scope note for this site', 'Catatan cakupan situs ini'),
          text: b(
            'This summary stops at page 232. The multiple-step income statement and the remaining forms of financial statements (Learning Objective 5) lie beyond the requested page range and are not included.',
            'Ringkasan ini berhenti di halaman 232. Laporan laba rugi bertahap dan bentuk laporan keuangan lainnya (Tujuan Pembelajaran 5) berada di luar rentang halaman yang diminta dan belum disertakan.'
          ),
          tone: 'warn',
        },
      ],
    },
    {
      id: 'entries',
      num: '5.5',
      tag: b('Reference', 'Rujukan'),
      title: b('Merchandising entries at a glance', 'Ayat jurnal perdagangan sekilas'),
      blocks: [
        {
          type: 'p',
          text: b(
            'The same event looks different on the buyer’s and the seller’s books. Use this table as a quick check before working the exercises.',
            'Peristiwa yang sama tampak berbeda pada buku pembeli dan penjual. Gunakan tabel ini sebagai pemeriksaan cepat sebelum mengerjakan latihan.'
          ),
        },
        {
          type: 'table',
          head: [b('Event', 'Peristiwa'), b('Buyer (Sauk Stereo)', 'Pembeli (Sauk Stereo)'), b('Seller (PW Audio Supply)', 'Penjual (PW Audio Supply)')],
          rows: [
            [b('Purchase / sale on account', 'Pembelian / penjualan kredit'), b('Dr Inventory / Cr Accounts Payable', 'Dr Persediaan / Cr Utang Usaha'), b('Dr Accounts Receivable / Cr Sales Revenue; Dr Cost of Goods Sold / Cr Inventory', 'Dr Piutang Usaha / Cr Pendapatan Penjualan; Dr Harga Pokok Penjualan / Cr Persediaan')],
            [b('Freight paid by the party responsible', 'Ongkos angkut dibayar pihak yang bertanggung jawab'), b('Dr Inventory / Cr Cash (FOB shipping point)', 'Dr Persediaan / Cr Kas (FOB shipping point)'), b('Dr Freight-Out / Cr Cash (FOB destination)', 'Dr Beban Angkut Keluar / Cr Kas (FOB destination)')],
            [b('Return of goods', 'Retur barang'), b('Dr Accounts Payable / Cr Inventory', 'Dr Utang Usaha / Cr Persediaan'), b('Dr Sales Returns and Allowances / Cr Accounts Receivable; Dr Inventory / Cr Cost of Goods Sold', 'Dr Retur dan Potongan Penjualan / Cr Piutang Usaha; Dr Persediaan / Cr Harga Pokok Penjualan')],
            [b('Price allowance, goods kept', 'Potongan harga, barang disimpan'), b('Dr Accounts Payable / Cr Inventory', 'Dr Utang Usaha / Cr Persediaan'), b('Dr Sales Returns and Allowances / Cr Accounts Receivable', 'Dr Retur dan Potongan Penjualan / Cr Piutang Usaha')],
            [b('Payment within discount period', 'Pembayaran dalam periode diskon'), b('Dr Accounts Payable / Cr Cash / Cr Inventory', 'Dr Utang Usaha / Cr Kas / Cr Persediaan'), b('Dr Cash / Dr Sales Discounts / Cr Accounts Receivable', 'Dr Kas / Dr Diskon Penjualan / Cr Piutang Usaha')],
            [b('Inventory shortage at count', 'Kekurangan persediaan saat hitung fisik'), b('Dr Cost of Goods Sold / Cr Inventory', 'Dr Harga Pokok Penjualan / Cr Persediaan'), b('Dr Cost of Goods Sold / Cr Inventory', 'Dr Harga Pokok Penjualan / Cr Persediaan')],
          ],
        },
        {
          type: 'callout',
          title: b('One rule covers both sides', 'Satu aturan untuk kedua sisi'),
          text: b(
            'The buyer always adjusts Inventory; the seller adjusts Sales Revenue through a contra account and adjusts Inventory only for the cost of goods returned. A discount reduces Inventory for the buyer and increases Sales Discounts for the seller.',
            'Pembeli selalu menyesuaikan Persediaan; penjual menyesuaikan Pendapatan Penjualan lewat akun kontra dan menyesuaikan Persediaan hanya untuk biaya barang yang diretur. Diskon mengurangi Persediaan bagi pembeli dan menambah Diskon Penjualan bagi penjual.'
          ),
          tone: 'tip',
        },
      ],
    },
  ],
  quiz: [
    {
      q: b('What are the two expense categories of a merchandising company?', 'Apa dua kategori beban perusahaan dagang?'),
      a: b('Cost of goods sold and operating expenses.', 'Harga pokok penjualan dan beban operasi.'),
    },
    {
      q: b('Under a perpetual system, what does the buyer debit when goods are purchased for resale?', 'Dalam sistem perpetual, apa yang didebit pembeli saat membeli barang untuk dijual kembali?'),
      a: b('Inventory — purchases of merchandise for resale are debited to Inventory, not to a Purchases account.', 'Persediaan — pembelian barang untuk dijual kembali didebit ke Persediaan, bukan ke akun Pembelian.'),
    },
    {
      q: b('Who pays freight under FOB shipping point, and how is it recorded?', 'Siapa yang membayar ongkos angkut pada FOB shipping point, dan bagaimana pencatatannya?'),
      a: b('The buyer pays and debits Inventory, because freight is part of the cost of acquiring the goods.', 'Pembeli yang membayar dan mendebit Persediaan, karena ongkos angkut adalah bagian biaya memperoleh barang.'),
    },
    {
      q: b('Why does a perpetual system need an extra adjusting entry at year-end?', 'Mengapa sistem perpetual memerlukan ayat penyesuaian tambahan di akhir tahun?'),
      a: b('To bring the recorded Inventory balance into agreement with the physical count; any shortage is debited to Cost of Goods Sold.', 'Untuk menyamakan saldo Persediaan menurut catatan dengan hasil hitung fisik; kekurangannya didebit ke Harga Pokok Penjualan.'),
    },
    {
      q: b('How is a sales discount different from a purchase discount?', 'Apa beda diskon penjualan dan diskon pembelian?'),
      a: b('They are the same cash discount seen from opposite sides: the buyer credits Inventory (purchase discount), the seller debits Sales Discounts (sales discount).', 'Keduanya diskon tunai yang sama dari dua sisi: pembeli mengkredit Persediaan (diskon pembelian), penjual mendebit Diskon Penjualan (diskon penjualan).'),
    },
  ],
};

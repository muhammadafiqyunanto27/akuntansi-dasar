import { b } from '../data/types';

export const exercisesByChapter = [
  {
    chapter: 1,
    title: b('Chapter 1: Accounting in Action', 'Bab 1: Akuntansi dalam Aksi'),
    sections: [
      {
        id: 'brief-exercises',
        title: b('Brief Exercises', 'Latihan Singkat'),
        items: [
          {
            id: 'BE1-1',
            title: b('BE1-1: Basic Accounting Equation', 'BE1-1: Persamaan Dasar Akuntansi'),
            question: b(
              'Determine the missing amounts in the basic accounting equation: Assets = Liabilities + Equity.',
              'Tentukan jumlah yang hilang dalam persamaan dasar akuntansi: Aset = Liabilitas + Ekuitas.'
            ),
            parts: [
              { label: '(a)', given: b('Assets ¥88,000; Liabilities ¥50,000', 'Aset ¥88.000; Liabilitas ¥50.000'), answer: b('Equity = ¥38,000', 'Ekuitas = ¥38.000') },
              { label: '(b)', given: b('Liabilities ¥45,000; Equity ¥70,000', 'Liabilitas ¥45.000; Ekuitas ¥70.000'), answer: b('Assets = ¥115,000', 'Aset = ¥115.000') },
              { label: '(c)', given: b('Assets ¥94,000; Equity ¥60,000', 'Aset ¥94.000; Ekuitas ¥60.000'), answer: b('Liabilities = ¥34,000', 'Liabilitas = ¥34.000') }
            ],
            explanation: b(
              'Use the accounting equation: Assets = Liabilities + Equity. Rearrange to solve for the missing component.',
              'Gunakan persamaan akuntansi: Aset = Liabilitas + Ekuitas. Susun ulang untuk menyelesaikan komponen yang hilang.'
            )
          },
          {
            id: 'BE1-2',
            title: b('BE1-2: Accounting Equation Questions', 'BE1-2: Pertanyaan Persamaan Akuntansi'),
            question: b(
              'Answer each question using the accounting equation.',
              'Jawab setiap pertanyaan menggunakan persamaan akuntansi.'
            ),
            parts: [
              { label: '(a)', given: b('Liabilities £120,000; Equity £232,000', 'Liabilitas £120.000; Ekuitas £232.000'), answer: b('Assets = £352,000', 'Aset = £352.000') },
              { label: '(b)', given: b('Assets £190,000; Equity £80,000', 'Aset £190.000; Ekuitas £80.000'), answer: b('Liabilities = £110,000', 'Liabilitas = £110.000') },
              { label: '(c)', given: b('Assets £600,000; Liabilities = ½ Assets', 'Aset £600.000; Liabilitas = ½ Aset'), answer: b('Equity = £300,000', 'Ekuitas = £300.000') }
            ],
            explanation: b(
              'Apply Assets = Liabilities + Equity. For (c), if Liabilities = ½ Assets, then Equity = ½ Assets = £300,000.',
              'Terapkan Aset = Liabilitas + Ekuitas. Untuk (c), jika Liabilitas = ½ Aset, maka Ekuitas = ½ Aset = £300.000.'
            )
          },
          {
            id: 'BE1-3',
            title: b('BE1-3: Changes in Accounting Equation', 'BE1-3: Perubahan dalam Persamaan Akuntansi'),
            question: b(
              'Gonzales Company: beginning assets €870,000, liabilities €500,000. Answer for end of year.',
              'Perusahaan Gonzales: aset awal €870.000, liabilitas €500.000. Jawab untuk akhir tahun.'
            ),
            parts: [
              { label: '(a)', given: b('Assets +€150,000; Liabilities -€80,000', 'Aset +€150.000; Liabilitas -€80.000'), answer: b('Ending Equity = €600,000', 'Ekuitas Akhir = €600.000') },
              { label: '(b)', given: b('Liabilities +€100,000; Equity -€55,000', 'Liabilitas +€100.000; Ekuitas -€55.000'), answer: b('Ending Assets = €915,000', 'Aset Akhir = €915.000') },
              { label: '(c)', given: b('Assets -€80,000; Equity +€120,000', 'Aset -€80.000; Ekuitas +€120.000'), answer: b('Ending Liabilities = €300,000', 'Liabilitas Akhir = €300.000') }
            ],
            explanation: b(
              'Track changes using the equation. Beginning equity = €870,000 - €500,000 = €370,000. Apply changes to find ending balances.',
              'Lacak perubahan menggunakan persamaan. Ekuitas awal = €870.000 - €500.000 = €370.000. Terapkan perubahan untuk menemukan saldo akhir.'
            )
          },
          {
            id: 'BE1-4',
            title: b('BE1-4: Expanded Accounting Equation', 'BE1-4: Persamaan Akuntansi Diperluas'),
            question: b(
              'Use expanded equation: Assets = Liabilities + Share Capital + Revenues - Expenses - Dividends.',
              'Gunakan persamaan diperluas: Aset = Liabilitas + Modal Saham + Pendapatan - Beban - Dividen.'
            ),
            parts: [
              { label: '(a)', given: b('Liabilities £90,000; Share Capital £150,000; Dividends £40,000; Revenues £450,000; Expenses £320,000', 'Liabilitas £90.000; Modal Saham £150.000; Dividen £40.000; Pendapatan £450.000; Beban £320.000'), answer: b(`Assets = £330,000`, `Aset = £330.000`) },
              { label: '(b)', given: b('Assets £57,000; Share Capital £23,000; Dividends £7,000; Revenues £50,000; Expenses £35,000', 'Aset £57.000; Modal Saham £23.000; Dividen £7.000; Pendapatan £50.000; Beban £35.000'), answer: b(`Liabilities = £26,000`, `Liabilitas = £26.000`) },
              { label: '(c)', given: b('Assets £600,000; Liabilities = ⅔ Assets', 'Aset £600.000; Liabilitas = ⅔ Aset'), answer: b(`Equity = £200,000`, `Ekuitas = £200.000`) }
            ],
            explanation: b(
              'Expanded equation includes equity components. Net income = Revenues - Expenses. Equity = Share Capital + Net Income - Dividends.',
              'Persamaan diperluas mencakup komponen ekuitas. Laba bersih = Pendapatan - Beban. Ekuitas = Modal Saham + Laba Bersih - Dividen.'
            )
          },
          {
            id: 'BE1-5',
            title: b('BE1-5: Asset, Liability, or Equity Classification', 'BE1-5: Klasifikasi Aset, Liabilitas, atau Ekuitas'),
            question: b('Classify each item as A (asset), L (liability), or E (equity).', 'Klasifikasikan setiap item sebagai A (aset), L (liabilitas), atau E (ekuitas).'),
            parts: [
              { label: '(a)', given: b('Accounts receivable', 'Piutang usaha'), answer: b('A', 'A') },
              { label: '(b)', given: b('Salaries and wages payable', 'Gaji dan upah yang harus dibayar'), answer: b('L', 'L') },
              { label: '(c)', given: b('Equipment', 'Peralatan'), answer: b('A', 'A') },
              { label: '(d)', given: b('Supplies', 'Perlengkapan'), answer: b('A', 'A') },
              { label: '(e)', given: b('Share capital—ordinary', 'Modal saham—biasa'), answer: b('E', 'E') },
              { label: '(f)', given: b('Notes payable', 'Wesel yang harus dibayar'), answer: b('L', 'L') }
            ],
            explanation: b(
              'Assets are resources owned. Liabilities are obligations. Equity is the residual interest.',
              'Aset adalah sumber daya yang dimiliki. Liabilitas adalah kewajiban. Ekuitas adalah hak residual.'
            )
          },
          {
            id: 'BE1-6',
            title: b('BE1-6: Transaction Effects on Accounting Equation', 'BE1-6: Efek Transaksi pada Persamaan Akuntansi'),
            question: b('Indicate effect (+, −, NE) on assets, liabilities, equity for each transaction.', 'Tunjukkan efek (+, −, NE) pada aset, liabilitas, ekuitas untuk setiap transaksi.'),
            parts: [
              { label: '(a)', given: b('Purchased supplies on account', 'Membeli perlengkapan pada rekening'), answer: b('Assets +; Liabilities +; Equity NE', 'Aset +; Liabilitas +; Ekuitas NE') },
              { label: '(b)', given: b('Received cash for service', 'Menerima uang tunai untuk jasa'), answer: b('Assets +; Liabilities NE; Equity +', 'Aset +; Liabilitas NE; Ekuitas +') },
              { label: '(c)', given: b('Paid expenses in cash', 'Membayar beban dengan tunai'), answer: b('Assets −; Liabilities NE; Equity −', 'Aset −; Liabilitas NE; Ekuitas −') }
            ],
            explanation: b(
              '(a) Supplies (asset) ↑, Accounts Payable (liability) ↑. (b) Cash (asset) ↑, Revenue (equity) ↑. (c) Cash (asset) ↓, Expense (equity) ↓.',
              '(a) Perlengkapan (aset) ↑, Hutang Usaha (liabilitas) ↑. (b) Kas (aset) ↑, Pendapatan (ekuitas) ↑. (c) Kas (aset) ↓, Beban (ekuitas) ↓.'
            )
          },
          {
            id: 'BE1-7',
            title: b('BE1-7: More Transaction Effects', 'BE1-7: Efek Transaksi Lainnya'),
            question: b('Indicate effect on assets, liabilities, equity for each transaction.', 'Tunjukkan efek pada aset, liabilitas, ekuitas untuk setiap transaksi.'),
            parts: [
              { label: '(a)', given: b('Shareholders invested cash for shares', 'Pemegang saham berinvestasi tunai untuk saham'), answer: b('Assets +; Liabilities NE; Equity +', 'Aset +; Liabilitas NE; Ekuitas +') },
              { label: '(b)', given: b('Paid cash dividend', 'Membayar dividen tunai'), answer: b('Assets −; Liabilities NE; Equity −', 'Aset −; Liabilitas NE; Ekuitas −') },
              { label: '(c)', given: b('Received cash from billed customer', 'Menerima tunai dari pelanggan yang ditagih'), answer: b('Assets NE; Liabilities NE; Equity NE', 'Aset NE; Liabilitas NE; Ekuitas NE') }
            ],
            explanation: b(
              '(a) Cash ↑, Share Capital ↑. (b) Cash ↓, Dividends ↑ (equity ↓). (c) Cash ↑, Accounts Receivable ↓ — both assets, no net change.',
              '(a) Kas ↑, Modal Saham ↑. (b) Kas ↓, Dividen ↑ (ekuitas ↓). (c) Kas ↑, Piutang Usaha ↓ — keduanya aset, tidak ada perubahan bersih.'
            )
          },
          {
            id: 'BE1-8',
            title: b('BE1-8: Dividends, Revenue, or Expense', 'BE1-8: Dividen, Pendapatan, atau Beban'),
            question: b('Classify each as D (dividends), R (revenue), or E (expense).', 'Klasifikasikan sebagai D (dividen), R (pendapatan), atau E (beban).'),
            parts: [
              { label: '(a)', given: b('Advertising expense', 'Beban iklan'), answer: b('E', 'E') },
              { label: '(b)', given: b('Service revenue', 'Pendapatan jasa'), answer: b('R', 'R') },
              { label: '(c)', given: b('Insurance expense', 'Beban asuransi'), answer: b('E', 'E') },
              { label: '(d)', given: b('Salaries and wages expense', 'Beban gaji dan upah'), answer: b('E', 'E') },
              { label: '(e)', given: b('Dividends', 'Dividen'), answer: b('D', 'D') },
              { label: '(f)', given: b('Rent revenue', 'Pendapatan sewa'), answer: b('R', 'R') },
              { label: '(g)', given: b('Utilities expense', 'Beban utilitas'), answer: b('E', 'E') }
            ],
            explanation: b(
              'Revenues increase equity; expenses and dividends decrease equity.',
              'Pendapatan menambah ekuitas; beban dan dividen mengurangi ekuitas.'
            )
          },
          {
            id: 'BE1-9',
            title: b('BE1-9: Equity Effects of Transactions', 'BE1-9: Efek Ekuitas Transaksi'),
            question: b('Mark each transaction: SC (share capital), D (dividends), R (revenue), E (expense), NE (no effect).', 'Tandai setiap transaksi: SC (modal saham), D (dividen), R (pendapatan), E (beban), NE (tidak ada efek).'),
            parts: [
              { label: '(a)', given: b('Received cash for services', 'Menerima tunai untuk jasa'), answer: b('R', 'R') },
              { label: '(b)', given: b('Paid cash for equipment', 'Membayar tunai untuk peralatan'), answer: b('NE', 'NE') },
              { label: '(c)', given: b('Paid employee salaries', 'Membayar gaji karyawan'), answer: b('E', 'E') }
            ],
            explanation: b(
              '(a) Revenue increases equity. (b) Asset exchange (cash for equipment), no equity effect. (c) Expense decreases equity.',
              '(a) Pendapatan menambah ekuitas. (b) Pertukaran aset (kas untuk peralatan), tidak ada efek ekuitas. (c) Beban mengurangi ekuitas.'
            )
          },
          {
            id: 'BE1-10',
            title: b('BE1-10: Statement of Financial Position', 'BE1-10: Laporan Posisi Keuangan'),
            question: b('Prepare a statement of financial position from the alphabetical list.', 'Buat laporan posisi keuangan dari daftar abjad.'),
            parts: [
              { label: '', given: b('Cash £44,000; Accounts Receivable £72,500; Accounts Payable £85,000; Share Capital £31,500; Equipment ?; Supplies ?; Retained Earnings ?', 'Kas £44.000; Piutang Usaha £72.500; Hutang Usaha £85.000; Modal Saham £31.500; Peralatan ?; Perlengkapan ?; Laba Ditahan ?'), answer: b(`Total Assets = Total Liabilities + Equity. Calculate missing amounts.`, `Total Aset = Total Liabilitas + Ekuitas. Hitung jumlah yang hilang.`) }
            ],
            explanation: b(
              'Arrange items in classified format: Current Assets (Cash, A/R, Supplies), Plant Assets (Equipment). Liabilities (A/P). Equity (Share Capital, Retained Earnings). Ensure A = L + E.',
              'Susun item dalam format terklasifikasi: Aset Lancar (Kas, Piutang, Perlengkapan), Aset Tetap (Peralatan). Liabilitas (Hutang Usaha). Ekuitas (Modal Saham, Laba Ditahan). Pastikan A = L + E.'
            )
          },
          {
            id: 'BE1-11',
            title: b('BE1-11: Financial Statement Classification', 'BE1-11: Klasifikasi Laporan Keuangan'),
            question: b('Indicate where each item appears: IS (income statement), FP (financial position), RE (retained earnings), CI (comprehensive income).', 'Tunjukkan di mana setiap item muncul: IS (laporan laba rugi), FP (posisi keuangan), RE (laba ditahan), CI (laba rugi komprehensif).'),
            parts: [
              { label: '(a)', given: b('Other comprehensive income', 'Laba rugi komprehensif lain'), answer: b('CI', 'CI') },
              { label: '(b)', given: b('Advertising expense', 'Beban iklan'), answer: b('IS', 'IS') },
              { label: '(c)', given: b('Share capital—ordinary', 'Modal saham—biasa'), answer: b('FP', 'FP') },
              { label: '(d)', given: b('Cash', 'Kas'), answer: b('FP', 'FP') },
              { label: '(e)', given: b('Service revenue', 'Pendapatan jasa'), answer: b('IS', 'IS') },
              { label: '(f)', given: b('Dividends', 'Dividen'), answer: b('RE', 'RE') }
            ],
            explanation: b(
              'Revenues and expenses → IS. Assets, liabilities, equity → FP. Dividends → RE. OCI items → CI.',
              'Pendapatan dan beban → IS. Aset, liabilitas, ekuitas → FP. Dividen → RE. Item OCI → CI.'
            )
          }
        ]
      },
      {
        id: 'do-it-exercises',
        title: b('DO IT! Exercises', 'Latihan DO IT!'),
        items: [
          {
            id: 'DOIT1-1',
            title: b('DO IT! 1-1: True/False - Accounting Process', 'DO IT! 1-1: Benar/Salah - Proses Akuntansi'),
            question: b('Indicate true or false. If false, correct the statement.', 'Tunjukkan benar atau salah. Jika salah, perbaiki pernyataannya.'),
            parts: [
              { label: '1', given: b('Three steps: identification, recording, examination', 'Tiga langkah: identifikasi, pencatatan, pemeriksaan'), answer: b('False. Correct: identification, recording, communication', 'Salah. Benar: identifikasi, pencatatan, komunikasi') },
              { label: '2', given: b('Accounting process includes bookkeeping', 'Proses akuntansi mencakup pembukuan'), answer: b('True', 'Benar') },
              { label: '3', given: b('Managerial accounting helps investors/creditors', 'Akuntansi manajerial membantu investor/kreditor'), answer: b('False. Financial accounting provides reports to investors/creditors', 'Salah. Akuntansi keuangan menyediakan laporan ke investor/kreditor') },
              { label: '4', given: b('Two common external users: investors and creditors', 'Dua pengguna eksternal umum: investor dan kreditor'), answer: b('True', 'Benar') },
              { label: '5', given: b('Internal users include HR managers', 'Pengguna internal termasuk manajer SDM'), answer: b('True', 'Benar') }
            ],
            explanation: b(
              'The three activities are identification, recording, communication. Managerial accounting serves internal users; financial accounting serves external users.',
              'Tiga aktivitasnya adalah identifikasi, pencatatan, komunikasi. Akuntansi manajerial melayani pengguna internal; akuntansi keuangan melayani pengguna eksternal.'
            )
          },
          {
            id: 'DOIT1-2',
            title: b('DO IT! 1-2: True/False - Standards and Principles', 'DO IT! 1-2: Benar/Salah - Standar dan Prinsip'),
            question: b('Indicate true or false. If false, correct the statement.', 'Tunjukkan benar atau salah. Jika salah, perbaiki pernyataannya.'),
            parts: [
              { label: '1', given: b('IFRS issued by IASB', 'IFRS diterbitkan oleh IASB'), answer: b('True', 'Benar') },
              { label: '2', given: b('Ethics = standards of conduct for loyal/disloyal', 'Etika = standar perilaku untuk setia/tidak setia'), answer: b('True', 'Benar') },
              { label: '3', given: b('Primary US standard-setter = SEC', 'Penetapan standar utama AS = SEC'), answer: b('False. FASB is primary; SEC has oversight', 'Salah. FASB adalah utama; SEC mengawasi') },
              { label: '4', given: b('Historical cost: record at cost, continue at cost', 'Biaya historis: catat pada biaya, lanjutkan pada biaya'), answer: b('True', 'Benar') },
              { label: '5', given: b('Monetary unit: only record monetary transactions', 'Unit moneter: hanya catat transaksi moneter'), answer: b('True', 'Benar') }
            ],
            explanation: b(
              'FASB sets standards; SEC enforces. Historical cost principle requires recording at original cost. Monetary unit assumes stable currency.',
              'FASB menetapkan standar; SEC menegakkan. Prinsip biaya historis mengharuskan pencatatan pada biaya asal. Unit moneter mengasumsikan mata uang stabil.'
            )
          },
          {
            id: 'DOIT1-3',
            title: b('DO IT! 1-3: Equity Classification', 'DO IT! 1-3: Klasifikasi Ekuitas'),
            question: b('Classify as I (issuance of shares), D (dividends), R (revenues), E (expenses). Indicate increase/decrease equity.', 'Klasifikasikan sebagai I (penerbitan saham), D (dividen), R (pendapatan), E (beban). Tunjukkan naik/turun ekuitas.'),
            parts: [
              { label: '1', given: b('Dividends', 'Dividen'), answer: b('D — Decreases equity', 'D — Mengurangi ekuitas') },
              { label: '2', given: b('Rent revenue', 'Pendapatan sewa'), answer: b('R — Increases equity', 'R — Menambah ekuitas') },
              { label: '3', given: b('Advertising expense', 'Beban iklan'), answer: b('E — Decreases equity', 'E — Mengurangi ekuitas') },
              { label: '4', given: b('Shareholders invest cash', 'Pemegang saham berinvestasi tunai'), answer: b('I — Increases equity', 'I — Menambah ekuitas') }
            ],
            explanation: b(
              'Revenues and share issuances increase equity. Expenses and dividends decrease equity.',
              'Pendapatan dan penerbitan saham menambah ekuitas. Beban dan dividen mengurangi ekuitas.'
            )
          },
          {
            id: 'DOIT1-4',
            title: b('DO IT! 1-4: Tabular Analysis', 'DO IT! 1-4: Analisis Tabular'),
            question: b('Prepare tabular analysis for Callahan & Co. transactions.', 'Buat analisis tabular untuk transaksi Callahan & Co.'),
            parts: [
              { label: '1', given: b('Services R23,000 on credit', 'Jasa R23.000 kredit'), answer: b('A/R +23,000; Service Revenue +23,000', 'Piutang +23.000; Pendapatan Jasa +23.000') },
              { label: '2', given: b('Collected R23,000 from customers', 'Mengumpulkan R23.000 dari pelanggan'), answer: b('Cash +23,000; A/R -23,000', 'Kas +23.000; Piutang -23.000') },
              { label: '3', given: b('Advertising bill R1,600 on account', 'Tagihan iklan R1.600 pada rekening'), answer: b('Advertising Expense +1,600; A/P +1,600', 'Beban Iklan +1.600; Hutang Usaha +1.600') },
              { label: '4', given: b('Paid dividend R5,000 cash', 'Membayar dividen R5.000 tunai'), answer: b('Cash -5,000; Dividends +5,000', 'Kas -5.000; Dividen +5.000') }
            ],
            explanation: b(
              'Each transaction affects at least two accounts. Use the accounting equation to ensure balance. Revenue and expenses affect equity through retained earnings.',
              'Setiap transaksi mempengaruhi minimal dua akun. Gunakan persamaan akuntansi untuk memastikan keseimbangan. Pendapatan dan beban mempengaruhi ekuitas melalui laba ditahan.'
            )
          },
          {
            id: 'DOIT1-5',
            title: b('DO IT! 1-5: Financial Statement Calculations', 'DO IT! 1-5: Perhitungan Laporan Keuangan'),
            question: b('Rivera Company SA data at Dec 31, 2017. Determine: (a) total assets, (b) net income, (c) equity.', 'Data Rivera Company SA pada 31 Des 2017. Tentukan: (a) total aset, (b) laba bersih, (c) ekuitas.'),
            parts: [
              { label: '(a)', given: b('Cash R$9,000; A/R R$13,500; Equipment R$29,000', 'Kas R$9.000; Piutang R$13.500; Peralatan R$29.000'), answer: b(`Total Assets = R$51,500`, `Total Aset = R$51.500`) },
              { label: '(b)', given: b('Service Revenue R$54,000; Expenses: Advertising 6,000; Rent 9,800; Salaries 16,500', 'Pendapatan Jasa R$54.000; Beban: Iklan 6.000; Sewa 9.800; Gaji 16.500'), answer: b(`Net Income = R$21,700`, `Laba Bersih = R$21.700`) },
              { label: '(c)', given: b('Use A = L + E. Liabilities: A/P R$3,000; Notes Payable R$25,000', 'Gunakan A = L + E. Liabilitas: Hutang Usaha R$3.000; Wesel Bayar R$25.000'), answer: b(`Equity = R$23,500`, `Ekuitas = R$23.500`) }
            ],
            explanation: b(
              '(a) Sum all assets. (b) Revenue - Total Expenses. (c) Equity = Assets - Liabilities. Verify: A = L + E → 51,500 = 28,000 + 23,500 ✓',
              '(a) Jumlahkan semua aset. (b) Pendapatan - Total Beban. (c) Ekuitas = Aset - Liabilitas. Verifikasi: A = L + E → 51.500 = 28.000 + 23.500 ✓'
            )
          }
        ]
      },
      {
        id: 'exercises',
        title: b('Exercises', 'Latihan'),
        items: [
          {
            id: 'E1-1',
            title: b('E1-1: Accounting Activities Classification', 'E1-1: Klasifikasi Aktivitas Akuntansi'),
            question: b('Categorize Sondgeroth NV tasks as Identification (I), Recording (R), or Communication (C).', 'Kategorikan tugas Sondgeroth NV sebagai Identifikasi (I), Pencatatan (R), atau Komunikasi (C).'),
            parts: [
              { label: 'Analyzing and interpreting', given: b('Analyzing and interpreting information', 'Menganalisis dan menafsirkan informasi'), answer: b('C', 'C') },
              { label: 'Classifying events', given: b('Classifying economic events', 'Mengklasifikasikan peristiwa ekonomi'), answer: b('I', 'I') },
              { label: 'Explaining data', given: b('Explaining uses, meaning, limitations of data', 'Menjelaskan penggunaan, arti, keterbatasan data'), answer: b('C', 'C') },
              { label: 'Systematic diary', given: b('Keeping systematic chronological diary', 'Menyimpan diary kronologis sistematis'), answer: b('R', 'R') },
              { label: 'Measuring in monetary units', given: b('Measuring events in monetary units', 'Mengukur peristiwa dalam unit moneter'), answer: b('I', 'I') },
              { label: 'Preparing reports', given: b('Preparing accounting reports', 'Menyiapkan laporan akuntansi'), answer: b('C', 'C') },
              { label: 'Reporting standard format', given: b('Reporting in standard format', 'Melaporkan dalam format standar'), answer: b('C', 'C') },
              { label: 'Selecting activities', given: b('Selecting relevant economic activities', 'Memilih aktivitas ekonomi relevan'), answer: b('I', 'I') },
              { label: 'Summarizing events', given: b('Summarizing economic events', 'Meringkas peristiwa ekonomi'), answer: b('R', 'R') }
            ],
            explanation: b(
              'Identification: selecting, classifying, measuring. Recording: diary, summarizing. Communication: analyzing, explaining, preparing, reporting.',
              'Identifikasi: memilih, mengklasifikasikan, mengukur. Pencatatan: diary, meringkas. Komunikasi: menganalisis, menjelaskan, menyiapkan, melaporkan.'
            )
          },
          {
            id: 'E1-2',
            title: b('E1-2: Internal vs External Users', 'E1-2: Pengguna Internal vs Eksternal'),
            question: b('(a) Classify users as E (external) or I (internal). (b) Classify questions as asked by E or I.', '(a) Klasifikasikan pengguna sebagai E (eksternal) atau I (internal). (b) Klasifikasikan pertanyaan sebagai diajukan E atau I.'),
            parts: [
              { label: '(a) Customers', given: b('Customers', 'Pelanggan'), answer: b('E', 'E') },
              { label: '(a) Store manager', given: b('Store manager', 'Manajer toko'), answer: b('I', 'I') },
              { label: '(a) Labor unions', given: b('Labor unions', 'Serikat pekerja'), answer: b('E', 'E') },
              { label: '(a) Suppliers', given: b('Suppliers', 'Pemasok'), answer: b('E', 'E') },
              { label: '(a) Marketing manager', given: b('Marketing manager', 'Manajer pemasaran'), answer: b('I', 'I') },
              { label: '(a) Taxing agency', given: b('Taxing agency', 'Badan pajak'), answer: b('E', 'E') },
              { label: '(a) Production supervisor', given: b('Production supervisor', 'Supervisor produksi'), answer: b('I', 'I') },
              { label: '(a) VP Finance', given: b('Vice president of finance', 'Wakil presiden keuangan'), answer: b('I', 'I') },
              { label: '(a) Securities regulator', given: b('Securities regulator', 'Regulator efek'), answer: b('E', 'E') },
              { label: '(b) Pay raise?', given: b('Can we afford pay raise?', 'Bisa kita naikkan gaji?'), answer: b('I', 'I') },
              { label: '(b) Satisfactory income?', given: b('Did company earn satisfactory income?', 'Apakah perusahaan laba memuaskan?'), answer: b('E', 'E') },
              { label: '(b) Borrow soon?', given: b('Need to borrow near future?', 'Perlu pinjam sebentar lagi?'), answer: b('I', 'I') },
              { label: '(b) Profitability compare?', given: b('Profitability vs other companies?', 'Profitabilitas vs perusahaan lain?'), answer: b('E', 'E') },
              { label: '(b) Cost per unit?', given: b('Cost to manufacture each unit?', 'Biaya memproduksi tiap unit?'), answer: b('I', 'I') },
              { label: '(b) Product emphasis?', given: b('Which product to emphasize?', 'Produk mana ditekankan?'), answer: b('I', 'I') },
              { label: '(b) Short-term debts?', given: b('Able to pay short-term debts?', 'Mampu bayar hutang jangka pendek?'), answer: b('E', 'E') }
            ],
            explanation: b(
              'Internal users: management, employees. External users: investors, creditors, regulators, customers, suppliers. Internal questions: operational decisions. External: investment/credit decisions.',
              'Pengguna internal: manajemen, karyawan. Pengguna eksternal: investor, kreditor, regulator, pelanggan, pemasok. Pertanyaan internal: keputusan operasional. Eksternal: keputusan investasi/kredit.'
            )
          },
          {
            id: 'E1-3',
            title: b('E1-3: Ethics and Historical Cost', 'E1-3: Etika dan Biaya Historis'),
            question: b('Carla Ruden asked to report land at fair value €170,000 vs cost €100,000. Explain ethical situation.', 'Carla Ruden diminta lapor tanah nilai wajar €170.000 vs biaya €100.000. Jelaskan situasi etis.'),
            parts: [
              { label: '', given: b('Stakeholders: investors, creditors, management, Carla', 'Pemangku kepentingan: investor, kreditor, manajemen, Carla'), answer: b('Violates historical cost principle. Alternatives: refuse, report at cost, resign.', 'Melanggar prinsip biaya historis. Alternatif: tolak, laporkan pada biaya, mundur.') }
            ],
            explanation: b(
              'Historical cost principle requires recording at original cost. Reporting at fair value misleads stakeholders. Carla should refuse and report at cost.',
              'Prinsip biaya historis mengharuskan pencatatan pada biaya asal. Pelaporan nilai wajar menyesatkan pemangku kepentingan. Carla harus menolak dan melaporkan pada biaya.'
            )
          },
          {
            id: 'E1-4',
            title: b('E1-4: Accounting Principles Violations', 'E1-4: Pelanggaran Prinsip Akuntansi'),
            question: b('For each situation, state if correct/incorrect and identify principle/assumption.', 'Untuk setiap situasi, nyatakan benar/salah dan identifikasi prinsip/asumsi.'),
            parts: [
              { label: '1', given: b('Julia reports buildings at fair value > cost', 'Julia lapor bangunan nilai wajar > biaya'), answer: b('Incorrect. Violates historical cost principle', 'Salah. Melanggar prinsip biaya historis') },
              { label: '2', given: b('Dekalb records only monetary transactions', 'Dekalb catat hanya transaksi moneter'), answer: b('Correct. Monetary unit assumption', 'Benar. Asumsi unit moneter') },
              { label: '3', given: b('Omar records personal costs as business expenses', 'Omar catat biaya pribadi sebagai beban bisnis'), answer: b('Incorrect. Violates economic entity assumption', 'Salah. Melanggar asumsi entitas ekonomi') }
            ],
            explanation: b(
              'Historical cost: record at acquisition cost. Monetary unit: only monetary transactions. Economic entity: separate business from owner.',
              'Biaya historis: catat pada biaya perolehan. Unit moneter: hanya transaksi moneter. Entitas ekonomi: pisahkan bisnis dari pemilik.'
            )
          },
          {
            id: 'E1-5',
            title: b('E1-5: Classify Statement of Financial Position Items', 'E1-5: Klasifikasi Item Laporan Posisi Keuangan'),
            question: b('Classify each as asset, liability, or equity.', 'Klasifikasikan masing-masing sebagai aset, liabilitas, atau ekuitas.'),
            parts: [
              { label: '', given: b('Accounts payable, Accounts receivable, Cash, Notes payable, Equipment, Salaries payable, Supplies, Share capital', 'Hutang Usaha, Piutang Usaha, Kas, Wesel Bayar, Peralatan, Gaji Bayar, Perlengkapan, Modal Saham'), answer: b(`Assets: Cash, A/R, Supplies, Equipment. Liabilities: A/P, Notes payable, Salaries payable. Equity: Share capital.`, `Aset: Kas, Piutang, Perlengkapan, Peralatan. Liabilitas: Hutang Usaha, Wesel Bayar, Gaji Bayar. Ekuitas: Modal Saham.`) }
            ],
            explanation: b(
              'Assets = resources owned. Liabilities = obligations. Equity = owner\'s claim.',
              'Aset = sumber daya dimiliki. Liabilitas = kewajiban. Ekuitas = hak pemilik.'
            )
          },
          {
            id: 'E1-6',
            title: b('E1-6: Transaction Analysis', 'E1-6: Analisis Transaksi'),
            question: b('List transactions and describe effect on assets, liabilities, equity.', 'Daftar transaksi dan jelaskan efek pada aset, liabilitas, ekuitas.'),
            parts: [
              { label: '1', given: b('Sold shares for cash', 'Jual saham tunai'), answer: b('Assets +, Equity +', 'Aset +, Ekuitas +') },
              { label: '2', given: b('Paid monthly rent', 'Bayar sewa bulanan'), answer: b('Assets -, Equity -', 'Aset -, Ekuitas -') },
              { label: '3', given: b('Purchased equipment on account', 'Beli peralatan kredit'), answer: b('Assets +, Liabilities +', 'Aset +, Liabilitas +') },
              { label: '4', given: b('Billed customers', 'Tagih pelanggan'), answer: b('Assets +, Equity +', 'Aset +, Ekuitas +') },
              { label: '5', given: b('Paid dividends', 'Bayar dividen'), answer: b('Assets -, Equity -', 'Aset -, Ekuitas -') },
              { label: '6', given: b('Received cash from billing', 'Terima tunai dari tagihan'), answer: b('Assets NE (cash +, A/R -)', 'Aset NE (kas +, piutang -)') },
              { label: '7', given: b('Advertising expense on account', 'Beban iklan kredit'), answer: b('Liabilities +, Equity -', 'Liabilitas +, Ekuitas -') },
              { label: '8', given: b('Purchased equipment for cash', 'Beli peralatan tunai'), answer: b('Assets NE (equip +, cash -)', 'Aset NE (peralatan +, kas -)') },
              { label: '9', given: b('Received cash for service', 'Terima tunai jasa'), answer: b('Assets +, Equity +', 'Aset +, Ekuitas +') }
            ],
            explanation: b(
              'Track each transaction through the accounting equation. Revenue increases equity; expenses and dividends decrease equity. Asset exchanges have no net effect on total assets.',
              'Lacak setiap transaksi melalui persamaan akuntansi. Pendapatan naikkan ekuitas; beban dan dividen turunkan ekuitas. Pertukaran aset tidak ada efek bersih pada total aset.'
            )
          }
        ]
      }
    ]
  },
  {
    chapter: 2,
    title: b('Chapter 2: The Recording Process', 'Bab 2: Proses Pencatatan'),
    sections: [
      {
        id: 'brief-exercises',
        title: b('Brief Exercises', 'Latihan Singkat'),
        items: [
          {
            id: 'BE2-1',
            title: b('BE2-1: Debit/Credit Effects and Normal Balances', 'BE2-1: Efek Debit/Kredit dan Saldo Normal'),
            question: b('For each account, indicate: (a) debit effect, (b) credit effect, (c) normal balance.', 'Untuk setiap akun, tunjukkan: (a) efek debit, (b) efek kredit, (c) saldo normal.'),
            parts: [
              { label: '1', given: b('Accounts Payable', 'Hutang Usaha'), answer: b('Dr: decrease; Cr: increase; Normal: Credit', 'Dr: berkurang; Cr: bertambah; Normal: Kredit') },
              { label: '2', given: b('Advertising Expense', 'Beban Iklan'), answer: b('Dr: increase; Cr: decrease; Normal: Debit', 'Dr: bertambah; Cr: berkurang; Normal: Debit') },
              { label: '3', given: b('Service Revenue', 'Pendapatan Jasa'), answer: b('Dr: decrease; Cr: increase; Normal: Credit', 'Dr: berkurang; Cr: bertambah; Normal: Kredit') },
              { label: '4', given: b('Accounts Receivable', 'Piutang Usaha'), answer: b('Dr: increase; Cr: decrease; Normal: Debit', 'Dr: bertambah; Cr: berkurang; Normal: Debit') },
              { label: '5', given: b('Share Capital—Ordinary', 'Modal Saham—Biasa'), answer: b('Dr: decrease; Cr: increase; Normal: Credit', 'Dr: berkurang; Cr: bertambah; Normal: Kredit') },
              { label: '6', given: b('Dividends', 'Dividen'), answer: b('Dr: increase; Cr: decrease; Normal: Debit', 'Dr: bertambah; Cr: berkurang; Normal: Debit') }
            ],
            explanation: b(
              'Assets and expenses: Dr increases, normal debit. Liabilities, equity, revenues: Cr increases, normal credit. Dividends: Dr increases, normal debit (contra equity).',
              'Aset dan beban: Dr menambah, normal debit. Liabilitas, ekuitas, pendapatan: Cr menambah, normal kredit. Dividen: Dr menambah, normal debit (kontra ekuitas).'
            )
          },
          {
            id: 'BE2-2',
            title: b('BE2-2: Identify Accounts to Debit/Credit', 'BE2-2: Identifikasi Akun Debit/Kredit'),
            question: b('Kaustav Sen Company June transactions. Identify accounts to debit and credit.', 'Transaksi Kaustav Sen Company Juni. Identifikasi akun yang didebit dan dikredit.'),
            parts: [
              { label: 'June 1', given: b('Invested €4,000 cash for shares', 'Investasi €4.000 tunai untuk saham'), answer: b('Dr: Cash; Cr: Share Capital', 'Dr: Kas; Cr: Modal Saham') },
              { label: 'June 2', given: b('Purchased equipment €900 on account', 'Beli peralatan €900 kredit'), answer: b('Dr: Equipment; Cr: Accounts Payable', 'Dr: Peralatan; Cr: Hutang Usaha') },
              { label: 'June 3', given: b('Paid €800 cash for rent', 'Bayar €800 tunai sewa'), answer: b('Dr: Rent Expense; Cr: Cash', 'Dr: Beban Sewa; Cr: Kas') },
              { label: 'June 12', given: b('Billed L. Nigh €300 for welding', 'Tagih L. Nigh €300 las'), answer: b('Dr: Accounts Receivable; Cr: Service Revenue', 'Dr: Piutang Usaha; Cr: Pendapatan Jasa') }
            ],
            explanation: b(
              'Apply debit/credit rules. Assets increase with debit. Liabilities/equity/revenues increase with credit. Expenses increase with debit.',
              'Terapkan aturan debit/kredit. Aset bertambah dengan debit. Liabilitas/ekuitas/pendapatan bertambah dengan kredit. Beban bertambah dengan debit.'
            )
          },
          {
            id: 'BE2-3',
            title: b('BE2-3: Journalize Transactions', 'BE2-3: Jurnalkan Transaksi'),
            question: b('Journalize BE2-2 transactions. Omit explanations.', 'Jurnalkan transaksi BE2-2. Abaikan penjelasan.'),
            parts: [
              { label: 'June 1', given: b('Cash 4,000; Share Capital 4,000', 'Kas 4.000; Modal Saham 4.000'), answer: b('Dr Cash 4,000 / Cr Share Capital 4,000', 'Dr Kas 4.000 / Cr Modal Saham 4.000') },
              { label: 'June 2', given: b('Equipment 900; Accounts Payable 900', 'Peralatan 900; Hutang Usaha 900'), answer: b('Dr Equipment 900 / Cr Accounts Payable 900', 'Dr Peralatan 900 / Cr Hutang Usaha 900') },
              { label: 'June 3', given: b('Rent Expense 800; Cash 800', 'Beban Sewa 800; Kas 800'), answer: b('Dr Rent Expense 800 / Cr Cash 800', 'Dr Beban Sewa 800 / Cr Kas 800') },
              { label: 'June 12', given: b('Accounts Receivable 300; Service Revenue 300', 'Piutang Usaha 300; Pendapatan Jasa 300'), answer: b('Dr Accounts Receivable 300 / Cr Service Revenue 300', 'Dr Piutang Usaha 300 / Cr Pendapatan Jasa 300') }
            ],
            explanation: b(
              'Debits on left, credits on right (indented). Debits must equal credits for each entry.',
              'Debit di kiri, kredit di kanan (berindentasi). Debit harus sama dengan kredit untuk setiap entri.'
            )
          }
        ]
      },
      {
        id: 'do-it-exercises',
        title: b('DO IT! Exercises', 'Latihan DO IT!'),
        items: [
          {
            id: 'DOIT2-1',
            title: b('DO IT! 2-1: Statement of Financial Position Accounts', 'DO IT! 2-1: Akun Laporan Posisi Keuangan'),
            question: b('Identify SFP accounts for photography studio corporation. Indicate normal balances.', 'Identifikasi akun LPK untuk studio foto korporasi. Tunjukkan saldo normal.'),
            parts: [
              { label: '', given: b('Typical accounts needed', 'Akun umum yang dibutuhkan'), answer: b('Assets: Cash, A/R, Supplies, Equipment (Dr). Liabilities: A/P, Notes Payable (Cr). Equity: Share Capital, Retained Earnings (Cr).', 'Aset: Kas, Piutang, Perlengkapan, Peralatan (Dr). Liabilitas: Hutang Usaha, Wesel Bayar (Cr). Ekuitas: Modal Saham, Laba Ditahan (Cr).') }
            ],
            explanation: b(
              'A corporation needs asset accounts for resources, liability accounts for obligations, equity accounts for ownership. Normal balances follow account classification.',
              'Korporasi memerlukan akun aset untuk sumber daya, akun liabilitas untuk kewajiban, akun ekuitas untuk kepemilikan. Saldo normal mengikuti klasifikasi akun.'
            )
          },
          {
            id: 'DOIT2-2',
            title: b('DO IT! 2-2: Record Business Activities', 'DO IT! 2-2: Catat Aktivitas Bisnis'),
            question: b('Graham Kahl activities. Identify record form and prepare entries.', 'Aktivitas Graham Kahl. Identifikasi bentuk catatan dan buat entri.'),
            parts: [
              { label: '1', given: b('Deposited £8,000 for shares', 'Setor £8.000 untuk saham'), answer: b('General Journal. Dr Cash 8,000 / Cr Share Capital 8,000', 'Jurnal Umum. Dr Kas 8.000 / Cr Modal Saham 8.000') },
              { label: '2', given: b('Purchased supplies £1,600; paid £400 cash, balance on account', 'Beli perlengkapan £1.600; bayar £400 tunai, sisanya kredit'), answer: b('Dr Supplies 1,600 / Cr Cash 400 / Cr A/P 1,200', 'Dr Perlengkapan 1.600 / Cr Kas 400 / Cr Hutang Usaha 1.200') },
              { label: '3', given: b('Obtained equipment estimates', 'Mendapat estimasi biaya peralatan'), answer: b('No entry — estimates are not transactions', 'Tidak ada entri — estimasi bukan transaksi') }
            ],
            explanation: b(
              'Only record actual transactions. Estimates are not recorded. Compound entries have multiple debits/credits.',
              'Hanya catat transaksi aktual. Estimasi tidak dicatat. Entri majemuk memiliki beberapa debit/kredit.'
            )
          },
          {
            id: 'DOIT2-3',
            title: b('DO IT! 2-3: Post to Cash T-Account', 'DO IT! 2-3: Pos ke Akun T Kas'),
            question: b('Post entries to Cash T-account. Beginning balance £1,600. Find ending balance.', 'Pos entri ke akun T Kas. Saldo awal £1.600. Temukan saldo akhir.'),
            parts: [
              { label: '', given: b('Apr 3: Dr Cash 3,100; Apr 16: Cr Cash 600; Apr 20: Cr Cash 500', 'Apr 3: Dr Kas 3.100; Apr 16: Cr Kas 600; Apr 20: Cr Kas 500'), answer: b('Ending Cash Balance = £3,600', 'Saldo Kas Akhir = £3.600') }
            ],
            explanation: b(
              'T-account: Debits on left, credits on right. Beginning balance + Debits - Credits = Ending balance. 1,600 + 3,100 - 600 - 500 = 3,600.',
              'Akun T: Debit kiri, kredit kanan. Saldo awal + Debit - Kredit = Saldo akhir. 1.600 + 3.100 - 600 - 500 = 3.600.'
            )
          },
          {
            id: 'DOIT2-4',
            title: b('DO IT! 2-4: Trial Balance', 'DO IT! 2-4: Neraca Saldo'),
            question: b('Prepare trial balance from Chillin\' Company ledger accounts.', 'Buat neraca saldo dari akun buku besar Chillin\' Company.'),
            parts: [
              { label: '', given: b('Cash 6,000; A/R 8,000; Supplies 5,000; Equipment 76,000; A/P 9,000; Notes Payable 20,000; Salaries Payable 3,000; Share Capital 25,000; Service Revenue 86,000; Salaries Expense 38,000; Rent Expense 2,000; Dividends 8,000', 'Kas 6.000; Piutang 8.000; Perlengkapan 5.000; Peralatan 76.000; Hutang Usaha 9.000; Wesel Bayar 20.000; Gaji Bayar 3.000; Modal Saham 25.000; Pendapatan Jasa 86.000; Beban Gaji 38.000; Beban Sewa 2.000; Dividen 8.000'), answer: b(`Total Debits = Total Credits = R$135,000`, `Total Debit = Total Kredit = R$135.000`) }
            ],
            explanation: b(
              'List all accounts with balances. Debit balances in debit column, credit balances in credit column. Totals must equal.',
              'Daftar semua akun dengan saldo. Saldo debit di kolom debit, saldo kredit di kolom kredit. Total harus sama.'
            )
          }
        ]
      },
      {
        id: 'exercises',
        title: b('Exercises', 'Latihan'),
        items: [
          {
            id: 'E2-1',
            title: b('E2-1: True/False - Accounts and Recording', 'E2-1: Benar/Salah - Akun dan Pencatatan'),
            question: b('Identify each statement as true or false. Correct false statements.', 'Identifikasi setiap pernyataan benar atau salah. Perbaiki pernyataan salah.'),
            parts: [
              { label: '1', given: b('Account records specific asset OR liability', 'Akun mencatat aset ATAU liabilitas spesifik'), answer: b('False. Account records asset, liability, OR equity', 'Salah. Akun mencatat aset, liabilitas, ATAU ekuitas') },
              { label: '2', given: b('Account shows only increases', 'Akun hanya tunjukkan penambahan'), answer: b('False. Account shows increases AND decreases', 'Salah. Akun tunjukkan penambahan DAN pengurangan') },
              { label: '3', given: b('Cash and A/R combined into one account', 'Kas dan Piutang digabung satu akun'), answer: b('False. Separate accounts for each', 'Salah. Akun terpisah untuk masing-masing') },
              { label: '4', given: b('Left = credit, Right = debit', 'Kiri = kredit, Kanan = debit'), answer: b('False. Left = debit, Right = credit', 'Salah. Kiri = debit, Kanan = kredit') },
              { label: '5', given: b('T-account = title, left side, right side', 'Akun T = judul, sisi kiri, sisi kanan'), answer: b('True', 'Benar') }
            ],
            explanation: b(
              'Accounts track specific items with increases on one side (normal balance) and decreases on the other. Each item has its own account.',
              'Akun melacak item spesifik dengan penambahan di satu sisi (saldo normal) dan pengurangan di sisi lain. Setiap item punya akun sendiri.'
            )
          },
          {
            id: 'E2-2',
            title: b('E2-2: Transaction Analysis Format', 'E2-2: Format Analisis Transaksi'),
            question: b('For each B. Madar SE transaction, indicate: account type, specific account, increase/decrease, normal balance.', 'Untuk tiap transaksi B. Madar SE, tunjukkan: tipe akun, akun spesifik, naik/turun, saldo normal.'),
            parts: [
              { label: 'Jan 2', given: b('Invested €15,000 cash for shares', 'Investasi €15.000 tunai saham'), answer: b('Dr: Asset - Cash - Increase - Debit; Cr: Equity - Share Capital - Increase - Credit', 'Dr: Aset - Kas - Tambah - Debit; Cr: Ekuitas - Modal Saham - Tambah - Kredit') },
              { label: 'Jan 3', given: b('Purchased car €7,000 cash', 'Beli mobil €7.000 tunai'), answer: b('Dr: Asset - Equipment - Increase - Debit; Cr: Asset - Cash - Decrease - Credit', 'Dr: Aset - Peralatan - Tambah - Debit; Cr: Aset - Kas - Kurang - Kredit') },
              { label: 'Jan 9', given: b('Supplies €500 on account', 'Perlengkapan €500 kredit'), answer: b('Dr: Asset - Supplies - Increase - Debit; Cr: Liability - A/P - Increase - Credit', 'Dr: Aset - Perlengkapan - Tambah - Debit; Cr: Liabilitas - Hutang Usaha - Tambah - Kredit') },
              { label: 'Jan 11', given: b('Billed €1,800 services', 'Tagih €1.800 jasa'), answer: b('Dr: Asset - A/R - Increase - Debit; Cr: Revenue - Service Revenue - Increase - Credit', 'Dr: Aset - Piutang - Tambah - Debit; Cr: Pendapatan - Pendapatan Jasa - Tambah - Kredit') },
              { label: 'Jan 16', given: b('Paid €200 advertising', 'Bayar €200 iklan'), answer: b('Dr: Expense - Advertising - Increase - Debit; Cr: Asset - Cash - Decrease - Credit', 'Dr: Beban - Iklan - Tambah - Debit; Cr: Aset - Kas - Kurang - Kredit') },
              { label: 'Jan 20', given: b('Received €700 from Jan 11', 'Terima €700 dari 11 Jan'), answer: b('Dr: Asset - Cash - Increase - Debit; Cr: Asset - A/R - Decrease - Credit', 'Dr: Aset - Kas - Tambah - Debit; Cr: Aset - Piutang - Kurang - Kredit') },
              { label: 'Jan 23', given: b('Paid €300 to creditor', 'Bayar €300 ke kreditor'), answer: b('Dr: Liability - A/P - Decrease - Debit; Cr: Asset - Cash - Decrease - Credit', 'Dr: Liabilitas - Hutang Usaha - Kurang - Debit; Cr: Aset - Kas - Kurang - Kredit') },
              { label: 'Jan 28', given: b('Paid €1,000 dividend', 'Bayar €1.000 dividen'), answer: b('Dr: Equity - Dividends - Increase - Debit; Cr: Asset - Cash - Decrease - Credit', 'Dr: Ekuitas - Dividen - Tambah - Debit; Cr: Aset - Kas - Kurang - Kredit') }
            ],
            explanation: b(
              'Every transaction affects at least two accounts. Debits = Credits. Use the normal balance rules to determine debit/credit.',
              'Setiap transaksi mempengaruhi minimal dua akun. Debit = Kredit. Gunakan aturan saldo normal untuk menentukan debit/kredit.'
            )
          },
          {
            id: 'E2-3',
            title: b('E2-3: Journalize Transactions', 'E2-3: Jurnalkan Transaksi'),
            question: b('Journalize E2-2 transactions using journal page J1. Omit explanations.', 'Jurnalkan transaksi E2-2 menggunakan halaman jurnal J1. Abaikan penjelasan.'),
            parts: [
              { label: '', given: b('Same transactions as E2-2', 'Transaksi sama dengan E2-2'), answer: b('Eight journal entries with proper debits/credits', 'Delapan entri jurnal dengan debit/kredit yang benar') }
            ],
            explanation: b(
              'Journal entries record transactions chronologically. Debits first (left), credits indented (right). Date for each entry.',
              'Entri jurnal mencatat transaksi secara kronologis. Debit dulu (kiri), kredit berindentasi (kanan). Tanggal untuk setiap entri.'
            )
          },
          {
            id: 'E2-9',
            title: b('E2-9: Post and Trial Balance', 'E2-9: Pos dan Neraca Saldo'),
            question: b('Post Roberta Mendez journal entries to T-accounts and prepare trial balance at Aug 31.', 'Pos entri jurnal Roberta Mendez ke akun T dan buat neraca saldo 31 Agu.'),
            parts: [
              { label: '', given: b('Journal entries provided for Aug 1, 10, 12, 25, 31', 'Entri jurnal disediakan untuk 1, 10, 12, 25, 31 Agu'), answer: b('T-accounts posted; Trial balance debits = credits', 'Akun T dipos; Neraca saldo debit = kredit') }
            ],
            explanation: b(
              'Post each journal entry to the appropriate T-account. Then list all account balances in trial balance format.',
              'Pos setiap entri jurnal ke akun T yang sesuai. Kemudian daftarkan semua saldo akun dalam format neraca saldo.'
            )
          }
        ]
      }
    ]
  },
  {
    chapter: 3,
    title: b('Chapter 3: Adjusting the Accounts', 'Bab 3: Menyesuaikan Akun'),
    sections: [
      {
        id: 'brief-exercises',
        title: b('Brief Exercises', 'Latihan Singkat'),
        items: [
          {
            id: 'BE3-1',
            title: b('BE3-1: Adjusting Entry Concepts', 'BE3-1: Konsep Entri Penyesuaian'),
            question: b('Explain why each account in Bacalao Company ledger requires an adjusting entry.', 'Jelaskan mengapa setiap akun di buku besar Bacalao Company memerlukan entri penyesuaian.'),
            parts: [
              { label: '', given: b('Various accounts listed', 'Berbagai akun terdaftar'), answer: b('Adjusting entries ensure revenue recognition and matching principles are followed', 'Entri penyesuaian memastikan prinsip pengakuan pendapatan dan pencocokan diikuti') }
            ],
            explanation: b(
              'Adjusting entries convert cash-basis to accrual-basis. They recognize revenues earned and expenses incurred in the period.',
              'Entri penyesuaian mengubah basis kas ke basis akrual. Mereka mengakui pendapatan yang diperoleh dan beban yang timbul dalam periode.'
            )
          },
          {
            id: 'BE3-3',
            title: b('BE3-3: Supplies Adjustment', 'BE3-3: Penyesuaian Perlengkapan'),
            question: b('Supplies £6,700 in trial balance. Ending supplies £2,500. Journalize adjusting entry.', 'Perlengkapan £6.700 di neraca saldo. Perlengkapan akhir £2.500. Jurnalkan entri penyesuaian.'),
            parts: [
              { label: '', given: b('Beginning supplies £6,700; Ending £2,500', 'Perlengkapan awal £6.700; Akhir £2.500'), answer: b('Dr Supplies Expense 4,200 / Cr Supplies 4,200', 'Dr Beban Perlengkapan 4.200 / Cr Perlengkapan 4.200') }
            ],
            explanation: b(
              'Supplies used = Beginning - Ending = 6,700 - 2,500 = 4,200. Expense increases (debit), asset decreases (credit).',
              'Perlengkapan digunakan = Awal - Akhir = 6.700 - 2.500 = 4.200. Beban bertambah (debit), aset berkurang (kredit).'
            )
          },
          {
            id: 'BE3-4',
            title: b('BE3-4: Depreciation Adjustment', 'BE3-4: Penyesuaian Penyusutan'),
            question: b('Equipment trial balance. Depreciation for year £X. Journalize adjusting entry.', 'Peralatan di neraca saldo. Penyusutan tahunan £X. Jurnalkan entri penyesuaian.'),
            parts: [
              { label: '', given: b('Equipment cost; useful life; depreciation amount', 'Biaya peralatan; umur manfaat; jumlah penyusutan'), answer: b('Dr Depreciation Expense / Cr Accumulated Depreciation', 'Dr Beban Penyusutan / Cr Akumulasi Penyusutan') }
            ],
            explanation: b(
              'Depreciation allocates cost over useful life. Contra asset Accumulated Depreciation is credited (not Equipment directly).',
              'Penyusutan mengalokasikan biaya pada umur manfaat. Kontra aset Akumulasi Penyusutan dikredit (bukan Peralatan langsung).'
            )
          },
          {
            id: 'BE3-5',
            title: b('BE3-5: Prepaid Insurance', 'BE3-5: Asuransi Dibayar di Muka'),
            question: b('July 1: Paid £13,200 for 3-year insurance. Journalize July 1 and Dec 31 adjusting entry.', '1 Jul: Bayar £13.200 asuransi 3 tahun. Jurnalkan 1 Jul dan penyesuaian 31 Des.'),
            parts: [
              { label: 'July 1', given: b('Paid £13,200 cash', 'Bayar £13.200 tunai'), answer: b('Dr Prepaid Insurance 13,200 / Cr Cash 13,200', 'Dr Asuransi Dibayar Di Muka 13.200 / Cr Kas 13.200') },
              { label: 'Dec 31', given: b('6 months expired (Jul-Dec)', '6 bulan habis (Jul-Des)'), answer: b('Dr Insurance Expense 2,200 / Cr Prepaid Insurance 2,200', 'Dr Beban Asuransi 2.200 / Cr Asuransi Dibayar Di Muka 2.200') }
            ],
            explanation: b(
              'Monthly insurance = 13,200 / 36 = 366.67. 6 months = 2,200. Prepaid Insurance is asset; expired portion becomes expense.',
              'Asuransi bulanan = 13.200 / 36 = 366,67. 6 bulan = 2.200. Asuransi Dibayar Di Muka adalah aset; bagian habis jadi beban.'
            )
          },
          {
            id: 'BE3-7',
            title: b('BE3-7: Unearned Revenue Adjustment', 'BE3-7: Penyesuaian Pendapatan Belum Diperoleh'),
            question: b('Prepare adjusting entries for Malboeuf Company situations.', 'Buat entri penyesuaian untuk situasi Perusahaan Malboeuf.'),
            parts: [
              { label: '', given: b('Various unearned revenue situations', 'Berbagai situasi pendapatan belum diperoleh'), answer: b('Dr Unearned Revenue / Cr Service Revenue for amount earned', 'Dr Pendapatan Belum Diperoleh / Cr Pendapatan Jasa untuk jumlah yang diperoleh') }
            ],
            explanation: b(
              'When unearned revenue is earned, debit Unearned Revenue (liability decreases) and credit Service Revenue (revenue increases).',
              'Saat pendapatan belum diperoleh sudah diperoleh, debit Pendapatan Belum Diperoleh (liabilitas berkurang) dan kredit Pendapatan Jasa (pendapatan bertambah).'
            )
          },
          {
            id: 'BE3-9',
            title: b('BE3-9: Financial Statements from Adjusted TB', 'BE3-9: Laporan Keuangan dari TB Disesuaikan'),
            question: b('Prepare income statement and retained earnings from Kwun Company adjusted trial balance.', 'Buat laporan laba rugi dan laba ditahan dari neraca saldo disesuaikan Kwun Company.'),
            parts: [
              { label: '', given: b('Adjusted TB data provided', 'Data TB disesuaikan disediakan'), answer: b('Income Statement: Revenues - Expenses = Net Income. Retained Earnings: Beg RE + NI - Div = End RE', 'Laporan Laba Rugi: Pendapatan - Beban = Laba Bersih. Laba Ditahan: Awal LD + LB - Div = Akhir LD') }
            ],
            explanation: b(
              'Adjusted trial balance has final balances for all accounts. Revenues and expenses go to income statement. Net income flows to retained earnings statement.',
              'Neraca saldo disesuaikan punya saldo final semua akun. Pendapatan dan beban ke laporan laba rugi. Laba bersih mengalir ke laporan laba ditahan.'
            )
          }
        ]
      },
      {
        id: 'do-it-exercises',
        title: b('DO IT! Exercises', 'Latihan DO IT!'),
        items: [
          {
            id: 'DOIT3-1',
            title: b('DO IT! 3-1: Timing Concepts', 'DO IT! 3-1: Konsep Waktu'),
            question: b('Match timing concepts to descriptions.', 'Cocokkan konsep waktu ke deskripsi.'),
            parts: [
              { label: '', given: b('Time period, revenue recognition, matching, accrual vs cash basis', 'Periode waktu, pengakuan pendapatan, pencocokan, akrual vs basis kas'), answer: b('Correct matching of concepts', 'Pencocokan konsep yang benar') }
            ],
            explanation: b(
              'Time period: divide life into periods. Revenue recognition: record when earned. Matching: expenses match revenues. Accrual: record when earned/incurred.',
              'Periode waktu: bagi hayat ke periode. Pengakuan pendapatan: catat saat diperoleh. Pencocokan: beban cocok pendapatan. Akrual: catat saat diperoleh/timbul.'
            )
          },
          {
            id: 'DOIT3-2',
            title: b('DO IT! 3-2: Adjusting Entries for Lafayette', 'DO IT! 3-2: Entri Penyesuaian untuk Lafayette'),
            question: b('Lafayette SA ledger at Mar 31. Prepare adjusting entries.', 'Buku besar Lafayette SA 31 Mar. Buat entri penyesuaian.'),
            parts: [
              { label: '', given: b('Prepaid insurance, supplies, equipment depreciation, unearned revenue, accrued salaries', 'Asuransi dibayar di muka, perlengkapan, penyusutan peralatan, pendapatan blm diperoleh, gaji akrual'), answer: b('Five adjusting entries covering all types', 'Lima entri penyesuaian mencakup semua jenis') }
            ],
            explanation: b(
              'Deferrals: prepaid expenses, unearned revenues. Accruals: accrued expenses, accrued revenues. Depreciation: allocate asset cost.',
              'Penundaan: beban dibayar di muka, pendapatan blm diperoleh. Akrual: beban akrual, pendapatan akrual. Penyusutan: alokasikan biaya aset.'
            )
          },
          {
            id: 'DOIT3-3',
            title: b('DO IT! 3-3: Pegasus Computer Services', 'DO IT! 3-3: Pegasus Computer Services'),
            question: b('Pegasus began July 2017. Prepare adjusting entries at Dec 31.', 'Pegasus mulai Jul 2017. Buat entri penyesuaian 31 Des.'),
            parts: [
              { label: '', given: b('Various accounts and adjustment data', 'Berbagai akun dan data penyesuaian'), answer: b('Complete set of adjusting entries', 'Serangkaian lengkap entri penyesuaian') }
            ],
            explanation: b(
              'Apply all four types of adjustments: prepaid expenses, unearned revenues, accrued expenses, accrued revenues.',
              'Terapkan keempat jenis penyesuaian: beban dibayar di muka, pendapatan blm diperoleh, beban akrual, pendapatan akrual.'
            )
          },
          {
            id: 'DOIT3-4',
            title: b('DO IT! 3-4: Natal Co. Quarterly Adjustments', 'DO IT! 3-4: Penyesuaian Triwulanan Natal Co.'),
            question: b('Natal organized Apr 1, 2017. Prepares quarterly statements. Prepare adjusting entries.', 'Natal didirikan 1 Apr 2017. Menyiapkan laporan triwulanan. Buat entri penyesuaian.'),
            parts: [
              { label: '', given: b('Quarterly adjustment data', 'Data penyesuaian triwulanan'), answer: b('Adjusting entries for quarter', 'Entri penyesuaian untuk triwulan') }
            ],
            explanation: b(
              'Quarterly adjustments same as annual but for 3-month period. Accruals and deferrals recognized for the quarter.',
              'Penyesuaian triwulanan sama dengan tahunan tapi untuk periode 3 bulan. Akrual dan penundaan diakui untuk triwulan.'
            )
          }
        ]
      },
      {
        id: 'exercises',
        title: b('Exercises', 'Latihan'),
        items: [
          {
            id: 'E3-5',
            title: b('E3-5: Hwang Ltd. Adjusting Entries', 'E3-5: Entri Penyesuaian Hwang Ltd.'),
            question: b('Hwang Ltd. Dec 31 balances. Prepare adjusting entries for each situation.', 'Saldo Hwang Ltd. 31 Des. Buat entri penyesuaian untuk setiap situasi.'),
            parts: [
              { label: '', given: b('Supplies, insurance, depreciation, unearned rent, accrued salaries, accrued interest', 'Perlengkapan, asuransi, penyusutan, sewa blm diperoleh, gaji akrual, bunga akrual'), answer: b('Six adjusting entries', 'Enam entri penyesuaian') }
            ],
            explanation: b(
              'Identify each adjustment type. Calculate amounts. Debit expense/asset, credit liability/asset accordingly.',
              'Identifikasi tiap jenis penyesuaian. Hitung jumlah. Debit beban/aset, kredit liabilitas/aset sesuai.'
            )
          },
          {
            id: 'E3-6',
            title: b('E3-6: Orwell Company Adjustment Data', 'E3-6: Data Penyesuaian Orwell Company'),
            question: b('Orwell accumulates adjustment data at Dec 31. Journalize adjusting entries.', 'Orwell kumpulkan data penyesuaian 31 Des. Jurnalkan entri penyesuaian.'),
            parts: [
              { label: '', given: b('Various adjustments listed', 'Berbagai penyesuaian terdaftar'), answer: b('Journal entries for each adjustment', 'Entri jurnal untuk setiap penyesuaian') }
            ],
            explanation: b(
              'Each adjustment requires a separate entry. Ensure debits = credits. Use proper account titles.',
              'Setiap penyesuaian memerlukan entri terpisah. Pastikan debit = kredit. Gunakan judul akun yang tepat.'
            )
          },
          {
            id: 'E3-9',
            title: b('E3-9: Yazici Advertising Worksheet', 'E3-9: Kertas Kerja Yazici Advertising'),
            question: b('Yazici trial balance (Illustration 3-3). Complete worksheet and prepare financial statements.', 'Neraca saldo Yazici (Ilustrasi 3-3). Lengkapi kertas kerja dan buat laporan keuangan.'),
            parts: [
              { label: '', given: b('Unadjusted TB + adjustment data', 'TB tidak disesuaikan + data penyesuaian'), answer: b('Completed worksheet with IS, FP, RE columns', 'Kertas kerja lengkap kolom LR, LPK, LD') }
            ],
            explanation: b(
              'Worksheet steps: (1) unadjusted TB, (2) adjustments, (3) adjusted TB, (4) extend to IS/FP, (5) total, compute NI.',
              'Langkah kertas kerja: (1) TB tdk disesuaikan, (2) penyesuaian, (3) TB disesuaikan, (4) extend ke LR/LPK, (5) total, hitung LB.'
            )
          }
        ]
      }
    ]
  },
  {
    chapter: 4,
    title: b('Chapter 4: Completing the Accounting Cycle', 'Bab 4: Menyelesaikan Siklus Akuntansi'),
    sections: [
      {
        id: 'brief-exercises',
        title: b('Brief Exercises', 'Latihan Singkat'),
        items: [
          {
            id: 'BE4-1',
            title: b('BE4-1: Temporary vs Permanent Accounts', 'BE4-1: Akun Sementara vs Permanen'),
            question: b('Identify each account as temporary (T) or permanent (P).', 'Identifikasi setiap akun sebagai sementara (S) atau permanen (P).'),
            parts: [
              { label: '', given: b('Service Revenue, Salaries Expense, Dividends, Cash, A/R, Equipment, A/P, Share Capital, Retained Earnings', 'Pendapatan Jasa, Beban Gaji, Dividen, Kas, Piutang, Peralatan, Hutang Usaha, Modal Saham, Laba Ditahan'), answer: b(`Temporary: Service Revenue, Salaries Expense, Dividends. Permanent: Cash, A/R, Equipment, A/P, Share Capital, Retained Earnings.`, `Sementara: Pendapatan Jasa, Beban Gaji, Dividen. Permanen: Kas, Piutang, Peralatan, Hutang Usaha, Modal Saham, Laba Ditahan.`) }
            ],
            explanation: b(
              'Temporary (nominal): revenues, expenses, dividends — closed each period. Permanent (real): all SFP accounts — balances carried forward.',
              'Sementara (nominal): pendapatan, beban, dividen — ditutup tiap periode. Permanen (real): semua akun LPK — saldo dibawa ke depan.'
            )
          },
          {
            id: 'BE4-4',
            title: b('BE4-4: Closing Entries', 'BE4-4: Entri Penutupan'),
            question: b('Prepare the four closing entries from adjusted trial balance.', 'Buat empat entri penutupan dari neraca saldo disesuaikan.'),
            parts: [
              { label: '1', given: b('Close revenues to Income Summary', 'Tutup pendapatan ke Ikhtisar Laba Rugi'), answer: b('Dr Revenue accounts / Cr Income Summary (total revenues)', 'Dr Akun Pendapatan / Cr Ikhtisar Laba Rugi (total pendapatan)') },
              { label: '2', given: b('Close expenses to Income Summary', 'Tutup beban ke Ikhtisar Laba Rugi'), answer: b('Dr Income Summary (total expenses) / Cr Expense accounts', 'Dr Ikhtisar Laba Rugi (total beban) / Cr Akun Beban') },
              { label: '3', given: b('Close Income Summary to Retained Earnings', 'Tutup Ikhtisar Laba Rugi ke Laba Ditahan'), answer: b('Dr Income Summary (net income) / Cr Retained Earnings', 'Dr Ikhtisar Laba Rugi (laba bersih) / Cr Laba Ditahan') },
              { label: '4', given: b('Close Dividends to Retained Earnings', 'Tutup Dividen ke Laba Ditahan'), answer: b('Dr Retained Earnings / Cr Dividends', 'Dr Laba Ditahan / Cr Dividen') }
            ],
            explanation: b(
              'Four closing entries zero out temporary accounts. Net income/loss determined in Income Summary. Dividends closed directly to RE (not through IS).',
              'Empat entri penutupan mengosongkan akun sementara. Laba/rugi bersih ditentukan di Ikhtisar Laba Rugi. Dividen ditutup langsung ke LD (bukan lewat IS).'
            )
          },
          {
            id: 'BE4-11',
            title: b('BE4-11: Classified Statement of Financial Position', 'BE4-11: Laporan Posisi Keuangan Terklasifikasi'),
            question: b('Match accounts to SFP classifications.', 'Cocokkan akun ke klasifikasi LPK.'),
            parts: [
              { label: '', given: b('Salaries payable, Investment in real estate, Service revenue, Equipment, Interest payable, Accumulated depreciation, Goodwill, Short-term investments, Depreciation expense, Mortgage payable, Share capital, Unearned revenue', 'Gaji bayar, Investasi real estat, Pendapatan jasa, Peralatan, Bunga bayar, Akumulasi penyusutan, Goodwill, Investasi jangka pendek, Beban penyusutan, Hipotek bayar, Modal saham, Pendapatan blm diperoleh'), answer: b(`CL: Salaries payable, Interest payable, Unearned revenue. NCL: Mortgage payable. CA: Short-term investments. PPE: Equipment, Accumulated depreciation. IA: Goodwill. LTI: Real estate. E: Share capital. NA: Service revenue, Depreciation expense.`, `KL: Gaji bayar, Bunga bayar, Pendapatan blm diperoleh. KLJ: Hipotek bayar. AL: Investasi jk pendek. APT: Peralatan, Akum penyusutan. TT: Goodwill. IPJ: Real estat. E: Modal saham. NA: Pendapatan jasa, Beban penyusutan.`) }
            ],
            explanation: b(
              'Classified SFP: Current Assets, Long-term Investments, PPE, Intangibles. Current Liabilities, Non-current Liabilities. Equity. Revenue/expense = NA.',
              'LPK Terklasifikasi: Aset Lancar, Investasi Jangka Panjang, APT, Tak Berwujud. Liabilitas Lancar, Liabilitas Jangka Panjang. Ekuitas. Pendapatan/beban = NA.'
            )
          }
        ]
      },
      {
        id: 'do-it-exercises',
        title: b('DO IT! Exercises', 'Latihan DO IT!'),
        items: [
          {
            id: 'DOIT4-1',
            title: b('DO IT! 4-1: Closing Entries', 'DO IT! 4-1: Entri Penutupan'),
            question: b('Prepare closing entries for given accounts.', 'Buat entri penutupan untuk akun yang diberikan.'),
            parts: [
              { label: '', given: b('Revenue and expense account balances', 'Saldo akun pendapatan dan beban'), answer: b('Four closing entries per standard process', 'Empat entri penutupan per proses standar') }
            ],
            explanation: b(
              'Close revenues to IS, expenses to IS, IS to RE, dividends to RE. Post to ledger. Prepare post-closing TB.',
              'Tutup pendapatan ke IS, beban ke IS, IS ke LD, dividen ke LD. Pos ke buku besar. Buat neraca saldo pasca tutup.'
            )
          },
          {
            id: 'DOIT4-4',
            title: b('DO IT! 4-4: Reversing Entries', 'DO IT! 4-4: Entri Pembalikan'),
            question: b('Dec 31 adjusting entry: Salaries Payable €2,000. Jan 1 reversing entry. Jan 8 paid €3,400. Show entries.', 'Entri penyesuaian 31 Des: Hutang Gaji €2.000. Entri pembalikan 1 Jan. 8 Jan bayar €3.400. Tunjukkan entri.'),
            parts: [
              { label: 'Dec 31', given: b('Adjusting entry', 'Entri penyesuaian'), answer: b('Dr Salaries Expense 2,000 / Cr Salaries Payable 2,000', 'Dr Beban Gaji 2.000 / Cr Hutang Gaji 2.000') },
              { label: 'Jan 1', given: b('Reversing entry', 'Entri pembalikan'), answer: b('Dr Salaries Payable 2,000 / Cr Salaries Expense 2,000', 'Dr Hutang Gaji 2.000 / Cr Beban Gaji 2.000') },
              { label: 'Jan 8', given: b('Paid €3,400 salaries', 'Bayar €3.400 gaji'), answer: b('Dr Salaries Expense 3,400 / Cr Cash 3,400', 'Dr Beban Gaji 3.400 / Cr Kas 3.400') }
            ],
            explanation: b(
              'Reversing entry is exact opposite of adjusting entry. Simplifies subsequent payment — entire payment debited to expense.',
              'Entri pembalikan adalah kebalikan tepat dari entri penyesuaian. Mempermudah pembayaran berikutnya — seluruh pembayaran didebit ke beban.'
            )
          }
        ]
      },
      {
        id: 'exercises',
        title: b('Exercises', 'Latihan'),
        items: [
          {
            id: 'E4-1',
            title: b('E4-1: Worksheet Completion', 'E4-1: Penyelesaian Kertas Kerja'),
            question: b('Complete worksheet for given company.', 'Lengkapi kertas kerja untuk perusahaan yang diberikan.'),
            parts: [
              { label: '', given: b('Unadjusted TB and adjustments', 'TB tdk disesuaikan dan penyesuaian'), answer: b('Completed worksheet', 'Kertas kerja lengkap') }
            ],
            explanation: b(
              'Worksheet is optional but useful. Columns: Unadjusted TB, Adjustments, Adjusted TB, IS, FP. Net income = IS Cr - IS Dr.',
              'Kertas kerja opsional tapi berguna. Kolom: TB Tdk Disesuaikan, Penyesuaian, TB Disesuaikan, LR, LPK. Laba Bersih = LR Kr - LR Dr.'
            )
          }
        ]
      }
    ]
  },
  {
    chapter: 5,
    title: b('Chapter 5: Accounting for Merchandising Operations', 'Bab 5: Akuntansi untuk Operasi Perdagangan'),
    sections: [
      {
        id: 'do-it-exercises',
        title: b('DO IT! Exercises', 'Latihan DO IT!'),
        items: [
          {
            id: 'DOIT5-1',
            title: b('DO IT! 5-1: Merchandising Operations and Inventory Systems', 'DO IT! 5-1: Operasi Perdagangan dan Sistem Persediaan'),
            question: b(
              'Indicate whether each statement is true or false.',
              'Tentukan apakah setiap pernyataan berikut benar atau salah.'
            ),
            parts: [
              {
                label: '1',
                given: b(
                  'The primary source of revenue for a merchandising company results from performing services for customers.',
                  'Sumber pendapatan utama perusahaan dagang berasal dari pemberian jasa kepada pelanggan.'
                ),
                answer: b(
                  'False. That is the primary source of revenue for a service company; a merchandiser earns revenue from selling merchandise.',
                  'Salah. Itu sumber pendapatan utama perusahaan jasa; perusahaan dagang memperoleh pendapatan dari penjualan barang.'
                )
              },
              {
                label: '2',
                given: b(
                  'The operating cycle of a service company is usually shorter than that of a merchandising company.',
                  'Siklus operasi perusahaan jasa biasanya lebih pendek daripada perusahaan dagang.'
                ),
                answer: b(
                  'True. Buying and selling inventory lengthens the merchandiser’s cycle.',
                  'Benar. Membeli dan menjual persediaan memanjangkan siklus perusahaan dagang.'
                )
              },
              {
                label: '3',
                given: b(
                  'Sales revenue less cost of goods sold equals gross profit.',
                  'Pendapatan penjualan dikurangi harga pokok penjualan sama dengan laba bruto.'
                ),
                answer: b('True.', 'Benar.')
              },
              {
                label: '4',
                given: b(
                  'Ending inventory plus the cost of goods purchased equals cost of goods available for sale.',
                  'Persediaan akhir ditambah biaya barang yang dibeli sama dengan biaya barang tersedia untuk dijual.'
                ),
                answer: b(
                  'False. Beginning inventory (not ending inventory) plus cost of goods purchased equals cost of goods available for sale.',
                  'Salah. Persediaan awal (bukan persediaan akhir) ditambah biaya barang yang dibeli sama dengan biaya barang tersedia untuk dijual.'
                )
              }
            ],
            explanation: b(
              'A merchandiser earns sales revenue and has two expense categories: cost of goods sold and operating expenses. Gross profit is sales revenue minus cost of goods sold. Cost of goods available for sale = beginning inventory + cost of goods purchased; the goods not sold become ending inventory.',
              'Perusahaan dagang memperoleh pendapatan penjualan dan memiliki dua kategori beban: harga pokok penjualan dan beban operasi. Laba bruto adalah pendapatan penjualan dikurangi harga pokok penjualan. Biaya barang tersedia untuk dijual = persediaan awal + biaya barang dibeli; barang yang tidak terjual menjadi persediaan akhir.'
            )
          },
          {
            id: 'DOIT5-2',
            title: b('DO IT! 5-2: Purchase Transactions', 'DO IT! 5-2: Transaksi Pembelian'),
            question: b(
              'On September 5, Zhu Company buys merchandise on account from Gao Company. The selling price of the goods is ¥15,000, and the cost to Gao Company was ¥8,000. On September 8, Zhu returns defective goods with a selling price of ¥2,000. Record the transactions on the books of Zhu Company.',
              'Pada 5 September, Perusahaan Zhu membeli barang secara kredit dari Perusahaan Gao. Harga jual barang ¥15.000, dan biaya bagi Perusahaan Gao ¥8.000. Pada 8 September, Zhu mengembalikan barang cacat dengan harga jual ¥2.000. Catat transaksi tersebut pada buku Perusahaan Zhu.'
            ),
            parts: [
              {
                label: '',
                given: b(
                  'Buyer’s books: purchase ¥15,000 on account, then return ¥2,000 of defective goods.',
                  'Buku pembeli: pembelian kredit ¥15.000, lalu retur barang cacat ¥2.000.'
                ),
                answer: b(
                  'Sept. 5: Inventory 15,000 / Accounts Payable 15,000. Sept. 8: Accounts Payable 2,000 / Inventory 2,000.',
                  '5 Sept: Persediaan 15.000 / Utang Usaha 15.000. 8 Sept: Utang Usaha 2.000 / Persediaan 2.000.'
                ),
                blocks: [
                  {
                    type: 'table',
                    caption: b('Zhu Company — buyer’s journal', 'Perusahaan Zhu — jurnal pembeli'),
                    head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
                    align: ['left', 'left', 'right', 'right'],
                    rows: [
                      ['Sept. 5', b('Inventory', 'Persediaan'), '15,000', ''],
                      ['', b('Accounts Payable', 'Utang Usaha'), '', '15,000'],
                      ['', b('(To record goods purchased on account)', '(Mencatat pembelian barang secara kredit)'), '', ''],
                      ['Sept. 8', b('Accounts Payable', 'Utang Usaha'), '2,000', ''],
                      ['', b('Inventory', 'Persediaan'), '', '2,000'],
                      ['', b('(To record return of defective goods)', '(Mencatat retur barang cacat)'), '', ''],
                    ]
                  },
                  {
                    type: 'callout',
                    title: b('Why ¥8,000 does not appear', 'Mengapa ¥8.000 tidak muncul'),
                    text: b(
                      'The buyer records goods at cost to the buyer — the ¥15,000 invoice price. Gao Company’s ¥8,000 cost is relevant only on the seller’s books.',
                      'Pembeli mencatat barang sebesar biaya bagi pembeli — harga faktur ¥15.000. Biaya ¥8.000 Perusahaan Gao hanya relevan pada buku penjual.'
                    ),
                    tone: 'tip'
                  }
                ]
              }
            ],
            explanation: b(
              'Under a perpetual system the buyer debits Inventory, not Purchases. Returning goods reduces the asset: debit Accounts Payable and credit Inventory. The seller’s cost is not recorded by the buyer.',
              'Dalam sistem perpetual pembeli mendebit Persediaan, bukan akun Pembelian. Retur barang mengurangi aset: debit Utang Usaha dan kredit Persediaan. Biaya penjual tidak dicatat oleh pembeli.'
            )
          },
          {
            id: 'DOIT5-3',
            title: b('DO IT! 5-3: Sales Transactions', 'DO IT! 5-3: Transaksi Penjualan'),
            question: b(
              'On September 5, Zhu Company buys merchandise on account from Gao Company. The selling price of the goods is ¥15,000, and the cost to Gao Company was ¥8,000. On September 8, Zhu returns defective goods with a selling price of ¥2,000 and a fair value of ¥300. Record the transactions on the books of Gao Company.',
              'Pada 5 September, Perusahaan Zhu membeli barang secara kredit dari Perusahaan Gao. Harga jual barang ¥15.000, dan biaya bagi Perusahaan Gao ¥8.000. Pada 8 September, Zhu mengembalikan barang cacat dengan harga jual ¥2.000 dan nilai wajar ¥300. Catat transaksi tersebut pada buku Perusahaan Gao.'
            ),
            parts: [
              {
                label: '',
                given: b(
                  'Seller’s books: credit sale ¥15,000, cost ¥8,000; return of defective goods, selling price ¥2,000, fair value ¥300.',
                  'Buku penjual: penjualan kredit ¥15.000, biaya ¥8.000; retur barang cacat, harga jual ¥2.000, nilai wajar ¥300.'
                ),
                answer: b(
                  'Sept. 5: A/R 15,000 / Sales Revenue 15,000; COGS 8,000 / Inventory 8,000. Sept. 8: Sales Returns and Allowances 2,000 / A/R 2,000; Inventory 300 / COGS 300.',
                  '5 Sept: Piutang Usaha 15.000 / Pendapatan Penjualan 15.000; HPP 8.000 / Persediaan 8.000. 8 Sept: Retur dan Potongan Penjualan 2.000 / Piutang Usaha 2.000; Persediaan 300 / HPP 300.'
                ),
                blocks: [
                  {
                    type: 'table',
                    caption: b('Gao Company — seller’s journal', 'Perusahaan Gao — jurnal penjual'),
                    head: [b('Date', 'Tanggal'), b('Account', 'Akun'), b('Debit', 'Debit'), b('Credit', 'Kredit')],
                    align: ['left', 'left', 'right', 'right'],
                    rows: [
                      ['Sept. 5', b('Accounts Receivable', 'Piutang Usaha'), '15,000', ''],
                      ['', b('Sales Revenue', 'Pendapatan Penjualan'), '', '15,000'],
                      ['', b('(To record credit sale)', '(Mencatat penjualan kredit)'), '', ''],
                      ['Sept. 5', b('Cost of Goods Sold', 'Harga Pokok Penjualan'), '8,000', ''],
                      ['', b('Inventory', 'Persediaan'), '', '8,000'],
                      ['', b('(To record cost of goods sold)', '(Mencatat harga pokok penjualan)'), '', ''],
                      ['Sept. 8', b('Sales Returns and Allowances', 'Retur dan Potongan Penjualan'), '2,000', ''],
                      ['', b('Accounts Receivable', 'Piutang Usaha'), '', '2,000'],
                      ['', b('(To record credit granted for returned goods)', '(Mencatat kredit atas barang retur)'), '', ''],
                      ['Sept. 8', b('Inventory', 'Persediaan'), '300', ''],
                      ['', b('Cost of Goods Sold', 'Harga Pokok Penjualan'), '', '300'],
                      ['', b('(To record fair value of defective goods returned)', '(Mencatat nilai wajar barang cacat yang diretur)'), '', ''],
                    ]
                  },
                  {
                    type: 'callout',
                    title: b('Fair value, not cost', 'Nilai wajar, bukan biaya'),
                    text: b(
                      'Goods returned in good condition go back to Inventory at cost. Defective goods are recorded at fair value — here ¥300, not the ¥8,000 original cost — and Cost of Goods Sold is reduced by the same amount.',
                      'Barang retur dalam kondisi baik kembali ke Persediaan sebesar biaya. Barang cacat dicatat sebesar nilai wajar — di sini ¥300, bukan biaya awal ¥8.000 — dan Harga Pokok Penjualan dikurangi dengan jumlah yang sama.'
                    ),
                    tone: 'note'
                  }
                ]
              }
            ],
            explanation: b(
              'Every sale needs two entries: the selling price (debit Accounts Receivable or Cash, credit Sales Revenue) and the cost (debit Cost of Goods Sold, credit Inventory). Returns are recorded in the contra revenue account Sales Returns and Allowances at selling price, while Inventory and Cost of Goods Sold are adjusted at cost — or at fair value if the goods are defective.',
              'Setiap penjualan memerlukan dua ayat: harga jual (debit Piutang Usaha atau Kas, kredit Pendapatan Penjualan) dan biaya (debit Harga Pokok Penjualan, kredit Persediaan). Retur dicatat pada akun kontra pendapatan Retur dan Potongan Penjualan sebesar harga jual, sementara Persediaan dan Harga Pokok Penjualan disesuaikan sebesar biaya — atau nilai wajar bila barang cacat.'
            )
          }
        ]
      }
    ]
  }
];

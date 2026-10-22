# Akuntansi Dasar — Kieso IFRS

Situs rangkuman bilingual (Indonesia–Inggris) untuk 200 halaman pertama
**Kieso, Weygandt & Kimmel — _Financial Accounting: IFRS_, 3rd Edition**.
Materi mencakup _front matter_ dan Bab 1–4 (halaman buku 1–183), ditambah
tabel saldo normal, alur siklus akuntansi, glosarium, dan pencarian cepat.

## Fitur

- **Bilingual tanpa pindah halaman** — tombol ID/EN di kanan atas; pilihan bahasa
  disimpan di `localStorage`.
- **Rangkuman empat bab** — penjelasan terstruktur, tabel, jurnal, laporan
  keuangan, istilah kunci, dan uji cepat.
- **Tabel saldo normal** — 59 akun dengan klasifikasi, laporan keuangan, saldo
  normal, pencarian, dan filter.
- **Alur akuntansi** — sembilan langkah siklus plus studi kasus Yazici Advertising
  dari jurnal penyesuaian sampai neraca saldo setelah penutupan.
- **Glosarium** — 55 istilah dengan definisi dua bahasa dan filter bab.
- **Pencarian global** — `Ctrl + K` (atau tombol Cari) untuk mencari bab, akun,
  langkah siklus, dan istilah.
- **Mode gelap**, navigasi mobile, serta tautan halaman yang dapat dibagikan.

## Teknologi

- [Astro](https://astro.build/) 6 (output statis)
- TypeScript
- CSS kustom, tanpa framework UI
- Font Fraunces + Inter dari Google Fonts

## Menjalankan secara lokal

Prasyarat: Node.js **22.12.0** atau lebih baru (Astro 6).

```bash
npm install
npm run dev        # http://localhost:4321
```

Perintah lain:

```bash
npm run check      # type-check Astro + TypeScript
npm run build      # hasil statis di dist/
npm run preview    # pratinjau hasil build
```

## Struktur

```text
src/
  components/      Topbar, drawer, pencarian, tabel jurnal, dll.
  data/            Konten bab, akun, siklus, glosarium, dan teks UI
  layouts/         Shell HTML, tema, bahasa, aksesibilitas
  pages/           Beranda, rangkuman, saldo normal, siklus, glosarium
  styles/          Design system dan aturan responsif
public/            Favicon
```

Materi bab disimpan sebagai data TypeScript di `src/data/ch1.ts`–`ch4.ts`.
Setiap string bilingual memakai bentuk `b('English', 'Bahasa Indonesia')`.

## Rute

| Rute | Isi |
| --- | --- |
| `/` | Beranda dan silabus |
| `/rangkuman` | Indeks seluruh bab |
| `/rangkuman/1`–`/rangkuman/4` | Rangkuman per bab |
| `/saldo-normal` | Tabel saldo normal 59 akun |
| `/alur-akuntansi` | Sembilan langkah siklus + studi kasus Yazici |
| `/glosarium` | 55 istilah kunci |
| `/search-index.json` | Indeks pencarian statis |

## Deployment

Situs sepenuhnya statis. Di Vercel, impor repositori ini sebagai proyek baru:
framework terdeteksi otomatis sebagai **Astro**, build command `npm run build`,
output directory `dist`. Tidak diperlukan environment variable.

Untuk hosting statis lain, unggah isi folder `dist/` setelah `npm run build`.
Jika domain produksi berbeda dari `https://akuntansi-dasar.vercel.app`, perbarui
nilai `site` di `astro.config.mjs` agar canonical dan metadata URL sesuai.

## Sumber dan batasan

Sumber konten adalah 200 halaman PDF pertama buku Kieso (front matter dan Bab
1–4). Situs ini adalah pendamping belajar, bukan pengganti buku aslinya. PDF
sumber tidak disertakan dalam repositori ini.

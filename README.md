# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

# Portfolio Juara

Ringkasan singkat repository ini — website portofolio personal berbasis
Vite + React + TypeScript dengan komponen dari shadcn-ui dan Tailwind CSS.

## Isi penting
- Sumber frontend: `src/`
- Assets publik (favicon, gambar statis): `public/`

## Menjalankan secara lokal
1. Install dependency:

```bash
npm install
```

2. Jalankan development server:

```bash
npm run dev
```

3. Buka di browser: http://localhost:5173 (atau alamat yang ditampilkan oleh Vite)

## Skrip tersedia
- `npm run dev` — jalankan dev server
- `npm run build` — build produksi
- `npm run preview` — preview hasil build

## Assets & favicon
- Favicon proyek sudah di-set di `index.html` ke `/image.png`.
- Letakkan gambar proyek di `public/images/projects/` dan gunakan path absolut
	(mis. `/images/projects/nama-file.png`) pada `src/data/projects.ts`.

Jika gambar tidak tampil, cek:
- Pastikan file ada di `public/images/projects/`
- Pastikan `media.src` dimulai dengan `/images/...` atau path relatif yang benar

## Catatan pengembangan
- `src/data/projects.ts` berisi data proyek termasuk entri `media`.
- `src/pages/ProjectDetail.tsx` sekarang merender gambar untuk media tipe
	`image` dan menormalisasi `src` dengan menambahkan leading slash jika perlu.

## Kontribusi
Silakan buka issue atau buat PR jika ingin menambah proyek, memperbaiki teks,
atau menambahkan asset.

---

Jika mau, saya bisa tambahkan panduan deploy (Vercel/Netlify) atau file `manifest.json` untuk PWA.
- Vite

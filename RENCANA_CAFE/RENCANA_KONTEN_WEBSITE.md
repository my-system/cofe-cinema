# Rencana Pengembangan Website: Waroeng Kopi Sedap
**Konsep:** *Hybrid Sinematik — Arsitektur Ruang, Menu Pilihan, & Pengalaman Kunjungan*

---

## 1. Identitas & Visi Brand
* **Nama Brand:** Waroeng Kopi Sedap
* **Tagline:** *"Ruang Teduh & Cita Rasa Kopi Sinematik"* *(A Sanctuary of Artisanal Coffee & Contemporary Spaces)*
* **Karakter Visual:** Ruko tropis minimalis kontemporer, perpaduan beton abu-abu ekspos yang tenang, kehangatan kayu jati alami, pencahayaan temaram hangat (2700K), serta rimbun tanaman tropis.
* **Gaya Tipografi:** Modern Clean Sans-Serif (**Plus Jakarta Sans**), rapi, proporsional, dan nyaman dibaca.

---

## 2. Struktur Konten Halaman Utama (`index.html`)

### ① Header & Navigasi
* **Logo:** Kaligrafi modern *WAROENG KOPI SEDAP*.
* **Menu Tautan:**
  * `Beranda` (`/`)
  * `Ruang & Suasana` (`/projects`)
  * `Cerita Kami` (`/about`)
  * `Kunjungan & Kontak` (`/contact`)
* **Elemen Interaktif:**
  * Penunjuk waktu lokal aktual (`WIB`).
  * *Ambient Sound Toggle* (audio uap kopi & suasana santai).
  * Tombol CTA: **“Reservasi / Kunjungan”** (membuka popup formulir atau WhatsApp).

### ② Hero Section (Opening Sinematik)
* **Visual:** Video loop latar belakang sinematik suasana *golden hour* ruko kafe.
* **Teks Utama (H1):** *“Ruang Teduh & Cita Rasa Kopi Sinematik”*
* **Sub-headline:** *“Sebuah ruang temu kontemporer yang memadukan kehangatan kayu, ketenangan beton ekspos, dan seduhan kopi pilihan nusantara.”*
* **Aksi:** Tombol interaktif *“Jelajahi Ruang & Rasa”* (Scroll to explore).

### ③ The Manifesto / Filosofi Ruang
* **Gambar Pendukung:** Sudut Kopi & Cerita dengan neon hangat.
* **Headline:**  
  > *“Kami merancang bukan sekadar tempat minum kopi, melainkan ruang jeda di tengah riuhnya waktu.”*
* **Deskripsi:**  
  Menceritakan filosofi Waroeng Kopi Sedap yang mempertemukan keahlian sangrai biji lokal dengan desain arsitektur yang jujur. Ruang yang dirancang untuk mengistirahatkan pikiran, membaca buku, berdiskusi, hingga menikmati waktu yang melambat.

### ④ Showcase: 6 Zona Ruang Kafe (*The Spaces*)
Menggunakan kartu video interaktif (*scrub on scroll*):
1. **Fasad Utama (Golden Hour)** — Sambutan kanopi seng teduh dan papan nama kayu hangat.
2. **Ruang Utama (Indoor)** — Kesejukan meja kayu panjang untuk bekerja dan berbincang santai.
3. **Bar Seduh Terbuka** — Barista beraksi meracik espresso dan seduh manual V60.
4. **Sudut Cerita & Diskusi** — Dinding bata merah, kursi rotan, dan pendar neon hangat.
5. **Teras Teduh (Semi-Outdoor)** — Hembusan angin sore di bawah naungan tanaman rimbun.
6. **Suasana Malam (Warm Glow)** — Gemerlap lampu gantung hangat untuk momen santai sepulang kerja.

### ⑤ Koleksi Menu & Seduhan Andalan (*Signature Menu*)
1. **Signature Sedap Palm Latte** (Gambar #1):  
   *Es kopi susu gula aren dengan 3 layer gradasi estetik, susu creamy, dan espresso beraroma karamel kayu manis.*
2. **Manual Brew V60 Single Origin** (Gambar #2):  
   *Seduhan biji kopi Nusantara pilihan (Gayo / Toraja / Flores) dengan karakter rasa buah dan aroma bunga yang bersih.*
3. **Artisanal Pastry & Warm Bites**:  
   *French butter croissant renyah berlapis, sourdough toast, dan pisang karamel wijen.*
4. **Artisan Tea & Refreshment**:  
   *Cascara Berry Fizz, Cokelat Murni Tabanan, dan Teh Kamomil hangat.*

### ⑥ Tiga Pilar Standar Kualitas (*Craft & Quality Tabs*)
* **1.0 Kurasi Biji Pilihan** — *Direct trade* bersama petani kopi Indonesia dengan pemanggangan profil *medium-light*.
* **2.0 Presisi Penyeduhan** — Parameter suhu presisi, air terfiltrasi mineral seimbang, dan rasio gramatur terukur.
* **3.0 Arsitektur Ketenangan** — Pencahayaan 2700K temaram, colokan di tiap meja, kursi ergonomis, dan musik santai.

### ⑦ Informasi Kunjungan & Footer
* **Jam Buka:**
  * Senin – Jumat: 08:00 – 22:00 WIB
  * Sabtu – Minggu: 07:00 – 23:00 WIB
* **Fasilitas:** Wi-Fi Cepat, Stopkontak, Indoor AC & Outdoor Area, Mushola, Parkir.
* **Aksi Cepat:** Tombol *“Buka di Google Maps”* dan *“Pesan Meja via WhatsApp”*.

---

## 3. Rencana Halaman Pendukung (Sub-Pages)

| Halaman | Tujuan & Konten Utama |
|---|---|
| [`about.html`](../about.html) | **Cerita Lengkap:** Sejarah brand, filosofi desain ruang ruko, dan komitmen keberlanjutan bersama petani kopi lokal. |
| [`projects.html`](../projects.html) | **Katalog Ruang & Menu Penuh:** Tampilan menyeluruh sudut-sudut kafe serta menu minuman & makanan lengkap beserta harga. |
| [`contact.html`](../contact.html) | **Reservasi & Lokasi:** Formulir pemesanan meja / ruang privat / acara komunitas, peta interaktif, dan panduan parkir. |

---

## 4. Daftar Aset Lengkap dalam Folder Ini (`/gambar/`)

Folder `RENCANA_CAFE/gambar/` dan folder web `public/assets/` kini berisi seluruh aset visual:

### ☕ A. Menu & Minuman:
1. `01_signature_sedap_palm_latte.jpg` — Foto hero Es Kopi Susu Gula Aren dengan 3 layer gradasi estetik.
2. `02_manual_brew_v60.jpg` — Foto seduhan manual V60 dalam server kaca beruap & cangkir tembikar.
3. `menu_03_butter_croissant.jpg` — Foto French butter croissant keemasan renyah & whipped butter.
4. `menu_04_cascara_fizz.jpg` — Foto mocktail Cascara Berry Fizz dengan irisan jeruk & rosemary.
5. `menu_cascara_fizz.mp4` — **Video sinematik:** Gelembung soda naik & embun dingin pada gelas Cascara Fizz.

### 🏛️ B. Pilar Kerajinan & Suasana:
6. `craft_01_biji_kopi.jpg` — Macro shot biji kopi sangrai specialty di atas sendok kayu & karung goni.
7. `craft_02_espresso.jpg` — Foto ekstraksi espresso kental dengan crema harimau dari bottomless portafilter.
8. `craft_espresso_pour.mp4` — **Video sinematik:** Aliran kental espresso keemasan beruap ke dalam gelas kaca.
9. `craft_03_cappuccino_jendela.jpg` — Foto secangkir cappuccino latte art di samping jendela & buku terbuka.
10. `11_sketsa_cafe.jpg` — Sketsa arsitektur pensil/tinta fasad ruko Waroeng Kopi Sedap (4:3).
11. `18_quote_bg.jpg` — Foto sudut fasad ruko & papan nama bercahaya dengan latar langit sunset jingga lembut.
12. `19_footer.jpg` — Foto tanaman hijau gantung yang rimbun di depan kisi-kisi kayu vertikal bercahaya malam.

### 🌿 C. Sudut Ruang Kafe (Foto & Video):
13. `03_fasad_utama_golden_hour.jpg` + video `01_fasad_sore.mp4` — Fasad Utama (Golden Hour).
14. `04_area_bar_seduh.jpg` + video `04_area_bar.mp4` — Area Barista & Mesin Espresso.
15. `05_spot_kopi_dan_cerita.jpg` + video `05_spot_foto.mp4` — Sudut Kopi & Cerita (Neon & Kursi Rotan).
16. Tambahan video: `03_interior_dolly.mp4`, `06_tampak_malam.mp4`, `09_area_outdoor.mp4`.

---

## 5. Prompt Cadangan untuk Tambahan Gambar (Bisa Dipakai di AI Lain)

**Akhiran Gaya Konsisten (Gunakan di akhir setiap prompt):**
```text
cinematic 3D render, Pixar-quality realistic materials, warm palette (wood brown, concrete grey, cream, leaf green, gold accents), soft global illumination, shallow depth of field, highly detailed, no people, 16:9 aspect ratio
```

* **Prompt Pastry (Butter Croissant):**
  > `Cinematic 3D render, close-up eye-level 16:9 hero food shot of a golden-brown French butter croissant with flaky crisp honeycomb layers on a minimalist matte ceramic plate, scattered crumbs, small ramekin of whipped butter, smooth light oak wood table, empty cozy cafe bokeh background with grey concrete wall and green monstera plant, golden hour lighting, no people, 16:9 aspect ratio.`

* **Prompt Mocktail Kopi Segar (Cascara Berry Fizz):**
  > `Cinematic 3D render, close-up 16:9 hero shot of an iced sparkling artisan coffee mocktail in a sleek highball glass, translucent ruby-amber liquid with bubbles and crystal ice cubes, dehydrated citrus wheel and rosemary garnish, condensation drops, light oak wood table, warm sunset lighting, soft cafe bokeh background, no people, 16:9 aspect ratio.`

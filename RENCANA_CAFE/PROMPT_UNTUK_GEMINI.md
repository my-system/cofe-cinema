# Prompt untuk Gemini — Lanjutan Generate Gambar Waroeng Kopi Sedap

## A. PROMPT PEMBUKA (kirim pertama kali, bersama file RENCANA + 5 gambar)

```text
Kamu adalah 3D visual artist untuk website kafe "Waroeng Kopi Sedap".

Saya lampirkan:
1. RENCANA_KONTEN_WEBSITE.md — rencana konten website.
2. 5 gambar acuan gaya (palm latte, manual brew V60, fasad golden hour, area bar, spot neon "Kopi & Cerita").

Tugasmu: buat gambar-gambar lanjutan yang GAYANYA SAMA PERSIS dengan 5 gambar acuan:
- Render 3D sinematik, material realistis kualitas Pixar
- Palet hangat: coklat kayu, abu-abu beton, krem, hijau daun, aksen emas
- Cahaya sore golden hour dari samping, pencahayaan lembut (global illumination)
- Meja kayu oak terang, latar interior kafe blur (bokeh): dinding beton ekspos, lampu gantung hangat 2700K, tanaman tropis
- Depth of field dangkal, sangat detail
- Rasio 16:9, TANPA ORANG, TANPA TEKS/WATERMARK (kecuali disebutkan)

Buat SATU gambar per balasan. Setelah tiap gambar, tulis singkat: nomor, nama file yang disarankan, dan bagian website tempat gambar dipakai. Lalu tunggu perintah "lanjut".

Mulai dari Gambar #3.
```

---

## B. DAFTAR GAMBAR (kirim satu per satu jika Gemini meminta / untuk mengulang)

### #3 — Butter Croissant (Menu)
File: `menu_03_butter_croissant.jpg` · Dipakai: Kartu Menu #3
```text
Gambar #3: Close-up eye-level hero shot of a golden-brown French butter croissant with crisp flaky honeycomb layers and buttery sheen, on a handcrafted matte speckled stoneware plate, a few crumbs scattered, small ceramic ramekin of whipped butter with a wooden spreader, folded linen napkin, light oak table. Same style as reference images, 16:9, no people.
```

### #4 — Cascara Berry Fizz (Menu)
File: `menu_04_cascara_fizz.jpg` · Dipakai: Kartu Menu #4
```text
Gambar #4: Close-up hero shot of a sparkling coffee-cherry mocktail "Cascara Berry Fizz" in a tall ribbed highball glass, translucent ruby-amber liquid with fine bubbles, crystal clear ice, dehydrated orange wheel and fresh rosemary sprig, condensation drops, backlit by golden hour sun casting a glowing ruby shadow on the light oak table. Same style as reference images, 16:9, no people.
```

### #5 — Biji Kopi Sangrai (Tab 1.0 Kurasi Biji)
File: `craft_01_biji_kopi.jpg`
```text
Gambar #5: Macro shot of glossy medium-roast specialty coffee beans overflowing from a small wooden scoop onto a small burlap sack, on a light oak table, extremely sharp bean texture, warm golden hour side light, cafe bokeh background. Same style as reference images, 16:9, no people.
```

### #6 — Ekstraksi Espresso (Tab 2.0 Presisi Seduh)
File: `craft_02_espresso.jpg`
```text
Gambar #6: Extreme close-up of a thick golden-brown espresso stream with tiger-striped crema flowing from a bottomless portafilter into a small clear glass cup, under the red espresso machine from the reference bar image, soft steam, warm light. Same style as reference images, 16:9, no people, no hands.
```

### #7 — Cappuccino di Dekat Jendela (Tab 3.0 Ketenangan Ruang)
File: `craft_03_cappuccino_jendela.jpg`
```text
Gambar #7: A cappuccino with a beautiful rosetta latte art in a cream ceramic cup on a wooden table beside a window with vertical wooden slats, soft leaf shadows falling across the table, an open book next to the cup, calm late-afternoon atmosphere. Same style as reference images, 16:9, no people.
```

### #8 — Sketsa Arsitektur Fasad (Section Sketsa)
File: `11_sketsa_cafe.jpg` · Rasio 4:3
```text
Gambar #8: Black pencil line architectural sketch of the Waroeng Kopi Sedap shophouse front facade (same building as the golden hour reference: zinc canopy, wooden signboard, glass front, vertical wood slats), perspective view, clean hand-drawn lines on plain cream paper, no color, no shading fill, 4:3 ratio, no people.
```

### #9 — Background Quote (Section Kutipan)
File: `18_quote_bg.jpg`
```text
Gambar #9: Low-angle shot of the cafe's concrete facade corner and glowing wooden signboard "WAROENG KOPI SEDAP" against a warm orange-pink sunset sky, large empty sky area on the right side for text overlay. Same style as reference images, 16:9, no people.
```

### #10 — Gambar Atas Footer
File: `19_footer.jpg`
```text
Gambar #10: Close-up of lush hanging green vines in front of vertical light wood slat panels, warm evening light glowing between the slats, calm and minimal. Same style as reference images, 16:9, no people.
```

---

## C. TIPS
- Jika hasil melenceng gaya, balas: **"Ulangi, samakan pencahayaan, warna, dan meja kayu dengan gambar palm latte acuan."**
- Jika muncul orang/tangan/teks aneh, balas: **"Ulangi tanpa orang, tanpa tangan, tanpa teks."**
- Simpan hasil ke folder `RENCANA_CAFE/gambar/` dengan nama file yang disarankan, lalu kirim ke saya untuk dipasang di website.

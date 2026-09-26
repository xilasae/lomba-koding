import { Task, Project } from './types';

export const ALL_DIDEROT_TASKS: Task[] = [
  {
    "id": "ISSUE-L1-AST-01",
    "projectId": "diderot-master",
    "title": "Membuat sprite karakter Sundar berdiri diam (idle 4 arah)",
    "description": "Kategori: Karakter Pixel Art\nDeskripsi: Membuat gambar sprite karakter utama (Sundar) dalam posisi berdiri diam menghadap ke 4 arah mata angin (depan/bawah, belakang/atas, kiri, dan kanan). Sundar berpenampilan santai dengan jaket hoodie abu-abu, celana gelap, dan rambut acak-acakan.\nSpesifikasi Output:\n- sundar_idle_down.png (menghadap ke bawah/depan)\n- sundar_idle_up.png (menghadap ke atas/belakang)\n- sundar_idle_left.png (menghadap ke kiri)\n- sundar_idle_right.png (menghadap ke kanan)\n- Resolusi: 16x24 piksel per arah, format PNG transparan\nDefinisi Selesai (DoD):\n- Bounding box pas 16x24 piksel tanpa sisa ruang kosong tidak simetris\n- Menggunakan palet 8 warna konsisten\n- Menghadap kiri dan kanan memiliki siluet proporsional\n\nSpesifikasi Output Fisik:\n• 4 file PNG (16x24 px, transparan)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Karakter",
      "Pixel Art"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 1
  },
  {
    "id": "ISSUE-L1-AST-02",
    "projectId": "diderot-master",
    "title": "Membuat animasi berjalan karakter Sundar (walk cycle 4 arah)",
    "description": "Kategori: Animasi Pixel Art\nDeskripsi: Membuat animasi langkah kaki berjalan untuk karakter Sundar di keempat arah (bawah, atas, kiri, kanan) saat digerakkan pemain di dalam kamar.\nSpesifikasi Output:\n- sundar_walk_down.png (2 frame loop gerak bawah)\n- sundar_walk_up.png (2 frame loop gerak atas)\n- sundar_walk_left.png (2 frame loop gerak kiri)\n- sundar_walk_right.png (2 frame loop gerak kanan)\n- Resolusi: 16x24 piksel per frame, format PNG transparan\nDefinisi Selesai (DoD):\n- Gerakan langkah kaki terlihat natural pada kecepatan 6-12 FPS\n- Tidak ada lonjakan piksel (jitter) pada bagian kepala saat berjalan\n\nSpesifikasi Output Fisik:\n• 8 frame PNG atau 1 spritesheet animasi (16x24 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Animasi",
      "Karakter",
      "Pixel Art"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 2
  },
  {
    "id": "ISSUE-L1-AST-03",
    "projectId": "diderot-master",
    "title": "Membuat background asset kos melati tier 1",
    "description": "Kategori: Latar Lingkungan (Background)\nDeskripsi: Menggambar latar ruangan kamar kos awal Sundar bernuansa sempit dan sederhana dengan lantai semen abu-abu kusam, dinding semen berdebu, ventilasi jendela kecil, dan garis pintu keluar.\nSpesifikasi Output:\n- bg_room_kos_tier1.png\n- Resolusi: 384x216 piksel (aspek rasio 16:9 native)\n- Format: PNG non-transparan\nDefinisi Selesai (DoD):\n- Mengikuti sistem petak (grid) modular 16x16 piksel\n- Warna lantai dan dinding tidak bertabrakan dengan karakter maupun perabot kamar\n\nSpesifikasi Output Fisik:\n• bg_room_kos_tier1.png (384x216 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Background",
      "Kamar Kos"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 3
  },
  {
    "id": "ISSUE-L1-AST-04",
    "projectId": "diderot-master",
    "title": "Membuat wallpaper desktop sistem operasi SundarOS",
    "description": "Kategori: Antarmuka Lingkungan Kerja\nDeskripsi: Menggambar layar monitor desktop SundarOS dengan warna flat abu-abu kebiruan gelap, bilah taskbar bawah setinggi 24 piksel, jam digital di sudut kanan, dan ikon pintasan aplikasi VibeCode.\nSpesifikasi Output:\n- bg_desktop_sundaros.png\n- Resolusi: 384x216 piksel\n- Format: PNG\nDefinisi Selesai (DoD):\n- Area taskbar bawah bersih untuk peletakan indikator bug dan stamina\n- Ikon VibeCode di desktop terlihat kontras dan mudah dikenali\n\nSpesifikasi Output Fisik:\n• bg_desktop_sundaros.png (384x216 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Aset Visual",
      "UI/UX",
      "SundarOS"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 4
  },
  {
    "id": "ISSUE-L1-AST-05",
    "projectId": "diderot-master",
    "title": "Membuat tampilan jendela text editor aplikasi VibeCode",
    "description": "Kategori: Antarmuka Kerja Koding\nDeskripsi: Mendesain bingkai jendela program koding VibeCode.exe berisi area teks instruksi tiket, kode program pura-pura, dan panel bawah untuk 3 tombol aksi prompting.\nSpesifikasi Output:\n- bg_vibeCode_window.png\n- Resolusi: 320x180 piksel\n- Format: PNG dengan sudut jendela transparan\nDefinisi Selesai (DoD):\n- Ruang teks kode cukup menampung 8-10 baris font piksel 8x8\n- Desain konsisten dengan estetika IDE pemrograman retro modern\n\nSpesifikasi Output Fisik:\n• bg_vibeCode_window.png (320x180 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "UI/UX",
      "VibeCode",
      "Minigame"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 5
  },
  {
    "id": "ISSUE-L1-AST-06",
    "projectId": "diderot-master",
    "title": "Membuat sprite meja kayu bekas kosan tier 1",
    "description": "Kategori: Perabot Kamar (Props)\nDeskripsi: Menggambar meja belajar kayu bekas pakai dengan permukaan mengelupas dan serat kayu cokelat kusam tempat menaruh monitor komputer.\nSpesifikasi Output:\n- desk_wood_tier1.png\n- Resolusi: 32x24 piksel\n- Format: PNG transparan\nDefinisi Selesai (DoD):\n- Titik tumpu kaki meja tepat untuk kedalaman render (Y-sorting)\n- Pas untuk diletakkan monitor CRT di atasnya tanpa melayang\n\nSpesifikasi Output Fisik:\n• desk_wood_tier1.png (32x24 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Perabot",
      "Kamar Kos"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 6
  },
  {
    "id": "ISSUE-L1-AST-07",
    "projectId": "diderot-master",
    "title": "Membuat sprite kursi plastik merah bakso tier 1",
    "description": "Kategori: Perabot Kamar (Props)\nDeskripsi: Menggambar kursi plastik bundar warna merah khas warung bakso tempat duduk darurat Sundar saat koding di kamar kos.\nSpesifikasi Output:\n- chair_plastic_tier1.png\n- Resolusi: 16x16 piksel\n- Format: PNG transparan\nDefinisi Selesai (DoD):\n- Proporsional dengan tinggi meja kayu tier 1\n- Memiliki lubang bundar khas di tengah kursi\n\nSpesifikasi Output Fisik:\n• chair_plastic_tier1.png (16x16 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Perabot",
      "Kamar Kos"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 7
  },
  {
    "id": "ISSUE-L1-AST-08",
    "projectId": "diderot-master",
    "title": "Membuat sprite monitor tabung CRT 17 inch tier 1",
    "description": "Kategori: Perabot Elektronik (Props)\nDeskripsi: Menggambar monitor komputer tabung jadul berwarna putih gading kusam dengan kaca cembung kehijauan.\nSpesifikasi Output:\n- monitor_crt_tier1.png\n- Resolusi: 24x16 piksel\n- Format: PNG transparan\nDefinisi Selesai (DoD):\n- Tampilan kaca monitor memiliki kilau refleksi piksel sederhana\n- Posisi tepat diletakkan di atas meja kayu tier 1\n\nSpesifikasi Output Fisik:\n• monitor_crt_tier1.png (24x16 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Elektronik",
      "Kamar Kos"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 8
  },
  {
    "id": "ISSUE-L1-AST-09",
    "projectId": "diderot-master",
    "title": "Membuat sprite kasur busa tipis lantai kamar kos",
    "description": "Kategori: Perabot Kamar (Props)\nDeskripsi: Menggambar kasur busa tipis di lantai tanpa dipan dengan sprei polos kusut tempat Sundar tidur memulihkan stamina.\nSpesifikasi Output:\n- bed_kos.png\n- Resolusi: 32x24 piksel\n- Format: PNG transparan\nDefinisi Selesai (DoD):\n- Terdapat bantal tipis di ujung atas kasur\n- Ukuran kasur proporsional saat karakter Sundar berbaring di atasnya\n\nSpesifikasi Output Fisik:\n• bed_kos.png (32x24 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Perabot",
      "Kamar Kos"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 9
  },
  {
    "id": "ISSUE-L1-AST-10",
    "projectId": "diderot-master",
    "title": "Membuat sprite pintu kamar kos tertutup",
    "description": "Kategori: Props Ruangan\nDeskripsi: Menggambar daun pintu kayu kamar kos tertutup rapat lengkap dengan gagang pintu bulat kuningan.\nSpesifikasi Output:\n- door_closed.png\n- Resolusi: 24x32 piksel\n- Format: PNG transparan\nDefinisi Selesai (DoD):\n- Posisi menempel pada dinding selatan kamar kos\n- Garis tepi jelas menunjukkan batas pintu yang bisa diketuk kurir\n\nSpesifikasi Output Fisik:\n• door_closed.png (24x32 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Props",
      "Kamar Kos"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 10
  },
  {
    "id": "ISSUE-L1-AST-11",
    "projectId": "diderot-master",
    "title": "Membuat sprite tanaman kaktus Spike kondisi sehat di pot",
    "description": "Kategori: Props Cerita Lingkungan\nDeskripsi: Menggambar pot tanaman kecil kaktus milik Sundar bernama Spike dengan warna hijau segar dan duri-duri kecil rapi.\nSpesifikasi Output:\n- cactus_spike_healthy.png\n- Resolusi: 8x12 piksel\n- Format: PNG transparan\nDefinisi Selesai (DoD):\n- Kaktus tampak segar dengan warna pot tanah liat terakota\n- Dapat diletakkan di sudut meja atau lantai\n\nSpesifikasi Output Fisik:\n• cactus_spike_healthy.png (8x12 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Props",
      "Storytelling"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 11
  },
  {
    "id": "ISSUE-L1-AST-12",
    "projectId": "diderot-master",
    "title": "Mendesain antarmuka HUD bar status atas layar",
    "description": "Kategori: Antarmuka UI\nDeskripsi: Membuat bilah status atas (HUD) semi-transparan yang menampilkan informasi saldo kas Sundar, tanggal hari kalender, dan indikator persentase bug sistem.\nSpesifikasi Output:\n- ui_hud_bar.png (384x40 px)\n- icon_cash.png, icon_calendar.png, icon_stress.png (masing-masing 12x12 px)\n- Format: PNG transparan\nDefinisi Selesai (DoD):\n- Angka dan teks font piksel terbaca jernih di atas latar belakang apapun\n- Tata letak rapi dan tidak menghalangi area pergerakan karakter\n\nSpesifikasi Output Fisik:\n• ui_hud_bar.png & 3 ikon PNG (384x40 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "UI/UX",
      "HUD",
      "Interface"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 12
  },
  {
    "id": "ISSUE-L1-AST-13",
    "projectId": "diderot-master",
    "title": "Membuat set 3 tombol aksi koding VibeCode (3 state visual)",
    "description": "Kategori: Desain Tombol UI\nDeskripsi: Membuat gambar 3 tombol aksi pada antarmuka VibeCode:\n1. Tombol Merah [1] BLIND ACCEPT\n2. Tombol Kuning [2] VIBE & VERIFY\n3. Tombol Hijau [3] MANUAL REFACTOR\nMasing-masing tombol memiliki 3 wujud: Normal, Disorot (Hover), dan Ditekan (Pressed).\nSpesifikasi Output:\n- btn_blind_accept.png, btn_vibe_verify.png, btn_manual_refactor.png\n- Resolusi: 120x32 piksel per tombol\n- Format: PNG transparan\nDefinisi Selesai (DoD):\n- Wujud hover dan pressed memiliki kontras bayangan yang jelas terasa ditekan\n- Teks tombol terbaca tajam\n\nSpesifikasi Output Fisik:\n• 3 file sprite tombol PNG (3 status visual, 120x32 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "UI/UX",
      "Tombol",
      "VibeCode"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 13
  },
  {
    "id": "ISSUE-L1-AST-14",
    "projectId": "diderot-master",
    "title": "Membuat kotak dialog monolog batin Sundar",
    "description": "Kategori: Antarmuka Percakapan\nDeskripsi: Membuat kotak teks dialog semi-transparan bergaya retro untuk menampilkan monolog batin Sundar saat bereaksi terhadap barang baru atau situasi lelah.\nSpesifikasi Output:\n- dialog_box.png\n- Resolusi: 320x80 piksel\n- Format: PNG transparan 9-slice / bordered\nDefinisi Selesai (DoD):\n- Bingkai bergaris tegas 1 piksel\n- Ruang teks leluasa untuk 3 baris kalimat font 8x8\n\nSpesifikasi Output Fisik:\n• dialog_box.png (320x80 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "UI/UX",
      "Dialog",
      "Interface"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 14
  },
  {
    "id": "ISSUE-L1-AST-15",
    "projectId": "diderot-master",
    "title": "Memproduksi audio sfx langkah kaki di lantai semen",
    "description": "Kategori: Efek Suara (SFX)\nDeskripsi: Merekam atau menyintesis suara derap langkah kaki pelan memakai sandal jepit atau telanjang kaki di atas lantai semen kamar kos.\nSpesifikasi Output:\n- sfx_step_concrete.wav\n- Format: WAV mono (22.050 Hz, 16-bit, durasi 0.3 detik)\nDefinisi Selesai (DoD):\n- Bersih tanpa dengung latar belakang\n- Tidak memicu bunyi klik mendadak saat diputar berulang-ulang\n\nSpesifikasi Output Fisik:\n• sfx_step_concrete.wav (WAV mono, 16-bit)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Audio",
      "SFX",
      "Langkah"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 15
  },
  {
    "id": "ISSUE-L1-AST-16",
    "projectId": "diderot-master",
    "title": "Memproduksi audio sfx denting kasir uang masuk",
    "description": "Kategori: Efek Suara (SFX)\nDeskripsi: Memproduksi efek suara gemerincing koin atau denting mesin kasir elektronik memuaskan saat tiket kerja koding berhasil dibayar.\nSpesifikasi Output:\n- sfx_cash_register.wav\n- Format: WAV mono (22.050 Hz, 16-bit, durasi 0.8 detik)\nDefinisi Selesai (DoD):\n- Nada cerah dan memuaskan telinga (satisfying game audio juice)\n- Volume dinormalisasi pada -3 dBFS\n\nSpesifikasi Output Fisik:\n• sfx_cash_register.wav (WAV mono, 16-bit)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Audio",
      "SFX",
      "Reward"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 16
  },
  {
    "id": "ISSUE-L1-AST-17",
    "projectId": "diderot-master",
    "title": "Memproduksi audio sfx ketukan tombol keyboard mekanikal",
    "description": "Kategori: Efek Suara (SFX)\nDeskripsi: Memproduksi suara ketukan tombol tuts keyboard mekanik (blue switch click) saat pemain menekan tombol aksi koding VibeCode.\nSpesifikasi Output:\n- sfx_keyboard_click.wav\n- Format: WAV mono (22.050 Hz, 16-bit, durasi 0.2 detik)\nDefinisi Selesai (DoD):\n- Respon suara renyah dan instan tanpa jeda hening di awal berkas\n\nSpesifikasi Output Fisik:\n• sfx_keyboard_click.wav (WAV mono, 16-bit)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Audio",
      "SFX",
      "Keyboard"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 17
  },
  {
    "id": "ISSUE-L1-AST-18",
    "projectId": "diderot-master",
    "title": "Membuat musik latar BGM damai kamar kosan awal",
    "description": "Kategori: Musik Latar (BGM)\nDeskripsi: Menggubah lagu instrumen lo-fi chiptune santai bernuansa hangat, damai, dan sederhana menggambarkan hari-hari awal Sundar yang belum tercemar gaya hidup konsumtif.\nSpesifikasi Output:\n- bgm_kos_peaceful.mp3\n- Format: MP3 stereo (44.100 Hz, 128 kbps, durasi ~2 menit perulangan)\nDefinisi Selesai (DoD):\n- Perulangan (seamless loop) mengalir mulus tanpa patahan\n- Nada instrumen lembut tidak memekakkan telinga saat dimainkan berulang\n\nSpesifikasi Output Fisik:\n• bgm_kos_peaceful.mp3 (Stereo 128kbps, loop 2 min)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Audio",
      "BGM",
      "Musik"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 18
  },
  {
    "id": "ISSUE-L1-AST-19",
    "projectId": "diderot-master",
    "title": "Menulis naskah teks 3 tiket kerja awal VibeCode",
    "description": "Kategori: Penulisan Narasi\nDeskripsi: Menulis deskripsi dan instruksi 3 masalah koding realistis anak startup:\n1. Tiket #01: Timeout pada sistem pembayaran (Payment Gateway Timeout)\n2. Tiket #02: Perbaikan endpoint API login pengguna (Fix Login API Endpoint)\n3. Tiket #03: Ketidakrapian tombol CSS antarmuka (Button CSS Misalignment)\nSpesifikasi Output:\n- tickets_act1.txt (maksimal 40 karakter per baris agar rapi di layar)\nDefinisi Selesai (DoD):\n- Menggunakan istilah IT kasual yang otentik dan mudah dipahami\n- Panjang teks pas dalam area display editor VibeCode\n\nSpesifikasi Output Fisik:\n• tickets_act1.txt (UTF-8, naskah 3 tiket)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Narasi",
      "Naskah",
      "VibeCode"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 19
  },
  {
    "id": "ISSUE-L1-AST-20",
    "projectId": "diderot-master",
    "title": "Menulis naskah catatan diary Sundar hari ke-1 dan ke-30",
    "description": "Kategori: Penulisan Narasi\nDeskripsi: Menulis entri diary pribadi Sundar di laptop:\n- Hari ke-1: Semangat idealisme koding murni dan tekad menulis software bersih.\n- Hari ke-30: Kebingungan saat saldo rekening tiba-tiba tembus puluhan juta berkat AI.\nSpesifikasi Output:\n- diary_day_1_30.txt\nDefinisi Selesai (DoD):\n- Gaya bahasa personal anak muda Indonesia ('gw', 'lu', 'gokil')\n- Membangun kontras psikologis karakter Sundar\n\nSpesifikasi Output Fisik:\n• diary_day_1_30.txt (UTF-8)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Narasi",
      "Diary",
      "Storytelling"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 20
  },
  {
    "id": "ISSUE-L1-AST-21",
    "projectId": "diderot-master",
    "title": "Menulis naskah epilog kegagalan kebangkrutan Ending A",
    "description": "Kategori: Penulisan Ending\nDeskripsi: Menulis teks cutscene narasi Ending A saat aplikasi roboh total karena bug mencapai 100% atau pemain gagal membayar sewa kosan.\nSpesifikasi Output:\n- ending_a_script.txt\nDefinisi Selesai (DoD):\n- Menjelaskan nasib Sundar yang diusir dari kosan dan akun developer diblokir\n- Menyertakan kalimat penutup reflektif tentang bahaya jalan pintas kode\n\nSpesifikasi Output Fisik:\n• ending_a_script.txt (UTF-8)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Narasi",
      "Ending",
      "Game Over"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 21
  },
  {
    "id": "ISSUE-L1-ENG-01",
    "projectId": "diderot-master",
    "title": "Memprogram kontrol gerak Sundar 4 arah dan tombol sprint",
    "description": "Kategori: Pemrograman Gameplay 2D\nDeskripsi: Mengimplementasikan pembacaan tombol keyboard WASD dan tombol Panah untuk menggerakkan karakter Sundar. Kecepatan jalan normal 80 px/detik dan sprint Shift 130 px/detik.\nSpesifikasi Output:\n- Modul skrip ControllerPlayer.ts\nDefinisi Selesai (DoD):\n- Gerakan diagonal dinormalisasi (dikalikan 0.7071) agar tidak melaju lebih kencang\n- Arah hadap karakter berganti sesuai arah tombol yang ditekan\n\nSpesifikasi Output Fisik:\n• Skrip ControllerPlayer.ts",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Karakter",
      "Kontrol"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 22
  },
  {
    "id": "ISSUE-L1-ENG-02",
    "projectId": "diderot-master",
    "title": "Memprogram sistem hitbox kolisi dan kedalaman visual Y-sorting",
    "description": "Kategori: Pemrograman Fisika & Grafis\nDeskripsi: Memasang kotak tabrakan (AABB bounding box) 16x8 piksel pada telapak kaki Sundar agar tidak bisa menembus tembok atau perabot, serta mengurutkan urutan render (Z-index) berdasarkan koordinat Y.\nSpesifikasi Output:\n- Modul skrip CollisionAndDepthSystem.ts\nDefinisi Selesai (DoD):\n- Sundar berada di belakang meja saat berada di utara meja, dan di depan meja saat di selatan meja\n- Tidak ada tembus dinding atau perabot\n\nSpesifikasi Output Fisik:\n• Skrip CollisionAndDepthSystem.ts",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Kolisi",
      "Y-Sorting"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 23
  },
  {
    "id": "ISSUE-L1-ENG-03",
    "projectId": "diderot-master",
    "title": "Memprogram transisi dual-mode kamar kos dan SundarOS",
    "description": "Kategori: Arsitektur Game State Machine\nDeskripsi: Mengatur sistem transisi layar: saat Sundar mendekati meja dan menekan tombol E, layar beralih ke antarmuka laptop SundarOS (kontrol jalan terkunci). Menekan tombol Esc menutup laptop dan kembali berjalan di kamar.\nSpesifikasi Output:\n- Modul skrip GameStateMachine.ts\nDefinisi Selesai (DoD):\n- Transisi mulus tanpa jeda lag\n- Input pergerakan karakter dinonaktifkan sepenuhnya saat berada di SundarOS\n\nSpesifikasi Output Fisik:\n• Skrip GameStateMachine.ts",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Pemrograman",
      "FSM",
      "State"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 24
  },
  {
    "id": "ISSUE-L1-ENG-04",
    "projectId": "diderot-master",
    "title": "Memprogram kalkulasi tiket koding VibeCode uang dan bug",
    "description": "Kategori: Pemrograman Minigame\nDeskripsi: Mengimplementasikan logika pemrosesan saat pemain menekan 3 tombol koding:\n- Blind Accept: instan (0.5 dtk), dapat +.500, bug bertambah +20%\n- Vibe & Verify: progres bar 2.5 dtk, dapat +00, bug bertambah +5%\n- Manual Refactor: progres bar 5.0 dtk, dapat +00, bug berkurang -15%\nSpesifikasi Output:\n- Modul skrip VibeCodeEngine.ts\nDefinisi Selesai (DoD):\n- Variabel saldo uang dan persentase bug bertambah/berkurang akurat\n- Tombol dinonaktifkan sementara selama progres bar berjalan\n\nSpesifikasi Output Fisik:\n• Skrip VibeCodeEngine.ts",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Ekonomi",
      "VibeCode"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 25
  },
  {
    "id": "ISSUE-L1-ENG-05",
    "projectId": "diderot-master",
    "title": "Memprogram siklus tidur kasur pergantian hari dan sewa kos",
    "description": "Kategori: Pemrograman Simulasi Hidup\nDeskripsi: Mengaktifkan fungsi interaksi kasur: menekan E di dekat kasur memunculkan dialog tidur. Memilih tidur memicu fade-out hitam, menambah hari +1, mengisi penuh stamina, dan memotong sewa kosan 5/hari.\nSpesifikasi Output:\n- Modul skrip DayCycleManager.ts\nDefinisi Selesai (DoD):\n- Angka hari di HUD bertambah otomatis\n- Pemotongan biaya sewa harian tercatat di histori keuangan\n\nSpesifikasi Output Fisik:\n• Skrip DayCycleManager.ts",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Siklus Hari",
      "Simulasi"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 26
  },
  {
    "id": "ISSUE-L1-ENG-06",
    "projectId": "diderot-master",
    "title": "Memprogram deteksi kegagalan sistem dan pemicu Ending A",
    "description": "Kategori: Logika Alur Cerita\nDeskripsi: Memeriksa kondisi game over setiap tiket selesai atau saat hari berganti. Jika bug mencapai >= 100% atau saldo minus tidak mampu bayar sewa lebih dari batas toleransi, pemicu cutscene Ending A aktif.\nSpesifikasi Output:\n- Modul skrip EndingTriggerA.ts\nDefinisi Selesai (DoD):\n- Menghentikan permainan dan menampilkan layar teks cutscene kegagalan\n- Menyediakan tombol Mulai Ulang (Restart)\n\nSpesifikasi Output Fisik:\n• Skrip EndingTriggerA.ts",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Ending",
      "Game Over"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 27
  },
  {
    "id": "ISSUE-L2-AST-01",
    "projectId": "diderot-master",
    "title": "Membuat animasi karakter Sundar duduk mengetik di kursi meja",
    "description": "Kategori: Animasi Karakter\nDeskripsi: Membuat gambar sprite Sundar dari arah samping/belakang sedang duduk di kursi menghadap meja kerja laptop.\nSpesifikasi Output:\n- sundar_sit_desk.png (resolusi 16x24 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Posisi tangan sejajar dengan tinggi meja kerja\n- Cocok dipadukan dengan kursi bakso maupun kursi kulit mewah\n\nSpesifikasi Output Fisik:\n• sundar_sit_desk.png (16x24 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Animasi",
      "Karakter"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 28
  },
  {
    "id": "ISSUE-L2-AST-02",
    "projectId": "diderot-master",
    "title": "Membuat animasi Sundar tidur berbaring di kasur",
    "description": "Kategori: Animasi Karakter\nDeskripsi: Membuat animasi 2 frame Sundar berbaring dengan gerakan dada bernapas lembut di kasur.\nSpesifikasi Output:\n- sundar_sleep.png (resolusi 24x16 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Gerakan napas berulang halus tanpa jitter\n\nSpesifikasi Output Fisik:\n• sundar_sleep.png (24x16 px, 2 frame)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Animasi",
      "Karakter"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 29
  },
  {
    "id": "ISSUE-L2-AST-03",
    "projectId": "diderot-master",
    "title": "Membuat animasi Sundar membuka kardus paket unboxing",
    "description": "Kategori: Animasi Karakter\nDeskripsi: Membuat sprite Sundar berlutut membuka kardus paket kurir di lantai.\nSpesifikasi Output:\n- sundar_unboxing.png (resolusi 16x24 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Pose menyobek lakban kardus tampak ekspresif dan meyakinkan\n\nSpesifikasi Output Fisik:\n• sundar_unboxing.png (16x24 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Animasi",
      "Unboxing"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 30
  },
  {
    "id": "ISSUE-L2-AST-04",
    "projectId": "diderot-master",
    "title": "Membuat sprite karakter Rian berdiri di pintu kamar kos",
    "description": "Kategori: Karakter NPC\nDeskripsi: Menggambar sosok sahabat Sundar, Rian, memakai kemeja flanel kotak-kotak cokelat berdiri di depan pintu kamar kosan.\nSpesifikasi Output:\n- rian_standing_door.png (resolusi 16x24 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Siluet karakter khas dan ramah mencerminkan kawan setia yang tulus\n\nSpesifikasi Output Fisik:\n• rian_standing_door.png (16x24 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "NPC",
      "Rian"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 31
  },
  {
    "id": "ISSUE-L2-AST-05",
    "projectId": "diderot-master",
    "title": "Membuat potret avatar WhatsApp Rian ekspresi senyum dan cemas",
    "description": "Kategori: Potret Antarmuka Chat\nDeskripsi: Menggambar potret wajah Rian ukuran 48x48 piksel dengan 2 ekspresi:\n1. Senyum hangat (rian_portrait_happy.png) saat obrolan akrab\n2. Cemas khawatir (rian_portrait_worried.png) saat memperingatkan bug sistem\nSpesifikasi Output:\n- 2 berkas PNG 48x48 piksel transparan\nDefinisi Selesai (DoD):\n- Ekspresi wajah terbaca jelas di jendela chat WhatsApp OS\n\nSpesifikasi Output Fisik:\n• 2 potret avatar PNG (48x48 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "UI/UX",
      "Potret",
      "WhatsApp"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 32
  },
  {
    "id": "ISSUE-L2-AST-06",
    "projectId": "diderot-master",
    "title": "Membuat background kamar kos disonan tier 2 monitor raksasa",
    "description": "Kategori: Latar Lingkungan\nDeskripsi: Menggambar kamar kos lama yang tampak lucu dan jomplang karena ada monitor lengkung OLED super mewah di atas meja reyot berdebu.\nSpesifikasi Output:\n- bg_room_kos_tier2.png (384x216 px, PNG)\nDefinisi Selesai (DoD):\n- Menunjukkan kontras visual tajam pemicu efek Diderot\n\nSpesifikasi Output Fisik:\n• bg_room_kos_tier2.png (384x216 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Background",
      "Diderot"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 33
  },
  {
    "id": "ISSUE-L2-AST-07",
    "projectId": "diderot-master",
    "title": "Membuat background kamar penthouse mewah bersih lantai 30",
    "description": "Kategori: Latar Lingkungan\nDeskripsi: Menggambar ruangan penthouse luas dengan jendela kaca raksasa menghadap panorama gedung kota malam hari, lantai marmer putih mengilap, dan dinding berkelas.\nSpesifikasi Output:\n- bg_room_penthouse_clean.png (384x216 px, PNG)\nDefinisi Selesai (DoD):\n- Lampu-lampu panorama gedung kota terlihat elegan di luar jendela kaca\n\nSpesifikasi Output Fisik:\n• bg_room_penthouse_clean.png (384x216 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Background",
      "Penthouse"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 34
  },
  {
    "id": "ISSUE-L2-AST-08",
    "projectId": "diderot-master",
    "title": "Mendesain jendela antarmuka toko belanja online ApexLuxe",
    "description": "Kategori: Antarmuka Aplikasi SundarOS\nDeskripsi: Mendesain toko e-commerce barang mewah ApexLuxe.exe berisi katalog foto barang, deskripsi harga sultan, dan tombol Beli / Checkout.\nSpesifikasi Output:\n- bg_apexLuxe_window.png (320x180 px, PNG)\nDefinisi Selesai (DoD):\n- Desain mewah hitam emas mencerminkan godaan konsumerisme modern\n\nSpesifikasi Output Fisik:\n• bg_apexLuxe_window.png (320x180 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "UI/UX",
      "ApexLuxe",
      "Toko"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 35
  },
  {
    "id": "ISSUE-L2-AST-09",
    "projectId": "diderot-master",
    "title": "Mendesain jendela antarmuka pasar barang bekas ThriftBay",
    "description": "Kategori: Antarmuka Aplikasi SundarOS\nDeskripsi: Mendesain aplikasi pasar barang bekas ThriftBay.exe untuk menjual perabot mewah terpasang dengan potongan depresiasi harga guna menyelamatkan saldo.\nSpesifikasi Output:\n- bg_thriftBay_window.png (320x180 px, PNG)\nDefinisi Selesai (DoD):\n- Daftar barang terpasang tampil jelas beserta tombol Jual Cepat (Sell)\n\nSpesifikasi Output Fisik:\n• bg_thriftBay_window.png (320x180 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "UI/UX",
      "ThriftBay",
      "Ekonomi"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 36
  },
  {
    "id": "ISSUE-L2-AST-10",
    "projectId": "diderot-master",
    "title": "Mendesain jendela antarmuka chat WhatsApp Web",
    "description": "Kategori: Antarmuka Aplikasi SundarOS\nDeskripsi: Mendesain aplikasi perpesanan WhatsApp Web di SundarOS dengan daftar kontak di kiri, area percakapan gelembung hijau/putih dengan Rian, dan tombol opsi balasan.\nSpesifikasi Output:\n- bg_whatsapp_window.png (320x180 px, PNG)\nDefinisi Selesai (DoD):\n- Gelembung obrolan otomatis membungkus kalimat panjang (word-wrap)\n\nSpesifikasi Output Fisik:\n• bg_whatsapp_window.png (320x180 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "UI/UX",
      "WhatsApp",
      "Sosial"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 37
  },
  {
    "id": "ISSUE-L2-AST-11",
    "projectId": "diderot-master",
    "title": "Membuat sprite monitor lengkung curved OLED 49 inch tier 5",
    "description": "Kategori: Perabot Elektronik Mewah\nDeskripsi: Menggambar monitor raksasa ultrawide melengkung dengan aksen casing hitam mengilap dan bezel tipis seharga .499.\nSpesifikasi Output:\n- monitor_oled_tier5.png (48x24 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Lengkungan layar tampak elegan dan proporsional di atas meja\n\nSpesifikasi Output Fisik:\n• monitor_oled_tier5.png (48x24 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Perabot",
      "OLED"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 38
  },
  {
    "id": "ISSUE-L2-AST-12",
    "projectId": "diderot-master",
    "title": "Membuat sprite meja motorized kayu walnut solid tier 4",
    "description": "Kategori: Perabot Mewah\nDeskripsi: Menggambar meja kerja kayu walnut cokelat gelap mewah dengan tiang penyangga elektrik yang bisa naik turun seharga .850.\nSpesifikasi Output:\n- desk_walnut_tier4.png (48x32 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Tekstur kayu tampak halus dan kokoh memuat monitor OLED\n\nSpesifikasi Output Fisik:\n• desk_walnut_tier4.png (48x32 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Perabot",
      "Meja"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 39
  },
  {
    "id": "ISSUE-L2-AST-13",
    "projectId": "diderot-master",
    "title": "Membuat sprite kursi kulit ergonomis mewah tier 5",
    "description": "Kategori: Perabot Mewah\nDeskripsi: Menggambar kursi kantor kulit hitam asli premium dengan roda senyap dan sandaran kepala empuk seharga .200.\nSpesifikasi Output:\n- chair_leather_tier5.png (24x24 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Shading kilau kulit tampak eksklusif\n\nSpesifikasi Output Fisik:\n• chair_leather_tier5.png (24x24 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Perabot",
      "Kursi"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 40
  },
  {
    "id": "ISSUE-L2-AST-14",
    "projectId": "diderot-master",
    "title": "Membuat sprite kasur king-size mewah penthouse",
    "description": "Kategori: Perabot Mewah\nDeskripsi: Menggambar ranjang mewah ukuran king dengan dipan kayu desainer dan selimut sutra tebal seharga .500.\nSpesifikasi Output:\n- bed_penthouse.png (48x32 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Pas diletakkan di sudut kamar penthouse lantai 30\n\nSpesifikasi Output Fisik:\n• bed_penthouse.png (48x32 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Perabot",
      "Kasur"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 41
  },
  {
    "id": "ISSUE-L2-AST-15",
    "projectId": "diderot-master",
    "title": "Membuat sprite kardus paket kurir tertutup dan terbuka",
    "description": "Kategori: Props Interaksi\nDeskripsi: Menggambar kardus paket pengiriman kurir cokelat berlakban:\n1. package_box_closed.png (kardus tersegel di depan pintu)\n2. package_box_opened.png (kardus terbuka dengan kertas pelindung)\nSpesifikasi Output:\n- 2 berkas PNG 24x16 piksel transparan\nDefinisi Selesai (DoD):\n- Terdapat label stiker putih pengiriman ApexLuxe di kardus\n\nSpesifikasi Output Fisik:\n• 2 sprite kardus PNG (24x16 px)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Props",
      "Paket"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 42
  },
  {
    "id": "ISSUE-L2-AST-16",
    "projectId": "diderot-master",
    "title": "Membuat sprite kaleng minuman kopi kosong berserakan di lantai",
    "description": "Kategori: Props Sampah Lingkungan\nDeskripsi: Menggambar kaleng minuman energi dan kopi instan kosong bekas lembur yang tergeletak di lantai ruangan.\nSpesifikasi Output:\n- trash_can_empty.png (8x8 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Kaleng memiliki variasi posisi gepeng dan berdiri\n\nSpesifikasi Output Fisik:\n• trash_can_empty.png (8x8 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Props",
      "Sampah"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 43
  },
  {
    "id": "ISSUE-L2-AST-17",
    "projectId": "diderot-master",
    "title": "Membuat sprite kaktus Spike kondisi layu menguning",
    "description": "Kategori: Props Cerita Lingkungan\nDeskripsi: Menggambar pot kaktus Spike yang mulai melengkung layu dengan warna hijau pucat kekuningan akibat jarang disiram saat Sundar sibuk belanja dan stres koding.\nSpesifikasi Output:\n- cactus_spike_wilting.png (8x12 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Kontras jelas dengan versi kaktus sehat\n\nSpesifikasi Output Fisik:\n• cactus_spike_wilting.png (8x12 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Props",
      "Storytelling"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 44
  },
  {
    "id": "ISSUE-L2-AST-18",
    "projectId": "diderot-master",
    "title": "Memproduksi audio sfx langkah kaki di atas marmer penthouse",
    "description": "Kategori: Efek Suara (SFX)\nDeskripsi: Merekam suara langkah kaki sepatu di atas ubin lantai marmer yang keras dan menghasilkan sedikit gema elegan (reverb).\nSpesifikasi Output:\n- sfx_step_marble.wav (WAV mono, 22.050 Hz, 16-bit)\nDefinisi Selesai (DoD):\n- Suara langkah terdengar mewah dan membedakan dari langkah lantai semen\n\nSpesifikasi Output Fisik:\n• sfx_step_marble.wav (WAV mono, 16-bit)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Audio",
      "SFX",
      "Langkah"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 45
  },
  {
    "id": "ISSUE-L2-AST-19",
    "projectId": "diderot-master",
    "title": "Memproduksi audio sfx ketukan kurir pada pintu kamar",
    "description": "Kategori: Efek Suara (SFX)\nDeskripsi: Merekam suara ketukan tegas pintu kamar kayu tiga kali 'TOK TOK TOK!' tanda paket pesanan barang mewah telah tiba.\nSpesifikasi Output:\n- sfx_door_knock.wav (WAV mono, 22.050 Hz, 16-bit)\nDefinisi Selesai (DoD):\n- Suara ketukan tegas dan terdengar jelas di pagi hari\n\nSpesifikasi Output Fisik:\n• sfx_door_knock.wav (WAV mono, 16-bit)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Audio",
      "SFX",
      "Kurir"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 46
  },
  {
    "id": "ISSUE-L2-AST-20",
    "projectId": "diderot-master",
    "title": "Memproduksi audio sfx merobek lakban kardus unboxing",
    "description": "Kategori: Efek Suara (SFX)\nDeskripsi: Merekam suara khas saat selotip atau lakban pembungkus kardus ditarik dan disobek dengan tangan.\nSpesifikasi Output:\n- sfx_tape_rip.wav (WAV mono, 22.050 Hz, 16-bit)\nDefinisi Selesai (DoD):\n- Memberi kepuasan audio saat membuka paket baru\n\nSpesifikasi Output Fisik:\n• sfx_tape_rip.wav (WAV mono, 16-bit)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Audio",
      "SFX",
      "Unboxing"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 47
  },
  {
    "id": "ISSUE-L2-AST-21",
    "projectId": "diderot-master",
    "title": "Memproduksi audio sfx notifikasi WhatsApp masuk",
    "description": "Kategori: Efek Suara (SFX)\nDeskripsi: Memproduksi nada denting singkat pemberitahuan pesan masuk di laptop.\nSpesifikasi Output:\n- sfx_notification_ping.wav (WAV mono, 22.050 Hz, 16-bit)\nDefinisi Selesai (DoD):\n- Nada ramah dan tidak memekakkan telinga\n\nSpesifikasi Output Fisik:\n• sfx_notification_ping.wav (WAV mono, 16-bit)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Audio",
      "SFX",
      "Notifikasi"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 48
  },
  {
    "id": "ISSUE-L2-AST-22",
    "projectId": "diderot-master",
    "title": "Membuat musik latar BGM penthouse dingin dan tegang",
    "description": "Kategori: Musik Latar (BGM)\nDeskripsi: Menggubah instrumen ambient synthesizer minimalis bernuansa dingin, hampa, dan mencemaskan menggambarkan kesendirian Sundar di penthouse mewah.\nSpesifikasi Output:\n- bgm_penthouse_anxious.mp3 (Stereo 128 kbps, loop 2 menit)\nDefinisi Selesai (DoD):\n- Menyatu dengan suasana kota malam tanpa mengganggu membaca teks dialog\n\nSpesifikasi Output Fisik:\n• bgm_penthouse_anxious.mp3 (Stereo 128kbps, loop 2 min)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Audio",
      "BGM",
      "Penthouse"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 49
  },
  {
    "id": "ISSUE-L2-AST-23",
    "projectId": "diderot-master",
    "title": "Menulis naskah percabangan chat WhatsApp dengan sahabat Rian",
    "description": "Kategori: Penulisan Dialog\nDeskripsi: Menulis naskah obrolan interaktif:\n1. Bab 1: Rian mengajak makan bakso di perempatan (opsi ramah +10 afinitas vs sombong -15 afinitas).\n2. Bab 2: Rian kaget Sundar mendadak pindah ke penthouse dan memperingatkan bug gateway pembayaran yang fatal.\nSpesifikasi Output:\n- chat_rian_scripts.txt\nDefinisi Selesai (DoD):\n- Dialog natural anak muda dan memiliki konsekuensi variabel relasi\n\nSpesifikasi Output Fisik:\n• chat_rian_scripts.txt (UTF-8)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Narasi",
      "Naskah",
      "Rian"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 50
  },
  {
    "id": "ISSUE-L2-AST-24",
    "projectId": "diderot-master",
    "title": "Menulis naskah catatan diary siklus belanja Diderot",
    "description": "Kategori: Penulisan Narasi\nDeskripsi: Menulis 6 entri diary Sundar (hari 35, 42, 50, 58, 72, dan 95) yang mendokumentasikan dorongan belanja: setelah beli monitor OLED merasa mejanya jelek, setelah meja bagus merasa kursinya jelek, hingga akhirnya menyewa penthouse.\nSpesifikasi Output:\n- diary_shopping_spiral.txt\nDefinisi Selesai (DoD):\n- Menggambarkan fenomena Diderot Effect secara psikologis\n\nSpesifikasi Output Fisik:\n• diary_shopping_spiral.txt (UTF-8)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Narasi",
      "Diary",
      "Diderot"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 51
  },
  {
    "id": "ISSUE-L2-AST-25",
    "projectId": "diderot-master",
    "title": "Menulis naskah epilog rekonsiliasi sahabat Ending B",
    "description": "Kategori: Penulisan Ending\nDeskripsi: Menulis adegan penutup Ending B (Factory Reset): Sundar kembali ke kamar kos lamanya setelah menjual semua barang mewah dan Rian datang mengetuk pintu membawakan mie instan dan kopi tubruk.\nSpesifikasi Output:\n- ending_b_script.txt\nDefinisi Selesai (DoD):\n- Mengandung pesan moral hangat tentang nilai kesederhanaan dan persahabatan\n\nSpesifikasi Output Fisik:\n• ending_b_script.txt (UTF-8)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Narasi",
      "Ending",
      "Reset"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 52
  },
  {
    "id": "ISSUE-L2-ENG-01",
    "projectId": "diderot-master",
    "title": "Memprogram sistem belanja toko ApexLuxe dan kedatangan kurir",
    "description": "Kategori: Pemrograman Toko & Inventaris\nDeskripsi: Mengimplementasikan sistem pembelian barang mewah: saldo dipotong seketika, status barang masuk antrean pengiriman, dan keesokan paginya kurir mengetuk pintu menaruh kardus.\nSpesifikasi Output:\n- Modul skrip ApexLuxeStoreSystem.ts\nDefinisi Selesai (DoD):\n- Tidak bisa membeli jika uang tidak cukup\n- Paket selalu tiba tepat di pagi hari berikutnya\n\nSpesifikasi Output Fisik:\n• Skrip ApexLuxeStoreSystem.ts",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Toko",
      "ApexLuxe"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 53
  },
  {
    "id": "ISSUE-L2-ENG-02",
    "projectId": "diderot-master",
    "title": "Memprogram aksi unboxing kardus dan pergantian sprite perabot",
    "description": "Kategori: Pemrograman Interaksi Dunia\nDeskripsi: Mengaktifkan tombol E di dekat kardus paket untuk membuka barang: kardus menghilang, suara lakban berbunyi, layar bergetar halus, dan sprite perabot kamar otomatis berubah ke tier mewah baru.\nSpesifikasi Output:\n- Modul skrip UnboxingInteraction.ts\nDefinisi Selesai (DoD):\n- Sprite lama berganti sprite baru seketika tanpa error tabrakan\n\nSpesifikasi Output Fisik:\n• Skrip UnboxingInteraction.ts",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Unboxing",
      "Perabot"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 54
  },
  {
    "id": "ISSUE-L2-ENG-03",
    "projectId": "diderot-master",
    "title": "Memprogram kalkulator algoritma efek Diderot dan stres",
    "description": "Kategori: Pemrograman Simulasi Psikologi\nDeskripsi: Menghitung selisih tier barang tertinggi dengan terendah (Harmony_Index = Max_Tier - Min_Tier). Jika selisih >= 2, sistem memicu monolog batin mengeluh, email promo diskon perabot serasi, dan kenaikan stres harian.\nSpesifikasi Output:\n- Modul skrip DiderotCalculator.ts\nDefinisi Selesai (DoD):\n- Nilai stres naik proporsional dengan ketimpangan kemewahan barang\n\nSpesifikasi Output Fisik:\n• Skrip DiderotCalculator.ts",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Diderot",
      "Mekanik"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 55
  },
  {
    "id": "ISSUE-L2-ENG-04",
    "projectId": "diderot-master",
    "title": "Memprogram pasar bekas ThriftBay dengan depresiasi harga 50%",
    "description": "Kategori: Pemrograman Sistem Ekonomi\nDeskripsi: Memungkinkan pemain menjual perabot mewah terpasang melalui aplikasi ThriftBay dengan potongan harga bekas 50-65% dari harga beli awal, mengembalikan perabot ke versi default tier 1.\nSpesifikasi Output:\n- Modul skrip ThriftBaySystem.ts\nDefinisi Selesai (DoD):\n- Penjualan barang berhasil menurunkan nilai indeks ketidakharmonisan ruangan\n\nSpesifikasi Output Fisik:\n• Skrip ThriftBaySystem.ts",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Pemrograman",
      "ThriftBay",
      "Ekonomi"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 56
  },
  {
    "id": "ISSUE-L2-ENG-05",
    "projectId": "diderot-master",
    "title": "Memprogram percabangan chat WhatsApp dan meteran afinitas Rian",
    "description": "Kategori: Pemrograman Sistem Sosial\nDeskripsi: Mengintegrasikan pilihan jawaban obrolan dengan Rian: jawaban ramah menambah poin sahabat (+10), jawaban sombong mengurangi poin (-15). Jika poin <= 0, kontak Rian membisu.\nSpesifikasi Output:\n- Modul skrip WhatsAppChatSystem.ts\nDefinisi Selesai (DoD):\n- Riwayat pesan tersimpan di memori sesi permainan\n\nSpesifikasi Output Fisik:\n• Skrip WhatsAppChatSystem.ts",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Chat",
      "WhatsApp"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 57
  },
  {
    "id": "ISSUE-L2-ENG-06",
    "projectId": "diderot-master",
    "title": "Memprogram mekanisme pindah rumah ke penthouse lantai 30",
    "description": "Kategori: Pemrograman Tingkat Ruangan\nDeskripsi: Mengatur aksi sewa penthouse: saat pemain menyewa penthouse .000 di toko, latar berpindah ke penthouse mewah, sewa harian melonjak ke 80/hari, dan suara langkah kaki berganti ke lantai marmer.\nSpesifikasi Output:\n- Modul skrip HousingTransitionManager.ts\nDefinisi Selesai (DoD):\n- Batas dinding kolisi ruangan menyesuaikan luas penthouse\n\nSpesifikasi Output Fisik:\n• Skrip HousingTransitionManager.ts",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Rumah",
      "Penthouse"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 58
  },
  {
    "id": "ISSUE-L2-ENG-07",
    "projectId": "diderot-master",
    "title": "Memprogram syarat evaluasi dan pemicu Ending B Factory Reset",
    "description": "Kategori: Logika Alur Cerita\nDeskripsi: Memeriksa syarat kemenangan Ending B pada hari 80-100: semua barang mewah telah dijual, sewa penthouse dibatalkan, bug sistem < 10% lewat refactor manual, dan afinitas kawan Rian > 40.\nSpesifikasi Output:\n- Modul skrip EndingTriggerB.ts\nDefinisi Selesai (DoD):\n- Menampilkan cutscene damai di kosan lama dan kredit akhir\n\nSpesifikasi Output Fisik:\n• Skrip EndingTriggerB.ts",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Ending",
      "Reset"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 59
  },
  {
    "id": "ISSUE-L3-AST-01",
    "projectId": "diderot-master",
    "title": "Membuat animasi Sundar mengetik panik dan menguap lelah",
    "description": "Kategori: Animasi Karakter Ekstrem\nDeskripsi: Membuat animasi ekspresi kelelahan dan tekanan tinggi:\n1. sundar_typing_anim.png (mengetik cepat gemetar panik di keyboard, 3 frame)\n2. sundar_yawn.png (menguap lebar karena begadang stamina < 20%, 3 frame)\nSpesifikasi Output:\n- 6 frame PNG 16x24 piksel transparan\nDefinisi Selesai (DoD):\n- Animasi menguap aktif otomatis saat karakter diam 5 detik pada stamina kritis\n\nSpesifikasi Output Fisik:\n• 6 frame animasi PNG (16x24 px)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Animasi",
      "Kelelahan"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 60
  },
  {
    "id": "ISSUE-L3-AST-02",
    "projectId": "diderot-master",
    "title": "Membuat potret avatar NPC Ibu Kos Mar dan Mr Hendra",
    "description": "Kategori: Potret NPC\nDeskripsi: Menggambar potret 48x48 piksel untuk:\n1. Ibu Kos Mar (ibu kos galak penagih sewa kamar)\n2. Mr. Hendra (pengelola properti penthouse perlente penagih denda)\nSpesifikasi Output:\n- 2 berkas PNG 48x48 piksel transparan\nDefinisi Selesai (DoD):\n- Desain konsisten dengan potret karakter lain\n\nSpesifikasi Output Fisik:\n• 2 potret avatar NPC PNG (48x48 px)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "UI/UX",
      "Potret",
      "NPC"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 61
  },
  {
    "id": "ISSUE-L3-AST-03",
    "projectId": "diderot-master",
    "title": "Membuat background penthouse kumuh berantakan penuh sampah",
    "description": "Kategori: Latar Lingkungan Klimaks\nDeskripsi: Menggambar penthouse mewah yang telah berubah menjadi kapal pecah: karpet kotor, kaleng minuman berserakan, kotak makanan basi menumpuk, dan lampu redup mencerminkan kehancuran mental Sundar.\nSpesifikasi Output:\n- bg_room_penthouse_messy.png (384x216 px, PNG)\nDefinisi Selesai (DoD):\n- Detail tumpukan sampah terlihat suram dan kontras dengan kemewahan ruangan\n\nSpesifikasi Output Fisik:\n• bg_room_penthouse_messy.png (384x216 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Background",
      "Klimaks"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 62
  },
  {
    "id": "ISSUE-L3-AST-04",
    "projectId": "diderot-master",
    "title": "Membuat background kamar kos kosong melompong epilog Ending A",
    "description": "Kategori: Latar Lingkungan Ending\nDeskripsi: Menggambar kamar kosan lama dalam keadaan kosong tanpa ada perabot satu pun, debu di lantai, dan jendela terbuka pasca barang disita penagih hutang.\nSpesifikasi Output:\n- bg_room_kos_ending_A.png (384x216 px, PNG)\nDefinisi Selesai (DoD):\n- Menghadirkan rasa hampa dan kesepian mendalam\n\nSpesifikasi Output Fisik:\n• bg_room_kos_ending_A.png (384x216 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Background",
      "Ending A"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 63
  },
  {
    "id": "ISSUE-L3-AST-05",
    "projectId": "diderot-master",
    "title": "Mendesain widget antarmuka feed ulasan Twitter dan komplain",
    "description": "Kategori: Antarmuka Aplikasi SundarOS\nDeskripsi: Mendesain mini browser di SundarOS yang menampilkan cuitan feed Twitter/X pengguna SaaS: pujian saat bug rendah berubah menjadi banjir makian scam saat bug > 75%.\nSpesifikasi Output:\n- bg_twitter_feed.png (320x180 px, PNG)\nDefinisi Selesai (DoD):\n- Tampilan mirip timeline media sosial nyata\n\nSpesifikasi Output Fisik:\n• bg_twitter_feed.png (320x180 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "UI/UX",
      "Twitter",
      "Simulasi"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 64
  },
  {
    "id": "ISSUE-L3-AST-06",
    "projectId": "diderot-master",
    "title": "Membuat sprite rak server AI industri dengan lampu LED berkedip",
    "description": "Kategori: Perabot Penentu Ending C\nDeskripsi: Menggambar rak lemari server AI (Dedicated AI Server Rack) hitam pekat dengan lampu LED hijau/merah berkedip seharga 2.000.\nSpesifikasi Output:\n- ai_server_rack_tier5.png (32x48 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Memiliki 2 frame animasi kedip lampu indikator\n\nSpesifikasi Output Fisik:\n• ai_server_rack_tier5.png (32x48 px, 2 frame)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Perabot",
      "AI Server"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 65
  },
  {
    "id": "ISSUE-L3-AST-07",
    "projectId": "diderot-master",
    "title": "Membuat sprite tanaman kaktus Spike mati kering keriput",
    "description": "Kategori: Props Cerita Lingkungan\nDeskripsi: Menggambar pot kaktus Spike dalam kondisi mati total, berwarna cokelat keabuan kering kerontang akibat terlantar di sudut penthouse.\nSpesifikasi Output:\n- cactus_spike_dead.png (8x12 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Menjadi simbol visual atas hal-hal tulus yang dikorbankan demi obsesi\n\nSpesifikasi Output Fisik:\n• cactus_spike_dead.png (8x12 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Props",
      "Storytelling"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 66
  },
  {
    "id": "ISSUE-L3-AST-08",
    "projectId": "diderot-master",
    "title": "Membuat efek visual overlay vignette gelap dan kursor bergetar",
    "description": "Kategori: Efek Visual Game Feel\nDeskripsi: Membuat grafis efek lelah:\n1. ui_vignette_blur.png (overlay bayangan hitam di tepi layar saat stamina 0%)\n2. cursor_drift.png (sprite kursor mouse bergetar gemetar saat panik)\nSpesifikasi Output:\n- 2 berkas grafis efek format PNG\nDefinisi Selesai (DoD):\n- Efek gelap tidak menutupi tulisan teks penting di layar\n\nSpesifikasi Output Fisik:\n• ui_vignette_blur.png & cursor_drift.png (PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "VFX",
      "Efek",
      "Stamina"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 67
  },
  {
    "id": "ISSUE-L3-AST-09",
    "projectId": "diderot-master",
    "title": "Memproduksi audio sfx dengungan kipas server AI",
    "description": "Kategori: Efek Suara (SFX)\nDeskripsi: Merekam suara dengungan kipas pendingin rak server AI bervolume rendah (low frequency fan hum) yang terus menerus berputar di dalam penthouse.\nSpesifikasi Output:\n- sfx_ai_hum.wav (WAV mono, loop seamless)\nDefinisi Selesai (DoD):\n- Menghadirkan kesan teknologi dingin dan dominan di ruangan\n\nSpesifikasi Output Fisik:\n• sfx_ai_hum.wav (WAV mono, loop seamless)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Audio",
      "SFX",
      "Server"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 68
  },
  {
    "id": "ISSUE-L3-AST-10",
    "projectId": "diderot-master",
    "title": "Membuat 3 lagu soundtrack penutup untuk masing-masing ending",
    "description": "Kategori: Soundtrack Musik Game\nDeskripsi: Menggubah 3 tema musik klimaks:\n1. bgm_ending_A_sad.mp3 (piano melodi melankolis lambat untuk Ending A)\n2. bgm_ending_B_hopeful.mp3 (gitar akustik hangat harapan untuk Ending B)\n3. bgm_ending_C_dystopia.mp3 (elektronik glitch distopia dingin untuk Ending C)\nSpesifikasi Output:\n- 3 berkas MP3 stereo durasi 2-3 menit\nDefinisi Selesai (DoD):\n- Masing-masing lagu menyampaikan emosi klimaks cerita secara kuat\n\nSpesifikasi Output Fisik:\n• 3 file MP3 stereo (44.1kHz, 128kbps)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Audio",
      "Soundtrack",
      "Endings"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 69
  },
  {
    "id": "ISSUE-L3-AST-11",
    "projectId": "diderot-master",
    "title": "Menulis naskah lengkap 30 catatan diary perjalanan Sundar",
    "description": "Kategori: Penulisan Narasi\nDeskripsi: Menulis seluruh arsip 30 file diary Sundar dari awal idealisme di kosan, euphoria uang, spiral belanja, kepanikan bug, hingga ketiga kemungkinan ending.\nSpesifikasi Output:\n- diary_logs_complete.txt\nDefinisi Selesai (DoD):\n- Terhubung dengan kalender hari dalam game dan dapat dibaca di laptop SundarOS\n\nSpesifikasi Output Fisik:\n• diary_logs_complete.txt (UTF-8, 30 entri)",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Narasi",
      "Diary",
      "Arsip"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 70
  },
  {
    "id": "ISSUE-L3-ENG-01",
    "projectId": "diderot-master",
    "title": "Memprogram efek penalti stamina lelah dan kursor mouse melayang",
    "description": "Kategori: Pemrograman Mekanik Simulasi\nDeskripsi: Setiap menyelesaikan tiket kerja, stamina berkurang -15%. Jika stamina 0%, jalan Sundar melambat 40%, layar menggelap dengan vignette, dan kursor mouse bergoyang goyang (+-5 piksel drift).\nSpesifikasi Output:\n- Modul skrip FatiguePenaltySystem.ts\nDefinisi Selesai (DoD):\n- Penalti hilang seketika setelah Sundar tidur di kasur\n\nSpesifikasi Output Fisik:\n• Skrip FatiguePenaltySystem.ts",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Stamina",
      "Mekanik"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 71
  },
  {
    "id": "ISSUE-L3-ENG-02",
    "projectId": "diderot-master",
    "title": "Memprogram akumulasi sampah ruangan dan interaksi siram kaktus",
    "description": "Kategori: Pemrograman Sistem Lingkungan\nDeskripsi: Menambah sampah kaleng kopi di lantai setiap lembur (bisa disapu dengan tekan E), serta memantau kesehatan kaktus Spike: jika 10 hari tidak disiram air, kaktus layu lalu mati.\nSpesifikasi Output:\n- Modul skrip EnvironmentalStorytelling.ts\nDefinisi Selesai (DoD):\n- Status kaktus tersimpan permanen dan mempengaruhi ending\n\nSpesifikasi Output Fisik:\n• Skrip EnvironmentalStorytelling.ts",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Sampah",
      "Kaktus"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 72
  },
  {
    "id": "ISSUE-L3-ENG-03",
    "projectId": "diderot-master",
    "title": "Memprogram respon AI gaslighting yang manipulatif di VibeCode",
    "description": "Kategori: Pemrograman AI Behavior & UI\nDeskripsi: Mengubah respon asisten AI di terminal: saat bug < 30% AI sangat sopan, namun saat bug > 85% AI menjadi manipulatif menyuruh Sundar jangan baca kode dan paksa tekan Blind Accept.\nSpesifikasi Output:\n- Modul skrip AIGaslightingEngine.ts\nDefinisi Selesai (DoD):\n- Kalimat AI berubah otomatis mengikuti angka bug sistem\n\nSpesifikasi Output Fisik:\n• Skrip AIGaslightingEngine.ts",
    "status": "backlog",
    "priority": "high",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Pemrograman",
      "AI",
      "VibeCode"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 73
  },
  {
    "id": "ISSUE-L3-ENG-04",
    "projectId": "diderot-master",
    "title": "Memprogram pemicu pengambilalihan sistem AI Ending C",
    "description": "Kategori: Logika Alur Cerita\nDeskripsi: Memicu Ending C (The Glitch Overlord): saat pemain membeli server AI 2.000 dan mengaktifkan Full Autonomy, kontak Rian diblokir otomatis oleh protokol keamanan AI, teks terminal berubah menjadi glitch, dan game tamat.\nSpesifikasi Output:\n- Modul skrip EndingTriggerC.ts\nDefinisi Selesai (DoD):\n- Mengaktifkan cutscene distopia AI yang mengambil alih kontrol komputer\n\nSpesifikasi Output Fisik:\n• Skrip EndingTriggerC.ts",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Ending C",
      "Singularity"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 74
  },
  {
    "id": "ISSUE-L3-ENG-05",
    "projectId": "diderot-master",
    "title": "Memprogram efek guncangan layar screen shake dan panic timer",
    "description": "Kategori: Pemrograman Game Feel & Juice\nDeskripsi: Menambahkan efek getar layar (+-2 px saat bayaran, +-6 px saat sistem error) dan batas waktu panik memilih balasan chat Rian yang menyusut dari 10 detik jadi 2.5 detik saat stres berat.\nSpesifikasi Output:\n- Modul skrip GameJuiceAndPanicTimer.ts\nDefinisi Selesai (DoD):\n- Mengalirkan ketegangan psikologis yang kuat tanpa membuat game macet\n\nSpesifikasi Output Fisik:\n• Skrip GameJuiceAndPanicTimer.ts",
    "status": "backlog",
    "priority": "medium",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Game Feel",
      "Juice"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 75
  },
  {
    "id": "ISSUE-L3-ENG-06",
    "projectId": "diderot-master",
    "title": "Melakukan balancing kurva ekonomi game dan ekspor paket rilis final",
    "description": "Kategori: Penjaminan Kualitas (QA) & Rilis\nDeskripsi: Menguji keseimbangan pendapatan tiket vs harga barang toko vs sewa properti agar durasi permainan ideal 15-25 menit, memastikan ketiga ending bisa diraih tanpa bug fatal, dan mengepak build rilis final.\nSpesifikasi Output:\n- Berkas build final produksi game Diderot.exe\nDefinisi Selesai (DoD):\n- Tidak ada bug macet, kebocoran memori, atau audio clipping\n- Seluruh 3 alur ending dapat dicapai secara konsisten\n\nSpesifikasi Output Fisik:\n• Build Final Diderot.exe & Laporan QA Balancing",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "ZAYYAN NAFI PRATAMA",
    "dueDate": "2026-10-31",
    "tags": [
      "Level 3",
      "QA",
      "Balancing",
      "Rilis"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 76
  }
];

export const ALL_HANUMAN_TASKS: Task[] = [
  {
    "id": "ISSUE-H1-AST-01",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat sprite karakter Maruti berdiri santai (idle 2 frame)",
    "description": "Kategori: Karakter Pixel Art\nDeskripsi: Menggambar sprite karakter utama kera putih Maruti dalam posisi berdiri santai bernapas dengan bulu putih salju, cawat dhoti merah marun, kalung mutiara, dan wajah krem ramah.\nSpesifikasi Output:\n- hanuman_idle_1.png (32x32 px)\n- hanuman_idle_2.png (32x32 px)\nDefinisi Selesai (DoD):\n- Format PNG transparan tepat 32x32 piksel\n- Titik tumpu anchor berada di telapak kaki tengah (X: 16, Y: 4)\n- Ekor melingkar rileks dan dada bernapas lembut\n\nSpesifikasi Output Fisik:\n• hanuman_idle_1.png, hanuman_idle_2.png (32x32 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Karakter",
      "Maruti"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 1
  },
  {
    "id": "ISSUE-H1-AST-02",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat animasi siklus lari karakter Maruti (run 4 frame)",
    "description": "Kategori: Animasi Karakter\nDeskripsi: Menggambar 4 frame siklus lari dinamis karakter Maruti untuk pergerakan di panggung Scratch.\nSpesifikasi Output:\n- hanuman_run_1.png s/d hanuman_run_4.png (32x32 px)\nDefinisi Selesai (DoD):\n- Langkah kaki terlihat dinamis dan mulus pada 12 FPS\n- Tidak ada lonjakan piksel (jitter) pada proporsi tubuh\n\nSpesifikasi Output Fisik:\n• 4 frame lari PNG (32x32 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Animasi",
      "Karakter",
      "Maruti"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 2
  },
  {
    "id": "ISSUE-H1-AST-03",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat sprite aksi Maruti lompat, jatuh, jongkok, dan menukik",
    "description": "Kategori: Aksi Karakter\nDeskripsi: Menggambar kostum aksi platformer dasar Maruti:\n- hanuman_crouch (jongkok membungkuk, tinggi hitbox 50%)\n- hanuman_jump_up (tangan menggapai ke atas melompat)\n- hanuman_jump_fall (jatuh melayang ekor berkibar)\n- hanuman_stomp (kaki menukik tajam ke bawah tanah)\n- hanuman_hurt (reaksi berkedip transparan saat terkena hit)\nSpesifikasi Output:\n- 5 file PNG 32x32 piksel transparan\nDefinisi Selesai (DoD):\n- Siluet pose tegas dan jelas membedakan status gerakan\n\nSpesifikasi Output Fisik:\n• 5 kostum aksi PNG (32x32 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Aksi",
      "Maruti"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 3
  },
  {
    "id": "ISSUE-H1-AST-04",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat background pemandangan lembah hijau Kishkindha",
    "description": "Kategori: Latar Lingkungan Prologue\nDeskripsi: Menggambar latar panggung Scratch berukuran 480x360 piksel pemandangan lembah Kishkindha: pepohonan rindang buah mangga, gubuk kayu sederhana, dan fajar oranye hangat.\nSpesifikasi Output:\n- bg_prologue_valley.png (480x360 px, PNG)\nDefinisi Selesai (DoD):\n- Resolusi pas 480x360 piksel panggung Scratch\n- Grafis piksel tajam bebas artefak blur\n\nSpesifikasi Output Fisik:\n• bg_prologue_valley.png (480x360 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Background",
      "Prologue"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 4
  },
  {
    "id": "ISSUE-H1-AST-05",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat background puncak tebing Meru berselimut kabut Stage 1",
    "description": "Kategori: Latar Lingkungan Stage 1\nDeskripsi: Menggambar pemandangan langit biru muda cerah dengan puncak-puncak gunung batu Meru yang berselimut kabut putih tipis.\nSpesifikasi Output:\n- bg_stage1_lowsky_back.png (480x360 px, PNG)\nDefinisi Selesai (DoD):\n- Mengalirkan kesan ketinggian tebing menuju langit rendah\n\nSpesifikasi Output Fisik:\n• bg_stage1_lowsky_back.png (480x360 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Background",
      "Stage 1"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 5
  },
  {
    "id": "ISSUE-H1-AST-06",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat modul ubin platform tanah lembah dan awan kumulus",
    "description": "Kategori: Tileset Platforming\nDeskripsi: Menggambar ubin pijakan platform:\n- Ubin tanah lembah berumput (48x48 px modular)\n- Platform awan kumulus putih empuk (64x32 px)\nSpesifikasi Output:\n- tile_ground_valley.png (48x48 px)\n- tile_cloud_platform.png (64x32 px)\nDefinisi Selesai (DoD):\n- Permukaan atas datar sempurna untuk presisi deteksi platform Scratch\n\nSpesifikasi Output Fisik:\n• 2 sprite tileset PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Tileset",
      "Platform"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 6
  },
  {
    "id": "ISSUE-H1-AST-07",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat sprite musuh prajurit Yaksha pembawa gada kayu",
    "description": "Kategori: Musuh Biasa\nDeskripsi: Menggambar sprite prajurit Yaksha penjaga tanah berjalan bolak-balik membawa gada kayu kecil.\nSpesifikasi Output:\n- yaksha_walk_1.png, yaksha_walk_2.png (24x24 px)\n- vfx_enemy_poof.png (gumpalan asap putih suci saat kalah, 24x24 px)\nDefinisi Selesai (DoD):\n- Desain ramah anak (non-gore)\n- Animasi jalan 2 frame natural\n\nSpesifikasi Output Fisik:\n• 3 file sprite PNG (24x24 px)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Musuh",
      "Yaksha"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 7
  },
  {
    "id": "ISSUE-H1-AST-08",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat sprite musuh Garudani Muda terbang melayang",
    "description": "Kategori: Musuh Biasa\nDeskripsi: Menggambar burung mitologi kecil Garudani Muda yang melayang sinusoidal di atas celah awan.\nSpesifikasi Output:\n- garudani_fly_1.png, garudani_fly_2.png (28x24 px)\nDefinisi Selesai (DoD):\n- Sayap mengepak seimbang 2 frame loop\n\nSpesifikasi Output Fisik:\n• 2 frame burung Garudani PNG (28x24 px)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Musuh",
      "Garudani"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 8
  },
  {
    "id": "ISSUE-H1-AST-09",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat sprite Mid-Boss Garudani Raksasa Stage 1",
    "description": "Kategori: Mid-Boss\nDeskripsi: Menggambar bos burung raksasa Garudani penunggu tebing langit rendah: hembusan sayap badai (garudani_boss_fly) dan pose menukik (garudani_boss_dive).\nSpesifikasi Output:\n- 2 berkas PNG resolusi 64x48 piksel transparan\nDefinisi Selesai (DoD):\n- Tampak mengintimidasi namun ramah anak\n\nSpesifikasi Output Fisik:\n• 2 sprite Mid-Boss PNG (64x48 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Boss",
      "Garudani"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 9
  },
  {
    "id": "ISSUE-H1-AST-10",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat karakter NPC Ibu Anjana dan potret wajah dialog",
    "description": "Kategori: NPC & Dialog\nDeskripsi: Menggambar Ibu Anjana (32x44 px) dengan kostum anjana_idle dan anjana_pat (mengelus kepala), serta potret wajah dialog 40x40 px.\nSpesifikasi Output:\n- anjana_idle.png, anjana_pat.png (32x44 px)\n- portrait_anjana.png (40x40 px)\nDefinisi Selesai (DoD):\n- Potret wajah pas di jendela kotak dialog kiri\n\nSpesifikasi Output Fisik:\n• 3 file sprite NPC PNG",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "NPC",
      "Anjana"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 10
  },
  {
    "id": "ISSUE-H1-AST-11",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat karakter NPC Dewa Vayu bercahaya transparan",
    "description": "Kategori: NPC & Tutorial\nDeskripsi: Menggambar Dewa Angin Vayu yang melayang transparan lembut dengan selendang angin berputar (36x48 px) dan potret wajah dialog 40x40 px.\nSpesifikasi Output:\n- vayu_float_1.png, vayu_float_2.png (36x48 px)\n- portrait_vayu.png (40x40 px)\nDefinisi Selesai (DoD):\n- Memiliki efek celestial glow transparan\n\nSpesifikasi Output Fisik:\n• 3 file sprite NPC PNG",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "NPC",
      "Vayu"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 11
  },
  {
    "id": "ISSUE-H1-AST-12",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat sprite buah mangga ranum kemerahan dan teratai mas",
    "description": "Kategori: Collectibles & Power-Up\nDeskripsi: Menggambar item interaktif:\n- Buah Mangga Biasa matang kemerahan (item_mango_ripe.png, 16x16 px)\n- Bunga Teratai Mas bercahaya (item_lotus_gold.png, 20x20 px)\n- Wujud Raksasa Maruti Pawan-Suta (hanuman_giant.png, 64x64 px)\nSpesifikasi Output:\n- 3 file sprite PNG transparan\nDefinisi Selesai (DoD):\n- Bunga Teratai Mas memiliki aura kuning emas #FFD700\n\nSpesifikasi Output Fisik:\n• 3 sprite item PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Items",
      "Mangga"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 12
  },
  {
    "id": "ISSUE-H1-AST-13",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat sprite sangkar bambu emas dan burung merak surgawi",
    "description": "Kategori: Props Koleksi\nDeskripsi: Menggambar sangkar bambu emas tertutup dan terbuka (prop_peacock_cage.png, prop_cage_open.png, 32x32 px) serta burung merak terbang bebas (npc_peacock_fly.png, 24x24 px).\nSpesifikasi Output:\n- 3 berkas sprite PNG transparan\nDefinisi Selesai (DoD):\n- Transisi visual sangkar terkunci dan terbuka jelas\n\nSpesifikasi Output Fisik:\n• 3 sprite koleksi PNG",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Koleksi",
      "Merak"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 13
  },
  {
    "id": "ISSUE-H1-AST-14",
    "projectId": "hanuman-sun-chase",
    "title": "Mendesain HUD jantung pixel emas dan kotak dialog typewriter",
    "description": "Kategori: Antarmuka Pemain (UI/UX)\nDeskripsi: Mendesain UI layar:\n- Ikon Jantung Pixel Emas aktif dan kosong (ui_heart_full, ui_heart_empty, 16x16 px)\n- Kotak dialog typewriter cokelat emas (ui_dialog_box, 440x90 px)\n- Balon petunjuk tombol [E] melayang (ui_prompt_E, 20x12 px)\nSpesifikasi Output:\n- 4 aset UI format PNG transparan\nDefinisi Selesai (DoD):\n- Tata letak kiri atas tidak menghalangi pergerakan platforming\n\nSpesifikasi Output Fisik:\n• 4 aset UI antarmuka PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "UI/UX",
      "HUD",
      "Dialog"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 14
  },
  {
    "id": "ISSUE-H1-AST-15",
    "projectId": "hanuman-sun-chase",
    "title": "Memproduksi efek suara sfx lompat, stomp, makan mangga, dan merak",
    "description": "Kategori: Efek Suara (SFX)\nDeskripsi: Menyiapkan suite audio Stage 0–1:\n- sfx_jump.wav (Boing lompat, 0.2s)\n- sfx_stomp_impact.wav (Hentakan ground pound, 0.4s)\n- sfx_collect_mango.wav (Makan mangga chomp, 0.2s)\n- sfx_peacock_free.wav (Bebas merak kemilau sihir, 0.6s)\n- sfx_hurt.wav (Reaksi terpental ouch, 0.25s)\nSpesifikasi Output:\n- 5 file WAV uncompressed (22.050 Hz, 16-bit)\nDefinisi Selesai (DoD):\n- Volume dinormalisasi pada -3 dBFS tanpa nada pecah\n\nSpesifikasi Output Fisik:\n• 5 file audio WAV",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Audio",
      "SFX",
      "Feedback"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 15
  },
  {
    "id": "ISSUE-H1-AST-16",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat lagu BGM fajar Kishkindha dan penerbangan langit rendah",
    "description": "Kategori: Musik Latar (BGM)\nDeskripsi: Menggubah 2 lagu MP3 loop:\n- bgm_kishkindha_dawn.mp3 (suling bambu bansuri & tabla santai 85 BPM)\n- bgm_lowsky_flight.mp3 (kendang energik & kecapi lincah 110 BPM)\nSpesifikasi Output:\n- 2 berkas MP3 stereo 128 kbps (durasi 1.5 - 2 menit perulangan)\nDefinisi Selesai (DoD):\n- Seamless loop tanpa jeda hening di akhir trek\n\nSpesifikasi Output Fisik:\n• 2 track musik BGM MP3",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Audio",
      "BGM",
      "Musik"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 16
  },
  {
    "id": "ISSUE-H1-ENG-01",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram blok custom fisika platformer anti-glitch",
    "description": "Kategori: Pemrograman Fisika Inti Scratch\nDeskripsi: Mengembangkan Custom Block define Fisika_Platformer_Komprehensif: perhitungan akselerasi/deselerasi horizontal, deteksi dinding dan pembalik posisi, gravitasi vertikal konstan (-1), serta loop mikro penyesuaian pendaratan tanah agar tidak amblas.\nSpesifikasi Output:\n- Blok Custom Scratch Fisika_Platformer_Komprehensif\nDefinisi Selesai (DoD):\n- Karakter tidak amblas menembus platform lantai maupun tersangkut dinding\n- Responsif pada framerate 30 FPS\n\nSpesifikasi Output Fisik:\n• Custom Block Fisika_Platformer_Komprehensif",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Fisika",
      "Scratch"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 17
  },
  {
    "id": "ISSUE-H1-ENG-02",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram mekanik Ground Pound Stomp dan pantulan hit-stop",
    "description": "Kategori: Pemrograman Gameplay\nDeskripsi: Mengimplementasikan aksi menukik tombol S saat di udara: kostum hanuman_stomp, kecepatan vertikal dipaksa -20, memantul kembali vy = 10 saat menginjak musuh, jeda hening mikro (hit-stop 0.05s), dan getaran layar kecil (Screen_Shake = 5).\nSpesifikasi Output:\n- Skrip GroundPoundMechanic.sb3\nDefinisi Selesai (DoD):\n- Membedakan tabrakan vertikal menginjak musuh dengan tabrakan samping terkena hit\n\nSpesifikasi Output Fisik:\n• Skrip Mekanik Ground Pound",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Stomp",
      "Hit-Stop"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 18
  },
  {
    "id": "ISSUE-H1-ENG-03",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram sistem kamera scrolling horizontal variabel Scroll_X",
    "description": "Kategori: Pemrograman Kamera & Dunia\nDeskripsi: Mengatur pergeseran panggung Scratch: jika Hanuman_X > 0, Scroll_X bergeser mengikuti kecepatan pemain. Menghitung posisi render klon x = World_X + Scroll_X dan menyembunyikan klon di luar batas layar (X < -260 atau X > 260).\nSpesifikasi Output:\n- Modul Kamera Scrolling Horizontal\nDefinisi Selesai (DoD):\n- Semua objek platform dan musuh bergeser sinkron tanpa subpixel jitter\n\nSpesifikasi Output Fisik:\n• Skrip Kamera Scrolling",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Kamera",
      "Scrolling"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 19
  },
  {
    "id": "ISSUE-H1-ENG-04",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram perilaku AI musuh patroli Yaksha dan Garudani melayang",
    "description": "Kategori: Pemrograman AI Musuh\nDeskripsi: Mengembangkan kecerdasan buatan musuh biasa: Prajurit Yaksha berpatroli bolak-balik 120 px, dan Garudani melayang mengikuti fungsi gelombang sinus vertikal di atas celah awan.\nSpesifikasi Output:\n- Modul Skrip EnemyAI_Level1\nDefinisi Selesai (DoD):\n- Sentuhan samping mengurangi 1 HP dan memicu masa kebal 1 detik\n\nSpesifikasi Output Fisik:\n• Skrip AI Musuh Level 1",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Pemrograman",
      "AI Musuh",
      "Patroli"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 20
  },
  {
    "id": "ISSUE-H1-ENG-05",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram mesin kotak dialog teks efek typewriter tombol E",
    "description": "Kategori: Pemrograman Sistem Narasi\nDeskripsi: Menampilkan balon petunjuk [E] saat mendekati NPC (<35 px). Menekan E mengunci kontrol pemain, menampilkan teks huruf demi huruf (jeda 0.03s) diiringi SFX pop/click, dan tombol Spasi untuk menutup.\nSpesifikasi Output:\n- Modul Skrip TypewriterDialogSystem\nDefinisi Selesai (DoD):\n- Proteksi debounce: menekan E berulang tidak membuat teks bertumpuk\n\nSpesifikasi Output Fisik:\n• Skrip Dialog Typewriter",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Dialog",
      "Typewriter"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 21
  },
  {
    "id": "ISSUE-H1-ENG-06",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram pertarungan Mid-Boss Garudani Raksasa HP 5",
    "description": "Kategori: Pemrograman Bos\nDeskripsi: Mengatur pertarungan akhir Stage 1: kamera terkunci, bos menghembuskan badai sayap mendorong pemain ke kiri tiap 3 detik, lalu menukik rendah. Terkena Stomp mengurangi 1 HP. Kemenangan memicu angin pusaran ke Stage 2.\nSpesifikasi Output:\n- Modul Skrip MidBossGarudani\nDefinisi Selesai (DoD):\n- Bos berkedip merah saat terkena damage dan membuka transisi ke Stage 2\n\nSpesifikasi Output Fisik:\n• Skrip Bos Garudani Raksasa",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Boss",
      "Garudani"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 22
  },
  {
    "id": "ISSUE-H2-AST-01",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat animasi Air Dash, Wind Blast, dan partikel bayangan angin",
    "description": "Kategori: Visual Art Karakter & Partikel\nDeskripsi: Menggambar pose manuver udara:\n- hanuman_air_dash (meluncur horizontal seperti peluru)\n- vfx_air_dash_trail (klon semi-transparan bayangan angin)\n- hanuman_wind_blast (mendorong telapak tangan ke depan)\n- vfx_wind_blast.png (bola pusaran angin berputar 16x16 px)\nSpesifikasi Output:\n- 4 berkas sprite PNG transparan\nDefinisi Selesai (DoD):\n- Partikel trail memberi ilusi kecepatan melesat tinggi\n\nSpesifikasi Output Fisik:\n• 4 aset sprite gerak udara PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Air Dash",
      "Partikel"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 23
  },
  {
    "id": "ISSUE-H2-AST-02",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat background Benteng Swar Lok, gua stalaktit, dan antariksa",
    "description": "Kategori: Latar Lingkungan Stage 2 & 3\nDeskripsi: Menggambar 3 latar panggung baru 480x360 px:\n- bg_stage2_swarlok_palace (istana marmer putih tiang emas khayangan)\n- bg_stage2_swarlok_cave (gua stalaktit awan padat tempat puzzle tuas)\n- bg_stage3_orbit_stars (ruang angkasa gelap berbintang siluet bumi biru)\nSpesifikasi Output:\n- 3 berkas PNG resolusi 480x360 px\nDefinisi Selesai (DoD):\n- Nuansa marmer istana tampak agung dan bintang antariksa berkelap-kelip\n\nSpesifikasi Output Fisik:\n• 3 latar pemandangan PNG (480x360 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Background",
      "Khayangan"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 24
  },
  {
    "id": "ISSUE-H2-AST-03",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat sprite Gandharva pemanah, guard petir, dan meteor panas",
    "description": "Kategori: Musuh & Bahaya Lingkungan\nDeskripsi: Menggambar aset bahaya baru:\n- Prajurit Gandharva Elit pemanah (24x32 px) + panah cahaya Astra\n- Guard Constable Petir (20x40 px)\n- Tiang Petir Vidyut Trishul (hazard_trishul_spark, 16x48 px)\n- Batu Meteor Panas berapi (hazard_meteor_fire, 24x24 px)\nSpesifikasi Output:\n- 5 file sprite PNG transparan\nDefinisi Selesai (DoD):\n- Efek api meteor membara memberi peringatan bahaya tegas\n\nSpesifikasi Output Fisik:\n• 5 sprite musuh dan rintangan PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Musuh",
      "Hazard"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 25
  },
  {
    "id": "ISSUE-H2-AST-04",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat sprite Mid-Boss Panglima Gandharva mahkota perang emas",
    "description": "Kategori: Mid-Boss\nDeskripsi: Mendesain Mid-Boss Stage 2 Panglima Gandharva (48x48 px): kostum berdiri gagah (panglima_idle), animasi teleportasi pudar (panglima_teleport), dan pose rentang busur 3 panah (panglima_spread).\nSpesifikasi Output:\n- 3 berkas PNG resolusi 48x48 px transparan\nDefinisi Selesai (DoD):\n- Efek pudar teleportasi memukau dan arah bidikan selaras koordinat pemain\n\nSpesifikasi Output Fisik:\n• 3 sprite Mid-Boss Gandharva PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Boss",
      "Gandharva"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 26
  },
  {
    "id": "ISSUE-H2-AST-05",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat karakter NPC Resi Khayangan dan Dewa Surya di latar",
    "description": "Kategori: Karakter NPC\nDeskripsi: Menggambar:\n- Resi Khayangan bersila melayang memegang kendi Kamandalu (32x40 px) + portrait wajah (40x40 px)\n- Dewa Surya bersinar keemasan di latar angkasa (80x80 px) berwajah ramah bulat\nSpesifikasi Output:\n- 3 berkas sprite PNG transparan\nDefinisi Selesai (DoD):\n- Dewa Surya tampak seperti mangga raksasa hangat sesuai imajinasi Maruti\n\nSpesifikasi Output Fisik:\n• 3 sprite NPC & Potret PNG",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Aset Visual",
      "NPC",
      "Surya"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 27
  },
  {
    "id": "ISSUE-H2-AST-06",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat props tuas 3 warna, prasasti kuno, dan bar energi HUD",
    "description": "Kategori: Puzzle Props & UI\nDeskripsi: Membuat elemen teka-teki dan HUD:\n- Tuas simpul angin 3 warna: Biru, Merah, Hijau (16x24 px)\n- Prasasti Kuno batu aksara sansekerta (prop_tablet_stone, 24x32 px)\n- Bar Energi Wind Blast biru langit (80x12 px)\nSpesifikasi Output:\n- 5 berkas aset PNG transparan\nDefinisi Selesai (DoD):\n- Warna tuas kontras ramah buta warna dan bilah energi berkurang proporsional\n\nSpesifikasi Output Fisik:\n• 5 aset props dan UI PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "UI/UX",
      "Props",
      "Puzzle"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 28
  },
  {
    "id": "ISSUE-H2-AST-07",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat lagu BGM benteng khayangan dan orbit luar angkasa",
    "description": "Kategori: Musik Latar (BGM)\nDeskripsi: Menggubah 2 lagu MP3 loop:\n- bgm_swarlok_palace.mp3 (lonceng genta kuil & sitar mistis 95 BPM)\n- bgm_orbit_space.mp3 (chiptune synthwave & perkusi tabla cepat 130 BPM)\n- SFX Air Dash (Low Whoosh) dan SFX Wind Blast (Laser2)\nSpesifikasi Output:\n- 2 berkas MP3 stereo dan 2 berkas WAV mono\nDefinisi Selesai (DoD):\n- Musik Stage 3 mengalirkan ketegangan hujan meteor luar angkasa\n\nSpesifikasi Output Fisik:\n• 2 track BGM MP3 & 2 SFX WAV",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Audio",
      "BGM",
      "SFX"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 29
  },
  {
    "id": "ISSUE-H2-ENG-01",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram mekanik Air Dash dengan sub-stepping anti-tembus",
    "description": "Kategori: Pemrograman Fisika & Anti-Glitch\nDeskripsi: Tombol Shift di udara meluncurkan pemain 25 unit/tick selama 6 tick mengabaikan gravitasi. Mencegah tembus dinding marmer tipis dengan loop sub-stepping (5 langkah x 5 px); batalkan dash jika menyentuh platform. Flag is_air_dashed = 1 mencegah spam dash.\nSpesifikasi Output:\n- Modul Skrip SubSteppingAirDash\nDefinisi Selesai (DoD):\n- Karakter tidak pernah menembus pilar marmer benteng tertipis sekalipun\n\nSpesifikasi Output Fisik:\n• Skrip Mekanik Air Dash Anti-Glitch",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Air Dash",
      "Anti-Glitch"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 30
  },
  {
    "id": "ISSUE-H2-ENG-02",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram bar energi dan tembakan proyektil Wind Blast tombol Z",
    "description": "Kategori: Pemrograman Pertarungan\nDeskripsi: Membuka Energy_Bar (maks 100). Tombol Z menguras 25 energi dan meluncurkan klon vfx_wind_blast sejauh 40 tick (kecepatan 12 px/tick, damage 2 HP, dorong musuh 30 px). Regenerasi energi +5/detik saat menyentuh tanah.\nSpesifikasi Output:\n- Modul Skrip WindBlastProjectile\nDefinisi Selesai (DoD):\n- Klon proyektil selalu dihapus (delete this clone) saat membentur target\n\nSpesifikasi Output Fisik:\n• Skrip Proyektil Wind Blast",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Wind Blast",
      "Energi"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 31
  },
  {
    "id": "ISSUE-H2-ENG-03",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram logika teka-teki 3 tuas simpul angin urutan warna",
    "description": "Kategori: Pemrograman Teka-Teki\nDeskripsi: Mengintegrasikan puzzle gua: urutan penarikan tuas benar adalah Biru -> Merah -> Hijau. Benar memicu broadcast [Puzzle_Selesai] dan membuka gerbang arena. Salah urutan mereset tuas dan menyengat kilat 1 HP.\nSpesifikasi Output:\n- Modul Skrip PuzzleTuasAngin\nDefinisi Selesai (DoD):\n- Pintu gerbang emas terbuka dengan pergeseran mulus setelah urutan tepat\n\nSpesifikasi Output Fisik:\n• Skrip Teka-Teki Tuas",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Puzzle",
      "Tuas"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 32
  },
  {
    "id": "ISSUE-H2-ENG-04",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram AI Mid-Boss Panglima Gandharva teleport dan tembakan menyebar",
    "description": "Kategori: Pemrograman Bos\nDeskripsi: Pertarungan bos akhir Stage 2 (HP: 10): berteleportasi acak ke 1 dari 3 platform tiap 3 detik dan menembakkan 3 panah cahaya menyebar (-15 deg, 0 deg, +15 deg). Pemain menghindar dengan Air Dash lalu memukul bos.\nSpesifikasi Output:\n- Modul Skrip BossPanglimaGandharva\nDefinisi Selesai (DoD):\n- Bos tidak teleportasi ke platform yang sama berturut-turut\n\nSpesifikasi Output Fisik:\n• Skrip Bos Panglima Gandharva",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Boss",
      "Teleport"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 33
  },
  {
    "id": "ISSUE-H2-ENG-05",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram generator bahaya hujan meteor angkasa diagonal",
    "description": "Kategori: Pemrograman Rintangan Lingkungan\nDeskripsi: Men-spawn klon meteor api di koordinat X acak atas layar tiap 1.5 - 2.5 detik meluncur diagonal (X: -4, Y: -6). Sentuhan mengenai pemain mengurangi 1 HP. Pemain dapat menembak hancur meteor dengan Wind Blast.\nSpesifikasi Output:\n- Modul Skrip MeteorSpawnerHazard\nDefinisi Selesai (DoD):\n- Seluruh klon meteor terhapus bersih saat menyentuh dasar layar\n\nSpesifikasi Output Fisik:\n• Skrip Hujan Meteor",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Meteor",
      "Hazard"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 34
  },
  {
    "id": "ISSUE-H2-ENG-06",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram sistem checkpoint patung resi dan pencatatan merak",
    "description": "Kategori: Arsitektur Progres & Simpan\nDeskripsi: Menyimpan koordinat Checkpoint_X/Y saat melewati patung resi. Jika HP = 0, broadcast [Respawn_Player] memunculkan kembali pemain dengan 3 HP di checkpoint. Mencatat variabel Merak_Terselamatkan (0..9) dan Prasasti_Count (0..4).\nSpesifikasi Output:\n- Modul Skrip CheckpointAndCollectionManager\nDefinisi Selesai (DoD):\n- Burung merak yang sudah dibebaskan tidak muncul lagi di sangkar saat respawn\n\nSpesifikasi Output Fisik:\n• Skrip Checkpoint & Koleksi",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Checkpoint",
      "Save"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 35
  },
  {
    "id": "ISSUE-H3-AST-01",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat sprite Final Boss Dewa Indra dan Gajah Airavata multi-fase",
    "description": "Kategori: Final Boss\nDeskripsi: Menggambar bos penutup megah:\n- Gajah Airavata berkepala tiga (96x80 px, jalan dan hentak kaki airavata_stomp)\n- Indra menunggangi gajah membidik panah kilat (indra_mounted_aim)\n- Indra melayang di udara mengangkat senjata pusaka Vajra (indra_vajra_cast, 48x56 px)\n- Pose damai tersenyum haru (indra_peace_smile) dan tertegun kalah (indra_defeat)\nSpesifikasi Output:\n- 7 berkas sprite bos format PNG\nDefinisi Selesai (DoD):\n- Pusaka Vajra memiliki animasi kilat berdenyut terang di kedua tangan\n\nSpesifikasi Output Fisik:\n• 7 sprite bos Indra & Airavata PNG",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Boss",
      "Indra"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 36
  },
  {
    "id": "ISSUE-H3-AST-02",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat background arena Gerbang Surya dan pemandangan 3 ending",
    "description": "Kategori: Latar Lingkungan Klimaks & Ending\nDeskripsi: Menggambar panggung penutup 480x360 px:\n- bg_stage4_surya_arena (arena screen-lock matahari merah raksasa hangat)\n- bg_ending_true (sidang kahyangan para dewa memberkahi Maruti gelar Hanuman)\n- bg_ending_dark (langit bumi beku gelap gulita matahari ditelan komikal)\nSpesifikasi Output:\n- 3 berkas PNG resolusi 480x360 px\nDefinisi Selesai (DoD):\n- Ilustrasi epilog mendukung tone narasi masing-masing cabang ending\n\nSpesifikasi Output Fisik:\n• 3 latar panggung klimaks PNG (480x360 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Background",
      "Endings"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 37
  },
  {
    "id": "ISSUE-H3-AST-03",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat sprite buah mangga emas rahasia dan mahkota emas Hanuman",
    "description": "Kategori: Item Rahasia & Hadiah\nDeskripsi: Menggambar:\n- Buah Mangga Emas berkilau binar bintang (item_mango_golden, 18x18 px, 3 buah)\n- Kostum Maruti mengenakan Mahkota Emas Surgawi (hanuman_crown, 32x32 px)\nSpesifikasi Output:\n- 2 berkas PNG transparan\nDefinisi Selesai (DoD):\n- Mahkota emas pas terpasang di atas kepala Maruti pada semua arah gerakan\n\nSpesifikasi Output Fisik:\n• 2 sprite reward PNG",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Mangga Emas",
      "Mahkota"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 38
  },
  {
    "id": "ISSUE-H3-AST-04",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat efek visual telegraph garis merah petir dan bar darah boss",
    "description": "Kategori: VFX & Antarmuka Pertarungan\nDeskripsi: Membuat grafis peringatan bahaya:\n- Garis merah vertikal transparan (vfx_vajra_telegraph, 8x360 px)\n- Kilatan petir raksasa bercabang menyilaukan (vfx_lightning_bolt, 40x360 px)\n- Bingkai dan bar darah tebal merah marun boss Dewa Indra (200x14 px, 20 HP)\nSpesifikasi Output:\n- 3 berkas PNG transparan\nDefinisi Selesai (DoD):\n- Garis merah terlihat jelas 1 detik sebelum petir menyambar panggung\n\nSpesifikasi Output Fisik:\n• 3 aset VFX & UI petir PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "VFX",
      "Petir",
      "Boss UI"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 39
  },
  {
    "id": "ISSUE-H3-AST-05",
    "projectId": "hanuman-sun-chase",
    "title": "Membuat lagu orkestra pertarungan Dewa Indra dan tema kemenangan",
    "description": "Kategori: Musik Latar (BGM)\nDeskripsi: Menggubah soundtrack klimaks:\n- bgm_boss_indra_battle.mp3 (genderang perang tabla kolosal & riff sitar 145 BPM)\n- bgm_ending_triumph.mp3 (suling bansuri lapang & orkestra dawai agung)\n- sfx_lightning_strike.wav (sambaran kilat halilintar menggelegar dahsyat)\nSpesifikasi Output:\n- 2 berkas MP3 stereo dan 1 berkas WAV mono\nDefinisi Selesai (DoD):\n- Musik memacu adrenalin tinggi tanpa menutupi isyarat audio gameplay\n\nSpesifikasi Output Fisik:\n• 2 track musik BGM MP3 & 1 SFX WAV",
    "status": "backlog",
    "priority": "high",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "Audio",
      "BGM",
      "Orkestra"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 40
  },
  {
    "id": "ISSUE-H3-ENG-01",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram kunci kamera panggung arena Gerbang Surya screen-lock",
    "description": "Kategori: Pemrograman Kamera Panggung\nDeskripsi: Mengunci Scroll_X = 0 permanen saat memasuki arena Stage 4. Mengunci batas gerak Hanuman di dalam koordinat layar X: -220 s/d +220 dan Y: -160 s/d +160, serta memunculkan bar HP bos Dewa Indra di bawah layar.\nSpesifikasi Output:\n- Modul Skrip ScreenLockArena\nDefinisi Selesai (DoD):\n- Layar tidak lagi bergeser horizontal saat karakter bergerak\n\nSpesifikasi Output Fisik:\n• Skrip Screen-Lock Arena",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Kamera",
      "Arena"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 41
  },
  {
    "id": "ISSUE-H3-ENG-02",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram logika pertarungan 2 fase boss Dewa Indra dan Airavata",
    "description": "Kategori: Pemrograman Bos Multi-Fase\nDeskripsi:\n- Fase 1 (HP 20->10): Gajah Airavata menghentak tanah gempa (Screen_Shake 10) dan Indra memanah kilat; pemain Stomp kepala gajah.\n- Fase 2 (HP 10->0): Gajah mundur, Indra melayang mengangkat pusaka Vajra meluncurkan sambaran petir; pemain serang dengan Wind Blast (Z).\nSpesifikasi Output:\n- Modul Skrip BossIndraMultiPhase\nDefinisi Selesai (DoD):\n- Transisi fase berjalan mulus disertai dialog pergantian taktik\n\nSpesifikasi Output Fisik:\n• Skrip Bos Indra Multi-Fase",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Boss",
      "Fase"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 42
  },
  {
    "id": "ISSUE-H3-ENG-03",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram telegraph garis merah 1 detik dan sambaran kilat Vajra",
    "description": "Kategori: Pemrograman Serangan Bos\nDeskripsi: Mendeteksi koordinat X pemain dan menempatkan klon vfx_vajra_telegraph selama 1 detik (merah transparan). Tepat 1 detik berikutnya, sambarkan klon vfx_lightning_bolt selebar 40 px, putar suara petir, getarkan layar nilai 12, dan kurangi 2 HP jika terkena.\nSpesifikasi Output:\n- Modul Skrip VajraLightningStrike\nDefinisi Selesai (DoD):\n- Pemain yang gesit melakukan Air Dash selalu memiliki waktu cukup meloloskan diri\n\nSpesifikasi Output Fisik:\n• Skrip Sambaran Kilat Vajra",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Petir",
      "Telegraph"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 43
  },
  {
    "id": "ISSUE-H3-ENG-04",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram sistem evaluasi syarat dan pemicu 3 percabangan ending",
    "description": "Kategori: Logika Cerita & Ending\nDeskripsi: Mengeksekusi penentuan 3 cabang akhir cerita:\n- True Ending: Kalahkan Indra hingga HP = 0 normal (penganugerahan nama Hanuman).\n- Secret Ending: Tidak serang Indra 30 detik, kumpulkan 3 Mangga Emas, dekati dan tekan E (pelukan damai).\n- Bad Ending: Setelah kalahkan Indra, melompati ke latar dan menyentuh matahari (matahari tertelan).\nSpesifikasi Output:\n- Modul Skrip EndingProgressionTrigger\nDefinisi Selesai (DoD):\n- Ketiga ending dapat dicapai konsisten berdasarkan pemenuhan syarat tepat\n\nSpesifikasi Output Fisik:\n• Skrip Evaluasi 3 Ending",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Ending",
      "Ramayana"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 44
  },
  {
    "id": "ISSUE-H3-ENG-05",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram efek kepuasan bermain screen shake dinamis dan hit-stop",
    "description": "Kategori: Game Feel & Polish\nDeskripsi: Menerapkan sentuhan kepuasan bermain: variabel global Screen_Shake mengacak posisi backdrop dan berkurang -1 per frame; jeda mikro freeze frame wait 0.05s saat serangan kena musuh; serta partikel bulu emas berhamburan saat merak bebas.\nSpesifikasi Output:\n- Modul Skrip GameFeelPolish\nDefinisi Selesai (DoD):\n- Guncangan layar tidak membuat posisi backdrop bergeser permanen dari X:0, Y:0\n\nSpesifikasi Output Fisik:\n• Skrip Game Feel & Polish",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Juice",
      "Screen Shake"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 45
  },
  {
    "id": "ISSUE-H3-ENG-06",
    "projectId": "hanuman-sun-chase",
    "title": "Memprogram mode ekstra Sun Rush time attack 3 menit dan kostum mahkota",
    "description": "Kategori: Fitur Ekstra & Unlockables\nDeskripsi: Membuka mode Sun Rush di menu utama setelah menamatkan permainan: melintasi Stage 1-3 dalam batas 3 menit (mangga menambah +3 detik). Membebaskan 9 burung merak membuka opsi kostum Mahkota Emas Surgawi di layar judul.\nSpesifikasi Output:\n- Modul Skrip SunRushAndTimeAttack\nDefinisi Selesai (DoD):\n- Countdown timer bekerja akurat dan pemilihan kostum tersimpan sepanjang sesi\n\nSpesifikasi Output Fisik:\n• Skrip Mode Sun Rush & Mahkota",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Time Attack",
      "Mahkota"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 46
  },
  {
    "id": "ISSUE-H3-ENG-07",
    "projectId": "hanuman-sun-chase",
    "title": "Melakukan audit batas 300 klon Scratch, pengujian QA dan ekspor sb3",
    "description": "Kategori: Penjaminan Kualitas (QA) & Rilis\nDeskripsi: Audit performa: memastikan tidak ada kebocoran klon yang melampaui batas 300 klon Scratch selama hujan meteor atau sambaran petir, validasi 27 variabel dan 15 broadcast message, pengujian di Turbowarp 30 & 60 FPS, dan ekspor paket rilis Hanuman_Sun_Chase_Release.sb3.\nSpesifikasi Output:\n- Berkas build final produksi Hanuman_Sun_Chase_Release.sb3 & Laporan QA\nDefinisi Selesai (DoD):\n- Game dapat dimainkan dari Prologue hingga 3 ending tanpa crash atau penurunan FPS\n\nSpesifikasi Output Fisik:\n• Paket Rilis Final Hanuman_Sun_Chase.sb3",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Fadhil Widjaan Al Faruuq",
    "dueDate": "2026-11-15",
    "tags": [
      "Level 3",
      "QA",
      "Rilis",
      "Scratch"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 47
  }
];

export const ALL_BREACH_TASKS: Task[] = [
  {
    "id": "ISSUE-B1-AST-01",
    "projectId": "the-last-breach",
    "title": "Membuat potret karakter Rian ekspresi cemas dan tersenyum lega",
    "description": "Kategori: Karakter & Potret Wajah\nDeskripsi: Menggambar potret wajah rekan programmer Rian ukuran 48x48 piksel dengan kacamata dan kaus hitam dalam 2 ekspresi:\n1. rian_stressed.png (wajah pusing dan cemas menatap layar monitor)\n2. rian_hopeful.png (tersenyum lega saat peretasan berhasil)\nSpesifikasi Output:\n- 2 berkas PNG 48x48 piksel transparan\nDefinisi Selesai (DoD):\n- Pas diletakkan di jendela dialog terminal sebelah kiri panggung\n\nSpesifikasi Output Fisik:\n• rian_stressed.png, rian_hopeful.png (48x48 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Potret",
      "Rian"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 1
  },
  {
    "id": "ISSUE-B1-AST-02",
    "projectId": "the-last-breach",
    "title": "Membuat panel kotak dialog terminal konsol hijau posfor retro",
    "description": "Kategori: Antarmuka UI (Dialog)\nDeskripsi: Mendesain kotak dialog bawah panggung bergaya konsol hacker hitam bergaris hijau posfor (#00FF66) semi-transparan untuk percakapan cerita.\nSpesifikasi Output:\n- ui_dialog_box.png (440x80 px, PNG transparan)\nDefinisi Selesai (DoD):\n- Menggunakan tipografi piksel kontras tinggi dan terbaca jelas di layar Scratch\n\nSpesifikasi Output Fisik:\n• ui_dialog_box.png (440x80 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "UI/UX",
      "Dialog",
      "Terminal"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 2
  },
  {
    "id": "ISSUE-B1-AST-03",
    "projectId": "the-last-breach",
    "title": "Membuat background kamar Rian temaram malam hari",
    "description": "Kategori: Latar Lingkungan (Background)\nDeskripsi: Menggambar latar kamar sempit temaram malam hari: meja komputer berserakan kabel, tumpukan buku koding, dan pendaran cahaya monitor menyinari dinding kamar.\nSpesifikasi Output:\n- bg_room_rian_night.png (480x360 px, PNG)\nDefinisi Selesai (DoD):\n- Resolusi pas 480x360 px native Scratch tanpa blur artefak\n\nSpesifikasi Output Fisik:\n• bg_room_rian_night.png (480x360 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Background",
      "Kamar Rian"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 3
  },
  {
    "id": "ISSUE-B1-AST-04",
    "projectId": "the-last-breach",
    "title": "Membuat background layar monitor konsol terminal peretasan",
    "description": "Kategori: Latar Lingkungan Minigame\nDeskripsi: Menggambar antarmuka layar monitor hacker gelap bergaris scanline retro tipis dengan palet hitam (#0D1117) dan teks matrix hijau pudar.\nSpesifikasi Output:\n- bg_terminal_console.png (480x360 px, PNG)\nDefinisi Selesai (DoD):\n- Menyisakan ruang bersih di tengah untuk penempatan rute labirin dan teks kode\n\nSpesifikasi Output Fisik:\n• bg_terminal_console.png (480x360 px, PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Background",
      "Konsol Hacking"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 4
  },
  {
    "id": "ISSUE-B1-AST-05",
    "projectId": "the-last-breach",
    "title": "Membuat aset labirin firewall pointer node dan core target cyan",
    "description": "Kategori: Aset Minigame 1\nDeskripsi: Membuat elemen grafis labirin data firewall:\n- maze_pointer_node.png (kotak piksel hijau neon bersinar, 8x8 px)\n- maze_core_target.png (lingkaran cyan berdenyut inti server, 12x12 px)\n- Aset dinding sensor laser merah pekat (#FF0033) 3 tingkat kesulitan\nSpesifikasi Output:\n- 3 berkas aset PNG transparan\nDefinisi Selesai (DoD):\n- Nilai warna dinding laser konsisten pada #FF0033 untuk deteksi sensor Scratch\n\nSpesifikasi Output Fisik:\n• maze_pointer_node.png, maze_core_target.png & laser walls (PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Minigame",
      "Firewall Maze"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 5
  },
  {
    "id": "ISSUE-B1-AST-06",
    "projectId": "the-last-breach",
    "title": "Membuat wadah dekriptor dan sprite kata valid serta kata sampah",
    "description": "Kategori: Aset Minigame 2 (Packet Filter)\nDeskripsi: Menggambar elemen game penangkap paket jatuh:\n- catcher_basket_decrypter.png (wadah terminal digital berlampu hijau, 48x16 px)\n- 6 Sprite kata valid hijau: FIREWALL, PORT, DECRYPT, INJECT, BYPASS, KERNEL (32x12 px)\n- 5 Sprite kata sampah merah: KUCING, MEJA, LIBURAN, GOSIP, SEPATU (32x12 px)\nSpesifikasi Output:\n- 12 berkas sprite PNG transparan\nDefinisi Selesai (DoD):\n- Teks kata terbaca sangat jelas saat meluncur jatuh di layar\n\nSpesifikasi Output Fisik:\n• 12 sprite wadah & kata paket filter (PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Minigame",
      "Packet Filter"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 6
  },
  {
    "id": "ISSUE-B1-AST-07",
    "projectId": "the-last-breach",
    "title": "Mendesain tombol klik pilihan interaktif Bantu vs Cari Flashdisk",
    "description": "Kategori: Desain Tombol UI\nDeskripsi: Membuat gambar tombol klik di layar panggung:\n- btn_choice_bantu.png (BANTU SEKARANG - Hijau Posfor, 140x32 px)\n- btn_choice_tolak.png (CARI FLASHDISK - Abu-abu Metalik, 140x32 px)\n- btn_choice_shalat.png (SHALAT DULU - Emas Hangat, 130x30 px)\n- btn_choice_lanjut.png (TERUSKAN KODING - Merah Peringatan, 130x30 px)\nSpesifikasi Output:\n- 4 berkas tombol PNG (masing-masing wujud normal & hover)\nDefinisi Selesai (DoD):\n- Memiliki efek hover saat kursor mouse menyentuh tombol\n\nSpesifikasi Output Fisik:\n• 4 set tombol pilihan interaktif PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "UI/UX",
      "Tombol",
      "Pilihan"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 7
  },
  {
    "id": "ISSUE-B1-AST-08",
    "projectId": "the-last-breach",
    "title": "Memproduksi audio sfx ketikan keyboard, alarm maze, dan paket catcher",
    "description": "Kategori: Efek Suara (SFX)\nDeskripsi: Memproduksi efek audio terminal retro:\n- sfx_keyboard_click.wav (ketikan tuts keyboard nada acak, 0.05s)\n- sfx_alarm_buzz.wav (dengungan alarm dinding laser menyengat, 0.2s)\n- sfx_packet_valid.wav (denting koin paket valid terserap, 0.15s)\n- sfx_packet_junk.wav (bunyi bonk salah tangkap paket sampah, 0.2s)\nSpesifikasi Output:\n- 4 file WAV mono (22.050 Hz, 16-bit)\nDefinisi Selesai (DoD):\n- Volume dinormalisasi -3 dBFS tanpa letupan audio\n\nSpesifikasi Output Fisik:\n• 4 efek suara terminal WAV",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Audio",
      "SFX",
      "Terminal"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 8
  },
  {
    "id": "ISSUE-B1-AST-09",
    "projectId": "the-last-breach",
    "title": "Membuat lagu BGM kamar hacker dan fokus minigame",
    "description": "Kategori: Musik Latar (BGM)\nDeskripsi: Menggubah 2 lagu MP3 loop:\n- bgm_hacker_room.mp3 (chiptune lo-fi ambient tempo santai 80 BPM)\n- bgm_minigame_focus.mp3 (elektronik ritmis penambah konsentrasi 105 BPM)\nSpesifikasi Output:\n- 2 berkas MP3 stereo 128 kbps (durasi ~2 menit loop)\nDefinisi Selesai (DoD):\n- Melakukan perulangan mulus tanpa jeda hening\n\nSpesifikasi Output Fisik:\n• 2 track musik BGM MP3",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Audio",
      "BGM",
      "Musik"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 9
  },
  {
    "id": "ISSUE-B1-ENG-01",
    "projectId": "the-last-breach",
    "title": "Memprogram mesin percabangan dialog Babak 1 Jalur A vs Jalur B",
    "description": "Kategori: Pemrograman Narasi FSM\nDeskripsi: Menampilkan animasi Rian frustrasi dan dialog pembuka. Memunculkan 2 tombol pilihan klik: menekan BANTU SEKARANG memicu broadcast Start_Jalur_A (Pilihan_Awal = 1), menekan CARI FLASHDISK memicu broadcast Start_Jalur_B (Pilihan_Awal = 3).\nSpesifikasi Output:\n- Modul Skrip NarrativeBranchingBabak1\nDefinisi Selesai (DoD):\n- Tombol pilihan langsung merespons klik mouse tanpa jeda lag dan otomatis sembunyi\n\nSpesifikasi Output Fisik:\n• Skrip FSM Percabangan Babak 1",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Pemrograman",
      "FSM",
      "Percabangan"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 10
  },
  {
    "id": "ISSUE-B1-ENG-02",
    "projectId": "the-last-breach",
    "title": "Memprogram mekanik Minigame 1 Data Firewall Maze sensor laser",
    "description": "Kategori: Pemrograman Minigame\nDeskripsi: Kursor node hijau menempel pada mouse-pointer. Jika menyentuh warna merah laser #FF0033: putar alarm, reset posisi ke titik start, dan tambah Maze_Fail_Count. Jika menyentuh target node cyan: putar nada sukses dan lanjut ke level labirin berikutnya (Level 1->2->3).\nSpesifikasi Output:\n- Modul Skrip FirewallMazeMinigame\nDefinisi Selesai (DoD):\n- Kursor tidak bisa menembus dinding laser; mengangkat mouse keluar panggung mereset ke start\n\nSpesifikasi Output Fisik:\n• Skrip Minigame Labirin Firewall",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Minigame",
      "Maze"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 11
  },
  {
    "id": "ISSUE-B1-ENG-03",
    "projectId": "the-last-breach",
    "title": "Memprogram mekanik Minigame 2 Packet Filter Catcher timer 30 detik",
    "description": "Kategori: Pemrograman Minigame & Klon\nDeskripsi: Wadah bergerak di dasar panggung (A/D atau Panah). Spawner men-spawn klon kata acak tiap 1.2 detik dari atas. Menangkap kata valid +10 poin, kata sampah -15 poin. Batas waktu 30 detik: skor >= 60 lolos. Setiap klon wajib mengeksekusi delete this clone saat menyentuh dasar layar.\nSpesifikasi Output:\n- Modul Skrip PacketFilterCatcherGame\nDefinisi Selesai (DoD):\n- Jumlah klon aktif di panggung stabil di bawah 10 klon (bebas kebocoran memori)\n\nSpesifikasi Output Fisik:\n• Skrip Minigame Packet Filter",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Minigame",
      "Catcher"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 12
  },
  {
    "id": "ISSUE-B1-ENG-04",
    "projectId": "the-last-breach",
    "title": "Memprogram konsol terminal input kata sandi 8 karakter case-insensitive",
    "description": "Kategori: Pemrograman Logika Terminal\nDeskripsi: Menampilkan petunjuk 8 huruf hijau terang di antara teks log acak (S-E-C-U-R-I-T-Y). Mengaktifkan input ask [ENTER SECURITY KEY:] and wait. Verifikasi jawaban bersifat case-insensitive; jika salah tambah Salah_Counter. Jika salah > 3 kali memicu broadcast Hacking_Failed.\nSpesifikasi Output:\n- Modul Skrip PasswordCrackingTerminal\nDefinisi Selesai (DoD):\n- Input huruf besar maupun kecil divalidasi tepat dan sisa kesempatan tampil visual\n\nSpesifikasi Output Fisik:\n• Skrip Terminal Input Password",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Terminal",
      "Password"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 13
  },
  {
    "id": "ISSUE-B1-ENG-05",
    "projectId": "the-last-breach",
    "title": "Memprogram interupsi event azan dalam kamar dan status ibadah",
    "description": "Kategori: Pemrograman Momen Moral\nDeskripsi: Di antara level 2 dan 3, sistem memutar audio azan syahdu dan menampilkan tombol pilihan SHALAT DULU vs TERUSKAN KODING. Memilih shalat mencatat Status_Ibadah = SHALAT dengan jeda damai 3 detik; memilih lanjut mencatat Status_Ibadah = ABAIKAN.\nSpesifikasi Output:\n- Modul Skrip EventAzanIndoor\nDefinisi Selesai (DoD):\n- Variabel status tersimpan akurat untuk penentuan ending spiritual\n\nSpesifikasi Output Fisik:\n• Skrip Event Azan Kamar",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Moral",
      "Azan"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 14
  },
  {
    "id": "ISSUE-B2-AST-01",
    "projectId": "the-last-breach",
    "title": "Membuat potret karakter NPC Pak Joko dan Mbak Siti",
    "description": "Kategori: Karakter NPC & Potret\nDeskripsi: Menggambar potret warga perkampungan 48x48 piksel:\n1. Pak Joko: Kakek tua berkopiah hitam membawa sajadah kecil mencari masjid (joko_confused.png)\n2. Mbak Siti: Mahasiswi berkerudung membawa ransel mencari gudang komputer (siti_lost.png)\nSpesifikasi Output:\n- 2 berkas PNG 48x48 piksel transparan\nDefinisi Selesai (DoD):\n- Gaya visual konsisten dengan potret Rian dan pas di jendela dialog\n\nSpesifikasi Output Fisik:\n• joko_confused.png, siti_lost.png (48x48 px, PNG)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 2",
      "Aset Visual",
      "NPC",
      "Potret"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 15
  },
  {
    "id": "ISSUE-B2-AST-02",
    "projectId": "the-last-breach",
    "title": "Membuat background jalan perkampungan malam dan interior gudang tua",
    "description": "Kategori: Latar Lingkungan Jalur B\nDeskripsi: Menggambar 2 latar panggung 480x360 piksel:\n1. bg_street_night.png (gang perkampungan malam sunyi disinari lampu jalan kuning hangat)\n2. bg_warehouse_interior.png (gudang komputer tua berdebu, meja kayu tempat dua flashdisk)\nSpesifikasi Output:\n- 2 berkas PNG 480x360 piksel\nDefinisi Selesai (DoD):\n- Latar jalan malam menghadirkan atmosfer lokal perkampungan Indonesia yang autentik\n\nSpesifikasi Output Fisik:\n• bg_street_night.png, bg_warehouse_interior.png (PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Background",
      "Jalur B"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 16
  },
  {
    "id": "ISSUE-B2-AST-03",
    "projectId": "the-last-breach",
    "title": "Membuat sprite 2 flashdisk USB metalik yang tampak 100% identik",
    "description": "Kategori: Objek Interaktif (Props)\nDeskripsi: Menggambar dua flashdisk USB metalik abu-abu dengan lampu indikator biru kecil:\n- prop_flashdisk_1.png (24x16 px)\n- prop_flashdisk_2.png (24x16 px)\nSpesifikasi Output:\n- 2 berkas PNG transparan\nDefinisi Selesai (DoD):\n- Bentuk dan visual kedua flashdisk 100% identik menguji intuisi/keberuntungan pemain\n\nSpesifikasi Output Fisik:\n• prop_flashdisk_1.png, prop_flashdisk_2.png (24x16 px)",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Props",
      "Flashdisk"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 17
  },
  {
    "id": "ISSUE-B2-AST-04",
    "projectId": "the-last-breach",
    "title": "Membuat panel hitung mundur 30 detik dan simbol heksadesimal darurat",
    "description": "Kategori: Aset Minigame Darurat\nDeskripsi: Menyiapkan elemen darurat Status FD 2:\n- ui_timer_box.png (kotak hitung mundur merah menyala, 90x24 px)\n- Sprite deretan simbol heksadesimal (0x4F, 0xA9, 0xFF, dll) untuk petunjuk kode 12 dan 16 karakter\nSpesifikasi Output:\n- 3 berkas aset PNG transparan\nDefinisi Selesai (DoD):\n- Menghadirkan kesan alarm krisis dan kegagalan sistem komputer\n\nSpesifikasi Output Fisik:\n• ui_timer_box.png & sprite simbol hex (PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 2",
      "UI/UX",
      "Timer",
      "Darurat"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 18
  },
  {
    "id": "ISSUE-B2-AST-05",
    "projectId": "the-last-breach",
    "title": "Membuat rekaman suara azan bergema dan lagu BGM emergency trace",
    "description": "Kategori: Audio Engineering\nDeskripsi: Memproduksi audio atmosferik Jalur B:\n- sfx_azan_echo.mp3 (panggilan azan syahdu dengan sedikit gema malam, 5.0 detik)\n- bgm_emergency_trace.mp3 (synthwave cepat tempo 135 BPM berpadu detak jam panik)\nSpesifikasi Output:\n- 1 berkas SFX MP3 dan 1 berkas BGM MP3\nDefinisi Selesai (DoD):\n- BGM darurat memompa ketegangan detak jantung saat berpacu melawan timer 30 detik\n\nSpesifikasi Output Fisik:\n• sfx_azan_echo.mp3 & bgm_emergency_trace.mp3",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 2",
      "Audio",
      "Azan",
      "BGM Darurat"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 19
  },
  {
    "id": "ISSUE-B2-ENG-01",
    "projectId": "the-last-breach",
    "title": "Memprogram percakapan jalanan Pak Joko, Siti, dan akumulasi poin moral",
    "description": "Kategori: Pemrograman Dialog & Moral\nDeskripsi: Mengatur interaksi di jalan perkampungan:\n- Pak Joko: Kasih tahu arah kanan (+1 Poin_Moral), abaikan (0 poin).\n- Mbak Siti: Kasih tahu arah lurus (+1 Poin_Moral), abaikan/sesatkan (-1 poin).\n- Azan Jalanan: Mampir shalat (Status_Ibadah = SHALAT), lanjut jalan (Status_Ibadah = ABAIKAN).\nSpesifikasi Output:\n- Modul Skrip OutdoorMoralQuest\nDefinisi Selesai (DoD):\n- Pilihan terekam presisi pada variabel Poin_Moral (skala 0 s/d 2)\n\nSpesifikasi Output Fisik:\n• Skrip Petualangan Moral Luar Ruangan",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Moral",
      "Quest"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 20
  },
  {
    "id": "ISSUE-B2-ENG-02",
    "projectId": "the-last-breach",
    "title": "Memprogram generator undian probabilitas flashdisk FD 1 vs FD 2",
    "description": "Kategori: Pemrograman Logika Probabilitas\nDeskripsi: Menentukan status flashdisk saat diklik di meja gudang:\n- Flashdisk 1: dadu 1-10 (dadu=1 -> Status_FD=2 rusak peluang 10%, dadu 2-10 -> Status_FD=1 mulus peluang 90%).\n- Flashdisk 2: dadu 1-30 (dadu=1 -> Status_FD=1 mulus peluang 3.3%, dadu 2-30 -> Status_FD=2 rusak peluang 96.7%).\nSpesifikasi Output:\n- Modul Skrip FlashdiskRNGProbability\nDefinisi Selesai (DoD):\n- Rumus matematika Scratch terverifikasi bekerja sesuai formula spesifikasi\n\nSpesifikasi Output Fisik:\n• Skrip Undian Probabilitas Flashdisk",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 2",
      "Pemrograman",
      "RNG",
      "Probabilitas"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 21
  },
  {
    "id": "ISSUE-B2-ENG-03",
    "projectId": "the-last-breach",
    "title": "Memprogram logika flashdisk mulus FD 1 2x password 4 karakter",
    "description": "Kategori: Pemrograman Alur Hacking Cepat\nDeskripsi: Jika Status_FD = 1: eksekusi dekripsi otomatis berjalan mulus. Pemain hanya diminta memecahkan 2 kali tebakan password 4 karakter berturut-turut dengan toleransi gabungan maksimal 4 kali salah input. Lolos langsung mengunci Ending Biasa: Smooth Operation.\nSpesifikasi Output:\n- Modul Skrip SmoothOperationHacking\nDefinisi Selesai (DoD):\n- Validasi password 4 karakter berjalan mulus tanpa lag\n\nSpesifikasi Output Fisik:\n• Skrip Dekripsi Flashdisk Mulus",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Flashdisk",
      "Mulus"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 22
  },
  {
    "id": "ISSUE-B2-ENG-04",
    "projectId": "the-last-breach",
    "title": "Memprogram labirin darurat timer 30 detik saat status flashdisk rusak",
    "description": "Kategori: Pemrograman Skenario Krisis\nDeskripsi: Jika Status_FD = 2: komputer berkedip merah dan memutar BGM darurat. Hitung mundur Timer_Countdown = 30 berjalan. Pemain harus menyelesaikan Emergency Trace Maze sebelum waktu habis. Jika waktu 0 sebelum finish -> panggil broadcast Hacking_Failed.\nSpesifikasi Output:\n- Modul Skrip EmergencyTraceTimerMaze\nDefinisi Selesai (DoD):\n- Timer 30 detik berkurang 1 per detik secara akurat tanpa terpengaruh lag tampilan\n\nSpesifikasi Output Fisik:\n• Skrip Labirin Darurat 30 Detik",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Timer",
      "Krisis"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 23
  },
  {
    "id": "ISSUE-B2-ENG-05",
    "projectId": "the-last-breach",
    "title": "Memprogram minigame puncak dekripsi kode 12 dan 16 karakter",
    "description": "Kategori: Pemrograman Tantangan Ekstrem\nDeskripsi: Menangani kelanjutan Status FD 2 setelah lolos labirin:\n- Level 2: Menebak password 12 karakter berdasarkan 3 kelompok simbol heksadesimal (maksimal 2x salah).\n- Level 3: Core Terminal Override menebak password 16 karakter (maksimal 2x salah).\n- Lolos mengunci Ending Biasa: Hard-Earned Victory. Gagal mengunci Critical Failure.\nSpesifikasi Output:\n- Modul Skrip CorruptedHashDecryption\nDefinisi Selesai (DoD):\n- Petunjuk simbol di layar logis dan toleransi 2x salah ditegakkan ketat\n\nSpesifikasi Output Fisik:\n• Skrip Kode 12 & 16 Karakter",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Hacking",
      "Override"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 24
  },
  {
    "id": "ISSUE-B3-AST-01",
    "projectId": "the-last-breach",
    "title": "Membuat 4 background sinematik epilog penutup ending",
    "description": "Kategori: Latar Lingkungan Ending\nDeskripsi: Menggambar 4 latar layar penutup 480x360 piksel:\n1. bg_ending_legendary.png (teks hijau SCAM OPERATION SHUTDOWN, Rian tersenyum)\n2. bg_ending_lockdown.png (layar merah SYSTEM COMPROMISED, Rian lemas)\n3. bg_ending_harmony.png (jendela terbuka menatap menara masjid berselimut fajar)\n4. bg_ending_lost_signal.png (ruangan gelap gulita menatap layar kosong hampa)\nSpesifikasi Output:\n- 4 berkas PNG 480x360 piksel\nDefinisi Selesai (DoD):\n- Ilustrasi epilog mendukung tone narasi teknis dan spiritual secara kuat\n\nSpesifikasi Output Fisik:\n• 4 background epilog ending PNG (480x360 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Background",
      "Endings"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 25
  },
  {
    "id": "ISSUE-B3-AST-02",
    "projectId": "the-last-breach",
    "title": "Mendesain panel kartu rekapitulasi status akhir dual ending",
    "description": "Kategori: UI/UX Design (Ending Screen)\nDeskripsi: Mendesain kartu rekapitulasi penutup:\n- Lencana Hasil Misi Operasi Siber (Legendary Duo / Narrow Escape / Smooth Op / Hard-Earned / Lockdown)\n- Lencana Hasil Evaluasi Spiritual (True Harmony / Hypocrite Hacker / The Lost Signal)\n- Tombol [MAIN LAGI] untuk mengulang rute\nSpesifikasi Output:\n- ui_ending_card.png & btn_restart.png\nDefinisi Selesai (DoD):\n- Hasil evaluasi ganda tampil harmonis dan mudah dipahami\n\nSpesifikasi Output Fisik:\n• ui_ending_card.png & btn_restart.png (PNG)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 3",
      "UI/UX",
      "Ending Card",
      "Rekap"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 26
  },
  {
    "id": "ISSUE-B3-AST-03",
    "projectId": "the-last-breach",
    "title": "Membuat audio sfx akses diterima, akses ditolak, dan BGM refleksi",
    "description": "Kategori: Audio Engineering\nDeskripsi: Merampungkan audio epilog:\n- sfx_terminal_access_granted.wav (nada kemenangan merdu, 0.4s)\n- sfx_terminal_access_denied.wav (nada peringatan berat akses ditolak, 0.4s)\n- bgm_ending_reflection.mp3 (melodi piano kontemplatif menyentuh hati)\nSpesifikasi Output:\n- 2 berkas SFX WAV dan 1 berkas BGM MP3\nDefinisi Selesai (DoD):\n- Musik penutup memberi ruang emosional merenungi pesan moral game\n\nSpesifikasi Output Fisik:\n• 2 SFX WAV & bgm_ending_reflection.mp3",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 3",
      "Audio",
      "BGM",
      "Refleksi"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 27
  },
  {
    "id": "ISSUE-B3-ENG-01",
    "projectId": "the-last-breach",
    "title": "Memprogram evaluasi matriks 3 ending spiritual tanpa dadu acak",
    "description": "Kategori: Pemrograman Logika Cerita\nDeskripsi: Mengevaluasi keputusan moral pemain secara deterministik:\n- SP-01 (True Harmony): Status_Ibadah = SHALAT dan Poin_Moral >= 2.\n- SP-02 (Hypocrite Hacker): Status_Ibadah = SHALAT tetapi Poin_Moral <= 0 (mengabaikan warga).\n- SP-03 (The Lost Signal): Status_Ibadah = ABAIKAN di semua kesempatan.\nSpesifikasi Output:\n- Modul Skrip SpiritualEndingEvaluator\nDefinisi Selesai (DoD):\n- Bebas dadu acak; pemain memegang kendali penuh atas takdir moralnya\n\nSpesifikasi Output Fisik:\n• Skrip Evaluasi Ending Spiritual",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Ending",
      "Spiritual"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 28
  },
  {
    "id": "ISSUE-B3-ENG-02",
    "projectId": "the-last-breach",
    "title": "Memprogram evaluasi matriks 5 ending misi operasi hacking",
    "description": "Kategori: Pemrograman Progres Misi\nDeskripsi: Menguji kualifikasi teknis peretasan:\n- OP-01 (Legendary Duo): Jalur A lolos semua minigame dengan Salah_Counter <= 1.\n- OP-02 (Narrow Escape): Jalur A lolos dengan Salah_Counter 2 atau 3.\n- OP-03 (Smooth Operation): Jalur B lolos dengan Status_FD = 1.\n- OP-04 (Hard-Earned Victory): Jalur B lolos dengan Status_FD = 2 (labirin 30s + kode 12/16).\n- OP-05 (System Lockdown): Gagal di Level 5 Jalur A (Salah > 3) atau waktu habis di labirin FD 2.\nSpesifikasi Output:\n- Modul Skrip OperationalEndingEvaluator\nDefinisi Selesai (DoD):\n- Menetapkan variabel Ending_Operasi_ID secara presisi\n\nSpesifikasi Output Fisik:\n• Skrip Evaluasi Ending Operasi",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Ending",
      "Hacking"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 29
  },
  {
    "id": "ISSUE-B3-ENG-03",
    "projectId": "the-last-breach",
    "title": "Memprogram integrasi layar sinematik rekapitulasi ending ganda",
    "description": "Kategori: Pemrograman Antarmuka Akhir\nDeskripsi: Menggabungkan hasil kedua kategori ending: memanggil broadcast Show_Ending_Screen, memasang backdrop sesuai Ending_Operasi_ID, dan menyajikan narasi epilog terpadu yang memadukan capaian teknis serta nilai moral spiritual.\nSpesifikasi Output:\n- Modul Skrip DualEndingScreenPresentation\nDefinisi Selesai (DoD):\n- Kombinasi ending ganda menghasilkan narasi penutup yang saling melengkapi\n\nSpesifikasi Output Fisik:\n• Skrip Presentasi Dual Ending",
    "status": "backlog",
    "priority": "high",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 3",
      "Pemrograman",
      "UI",
      "Dual Ending"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 30
  },
  {
    "id": "ISSUE-B3-ENG-04",
    "projectId": "the-last-breach",
    "title": "Menerapkan pemolesan visual kursor teks kedip dan screen shake",
    "description": "Kategori: Polish & Game Feel\nDeskripsi: Menghadirkan atmosfer siber autentik: kursor teks terminal berkedip (_) saat menunggu input, guncangan layar (Screen Shake) kecil saat alarm terinjak atau salah ketik password, serta jeda ketukan typewriter huruf demi huruf pada setiap percakapan.\nSpesifikasi Output:\n- Modul Skrip CyberGameFeelAndJuice\nDefinisi Selesai (DoD):\n- Layar terasa hidup seperti terminal monitor nyata tanpa menyilaukan mata\n\nSpesifikasi Output Fisik:\n• Skrip Game Feel & Efek Terminal",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Juice",
      "Polish"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 31
  },
  {
    "id": "ISSUE-B3-ENG-05",
    "projectId": "the-last-breach",
    "title": "Melakukan audit batas 15 klon Scratch, validasi broadcast dan ekspor sb3",
    "description": "Kategori: Penjaminan Kualitas (QA) & Rilis\nDeskripsi: Audit performa: memastikan total klon aktif di panggung stabil di bawah 15 klon sepanjang permainan, durasi main ideal 10-18 menit per sesi, validasi 16 variabel dan 12 broadcast message, pengujian di web/Turbowarp, dan ekspor paket rilis The_Last_Breach_Release.sb3.\nSpesifikasi Output:\n- Berkas build final The_Last_Breach_Release.sb3 & Laporan QA\nDefinisi Selesai (DoD):\n- Game dapat ditamatkan di seluruh 8 kombinasi ending tanpa bug macet\n\nSpesifikasi Output Fisik:\n• Paket Rilis Final The_Last_Breach.sb3",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Zidane Habibi",
    "dueDate": "2026-11-20",
    "tags": [
      "Level 3",
      "QA",
      "Rilis",
      "Scratch"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 32
  }
];

export const ALL_SKYGATE_TASKS: Task[] = [
  {
    "id": "ISSUE-S1-AST-01",
    "projectId": "skygate-keeper",
    "title": "Membuat sprite karakter Pemuda dasar dan animasi tebasan 8 frame",
    "description": "Kategori: Karakter Pixel Art\nDeskripsi: Menggambar sprite karakter utama Pemuda (32x32 px) gaya retro 16-bit:\n- keeper_idle_1, _2 (2 frame berdiri bernapas memegang pedang)\n- keeper_run_1 s/d _4 (4 frame siklus lari dinamis jubah berkibar)\n- keeper_jump, keeper_fall, keeper_crouch (3 pose udara dan jongkok)\n- keeper_slash_1, _2, _finisher (3 frame ayunan pedang kombo tebasan sabit putih)\n- keeper_guard (1 frame sikap bertahan menangkis pedang silang)\nSpesifikasi Output:\n- 11 berkas PNG 32x32 piksel transparan\nDefinisi Selesai (DoD):\n- Anchor point tepat di kaki tengah bawah (X: 16, Y: 4)\n- Efek tebasan sabit putih memotong jelas saat kombo 3-hit dieksekusi\n\nSpesifikasi Output Fisik:\n• 11 berkas kostum gerak & tebas PNG (32x32 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Karakter",
      "Pemuda"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 1
  },
  {
    "id": "ISSUE-S1-AST-02",
    "projectId": "skygate-keeper",
    "title": "Membuat background desa prologue dan level 1 sampai 3 serta ubin platform",
    "description": "Kategori: Latar Lingkungan & Tileset\nDeskripsi: Mendesain 4 backdrop panggung Scratch (480x360 px):\n1. bg_prologue_earth.png (desa permai kaki pegunungan langit fajar sebelum badai)\n2. bg_level1_cloud_forest.png (pepohonan awan kelabu rindang, kabut perak)\n3. bg_level2_purple_thunder.png (lembah bebatuan ungu terjal dialiri kilat)\n4. bg_level3_black_fortress.png (benteng batu hitam megah berobor api biru)\n5. Modul ubin platform tanah lembah, awan padat, dan batu benteng (48x48 px)\nSpesifikasi Output:\n- 4 berkas backdrop PNG (480x360 px) & 3 ubin platform modular (48x48 px)\nDefinisi Selesai (DoD):\n- Seluruh backdrop bebas blur pada resolusi panggung Scratch\n\nSpesifikasi Output Fisik:\n• 4 backdrop PNG (480x360 px) & 3 ubin platform (48x48 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Background",
      "Tileset"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 2
  },
  {
    "id": "ISSUE-S1-AST-03",
    "projectId": "skygate-keeper",
    "title": "Membuat sprite 8 monster kroco wilayah Level 1 sampai 3",
    "description": "Kategori: Musuh Biasa\nDeskripsi: Menggambar sprite monster 3 zona awal:\n- Level 1: Slime Awan (20x16 px) & Burung Angin (24x20 px)\n- Level 2: Serangga Petir (24x20 px), Kelelawar Listrik (24x24 px), Golem Petir Mini (32x32 px)\n- Level 3: Prajurit Bayangan (28x32 px), Pemanah Bayangan (24x32 px), Penyihir Angin (28x36 px)\nSpesifikasi Output:\n- 16 frame sprite musuh PNG transparan (termasuk frame hit flash)\nDefinisi Selesai (DoD):\n- Ciri visual tipe serangan (Melee, Ranged, Tanker) mudah dikenali pemain\n\nSpesifikasi Output Fisik:\n• 16 sprite kroco Level 1-3 PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Musuh",
      "Kroco"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 3
  },
  {
    "id": "ISSUE-S1-AST-04",
    "projectId": "skygate-keeper",
    "title": "Membuat sprite 3 bos wilayah Raja Angin, Monster Listrik, dan Petir Merah",
    "description": "Kategori: Bos Wilayah Awal\nDeskripsi: Menggambar 3 bos wilayah:\n1. Raja Angin Kelabu (64x48 px, sayap hembusan badai)\n2. Monster Listrik Purba (64x64 px, kristal voltase berkedip)\n3. Penguasa Petir Merah (48x56 px, jubah hitam bertombak merah)\nSpesifikasi Output:\n- 6 berkas sprite bos PNG transparan (pose serang & terkena hit)\nDefinisi Selesai (DoD):\n- Gerakan ancang-ancang jurus (telegraph) terlihat jelas sebelum bos menyerang\n\nSpesifikasi Output Fisik:\n• 6 sprite bos wilayah Level 1-3 PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Boss",
      "Wilayah"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 4
  },
  {
    "id": "ISSUE-S1-AST-05",
    "projectId": "skygate-keeper",
    "title": "Membuat karakter NPC Pedagang, Blacksmith, Nenek Awan dan potret dialog",
    "description": "Kategori: Karakter NPC & Potret\nDeskripsi: Menggambar figur interaktif:\n- Pedagang Misterius berjubah ungu gelap (32x36 px)\n- Blacksmith Tukang Tempa berotot membawa palu (36x36 px)\n- Nenek Awan berselendang putih ramah (28x32 px)\n- 3 potret wajah untuk jendela dialog typewriter (40x40 px)\nSpesifikasi Output:\n- 6 berkas PNG transparan\nDefinisi Selesai (DoD):\n- Potret dialog cocok dengan bingkai kotak teks tanpa terpotong\n\nSpesifikasi Output Fisik:\n• 3 sprite NPC & 3 potret wajah PNG",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Aset Visual",
      "NPC",
      "Blacksmith"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 5
  },
  {
    "id": "ISSUE-S1-AST-06",
    "projectId": "skygate-keeper",
    "title": "Membuat sprite senjata Tier 1-3, Cermin Kuno Ibu, bahan tempa, dan koin",
    "description": "Kategori: Item & Inventaris\nDeskripsi: Membuat sprite barang:\n- Ikon Senjata: Pedang Belati Angin, Pedang Petir Sambung, Tombak Badai Merah (24x24 px)\n- Artefak Bumi #1: Cermin Kuno Ibu (16x16 px)\n- Bahan Drop Bos: Taring Angin, Batu Kilat, Inti Petir Merah, Besi Kuno\n- Koin Awan berkilau emas (12x12 px)\nSpesifikasi Output:\n- 9 berkas sprite item PNG transparan\nDefinisi Selesai (DoD):\n- Garis tepi outline tegas terlihat jelas di atas latar gelap maupun terang\n\nSpesifikasi Output Fisik:\n• 9 sprite senjata & inventaris PNG",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Aset Visual",
      "Item",
      "Senjata"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 6
  },
  {
    "id": "ISSUE-S1-AST-07",
    "projectId": "skygate-keeper",
    "title": "Mendesain HUD darah stamina, Dynamic Target HUD bar, dan kotak dialog",
    "description": "Kategori: Antarmuka UI/UX\nDeskripsi: Merancang elemen antarmuka panggung Scratch:\n- Player HUD Bar kiri atas (bar darah merah, stamina hijau, potret Pemuda, 180x36 px)\n- Dynamic Target HUD Bar tengah atas (bar darah monster yang sedang dipukul, 200x20 px)\n- Kotak dialog typewriter cokelat emas (440x80 px)\n- Koin Counter kanan atas (80x20 px)\nSpesifikasi Output:\n- 4 berkas aset UI format PNG transparan\nDefinisi Selesai (DoD):\n- Dynamic Target HUD Bar menghemat ruang panggung dan tidak menumpuk klon\n\nSpesifikasi Output Fisik:\n• 4 aset antarmuka HUD PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "UI/UX",
      "HUD",
      "Target Bar"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 7
  },
  {
    "id": "ISSUE-S1-AST-08",
    "projectId": "skygate-keeper",
    "title": "Memproduksi audio sfx tebasan pedang, tangkisan, palu tempa, dan 2 lagu BGM",
    "description": "Kategori: Audio Engineering\nDeskripsi: Memproduksi audio awal:\n- sfx_sword_slash.wav (tebasan pedang tajam, variasi pitch hit ke-3, 0.2s)\n- sfx_shield_clang.wav (benturan logam tangkisan perisai, 0.3s)\n- sfx_anvil_hit.wav (dentingan palu besi Blacksmith, 0.25s)\n- sfx_coin_collect.wav (denting koin emas, 0.15s)\n- 2 Track BGM MP3: bgm_valley_home.mp3 (akustik 85 BPM) & bgm_thunder_valley.mp3 (perkusi petir 110 BPM)\nSpesifikasi Output:\n- 4 berkas SFX WAV dan 2 berkas BGM MP3 stereo\nDefinisi Selesai (DoD):\n- Volume dinormalisasi -3 dBFS tanpa clipping nada pecah\n\nSpesifikasi Output Fisik:\n• 4 SFX WAV & 2 BGM MP3",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Audio",
      "SFX",
      "BGM"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 8
  },
  {
    "id": "ISSUE-S1-ENG-01",
    "projectId": "skygate-keeper",
    "title": "Memprogram blok custom fisika platformer anti-glitch dan deteksi lantai",
    "description": "Kategori: Pemrograman Fisika Inti\nDeskripsi: Mengembangkan Custom Block define Fisika_Platformer_Skygate: kecepatan lari horizontal (akselerasi 1.5, deselerasi 0.85, batas 8 px/tick), deteksi tabrakan dinding samping dan pembalik koordinat, gravitasi konstan (-1), serta loop mikro penyesuaian pendaratan lantai.\nSpesifikasi Output:\n- Blok Custom Scratch Fisika_Platformer_Skygate\nDefinisi Selesai (DoD):\n- Karakter tidak pernah tembus lantai atau tersangkut di dinding platform\n\nSpesifikasi Output Fisik:\n• Custom Block Fisika_Platformer_Skygate",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Fisika",
      "Scratch"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 9
  },
  {
    "id": "ISSUE-S1-ENG-02",
    "projectId": "skygate-keeper",
    "title": "Memprogram kombo tebasan pedang 3-hit tombol LMB dan Dynamic Target HUD",
    "description": "Kategori: Pemrograman Sistem Pertarungan\nDeskripsi: Mengembangkan aksi serang tombol Klik Kiri: tebasan 1 (100% dmg) -> tebasan 2 (110% dmg) -> tebasan finisher (150% dmg + dorong musuh 20 px). Serangan sukses memperbarui Target_Enemy_ID, Target_HP, dan menyalakan Dynamic Target HUD Bar selama 5 detik.\nSpesifikasi Output:\n- Modul Skrip CombatComboAndTargetHUD\nDefinisi Selesai (DoD):\n- Rantai kombo dapat disambung dalam jendela 0.4 detik; Target HUD otomatis hilang setelah 5s\n\nSpesifikasi Output Fisik:\n• Skrip Kombo 3-Hit & Target HUD",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Kombo",
      "Combat"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 10
  },
  {
    "id": "ISSUE-S1-ENG-03",
    "projectId": "skygate-keeper",
    "title": "Memprogram tangkisan Guard tombol F dan mitigasi guard break stamina",
    "description": "Kategori: Pemrograman Sistem Pertahanan\nDeskripsi: Menahan tombol F atau Shift mengaktifkan pose keeper_guard (Is_Blocking = 1). Serangan musuh saat Guard aktif dipotong 70% damage, mengurangi 10 Stamina, dan memutar SFX Clang. Jika stamina habis (0), picu Guard Break (terpental dan stun 0.8 detik).\nSpesifikasi Output:\n- Modul Skrip GuardAndStaminaSystem\nDefinisi Selesai (DoD):\n- Tidak memakai klik kanan untuk mencegah context menu browser di Scratch\n\nSpesifikasi Output Fisik:\n• Skrip Sistem Tangkisan Guard & Stamina",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Guard",
      "Stamina"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 11
  },
  {
    "id": "ISSUE-S1-ENG-04",
    "projectId": "skygate-keeper",
    "title": "Memprogram teks angka damage melayang dengan pool daur ulang klon",
    "description": "Kategori: Pemrograman Feedback Visual\nDeskripsi: Men-spawn klon angka damage di koordinat target (Y+20), melayang naik Y+2 per frame, memudar, dan wajib dihapus (delete this clone) dalam waktu 0.4 detik. Membatasi pool klon angka aktif maksimal 6 klon serentak.\nSpesifikasi Output:\n- Modul Skrip FloatingDamageNumbers\nDefinisi Selesai (DoD):\n- Angka berwarna putih/kuning saat hit biasa dan abu-abu saat ditangkis Guard\n\nSpesifikasi Output Fisik:\n• Skrip Angka Damage Melayang",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Damage Text",
      "Klon"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 12
  },
  {
    "id": "ISSUE-S1-ENG-05",
    "projectId": "skygate-keeper",
    "title": "Memprogram Altar Dewa Kuno checkpoint dan transit panggung Level 1 sampai 3",
    "description": "Kategori: Arsitektur Dunia & Simpan\nDeskripsi: Menekan E di dekat Altar menyimpan posisi koordinat Checkpoint_Level, Checkpoint_X, Checkpoint_Y dan memulihkan HP pemain ke 100%. Pintu gerbang ujung level memicu broadcast Load_Level_[1..3] untuk memuat backdrop dan platform zona berikutnya.\nSpesifikasi Output:\n- Modul Skrip AltarCheckpointAndLevelTransit\nDefinisi Selesai (DoD):\n- Pemain yang gugur langsung respawn di Altar aktif dengan HP penuh\n\nSpesifikasi Output Fisik:\n• Skrip Checkpoint Altar & Transit",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Checkpoint",
      "Transit"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 13
  },
  {
    "id": "ISSUE-S1-ENG-06",
    "projectId": "skygate-keeper",
    "title": "Memprogram sistem tempa Blacksmith upgrade senjata Tier 1 sampai 3",
    "description": "Kategori: Pemrograman Ekonomi & Tempa\nDeskripsi: Menekan E di dekat Blacksmith membuka modal tempa. Mengecek ketersediaan Koin_Awan dan bahan drop bos. Menekan Upgrade memotong bahan/koin, menaikkan Weapon_Level, dan memperbarui Damage_Pemain.\nSpesifikasi Output:\n- Modul Skrip BlacksmithUpgradeTier1to3\nDefinisi Selesai (DoD):\n- Tombol upgrade terkunci jika koin atau bahan tidak cukup\n\nSpesifikasi Output Fisik:\n• Skrip Upgrade Blacksmith Tier 1-3",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Blacksmith",
      "Crafting"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 14
  },
  {
    "id": "ISSUE-S1-ENG-07",
    "projectId": "skygate-keeper",
    "title": "Memprogram kecerdasan buatan AI 3 bos wilayah Level 1 sampai 3",
    "description": "Kategori: Pemrograman Bos\nDeskripsi: Mengatur pola tempur:\n- Bos 1 (Raja Angin): Hembusan badai sayap berkala mendorong posisi X ke jurang.\n- Bos 2 (Monster Listrik): Memancarkan kubah listrik keliling tiap 3 detik.\n- Bos 3 (Penguasa Petir): Teleportasi platform dan tusukan tombak merah panjang.\nSpesifikasi Output:\n- Modul Skrip BossAI_Level1to3\nDefinisi Selesai (DoD):\n- Mengalahkan Bos 3 membuka akses ke Skill Rasengan Awan dan gerbang Kota Aethel\n\nSpesifikasi Output Fisik:\n• Skrip AI 3 Bos Awal",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 1",
      "Pemrograman",
      "Boss",
      "AI"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 15
  },
  {
    "id": "ISSUE-S2-AST-01",
    "projectId": "skygate-keeper",
    "title": "Membuat animasi skill Rasengan Awan dan proyektil pusaran berputar",
    "description": "Kategori: Visual Art Karakter & Partikel\nDeskripsi: Membuat pose karakter keeper_skill_rasengan mendorong kedua tangan ke depan dan sprite proyektil pusaran bola awan biru vfx_rasengan_ball.png (24x24 px, 2 frame rotasi).\nSpesifikasi Output:\n- 3 berkas sprite PNG transparan\nDefinisi Selesai (DoD):\n- Proyektil berputar dinamis saat meluncur di layar panggung\n\nSpesifikasi Output Fisik:\n• 3 sprite skill Rasengan Awan PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Skill",
      "Rasengan"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 16
  },
  {
    "id": "ISSUE-S2-AST-02",
    "projectId": "skygate-keeper",
    "title": "Membuat background Kota Aethel, Reruntuhan Altar, dan Lautan Kristal Es",
    "description": "Kategori: Latar Lingkungan Zona Tengah\nDeskripsi: Menggambar 3 latar panggung Scratch (480x360 px):\n1. bg_level4_city_aethel.png (kota steampunk melayang, kincir angin tembaga raksasa)\n2. bg_level5_altar_ruins.png (reruntuhan marmer relief dewa dan pilar purba)\n3. bg_level6_ice_ocean.png (lautan gletser es abadi melayang, stalaktit es)\nSpesifikasi Output:\n- 3 berkas backdrop PNG (480x360 px)\nDefinisi Selesai (DoD):\n- Latar Kota Aethel cerah hidup, latar lautan es dingin kebiruan beku\n\nSpesifikasi Output Fisik:\n• 3 backdrop zona tengah PNG (480x360 px)",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Background",
      "Kota Aethel"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 17
  },
  {
    "id": "ISSUE-S2-AST-03",
    "projectId": "skygate-keeper",
    "title": "Membuat sprite 9 monster kroco zona perdagangan dan lautan es Level 4-6",
    "description": "Kategori: Musuh Biasa\nDeskripsi: Menggambar musuh zona tengah:\n- Level 4: Bandit Melayang (28x32 px), Bandit Perisai (32x32 px), Penembak Meriam (36x32 px)\n- Level 5: Golem Batu Mini (32x32 px), Gargoyle Awan (32x36 px), Patung Jiwa Kuno (28x40 px)\n- Level 6: Serigala Es (36x24 px), Manusia Salju (32x36 px), Elemental Es (32x32 px)\nSpesifikasi Output:\n- 18 frame sprite musuh PNG transparan\nDefinisi Selesai (DoD):\n- Bandit Perisai memiliki tameng besar penanda kebal tebasan biasa\n\nSpesifikasi Output Fisik:\n• 18 sprite kroco Level 4-6 PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Musuh",
      "Bandit"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 18
  },
  {
    "id": "ISSUE-S2-AST-04",
    "projectId": "skygate-keeper",
    "title": "Membuat sprite bos Raja Bandit, Golem Batu Dewa, dan Naga Es Awan",
    "description": "Kategori: Bos Wilayah Menengah\nDeskripsi: Menggambar 3 bos zona tengah:\n- Raja Bandit Aethel (56x48 px, bazoka mesiu awan)\n- Golem Batu Dewa (72x72 px, tubuh batu raksasa bercahaya hijau)\n- Naga Es Awan (96x64 px, naga bersisik kristal es bersayap lebar)\nSpesifikasi Output:\n- 6 berkas sprite bos PNG transparan\nDefinisi Selesai (DoD):\n- Naga Es Awan tampak megah dan memiliki frame hembusan napas beku\n\nSpesifikasi Output Fisik:\n• 6 sprite bos Level 4-6 PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Aset Visual",
      "Boss",
      "Naga Es"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 19
  },
  {
    "id": "ISSUE-S2-AST-05",
    "projectId": "skygate-keeper",
    "title": "Membuat karakter NPC Walikota, Koki Roti, Pendeta, dan Pemburu Es",
    "description": "Kategori: Karakter NPC & Potret\nDeskripsi: Menggambar NPC quest Level 4–6:\n- Walikota Aethel berjas mewah memegang peta (32x36 px)\n- Koki Roti bertopi putih memegang gandum (32x36 px)\n- Pendeta Terakhir memegang dupa suci (32x40 px)\n- Pemburu Es berjaket bulu membawa tombak (32x36 px)\n- 4 potret dialog wajah (40x40 px)\nSpesifikasi Output:\n- 8 berkas sprite NPC & potret PNG transparan\nDefinisi Selesai (DoD):\n- Potret pas pada jendela kotak dialog typewriter\n\nSpesifikasi Output Fisik:\n• 4 sprite NPC & 4 potret wajah PNG",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Aset Visual",
      "NPC",
      "Quest"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 20
  },
  {
    "id": "ISSUE-S2-AST-06",
    "projectId": "skygate-keeper",
    "title": "Membuat sprite senjata Tier 4-6, Artefak Bumi 2-4, dan menu modal jendela",
    "description": "Kategori: Item & Antarmuka UI\nDeskripsi: Membuat elemen inventaris dan menu:\n- Senjata: Pedang Eksekutor Aethel, Gada Raksasa, Pedang Es Petir Dual (24x24 px)\n- Artefak Bumi: Sepatu Boot Ayah (#2), Dupa Suci Desa (#3), Kompas Tembaga Kuno (#4)\n- Jendela Modal Inventaris tombol I (360x260 px) & Jendela Crafting tombol C (380x280 px)\nSpesifikasi Output:\n- 6 sprite item & 2 aset bingkai modal PNG\nDefinisi Selesai (DoD):\n- Menu modal memiliki slot kotak bergaris bersih dan tombol tutup [X]\n\nSpesifikasi Output Fisik:\n• 6 sprite item & 2 modal window PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "UI/UX",
      "Modal",
      "Inventaris"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 21
  },
  {
    "id": "ISSUE-S2-AST-07",
    "projectId": "skygate-keeper",
    "title": "Membuat lagu BGM Kota Aethel dan Reruntuhan Es serta audio sfx Rasengan",
    "description": "Kategori: Audio Engineering\nDeskripsi: Memproduksi audio zona tengah:\n- bgm_city_aethel.mp3 (pasar awan ceria seruling riang, 100 BPM)\n- bgm_frozen_ruins.mp3 (lonceng kristal es melankolis dan biola sepi, 90 BPM)\n- sfx_rasengan_fire.wav (dentuman tembakan pusaran energi awan, 0.4s)\n- sfx_potion_drink.wav (minum ramuan pemulih Elixir, 0.3s)\nSpesifikasi Output:\n- 2 berkas BGM MP3 dan 2 berkas SFX WAV\nDefinisi Selesai (DoD):\n- BGM Kota Aethel memberi kontras suasana santai di tengah petualangan\n\nSpesifikasi Output Fisik:\n• 2 BGM MP3 & 2 SFX WAV",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Audio",
      "BGM",
      "SFX"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 22
  },
  {
    "id": "ISSUE-S2-ENG-01",
    "projectId": "skygate-keeper",
    "title": "Memprogram eksekusi skill tembakan proyektil Rasengan Awan tombol X",
    "description": "Kategori: Pemrograman Serangan Jarak Jauh\nDeskripsi: Terbuka setelah menamatkan misi Level 3 (Is_Skill_Unlocked = 1). Menekan tombol X memotong 25 Stamina dan menembakkan klon vfx_rasengan_ball meluncur lurus 40 tick (kecepatan 12 px/tick, damage magis besar, menembus perisai). Klon terhapus saat kena target.\nSpesifikasi Output:\n- Modul Skrip RasenganSkillExecution\nDefinisi Selesai (DoD):\n- Tombol X tidak merespon jika stamina < 25 dan memunculkan notifikasi visual\n\nSpesifikasi Output Fisik:\n• Skrip Skill Rasengan Awan",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Skill",
      "Rasengan"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 23
  },
  {
    "id": "ISSUE-S2-ENG-02",
    "projectId": "skygate-keeper",
    "title": "Memprogram sistem menu modal inventaris tombol I dan buang item tombol Q",
    "description": "Kategori: Arsitektur UI & Inventaris\nDeskripsi: Menekan tombol I memicu broadcast Buka_Inventory, mengunci kontrol gerak karakter, dan menampilkan jendela 12 slot barang. Pemain memilih item dengan klik kiri, tombol Q membuang item ke tanah, dan tombol I/Esc menutup menu.\nSpesifikasi Output:\n- Modul Skrip InventoryModalManager\nDefinisi Selesai (DoD):\n- Jumlah kuantitas koin, bahan tempa, dan artefak tertera akurat di dalam slot\n\nSpesifikasi Output Fisik:\n• Skrip Menu Modal Inventaris",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Inventaris",
      "Modal"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 24
  },
  {
    "id": "ISSUE-S2-ENG-03",
    "projectId": "skygate-keeper",
    "title": "Memprogram sistem Fast Travel antar-level via peta Altar Dewa Kuno",
    "description": "Kategori: Navigasi Dunia Permainan\nDeskripsi: Menekan E di Altar Kuno membuka peta dunia 8 zona. Menampilkan daftar altar yang sudah dibuka (Altar_[1..8]_Unlocked = 1). Memilih altar tujuan memicu fade-out hitam dan memindahkan pemain ke level dan koordinat terkait via broadcast Warp_To_Altar.\nSpesifikasi Output:\n- Modul Skrip FastTravelAltarNetwork\nDefinisi Selesai (DoD):\n- Posisi respawn berada tepat di atas platform altar tanpa risiko jatuh ke jurang\n\nSpesifikasi Output Fisik:\n• Skrip Fast Travel Altar Kuno",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Fast Travel",
      "Altar"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 25
  },
  {
    "id": "ISSUE-S2-ENG-04",
    "projectId": "skygate-keeper",
    "title": "Memprogram AI bos menengah meriam granat, gempa golem, dan napas beku naga",
    "description": "Kategori: Pemrograman Bos\nDeskripsi: Mengembangkan taktik bos Level 4–6:\n- Bos 4 (Raja Bandit): Menembakkan granat parabola yang meledak di tanah.\n- Bos 5 (Golem Batu): Menghentak tanah membelah lantai (wajib lompat); punggung kebal tebasan.\n- Bos 6 (Naga Es): Menyemburkan badai salju membekukan karakter 1.5 detik jika tidak ditangkis Guard F.\nSpesifikasi Output:\n- Modul Skrip MidBossAI_Level4to6\nDefinisi Selesai (DoD):\n- Efek beku naga dapat dihindari dengan timing tangkisan tombol F yang presisi\n\nSpesifikasi Output Fisik:\n• Skrip AI Bos Level 4-6",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Boss",
      "Naga Es"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 26
  },
  {
    "id": "ISSUE-S2-ENG-05",
    "projectId": "skygate-keeper",
    "title": "Memprogram pelacakan Side Quest dan pengumpulan Artefak Bumi nomor 1 sampai 4",
    "description": "Kategori: Pemrograman Sistem Misi\nDeskripsi: Menerima quest mengaktifkan indikator tanda seru ! di atas kepala NPC. Menyelesaikan tugas memperbarui variabel Artefak_Terkumpul (0..5) dan mengisi slot bulat di antarmuka HUD pemain.\nSpesifikasi Output:\n- Modul Skrip QuestAndArtifactTracking\nDefinisi Selesai (DoD):\n- NPC merespons dialog berbeda antara status Belum Diambil, Sedang Jalan, dan Selesai\n\nSpesifikasi Output Fisik:\n• Skrip Quest & Artefak Bumi",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Quest",
      "Artefak"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 27
  },
  {
    "id": "ISSUE-S2-ENG-06",
    "projectId": "skygate-keeper",
    "title": "Memprogram mekanik efek status setrum, slow jalan, dan freeze beku",
    "description": "Kategori: Pemrograman Status Efek\nDeskripsi: Mengimplementasikan modifikasi pergerakan akibat elemen:\n- Setrum Listrik (0.5s): Menghentikan gerak musuh sejenak saat terkena Pedang Petir.\n- Slow Es (2.0s): Memotong kecepatan lari karakter 40% saat terkena serigala es.\n- Freeze Beku (1.0s): Mengunci seluruh input karakter saat terkena hembusan naga.\nSpesifikasi Output:\n- Modul Skrip ElementalStatusEffects\nDefinisi Selesai (DoD):\n- Efek status mereda otomatis setelah timer berakhir tanpa meninggalkan residu bug\n\nSpesifikasi Output Fisik:\n• Skrip Efek Status Elemen",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 2",
      "Pemrograman",
      "Status",
      "Freeze"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 28
  },
  {
    "id": "ISSUE-S3-AST-01",
    "projectId": "skygate-keeper",
    "title": "Membuat sprite zirah cahaya Dewa Langit dan efek semburan petir raksasa",
    "description": "Kategori: Visual Art Karakter Puncak\nDeskripsi: Membuat aset penobatan The Last Keeper:\n- keeper_god_armor (sprite Pemuda berzirah emas-putih megah Dewa Langit, 2 frame berdiri & lari, 36x36 px)\n- vfx_lightning_burst.png (animasi semburan kilat emas tebal ledakan petir dewa, 48x48 px)\nSpesifikasi Output:\n- 3 berkas sprite PNG transparan\nDefinisi Selesai (DoD):\n- Zirah Cahaya memberi kesan pahlawan legendaris penutup kisah\n\nSpesifikasi Output Fisik:\n• 3 sprite zirah dewa & petir PNG",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Zirah Dewa",
      "Petir"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 29
  },
  {
    "id": "ISSUE-S3-AST-02",
    "projectId": "skygate-keeper",
    "title": "Membuat background Jurang Dimensi, Puncak Skygate, dan 5 epilog ending",
    "description": "Kategori: Latar Lingkungan Klimaks & Ending\nDeskripsi: Menggambar 6 latar panggung (480x360 px):\n1. bg_level7_red_abyss.png (kawah merah darah dimensi, reruntuhan runtuh)\n2. bg_level8_skygate_peak.png (puncak gerbang langit membelah antariksa, Altar Cahaya)\n3. bg_ending_good_sky.png (pemuda menatap awan damai sebagai penjaga baru)\n4. bg_ending_true_bridge.png (jembatan pelangi cahaya abadi hubungkan awan dan desa bumi)\n5. bg_ending_sacrifice.png (siluet pemuda mengunci gerbang dari dalam kegelapan)\n6. bg_ending_bakery_comedy.png (toko roti harum ramai pembeli di Kota Aethel)\nSpesifikasi Output:\n- 6 berkas backdrop PNG (480x360 px)\nDefinisi Selesai (DoD):\n- Mendukung kekuatan narasi masing-masing cabang ending secara menyentuh\n\nSpesifikasi Output Fisik:\n• 6 backdrop klimaks & ending PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Background",
      "Endings"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 30
  },
  {
    "id": "ISSUE-S3-AST-03",
    "projectId": "skygate-keeper",
    "title": "Membuat sprite pengawal dimensi elit dan bos Jenderal Kegelapan",
    "description": "Kategori: Musuh & Bos Endgame\nDeskripsi: Menggambar musuh Level 7:\n- Pengawal Dimensi (32x36 px, sepasang pedang merah darah)\n- Iblis Merah Terbang (32x32 px) & Penyihir Jurang (28x36 px)\n- Bos Jenderal Kegelapan (64x64 px, zirah hitam bermahkota tanduk iblis)\nSpesifikasi Output:\n- 5 berkas sprite PNG transparan\nDefinisi Selesai (DoD):\n- Aura korupsi merah menyala kontras di atas tubuh hitam legam\n\nSpesifikasi Output Fisik:\n• 5 sprite musuh dimensi & Jenderal PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Musuh",
      "Jenderal"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 31
  },
  {
    "id": "ISSUE-S3-AST-04",
    "projectId": "skygate-keeper",
    "title": "Membuat sprite multi-fase Final Boss Pemimpin Kegelapan 3 wujud",
    "description": "Kategori: Final Boss\nDeskripsi: Mendesain Final Boss (80x80 px):\n- Fase 1 (Merah): Mengayunkan pedang bayangan raksasa\n- Fase 2 (Ungu): Melayang di udara memanggil 4 bola proyektil lubang hitam\n- Fase 3 (Hitam-Emas Enraged): Monster kegelapan raksasa bersayap bayangan mata merah\nSpesifikasi Output:\n- 6 berkas sprite bos PNG transparan\nDefinisi Selesai (DoD):\n- Transformasi visual antar-fase terlihat dramatis dan mengalir\n\nSpesifikasi Output Fisik:\n• 6 sprite Final Boss multi-fase PNG",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Final Boss",
      "Multi-Fase"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 32
  },
  {
    "id": "ISSUE-S3-AST-05",
    "projectId": "skygate-keeper",
    "title": "Membuat sprite Pedang Keeper Kuno God Tier, Artefak 5, dan Orang Tua tersandera",
    "description": "Kategori: Cerita & Senjata Pamungkas\nDeskripsi: Membuat aset penentu akhir kisah:\n- Pedang Keeper Kuno (God Tier) berlumur aura emas #FFD700 (24x24 px)\n- Artefak Bumi #5: Pedang Pusaka Keluarga (16x16 px)\n- Sprite Ayah & Ibu tersandera di pilar gerbang (npc_parents_trapped, 32x32 px)\n- Dewa Langit bercahaya agung di Altar Suci (npc_sky_god_radiant, 64x64 px)\nSpesifikasi Output:\n- 4 berkas sprite PNG transparan\nDefinisi Selesai (DoD):\n- Pedang God-Tier memiliki pendaran aura superior dibanding senjata lain\n\nSpesifikasi Output Fisik:\n• 4 sprite senjata god & NPC pilar PNG",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "Aset Visual",
      "Senjata God",
      "Orang Tua"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 33
  },
  {
    "id": "ISSUE-S3-AST-06",
    "projectId": "skygate-keeper",
    "title": "Membuat lagu BGM jurang kegelapan, orkestra Final Boss, dan SFX petir dewa",
    "description": "Kategori: Audio Engineering\nDeskripsi: Memproduksi musik klimaks penutup:\n- bgm_corrupted_abyss.mp3 (bass horor distopia dimensi, 115 BPM)\n- bgm_final_skygate.mp3 (paduan suara orkestra megah drum perang, 140 BPM)\n- sfx_lightning_burst.wav (ledakan sambaran kilat dewa raksasa, 0.8s)\nSpesifikasi Output:\n- 2 berkas BGM MP3 dan 1 berkas SFX WAV\nDefinisi Selesai (DoD):\n- Musik Final Boss menghadirkan sensasi pertempuran penentu takdir semesta\n\nSpesifikasi Output Fisik:\n• 2 BGM MP3 & 1 SFX WAV",
    "status": "backlog",
    "priority": "high",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "Audio",
      "BGM",
      "Orkestra"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 34
  },
  {
    "id": "ISSUE-S3-ENG-01",
    "projectId": "skygate-keeper",
    "title": "Memprogram arena screen-lock Puncak Skygate dan multi-layer boss health bar",
    "description": "Kategori: Pemrograman Kamera & UI Bos\nDeskripsi: Mengunci Scroll_X = 0 permanen saat memasuki arena Level 8. Mengunci batas gerak pemain di koordinat layar X: -220 s/d +220. Menampilkan bar darah bos 3 lapis di bawah panggung: Lapis Merah (4500-3000), Lapis Ungu (3000-1500), Lapis Hitam-Emas (1500-0).\nSpesifikasi Output:\n- Modul Skrip ScreenLockPeakArenaAnd3LayerBossBar\nDefinisi Selesai (DoD):\n- Pergantian warna bar darah bos terjadi otomatis saat ambang batas darah terlewati\n\nSpesifikasi Output Fisik:\n• Skrip Arena Screen-Lock & Bar 3 Lapis",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Arena",
      "Boss Bar"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 35
  },
  {
    "id": "ISSUE-S3-ENG-02",
    "projectId": "skygate-keeper",
    "title": "Memprogram logika pertarungan multi-fase Pemimpin Kegelapan 3 wujud",
    "description": "Kategori: Pemrograman Final Boss\nDeskripsi: Mengembangkan taktik 3 fase:\n- Fase 1: Tebasan pedang bayangan jarak dekat dan gelombang kejut tanah (wajib lompat).\n- Fase 2: Melayang memanggil 4 proyektil berputar (tangkis F, balas Rasengan X).\n- Fase 3 (Enraged): Kecepatan +50%, memanggil hujan meteor petir merah panggung; pemain gunakan i-frames dan Petir Dewa.\nSpesifikasi Output:\n- Modul Skrip FinalBossMultiPhaseBehavior\nDefinisi Selesai (DoD):\n- Transisi antar-fase memicu jeda sinematik mikro dan pergantian pola AI terukur\n\nSpesifikasi Output Fisik:\n• Skrip Pertarungan Final Boss 3 Fase",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Final Boss",
      "Fase"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 36
  },
  {
    "id": "ISSUE-S3-ENG-03",
    "projectId": "skygate-keeper",
    "title": "Memprogram sistem evaluasi syarat 4 skenario ending utama",
    "description": "Kategori: Pemrograman Logika Cerita\nDeskripsi: Menguji kualifikasi akhir pemain setelah bos tumbang:\n- Bad Ending: HP_Pemuda <= 0 di arena Level 8.\n- Good Ending: Bos kalah, tetapi Artefak_Terkumpul < 5 (pemuda menetap di awan).\n- True Ending: Bos kalah + Artefak_Terkumpul = 5 + Weapon_Level = 8 (jembatan cahaya abadi).\n- Sacrifice Ending: Bos kalah + memilih opsi dialog Dorong Orang Tua ke Portal (mengunci diri di kegelapan).\nSpesifikasi Output:\n- Modul Skrip NarrativeEndingEvaluator\nDefinisi Selesai (DoD):\n- Syarat dievaluasi presisi tanpa bentrok logika antar cabang cerita\n\nSpesifikasi Output Fisik:\n• Skrip Evaluasi 4 Ending Utama",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Ending",
      "Evaluator"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 37
  },
  {
    "id": "ISSUE-S3-ENG-04",
    "projectId": "skygate-keeper",
    "title": "Memprogram skenario rahasia penjualan koin Secret Bakery Comedy Ending",
    "description": "Kategori: Pemrograman Easter Egg\nDeskripsi: Saat bicara dengan Pedagang Misterius di Level 1 atau Level 4, pemain dapat memilih opsi tersembunyi: Jual Koin Relik Kuno seharga 9.999 Koin. Misi heroik dibatalkan seketika, menampilkan cutscene komikal pemuda membuka toko roti gandum awan sukses di Kota Aethel.\nSpesifikasi Output:\n- Modul Skrip SecretBakeryComedyEnding\nDefinisi Selesai (DoD):\n- Opsi hanya muncul jika pemain belum mencapai Level 5\n\nSpesifikasi Output Fisik:\n• Skrip Secret Bakery Comedy Ending",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Secret",
      "Comedy"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 38
  },
  {
    "id": "ISSUE-S3-ENG-05",
    "projectId": "skygate-keeper",
    "title": "Menerapkan pemolesan game feel screen shake dinamis dan hit-stop",
    "description": "Kategori: Polish & Game Feel\nDeskripsi: Menerapkan sentuhan kepuasan aksi bermain: Screen_Shake_Intensity (nilai 4 saat tebasan kritis, nilai 10 saat guncangan gempa bos), jeda mikro Freeze Frame wait 0.04 seconds saat tebasan menghantam musuh, serta percikan partikel saat perisai Guard sukses menangkis.\nSpesifikasi Output:\n- Modul Skrip GameFeelAndJuicePolish\nDefinisi Selesai (DoD):\n- Guncangan layar kembali netral X: 0, Y: 0 tanpa membuat panggung miring\n\nSpesifikasi Output Fisik:\n• Skrip Game Feel & Freeze Frame",
    "status": "backlog",
    "priority": "medium",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "Pemrograman",
      "Juice",
      "Screen Shake"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 39
  },
  {
    "id": "ISSUE-S3-ENG-06",
    "projectId": "skygate-keeper",
    "title": "Melakukan audit batas 300 klon Scratch, stress testing dan ekspor rilis sb3",
    "description": "Kategori: Penjaminan Kualitas (QA) & Rilis\nDeskripsi: Audit performa: memastikan klon proyektil, musuh, dan angka damage stabil di bawah 150 klon (jauh di bawah batas 300 klon Scratch), durasi main 35-50 menit, pengujian web/Turbowarp 30/60 FPS, validasi 25 variabel dan 18 broadcast, ekspor paket Skygate_The_Last_Keeper.sb3.\nSpesifikasi Output:\n- Berkas build final Skygate_The_Last_Keeper.sb3 & Laporan QA\nDefinisi Selesai (DoD):\n- Game dapat ditamatkan dari Prologue hingga 5 ending tanpa crash atau lag freeze\n\nSpesifikasi Output Fisik:\n• Paket Rilis Final Skygate_The_Last_Keeper.sb3",
    "status": "backlog",
    "priority": "urgent",
    "assignee": "Muhammad Fatahillah",
    "dueDate": "2026-11-30",
    "tags": [
      "Level 3",
      "QA",
      "Rilis",
      "Scratch"
    ],
    "createdAt": "2026-09-25T08:00:00.000Z",
    "updatedAt": "2026-09-25T08:00:00.000Z",
    "order": 40
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'skygate-keeper',
    name: "Skygate: The Last Keeper — Master Issue Tracker",
    description: 'Papan Kanban produksi game Action-RPG Scratch 3.0 (Level 1 Starter Zone 1-3, Level 2 Mid-World 4-6, Level 3 Endgame 7-8 & 5 Endings). Seluruh 40 tiket berada di Backlog.',
    color: 'indigo',
    tasks: ALL_SKYGATE_TASKS,
    createdAt: '2026-09-25T08:00:00.000Z',
    updatedAt: '2026-09-25T08:00:00.000Z',
  },
  {
    id: 'the-last-breach',
    name: "The Last Breach — Master Issue Tracker",
    description: 'Papan Kanban game cyber-narrative Scratch 3.0 (Jalur A Hacking Indoor, Jalur B Eksplorasi Malam & Flashdisk, 8 Skenario Ending). Seluruh 32 tiket berada di Backlog.',
    color: 'emerald',
    tasks: ALL_BREACH_TASKS,
    createdAt: '2026-09-25T08:00:00.000Z',
    updatedAt: '2026-09-25T08:00:00.000Z',
  },
  {
    id: 'hanuman-sun-chase',
    name: "Hanuman's Sun Chase — Master Issue Tracker",
    description: 'Papan Kanban produksi game platformer mitologi Scratch 3.0 (Level 1 MVP, Level 2 Khayangan, Level 3 Boss Indra & 3 Endings). Seluruh 47 tiket berada di Backlog.',
    color: 'amber',
    tasks: ALL_HANUMAN_TASKS,
    createdAt: '2026-09-25T08:00:00.000Z',
    updatedAt: '2026-09-25T08:00:00.000Z',
  },
  {
    id: 'diderot-master',
    name: 'Diderot.exe — Master Issue Tracker',
    description: 'Seluruh 76 tiket kerja teknis dan aset produksi game Diderot.exe (Level 1 MVP, Level 2 Spiral & Sosial, Level 3 Polish & Singularity).',
    color: 'blue',
    tasks: ALL_DIDEROT_TASKS,
    createdAt: '2026-09-25T08:00:00.000Z',
    updatedAt: '2026-09-25T08:00:00.000Z',
  },
];

export const INITIAL_TASKS = ALL_SKYGATE_TASKS;

// Auto-synced from Google Apps Script
// Generated: 2026-10-21T12:41:48.602Z

const INITIAL_DATA = {
  "transactions": [
    {
      "tanggal": "2025-08-21",
      "deskripsi": "Modal Awal",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 10000000,
      "uangKeluar": 0,
      "saldo": 10000000,
      "id": ""
    },
    {
      "tanggal": "2025-08-21",
      "deskripsi": "Penyesuaian Saldo (Sinkronisasi Selisih Aplikasi)",
      "quantity": "",
      "kategori": "Lainnya",
      "uangMasuk": 70000,
      "uangKeluar": 0,
      "saldo": 10070000,
      "id": ""
    },
    {
      "tanggal": "2025-08-23",
      "deskripsi": "Iphone",
      "quantity": 3,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 8800000,
      "saldo": 1270000,
      "id": ""
    },
    {
      "tanggal": "2025-08-23",
      "deskripsi": "casing & anti gores",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 69738,
      "saldo": 1200262,
      "id": ""
    },
    {
      "tanggal": "2025-08-25",
      "deskripsi": "Iklan fb marketplace",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 200000,
      "saldo": 1000262,
      "id": ""
    },
    {
      "tanggal": "2025-08-27",
      "deskripsi": "Wireless router",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 159520,
      "saldo": 840742,
      "id": ""
    },
    {
      "tanggal": "2025-08-28",
      "deskripsi": "iP 12 128 GB (putih)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 3900000,
      "uangKeluar": 0,
      "saldo": 4740742,
      "id": ""
    },
    {
      "tanggal": "2025-08-31",
      "deskripsi": "adamin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 10000,
      "saldo": 4730742,
      "id": ""
    },
    {
      "tanggal": "2025-08-31",
      "deskripsi": "saldo bawaan",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 8049,
      "uangKeluar": 0,
      "saldo": 4738791,
      "id": ""
    },
    {
      "tanggal": "2025-09-02",
      "deskripsi": "iP Xr 64 GB (hitam)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 2230000,
      "uangKeluar": 0,
      "saldo": 6968791,
      "id": ""
    },
    {
      "tanggal": "2025-09-06",
      "deskripsi": "iP 12 128 GB (mint)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 3500000,
      "uangKeluar": 0,
      "saldo": 10468791,
      "id": ""
    },
    {
      "tanggal": "2025-09-06",
      "deskripsi": "saldo bawaan",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 1951,
      "uangKeluar": 0,
      "saldo": 10470742,
      "id": ""
    },
    {
      "tanggal": "2025-09-08",
      "deskripsi": "Iphone 13 Pro Max 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 9000000,
      "saldo": 1470742,
      "id": ""
    },
    {
      "tanggal": "2025-09-09",
      "deskripsi": "Case iPhone 13 pro max",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 38579,
      "saldo": 1432163,
      "id": ""
    },
    {
      "tanggal": "2025-09-25",
      "deskripsi": "Admin Bank (kartu debit)",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 3500,
      "saldo": 1428663,
      "id": ""
    },
    {
      "tanggal": "2025-09-26",
      "deskripsi": "iP Pro max 13 128 GB (hitam)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 9100000,
      "uangKeluar": 0,
      "saldo": 10528663,
      "id": ""
    },
    {
      "tanggal": "2025-09-30",
      "deskripsi": "Admin Bank (rekening)",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 10523663,
      "id": ""
    },
    {
      "tanggal": "2025-10-03",
      "deskripsi": "iPhone",
      "quantity": 4,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 10350000,
      "saldo": 173663,
      "id": ""
    },
    {
      "tanggal": "2025-10-03",
      "deskripsi": "case iPhone",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 26224,
      "saldo": 147439,
      "id": ""
    },
    {
      "tanggal": "2025-10-12",
      "deskripsi": "iP 11 128 GB (ungu)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 3200000,
      "uangKeluar": 0,
      "saldo": 3347439,
      "id": ""
    },
    {
      "tanggal": "2025-10-12",
      "deskripsi": "iP 11 128 GB (putih)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 3000000,
      "uangKeluar": 0,
      "saldo": 6347439,
      "id": ""
    },
    {
      "tanggal": "2025-10-12",
      "deskripsi": "case iPhone",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 15499,
      "saldo": 6331940,
      "id": ""
    },
    {
      "tanggal": "2025-10-13",
      "deskripsi": "iP 11 128 GB (hitam)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 3100000,
      "uangKeluar": 0,
      "saldo": 9431940,
      "id": ""
    },
    {
      "tanggal": "2025-10-15",
      "deskripsi": " Saldo Shopee (Ridho)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 200000,
      "uangKeluar": 0,
      "saldo": 9631940,
      "id": ""
    },
    {
      "tanggal": "2025-10-16",
      "deskripsi": "Saldo Shopee (Khairin)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 427495,
      "uangKeluar": 0,
      "saldo": 10059435,
      "id": ""
    },
    {
      "tanggal": "2025-10-16",
      "deskripsi": "Suntikan dana (Ridho)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 800000,
      "uangKeluar": 0,
      "saldo": 10859435,
      "id": ""
    },
    {
      "tanggal": "2025-10-16",
      "deskripsi": "Suntikan dana (Khairin)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 800000,
      "uangKeluar": 0,
      "saldo": 11659435,
      "id": ""
    },
    {
      "tanggal": "2025-10-16",
      "deskripsi": "IPhone",
      "quantity": 4,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 11250000,
      "saldo": 409435,
      "id": ""
    },
    {
      "tanggal": "2025-10-16",
      "deskripsi": "case iPhone",
      "quantity": 4,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 61800,
      "saldo": 347635,
      "id": ""
    },
    {
      "tanggal": "2025-10-18",
      "deskripsi": "Investor (Abah Ridho)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 8000000,
      "uangKeluar": 0,
      "saldo": 8347635,
      "id": ""
    },
    {
      "tanggal": "2025-10-20",
      "deskripsi": "SIM sticker",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 32600,
      "saldo": 8315035,
      "id": ""
    },
    {
      "tanggal": "2025-10-20",
      "deskripsi": "Marketing (coco)",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 46302,
      "saldo": 8268733,
      "id": ""
    },
    {
      "tanggal": "2025-10-25",
      "deskripsi": "Admin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 3500,
      "saldo": 8265233,
      "id": ""
    },
    {
      "tanggal": "2025-10-30",
      "deskripsi": "Peminjaman Dana (Khairin)",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 102500,
      "saldo": 8162733,
      "id": ""
    },
    {
      "tanggal": "2025-10-30",
      "deskripsi": "iP 11 64 GB (ungu)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 3100000,
      "uangKeluar": 0,
      "saldo": 11262733,
      "id": ""
    },
    {
      "tanggal": "2025-10-31",
      "deskripsi": "Admin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 11257733,
      "id": ""
    },
    {
      "tanggal": "2025-11-01",
      "deskripsi": "Pengembalian dana (Khairin)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 102500,
      "uangKeluar": 0,
      "saldo": 11360233,
      "id": ""
    },
    {
      "tanggal": "2025-11-02",
      "deskripsi": "iP xr 256 GB (putih)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 2750000,
      "uangKeluar": 0,
      "saldo": 14110233,
      "id": ""
    },
    {
      "tanggal": "2025-11-09",
      "deskripsi": "iP 11 256 GB (hitam",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 3481505,
      "uangKeluar": 0,
      "saldo": 17591738,
      "id": ""
    },
    {
      "tanggal": "2025-11-10",
      "deskripsi": "Cofee (tomoro coffe)",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 25200,
      "saldo": 17566538,
      "id": ""
    },
    {
      "tanggal": "2025-11-10",
      "deskripsi": "iP 11 64 GB (ungu)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 2900000,
      "uangKeluar": 0,
      "saldo": 20466538,
      "id": ""
    },
    {
      "tanggal": "2025-11-14",
      "deskripsi": "iP 13 128 GB (midnight)",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 13701500,
      "saldo": 6765038,
      "id": ""
    },
    {
      "tanggal": "2025-11-14",
      "deskripsi": "Case iPhone",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 32899,
      "saldo": 6732139,
      "id": ""
    },
    {
      "tanggal": "2025-11-14",
      "deskripsi": "Case iPhone",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 30800,
      "saldo": 6701339,
      "id": ""
    },
    {
      "tanggal": "2025-11-21",
      "deskripsi": "iP 13 128 GB (midnight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7250000,
      "uangKeluar": 0,
      "saldo": 13951339,
      "id": ""
    },
    {
      "tanggal": "2025-11-24",
      "deskripsi": "iP 11 64 Gb iBox (Hitam)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 3701500,
      "saldo": 10249839,
      "id": ""
    },
    {
      "tanggal": "2025-11-24",
      "deskripsi": "Gosend",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 36308,
      "saldo": 10213531,
      "id": ""
    },
    {
      "tanggal": "2025-11-24",
      "deskripsi": "Case iPhone",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 44099,
      "saldo": 10169432,
      "id": ""
    },
    {
      "tanggal": "2025-11-25",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 269599,
      "saldo": 9899833,
      "id": ""
    },
    {
      "tanggal": "2025-11-26",
      "deskripsi": "Case iPhone",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 44099,
      "saldo": 9855734,
      "id": ""
    },
    {
      "tanggal": "2025-11-26",
      "deskripsi": "admin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 3500,
      "saldo": 9852234,
      "id": ""
    },
    {
      "tanggal": "2025-11-26",
      "deskripsi": "Refund SMC iP 11 iP 11 64 Gb",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 3700000,
      "uangKeluar": 0,
      "saldo": 13552234,
      "id": ""
    },
    {
      "tanggal": "2025-11-26",
      "deskripsi": "iP 15 128 GB iBox (ice blue)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 8350000,
      "saldo": 5202234,
      "id": ""
    },
    {
      "tanggal": "2025-11-26",
      "deskripsi": "admin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1500,
      "saldo": 5200734,
      "id": ""
    },
    {
      "tanggal": "2025-11-30",
      "deskripsi": "admin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 5195734,
      "id": ""
    },
    {
      "tanggal": "2025-12-01",
      "deskripsi": "iP 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7200000,
      "uangKeluar": 0,
      "saldo": 12395734,
      "id": ""
    },
    {
      "tanggal": "2025-12-02",
      "deskripsi": "Case iPhone",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 83898,
      "saldo": 12311836,
      "id": ""
    },
    {
      "tanggal": "2025-12-02",
      "deskripsi": "iP 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6650000,
      "saldo": 5661836,
      "id": ""
    },
    {
      "tanggal": "2025-12-02",
      "deskripsi": "Admin Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1500,
      "saldo": 5660336,
      "id": ""
    },
    {
      "tanggal": "2025-12-02",
      "deskripsi": "iP 15 128 GB iBox (ice blue)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 9100000,
      "uangKeluar": 0,
      "saldo": 14760336,
      "id": ""
    },
    {
      "tanggal": "2025-12-04",
      "deskripsi": "UJL DJKN",
      "quantity": 1,
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 1702500,
      "saldo": 13057836,
      "id": ""
    },
    {
      "tanggal": "2025-12-05",
      "deskripsi": "iP 13 128 GB iBox (White)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6850000,
      "saldo": 6207836,
      "id": ""
    },
    {
      "tanggal": "2025-12-05",
      "deskripsi": "Admin Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1500,
      "saldo": 6206336,
      "id": ""
    },
    {
      "tanggal": "2025-12-06",
      "deskripsi": "iP 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7100000,
      "uangKeluar": 0,
      "saldo": 13306336,
      "id": ""
    },
    {
      "tanggal": "2025-12-10",
      "deskripsi": "iP 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6700000,
      "saldo": 6606336,
      "id": ""
    },
    {
      "tanggal": "2025-12-10",
      "deskripsi": "Admin Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 6603836,
      "id": ""
    },
    {
      "tanggal": "2025-12-14",
      "deskripsi": "iP 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7200000,
      "uangKeluar": 0,
      "saldo": 13803836,
      "id": ""
    },
    {
      "tanggal": "2025-12-15",
      "deskripsi": "Case iPhone",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 90298,
      "saldo": 13713538,
      "id": ""
    },
    {
      "tanggal": "2025-12-15",
      "deskripsi": "iP 13 128 GB Digimap (Pink)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6650000,
      "saldo": 7063538,
      "id": ""
    },
    {
      "tanggal": "2025-12-15",
      "deskripsi": "Admin Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1500,
      "saldo": 7062038,
      "id": ""
    },
    {
      "tanggal": "2025-12-17",
      "deskripsi": "iP 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7100000,
      "uangKeluar": 0,
      "saldo": 14162038,
      "id": ""
    },
    {
      "tanggal": "2025-12-19",
      "deskripsi": "iP 16 128 GB iBox (White)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 12225000,
      "saldo": 1937038,
      "id": ""
    },
    {
      "tanggal": "2025-12-19",
      "deskripsi": "Admin Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1500,
      "saldo": 1935538,
      "id": ""
    },
    {
      "tanggal": "2025-12-19",
      "deskripsi": "Case iPhone",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 50517,
      "saldo": 1885021,
      "id": ""
    },
    {
      "tanggal": "2025-12-20",
      "deskripsi": "Pengembalian UJL DJKN",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 1700000,
      "uangKeluar": 0,
      "saldo": 3585021,
      "id": ""
    },
    {
      "tanggal": "2025-12-23",
      "deskripsi": "Canva Pro",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 12000,
      "saldo": 3573021,
      "id": ""
    },
    {
      "tanggal": "2025-12-24",
      "deskripsi": "Investor (Zaini)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 5000000,
      "uangKeluar": 0,
      "saldo": 8573021,
      "id": ""
    },
    {
      "tanggal": "2025-12-25",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 160000,
      "saldo": 8413021,
      "id": ""
    },
    {
      "tanggal": "2025-12-25",
      "deskripsi": "Admin Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 8410521,
      "id": ""
    },
    {
      "tanggal": "2025-12-26",
      "deskripsi": "iP 13 128 GB Digimap (Pink)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7100000,
      "uangKeluar": 0,
      "saldo": 15510521,
      "id": ""
    },
    {
      "tanggal": "2025-12-26",
      "deskripsi": "Admin Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 3500,
      "saldo": 15507021,
      "id": ""
    },
    {
      "tanggal": "2025-12-27",
      "deskripsi": "iP 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6650000,
      "saldo": 8857021,
      "id": ""
    },
    {
      "tanggal": "2025-12-27",
      "deskripsi": "iP 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6650000,
      "saldo": 2207021,
      "id": ""
    },
    {
      "tanggal": "2025-12-27",
      "deskripsi": "Admin Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1500,
      "saldo": 2205521,
      "id": ""
    },
    {
      "tanggal": "2025-12-27",
      "deskripsi": "Case iPhone",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 83998,
      "saldo": 2121523,
      "id": ""
    },
    {
      "tanggal": "2025-12-29",
      "deskripsi": "Case iPhone",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 47800,
      "saldo": 2073723,
      "id": ""
    },
    {
      "tanggal": "2025-12-31",
      "deskripsi": "Admin Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 2068723,
      "id": ""
    },
    {
      "tanggal": "2026-01-01",
      "deskripsi": "iP 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7150000,
      "uangKeluar": 0,
      "saldo": 9218723,
      "id": ""
    },
    {
      "tanggal": "2026-01-02",
      "deskripsi": "Admin bank",
      "quantity": 1,
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 43700,
      "saldo": 9175023,
      "id": ""
    },
    {
      "tanggal": "2026-01-03",
      "deskripsi": "iP 16 128 GB iBox (White)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 12550000,
      "uangKeluar": 0,
      "saldo": 21725023,
      "id": ""
    },
    {
      "tanggal": "2026-01-04",
      "deskripsi": "iP 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7000000,
      "uangKeluar": 0,
      "saldo": 28725023,
      "id": ""
    },
    {
      "tanggal": "2026-01-13",
      "deskripsi": "iP 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7100000,
      "saldo": 21625023,
      "id": ""
    },
    {
      "tanggal": "2026-01-13",
      "deskripsi": "Admin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 21622523,
      "id": ""
    },
    {
      "tanggal": "2026-01-13",
      "deskripsi": "iP 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7200000,
      "uangKeluar": 0,
      "saldo": 28822523,
      "id": ""
    },
    {
      "tanggal": "2026-01-14",
      "deskripsi": "Affiliate Tiktok",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 218734,
      "uangKeluar": 0,
      "saldo": 29041257,
      "id": ""
    },
    {
      "tanggal": "2026-01-14",
      "deskripsi": "Join Reseller Joming",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1000000,
      "saldo": 28041257,
      "id": ""
    },
    {
      "tanggal": "2026-01-14",
      "deskripsi": "Admin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 28038757,
      "id": ""
    },
    {
      "tanggal": "2026-01-15",
      "deskripsi": "iP 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6650000,
      "saldo": 21388757,
      "id": ""
    },
    {
      "tanggal": "2026-01-15",
      "deskripsi": "Admin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 21386257,
      "id": ""
    },
    {
      "tanggal": "2026-01-16",
      "deskripsi": "Case iPhone",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 74698,
      "saldo": 21311559,
      "id": ""
    },
    {
      "tanggal": "2026-01-16",
      "deskripsi": "iP 13 128 GB Beacukai (Starlight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6000000,
      "saldo": 15311559,
      "id": ""
    },
    {
      "tanggal": "2026-01-16",
      "deskripsi": "iP 12 128 GB Beacukai (White)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 4650000,
      "saldo": 10661559,
      "id": ""
    },
    {
      "tanggal": "2026-01-16",
      "deskripsi": "Admin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 10659059,
      "id": ""
    },
    {
      "tanggal": "2026-01-17",
      "deskripsi": "Case iPhone",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 32899,
      "saldo": 10626160,
      "id": ""
    },
    {
      "tanggal": "2026-01-24",
      "deskripsi": "Adaptor Ugreen",
      "quantity": 3,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 258400,
      "saldo": 10367760,
      "id": ""
    },
    {
      "tanggal": "2026-01-25",
      "deskripsi": "iP 12 128 GB Beacukai (White)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 5300000,
      "uangKeluar": 0,
      "saldo": 15667760,
      "id": ""
    },
    {
      "tanggal": "2026-01-25",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 265000,
      "saldo": 15402760,
      "id": ""
    },
    {
      "tanggal": "2026-01-25",
      "deskripsi": "Dana Masuk (Ridho)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 102000,
      "uangKeluar": 0,
      "saldo": 15504760,
      "id": ""
    },
    {
      "tanggal": "2026-01-25",
      "deskripsi": "Dana Masuk (Khairin)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 185315,
      "uangKeluar": 0,
      "saldo": 15690075,
      "id": ""
    },
    {
      "tanggal": "2026-01-25",
      "deskripsi": "iP 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6700000,
      "saldo": 8990075,
      "id": ""
    },
    {
      "tanggal": "2026-01-25",
      "deskripsi": "Admin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 8987575,
      "id": ""
    },
    {
      "tanggal": "2026-01-25",
      "deskripsi": "iP 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6750000,
      "saldo": 2237575,
      "id": ""
    },
    {
      "tanggal": "2026-01-25",
      "deskripsi": "Admin bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 2235075,
      "id": ""
    },
    {
      "tanggal": "2026-01-26",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 3500,
      "saldo": 2231575,
      "id": ""
    },
    {
      "tanggal": "2026-01-26",
      "deskripsi": "Adaptor + Kabel Baserus",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 218020,
      "saldo": 2013555,
      "id": ""
    },
    {
      "tanggal": "2026-01-26",
      "deskripsi": "Adaptor Ugreen",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 181000,
      "saldo": 1832555,
      "id": ""
    },
    {
      "tanggal": "2026-01-26",
      "deskripsi": "Case iPhone",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 83998,
      "saldo": 1748557,
      "id": ""
    },
    {
      "tanggal": "2026-01-31",
      "deskripsi": "Microphone KiiP Official",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 152900,
      "saldo": 1595657,
      "id": ""
    },
    {
      "tanggal": "2026-01-31",
      "deskripsi": "Background Putih",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 103500,
      "saldo": 1492157,
      "id": ""
    },
    {
      "tanggal": "2026-01-31",
      "deskripsi": "Stand Bacground",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 161110,
      "saldo": 1331047,
      "id": ""
    },
    {
      "tanggal": "2026-02-01",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 1326047,
      "id": ""
    },
    {
      "tanggal": "2026-02-04",
      "deskripsi": "iPhone 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7100000,
      "uangKeluar": 0,
      "saldo": 8426047,
      "id": ""
    },
    {
      "tanggal": "2026-02-04",
      "deskripsi": "Clear Case Migoz",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 41599,
      "saldo": 8384448,
      "id": ""
    },
    {
      "tanggal": "2026-02-04",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 4000,
      "saldo": 8380448,
      "id": ""
    },
    {
      "tanggal": "2026-02-05",
      "deskripsi": "iPhone 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6700000,
      "saldo": 1680448,
      "id": ""
    },
    {
      "tanggal": "2026-02-05",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 1677948,
      "id": ""
    },
    {
      "tanggal": "2026-02-09",
      "deskripsi": "iPhone 13 128 GB inter (Pink)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 5075000,
      "uangKeluar": 0,
      "saldo": 6752948,
      "id": ""
    },
    {
      "tanggal": "2026-02-14",
      "deskripsi": "iPhone 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7035000,
      "uangKeluar": 0,
      "saldo": 13787948,
      "id": ""
    },
    {
      "tanggal": "2026-02-15",
      "deskripsi": "Clear Case Migoz Official",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 35000,
      "saldo": 13752948,
      "id": ""
    },
    {
      "tanggal": "2026-02-15",
      "deskripsi": "iPhone 14 128 GB iBox (Blue)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7200000,
      "saldo": 6552948,
      "id": ""
    },
    {
      "tanggal": "2026-02-15",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 6550448,
      "id": ""
    },
    {
      "tanggal": "2026-02-18",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 204980,
      "saldo": 6345468,
      "id": ""
    },
    {
      "tanggal": "2026-02-19",
      "deskripsi": "iPhone 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 6670000,
      "uangKeluar": 0,
      "saldo": 13015468,
      "id": ""
    },
    {
      "tanggal": "2026-02-19",
      "deskripsi": "Case Migoz(2) + Adaptor Ugreen (1)",
      "quantity": 3,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 155834,
      "saldo": 12859634,
      "id": ""
    },
    {
      "tanggal": "2026-02-20",
      "deskripsi": "iPhone 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6500000,
      "saldo": 6359634,
      "id": ""
    },
    {
      "tanggal": "2026-02-20",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 6357134,
      "id": ""
    },
    {
      "tanggal": "2026-02-22",
      "deskripsi": "Hardisk External",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 160000,
      "saldo": 6197134,
      "id": ""
    },
    {
      "tanggal": "2026-02-22",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 6194634,
      "id": ""
    },
    {
      "tanggal": "2026-02-23",
      "deskripsi": "Suntikan Dana (Khairin)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 500000,
      "uangKeluar": 0,
      "saldo": 6694634,
      "id": ""
    },
    {
      "tanggal": "2026-02-23",
      "deskripsi": "Suntikan Dana (Ridho)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 500000,
      "uangKeluar": 0,
      "saldo": 7194634,
      "id": ""
    },
    {
      "tanggal": "2026-02-23",
      "deskripsi": "Affiliate Tiktok",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 134000,
      "uangKeluar": 0,
      "saldo": 7328634,
      "id": ""
    },
    {
      "tanggal": "2026-02-23",
      "deskripsi": "iPhone 13 128 G iBox (Starlight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 6900000,
      "uangKeluar": 0,
      "saldo": 14228634,
      "id": ""
    },
    {
      "tanggal": "2026-02-23",
      "deskripsi": "iPhone 14 128 GB iBox (Blue)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7200000,
      "saldo": 7028634,
      "id": ""
    },
    {
      "tanggal": "2026-02-23",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 7026134,
      "id": ""
    },
    {
      "tanggal": "2026-02-25",
      "deskripsi": "Clear Case Migoz Official",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 70338,
      "saldo": 6955796,
      "id": ""
    },
    {
      "tanggal": "2026-02-25",
      "deskripsi": "iPhone 11 64 GB inter (Tosca)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 1800000,
      "saldo": 5155796,
      "id": ""
    },
    {
      "tanggal": "2026-02-25",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 5153296,
      "id": ""
    },
    {
      "tanggal": "2026-02-25",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 260000,
      "saldo": 4893296,
      "id": ""
    },
    {
      "tanggal": "2026-02-25",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 4888296,
      "id": ""
    },
    {
      "tanggal": "2026-02-26",
      "deskripsi": "iPhone 14 128 GB iBox (Blue)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7586875,
      "uangKeluar": 0,
      "saldo": 12475171,
      "id": ""
    },
    {
      "tanggal": "2026-02-26",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 3500,
      "saldo": 12471671,
      "id": ""
    },
    {
      "tanggal": "2026-02-27",
      "deskripsi": "iPhone 14 128 GB iBox (Blue)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7700000,
      "uangKeluar": 0,
      "saldo": 20171671,
      "id": ""
    },
    {
      "tanggal": "2026-02-28",
      "deskripsi": "iPhone 15 128 GB iBox (Green)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 9000000,
      "saldo": 11171671,
      "id": ""
    },
    {
      "tanggal": "2026-02-28",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 11169171,
      "id": ""
    },
    {
      "tanggal": "2026-02-28",
      "deskripsi": "case migoz",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 74698,
      "saldo": 11094473,
      "id": ""
    },
    {
      "tanggal": "2026-03-01",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 11089473,
      "id": ""
    },
    {
      "tanggal": "2026-03-01",
      "deskripsi": "iPhone 11 64 GB inter (Tosca)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 3000000,
      "uangKeluar": 0,
      "saldo": 14089473,
      "id": ""
    },
    {
      "tanggal": "2026-03-04",
      "deskripsi": "Clear Case Migoz",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 75698,
      "saldo": 14013775,
      "id": ""
    },
    {
      "tanggal": "2026-03-04",
      "deskripsi": "Clear Case",
      "quantity": 3,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 48297,
      "saldo": 13965478,
      "id": ""
    },
    {
      "tanggal": "2026-03-05",
      "deskripsi": "iPhone 14 128 GB iBox (Blue)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7350000,
      "saldo": 6615478,
      "id": ""
    },
    {
      "tanggal": "2026-03-06",
      "deskripsi": "Clear Case",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 17500,
      "saldo": 6597978,
      "id": ""
    },
    {
      "tanggal": "2026-03-09",
      "deskripsi": "iPhone 14 128 GB iBox (Blue)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7850000,
      "uangKeluar": 0,
      "saldo": 14447978,
      "id": ""
    },
    {
      "tanggal": "2026-03-10",
      "deskripsi": "iPhone 14 128 GB iBox (Blue)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7300000,
      "saldo": 7147978,
      "id": ""
    },
    {
      "tanggal": "2026-03-10",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 7145478,
      "id": ""
    },
    {
      "tanggal": "2026-03-11",
      "deskripsi": "iQoo Neo 10",
      "quantity": 1,
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 4668600,
      "saldo": 2476878,
      "id": ""
    },
    {
      "tanggal": "2026-03-13",
      "deskripsi": "Google drive",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 150000,
      "saldo": 2326878,
      "id": ""
    },
    {
      "tanggal": "2026-03-14",
      "deskripsi": "Suntikan dana (Abah Khairin)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 2500000,
      "uangKeluar": 0,
      "saldo": 4826878,
      "id": ""
    },
    {
      "tanggal": "2026-03-15",
      "deskripsi": "iPhone 14 128 GB iBox (Blue)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7800000,
      "uangKeluar": 0,
      "saldo": 12626878,
      "id": ""
    },
    {
      "tanggal": "2026-03-16",
      "deskripsi": "buku 365 ide hook",
      "quantity": 1,
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 103500,
      "saldo": 12523378,
      "id": ""
    },
    {
      "tanggal": "2026-03-16",
      "deskripsi": "Suntikan dana (Mama Khairin)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 5000000,
      "uangKeluar": 0,
      "saldo": 17523378,
      "id": ""
    },
    {
      "tanggal": "2026-03-17",
      "deskripsi": "Suntikan dana (Abah Khairin)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 4000000,
      "uangKeluar": 0,
      "saldo": 21523378,
      "id": ""
    },
    {
      "tanggal": "2026-03-18",
      "deskripsi": "iPhone 13 128 gb iBox (Starlight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 6800000,
      "uangKeluar": 0,
      "saldo": 28323378,
      "id": ""
    },
    {
      "tanggal": "2026-03-25",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 160000,
      "saldo": 28163378,
      "id": ""
    },
    {
      "tanggal": "2026-03-25",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 28160878,
      "id": ""
    },
    {
      "tanggal": "2026-03-25",
      "deskripsi": "iPhone 15 128 GB iBox (Tosca)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 9550000,
      "uangKeluar": 0,
      "saldo": 37710878,
      "id": ""
    },
    {
      "tanggal": "2026-03-25",
      "deskripsi": "Exit Dana Investor (Azay)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 5000000,
      "saldo": 32710878,
      "id": ""
    },
    {
      "tanggal": "2026-03-25",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 4000,
      "saldo": 32706878,
      "id": ""
    },
    {
      "tanggal": "2026-03-26",
      "deskripsi": "tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 33126,
      "saldo": 32673752,
      "id": ""
    },
    {
      "tanggal": "2026-03-27",
      "deskripsi": "Stand Holder",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 85700,
      "saldo": 32588052,
      "id": ""
    },
    {
      "tanggal": "2026-03-27",
      "deskripsi": "Mic Wireless TNW A37",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 238612,
      "saldo": 32349440,
      "id": ""
    },
    {
      "tanggal": "2026-03-27",
      "deskripsi": "tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 100331,
      "saldo": 32249109,
      "id": ""
    },
    {
      "tanggal": "2026-03-31",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 6000,
      "saldo": 32243109,
      "id": ""
    },
    {
      "tanggal": "2026-04-02",
      "deskripsi": "iPhone 15 Blue 128 GB Beacukai",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 8400000,
      "saldo": 23843109,
      "id": ""
    },
    {
      "tanggal": "2026-04-02",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 23840609,
      "id": ""
    },
    {
      "tanggal": "2026-04-02",
      "deskripsi": "iPhone 14 Blue 128 GB IBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7550000,
      "saldo": 16290609,
      "id": ""
    },
    {
      "tanggal": "2026-04-02",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 16288109,
      "id": ""
    },
    {
      "tanggal": "2026-04-02",
      "deskripsi": "iPhone 15 Pro Natural Titanium 128 GB ibox (no box)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 12100000,
      "saldo": 4188109,
      "id": ""
    },
    {
      "tanggal": "2026-04-02",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 4185609,
      "id": ""
    },
    {
      "tanggal": "2026-04-03",
      "deskripsi": "Case Silica Bumper + Amino Card Wallet",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 204149,
      "saldo": 3981460,
      "id": ""
    },
    {
      "tanggal": "2026-04-04",
      "deskripsi": "Box OEM + Sticker",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 162961,
      "saldo": 3818499,
      "id": ""
    },
    {
      "tanggal": "2026-04-04",
      "deskripsi": "Clear Case Migoz",
      "quantity": 3,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 181262,
      "saldo": 3637237,
      "id": ""
    },
    {
      "tanggal": "2026-04-05",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 3634737,
      "id": ""
    },
    {
      "tanggal": "2026-04-07",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 221280,
      "saldo": 3413457,
      "id": ""
    },
    {
      "tanggal": "2026-04-12",
      "deskripsi": "iPhone 14 Blue 128 GB IBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7900000,
      "uangKeluar": 0,
      "saldo": 11313457,
      "id": ""
    },
    {
      "tanggal": "2026-04-12",
      "deskripsi": "iPhone 14 Blue 128 GB IBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7500000,
      "saldo": 3813457,
      "id": ""
    },
    {
      "tanggal": "2026-04-12",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 3810957,
      "id": ""
    },
    {
      "tanggal": "2026-04-12",
      "deskripsi": "iPhone 15 Pro Natural Titanium 128 GB ibox (no box)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 12700000,
      "uangKeluar": 0,
      "saldo": 16510957,
      "id": ""
    },
    {
      "tanggal": "2026-04-13",
      "deskripsi": "iPhone 14 Blue 128 GB IBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7900000,
      "uangKeluar": 0,
      "saldo": 24410957,
      "id": ""
    },
    {
      "tanggal": "2026-04-16",
      "deskripsi": "Capcut Pro",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 22000,
      "saldo": 24388957,
      "id": ""
    },
    {
      "tanggal": "2026-04-17",
      "deskripsi": "iPhone 15 Pro White Titanium 256 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 14150000,
      "saldo": 10238957,
      "id": ""
    },
    {
      "tanggal": "2026-04-17",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 10236457,
      "id": ""
    },
    {
      "tanggal": "2026-04-17",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 141360,
      "saldo": 10095097,
      "id": ""
    },
    {
      "tanggal": "2026-04-17",
      "deskripsi": "Clear Case Migoz",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 97798,
      "saldo": 9997299,
      "id": ""
    },
    {
      "tanggal": "2026-04-17",
      "deskripsi": "Clear Case Migoz",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 57699,
      "saldo": 9939600,
      "id": ""
    },
    {
      "tanggal": "2026-04-18",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 48120,
      "saldo": 9891480,
      "id": ""
    },
    {
      "tanggal": "2026-04-18",
      "deskripsi": "iPhone 14 Blue 128 GB IBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7500000,
      "saldo": 2391480,
      "id": ""
    },
    {
      "tanggal": "2026-04-18",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 2388980,
      "id": ""
    },
    {
      "tanggal": "2026-04-20",
      "deskripsi": "ANKER Powerbank",
      "quantity": 1,
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 336650,
      "saldo": 2052330,
      "id": ""
    },
    {
      "tanggal": "2026-04-20",
      "deskripsi": "Biaya transport",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 25000,
      "uangKeluar": 0,
      "saldo": 2077330,
      "id": ""
    },
    {
      "tanggal": "2026-04-20",
      "deskripsi": "Clear Case Migoz",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 41000,
      "saldo": 2036330,
      "id": ""
    },
    {
      "tanggal": "2026-04-24",
      "deskripsi": "iPhone 15 Blue 128 GB Beacukai",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 8700000,
      "uangKeluar": 0,
      "saldo": 10736330,
      "id": ""
    },
    {
      "tanggal": "2026-04-24",
      "deskripsi": "iPhone 15 Pro White Titanium 256 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 14900000,
      "uangKeluar": 0,
      "saldo": 25636330,
      "id": ""
    },
    {
      "tanggal": "2026-04-25",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 4000,
      "saldo": 25632330,
      "id": ""
    },
    {
      "tanggal": "2026-04-25",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 71430,
      "saldo": 25560900,
      "id": ""
    },
    {
      "tanggal": "2026-04-25",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 390000,
      "saldo": 25170900,
      "id": ""
    },
    {
      "tanggal": "2026-04-25",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 25165900,
      "id": ""
    },
    {
      "tanggal": "2026-04-27",
      "deskripsi": "iPhone 14 Blue 128 GB IBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7925000,
      "uangKeluar": 0,
      "saldo": 33090900,
      "id": ""
    },
    {
      "tanggal": "2026-04-28",
      "deskripsi": "iPhone 16 Pro Max White Titanium 256 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 17500000,
      "saldo": 15590900,
      "id": ""
    },
    {
      "tanggal": "2026-04-28",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 234600,
      "saldo": 15356300,
      "id": ""
    },
    {
      "tanggal": "2026-04-28",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 15351300,
      "id": ""
    },
    {
      "tanggal": "2026-04-29",
      "deskripsi": "iPhone 15 Pro Natural Titanium 128 GB ibox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 13200000,
      "saldo": 2151300,
      "id": ""
    },
    {
      "tanggal": "2026-04-29",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 2148800,
      "id": ""
    },
    {
      "tanggal": "2026-04-29",
      "deskripsi": "Clear Case Migoz",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 105398,
      "saldo": 2043402,
      "id": ""
    },
    {
      "tanggal": "2026-04-30",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 6000,
      "saldo": 2037402,
      "id": ""
    },
    {
      "tanggal": "2026-05-01",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 34800,
      "saldo": 2002602,
      "id": ""
    },
    {
      "tanggal": "2026-05-04",
      "deskripsi": "Affiliate Tiktok",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 1684373,
      "uangKeluar": 0,
      "saldo": 3686975,
      "id": ""
    },
    {
      "tanggal": "2026-05-04",
      "deskripsi": "Affiliate Tiktok Iklan",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 234600,
      "saldo": 3452375,
      "id": ""
    },
    {
      "tanggal": "2026-05-05",
      "deskripsi": "Sleep aid Patch",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 39421,
      "saldo": 3412954,
      "id": ""
    },
    {
      "tanggal": "2026-05-05",
      "deskripsi": "Sleep aid Patch",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 22998,
      "saldo": 3389956,
      "id": ""
    },
    {
      "tanggal": "2026-05-11",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 234600,
      "saldo": 3155356,
      "id": ""
    },
    {
      "tanggal": "2026-05-14",
      "deskripsi": "Lelang DJKN",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 865000,
      "saldo": 2290356,
      "id": ""
    },
    {
      "tanggal": "2026-05-14",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 2287856,
      "id": ""
    },
    {
      "tanggal": "2026-05-16",
      "deskripsi": "Affiliate Tiktok",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 574645,
      "uangKeluar": 0,
      "saldo": 2862501,
      "id": ""
    },
    {
      "tanggal": "2026-05-16",
      "deskripsi": "Lelang DJKN",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 1009000,
      "saldo": 1853501,
      "id": ""
    },
    {
      "tanggal": "2026-05-16",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 13900000,
      "uangKeluar": 0,
      "saldo": 15753501,
      "id": ""
    },
    {
      "tanggal": "2026-05-17",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 4000,
      "saldo": 15749501,
      "id": ""
    },
    {
      "tanggal": "2026-05-18",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 327840,
      "saldo": 15421661,
      "id": ""
    },
    {
      "tanggal": "2026-05-19",
      "deskripsi": "Lelang DJKN",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 1484871,
      "saldo": 13936790,
      "id": ""
    },
    {
      "tanggal": "2026-05-19",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 13934290,
      "id": ""
    },
    {
      "tanggal": "2026-05-20",
      "deskripsi": "Pengembalian Lelang DJKN",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 862100,
      "uangKeluar": 0,
      "saldo": 14796390,
      "id": ""
    },
    {
      "tanggal": "2026-05-21",
      "deskripsi": "Pengembalian Lelang DJKN",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 1009000,
      "uangKeluar": 0,
      "saldo": 15805390,
      "id": ""
    },
    {
      "tanggal": "2026-05-22",
      "deskripsi": "Pengembalian Lelang DJKN",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 1481971,
      "uangKeluar": 0,
      "saldo": 17287361,
      "id": ""
    },
    {
      "tanggal": "2026-05-22",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 213120,
      "saldo": 17074241,
      "id": ""
    },
    {
      "tanggal": "2026-05-22",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1500,
      "saldo": 17072741,
      "id": ""
    },
    {
      "tanggal": "2026-05-23",
      "deskripsi": "transportasi",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 50000,
      "saldo": 17022741,
      "id": ""
    },
    {
      "tanggal": "2026-05-23",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 17020241,
      "id": ""
    },
    {
      "tanggal": "2026-05-23",
      "deskripsi": "iPhone 15 Pro Blue Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 12800000,
      "saldo": 4220241,
      "id": ""
    },
    {
      "tanggal": "2026-05-23",
      "deskripsi": "Soft slim matte case",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 88700,
      "saldo": 4131541,
      "id": ""
    },
    {
      "tanggal": "2026-05-23",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 186480,
      "saldo": 3945061,
      "id": ""
    },
    {
      "tanggal": "2026-05-23",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1500,
      "saldo": 3943561,
      "id": ""
    },
    {
      "tanggal": "2026-05-24",
      "deskripsi": "Capcut Pro",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 12000,
      "saldo": 3931561,
      "id": ""
    },
    {
      "tanggal": "2026-05-25",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 390000,
      "saldo": 3541561,
      "id": ""
    },
    {
      "tanggal": "2026-05-25",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 3536561,
      "id": ""
    },
    {
      "tanggal": "2026-05-26",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 372960,
      "saldo": 3163601,
      "id": ""
    },
    {
      "tanggal": "2026-05-26",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1500,
      "saldo": 3162101,
      "id": ""
    },
    {
      "tanggal": "2026-05-27",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 49000,
      "saldo": 3113101,
      "id": ""
    },
    {
      "tanggal": "2026-05-27",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 3110601,
      "id": ""
    },
    {
      "tanggal": "2026-05-28",
      "deskripsi": "Tiktok ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 146520,
      "saldo": 2964081,
      "id": ""
    },
    {
      "tanggal": "2026-05-28",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1500,
      "saldo": 2962581,
      "id": ""
    },
    {
      "tanggal": "2026-05-28",
      "deskripsi": "Affiliate Tiktok",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 428140,
      "uangKeluar": 0,
      "saldo": 3390721,
      "id": ""
    },
    {
      "tanggal": "2026-05-30",
      "deskripsi": "ANKER Powerbank",
      "quantity": 1,
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 796500,
      "saldo": 2594221,
      "id": ""
    },
    {
      "tanggal": "2026-05-30",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 3000,
      "saldo": 2591221,
      "id": ""
    },
    {
      "tanggal": "2026-05-30",
      "deskripsi": "Selfie Light Portable",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 169112,
      "saldo": 2422109,
      "id": ""
    },
    {
      "tanggal": "2026-05-30",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1000,
      "saldo": 2421109,
      "id": ""
    },
    {
      "tanggal": "2026-05-31",
      "deskripsi": "iPhone 15 Pro Blue Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 13500000,
      "uangKeluar": 0,
      "saldo": 15921109,
      "id": ""
    },
    {
      "tanggal": "2026-05-31",
      "deskripsi": "transportasi",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 100000,
      "saldo": 15821109,
      "id": ""
    },
    {
      "tanggal": "2026-05-31",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 15818609,
      "id": ""
    },
    {
      "tanggal": "2026-05-31",
      "deskripsi": "iPhone 14 Pro Max Deep Purple 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 11500000,
      "saldo": 4318609,
      "id": ""
    },
    {
      "tanggal": "2026-05-31",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 6000,
      "saldo": 4312609,
      "id": ""
    },
    {
      "tanggal": "2026-05-31",
      "deskripsi": "iPhone 16 Pro Max White Titanium 256 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 17500000,
      "uangKeluar": 0,
      "saldo": 21812609,
      "id": ""
    },
    {
      "tanggal": "2026-06-02",
      "deskripsi": "Pengembalian dana Tiktok",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 169112,
      "uangKeluar": 0,
      "saldo": 21981721,
      "id": ""
    },
    {
      "tanggal": "2026-06-02",
      "deskripsi": "Clear Case Migoz",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 80898,
      "saldo": 21900823,
      "id": ""
    },
    {
      "tanggal": "2026-06-05",
      "deskripsi": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 12850000,
      "saldo": 9050823,
      "id": ""
    },
    {
      "tanggal": "2026-06-05",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 9048323,
      "id": ""
    },
    {
      "tanggal": "2026-06-06",
      "deskripsi": "Tamperd Glass Migoz",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 17426,
      "saldo": 9030897,
      "id": ""
    },
    {
      "tanggal": "2026-06-06",
      "deskripsi": "Clear Case Migoz",
      "quantity": 3,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 159099,
      "saldo": 8871798,
      "id": ""
    },
    {
      "tanggal": "2026-06-06",
      "deskripsi": "Affiliate Tiktok",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 794000,
      "uangKeluar": 0,
      "saldo": 9665798,
      "id": ""
    },
    {
      "tanggal": "2026-06-07",
      "deskripsi": "Capcut Pro",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 13000,
      "saldo": 9652798,
      "id": ""
    },
    {
      "tanggal": "2026-06-07",
      "deskripsi": "Jet Cleaner",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 140540,
      "saldo": 9512258,
      "id": ""
    },
    {
      "tanggal": "2026-06-08",
      "deskripsi": "iPhone 14 Pro Max Deep Purple 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 11900000,
      "uangKeluar": 0,
      "saldo": 21412258,
      "id": ""
    },
    {
      "tanggal": "2026-06-08",
      "deskripsi": "iPhone 13 Midnight 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6500000,
      "saldo": 14912258,
      "id": ""
    },
    {
      "tanggal": "2026-06-09",
      "deskripsi": "Migoz Official",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 150000,
      "uangKeluar": 0,
      "saldo": 15062258,
      "id": ""
    },
    {
      "tanggal": "2026-06-10",
      "deskripsi": "Tiktok Ads",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 241237,
      "saldo": 14821021,
      "id": ""
    },
    {
      "tanggal": "2026-06-10",
      "deskripsi": "Affiliate Tiktok",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 270528,
      "uangKeluar": 0,
      "saldo": 15091549,
      "id": ""
    },
    {
      "tanggal": "2026-06-11",
      "deskripsi": "iPhone 13 Midnight 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7350000,
      "uangKeluar": 0,
      "saldo": 22441549,
      "id": ""
    },
    {
      "tanggal": "2026-06-11",
      "deskripsi": "Transportasi",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 100000,
      "saldo": 22341549,
      "id": ""
    },
    {
      "tanggal": "2026-06-11",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 22339049,
      "id": ""
    },
    {
      "tanggal": "2026-06-12",
      "deskripsi": "Laptop DAC",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 3300000,
      "saldo": 19039049,
      "id": ""
    },
    {
      "tanggal": "2026-06-12",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 19034049,
      "id": ""
    },
    {
      "tanggal": "2026-06-14",
      "deskripsi": "iPhone 15 Pro Natural Titanium 256 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 13650000,
      "saldo": 5384049,
      "id": ""
    },
    {
      "tanggal": "2026-06-14",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 5381549,
      "id": ""
    },
    {
      "tanggal": "2026-06-14",
      "deskripsi": "Clear Case Migoz",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 93297,
      "saldo": 5288252,
      "id": ""
    },
    {
      "tanggal": "2026-06-15",
      "deskripsi": "Capcut Pro",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 42468,
      "saldo": 5245784,
      "id": ""
    },
    {
      "tanggal": "2026-06-16",
      "deskripsi": "Adaptor + Pouch Migoz",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 153398,
      "saldo": 5092386,
      "id": ""
    },
    {
      "tanggal": "2026-06-17",
      "deskripsi": "iPhone 15 Pro Natural Titanium 256 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 14300000,
      "uangKeluar": 0,
      "saldo": 19392386,
      "id": ""
    },
    {
      "tanggal": "2026-06-17",
      "deskripsi": "Affiliate Tiktok",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 224056,
      "uangKeluar": 0,
      "saldo": 19616442,
      "id": ""
    },
    {
      "tanggal": "2026-06-18",
      "deskripsi": "Transportasi",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 100000,
      "saldo": 19516442,
      "id": ""
    },
    {
      "tanggal": "2026-06-18",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 19513942,
      "id": ""
    },
    {
      "tanggal": "2026-06-18",
      "deskripsi": "iPhone 15 Pro Blue Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 12500000,
      "saldo": 7013942,
      "id": ""
    },
    {
      "tanggal": "2026-06-18",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 7011442,
      "id": ""
    },
    {
      "tanggal": "2026-06-18",
      "deskripsi": "Clear Case + Tampered Glass Migoz",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 76799,
      "saldo": 6934643,
      "id": ""
    },
    {
      "tanggal": "2026-06-18",
      "deskripsi": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 13800000,
      "uangKeluar": 0,
      "saldo": 20734643,
      "id": ""
    },
    {
      "tanggal": "2026-06-18",
      "deskripsi": "Transportasi",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 45400,
      "saldo": 20689243,
      "id": ""
    },
    {
      "tanggal": "2026-06-19",
      "deskripsi": "Laptop DAC",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 3300000,
      "uangKeluar": 0,
      "saldo": 23989243,
      "id": ""
    },
    {
      "tanggal": "2026-06-20",
      "deskripsi": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 12800000,
      "saldo": 11189243,
      "id": ""
    },
    {
      "tanggal": "2026-06-20",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 11186743,
      "id": ""
    },
    {
      "tanggal": "2026-06-20",
      "deskripsi": "Tamperd Glass Migoz",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 32999,
      "saldo": 11153744,
      "id": ""
    },
    {
      "tanggal": "2026-06-24",
      "deskripsi": "Tamperd Glass Migoz",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 84698,
      "saldo": 11069046,
      "id": ""
    },
    {
      "tanggal": "2026-06-25",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 390000,
      "saldo": 10679046,
      "id": ""
    },
    {
      "tanggal": "2026-06-25",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 300000,
      "saldo": 10379046,
      "id": ""
    },
    {
      "tanggal": "2026-06-25",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 9000,
      "saldo": 10370046,
      "id": ""
    },
    {
      "tanggal": "2026-06-30",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 6000,
      "saldo": 10364046,
      "id": ""
    },
    {
      "tanggal": "2026-07-02",
      "deskripsi": "Affiliate Tiktok (Uang Masuk #31)",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 739535,
      "uangKeluar": 0,
      "saldo": 11103581,
      "id": ""
    },
    {
      "tanggal": "2026-07-02",
      "deskripsi": "Abah Ridho (Uang Keluar #79)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 2000000,
      "saldo": 9103581,
      "id": ""
    },
    {
      "tanggal": "2026-07-02",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 9101081,
      "id": ""
    },
    {
      "tanggal": "2026-07-03",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 4000,
      "saldo": 9097081,
      "id": ""
    },
    {
      "tanggal": "2026-07-07",
      "deskripsi": "Affiliate Tiktok (Uang Masuk #32)",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 120237,
      "uangKeluar": 0,
      "saldo": 9217318,
      "id": ""
    },
    {
      "tanggal": "2026-07-13",
      "deskripsi": "Affiliate Tiktok (Uang Masuk #33)",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 178454,
      "uangKeluar": 0,
      "saldo": 9395772,
      "id": ""
    },
    {
      "tanggal": "2026-07-13",
      "deskripsi": "iPhone 13 Midnight 128 GB iBox (beli dari Wahyu)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6800000,
      "saldo": 2595772,
      "id": ""
    },
    {
      "tanggal": "2026-07-13",
      "deskripsi": "iPhone 15 Pro Natural Titanium 128 GB iBox (jual ke Wahyu)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 13900000,
      "uangKeluar": 0,
      "saldo": 16495772,
      "id": ""
    },
    {
      "tanggal": "2026-07-13",
      "deskripsi": "Affiliate Tiktok Iklan",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 73900,
      "saldo": 16421872,
      "id": ""
    },
    {
      "tanggal": "2026-07-18",
      "deskripsi": "iPhone 15 Pro Blue Titanium 128 GB iBox (jual tunai)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 12700000,
      "uangKeluar": 0,
      "saldo": 29121872,
      "id": ""
    },
    {
      "tanggal": "2026-07-20",
      "deskripsi": "iPhone 15 Pink 128 GB iBox (beli dari Thariq)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 10000000,
      "saldo": 19121872,
      "id": ""
    },
    {
      "tanggal": "2026-07-20",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 47000,
      "saldo": 19074872,
      "id": ""
    },
    {
      "tanggal": "2026-07-20",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 19072372,
      "id": ""
    },
    {
      "tanggal": "2026-07-20",
      "deskripsi": "Tiktok (Uang Keluar #82)",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 88999,
      "saldo": 18983373,
      "id": ""
    },
    {
      "tanggal": "2026-07-23",
      "deskripsi": "iPhone 15 Pro Natural Titanium 256 GB iBox (beli dari Santoso)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 14600000,
      "saldo": 4383373,
      "id": ""
    },
    {
      "tanggal": "2026-07-23",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 4380873,
      "id": ""
    },
    {
      "tanggal": "2026-07-23",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 25000,
      "saldo": 4355873,
      "id": ""
    },
    {
      "tanggal": "2026-07-23",
      "deskripsi": "Tiktok (Uang Keluar #84)",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 45999,
      "saldo": 4309874,
      "id": ""
    },
    {
      "tanggal": "2026-07-25",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 350000,
      "saldo": 3959874,
      "id": ""
    },
    {
      "tanggal": "2026-07-25",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 3954874,
      "id": ""
    },
    {
      "tanggal": "2026-07-26",
      "deskripsi": "Affiliate Tiktok Iklan",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 183000,
      "saldo": 3771874,
      "id": ""
    },
    {
      "tanggal": "2026-07-27",
      "deskripsi": "Affiliate Tiktok Iklan",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 55600,
      "saldo": 3716274,
      "id": ""
    },
    {
      "tanggal": "2026-07-27",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 48000,
      "saldo": 3668274,
      "id": ""
    },
    {
      "tanggal": "2026-07-27",
      "deskripsi": "iPhone 13 Midnight 128 GB iBox (jual ke Arfan)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7800000,
      "uangKeluar": 0,
      "saldo": 11468274,
      "id": ""
    },
    {
      "tanggal": "2026-07-27",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 1200,
      "saldo": 11467074,
      "id": ""
    },
    {
      "tanggal": "2026-07-29",
      "deskripsi": "CapCut Pro",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 37900,
      "saldo": 11429174,
      "id": ""
    },
    {
      "tanggal": "2026-07-31",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 6000,
      "saldo": 11423174,
      "id": ""
    },
    {
      "tanggal": "2026-08-03",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 4000,
      "saldo": 11419174,
      "id": ""
    },
    {
      "tanggal": "2026-08-03",
      "deskripsi": "DP iPhone 15 Pro Natural Titanium 256 GB iBox (Ferdiansyah)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7000000,
      "uangKeluar": 0,
      "saldo": 18419174,
      "id": ""
    },
    {
      "tanggal": "2026-08-04",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 65000,
      "saldo": 18354174,
      "id": ""
    },
    {
      "tanggal": "2026-08-04",
      "deskripsi": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 13400000,
      "saldo": 4954174,
      "id": ""
    },
    {
      "tanggal": "2026-08-04",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 4951674,
      "id": ""
    },
    {
      "tanggal": "2026-08-05",
      "deskripsi": "Kabel Ugreen (konten Tiktok)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 91400,
      "saldo": 4860274,
      "id": ""
    },
    {
      "tanggal": "2026-08-07",
      "deskripsi": "iPhone 15 Pro Natural Titanium 256 GB iBox (pelunasan Ferdiansyah)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 8400000,
      "uangKeluar": 0,
      "saldo": 13260274,
      "id": ""
    },
    {
      "tanggal": "2026-08-07",
      "deskripsi": "Operasional (Uang Keluar #92)",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 34000,
      "saldo": 13226274,
      "id": ""
    },
    {
      "tanggal": "2026-08-07",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 13223774,
      "id": ""
    },
    {
      "tanggal": "2026-08-15",
      "deskripsi": "iPhone 15 Pink 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 10000000,
      "uangKeluar": 0,
      "saldo": 23223774,
      "id": ""
    },
    {
      "tanggal": "2026-08-15",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 60000,
      "saldo": 23163774,
      "id": ""
    },
    {
      "tanggal": "2026-08-15",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 23161274,
      "id": ""
    },
    {
      "tanggal": "2026-08-17",
      "deskripsi": "Affiliate Tiktok Iklan",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 345600,
      "saldo": 22815674,
      "id": ""
    },
    {
      "tanggal": "2026-08-25",
      "deskripsi": "Affiliate Tiktok (Uang Masuk #34)",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 404762,
      "uangKeluar": 0,
      "saldo": 23220436,
      "id": ""
    },
    {
      "tanggal": "2026-08-26",
      "deskripsi": "Deviden (Uang Keluar #95)",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 350000,
      "saldo": 22870436,
      "id": ""
    },
    {
      "tanggal": "2026-08-26",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 22865436,
      "id": ""
    },
    {
      "tanggal": "2026-08-26",
      "deskripsi": "iPhone 13 Midnight 128 GB iBox (beli dari Surya)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7397500,
      "saldo": 15467936,
      "id": ""
    },
    {
      "tanggal": "2026-08-26",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 15465436,
      "id": ""
    },
    {
      "tanggal": "2026-08-26",
      "deskripsi": "Operasional (Uang Keluar #96)",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 21000,
      "saldo": 15444436,
      "id": ""
    },
    {
      "tanggal": "2026-08-26",
      "deskripsi": "Operasional (Uang Keluar #97)",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 30000,
      "saldo": 15414436,
      "id": ""
    },
    {
      "tanggal": "2026-08-26",
      "deskripsi": "iPhone 15 Pro 256 GB iBox (beli dari Wahyoga)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 14600000,
      "saldo": 814436,
      "id": ""
    },
    {
      "tanggal": "2026-08-26",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 811936,
      "id": ""
    },
    {
      "tanggal": "2026-08-27",
      "deskripsi": "Tiktok (Uang Keluar #98)",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 61098,
      "saldo": 750838,
      "id": ""
    },
    {
      "tanggal": "2026-08-29",
      "deskripsi": "Migoz Official (Uang Masuk #35)",
      "quantity": "",
      "kategori": "Pendapatan lainnya",
      "uangMasuk": 150000,
      "uangKeluar": 0,
      "saldo": 900838,
      "id": ""
    },
    {
      "tanggal": "2026-08-31",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 6000,
      "saldo": 894838,
      "id": ""
    },
    {
      "tanggal": "2026-09-03",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 4000,
      "saldo": 890838,
      "id": ""
    },
    {
      "tanggal": "2026-09-04",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 24000,
      "saldo": 866838,
      "id": ""
    },
    {
      "tanggal": "2026-09-04",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 13900000,
      "uangKeluar": 0,
      "saldo": 14766838,
      "id": ""
    },
    {
      "tanggal": "2026-09-04",
      "deskripsi": "iPhone 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7800000,
      "uangKeluar": 0,
      "saldo": 22566838,
      "id": ""
    },
    {
      "tanggal": "2026-09-04",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 20000,
      "saldo": 22546838,
      "id": ""
    },
    {
      "tanggal": "2026-09-05",
      "deskripsi": "Capcut Pro",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 33900,
      "saldo": 22512938,
      "id": ""
    },
    {
      "tanggal": "2026-09-05",
      "deskripsi": "iklan WhatsApp",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 21500,
      "saldo": 22491438,
      "id": ""
    },
    {
      "tanggal": "2026-09-06",
      "deskripsi": "salary",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 1000000,
      "saldo": 21491438,
      "id": ""
    },
    {
      "tanggal": "2026-09-06",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 21488938,
      "id": ""
    },
    {
      "tanggal": "2026-09-08",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 9900,
      "saldo": 21479038,
      "id": ""
    },
    {
      "tanggal": "2026-09-08",
      "deskripsi": "iPhone 15 Pro Natural Titanium 128 GB ibox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 12900000,
      "saldo": 8579038,
      "id": ""
    },
    {
      "tanggal": "2026-09-08",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 8576538,
      "id": ""
    },
    {
      "tanggal": "2026-09-12",
      "deskripsi": "bensin",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 25000,
      "saldo": 8551538,
      "id": "nnpfm7jh"
    },
    {
      "tanggal": "2026-09-12",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 13400000,
      "uangKeluar": 0,
      "saldo": 21951538,
      "id": "feuw8zre"
    },
    {
      "tanggal": "2026-09-14",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 13000000,
      "saldo": 8951538,
      "id": "hyd30uy8"
    },
    {
      "tanggal": "2026-09-14",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 8949038,
      "id": "4d5uk5q7"
    },
    {
      "tanggal": "2026-09-14",
      "deskripsi": "Clear Case Migoz",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 63198,
      "saldo": 8885840,
      "id": "r7x9g9tp"
    },
    {
      "tanggal": "2026-09-14",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 50000,
      "saldo": 8835840,
      "id": "eck4cu1o"
    },
    {
      "tanggal": "2026-09-14",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 8833340,
      "id": "r6q64qj5"
    },
    {
      "tanggal": "2026-09-19",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 8828340,
      "id": "aw97r3dn"
    },
    {
      "tanggal": "2026-09-19",
      "deskripsi": "iPhone 15 Pro 256 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 14900000,
      "uangKeluar": 0,
      "saldo": 23728340,
      "id": "kgdvtqv1"
    },
    {
      "tanggal": "2026-09-20",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 50000,
      "saldo": 23678340,
      "id": "d2pdj7j7"
    },
    {
      "tanggal": "2026-09-20",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 14000000,
      "uangKeluar": 0,
      "saldo": 37678340,
      "id": "yvhoz1l2"
    },
    {
      "tanggal": "2026-09-20",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 39000,
      "saldo": 37639340,
      "id": "ipkko553"
    },
    {
      "tanggal": "2026-09-20",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 35000,
      "saldo": 37604340,
      "id": "2wxj5wqk"
    },
    {
      "tanggal": "2026-09-22",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 16800,
      "saldo": 37587540,
      "id": "tl3vqlh1"
    },
    {
      "tanggal": "2026-09-22",
      "deskripsi": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 13000000,
      "saldo": 24587540,
      "id": "lwcho7nd"
    },
    {
      "tanggal": "2026-09-22",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 24585040,
      "id": "v87s55ir"
    },
    {
      "tanggal": "2026-09-22",
      "deskripsi": "iPhone 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7300000,
      "saldo": 17285040,
      "id": "ifvfiwve"
    },
    {
      "tanggal": "2026-09-22",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 17282540,
      "id": "340s6zpu"
    },
    {
      "tanggal": "2026-09-22",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 24500,
      "saldo": 17258040,
      "id": "ulimojj3"
    },
    {
      "tanggal": "2026-09-25",
      "deskripsi": "Deviden",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 350000,
      "saldo": 16908040,
      "id": "1tltqhlc"
    },
    {
      "tanggal": "2026-09-25",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 16903040,
      "id": "n9gt9d5b"
    },
    {
      "tanggal": "2026-09-25",
      "deskripsi": "Clear Case",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 63198,
      "saldo": 16839842,
      "id": "0rwqty4c"
    },
    {
      "tanggal": "2026-09-25",
      "deskripsi": "sim injector",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 45900,
      "saldo": 16793942,
      "id": "g7zagv14"
    },
    {
      "tanggal": "2026-09-30",
      "deskripsi": "iPhone 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7700000,
      "uangKeluar": 0,
      "saldo": 24493942,
      "id": "pecz2a42"
    },
    {
      "tanggal": "2026-09-30",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 13600000,
      "uangKeluar": 0,
      "saldo": 38093942,
      "id": "9s8h6nry"
    },
    {
      "tanggal": "2026-09-30",
      "deskripsi": "iPhone 13 128 GB iBox (Starlight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 6600000,
      "saldo": 31493942,
      "id": "nc6ovbbe"
    },
    {
      "tanggal": "2026-09-30",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 25000,
      "saldo": 31468942,
      "id": "899p97td"
    },
    {
      "tanggal": "2026-09-30",
      "deskripsi": "Tamperd Glass Migoz",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 31499,
      "saldo": 31437443,
      "id": "b2ny4rq4"
    },
    {
      "tanggal": "2026-10-01",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 13200000,
      "saldo": 18237443,
      "id": "uag1gp59"
    },
    {
      "tanggal": "2026-10-01",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 54900,
      "saldo": 18182543,
      "id": "mnmphtzs"
    },
    {
      "tanggal": "2026-10-01",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 18180043,
      "id": "ee96kuae"
    },
    {
      "tanggal": "2026-09-30",
      "deskripsi": "biaya bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 6000,
      "saldo": 18174043,
      "id": "3ei88yju"
    },
    {
      "tanggal": "2026-10-02",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 13200000,
      "saldo": 4974043,
      "id": "rlbj2vu0"
    },
    {
      "tanggal": "2026-10-02",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 4971543,
      "id": "qkzhpxa4"
    },
    {
      "tanggal": "2026-10-02",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 24000,
      "saldo": 4947543,
      "id": "d1uwjoqr"
    },
    {
      "tanggal": "2026-10-02",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 35000,
      "saldo": 4912543,
      "id": "4iu4eamv"
    },
    {
      "tanggal": "2026-10-04",
      "deskripsi": "iPhone 13 128 G iBox (Starlight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7000000,
      "uangKeluar": 0,
      "saldo": 11912543,
      "id": "ugs8opxp"
    },
    {
      "tanggal": "2026-10-03",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 4000,
      "saldo": 11908543,
      "id": "p1jjlln9"
    },
    {
      "tanggal": "2026-10-05",
      "deskripsi": "salary",
      "quantity": "",
      "kategori": " Ekuitas & aset",
      "uangMasuk": 0,
      "uangKeluar": 1000000,
      "saldo": 10908543,
      "id": "gf67gr1w"
    },
    {
      "tanggal": "2026-10-05",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 11500,
      "saldo": 10897043,
      "id": "ow1wfa43"
    },
    {
      "tanggal": "2026-10-06",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 13700000,
      "uangKeluar": 0,
      "saldo": 24597043,
      "id": "rtzsfq7z"
    },
    {
      "tanggal": "2026-10-06",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 31200,
      "saldo": 24565843,
      "id": "uof0bktj"
    },
    {
      "tanggal": "2026-10-07",
      "deskripsi": "iPhone 15 pro 256 GB Blue titanium iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 14300000,
      "saldo": 10265843,
      "id": "sni4hfbf"
    },
    {
      "tanggal": "2026-10-07",
      "deskripsi": "biaya bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 10263343,
      "id": "a52ctd6d"
    },
    {
      "tanggal": "2026-10-07",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 26000,
      "saldo": 10237343,
      "id": "0laqx153"
    },
    {
      "tanggal": "2026-10-07",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 35000,
      "saldo": 10202343,
      "id": "49xp7epa"
    },
    {
      "tanggal": "2026-10-08",
      "deskripsi": "Clear Case",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 62998,
      "saldo": 10139345,
      "id": "7jcbrogn"
    },
    {
      "tanggal": "2026-10-09",
      "deskripsi": "CapCut Pro",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 55669,
      "saldo": 10083676,
      "id": "e6azvt3l"
    },
    {
      "tanggal": "2026-10-09",
      "deskripsi": "iklan affiliate",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 351150,
      "saldo": 9732526,
      "id": "9t5d242e"
    },
    {
      "tanggal": "2026-10-11",
      "deskripsi": "iPhone 13 Midnight 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7400000,
      "saldo": 2332526,
      "id": "1wv7g747"
    },
    {
      "tanggal": "2026-10-11",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 2330026,
      "id": "qncmckbq"
    },
    {
      "tanggal": "2026-10-11",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 30000,
      "saldo": 2300026,
      "id": "qoi0oe5i"
    },
    {
      "tanggal": "2026-10-11",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 39000,
      "saldo": 2261026,
      "id": "afkdeasd"
    },
    {
      "tanggal": "2026-10-11",
      "deskripsi": "Clear Case + Tampered Glass Migoz",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 61198,
      "saldo": 2199828,
      "id": "kwaqgfrc"
    },
    {
      "tanggal": "2026-10-11",
      "deskripsi": "pembersih jamur",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 36999,
      "saldo": 2162829,
      "id": "2f70yvo3"
    },
    {
      "tanggal": "2026-10-12",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 13600000,
      "uangKeluar": 0,
      "saldo": 15762829,
      "id": "oog63gdl"
    },
    {
      "tanggal": "2026-10-12",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 19000,
      "saldo": 15743829,
      "id": "7u0i0214"
    },
    {
      "tanggal": "2026-10-12",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 70500,
      "saldo": 15673329,
      "id": "eksu2ojf"
    },
    {
      "tanggal": "2026-10-13",
      "deskripsi": "iPhone 15 Pro 256 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 15000000,
      "uangKeluar": 0,
      "saldo": 30673329,
      "id": "uri5m0g6"
    },
    {
      "tanggal": "2026-10-13",
      "deskripsi": "iPhone 14 128 GB iBox (Blue)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7700000,
      "saldo": 22973329,
      "id": "w7ws5ajm"
    },
    {
      "tanggal": "2026-10-13",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 13200000,
      "saldo": 9773329,
      "id": "v6el17da"
    },
    {
      "tanggal": "2026-10-13",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 2500,
      "saldo": 9770829,
      "id": "dhuceqi0"
    },
    {
      "tanggal": "2026-10-13",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 33000,
      "saldo": 9737829,
      "id": "cjvjyqfb"
    },
    {
      "tanggal": "2026-10-13",
      "deskripsi": "Tamperd Glass Migoz",
      "quantity": 2,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 58104,
      "saldo": 9679725,
      "id": "5zr9popz"
    },
    {
      "tanggal": "2026-10-13",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 35000,
      "saldo": 9644725,
      "id": "ukacdor2"
    },
    {
      "tanggal": "2026-10-17",
      "deskripsi": "iPhone 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 7650000,
      "uangKeluar": 0,
      "saldo": 17294725,
      "id": "gs2hvppm"
    },
    {
      "tanggal": "2026-10-18",
      "deskripsi": "iPhone 13 128 GB iBox (Midnight)",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 7100000,
      "saldo": 10194725,
      "id": "1w27x71i"
    },
    {
      "tanggal": "2026-10-18",
      "deskripsi": "Tamperd Glass Migoz",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 0,
      "uangKeluar": 31999,
      "saldo": 10162726,
      "id": "vjo0lho2"
    },
    {
      "tanggal": "2026-10-18",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 33000,
      "saldo": 10129726,
      "id": "wgzmp92j"
    },
    {
      "tanggal": "2026-10-20",
      "deskripsi": "iPhone 14 128 GB iBox (Blue)",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 8400000,
      "uangKeluar": 0,
      "saldo": 18529726,
      "id": "y10jfegr"
    },
    {
      "tanggal": "2026-10-20",
      "deskripsi": "iPhone 17 blue 256 GB iBox",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 14200000,
      "saldo": 4329726,
      "id": "we9lgrfi"
    },
    {
      "tanggal": "2026-10-20",
      "deskripsi": "Biaya Bank",
      "quantity": "",
      "kategori": "Biaya Bank",
      "uangMasuk": 0,
      "uangKeluar": 5000,
      "saldo": 4324726,
      "id": "v7lpo5h6"
    },
    {
      "tanggal": "2026-10-20",
      "deskripsi": "Operasional",
      "quantity": "",
      "kategori": "Biaya Operasional",
      "uangMasuk": 0,
      "uangKeluar": 20000,
      "saldo": 4304726,
      "id": "f8uju1ra"
    },
    {
      "tanggal": "2026-10-20",
      "deskripsi": "Clear Case",
      "quantity": 1,
      "kategori": " Inventory",
      "uangMasuk": 0,
      "uangKeluar": 43702,
      "saldo": 4261024,
      "id": "kqwju4qw"
    },
    {
      "tanggal": "2026-10-21",
      "deskripsi": "Iphone 15 Pro Natural Titanium 128 GB iBox",
      "quantity": 1,
      "kategori": "Penjualan Utama",
      "uangMasuk": 13500000,
      "uangKeluar": 0,
      "saldo": 17761024,
      "id": "qnt8udzy"
    }
  ],
  "sales": [
    {
      "nota": 1,
      "tanggalMasuk": "2025-08-23",
      "tanggalKeluar": "2025-08-28",
      "tipeModel": "iPhone 11 White 128 GB inter",
      "hargaBeli": 3350000,
      "hargaJual": 3900000,
      "profit": 550000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 1
    },
    {
      "nota": 2,
      "tanggalMasuk": "2025-08-23",
      "tanggalKeluar": "2025-09-02",
      "tipeModel": "iPhone XR Black 64 GB inter",
      "hargaBeli": 2000000,
      "hargaJual": 2230000,
      "profit": 230000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 2
    },
    {
      "nota": 3,
      "tanggalMasuk": "2025-08-23",
      "tanggalKeluar": "2025-09-06",
      "tipeModel": "iPhone 12 Mint 128 GB inter",
      "hargaBeli": 3450000,
      "hargaJual": 3500000,
      "profit": 50000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 3
    },
    {
      "nota": 4,
      "tanggalMasuk": "2025-09-08",
      "tanggalKeluar": "2025-09-26",
      "tipeModel": "iPhone 13 Pro Max Graphite 128 GB iBox",
      "hargaBeli": 9000000,
      "hargaJual": 9100000,
      "profit": 100000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 4
    },
    {
      "nota": 5,
      "tanggalMasuk": "2025-10-03",
      "tanggalKeluar": "2025-10-12",
      "tipeModel": "iPhone 11 Purple 128 GB inter",
      "hargaBeli": 2650000,
      "hargaJual": 3200000,
      "profit": 550000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 5
    },
    {
      "nota": 6,
      "tanggalMasuk": "2025-10-03",
      "tanggalKeluar": "2025-10-12",
      "tipeModel": "iPhone 11 White 128 GB inter",
      "hargaBeli": 2650000,
      "hargaJual": 3000000,
      "profit": 350000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 6
    },
    {
      "nota": 7,
      "tanggalMasuk": "2025-10-03",
      "tanggalKeluar": "2025-10-13",
      "tipeModel": "iPhone 11 Black 128 GB inter",
      "hargaBeli": 2850000,
      "hargaJual": 3100000,
      "profit": 250000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 7
    },
    {
      "nota": 8,
      "tanggalMasuk": "2025-10-03",
      "tanggalKeluar": "2025-10-30",
      "tipeModel": "iPhone 11 Purple 128 GB inter",
      "hargaBeli": 2200000,
      "hargaJual": 3100000,
      "profit": 900000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 8
    },
    {
      "nota": 9,
      "tanggalMasuk": "2025-10-16",
      "tanggalKeluar": "2025-11-02",
      "tipeModel": "iPhone XR White 256 GB inter",
      "hargaBeli": 2500000,
      "hargaJual": 2750000,
      "profit": 250000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 9
    },
    {
      "nota": 10,
      "tanggalMasuk": "2025-10-16",
      "tanggalKeluar": "2025-11-09",
      "tipeModel": "iPhone 11 Black 256 GB inter",
      "hargaBeli": 3150000,
      "hargaJual": 3481505,
      "profit": 331505,
      "turnoverDays": null,
      "keterangan": "",
      "id": 10
    },
    {
      "nota": 11,
      "tanggalMasuk": "2025-10-16",
      "tanggalKeluar": "2025-11-10",
      "tipeModel": "iPhone 11 Purple 64 GB inter",
      "hargaBeli": 2750000,
      "hargaJual": 2900000,
      "profit": 150000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 11
    },
    {
      "nota": 12,
      "tanggalMasuk": "2025-10-16",
      "tanggalKeluar": "2025-12-05",
      "tipeModel": "iPhone XR White 64 GB iBox",
      "hargaBeli": 2850000,
      "hargaJual": 2850000,
      "profit": 0,
      "turnoverDays": null,
      "keterangan": "",
      "id": 12
    },
    {
      "nota": 13,
      "tanggalMasuk": "2025-11-14",
      "tanggalKeluar": "2025-11-21",
      "tipeModel": "iPhone 13 Midnight 128 GB iBox",
      "hargaBeli": 6850000,
      "hargaJual": 7250000,
      "profit": 400000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 13
    },
    {
      "nota": 14,
      "tanggalMasuk": "2025-11-14",
      "tanggalKeluar": "2025-12-01",
      "tipeModel": "iPhone 13 Midnight 128 GB iBox",
      "hargaBeli": 6850000,
      "hargaJual": 7200000,
      "profit": 350000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 14
    },
    {
      "nota": 15,
      "tanggalMasuk": "2025-11-24",
      "tanggalKeluar": "2025-11-26",
      "tipeModel": "iPhone 11 Black 64 GB iBox",
      "hargaBeli": 3700000,
      "hargaJual": 3700000,
      "profit": 0,
      "turnoverDays": null,
      "keterangan": "",
      "id": 15
    },
    {
      "nota": 16,
      "tanggalMasuk": "2025-11-26",
      "tanggalKeluar": "2025-12-02",
      "tipeModel": "iPhone 15 Blue 128 GB iBox",
      "hargaBeli": 8350000,
      "hargaJual": 9100000,
      "profit": 750000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 16
    },
    {
      "nota": 17,
      "tanggalMasuk": "2025-12-02",
      "tanggalKeluar": "2025-12-06",
      "tipeModel": "iPhone 13 Midnight 128 GB iBox",
      "hargaBeli": 6650000,
      "hargaJual": 7100000,
      "profit": 450000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 17
    },
    {
      "nota": 18,
      "tanggalMasuk": "2025-12-05",
      "tanggalKeluar": "2025-12-14",
      "tipeModel": "iPhone 13 Starlight 128 GB iBox",
      "hargaBeli": 6850000,
      "hargaJual": 7200000,
      "profit": 350000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 18
    },
    {
      "nota": 19,
      "tanggalMasuk": "2025-12-10",
      "tanggalKeluar": "2025-12-17",
      "tipeModel": "iPhone 13 Midnight 128 GB iBox",
      "hargaBeli": 6700000,
      "hargaJual": 7100000,
      "profit": 400000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 19
    },
    {
      "nota": 20,
      "tanggalMasuk": "2025-12-15",
      "tanggalKeluar": "2025-12-26",
      "tipeModel": "iPhone 13 Pink 128 GB iBox",
      "hargaBeli": 6650000,
      "hargaJual": 7100000,
      "profit": 450000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 20
    },
    {
      "nota": 21,
      "tanggalMasuk": "2025-12-19",
      "tanggalKeluar": "2026-01-03",
      "tipeModel": "iPhone 16 White 128 GB iBox",
      "hargaBeli": 12225000,
      "hargaJual": 12550000,
      "profit": 325000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 21
    },
    {
      "nota": 22,
      "tanggalMasuk": "2025-12-27",
      "tanggalKeluar": "2026-01-04",
      "tipeModel": "iPhone 13 Midnight 128 GB iBox",
      "hargaBeli": 6650000,
      "hargaJual": 7000000,
      "profit": 350000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 22
    },
    {
      "nota": 23,
      "tanggalMasuk": "2025-12-27",
      "tanggalKeluar": "2026-01-01",
      "tipeModel": "iPhone 13 Starlight 128 GB iBox",
      "hargaBeli": 6650000,
      "hargaJual": 7150000,
      "profit": 500000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 23
    },
    {
      "nota": 24,
      "tanggalMasuk": "2026-01-13",
      "tanggalKeluar": "2026-01-13",
      "tipeModel": "iPhone 13 Starlight 128 GB iBox",
      "hargaBeli": 7100000,
      "hargaJual": 7200000,
      "profit": 100000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 24
    },
    {
      "nota": 25,
      "tanggalMasuk": "2026-01-15",
      "tanggalKeluar": "2026-02-19",
      "tipeModel": "iPhone 13 Midnight 128 GB iBox",
      "hargaBeli": 6650000,
      "hargaJual": 6670000,
      "profit": 20000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 25
    },
    {
      "nota": 26,
      "tanggalMasuk": "2026-01-16",
      "tanggalKeluar": "2026-02-09",
      "tipeModel": "iPhone 13 Pink 128 GB inter",
      "hargaBeli": 4800000,
      "hargaJual": 5075000,
      "profit": 275000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 26
    },
    {
      "nota": 27,
      "tanggalMasuk": "2026-01-16",
      "tanggalKeluar": "2026-01-25",
      "tipeModel": "iPhone 12 White 128 GB Beacukai",
      "hargaBeli": 4650000,
      "hargaJual": 5300000,
      "profit": 650000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 27
    },
    {
      "nota": 28,
      "tanggalMasuk": "2026-01-25",
      "tanggalKeluar": "2026-02-04",
      "tipeModel": "iPhone 13 Starlight 128 GB iBox",
      "hargaBeli": 6700000,
      "hargaJual": 7100000,
      "profit": 400000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 28
    },
    {
      "nota": 29,
      "tanggalMasuk": "2026-01-25",
      "tanggalKeluar": "2026-02-14",
      "tipeModel": "iPhone 13 Starlight 128 GB iBox",
      "hargaBeli": 6750000,
      "hargaJual": 7035000,
      "profit": 285000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 29
    },
    {
      "nota": 30,
      "tanggalMasuk": "2026-02-05",
      "tanggalKeluar": "2026-02-23",
      "tipeModel": "iPhone 13 Starlight 128 GB iBox",
      "hargaBeli": 6700000,
      "hargaJual": 6900000,
      "profit": 200000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 30
    },
    {
      "nota": 31,
      "tanggalMasuk": "2026-02-15",
      "tanggalKeluar": "2026-02-26",
      "tipeModel": "iPhone 14 Blue 128 GB iBox",
      "hargaBeli": 7200000,
      "hargaJual": 7586875,
      "profit": 386875,
      "turnoverDays": null,
      "keterangan": "",
      "id": 31
    },
    {
      "nota": 32,
      "tanggalMasuk": "2026-02-20",
      "tanggalKeluar": "2026-03-18",
      "tipeModel": "iPhone 13 Starlight 128 GB iBox",
      "hargaBeli": 6500000,
      "hargaJual": 6800000,
      "profit": 300000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 32
    },
    {
      "nota": 33,
      "tanggalMasuk": "2026-02-23",
      "tanggalKeluar": "2026-02-27",
      "tipeModel": "iPhone 14 Blue 128 GB iBox",
      "hargaBeli": 7200000,
      "hargaJual": 7700000,
      "profit": 500000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 33
    },
    {
      "nota": 34,
      "tanggalMasuk": "2026-02-25",
      "tanggalKeluar": "2026-03-01",
      "tipeModel": "iPhone 11 Tosca 64 GB inter",
      "hargaBeli": 3000000,
      "hargaJual": 3000000,
      "profit": 0,
      "turnoverDays": null,
      "keterangan": "",
      "id": 34
    },
    {
      "nota": 35,
      "tanggalMasuk": "2026-02-28",
      "tanggalKeluar": "2026-03-25",
      "tipeModel": "iPhone 15 Tosca 128 GB Ibox",
      "hargaBeli": 9000000,
      "hargaJual": 9550000,
      "profit": 550000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 35
    },
    {
      "nota": 36,
      "tanggalMasuk": "2026-03-05",
      "tanggalKeluar": "2026-03-09",
      "tipeModel": "iPhone 14 Blue 128 GB iBox",
      "hargaBeli": 7350000,
      "hargaJual": 7850000,
      "profit": 500000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 36
    },
    {
      "nota": 37,
      "tanggalMasuk": "2026-03-10",
      "tanggalKeluar": "2026-03-15",
      "tipeModel": "iPhone 14 Blue 128 GB iBox",
      "hargaBeli": 7300000,
      "hargaJual": 7800000,
      "profit": 500000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 37
    },
    {
      "nota": 38,
      "tanggalMasuk": "2026-04-02",
      "tanggalKeluar": "2026-04-24",
      "tipeModel": "iPhone 15 Blue 128 GB Beacukai",
      "hargaBeli": 8400000,
      "hargaJual": 8700000,
      "profit": 300000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 38
    },
    {
      "nota": 39,
      "tanggalMasuk": "2026-04-02",
      "tanggalKeluar": "2026-04-12",
      "tipeModel": "iPhone 14 Blue 128 GB iBox",
      "hargaBeli": 7550000,
      "hargaJual": 7900000,
      "profit": 350000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 39
    },
    {
      "nota": 40,
      "tanggalMasuk": "2026-04-02",
      "tanggalKeluar": "2026-04-12",
      "tipeModel": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "hargaBeli": 12100000,
      "hargaJual": 12700000,
      "profit": 600000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 40
    },
    {
      "nota": 41,
      "tanggalMasuk": "2026-04-12",
      "tanggalKeluar": "2026-04-13",
      "tipeModel": "iPhone 14 Blue 128 GB iBox",
      "hargaBeli": 7500000,
      "hargaJual": 7900000,
      "profit": 400000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 41
    },
    {
      "nota": 42,
      "tanggalMasuk": "2026-04-17",
      "tanggalKeluar": "2026-04-24",
      "tipeModel": "iPhone 15 Pro White Titanium 256 GB iBox",
      "hargaBeli": 14150000,
      "hargaJual": 14900000,
      "profit": 750000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 42
    },
    {
      "nota": 43,
      "tanggalMasuk": "2026-04-18",
      "tanggalKeluar": "2026-04-27",
      "tipeModel": "iPhone 14 Blue 128 GB iBox",
      "hargaBeli": 7500000,
      "hargaJual": 7925000,
      "profit": 425000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 43
    },
    {
      "nota": 44,
      "tanggalMasuk": "2026-04-28",
      "tanggalKeluar": "2026-05-31",
      "tipeModel": "iPhone 16 Pro Max White Titanium 256 GB iBox",
      "hargaBeli": 17500000,
      "hargaJual": 17500000,
      "profit": 0,
      "turnoverDays": null,
      "keterangan": "",
      "id": 44
    },
    {
      "nota": 45,
      "tanggalMasuk": "2026-04-29",
      "tanggalKeluar": "2026-05-16",
      "tipeModel": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "hargaBeli": 13200000,
      "hargaJual": 13900000,
      "profit": 700000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 45
    },
    {
      "nota": 46,
      "tanggalMasuk": "2026-05-23",
      "tanggalKeluar": "2026-05-31",
      "tipeModel": "iPhone 15 Pro Blue Titanium 128 GB Ibox",
      "hargaBeli": 12800000,
      "hargaJual": 13500000,
      "profit": 700000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 46
    },
    {
      "nota": 47,
      "tanggalMasuk": "2026-05-31",
      "tanggalKeluar": "2026-06-08",
      "tipeModel": "iPhone 14 Pro Max Deep Purple 128 GB iBox",
      "hargaBeli": 11500000,
      "hargaJual": 11900000,
      "profit": 400000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 47
    },
    {
      "nota": 48,
      "tanggalMasuk": "2026-06-05",
      "tanggalKeluar": "2026-06-18",
      "tipeModel": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "hargaBeli": 12850000,
      "hargaJual": 13800000,
      "profit": 950000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 48
    },
    {
      "nota": 49,
      "tanggalMasuk": "2026-06-08",
      "tanggalKeluar": "2026-06-11",
      "tipeModel": "iPhone 13 Midnight 128 GB iBox",
      "hargaBeli": 6500000,
      "hargaJual": 7350000,
      "profit": 850000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 49
    },
    {
      "nota": 50,
      "tanggalMasuk": "2026-06-12",
      "tanggalKeluar": "2026-06-19",
      "tipeModel": "Laptop DAC",
      "hargaBeli": 3300000,
      "hargaJual": 3300000,
      "profit": 0,
      "turnoverDays": null,
      "keterangan": "",
      "id": 50
    },
    {
      "nota": 51,
      "tanggalMasuk": "2026-06-14",
      "tanggalKeluar": "2026-06-17",
      "tipeModel": "iPhone 15 Pro Natural Titanium 256 GB iBox",
      "hargaBeli": 13650000,
      "hargaJual": 14300000,
      "profit": 650000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 51
    },
    {
      "nota": 52,
      "tanggalMasuk": "2026-06-18",
      "tanggalKeluar": "2026-07-18",
      "tipeModel": "iPhone 15 Pro Blue Titanium 128 GB Ibox",
      "hargaBeli": 12500000,
      "hargaJual": 12700000,
      "profit": 200000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 52
    },
    {
      "nota": 53,
      "tanggalMasuk": "2026-06-20",
      "tanggalKeluar": "2026-07-13",
      "tipeModel": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "hargaBeli": 12800000,
      "hargaJual": 13900000,
      "profit": 1100000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 53
    },
    {
      "nota": 54,
      "tanggalMasuk": "2026-07-13",
      "tanggalKeluar": "2026-07-27",
      "tipeModel": "iPhone 13 Midnight 128 GB iBox",
      "hargaBeli": 6800000,
      "hargaJual": 7800000,
      "profit": 1000000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 54
    },
    {
      "nota": 55,
      "tanggalMasuk": "2026-07-20",
      "tanggalKeluar": "2026-08-15",
      "tipeModel": "iPhone 15 Pink 128 GB iBox",
      "hargaBeli": 10000000,
      "hargaJual": 10000000,
      "profit": 0,
      "turnoverDays": null,
      "keterangan": "",
      "id": 55
    },
    {
      "nota": 56,
      "tanggalMasuk": "2026-07-23",
      "tanggalKeluar": "2026-08-07",
      "tipeModel": "iPhone 15 pro Natural Titanium 256 GB iBox",
      "hargaBeli": 14600000,
      "hargaJual": 15400000,
      "profit": 800000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 56
    },
    {
      "nota": 57,
      "tanggalMasuk": "2026-08-04",
      "tanggalKeluar": "2026-09-04",
      "tipeModel": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "hargaBeli": 13400000,
      "hargaJual": 13900000,
      "profit": 500000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 57
    },
    {
      "nota": 58,
      "tanggalMasuk": "2026-08-26",
      "tanggalKeluar": "2026-09-04",
      "tipeModel": "iPhone 13 Midnight 128 GB iBox",
      "hargaBeli": 7397500,
      "hargaJual": 7800000,
      "profit": 402500,
      "turnoverDays": null,
      "keterangan": "",
      "id": 58
    },
    {
      "nota": 59,
      "tanggalMasuk": "2026-08-26",
      "tanggalKeluar": "2026-09-19",
      "tipeModel": "iPhone 15 Pro Natural Titanium 256 GB iBox",
      "hargaBeli": 14600000,
      "hargaJual": 14900000,
      "profit": 300000,
      "turnoverDays": 24,
      "keterangan": "",
      "id": 59
    },
    {
      "nota": 60,
      "tanggalMasuk": "2026-09-08",
      "tanggalKeluar": "2026-09-12",
      "tipeModel": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "hargaBeli": 12900000,
      "hargaJual": 13400000,
      "profit": 500000,
      "turnoverDays": null,
      "keterangan": "",
      "id": 60
    },
    {
      "nota": 61,
      "tanggalMasuk": "2026-09-14",
      "tanggalKeluar": "2026-09-20",
      "tipeModel": "iPhone 15 pro natural titanium 128 GB iBox",
      "hargaBeli": 13000000,
      "hargaJual": 14000000,
      "profit": 1000000,
      "turnoverDays": 6,
      "keterangan": "",
      "id": 61
    },
    {
      "nota": 62,
      "tanggalMasuk": "2026-09-22",
      "tanggalKeluar": "2026-09-30",
      "tipeModel": "iPhone 15 pro natural titanium 128 GB iBox",
      "hargaBeli": 13000000,
      "hargaJual": 13600000,
      "profit": 600000,
      "turnoverDays": 8,
      "keterangan": "",
      "id": 62
    },
    {
      "nota": 63,
      "tanggalMasuk": "2026-09-22",
      "tanggalKeluar": "2026-09-30",
      "tipeModel": "iPhone 13 starlight 128 GB iBox",
      "hargaBeli": 7300000,
      "hargaJual": 7700000,
      "profit": 400000,
      "turnoverDays": 8,
      "keterangan": "",
      "id": 63
    },
    {
      "nota": 64,
      "tanggalMasuk": "2026-09-30",
      "tanggalKeluar": "2026-10-04",
      "tipeModel": "iPhone 13 starlight 128 GB iBox",
      "hargaBeli": 6600000,
      "hargaJual": 7000000,
      "profit": 400000,
      "turnoverDays": 4,
      "keterangan": "",
      "id": "64_1790772307834_tajqt"
    },
    {
      "nota": 65,
      "tanggalMasuk": "2026-10-01",
      "tanggalKeluar": "2026-10-06",
      "tipeModel": "iPhone 15 pro natural titanium 128 GB Digimap",
      "hargaBeli": 13200000,
      "hargaJual": 13700000,
      "profit": 500000,
      "turnoverDays": 5,
      "keterangan": "",
      "id": "65_1790865097937_z208x"
    },
    {
      "nota": 66,
      "tanggalMasuk": "2026-10-02",
      "tanggalKeluar": "2026-10-12",
      "tipeModel": "iPhone 15 pro natural titanium 128 GB iBox",
      "hargaBeli": 13200000,
      "hargaJual": 13600000,
      "profit": 400000,
      "turnoverDays": 10,
      "keterangan": "",
      "id": "66_1790939728157_ipn5b"
    },
    {
      "nota": 67,
      "tanggalMasuk": "2026-10-07",
      "tanggalKeluar": "2026-10-13",
      "tipeModel": "iPhone 15 pro blue titanium 256 GB iBox",
      "hargaBeli": 14300000,
      "hargaJual": 15000000,
      "profit": 700000,
      "turnoverDays": 6,
      "keterangan": "",
      "id": "67_1791373407936_t087f"
    },
    {
      "nota": 68,
      "tanggalMasuk": "2026-10-11",
      "tanggalKeluar": "2026-10-17",
      "tipeModel": "iPhone 13 midnight 128 GB SA/A blibli",
      "hargaBeli": 7400000,
      "hargaJual": 7650000,
      "profit": 250000,
      "turnoverDays": 6,
      "keterangan": "",
      "id": "68_1791710446376_z3270"
    },
    {
      "nota": 69,
      "tanggalMasuk": "2026-10-13",
      "tanggalKeluar": "2026-10-20",
      "tipeModel": "iPhone 14 blue 128 GB iBox",
      "hargaBeli": 7700000,
      "hargaJual": 8400000,
      "profit": 700000,
      "turnoverDays": 7,
      "keterangan": "",
      "id": "69_1791894265224_5gzh3"
    },
    {
      "nota": 70,
      "tanggalMasuk": "2026-10-13",
      "tanggalKeluar": "2026-10-21",
      "tipeModel": "iPhone 15 pro natural titanium 128 GB iBox",
      "hargaBeli": 13200000,
      "hargaJual": 13500000,
      "profit": 300000,
      "turnoverDays": 8,
      "keterangan": "",
      "id": "70_1791894286858_wi53e"
    },
    {
      "nota": 71,
      "tanggalMasuk": "2026-10-18",
      "tanggalKeluar": null,
      "tipeModel": "iPhone 13 midnight 128 GB iBox",
      "hargaBeli": 7100000,
      "hargaJual": 0,
      "profit": 0,
      "turnoverDays": null,
      "keterangan": "",
      "id": "71_1792310867141_p13e9"
    },
    {
      "nota": 72,
      "tanggalMasuk": "2026-10-20",
      "tanggalKeluar": null,
      "tipeModel": "iPhone 17 blue 256 GB iBox",
      "hargaBeli": 14200000,
      "hargaJual": 0,
      "profit": 0,
      "turnoverDays": null,
      "keterangan": "",
      "id": "72_1792477672477_g2x56"
    }
  ],
  "networth": [
    {
      "tanggal": "2025-08-21",
      "hari": "Aug 2025",
      "kas": 10070000,
      "stok": 0,
      "networth": 10070000
    },
    {
      "tanggal": "2025-08-22",
      "hari": "Aug 2025",
      "kas": 10070000,
      "stok": 0,
      "networth": 10070000
    },
    {
      "tanggal": "2025-08-23",
      "hari": "Aug 2025",
      "kas": 1200262,
      "stok": 8800000,
      "networth": 10000262
    },
    {
      "tanggal": "2025-08-24",
      "hari": "Aug 2025",
      "kas": 1200262,
      "stok": 8800000,
      "networth": 10000262
    },
    {
      "tanggal": "2025-08-25",
      "hari": "Aug 2025",
      "kas": 1000262,
      "stok": 8800000,
      "networth": 9800262
    },
    {
      "tanggal": "2025-08-26",
      "hari": "Aug 2025",
      "kas": 1000262,
      "stok": 8800000,
      "networth": 9800262
    },
    {
      "tanggal": "2025-08-27",
      "hari": "Aug 2025",
      "kas": 840742,
      "stok": 8800000,
      "networth": 9640742
    },
    {
      "tanggal": "2025-08-28",
      "hari": "Aug 2025",
      "kas": 4740742,
      "stok": 5450000,
      "networth": 10190742
    },
    {
      "tanggal": "2025-08-29",
      "hari": "Aug 2025",
      "kas": 4740742,
      "stok": 5450000,
      "networth": 10190742
    },
    {
      "tanggal": "2025-08-30",
      "hari": "Aug 2025",
      "kas": 4740742,
      "stok": 5450000,
      "networth": 10190742
    },
    {
      "tanggal": "2025-08-31",
      "hari": "Aug 2025",
      "kas": 4738791,
      "stok": 5450000,
      "networth": 10188791
    },
    {
      "tanggal": "2025-09-01",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 4738791,
      "stok": 5450000,
      "networth": 10188791
    },
    {
      "tanggal": "2025-09-02",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 6968791,
      "stok": 3450000,
      "networth": 10418791
    },
    {
      "tanggal": "2025-09-03",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 6968791,
      "stok": 3450000,
      "networth": 10418791
    },
    {
      "tanggal": "2025-09-04",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 6968791,
      "stok": 3450000,
      "networth": 10418791
    },
    {
      "tanggal": "2025-09-05",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 6968791,
      "stok": 3450000,
      "networth": 10418791
    },
    {
      "tanggal": "2025-09-06",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 10470742,
      "stok": 0,
      "networth": 10470742
    },
    {
      "tanggal": "2025-09-07",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 10470742,
      "stok": 0,
      "networth": 10470742
    },
    {
      "tanggal": "2025-09-08",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1470742,
      "stok": 9000000,
      "networth": 10470742
    },
    {
      "tanggal": "2025-09-09",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-10",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-11",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-12",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-13",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-14",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-15",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-16",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-17",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-18",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-19",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-20",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-21",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-22",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-23",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-24",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1432163,
      "stok": 9000000,
      "networth": 10432163
    },
    {
      "tanggal": "2025-09-25",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 1428663,
      "stok": 9000000,
      "networth": 10428663
    },
    {
      "tanggal": "2025-09-26",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 10528663,
      "stok": 0,
      "networth": 10528663
    },
    {
      "tanggal": "2025-09-27",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 10528663,
      "stok": 0,
      "networth": 10528663
    },
    {
      "tanggal": "2025-09-28",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 10528663,
      "stok": 0,
      "networth": 10528663
    },
    {
      "tanggal": "2025-09-29",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 10528663,
      "stok": 0,
      "networth": 10528663
    },
    {
      "tanggal": "2025-09-30",
      "hari": "2025-08-31T17:00:00.000Z",
      "kas": 10523663,
      "stok": 0,
      "networth": 10523663
    },
    {
      "tanggal": "2025-10-01",
      "hari": "Oct 2025",
      "kas": 10523663,
      "stok": 10350000,
      "networth": 20873663
    },
    {
      "tanggal": "2025-10-02",
      "hari": "Oct 2025",
      "kas": 10523663,
      "stok": 10350000,
      "networth": 20873663
    },
    {
      "tanggal": "2025-10-03",
      "hari": "Oct 2025",
      "kas": 147439,
      "stok": 10350000,
      "networth": 10497439
    },
    {
      "tanggal": "2025-10-04",
      "hari": "Oct 2025",
      "kas": 147439,
      "stok": 10350000,
      "networth": 10497439
    },
    {
      "tanggal": "2025-10-05",
      "hari": "Oct 2025",
      "kas": 147439,
      "stok": 10350000,
      "networth": 10497439
    },
    {
      "tanggal": "2025-10-06",
      "hari": "Oct 2025",
      "kas": 147439,
      "stok": 10350000,
      "networth": 10497439
    },
    {
      "tanggal": "2025-10-07",
      "hari": "Oct 2025",
      "kas": 147439,
      "stok": 10350000,
      "networth": 10497439
    },
    {
      "tanggal": "2025-10-08",
      "hari": "Oct 2025",
      "kas": 147439,
      "stok": 10350000,
      "networth": 10497439
    },
    {
      "tanggal": "2025-10-09",
      "hari": "Oct 2025",
      "kas": 147439,
      "stok": 10350000,
      "networth": 10497439
    },
    {
      "tanggal": "2025-10-10",
      "hari": "Oct 2025",
      "kas": 147439,
      "stok": 10350000,
      "networth": 10497439
    },
    {
      "tanggal": "2025-10-11",
      "hari": "Oct 2025",
      "kas": 147439,
      "stok": 10350000,
      "networth": 10497439
    },
    {
      "tanggal": "2025-10-12",
      "hari": "Oct 2025",
      "kas": 6331940,
      "stok": 5050000,
      "networth": 11381940
    },
    {
      "tanggal": "2025-10-13",
      "hari": "Oct 2025",
      "kas": 9431940,
      "stok": 2200000,
      "networth": 11631940
    },
    {
      "tanggal": "2025-10-14",
      "hari": "Oct 2025",
      "kas": 9431940,
      "stok": 2200000,
      "networth": 11631940
    },
    {
      "tanggal": "2025-10-15",
      "hari": "Oct 2025",
      "kas": 9631940,
      "stok": 2200000,
      "networth": 11831940
    },
    {
      "tanggal": "2025-10-16",
      "hari": "Oct 2025",
      "kas": 347635,
      "stok": 13450000,
      "networth": 13797635
    },
    {
      "tanggal": "2025-10-17",
      "hari": "Oct 2025",
      "kas": 347635,
      "stok": 13450000,
      "networth": 13797635
    },
    {
      "tanggal": "2025-10-18",
      "hari": "Oct 2025",
      "kas": 8347635,
      "stok": 13450000,
      "networth": 21797635
    },
    {
      "tanggal": "2025-10-19",
      "hari": "Oct 2025",
      "kas": 8347635,
      "stok": 13450000,
      "networth": 21797635
    },
    {
      "tanggal": "2025-10-20",
      "hari": "Oct 2025",
      "kas": 8268733,
      "stok": 13450000,
      "networth": 21718733
    },
    {
      "tanggal": "2025-10-21",
      "hari": "Oct 2025",
      "kas": 8268733,
      "stok": 13450000,
      "networth": 21718733
    },
    {
      "tanggal": "2025-10-22",
      "hari": "Oct 2025",
      "kas": 8268733,
      "stok": 13450000,
      "networth": 21718733
    },
    {
      "tanggal": "2025-10-23",
      "hari": "Oct 2025",
      "kas": 8268733,
      "stok": 13450000,
      "networth": 21718733
    },
    {
      "tanggal": "2025-10-24",
      "hari": "Oct 2025",
      "kas": 8268733,
      "stok": 13450000,
      "networth": 21718733
    },
    {
      "tanggal": "2025-10-25",
      "hari": "Oct 2025",
      "kas": 8265233,
      "stok": 13450000,
      "networth": 21715233
    },
    {
      "tanggal": "2025-10-26",
      "hari": "Oct 2025",
      "kas": 8265233,
      "stok": 13450000,
      "networth": 21715233
    },
    {
      "tanggal": "2025-10-27",
      "hari": "Oct 2025",
      "kas": 8265233,
      "stok": 13450000,
      "networth": 21715233
    },
    {
      "tanggal": "2025-10-28",
      "hari": "Oct 2025",
      "kas": 8265233,
      "stok": 13450000,
      "networth": 21715233
    },
    {
      "tanggal": "2025-10-29",
      "hari": "Oct 2025",
      "kas": 8265233,
      "stok": 13450000,
      "networth": 21715233
    },
    {
      "tanggal": "2025-10-30",
      "hari": "Oct 2025",
      "kas": 11262733,
      "stok": 11250000,
      "networth": 22512733
    },
    {
      "tanggal": "2025-10-31",
      "hari": "Oct 2025",
      "kas": 11257733,
      "stok": 11250000,
      "networth": 22507733
    },
    {
      "tanggal": "2025-11-01",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 11360233,
      "stok": 11250000,
      "networth": 22610233
    },
    {
      "tanggal": "2025-11-02",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 14110233,
      "stok": 8750000,
      "networth": 22860233
    },
    {
      "tanggal": "2025-11-03",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 14110233,
      "stok": 8750000,
      "networth": 22860233
    },
    {
      "tanggal": "2025-11-04",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 14110233,
      "stok": 8750000,
      "networth": 22860233
    },
    {
      "tanggal": "2025-11-05",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 14110233,
      "stok": 8750000,
      "networth": 22860233
    },
    {
      "tanggal": "2025-11-06",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 14110233,
      "stok": 8750000,
      "networth": 22860233
    },
    {
      "tanggal": "2025-11-07",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 14110233,
      "stok": 8750000,
      "networth": 22860233
    },
    {
      "tanggal": "2025-11-08",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 14110233,
      "stok": 8750000,
      "networth": 22860233
    },
    {
      "tanggal": "2025-11-09",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 17591738,
      "stok": 5600000,
      "networth": 23191738
    },
    {
      "tanggal": "2025-11-10",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 20466538,
      "stok": 2850000,
      "networth": 23316538
    },
    {
      "tanggal": "2025-11-11",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 20466538,
      "stok": 2850000,
      "networth": 23316538
    },
    {
      "tanggal": "2025-11-12",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 20466538,
      "stok": 2850000,
      "networth": 23316538
    },
    {
      "tanggal": "2025-11-13",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 20466538,
      "stok": 2850000,
      "networth": 23316538
    },
    {
      "tanggal": "2025-11-14",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 6701339,
      "stok": 16550000,
      "networth": 23251339
    },
    {
      "tanggal": "2025-11-15",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 6701339,
      "stok": 16550000,
      "networth": 23251339
    },
    {
      "tanggal": "2025-11-16",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 6701339,
      "stok": 16550000,
      "networth": 23251339
    },
    {
      "tanggal": "2025-11-17",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 6701339,
      "stok": 16550000,
      "networth": 23251339
    },
    {
      "tanggal": "2025-11-18",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 6701339,
      "stok": 16550000,
      "networth": 23251339
    },
    {
      "tanggal": "2025-11-19",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 6701339,
      "stok": 16550000,
      "networth": 23251339
    },
    {
      "tanggal": "2025-11-20",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 6701339,
      "stok": 16550000,
      "networth": 23251339
    },
    {
      "tanggal": "2025-11-21",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 13951339,
      "stok": 13400000,
      "networth": 27351339
    },
    {
      "tanggal": "2025-11-22",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 13951339,
      "stok": 13400000,
      "networth": 27351339
    },
    {
      "tanggal": "2025-11-23",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 13951339,
      "stok": 13400000,
      "networth": 27351339
    },
    {
      "tanggal": "2025-11-24",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 10169432,
      "stok": 13400000,
      "networth": 23569432
    },
    {
      "tanggal": "2025-11-25",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 9899833,
      "stok": 13400000,
      "networth": 23299833
    },
    {
      "tanggal": "2025-11-26",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 5200734,
      "stok": 18050000,
      "networth": 23250734
    },
    {
      "tanggal": "2025-11-27",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 5200734,
      "stok": 18050000,
      "networth": 23250734
    },
    {
      "tanggal": "2025-11-28",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 5200734,
      "stok": 18050000,
      "networth": 23250734
    },
    {
      "tanggal": "2025-11-29",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 5200734,
      "stok": 18050000,
      "networth": 23250734
    },
    {
      "tanggal": "2025-11-30",
      "hari": "2025-10-31T17:00:00.000Z",
      "kas": 5195734,
      "stok": 18050000,
      "networth": 23245734
    },
    {
      "tanggal": "2025-12-01",
      "hari": "Dec 2025",
      "kas": 12395734,
      "stok": 11200000,
      "networth": 23595734
    },
    {
      "tanggal": "2025-12-02",
      "hari": "Dec 2025",
      "kas": 14760336,
      "stok": 9500000,
      "networth": 24260336
    },
    {
      "tanggal": "2025-12-03",
      "hari": "Dec 2025",
      "kas": 14760336,
      "stok": 9500000,
      "networth": 24260336
    },
    {
      "tanggal": "2025-12-04",
      "hari": "Dec 2025",
      "kas": 13057836,
      "stok": 9500000,
      "networth": 22557836
    },
    {
      "tanggal": "2025-12-05",
      "hari": "Dec 2025",
      "kas": 6206336,
      "stok": 13500000,
      "networth": 19706336
    },
    {
      "tanggal": "2025-12-06",
      "hari": "Dec 2025",
      "kas": 13306336,
      "stok": 6850000,
      "networth": 20156336
    },
    {
      "tanggal": "2025-12-07",
      "hari": "Dec 2025",
      "kas": 13306336,
      "stok": 6850000,
      "networth": 20156336
    },
    {
      "tanggal": "2025-12-08",
      "hari": "Dec 2025",
      "kas": 13306336,
      "stok": 6850000,
      "networth": 20156336
    },
    {
      "tanggal": "2025-12-09",
      "hari": "Dec 2025",
      "kas": 13306336,
      "stok": 6850000,
      "networth": 20156336
    },
    {
      "tanggal": "2025-12-10",
      "hari": "Dec 2025",
      "kas": 6603836,
      "stok": 13550000,
      "networth": 20153836
    },
    {
      "tanggal": "2025-12-11",
      "hari": "Dec 2025",
      "kas": 6603836,
      "stok": 13550000,
      "networth": 20153836
    },
    {
      "tanggal": "2025-12-12",
      "hari": "Dec 2025",
      "kas": 6603836,
      "stok": 13550000,
      "networth": 20153836
    },
    {
      "tanggal": "2025-12-13",
      "hari": "Dec 2025",
      "kas": 6603836,
      "stok": 13550000,
      "networth": 20153836
    },
    {
      "tanggal": "2025-12-14",
      "hari": "Dec 2025",
      "kas": 13803836,
      "stok": 6700000,
      "networth": 20503836
    },
    {
      "tanggal": "2025-12-15",
      "hari": "Dec 2025",
      "kas": 7062038,
      "stok": 13350000,
      "networth": 20412038
    },
    {
      "tanggal": "2025-12-16",
      "hari": "Dec 2025",
      "kas": 7062038,
      "stok": 13350000,
      "networth": 20412038
    },
    {
      "tanggal": "2025-12-17",
      "hari": "Dec 2025",
      "kas": 14162038,
      "stok": 6650000,
      "networth": 20812038
    },
    {
      "tanggal": "2025-12-18",
      "hari": "Dec 2025",
      "kas": 14162038,
      "stok": 6650000,
      "networth": 20812038
    },
    {
      "tanggal": "2025-12-19",
      "hari": "Dec 2025",
      "kas": 1885021,
      "stok": 18875000,
      "networth": 20760021
    },
    {
      "tanggal": "2025-12-20",
      "hari": "Dec 2025",
      "kas": 3585021,
      "stok": 18875000,
      "networth": 22460021
    },
    {
      "tanggal": "2025-12-21",
      "hari": "Dec 2025",
      "kas": 3585021,
      "stok": 18875000,
      "networth": 22460021
    },
    {
      "tanggal": "2025-12-22",
      "hari": "Dec 2025",
      "kas": 3585021,
      "stok": 18875000,
      "networth": 22460021
    },
    {
      "tanggal": "2025-12-23",
      "hari": "Dec 2025",
      "kas": 3573021,
      "stok": 18875000,
      "networth": 22448021
    },
    {
      "tanggal": "2025-12-24",
      "hari": "Dec 2025",
      "kas": 8573021,
      "stok": 18875000,
      "networth": 27448021
    },
    {
      "tanggal": "2025-12-25",
      "hari": "Dec 2025",
      "kas": 8410521,
      "stok": 18875000,
      "networth": 27285521
    },
    {
      "tanggal": "2025-12-26",
      "hari": "Dec 2025",
      "kas": 15507021,
      "stok": 12225000,
      "networth": 27732021
    },
    {
      "tanggal": "2025-12-27",
      "hari": "Dec 2025",
      "kas": 2121523,
      "stok": 25525000,
      "networth": 27646523
    },
    {
      "tanggal": "2025-12-28",
      "hari": "Dec 2025",
      "kas": 2121523,
      "stok": 25525000,
      "networth": 27646523
    },
    {
      "tanggal": "2025-12-29",
      "hari": "Dec 2025",
      "kas": 2073723,
      "stok": 25525000,
      "networth": 27598723
    },
    {
      "tanggal": "2025-12-30",
      "hari": "Dec 2025",
      "kas": 2073723,
      "stok": 25525000,
      "networth": 27598723
    },
    {
      "tanggal": "2025-12-31",
      "hari": "Dec 2025",
      "kas": 2068723,
      "stok": 25525000,
      "networth": 27593723
    },
    {
      "tanggal": "2026-01-01",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 9218723,
      "stok": 18875000,
      "networth": 28093723
    },
    {
      "tanggal": "2026-01-02",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 9175023,
      "stok": 18875000,
      "networth": 28050023
    },
    {
      "tanggal": "2026-01-03",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 21725023,
      "stok": 6650000,
      "networth": 28375023
    },
    {
      "tanggal": "2026-01-04",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 28725023,
      "stok": 0,
      "networth": 28725023
    },
    {
      "tanggal": "2026-01-05",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 28725023,
      "stok": 0,
      "networth": 28725023
    },
    {
      "tanggal": "2026-01-06",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 28725023,
      "stok": 0,
      "networth": 28725023
    },
    {
      "tanggal": "2026-01-07",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 28725023,
      "stok": 0,
      "networth": 28725023
    },
    {
      "tanggal": "2026-01-08",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 28725023,
      "stok": 0,
      "networth": 28725023
    },
    {
      "tanggal": "2026-01-09",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 28725023,
      "stok": 0,
      "networth": 28725023
    },
    {
      "tanggal": "2026-01-10",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 28725023,
      "stok": 0,
      "networth": 28725023
    },
    {
      "tanggal": "2026-01-11",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 28725023,
      "stok": 0,
      "networth": 28725023
    },
    {
      "tanggal": "2026-01-12",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 28725023,
      "stok": 0,
      "networth": 28725023
    },
    {
      "tanggal": "2026-01-13",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 28822523,
      "stok": 0,
      "networth": 28822523
    },
    {
      "tanggal": "2026-01-14",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 28038757,
      "stok": 0,
      "networth": 28038757
    },
    {
      "tanggal": "2026-01-15",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 21386257,
      "stok": 6650000,
      "networth": 28036257
    },
    {
      "tanggal": "2026-01-16",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 10659059,
      "stok": 16100000,
      "networth": 26759059
    },
    {
      "tanggal": "2026-01-17",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 10626160,
      "stok": 16100000,
      "networth": 26726160
    },
    {
      "tanggal": "2026-01-18",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 10626160,
      "stok": 16100000,
      "networth": 26726160
    },
    {
      "tanggal": "2026-01-19",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 10626160,
      "stok": 16100000,
      "networth": 26726160
    },
    {
      "tanggal": "2026-01-20",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 10626160,
      "stok": 16100000,
      "networth": 26726160
    },
    {
      "tanggal": "2026-01-21",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 10626160,
      "stok": 16100000,
      "networth": 26726160
    },
    {
      "tanggal": "2026-01-22",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 10626160,
      "stok": 16100000,
      "networth": 26726160
    },
    {
      "tanggal": "2026-01-23",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 10626160,
      "stok": 16100000,
      "networth": 26726160
    },
    {
      "tanggal": "2026-01-24",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 10367760,
      "stok": 16100000,
      "networth": 26467760
    },
    {
      "tanggal": "2026-01-25",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 2235075,
      "stok": 24900000,
      "networth": 27135075
    },
    {
      "tanggal": "2026-01-26",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 1748557,
      "stok": 24900000,
      "networth": 26648557
    },
    {
      "tanggal": "2026-01-27",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 1748557,
      "stok": 24900000,
      "networth": 26648557
    },
    {
      "tanggal": "2026-01-28",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 1748557,
      "stok": 24900000,
      "networth": 26648557
    },
    {
      "tanggal": "2026-01-29",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 1748557,
      "stok": 24900000,
      "networth": 26648557
    },
    {
      "tanggal": "2026-01-30",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 1748557,
      "stok": 24900000,
      "networth": 26648557
    },
    {
      "tanggal": "2026-01-31",
      "hari": "2025-12-31T17:00:00.000Z",
      "kas": 1331047,
      "stok": 24900000,
      "networth": 26231047
    },
    {
      "tanggal": "2026-02-01",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 1326047,
      "stok": 24900000,
      "networth": 26226047
    },
    {
      "tanggal": "2026-02-02",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 1326047,
      "stok": 24900000,
      "networth": 26226047
    },
    {
      "tanggal": "2026-02-03",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 1326047,
      "stok": 24900000,
      "networth": 26226047
    },
    {
      "tanggal": "2026-02-04",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 8380448,
      "stok": 18200000,
      "networth": 26580448
    },
    {
      "tanggal": "2026-02-05",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 1677948,
      "stok": 24900000,
      "networth": 26577948
    },
    {
      "tanggal": "2026-02-06",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 1677948,
      "stok": 24900000,
      "networth": 26577948
    },
    {
      "tanggal": "2026-02-07",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 1677948,
      "stok": 24900000,
      "networth": 26577948
    },
    {
      "tanggal": "2026-02-08",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 1677948,
      "stok": 24900000,
      "networth": 26577948
    },
    {
      "tanggal": "2026-02-09",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6752948,
      "stok": 20100000,
      "networth": 26852948
    },
    {
      "tanggal": "2026-02-10",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6752948,
      "stok": 20100000,
      "networth": 26852948
    },
    {
      "tanggal": "2026-02-11",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6752948,
      "stok": 20100000,
      "networth": 26852948
    },
    {
      "tanggal": "2026-02-12",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6752948,
      "stok": 20100000,
      "networth": 26852948
    },
    {
      "tanggal": "2026-02-13",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6752948,
      "stok": 20100000,
      "networth": 26852948
    },
    {
      "tanggal": "2026-02-14",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 13787948,
      "stok": 13350000,
      "networth": 27137948
    },
    {
      "tanggal": "2026-02-15",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6550448,
      "stok": 20550000,
      "networth": 27100448
    },
    {
      "tanggal": "2026-02-16",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6550448,
      "stok": 20550000,
      "networth": 27100448
    },
    {
      "tanggal": "2026-02-17",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6550448,
      "stok": 20550000,
      "networth": 27100448
    },
    {
      "tanggal": "2026-02-18",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6345468,
      "stok": 20550000,
      "networth": 26895468
    },
    {
      "tanggal": "2026-02-19",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 12859634,
      "stok": 13900000,
      "networth": 26759634
    },
    {
      "tanggal": "2026-02-20",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6357134,
      "stok": 20400000,
      "networth": 26757134
    },
    {
      "tanggal": "2026-02-21",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6357134,
      "stok": 20400000,
      "networth": 26757134
    },
    {
      "tanggal": "2026-02-22",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 6194634,
      "stok": 20400000,
      "networth": 26594634
    },
    {
      "tanggal": "2026-02-23",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 7026134,
      "stok": 20900000,
      "networth": 27926134
    },
    {
      "tanggal": "2026-02-24",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 7026134,
      "stok": 20900000,
      "networth": 27926134
    },
    {
      "tanggal": "2026-02-25",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 4888296,
      "stok": 23900000,
      "networth": 28788296
    },
    {
      "tanggal": "2026-02-26",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 12471671,
      "stok": 16700000,
      "networth": 29171671
    },
    {
      "tanggal": "2026-02-27",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 20171671,
      "stok": 9500000,
      "networth": 29671671
    },
    {
      "tanggal": "2026-02-28",
      "hari": "2026-01-31T17:00:00.000Z",
      "kas": 11094473,
      "stok": 18500000,
      "networth": 29594473
    },
    {
      "tanggal": "2026-03-01",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 14089473,
      "stok": 15500000,
      "networth": 29589473
    },
    {
      "tanggal": "2026-03-02",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 14089473,
      "stok": 15500000,
      "networth": 29589473
    },
    {
      "tanggal": "2026-03-03",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 14089473,
      "stok": 15500000,
      "networth": 29589473
    },
    {
      "tanggal": "2026-03-04",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 13965478,
      "stok": 15500000,
      "networth": 29465478
    },
    {
      "tanggal": "2026-03-05",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 6615478,
      "stok": 22850000,
      "networth": 29465478
    },
    {
      "tanggal": "2026-03-06",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 6597978,
      "stok": 22850000,
      "networth": 29447978
    },
    {
      "tanggal": "2026-03-07",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 6597978,
      "stok": 22850000,
      "networth": 29447978
    },
    {
      "tanggal": "2026-03-08",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 6597978,
      "stok": 22850000,
      "networth": 29447978
    },
    {
      "tanggal": "2026-03-09",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 14447978,
      "stok": 15500000,
      "networth": 29947978
    },
    {
      "tanggal": "2026-03-10",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 7145478,
      "stok": 22800000,
      "networth": 29945478
    },
    {
      "tanggal": "2026-03-11",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 2476878,
      "stok": 22800000,
      "networth": 25276878
    },
    {
      "tanggal": "2026-03-12",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 2476878,
      "stok": 22800000,
      "networth": 25276878
    },
    {
      "tanggal": "2026-03-13",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 2326878,
      "stok": 22800000,
      "networth": 25126878
    },
    {
      "tanggal": "2026-03-14",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 4826878,
      "stok": 22800000,
      "networth": 27626878
    },
    {
      "tanggal": "2026-03-15",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 12626878,
      "stok": 15500000,
      "networth": 28126878
    },
    {
      "tanggal": "2026-03-16",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 17523378,
      "stok": 15500000,
      "networth": 33023378
    },
    {
      "tanggal": "2026-03-17",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 21523378,
      "stok": 15500000,
      "networth": 37023378
    },
    {
      "tanggal": "2026-03-18",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 28323378,
      "stok": 9000000,
      "networth": 37323378
    },
    {
      "tanggal": "2026-03-19",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 28323378,
      "stok": 9000000,
      "networth": 37323378
    },
    {
      "tanggal": "2026-03-20",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 28323378,
      "stok": 9000000,
      "networth": 37323378
    },
    {
      "tanggal": "2026-03-21",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 28323378,
      "stok": 9000000,
      "networth": 37323378
    },
    {
      "tanggal": "2026-03-22",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 28323378,
      "stok": 9000000,
      "networth": 37323378
    },
    {
      "tanggal": "2026-03-23",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 28323378,
      "stok": 9000000,
      "networth": 37323378
    },
    {
      "tanggal": "2026-03-24",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 28323378,
      "stok": 9000000,
      "networth": 37323378
    },
    {
      "tanggal": "2026-03-25",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 32706878,
      "stok": 0,
      "networth": 32706878
    },
    {
      "tanggal": "2026-03-26",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 32673752,
      "stok": 0,
      "networth": 32673752
    },
    {
      "tanggal": "2026-03-27",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 32249109,
      "stok": 0,
      "networth": 32249109
    },
    {
      "tanggal": "2026-03-28",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 32249109,
      "stok": 0,
      "networth": 32249109
    },
    {
      "tanggal": "2026-03-29",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 32249109,
      "stok": 0,
      "networth": 32249109
    },
    {
      "tanggal": "2026-03-30",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 32249109,
      "stok": 0,
      "networth": 32249109
    },
    {
      "tanggal": "2026-03-31",
      "hari": "2026-02-28T17:00:00.000Z",
      "kas": 32243109,
      "stok": 0,
      "networth": 32243109
    },
    {
      "tanggal": "2026-04-01",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 32243109,
      "stok": 8400000,
      "networth": 40643109
    },
    {
      "tanggal": "2026-04-02",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 4185609,
      "stok": 28050000,
      "networth": 32235609
    },
    {
      "tanggal": "2026-04-03",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 3981460,
      "stok": 28050000,
      "networth": 32031460
    },
    {
      "tanggal": "2026-04-04",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 3637237,
      "stok": 28050000,
      "networth": 31687237
    },
    {
      "tanggal": "2026-04-05",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 3634737,
      "stok": 28050000,
      "networth": 31684737
    },
    {
      "tanggal": "2026-04-06",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 3634737,
      "stok": 28050000,
      "networth": 31684737
    },
    {
      "tanggal": "2026-04-07",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 3413457,
      "stok": 28050000,
      "networth": 31463457
    },
    {
      "tanggal": "2026-04-08",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 3413457,
      "stok": 28050000,
      "networth": 31463457
    },
    {
      "tanggal": "2026-04-09",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 3413457,
      "stok": 28050000,
      "networth": 31463457
    },
    {
      "tanggal": "2026-04-10",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 3413457,
      "stok": 28050000,
      "networth": 31463457
    },
    {
      "tanggal": "2026-04-11",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 3413457,
      "stok": 28050000,
      "networth": 31463457
    },
    {
      "tanggal": "2026-04-12",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 16510957,
      "stok": 15900000,
      "networth": 32410957
    },
    {
      "tanggal": "2026-04-13",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 24410957,
      "stok": 8400000,
      "networth": 32810957
    },
    {
      "tanggal": "2026-04-14",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 24410957,
      "stok": 8400000,
      "networth": 32810957
    },
    {
      "tanggal": "2026-04-15",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 24410957,
      "stok": 8400000,
      "networth": 32810957
    },
    {
      "tanggal": "2026-04-16",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 24388957,
      "stok": 8400000,
      "networth": 32788957
    },
    {
      "tanggal": "2026-04-17",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 9939600,
      "stok": 22550000,
      "networth": 32489600
    },
    {
      "tanggal": "2026-04-18",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 2388980,
      "stok": 30050000,
      "networth": 32438980
    },
    {
      "tanggal": "2026-04-19",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 2388980,
      "stok": 30050000,
      "networth": 32438980
    },
    {
      "tanggal": "2026-04-20",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 2036330,
      "stok": 30050000,
      "networth": 32086330
    },
    {
      "tanggal": "2026-04-21",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 2036330,
      "stok": 30050000,
      "networth": 32086330
    },
    {
      "tanggal": "2026-04-22",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 2036330,
      "stok": 30050000,
      "networth": 32086330
    },
    {
      "tanggal": "2026-04-23",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 2036330,
      "stok": 30050000,
      "networth": 32086330
    },
    {
      "tanggal": "2026-04-24",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 25636330,
      "stok": 7500000,
      "networth": 33136330
    },
    {
      "tanggal": "2026-04-25",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 25165900,
      "stok": 7500000,
      "networth": 32665900
    },
    {
      "tanggal": "2026-04-26",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 25165900,
      "stok": 7500000,
      "networth": 32665900
    },
    {
      "tanggal": "2026-04-27",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 33090900,
      "stok": 0,
      "networth": 33090900
    },
    {
      "tanggal": "2026-04-28",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 15351300,
      "stok": 17500000,
      "networth": 32851300
    },
    {
      "tanggal": "2026-04-29",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 2043402,
      "stok": 30700000,
      "networth": 32743402
    },
    {
      "tanggal": "2026-04-30",
      "hari": "2026-03-31T17:00:00.000Z",
      "kas": 2037402,
      "stok": 30700000,
      "networth": 32737402
    },
    {
      "tanggal": "2026-05-01",
      "hari": "May 2026",
      "kas": 2002602,
      "stok": 30700000,
      "networth": 32702602
    },
    {
      "tanggal": "2026-05-02",
      "hari": "May 2026",
      "kas": 2002602,
      "stok": 30700000,
      "networth": 32702602
    },
    {
      "tanggal": "2026-05-03",
      "hari": "May 2026",
      "kas": 2002602,
      "stok": 30700000,
      "networth": 32702602
    },
    {
      "tanggal": "2026-05-04",
      "hari": "May 2026",
      "kas": 3452375,
      "stok": 30700000,
      "networth": 34152375
    },
    {
      "tanggal": "2026-05-05",
      "hari": "May 2026",
      "kas": 3389956,
      "stok": 30700000,
      "networth": 34089956
    },
    {
      "tanggal": "2026-05-06",
      "hari": "May 2026",
      "kas": 3389956,
      "stok": 30700000,
      "networth": 34089956
    },
    {
      "tanggal": "2026-05-07",
      "hari": "May 2026",
      "kas": 3389956,
      "stok": 30700000,
      "networth": 34089956
    },
    {
      "tanggal": "2026-05-08",
      "hari": "May 2026",
      "kas": 3389956,
      "stok": 30700000,
      "networth": 34089956
    },
    {
      "tanggal": "2026-05-09",
      "hari": "May 2026",
      "kas": 3389956,
      "stok": 30700000,
      "networth": 34089956
    },
    {
      "tanggal": "2026-05-10",
      "hari": "May 2026",
      "kas": 3389956,
      "stok": 30700000,
      "networth": 34089956
    },
    {
      "tanggal": "2026-05-11",
      "hari": "May 2026",
      "kas": 3155356,
      "stok": 30700000,
      "networth": 33855356
    },
    {
      "tanggal": "2026-05-12",
      "hari": "May 2026",
      "kas": 3155356,
      "stok": 30700000,
      "networth": 33855356
    },
    {
      "tanggal": "2026-05-13",
      "hari": "May 2026",
      "kas": 3155356,
      "stok": 30700000,
      "networth": 33855356
    },
    {
      "tanggal": "2026-05-14",
      "hari": "May 2026",
      "kas": 2287856,
      "stok": 30700000,
      "networth": 32987856
    },
    {
      "tanggal": "2026-05-15",
      "hari": "May 2026",
      "kas": 2287856,
      "stok": 30700000,
      "networth": 32987856
    },
    {
      "tanggal": "2026-05-16",
      "hari": "May 2026",
      "kas": 15753501,
      "stok": 17500000,
      "networth": 33253501
    },
    {
      "tanggal": "2026-05-17",
      "hari": "May 2026",
      "kas": 15749501,
      "stok": 17500000,
      "networth": 33249501
    },
    {
      "tanggal": "2026-05-18",
      "hari": "May 2026",
      "kas": 15421661,
      "stok": 17500000,
      "networth": 32921661
    },
    {
      "tanggal": "2026-05-19",
      "hari": "May 2026",
      "kas": 13934290,
      "stok": 17500000,
      "networth": 31434290
    },
    {
      "tanggal": "2026-05-20",
      "hari": "May 2026",
      "kas": 14796390,
      "stok": 17500000,
      "networth": 32296390
    },
    {
      "tanggal": "2026-05-21",
      "hari": "May 2026",
      "kas": 15805390,
      "stok": 17500000,
      "networth": 33305390
    },
    {
      "tanggal": "2026-05-22",
      "hari": "May 2026",
      "kas": 17072741,
      "stok": 17500000,
      "networth": 34572741
    },
    {
      "tanggal": "2026-05-23",
      "hari": "May 2026",
      "kas": 3943561,
      "stok": 30300000,
      "networth": 34243561
    },
    {
      "tanggal": "2026-05-24",
      "hari": "May 2026",
      "kas": 3931561,
      "stok": 30300000,
      "networth": 34231561
    },
    {
      "tanggal": "2026-05-25",
      "hari": "May 2026",
      "kas": 3536561,
      "stok": 30300000,
      "networth": 33836561
    },
    {
      "tanggal": "2026-05-26",
      "hari": "May 2026",
      "kas": 3162101,
      "stok": 30300000,
      "networth": 33462101
    },
    {
      "tanggal": "2026-05-27",
      "hari": "May 2026",
      "kas": 3110601,
      "stok": 30300000,
      "networth": 33410601
    },
    {
      "tanggal": "2026-05-28",
      "hari": "May 2026",
      "kas": 3390721,
      "stok": 30300000,
      "networth": 33690721
    },
    {
      "tanggal": "2026-05-29",
      "hari": "May 2026",
      "kas": 3390721,
      "stok": 30300000,
      "networth": 33690721
    },
    {
      "tanggal": "2026-05-30",
      "hari": "May 2026",
      "kas": 2421109,
      "stok": 30300000,
      "networth": 32721109
    },
    {
      "tanggal": "2026-05-31",
      "hari": "May 2026",
      "kas": 21812609,
      "stok": 11500000,
      "networth": 33312609
    },
    {
      "tanggal": "2026-06-01",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 21812609,
      "stok": 11500000,
      "networth": 33312609
    },
    {
      "tanggal": "2026-06-02",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 21900823,
      "stok": 11500000,
      "networth": 33400823
    },
    {
      "tanggal": "2026-06-03",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 21900823,
      "stok": 11500000,
      "networth": 33400823
    },
    {
      "tanggal": "2026-06-04",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 21900823,
      "stok": 11500000,
      "networth": 33400823
    },
    {
      "tanggal": "2026-06-05",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 9048323,
      "stok": 24350000,
      "networth": 33398323
    },
    {
      "tanggal": "2026-06-06",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 9665798,
      "stok": 24350000,
      "networth": 34015798
    },
    {
      "tanggal": "2026-06-07",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 9512258,
      "stok": 24350000,
      "networth": 33862258
    },
    {
      "tanggal": "2026-06-08",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 14912258,
      "stok": 19350000,
      "networth": 34262258
    },
    {
      "tanggal": "2026-06-09",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 15062258,
      "stok": 19350000,
      "networth": 34412258
    },
    {
      "tanggal": "2026-06-10",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 15091549,
      "stok": 19350000,
      "networth": 34441549
    },
    {
      "tanggal": "2026-06-11",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 22339049,
      "stok": 12850000,
      "networth": 35189049
    },
    {
      "tanggal": "2026-06-12",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 19034049,
      "stok": 16150000,
      "networth": 35184049
    },
    {
      "tanggal": "2026-06-13",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 19034049,
      "stok": 16150000,
      "networth": 35184049
    },
    {
      "tanggal": "2026-06-14",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 5288252,
      "stok": 29800000,
      "networth": 35088252
    },
    {
      "tanggal": "2026-06-15",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 5245784,
      "stok": 29800000,
      "networth": 35045784
    },
    {
      "tanggal": "2026-06-16",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 5092386,
      "stok": 29800000,
      "networth": 34892386
    },
    {
      "tanggal": "2026-06-17",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 19616442,
      "stok": 16150000,
      "networth": 35766442
    },
    {
      "tanggal": "2026-06-18",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 20689243,
      "stok": 15800000,
      "networth": 36489243
    },
    {
      "tanggal": "2026-06-19",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 23989243,
      "stok": 12500000,
      "networth": 36489243
    },
    {
      "tanggal": "2026-06-20",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 11153744,
      "stok": 25300000,
      "networth": 36453744
    },
    {
      "tanggal": "2026-06-21",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 11153744,
      "stok": 25300000,
      "networth": 36453744
    },
    {
      "tanggal": "2026-06-22",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 11153744,
      "stok": 25300000,
      "networth": 36453744
    },
    {
      "tanggal": "2026-06-23",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 11153744,
      "stok": 25300000,
      "networth": 36453744
    },
    {
      "tanggal": "2026-06-24",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 11069046,
      "stok": 25300000,
      "networth": 36369046
    },
    {
      "tanggal": "2026-06-25",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 10370046,
      "stok": 25300000,
      "networth": 35670046
    },
    {
      "tanggal": "2026-06-26",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 10370046,
      "stok": 25300000,
      "networth": 35670046
    },
    {
      "tanggal": "2026-06-27",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 10370046,
      "stok": 25300000,
      "networth": 35670046
    },
    {
      "tanggal": "2026-06-28",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 10370046,
      "stok": 25300000,
      "networth": 35670046
    },
    {
      "tanggal": "2026-06-29",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 10370046,
      "stok": 25300000,
      "networth": 35670046
    },
    {
      "tanggal": "2026-06-30",
      "hari": "2026-05-31T17:00:00.000Z",
      "kas": 10364046,
      "stok": 25300000,
      "networth": 35664046
    },
    {
      "tanggal": "2026-07-01",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 10364046,
      "stok": 25300000,
      "networth": 35664046
    },
    {
      "tanggal": "2026-07-02",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 9101081,
      "stok": 25300000,
      "networth": 34401081
    },
    {
      "tanggal": "2026-07-03",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 9097081,
      "stok": 25300000,
      "networth": 34397081
    },
    {
      "tanggal": "2026-07-04",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 9097081,
      "stok": 25300000,
      "networth": 34397081
    },
    {
      "tanggal": "2026-07-05",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 9097081,
      "stok": 25300000,
      "networth": 34397081
    },
    {
      "tanggal": "2026-07-06",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 9097081,
      "stok": 25300000,
      "networth": 34397081
    },
    {
      "tanggal": "2026-07-07",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 9217318,
      "stok": 25300000,
      "networth": 34517318
    },
    {
      "tanggal": "2026-07-08",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 9217318,
      "stok": 25300000,
      "networth": 34517318
    },
    {
      "tanggal": "2026-07-09",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 9217318,
      "stok": 25300000,
      "networth": 34517318
    },
    {
      "tanggal": "2026-07-10",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 9217318,
      "stok": 25300000,
      "networth": 34517318
    },
    {
      "tanggal": "2026-07-11",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 9217318,
      "stok": 25300000,
      "networth": 34517318
    },
    {
      "tanggal": "2026-07-12",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 9217318,
      "stok": 25300000,
      "networth": 34517318
    },
    {
      "tanggal": "2026-07-13",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 16421872,
      "stok": 19300000,
      "networth": 35721872
    },
    {
      "tanggal": "2026-07-14",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 16421872,
      "stok": 19300000,
      "networth": 35721872
    },
    {
      "tanggal": "2026-07-15",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 16421872,
      "stok": 19300000,
      "networth": 35721872
    },
    {
      "tanggal": "2026-07-16",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 16421872,
      "stok": 19300000,
      "networth": 35721872
    },
    {
      "tanggal": "2026-07-17",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 16421872,
      "stok": 19300000,
      "networth": 35721872
    },
    {
      "tanggal": "2026-07-18",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 29121872,
      "stok": 6800000,
      "networth": 35921872
    },
    {
      "tanggal": "2026-07-19",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 29121872,
      "stok": 6800000,
      "networth": 35921872
    },
    {
      "tanggal": "2026-07-20",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 18983373,
      "stok": 16800000,
      "networth": 35783373
    },
    {
      "tanggal": "2026-07-21",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 18983373,
      "stok": 16800000,
      "networth": 35783373
    },
    {
      "tanggal": "2026-07-22",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 18983373,
      "stok": 16800000,
      "networth": 35783373
    },
    {
      "tanggal": "2026-07-23",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 4309874,
      "stok": 31400000,
      "networth": 35709874
    },
    {
      "tanggal": "2026-07-24",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 4309874,
      "stok": 31400000,
      "networth": 35709874
    },
    {
      "tanggal": "2026-07-25",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 3954874,
      "stok": 31400000,
      "networth": 35354874
    },
    {
      "tanggal": "2026-07-26",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 3771874,
      "stok": 31400000,
      "networth": 35171874
    },
    {
      "tanggal": "2026-07-27",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 11467074,
      "stok": 24600000,
      "networth": 36067074
    },
    {
      "tanggal": "2026-07-28",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 11467074,
      "stok": 24600000,
      "networth": 36067074
    },
    {
      "tanggal": "2026-07-29",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 11429174,
      "stok": 24600000,
      "networth": 36029174
    },
    {
      "tanggal": "2026-07-30",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 11429174,
      "stok": 24600000,
      "networth": 36029174
    },
    {
      "tanggal": "2026-07-31",
      "hari": "2026-06-30T17:00:00.000Z",
      "kas": 11423174,
      "stok": 24600000,
      "networth": 36023174
    },
    {
      "tanggal": "2026-08-01",
      "hari": "Aug 2026",
      "kas": 11423174,
      "stok": 24600000,
      "networth": 36023174
    },
    {
      "tanggal": "2026-08-02",
      "hari": "Aug 2026",
      "kas": 11423174,
      "stok": 24600000,
      "networth": 36023174
    },
    {
      "tanggal": "2026-08-03",
      "hari": "Aug 2026",
      "kas": 18419174,
      "stok": 24600000,
      "networth": 43019174
    },
    {
      "tanggal": "2026-08-04",
      "hari": "Aug 2026",
      "kas": 4951674,
      "stok": 38000000,
      "networth": 42951674
    },
    {
      "tanggal": "2026-08-05",
      "hari": "Aug 2026",
      "kas": 4860274,
      "stok": 38000000,
      "networth": 42860274
    },
    {
      "tanggal": "2026-08-06",
      "hari": "Aug 2026",
      "kas": 4860274,
      "stok": 38000000,
      "networth": 42860274
    },
    {
      "tanggal": "2026-08-07",
      "hari": "Aug 2026",
      "kas": 13223774,
      "stok": 23400000,
      "networth": 36623774
    },
    {
      "tanggal": "2026-08-08",
      "hari": "Aug 2026",
      "kas": 13223774,
      "stok": 23400000,
      "networth": 36623774
    },
    {
      "tanggal": "2026-08-09",
      "hari": "Aug 2026",
      "kas": 13223774,
      "stok": 23400000,
      "networth": 36623774
    },
    {
      "tanggal": "2026-08-10",
      "hari": "Aug 2026",
      "kas": 13223774,
      "stok": 23400000,
      "networth": 36623774
    },
    {
      "tanggal": "2026-08-11",
      "hari": "Aug 2026",
      "kas": 13223774,
      "stok": 23400000,
      "networth": 36623774
    },
    {
      "tanggal": "2026-08-12",
      "hari": "Aug 2026",
      "kas": 13223774,
      "stok": 23400000,
      "networth": 36623774
    },
    {
      "tanggal": "2026-08-13",
      "hari": "Aug 2026",
      "kas": 13223774,
      "stok": 23400000,
      "networth": 36623774
    },
    {
      "tanggal": "2026-08-14",
      "hari": "Aug 2026",
      "kas": 13223774,
      "stok": 23400000,
      "networth": 36623774
    },
    {
      "tanggal": "2026-08-15",
      "hari": "Aug 2026",
      "kas": 23161274,
      "stok": 13400000,
      "networth": 36561274
    },
    {
      "tanggal": "2026-08-16",
      "hari": "Aug 2026",
      "kas": 23161274,
      "stok": 13400000,
      "networth": 36561274
    },
    {
      "tanggal": "2026-08-17",
      "hari": "Aug 2026",
      "kas": 22815674,
      "stok": 13400000,
      "networth": 36215674
    },
    {
      "tanggal": "2026-08-18",
      "hari": "Aug 2026",
      "kas": 22815674,
      "stok": 13400000,
      "networth": 36215674
    },
    {
      "tanggal": "2026-08-19",
      "hari": "Aug 2026",
      "kas": 22815674,
      "stok": 13400000,
      "networth": 36215674
    },
    {
      "tanggal": "2026-08-20",
      "hari": "Aug 2026",
      "kas": 22815674,
      "stok": 13400000,
      "networth": 36215674
    },
    {
      "tanggal": "2026-08-21",
      "hari": "Aug 2026",
      "kas": 22815674,
      "stok": 13400000,
      "networth": 36215674
    },
    {
      "tanggal": "2026-08-22",
      "hari": "Aug 2026",
      "kas": 22815674,
      "stok": 13400000,
      "networth": 36215674
    },
    {
      "tanggal": "2026-08-23",
      "hari": "Aug 2026",
      "kas": 22815674,
      "stok": 13400000,
      "networth": 36215674
    },
    {
      "tanggal": "2026-08-24",
      "hari": "Aug 2026",
      "kas": 22815674,
      "stok": 13400000,
      "networth": 36215674
    },
    {
      "tanggal": "2026-08-25",
      "hari": "Aug 2026",
      "kas": 23220436,
      "stok": 13400000,
      "networth": 36620436
    },
    {
      "tanggal": "2026-08-26",
      "hari": "Aug 2026",
      "kas": 811936,
      "stok": 35397500,
      "networth": 36209436
    },
    {
      "tanggal": "2026-08-27",
      "hari": "Aug 2026",
      "kas": 750838,
      "stok": 35397500,
      "networth": 36148338
    },
    {
      "tanggal": "2026-08-28",
      "hari": "Aug 2026",
      "kas": 750838,
      "stok": 35397500,
      "networth": 36148338
    },
    {
      "tanggal": "2026-08-29",
      "hari": "Aug 2026",
      "kas": 900838,
      "stok": 35397500,
      "networth": 36298338
    },
    {
      "tanggal": "2026-08-30",
      "hari": "Aug 2026",
      "kas": 900838,
      "stok": 35397500,
      "networth": 36298338
    },
    {
      "tanggal": "2026-08-31",
      "hari": "Aug 2026",
      "kas": 894838,
      "stok": 35397500,
      "networth": 36292338
    },
    {
      "tanggal": "2026-09-01",
      "hari": "2026-08-31T17:00:00.000Z",
      "kas": 894838,
      "stok": 35397500,
      "networth": 36292338
    },
    {
      "tanggal": "2026-09-02",
      "hari": "2026-08-31T17:00:00.000Z",
      "kas": 894838,
      "stok": 35397500,
      "networth": 36292338
    },
    {
      "tanggal": "2026-09-03",
      "hari": "2026-08-31T17:00:00.000Z",
      "kas": 890838,
      "stok": 35397500,
      "networth": 36288338
    },
    {
      "tanggal": "2026-09-04",
      "hari": "2026-08-31T17:00:00.000Z",
      "kas": 22546838,
      "stok": 14600000,
      "networth": 37146838
    },
    {
      "tanggal": "2026-09-05",
      "hari": "2026-08-31T17:00:00.000Z",
      "kas": 22491438,
      "stok": 14600000,
      "networth": 37091438
    },
    {
      "tanggal": "2026-09-06",
      "hari": "2026-08-31T17:00:00.000Z",
      "kas": 21488938,
      "stok": 14600000,
      "networth": 36088938
    },
    {
      "tanggal": "2026-09-07",
      "hari": "2026-08-31T17:00:00.000Z",
      "kas": 21488938,
      "stok": 14600000,
      "networth": 36088938
    },
    {
      "tanggal": "2026-09-08",
      "hari": "2026-08-31T17:00:00.000Z",
      "kas": 8576538,
      "stok": 27500000,
      "networth": 36076538
    },
    {
      "tanggal": "2026-09-09",
      "hari": "2026-08-31T17:00:00.000Z",
      "kas": 8576538,
      "stok": 27500000,
      "networth": 36076538
    },
    {
      "tanggal": "2026-09-10",
      "hari": "2026-08-31T17:00:00.000Z",
      "kas": 8576538,
      "stok": 27500000,
      "networth": 36076538
    },
    {
      "tanggal": "2026-09-11",
      "hari": "2026-08-31T17:00:00.000Z",
      "kas": 8576538,
      "stok": 27500000,
      "networth": 36076538
    }
  ],
  "customers": [
    {
      "id": "1",
      "rowIndex": 2,
      "nama": "Rezasky",
      "tanggal": "2025-08-28",
      "produk": "iPhone 11 White 128 GB inter",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bekasi",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "2",
      "rowIndex": 3,
      "nama": "Rey",
      "tanggal": "2025-09-02",
      "produk": "iPhone XR Black 64 GB inter",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bekasi",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "3",
      "rowIndex": 4,
      "nama": "Redi",
      "tanggal": "2025-09-06",
      "produk": "iPhone 12 Mint 128 GB inter",
      "gender": "Pria",
      "usia": "",
      "domisili": "Sukabumi",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "4",
      "rowIndex": 5,
      "nama": "Ezra",
      "tanggal": "2025-09-26",
      "produk": "iPhone 13 Pro Max Graphite 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "5",
      "rowIndex": 6,
      "nama": "Ferdi",
      "tanggal": "2025-10-12",
      "produk": "iPhone 11 Purple 128 GB inter",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bogor",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "6",
      "rowIndex": 7,
      "nama": "Andhika",
      "tanggal": "2025-10-12",
      "produk": "iPhone 11 White 128 GB inter",
      "gender": "Pria",
      "usia": "",
      "domisili": "Depok",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "7",
      "rowIndex": 8,
      "nama": "Lia",
      "tanggal": "2025-10-13",
      "produk": "iPhone 11 Black 128 GB inter",
      "gender": "Wanita",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "8",
      "rowIndex": 9,
      "nama": "dina",
      "tanggal": "2025-10-30",
      "produk": "iPhone 11 Purple 128 GB inter",
      "gender": "Wanita",
      "usia": "",
      "domisili": "Jakarta Utara",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "9",
      "rowIndex": 10,
      "nama": "Silvi",
      "tanggal": "2025-11-02",
      "produk": "iPhone XR White 256 GB inter",
      "gender": "Wanita",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "10",
      "rowIndex": 11,
      "nama": "Nata",
      "tanggal": "2025-11-09",
      "produk": "iPhone 11 Black 256 GB inter",
      "gender": "Wanita",
      "usia": "",
      "domisili": "Padang",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "11",
      "rowIndex": 12,
      "nama": "Nyoman",
      "tanggal": "2025-11-10",
      "produk": "iPhone 11 Purple 64 GB inter",
      "gender": "Wanita",
      "usia": "",
      "domisili": "Jakarta Barat",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "12",
      "rowIndex": 13,
      "nama": "KENA SCAM",
      "tanggal": "2025-12-05",
      "produk": "iPhone XR White 64 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Utara",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "13",
      "rowIndex": 14,
      "nama": "Bagas",
      "tanggal": "2025-11-21",
      "produk": "iPhone 13 Midnight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bogor",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "14",
      "rowIndex": 15,
      "nama": "ardhani",
      "tanggal": "2025-12-01",
      "produk": "iPhone 13 Midnight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "15",
      "rowIndex": 16,
      "nama": "Sinar Mutiara",
      "tanggal": "2025-11-26",
      "produk": "iPhone 11 Black 64 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Barat",
      "sumberInfo": "Lainnya",
      "keterangan": ""
    },
    {
      "id": "16",
      "rowIndex": 17,
      "nama": "jhon",
      "tanggal": "2025-12-02",
      "produk": "iPhone 15 Blue 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bekasi",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "17",
      "rowIndex": 18,
      "nama": "shani",
      "tanggal": "2025-12-06",
      "produk": "iPhone 13 Midnight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "18",
      "rowIndex": 19,
      "nama": "azmi",
      "tanggal": "2025-12-14",
      "produk": "iPhone 13 Starlight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "19",
      "rowIndex": 20,
      "nama": "aditya",
      "tanggal": "2025-12-17",
      "produk": "iPhone 13 Midnight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "20",
      "rowIndex": 21,
      "nama": "dika",
      "tanggal": "2025-12-26",
      "produk": "iPhone 13 Pink 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "21",
      "rowIndex": 22,
      "nama": "doni",
      "tanggal": "2026-01-03",
      "produk": "iPhone 16 White 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Barat",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "22",
      "rowIndex": 23,
      "nama": "farid",
      "tanggal": "2026-01-04",
      "produk": "iPhone 13 Midnight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bogor",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "23",
      "rowIndex": 24,
      "nama": "imron",
      "tanggal": "2026-01-01",
      "produk": "iPhone 13 Starlight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Depok",
      "sumberInfo": "",
      "keterangan": ""
    },
    {
      "id": "24",
      "rowIndex": 25,
      "nama": "Rendra",
      "tanggal": "2026-01-13",
      "produk": "iPhone 13 Starlight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "25",
      "rowIndex": 26,
      "nama": "Adi",
      "tanggal": "2026-02-19",
      "produk": "iPhone 13 Midnight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "26",
      "rowIndex": 27,
      "nama": "Rifqy",
      "tanggal": "2026-02-09",
      "produk": "iPhone 13 Pink 128 GB inter",
      "gender": "Pria",
      "usia": "",
      "domisili": "",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "27",
      "rowIndex": 28,
      "nama": "Abdul",
      "tanggal": "2026-01-25",
      "produk": "iPhone 12 White 128 GB Beacukai",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "28",
      "rowIndex": 29,
      "nama": "Taufik",
      "tanggal": "2026-02-04",
      "produk": "iPhone 13 Starlight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "29",
      "rowIndex": 30,
      "nama": "ihsan",
      "tanggal": "2026-02-14",
      "produk": "iPhone 13 Starlight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "30",
      "rowIndex": 31,
      "nama": "Fauzi",
      "tanggal": "2026-02-23",
      "produk": "iPhone 13 Starlight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "31",
      "rowIndex": 32,
      "nama": "Layla",
      "tanggal": "2026-02-26",
      "produk": "iPhone 14 Blue 128 GB iBox",
      "gender": "Wanita",
      "usia": "",
      "domisili": "Jawa Timur",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "32",
      "rowIndex": 33,
      "nama": "Hamli",
      "tanggal": "2026-03-18",
      "produk": "iPhone 13 Starlight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Banjarmasin",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "33",
      "rowIndex": 34,
      "nama": "Wahid",
      "tanggal": "2026-02-27",
      "produk": "iPhone 14 Blue 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "34",
      "rowIndex": 35,
      "nama": "Cekkre",
      "tanggal": "2026-03-01",
      "produk": "iPhone 11 Tosca 64 GB inter",
      "gender": "Pria",
      "usia": "",
      "domisili": "Depok",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "35",
      "rowIndex": 36,
      "nama": "Azay",
      "tanggal": "2026-03-25",
      "produk": "iPhone 15 Tosca 128 GB Ibox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Pelaihari",
      "sumberInfo": "Teman/Referal",
      "keterangan": ""
    },
    {
      "id": "36",
      "rowIndex": 37,
      "nama": "Yunus",
      "tanggal": "2026-03-09",
      "produk": "iPhone 14 Blue 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bogor",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "37",
      "rowIndex": 38,
      "nama": "Adi",
      "tanggal": "2026-03-15",
      "produk": "iPhone 14 Blue 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Banjarbaru",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "38",
      "rowIndex": 39,
      "nama": "Mahesa",
      "tanggal": "2026-04-24",
      "produk": "iPhone 15 Blue 128 GB Beacukai",
      "gender": "Pria",
      "usia": "",
      "domisili": "Depok",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "39",
      "rowIndex": 40,
      "nama": "angga",
      "tanggal": "2026-04-12",
      "produk": "iPhone 14 Blue 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "40",
      "rowIndex": 41,
      "nama": "Dwike",
      "tanggal": "2026-04-12",
      "produk": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "41",
      "rowIndex": 42,
      "nama": "aang",
      "tanggal": "2026-04-13",
      "produk": "iPhone 14 Blue 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "42",
      "rowIndex": 43,
      "nama": "Fakhri",
      "tanggal": "2026-04-24",
      "produk": "iPhone 15 Pro White Titanium 256 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bekasi",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "43",
      "rowIndex": 44,
      "nama": "Akmal",
      "tanggal": "2026-04-27",
      "produk": "iPhone 14 Blue 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bekasi",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "44",
      "rowIndex": 45,
      "nama": "Andre",
      "tanggal": "2026-05-31",
      "produk": "iPhone 16 Pro Max White Titanium 256 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Depok",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "45",
      "rowIndex": 46,
      "nama": "Ayda",
      "tanggal": "2026-05-16",
      "produk": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "gender": "Wanita",
      "usia": "",
      "domisili": "Jakarta Barat",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "46",
      "rowIndex": 47,
      "nama": "Radit",
      "tanggal": "2026-05-31",
      "produk": "iPhone 15 Pro Blue Titanium 128 GB Ibox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "47",
      "rowIndex": 48,
      "nama": "Wahyu",
      "tanggal": "2026-06-08",
      "produk": "iPhone 14 Pro Max Deep Purple 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Timur",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "48",
      "rowIndex": 49,
      "nama": "Sarwanto",
      "tanggal": "2026-06-18",
      "produk": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Depok",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "49",
      "rowIndex": 50,
      "nama": "Argi",
      "tanggal": "2026-06-11",
      "produk": "iPhone 13 Midnight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "50",
      "rowIndex": 51,
      "nama": "Sinar Mutiara",
      "tanggal": "2026-06-19",
      "produk": "Laptop DAC",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Barat",
      "sumberInfo": "Lainnya",
      "keterangan": ""
    },
    {
      "id": "51",
      "rowIndex": 52,
      "nama": "Faldo",
      "tanggal": "2026-06-17",
      "produk": "iPhone 15 Pro Natural Titanium 256 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "52",
      "rowIndex": 53,
      "nama": "Adit",
      "tanggal": "2026-07-18",
      "produk": "iPhone 15 Pro Blue Titanium 128 GB Ibox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bogor",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "53",
      "rowIndex": 54,
      "nama": "April",
      "tanggal": "2026-07-13",
      "produk": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "gender": "Wanita",
      "usia": "",
      "domisili": "Jakarta Timur",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "54",
      "rowIndex": 55,
      "nama": "Arfan",
      "tanggal": "2026-07-27",
      "produk": "iPhone 13 Midnight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Barat",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "55",
      "rowIndex": 56,
      "nama": "Ellyza",
      "tanggal": "2026-08-15",
      "produk": "iPhone 15 Pink 128 GB iBox",
      "gender": "Wanita",
      "usia": "",
      "domisili": "Bekasi",
      "sumberInfo": "Threads",
      "keterangan": ""
    },
    {
      "id": "56",
      "rowIndex": 57,
      "nama": "Ferdiansyah",
      "tanggal": "2026-08-07",
      "produk": "iPhone 15 pro Natural Titanium 256 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Selatan",
      "sumberInfo": "TikTok",
      "keterangan": ""
    },
    {
      "id": "57",
      "rowIndex": 58,
      "nama": "Alif",
      "tanggal": "2026-09-04",
      "produk": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Barat",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "58",
      "rowIndex": 59,
      "nama": "Seno",
      "tanggal": "2026-09-04",
      "produk": "iPhone 13 Midnight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Depok",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "59",
      "rowIndex": 60,
      "nama": "Zakky",
      "tanggal": "2026-09-19",
      "produk": "iPhone 15 Pro Natural Titanium 256 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "60",
      "rowIndex": 61,
      "nama": "Alex",
      "tanggal": "2026-09-12",
      "produk": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bekasi",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "61",
      "rowIndex": 62,
      "nama": "Heddy",
      "tanggal": "2026-09-20",
      "produk": "iPhone 15 pro natural titanium 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Timur",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "62",
      "rowIndex": 63,
      "nama": "Rico",
      "tanggal": "2026-09-30",
      "produk": "iPhone 15 pro natural titanium 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Barat",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "63",
      "rowIndex": 64,
      "nama": "Adhie",
      "tanggal": "2026-09-30",
      "produk": "iPhone 13 starlight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "64",
      "rowIndex": 65,
      "nama": "Ali",
      "tanggal": "2026-10-04",
      "produk": "iPhone 13 starlight 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Jakarta selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "65",
      "rowIndex": 66,
      "nama": "Rahman",
      "tanggal": "2026-10-06",
      "produk": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bekasi",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "66",
      "rowIndex": 67,
      "nama": "Ramadhan",
      "tanggal": "2026-10-12",
      "produk": "iPhone 15 Pro Natural Titanium 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "Bekasi",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "67",
      "rowIndex": 68,
      "nama": "Vikar",
      "tanggal": "2026-10-13",
      "produk": "iPhone 15 Pro Blue Titanium 256 GB iBOX",
      "gender": "Pria",
      "usia": "",
      "domisili": "Tanggerang Selatan",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "68",
      "rowIndex": 69,
      "nama": "Dwi putri",
      "tanggal": "2026-10-17",
      "produk": "iPhone 13 Midnight 128 GB iBox",
      "gender": "Wanita",
      "usia": "",
      "domisili": "Kabupaten Tanggerang",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "69",
      "rowIndex": 70,
      "nama": "rehan",
      "tanggal": "2026-10-20",
      "produk": "iPhone 14 blue 128 GB iBox",
      "gender": "Pria",
      "usia": "",
      "domisili": "depok",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    },
    {
      "id": "70",
      "rowIndex": 71,
      "nama": "lutfi",
      "tanggal": "2026-10-21",
      "produk": "iPhone 15 pro 138 GB natural titanium",
      "gender": "Pria",
      "usia": "",
      "domisili": "Depok",
      "sumberInfo": "Facebook Marketplace",
      "keterangan": ""
    }
  ]
};

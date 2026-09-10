/* ====================================
   KARIM GADGET — Dashboard V3.2
   Application Logic (app.js)
   ==================================== */

'use strict';

// ============ UTILITIES ============
const fmt = (n) => {
  if (n == null || isNaN(n)) return 'Rp 0';
  const abs = Math.abs(n);
  return (n < 0 ? '-' : '') + 'Rp ' + new Intl.NumberFormat('id-ID').format(abs);
};
const fmtShort = (n) => {
  if (n == null) return 'Rp 0';
  const abs = Math.abs(n), sign = n < 0 ? '-' : '';
  if (abs >= 1e9) return sign + 'Rp ' + (abs / 1e9).toFixed(1) + 'M';
  if (abs >= 1e6) return sign + 'Rp ' + (abs / 1e6).toFixed(1) + 'jt';
  if (abs >= 1e3) return sign + 'Rp ' + (abs / 1e3).toFixed(0) + 'rb';
  return fmt(n);
};
const fmtDate = (s) => {
  if (!s) return '–';
  try { return new Date(s + (s.length === 10 ? 'T00:00:00' : '')).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }); }
  catch { return s; }
};
const el = (id) => document.getElementById(id);
const setText = (id, v) => { const e = el(id); if (e) e.textContent = v; };

const API_URL = 'https://script.google.com/macros/s/AKfycbxgw5ZDN4wqNWkVSZKl2pQv7AhcT6UppW0V80I7vbxtcYXKmzH9L85V-CfFihKFtfnX/exec';

const BULAN_ID = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const BULAN_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

// Validate tanggal format YYYY-MM-DD
const isValidDate = (s) => {
  if (!s || typeof s !== 'string') return false;
  return /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(new Date(s + 'T00:00:00').getTime());
};

// Format YYYY-MM to "Agustus 2026"
const fmtYearMonth = (ym) => {
  if (!ym) return '–';
  const [y, m] = ym.split('-');
  return `${BULAN_ID[parseInt(m, 10) - 1]} ${y}`;
};

// ============ CALENDAR FILTER HELPER ============
function applyCalendarFilter(arr, field, filter) {
  const { mode, year, month, start, end } = filter || {};
  if (!mode || mode === 'semua') return arr;
  return arr.filter(item => {
    const val = item[field];
    if (!val || !isValidDate(val)) return false;
    const d = new Date(val + 'T00:00:00');
    if (mode === 'hariini') {
      const today = new Date().toISOString().split('T')[0];
      return val === today;
    }
    if (mode === 'mingguini' || mode === 'minggulalu') {
      const todayObj = new Date();
      // Adjust start of week to Monday
      const dayOfWeek = todayObj.getDay() || 7;
      const monday = new Date(todayObj);
      monday.setDate(todayObj.getDate() - dayOfWeek + 1);
      monday.setHours(0, 0, 0, 0);

      const nextMonday = new Date(monday);
      nextMonday.setDate(monday.getDate() + 7);

      const lastMonday = new Date(monday);
      lastMonday.setDate(monday.getDate() - 7);

      const itemDate = new Date(val + 'T00:00:00');
      if (mode === 'mingguini') return itemDate >= monday && itemDate < nextMonday;
      if (mode === 'minggulalu') return itemDate >= lastMonday && itemDate < monday;
    }
    if (mode === 'hari') {
      return val === filter.date;
    }
    if (mode === 'minggu') {
      if (!filter.week) return true;
      const [y, w] = filter.week.split('-W');
      const year = parseInt(y);
      const week = parseInt(w);
      const simple = new Date(year, 0, 1 + (week - 1) * 7);
      const dayOfWeek = simple.getDay() || 7;
      const monday = new Date(simple);
      monday.setDate(simple.getDate() - dayOfWeek + 1);
      monday.setHours(0, 0, 0, 0);
      const nextMonday = new Date(monday);
      nextMonday.setDate(monday.getDate() + 7);
      const itemDate = new Date(val + 'T00:00:00');
      return itemDate >= monday && itemDate < nextMonday;
    }
    if (mode === 'bulan') return d.getFullYear() === parseInt(year) && d.getMonth() === parseInt(month) - 1;
    if (mode === 'tahun') return d.getFullYear() === parseInt(year);
    if (mode === 'custom') {
      const from = start ? new Date(start + 'T00:00:00') : new Date('2000-01-01');
      const to = end ? new Date(end + 'T23:59:59') : new Date('2099-12-31');
      return d >= from && d <= to;
    }
    return true;
  });
}

function filterLabel(filter) {
  if (!filter || filter.mode === 'semua') return 'Semua Waktu';
  if (filter.mode === 'hariini') return 'Hari Ini';
  if (filter.mode === 'mingguini') return 'Minggu Ini';
  if (filter.mode === 'minggulalu') return 'Minggu Lalu';
  if (filter.mode === 'bulan') return fmtYearMonth(`${filter.year}-${String(filter.month).padStart(2, '0')}`);
  if (filter.mode === 'tahun') return `Tahun ${filter.year}`;
  if (filter.mode === 'hari') return filter.date ? fmtDate(filter.date) : 'Per Hari';
  if (filter.mode === 'minggu') return filter.week ? `Minggu ${filter.week.replace('-W', ' Ke-')}` : 'Per Minggu';
  if (filter.mode === 'custom') {
    const s = filter.start ? fmtDate(filter.start) : '–';
    const e = filter.end ? fmtDate(filter.end) : '–';
    return `${s} – ${e}`;
  }
  return 'Semua Waktu';
}

function getAvailableYears(arr, field) {
  const years = new Set();
  arr.forEach(item => {
    const v = item[field];
    if (isValidDate(v)) years.add(v.substr(0, 4));
  });
  return [...years].sort((a, b) => b - a);
}

// ============ CATEGORY MAPPER ============
function mapCategory(raw = '', desc = '') {
  const k = raw.trim();
  const d = (desc || '').toLowerCase();
  if (k === 'Pendapatan') {
    if (/iphone|ipad|jual|pelunasan|dp|tablet|laptop|aksesoris|samsung|xiaomi|oppo|vivo|realme/.test(d)) return 'Penjualan Utama';
    return 'Pendapatan Lainnya';
  }
  if (k === 'Inventory' || k === 'Invenroty') return 'HPP (Inventory)';
  if (k === 'Deviden') return 'Ekuitas & Aset';
  if (k === 'Investasi') return 'Ekuitas & Aset';
  if (k === 'Equity') {
    if (/bank|biaya bank|admin bank|capcut|google drive|cicilan/.test(d)) return 'Biaya Bank & Admin';
    if (/operasional|ads|tiktok|transport|tiket|fuel|iklan|affiliate expense|marketplace/.test(d)) return 'Biaya Operasional';
    if (/deviden|investasi|modal/.test(d)) return 'Ekuitas & Aset';
    return 'Ekuitas & Aset';
  }
  if (k === 'Expenses' || k === 'Operasional') {
    if (/bank|admin/.test(d)) return 'Biaya Bank & Admin';
    return 'Biaya Operasional';
  }
  return 'Lainnya';
}

const BADGE_CLASS = {
  'Penjualan Utama': 'badge badge-penjualan',
  'Pendapatan Lainnya': 'badge badge-lainnya',
  'HPP (Inventory)': 'badge badge-hpp',
  'Biaya Operasional': 'badge badge-operasional',
  'Biaya Bank & Admin': 'badge badge-bank',
  'Ekuitas & Aset': 'badge badge-ekuitas',
};
function catBadge(kat) {
  const cls = BADGE_CLASS[kat] || 'badge badge-bank';
  return `<span class="${cls}"><span class="dot"></span>${kat}</span>`;
}

// ============ DATA STORE ============
const Store = {
  _transactions: [],
  _sales: [],
  _invalidDates: 0,

  async init() {
    toast('⏳ Menghubungkan ke Google Sheets...', 'info');
    let loaded = false;

    try {
      const res = await fetch(API_URL, { redirect: 'follow' });
      if (!res.ok) throw new Error('HTTP error: ' + res.status);
      const data = await res.json();

      if (data && (data.transactions || data.sales)) {
        let skipped = 0;
        // Proses data dari Google Sheets
        const gsTx = (data.transactions || []).map((t, i) => {
          const tanggal = t.tanggal || '';
          const validTanggal = isValidDate(tanggal) ? tanggal : null;
          if (!validTanggal && (t.deskripsi || t.uangMasuk || t.uangKeluar)) skipped++;
          return {
            ...t,
            sheetIndex: i,
            id: t.id || Math.random().toString(36).substr(2, 8),
            tanggal: validTanggal,
            kategori: mapCategory(t.kategoriLama || t.kategori || '', t.deskripsi || ''),
            kategoriRaw: t.kategori || ''
          };
        }).filter(t => t.tanggal !== null);
        this._invalidDates = skipped;

        // Merge pending transaksi yang belum dikonfirmasi GAS
        const pendingTx = this._getPendingTx();
        this._transactions = [...gsTx];
        pendingTx.forEach(p => {
          if (!this._transactions.find(t => t.id === p.id)) this._transactions.push(p);
        });
        this._transactions.sort((a, b) => (a.tanggal || '').localeCompare(b.tanggal || ''));
        this._saveTxLocal();

        // Proses data penjualan
        const gsSales = (data.sales || []).map(s => {
          const validMasuk = isValidDate(s.tanggalMasuk) ? s.tanggalMasuk : null;
          const validKeluar = isValidDate(s.tanggalKeluar) ? s.tanggalKeluar : null;
          let turnoverDays = null;
          if (validMasuk && validKeluar) {
            const days = Math.round((new Date(validKeluar + 'T00:00:00') - new Date(validMasuk + 'T00:00:00')) / 86400000);
            turnoverDays = days >= 0 ? days : null;
          }
          return {
            ...s,
            id: s.nota || s.id || Math.random().toString(36).substr(2, 8),
            notaNum: isNaN(parseInt(s.nota, 10)) ? 0 : parseInt(s.nota, 10),
            tipe: s.tipeModel || s.tipe || '',
            tipeModel: s.tipeModel || s.tipe || '',
            tanggalMasuk: validMasuk,
            tanggalKeluar: validKeluar,
            turnoverDays
          };
        });

        // Merge pending sales yang belum dikonfirmasi
        const pendingSales = this._getPendingSales();
        this._sales = [...gsSales];
        pendingSales.forEach(p => {
          if (!this._sales.find(s => s.nota === p.nota)) this._sales.push(p);
        });
        this._saveSalesLocal();

        loaded = true;
        toast('✅ Tersinkronisasi dengan Google Sheets!', 'success');
      }
    } catch (e) {
      console.warn('[KG] Gagal fetch dari Google Sheets:', e.message);
    }

    // Fallback: load dari localStorage cache, lalu INITIAL_DATA
    if (!loaded) {
      toast('📴 Offline — memuat data tersimpan...', 'error');
      const cachedTx = localStorage.getItem('kg_tx_cache');
      const cachedSales = localStorage.getItem('kg_sales_cache');

      if (cachedTx) {
        try { this._transactions = JSON.parse(cachedTx); } catch { this._transactions = []; }
        this._invalidDates = 0;
      } else {
        const rawInitTx = typeof INITIAL_DATA !== 'undefined' ? (Array.isArray(INITIAL_DATA) ? INITIAL_DATA : (INITIAL_DATA.transactions || [])) : [];
        this._transactions = rawInitTx.map((t, i) => {
          const tanggal = t.tanggal || '';
          const validTanggal = isValidDate(tanggal) ? tanggal : null;
          if (!validTanggal && (t.deskripsi || t.uangMasuk || t.uangKeluar)) skipped++;
          return { ...t, sheetIndex: i, id: t.id || Math.random().toString(36).substr(2, 8), tanggal: validTanggal, kategori: mapCategory(t.kategoriLama || t.kategori || '', t.deskripsi || ''), kategoriRaw: t.kategori || '' };
        }).filter(t => t.tanggal !== null);
        this._invalidDates = skipped;
      }

      if (cachedSales) {
        try { this._sales = JSON.parse(cachedSales); } catch { this._sales = []; }
      } else if (typeof INITIAL_DATA !== 'undefined' && INITIAL_DATA.sales) {
        this._sales = INITIAL_DATA.sales.map(s => {
          const validMasuk = isValidDate(s.tanggalMasuk) ? s.tanggalMasuk : null;
          const validKeluar = isValidDate(s.tanggalKeluar) ? s.tanggalKeluar : null;
          let turnoverDays = null;
          if (validMasuk && validKeluar) {
            const days = Math.round((new Date(validKeluar + 'T00:00:00') - new Date(validMasuk + 'T00:00:00')) / 86400000);
            turnoverDays = days >= 0 ? days : null;
          }
          return { ...s, id: s.id || Math.random().toString(36).substr(2, 8), notaNum: isNaN(parseInt(s.nota, 10)) ? 0 : parseInt(s.nota, 10), tipe: s.tipeModel || s.tipe || '', tipeModel: s.tipeModel || s.tipe || '', tanggalMasuk: validMasuk, tanggalKeluar: validKeluar, turnoverDays };
        });
      }
    }
  },

  // ---- Local Storage — Transaksi Kas ----
  _saveTxLocal() {
    try { localStorage.setItem('kg_tx_cache', JSON.stringify(this._transactions)); } catch (e) { }
  },
  _getPendingTx() {
    try { return JSON.parse(localStorage.getItem('kg_pending_tx') || '[]'); } catch { return []; }
  },
  _setPendingTx(list) {
    try { localStorage.setItem('kg_pending_tx', JSON.stringify(list)); } catch (e) { }
  },

  // ---- Local Storage — Penjualan ----
  _saveSalesLocal() {
    try { localStorage.setItem('kg_sales_cache', JSON.stringify(this._sales)); } catch (e) { }
  },
  _getPendingSales() {
    try { return JSON.parse(localStorage.getItem('kg_pending_sales') || '[]'); } catch { return []; }
  },
  _setPendingSales(list) {
    try { localStorage.setItem('kg_pending_sales', JSON.stringify(list)); } catch (e) { }
  },

  // ---- Transaction Methods ----
  getTx({ filter = null, kat = '', search = '', sortBy = 'tanggal', sortDir = 'desc' } = {}) {
    let r = filter ? applyCalendarFilter(this._transactions, 'tanggal', filter) : [...this._transactions];
    if (kat) r = r.filter(t => t.kategori === kat);
    if (search) {
      const q = search.toLowerCase();
      r = r.filter(t => (t.deskripsi || '').toLowerCase().includes(q));
    }
    r.sort((a, b) => {
      let va = a[sortBy], vb = b[sortBy];
      if (va === vb && a.sheetIndex !== undefined && b.sheetIndex !== undefined) {
         return sortDir === 'asc' ? a.sheetIndex - b.sheetIndex : b.sheetIndex - a.sheetIndex;
      }
      if (typeof va === 'string') return sortDir === 'asc' ? va.localeCompare(vb || '') : (vb || '').localeCompare(va);
      return sortDir === 'asc' ? (va || 0) - (vb || 0) : (vb || 0) - (va || 0);
    });
    return r;
  },

  async addTx(tx) {
    tx.id = Math.random().toString(36).substr(2, 8);
    tx.sheetIndex = Date.now();
    this._transactions.push(tx);
    this._transactions.sort((a, b) => (a.tanggal || '').localeCompare(b.tanggal || ''));
    // Simpan ke localStorage agar tidak hilang saat refresh
    this._saveTxLocal();
    // Tandai sebagai pending
    const pending = this._getPendingTx();
    pending.push(tx);
    this._setPendingTx(pending);
    // Kirim ke Google Sheets
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify({ action: 'addTransaction', data: tx })
      });
      const result = await res.json();
      if (result.success) {
        // Hapus dari pending setelah berhasil
        this._setPendingTx(this._getPendingTx().filter(p => p.id !== tx.id));
      }
    } catch (e) {
      console.warn('[KG] Offline — transaksi tersimpan lokal:', e.message);
    }
  },

  async updateTx(id, updates) {
    const idx = this._transactions.findIndex(t => t.id === id);
    if (idx === -1) return false;
    const merged = { ...this._transactions[idx], ...updates };
    this._transactions[idx] = merged;
    this._saveTxLocal();
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify({ action: 'updateTransaction', id: id, data: merged })
      });
      const result = await res.json();
      if (result.success) {
        toast('✅ Transaksi berhasil diupdate di Google Sheets!', 'success');
      }
    } catch (e) { console.warn('[KG] Offline update tx — tersimpan lokal:', e.message); }
    return true;
  },

  deleteTx(id) {
    const tx = this._transactions.find(t => t.id === id);
    this._transactions = this._transactions.filter(t => t.id !== id);
    this._saveTxLocal();
    if (tx) {
      // Hapus dari pending queue jika ada
      this._setPendingTx(this._getPendingTx().filter(p => p.id !== id));
      // Kirim request hapus ke Google Sheets
      try {
        fetch(API_URL, {
          method: 'POST',
          redirect: 'follow',
          body: JSON.stringify({ action: 'deleteTransaction', id: tx.id, tanggal: tx.tanggal, deskripsi: tx.deskripsi })
        });
      } catch (e) { console.warn('[KG] Gagal hapus tx dari GS:', e.message); }
    }
  },

  getLatestSaldo() {
    const sorted = [...this._transactions]
      .filter(t => t.saldo && isValidDate(t.tanggal))
      .sort((a, b) => a.tanggal.localeCompare(b.tanggal));
    if (!sorted.length) return 0;
    return sorted[sorted.length - 1].saldo;
  },

  getDescriptions() {
    return [...new Set(this._transactions.map(t => t.deskripsi).filter(Boolean))].sort();
  },

  getMonthlyStats() {
    const months = {};
    this._transactions.forEach(t => {
      if (!t.tanggal || !isValidDate(t.tanggal)) return;
      const key = t.tanggal.substr(0, 7);
      if (!months[key]) months[key] = { bulan: key, masuk: 0, keluar: 0, saldo: 0, count: 0 };
      months[key].masuk += t.uangMasuk || 0;
      months[key].keluar += t.uangKeluar || 0;
      if (t.saldo) months[key].saldo = t.saldo;
      months[key].count++;
    });
    return Object.values(months)
      .sort((a, b) => a.bulan.localeCompare(b.bulan))
      .map(m => ({ ...m, profit: m.masuk - m.keluar }));
  },

  getYearlyStats() {
    const years = {};
    this._transactions.forEach(t => {
      if (!t.tanggal || !isValidDate(t.tanggal)) return;
      const key = t.tanggal.substr(0, 4);
      if (!years[key]) years[key] = { tahun: key, masuk: 0, keluar: 0, saldo: 0, count: 0 };
      years[key].masuk += t.uangMasuk || 0;
      years[key].keluar += t.uangKeluar || 0;
      if (t.saldo) years[key].saldo = t.saldo;
      years[key].count++;
    });
    return Object.values(years).sort((a, b) => a.tahun.localeCompare(b.tahun)).map(y => ({ ...y, profit: y.masuk - y.keluar }));
  },

  getStatsByFilter(filter) {
    const filtered = applyCalendarFilter(this._transactions, 'tanggal', filter || { mode: 'semua' });
    let masuk = 0, keluar = 0;
    filtered.forEach(t => {
      masuk += t.uangMasuk || 0;
      keluar += t.uangKeluar || 0;
    });
    return { masuk, keluar, profit: masuk - keluar, count: filtered.length };
  },

  getCategorySpend(filter) {
    const filtered = applyCalendarFilter(this._transactions, 'tanggal', filter || { mode: 'semua' });
    const cats = {};
    filtered.forEach(t => {
      if ((t.uangKeluar || 0) > 0) cats[t.kategori] = (cats[t.kategori] || 0) + t.uangKeluar;
    });
    return cats;
  },

  getTopProducts(limit = 7) {
    const map = {};
    this._sales.forEach(s => {
      const name = s.tipeModel || s.tipe || '';
      if (!name) return;
      const k = name.replace(/\s*(iBox|Inter|inter|ibox)\s*/gi, ' ').replace(/\s*\(.*?\)\s*/g, '').trim();
      if (!map[k]) map[k] = { name: k, profit: 0, count: 0 };
      map[k].profit += s.profit || 0;
      map[k].count++;
    });
    return Object.values(map).sort((a, b) => b.profit - a.profit).slice(0, limit);
  },

  getLifetimeTotals() { return this.getStatsByFilter({ mode: 'semua' }); },

  // ---- Sales Methods ----
  getSales({ filter = null, search = '', sortBy = 'tanggalMasuk', sortDir = 'desc' } = {}) {
    let r = filter ? applyCalendarFilter(this._sales, 'tanggalMasuk', filter) : [...this._sales];
    if (!filter || filter.mode === 'semua') r = [...this._sales];
    if (search) {
      const q = search.toLowerCase();
      r = r.filter(s => (s.tipeModel || s.tipe || '').toLowerCase().includes(q) || (s.nota || '').toLowerCase().includes(q));
    }
    r.sort((a, b) => {
      let va = a[sortBy], vb = b[sortBy];
      if (va === vb && a.notaNum !== undefined && b.notaNum !== undefined) {
         return sortDir === 'asc' ? a.notaNum - b.notaNum : b.notaNum - a.notaNum;
      }
      if (!va && !vb) return 0;
      if (!va) return sortDir === 'asc' ? 1 : -1;
      if (!vb) return sortDir === 'asc' ? -1 : 1;
      if (typeof va === 'string') return sortDir === 'asc' ? va.localeCompare(vb || '') : (vb || '').localeCompare(va);
      return sortDir === 'asc' ? (va || 0) - (vb || 0) : (vb || 0) - (va || 0);
    });
    return r;
  },

  getSalesByFilter(filter, dateField = 'tanggalKeluar') {
    if (!filter || filter.mode === 'semua') return [...this._sales];
    return applyCalendarFilter(this._sales, dateField, filter);
  },

  getUnsoldUnits() {
    return this._sales.filter(s => !s.tanggalKeluar || s.hargaJual === 0);
  },

  getNextNota() {
    let max = 0;
    this._sales.forEach(s => {
      const n = parseInt(s.nota);
      if (!isNaN(n) && n > max) max = n;
    });
    return max + 1;
  },

  async addSale(sale) {
    sale.id = sale.nota || Math.random().toString(36).substr(2, 8);
    sale.notaNum = isNaN(parseInt(sale.nota, 10)) ? 0 : parseInt(sale.nota, 10);
    this._sales.push(sale);
    this._saveSalesLocal();
    // Tandai sebagai pending
    const pending = this._getPendingSales();
    pending.push(sale);
    this._setPendingSales(pending);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify({ action: 'addSale', data: sale })
      });
      const result = await res.json();
      if (result.success) {
        this._setPendingSales(this._getPendingSales().filter(p => p.nota !== sale.nota));
        toast('✅ Unit tersimpan ke Google Sheets!', 'success');
      }
    } catch (e) { console.warn('[KG] Offline — sale tersimpan lokal:', e.message); }
  },

  async updateSale(id, updates) {
    const idx = this._sales.findIndex(s => s.id === id);
    if (idx === -1) return false;
    const merged = { ...this._sales[idx], ...updates };
    if (merged.tanggalMasuk && merged.tanggalKeluar && isValidDate(merged.tanggalMasuk) && isValidDate(merged.tanggalKeluar)) {
      const days = Math.round((new Date(merged.tanggalKeluar + 'T00:00:00') - new Date(merged.tanggalMasuk + 'T00:00:00')) / 86400000);
      merged.turnoverDays = days >= 0 ? days : null;
    }
    if (merged.hargaBeli != null && merged.hargaJual != null) {
      if (!merged.tanggalKeluar || (merged.hargaJual || 0) === 0) {
        merged.profit = 0;
      } else {
        merged.profit = (merged.hargaJual || 0) - (merged.hargaBeli || 0);
      }
    }
    merged.tipe = merged.tipeModel || merged.tipe || '';
    merged.tipeModel = merged.tipe;
    this._sales[idx] = merged;
    this._saveSalesLocal();
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify({ action: 'updateSale', nota: merged.nota, data: updates })
      });
      const result = await res.json();
      if (result.success) toast('✅ Data penjualan diperbarui di Google Sheets!', 'success');
    } catch (e) { console.warn('[KG] Offline update sale — tersimpan lokal:', e.message); }
    return true;
  },

  async deleteSale(id) {
    const sale = this._sales.find(s => s.id === id);
    if (!sale) return false;
    this._sales = this._sales.filter(s => s.id !== id);
    this._saveSalesLocal();
    // Hapus dari pending jika ada
    this._setPendingSales(this._getPendingSales().filter(p => p.nota !== sale.nota));
    try {
      fetch(API_URL, {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify({ action: 'deleteSale', nota: sale.nota })
      });
    } catch (e) { console.warn('[KG] Gagal hapus sale dari GS:', e.message); }
    return true;
  },

  getSaleById(id) { return this._sales.find(s => s.id === id); },
  getTxById(id) { return this._transactions.find(t => t.id === id); },

  getAvailableTxYears() { return getAvailableYears(this._transactions, 'tanggal'); },
  getAvailableSalesYears() {
    const all = [
      ...getAvailableYears(this._sales, 'tanggalMasuk'),
      ...getAvailableYears(this._sales, 'tanggalKeluar'),
    ];
    return [...new Set(all)].sort((a, b) => b - a);
  },
};

// ============ CALENDAR FILTER WIDGET ============
const CalendarFilter = {
  buildHTML(id, opts = {}) {
    const { showSemua = true } = opts;
    return `
      <div class="cal-filter" id="calf-${id}">
        <div class="cal-filter-row">
          <select class="cal-mode-sel form-select-sm" id="calf-${id}-mode" onchange="CalendarFilter.onModeChange('${id}')">
            ${showSemua ? '<option value="semua">Semua Waktu</option>' : ''}
            <option value="hariini">Hari Ini</option>
            <option value="mingguini">Minggu Ini</option>
            <option value="minggulalu">Minggu Lalu</option>
            <option value="hari">Per Hari</option>
            <option value="minggu">Per Minggu</option>
            <option value="bulan">Per Bulan</option>
            <option value="tahun">Per Tahun</option>
            <option value="custom">Custom Range</option>
          </select>
          <span class="cal-filter-label" id="calf-${id}-label">Semua Waktu</span>
        </div>
        <div class="cal-filter-extra" id="calf-${id}-extra" style="display:none"></div>
      </div>`;
  },

  onModeChange(id) {
    const modeEl = el(`calf-${id}-mode`);
    if (!modeEl) return;
    const mode = modeEl.value;
    const extraEl = el(`calf-${id}-extra`);
    const now = new Date();
    const curYear = now.getFullYear();
    const curMonth = now.getMonth() + 1;

    if (mode === 'semua' || mode === 'hariini' || mode === 'mingguini' || mode === 'minggulalu') {
      extraEl.style.display = 'none';
      extraEl.innerHTML = '';
    } else if (mode === 'bulan') {
      const monthOptions = BULAN_ID.map((n, i) => `<option value="${i + 1}" ${i + 1 === curMonth ? 'selected' : ''}>${n}</option>`).join('');
      const yearList = this._getYearsForId(id);
      const yearOptions = yearList.map(y => `<option value="${y}" ${y == curYear ? 'selected' : ''}>${y}</option>`).join('');
      extraEl.innerHTML = `
        <select class="form-select-sm" id="calf-${id}-month" onchange="CalendarFilter.onParamChange('${id}')">${monthOptions}</select>
        <select class="form-select-sm" id="calf-${id}-year" onchange="CalendarFilter.onParamChange('${id}')">${yearOptions}</select>`;
      extraEl.style.display = 'flex';
    } else if (mode === 'tahun') {
      const yearList = this._getYearsForId(id);
      const yearOptions = yearList.map(y => `<option value="${y}" ${y == curYear ? 'selected' : ''}>${y}</option>`).join('');
      extraEl.innerHTML = `<select class="form-select-sm" id="calf-${id}-year" onchange="CalendarFilter.onParamChange('${id}')">${yearOptions}</select>`;
      extraEl.style.display = 'flex';
    } else if (mode === 'hari') {
      extraEl.innerHTML = `<input type="date" class="form-input-sm" id="calf-${id}-date" onchange="CalendarFilter.onParamChange('${id}')">`;
      extraEl.style.display = 'flex';
      if (el(`calf-${id}-date`)) el(`calf-${id}-date`).value = now.toISOString().split('T')[0];
    } else if (mode === 'minggu') {
      extraEl.innerHTML = `<input type="week" class="form-input-sm" id="calf-${id}-week" onchange="CalendarFilter.onParamChange('${id}')">`;
      extraEl.style.display = 'flex';
      const firstDayOfYear = new Date(curYear, 0, 1);
      const pastDaysOfYear = (now - firstDayOfYear) / 86400000;
      const weekNum = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
      if (el(`calf-${id}-week`)) el(`calf-${id}-week`).value = `${curYear}-W${weekNum.toString().padStart(2, '0')}`;
    } else if (mode === 'custom') {
      extraEl.innerHTML = `
        <input type="date" class="form-input-sm" id="calf-${id}-start" onchange="CalendarFilter.onParamChange('${id}')">
        <span style="color:var(--text-muted);font-size:13px">→</span>
        <input type="date" class="form-input-sm" id="calf-${id}-end" onchange="CalendarFilter.onParamChange('${id}')">`;
      extraEl.style.display = 'flex';
    }

    this.onParamChange(id);
  },

  onParamChange(id) {
    const filter = this.getFilter(id);
    const labelEl = el(`calf-${id}-label`);
    if (labelEl) labelEl.textContent = filterLabel(filter);
    if (this._callbacks[id]) this._callbacks[id](filter);
  },

  getFilter(id) {
    const modeEl = el(`calf-${id}-mode`);
    if (!modeEl) return { mode: 'semua' };
    const mode = modeEl.value;
    if (mode === 'semua') return { mode: 'semua' };
    if (mode === 'bulan') {
      const month = el(`calf-${id}-month`) ? parseInt(el(`calf-${id}-month`).value) : new Date().getMonth() + 1;
      const year = el(`calf-${id}-year`) ? el(`calf-${id}-year`).value : String(new Date().getFullYear());
      return { mode: 'bulan', year, month };
    }
    if (mode === 'tahun') {
      const year = el(`calf-${id}-year`) ? el(`calf-${id}-year`).value : String(new Date().getFullYear());
      return { mode: 'tahun', year };
    }
    if (mode === 'custom') {
      const start = el(`calf-${id}-start`) ? el(`calf-${id}-start`).value : '';
      const end = el(`calf-${id}-end`) ? el(`calf-${id}-end`).value : '';
      return { mode: 'custom', start, end };
    }
    return { mode: 'semua' };
  },

  setFilter(id, filter) {
    const modeEl = el(`calf-${id}-mode`);
    if (!modeEl) return;
    modeEl.value = filter.mode || 'semua';
    this.onModeChange(id);
    if (filter.mode === 'bulan') {
      if (el(`calf-${id}-month`)) el(`calf-${id}-month`).value = filter.month;
      if (el(`calf-${id}-year`)) el(`calf-${id}-year`).value = filter.year;
    } else if (filter.mode === 'tahun') {
      if (el(`calf-${id}-year`)) el(`calf-${id}-year`).value = filter.year;
    } else if (filter.mode === 'hari') {
      if (el(`calf-${id}-date`)) el(`calf-${id}-date`).value = filter.date || '';
    } else if (filter.mode === 'minggu') {
      if (el(`calf-${id}-week`)) el(`calf-${id}-week`).value = filter.week || '';
    } else if (filter.mode === 'custom') {
      if (el(`calf-${id}-start`)) el(`calf-${id}-start`).value = filter.start || '';
      if (el(`calf-${id}-end`)) el(`calf-${id}-end`).value = filter.end || '';
    }
    const labelEl = el(`calf-${id}-label`);
    if (labelEl) labelEl.textContent = filterLabel(filter);
  },

  _callbacks: {},
  _yearSources: {},

  register(id, callback, yearSource) {
    this._callbacks[id] = callback;
    this._yearSources[id] = yearSource || (() => [new Date().getFullYear().toString()]);
  },

  _getYearsForId(id) {
    if (this._yearSources[id]) return this._yearSources[id]();
    return [String(new Date().getFullYear())];
  },
};

// ============ CHART MANAGER ============
const Charts = {
  _c: {},
  destroy(k) { if (this._c[k]) { this._c[k].destroy(); delete this._c[k]; } },

  _defaults(tooltipExtra = {}) {
    return {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        tooltip: {
          backgroundColor: 'rgba(15,23,42,0.92)',
          titleFont: { family: 'Inter', weight: '700', size: 12 },
          bodyFont: { family: 'JetBrains Mono', size: 12 },
          padding: 12, cornerRadius: 8,
          ...tooltipExtra,
        },
        legend: {
          labels: { font: { family: 'Inter', size: 11 }, padding: 14, usePointStyle: true }
        }
      }
    };
  },
  _scales(gridColor = 'rgba(0,0,0,0.05)') {
    return {
      x: { grid: { color: gridColor }, ticks: { color: '#64748b', font: { family: 'Inter', size: 11 } } },
      y: { grid: { color: gridColor }, ticks: { color: '#64748b', font: { family: 'JetBrains Mono', size: 11 }, callback: v => fmtShort(v) } }
    };
  },

  renderTrend(months) {
    this.destroy('trend');
    const ctx = el('chart-trend'); if (!ctx) return;
    const d = this._defaults({ callbacks: { label: c => ` ${c.dataset.label}: ${fmt(c.raw)}` } });
    d.plugins.legend.display = true;
    this._c.trend = new Chart(ctx, {
      type: 'line', data: {
        labels: months.map(m => m.bulan),
        datasets: [
          { label: 'Saldo', data: months.map(m => m.saldo), borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.08)', borderWidth: 2.5, fill: true, tension: 0.35, pointRadius: 3 }
        ]
      },
      options: { ...d, scales: this._scales() }
    });
  },

  renderDonut(cats) {
    this.destroy('donut');
    const ctx = el('chart-donut'); if (!ctx) return;
    const colors = { 'HPP (Inventory)': '#ef4444', 'Biaya Operasional': '#f59e0b', 'Biaya Bank & Admin': '#8b5cf6', 'Ekuitas & Aset': '#3b82f6', 'Lainnya': '#94a3b8' };
    const labels = Object.keys(cats);
    if (!labels.length) {
      const wrapper = ctx.closest('.chart-h280') || ctx.parentElement;
      if (wrapper) wrapper.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);font-size:13px">Belum ada data pengeluaran</div>';
      return;
    }
    const d = this._defaults({ callbacks: { label: c => ` ${c.label}: ${fmt(c.raw)}` } });
    this._c.donut = new Chart(ctx, {
      type: 'doughnut', data: {
        labels, datasets: [{ data: Object.values(cats), backgroundColor: labels.map(l => colors[l] || '#94a3b8'), borderWidth: 0, hoverOffset: 6 }]
      },
      options: { ...d, cutout: '68%', plugins: { ...d.plugins, legend: { ...d.plugins.legend, position: 'right' } } }
    });
  },

  renderTopProducts(products) {
    this.destroy('top');
    const ctx = el('chart-topproduct'); if (!ctx) return;
    const COLORS = ['#3b82f6', '#6366f1', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4', '#ef4444'];
    const d = this._defaults({ callbacks: { label: c => ` Profit: ${fmt(c.raw)} (${products[c.dataIndex].count}x)` } });
    d.plugins.legend.display = false;
    this._c.top = new Chart(ctx, {
      type: 'bar', data: {
        labels: products.map(p => p.name.length > 35 ? p.name.substr(0, 33) + '…' : p.name),
        datasets: [{ data: products.map(p => p.profit), backgroundColor: products.map((_, i) => COLORS[i % COLORS.length]), borderRadius: 5 }]
      },
      options: { ...d, indexAxis: 'y', scales: { x: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#64748b', font: { family: 'JetBrains Mono', size: 11 }, callback: v => fmtShort(v) } }, y: { grid: { display: false }, ticks: { color: '#334155', font: { family: 'Inter', size: 11 } } } } }
    });
  },

  renderMonthlyBars(months) {
    this.destroy('mbars');
    const ctx = el('chart-monthly-bars'); if (!ctx) return;
    const d = this._defaults({ callbacks: { label: c => ` ${c.dataset.label}: ${fmt(c.raw)}` } });
    this._c.mbars = new Chart(ctx, {
      type: 'bar', data: {
        labels: months.map(m => m.bulan),
        datasets: [
          { label: 'Pemasukan', data: months.map(m => m.masuk), backgroundColor: 'rgba(16,185,129,0.75)', borderColor: '#10b981', borderWidth: 1, borderRadius: 4 },
          { label: 'Pengeluaran', data: months.map(m => m.keluar), backgroundColor: 'rgba(239,68,68,0.75)', borderColor: '#ef4444', borderWidth: 1, borderRadius: 4 }
        ]
      },
      options: { ...d, scales: this._scales() }
    });
  },

  renderProfitTrend(months) {
    this.destroy('profit');
    const ctx = el('chart-profit-trend'); if (!ctx) return;
    const d = this._defaults({ callbacks: { label: c => ` Profit: ${fmt(c.raw)}` } });
    d.plugins.legend.display = false;
    this._c.profit = new Chart(ctx, {
      type: 'line', data: {
        labels: months.map(m => m.bulan),
        datasets: [{ label: 'Profit', data: months.map(m => m.profit), borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,0.08)', borderWidth: 2.5, fill: true, tension: 0.35, pointRadius: 3 }]
      },
      options: { ...d, scales: this._scales() }
    });
  },
};

// ============ PAGINATION ============
function makePagination(containerId, current, total, onPage) {
  const c = el(containerId); if (!c) return;
  if (total <= 1) { c.innerHTML = ''; return; }
  let h = `<button class="pg-btn" ${current <= 1 ? 'disabled' : ''} onclick="(${onPage})(${current - 1})">‹</button>`;
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
      h += `<button class="pg-btn ${i === current ? 'active' : ''}" onclick="(${onPage})(${i})">${i}</button>`;
    } else if (i === current - 2 || i === current + 2) {
      h += `<button class="pg-btn" disabled style="border:none;pointer-events:none">…</button>`;
    }
  }
  h += `<button class="pg-btn" ${current >= total ? 'disabled' : ''} onclick="(${onPage})(${current + 1})">›</button>`;
  c.innerHTML = h;
}

// ============ TOAST ============
function toast(msg, type = 'success') {
  const c = el('toast-wrap');
  if (!c) return;
  const d = document.createElement('div');
  d.className = `toast ${type}`;
  d.innerHTML = `<span>${type === 'success' ? '✅' : type === 'info' ? 'ℹ️' : '❌'}</span><span>${msg}</span>`;
  c.appendChild(d);
  setTimeout(() => { d.style.opacity = '0'; d.style.transition = 'opacity 0.3s'; setTimeout(() => d.remove(), 350); }, 3000);
}

// ============ MODAL HELPERS ============
function openModal(id) {
  const m = el(id);
  if (m) { m.style.display = 'flex'; requestAnimationFrame(() => m.classList.add('open')); }
}
function closeModal(id) {
  const m = el(id);
  if (m) { m.classList.remove('open'); setTimeout(() => { m.style.display = 'none'; }, 250); }
}

// ============ APP CONTROLLER ============
const App = {
  tx: { filter: { mode: 'semua' }, kat: '', search: '', sortBy: 'tanggal', sortDir: 'desc', page: 1 },
  sales: { filter: { mode: 'semua' }, search: '', sortBy: 'notaNum', sortDir: 'desc', page: 1 },
  overview: { filter: { mode: 'bulan', year: String(new Date().getFullYear()), month: new Date().getMonth() + 1 } },
  laporan: { filter: { mode: 'semua' } },
  inputTab: 'kas',

  async init() {
    await Store.init();
    this._setupNav();
    this._setupCalendarFilters();
    this._setupTxFilters();
    this._setupForm();
    this._setupModals();
    this.go('overview');
    setText('badge-tx', Store._transactions.length);
    if (Store._invalidDates > 0) {
      setTimeout(() => toast(`⚠️ ${Store._invalidDates} baris dengan tanggal tidak valid dilewati.`, 'error'), 500);
    }
  },

  _setupNav() {
    document.querySelectorAll('.nav-link[data-page]').forEach(btn => {
      btn.onclick = (e) => { e.preventDefault(); this.go(btn.dataset.page); };
    });
    const navToggle = el('navToggle');
    if (navToggle) navToggle.onclick = () => el('navMenu').classList.toggle('show');
  },

  go(page) {
    document.querySelectorAll('.nav-link[data-page]').forEach(b => b.classList.toggle('active', b.dataset.page === page));
    document.querySelectorAll('.page-section').forEach(s => s.classList.toggle('active', s.id === `page-${page}`));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const r = {
      overview: () => this._renderOverview(),
      transaksi: () => this._renderTx(),
      penjualan: () => this._renderSales(),
      input: () => this._renderInput(),
      laporan: () => this._renderLaporan()
    };
    (r[page] || (() => { }))();
  },

  _setupCalendarFilters() {
    const ovWrap = el('ov-filter-wrap');
    if (ovWrap) {
      ovWrap.innerHTML = CalendarFilter.buildHTML('ov');
      CalendarFilter.register('ov', (f) => { this.overview.filter = f; this._renderOverview(); }, () => Store.getAvailableTxYears());
      CalendarFilter.setFilter('ov', this.overview.filter);
    }

    const salesWrap = el('sales-filter-wrap');
    if (salesWrap) {
      salesWrap.innerHTML = CalendarFilter.buildHTML('sales');
      CalendarFilter.register('sales', (f) => { this.sales.filter = f; this.sales.page = 1; this._renderSales(); }, () => Store.getAvailableSalesYears());
    }

    const lapWrap = el('lap-filter-wrap');
    if (lapWrap) {
      lapWrap.innerHTML = CalendarFilter.buildHTML('lap');
      CalendarFilter.register('lap', (f) => { this.laporan.filter = f; this._renderLaporan(); }, () => Store.getAvailableTxYears());
    }
  },

  // ---- Overview ----
  _renderOverview() {
    const saldo = Store.getLatestSaldo();
    setText('kpi-saldo', fmt(saldo));

    const filter = this.overview.filter;
    const stats = Store.getStatsByFilter(filter);
    const label = filterLabel(filter);
    setText('ov-period', label);

    const kpiMasukLabel = el('kpi-masuk-label');
    const kpiKeluarLabel = el('kpi-keluar-label');
    if (kpiMasukLabel) kpiMasukLabel.textContent = `Pemasukan — ${label}`;
    if (kpiKeluarLabel) kpiKeluarLabel.textContent = `Pengeluaran — ${label}`;

    setText('kpi-masuk', fmt(stats.masuk));
    setText('kpi-keluar', fmt(stats.keluar));

    if (filter.mode === 'bulan') {
      const curYM = `${filter.year}-${String(filter.month).padStart(2, '0')}`;
      const allMonths = Store.getMonthlyStats();
      const idx = allMonths.findIndex(m => m.bulan === curYM);
      const prev = idx > 0 ? allMonths[idx - 1] : null;
      if (prev) {
        this._setChange('kpi-masuk-sub', stats.masuk, prev.masuk);
        this._setChange('kpi-keluar-sub', stats.keluar, prev.keluar);
      } else {
        setText('kpi-masuk-sub', `${stats.count} transaksi`);
        setText('kpi-keluar-sub', '–');
      }
    } else {
      setText('kpi-masuk-sub', `${stats.count} transaksi`);
      setText('kpi-keluar-sub', '–');
    }

    const months = Store.getMonthlyStats();
    Charts.renderTrend(months);
    Charts.renderDonut(Store.getCategorySpend(filter));
    Charts.renderTopProducts(Store.getTopProducts());

    const recent = Store.getTx({ sortDir: 'desc' }).slice(0, 8);
    const wrap = el('recent-tx-wrap');
    if (wrap) {
      if (!recent.length) {
        wrap.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📭</div><div class="empty-state-text">Belum ada transaksi</div></div>`;
        return;
      }
      wrap.innerHTML = `<table class="data-table"><thead><tr><th>Tanggal</th><th>Deskripsi</th><th>Kategori</th><th>Masuk</th><th>Keluar</th><th>Saldo</th></tr></thead><tbody>
        ${recent.map(t => `<tr>
          <td class="cell-date">${fmtDate(t.tanggal)}</td>
          <td class="cell-desc">${t.deskripsi || '–'}</td>
          <td>${catBadge(t.kategori)}</td>
          <td class="cell-in">${t.uangMasuk ? fmt(t.uangMasuk) : '–'}</td>
          <td class="cell-out">${t.uangKeluar ? fmt(t.uangKeluar) : '–'}</td>
          <td class="cell-saldo">${fmt(t.saldo)}</td>
        </tr>`).join('')}
      </tbody></table>`;
    }
  },

  _setChange(id, cur, prev) {
    if (!prev && prev !== 0) return;
    if (prev === 0) { setText(id, cur > 0 ? '↑ baru' : '–'); return; }
    const pct = ((cur - prev) / Math.abs(prev) * 100).toFixed(1);
    const up = cur >= prev;
    setText(id, `${up ? '↑' : '↓'} ${Math.abs(pct)}% vs periode lalu`);
    const e = el(id); if (e) e.style.color = up ? 'var(--green)' : 'var(--red)';
  },

  // ---- Transaksi (Buku Besar) ----
  _setupTxFilters() {
    const katSel = document.getElementById('filter-kategori');
    if (katSel) {
      const cats = [...new Set(Store._transactions.map(t => t.kategori).filter(Boolean))].sort();
      cats.forEach(c => {
        const o = document.createElement('option');
        o.value = c; o.textContent = c;
        katSel.appendChild(o);
      });
      katSel.onchange = e => { this.tx.kat = e.target.value === 'semua' ? '' : e.target.value; this.tx.page = 1; this._renderTx(); };
    }

    const srch = document.getElementById('filter-search');
    if (srch) srch.oninput = e => { this.tx.search = e.target.value; this.tx.page = 1; this._renderTx(); };

    const txFilterWrap = el('tx-filter-wrap');
    if (txFilterWrap) {
      txFilterWrap.innerHTML = CalendarFilter.buildHTML('tx');
      CalendarFilter.register('tx', (f) => { this.tx.filter = f; this.tx.page = 1; this._renderTx(); }, () => Store.getAvailableTxYears());
    }

    const salesSrch = document.getElementById('sales-search');
    if (salesSrch) salesSrch.oninput = e => { this.sales.search = e.target.value; this.sales.page = 1; this._renderSales(); };
  },

  sortTx(field) {
    this.tx.sortDir = this.tx.sortBy === field ? (this.tx.sortDir === 'asc' ? 'desc' : 'asc') : 'desc';
    this.tx.sortBy = field;
    this.tx.page = 1;
    document.querySelectorAll('[id^="tx-arr-"]').forEach(e => e.textContent = '↕');
    const arrEl = el(`tx-arr-${field}`); if (arrEl) arrEl.textContent = this.tx.sortDir === 'asc' ? '↑' : '↓';
    this._renderTx();
  },

  _renderTx() {
    const PER_PAGE = 15;
    const data = Store.getTx({ filter: this.tx.filter, kat: this.tx.kat, search: this.tx.search, sortBy: this.tx.sortBy, sortDir: this.tx.sortDir });

    let tMasuk = 0, tKeluar = 0;
    data.forEach(t => { tMasuk += t.uangMasuk || 0; tKeluar += t.uangKeluar || 0; });
    setText('qs-count', data.length);
    setText('qs-masuk', fmt(tMasuk));
    setText('qs-keluar', fmt(tKeluar));

    const total = Math.ceil(data.length / PER_PAGE) || 1;
    const p = Math.min(this.tx.page, total);
    this.tx.page = p;
    const slice = data.slice((p - 1) * PER_PAGE, p * PER_PAGE);

    const tbody = el('tx-tbody');
    if (!tbody) return;
    if (!slice.length) {
      tbody.innerHTML = `<tr><td colspan="7" class="empty-state" style="padding:40px">Tidak ada data untuk filter ini.</td></tr>`;
    } else {
      tbody.innerHTML = slice.map(t => `<tr>
        <td class="cell-date">${fmtDate(t.tanggal)}</td>
        <td class="cell-desc">${t.deskripsi || '–'}${t.quantity ? ` <span style="font-size:11px;color:var(--text-muted);background:var(--bg-input);padding:2px 6px;border-radius:4px;margin-left:6px;white-space:nowrap">Qty: ${t.quantity}</span>` : ''}</td>
        <td>${catBadge(t.kategori)}</td>
        <td class="cell-in">${t.uangMasuk ? fmt(t.uangMasuk) : '–'}</td>
        <td class="cell-out">${t.uangKeluar ? fmt(t.uangKeluar) : '–'}</td>
        <td class="cell-saldo">${fmt(t.saldo)}</td>
        <td class="cell-action">
          <button class="btn-icon-edit" title="Edit" onclick="App.editTx('${t.id}')">✏️</button>
          <button class="btn-icon-del" title="Hapus" onclick="App.confirmDeleteTx('${t.id}')">🗑️</button>
        </td>
      </tr>`).join('');
    }

    setText('tx-pinfo', `Hal ${p} / ${total} • ${data.length} transaksi`);
    makePagination('tx-pages', p, total, `(pg) => { App.tx.page = pg; App._renderTx(); }`);
  },

  editTx(id) {
    const t = Store.getTxById(id);
    if (!t) return;
    el('etx-id').value = id;
    el('etx-tanggal').value = t.tanggal || '';
    el('etx-kategori').value = mapCategory(t.kategori);
    el('etx-desc').value = t.deskripsi || '';
    if (el('etx-qty')) el('etx-qty').value = t.quantity || t.jumlah || '';
    el('etx-masuk').value = t.uangMasuk || '';
    el('etx-keluar').value = t.uangKeluar || 0;
    el('etx-saldo').value = t.saldo || 0;
    openModal('modal-edit-tx');
  },

  async saveTxEdit() {
    const id = el('etx-id').value;
    const updates = {
      tanggal: el('etx-tanggal').value,
      kategori: el('etx-kategori').value,
      deskripsi: el('etx-desc').value.trim(),
      quantity: el('etx-qty') ? el('etx-qty').value.trim() : '',
      uangMasuk: parseFloat(el('etx-masuk').value) || 0,
      uangKeluar: parseFloat(el('etx-keluar').value) || 0,
      saldo: parseFloat(el('etx-saldo').value) || 0,
    };

    // Disable tombol saat menyimpan
    const submitBtn = el('modal-edit-tx').querySelector('.btn-primary');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Menyimpan...'; }

    const success = await Store.updateTx(id, updates);
    if (success) {
      toast('Transaksi berhasil diupdate!', 'success');
      closeModal('modal-edit-tx');
      this._renderTx();
      setText('badge-tx', Store._transactions.length);
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg> Simpan Perubahan`;
    }
  },

  confirmDeleteTx(id) {
    const t = Store.getTxById(id);
    if (!t) return;
    if (confirm(`Hapus transaksi:\n"${t.deskripsi}" (${t.tanggal})?\n\nAksi ini tidak bisa dibatalkan.`)) {
      Store.deleteTx(id);
      toast('Transaksi dihapus.', 'success');
      this._renderTx();
      setText('badge-tx', Store._transactions.length);
    }
  },

  // ---- Sales ----
  _renderSales() {
    const data = Store.getSales({ filter: this.sales.filter, search: this.sales.search, sortBy: this.sales.sortBy, sortDir: this.sales.sortDir });

    let tOmset = 0, tProfit = 0;
    let turnoverSum = 0, turnoverCount = 0;
    const sold = data.filter(s => s.tanggalKeluar && s.hargaJual > 0);
    sold.forEach(s => {
      tOmset += s.hargaJual || 0;
      tProfit += s.profit || 0;
      if (s.turnoverDays != null && s.turnoverDays >= 0) {
        turnoverSum += s.turnoverDays;
        turnoverCount++;
      }
    });
    const avgTurnover = turnoverCount ? Math.round(turnoverSum / turnoverCount) : null;
    const marginProfit = tOmset > 0 ? ((tProfit / tOmset) * 100).toFixed(1) : 0;

    setText('sales-kpi-unit', `${sold.length} / ${data.length}`);
    setText('sales-kpi-revenue', fmt(tOmset));
    setText('sales-kpi-total-profit', fmt(tProfit));
    setText('sales-kpi-margin', `${marginProfit}%`);
    setText('sales-kpi-avg-profit', fmt(sold.length ? Math.round(tProfit / sold.length) : 0));
    setText('sales-kpi-turnover', avgTurnover != null ? `${avgTurnover} hari` : '– hari');

    const PER_PAGE = 20;
    const total = Math.ceil(data.length / PER_PAGE) || 1;
    const p = Math.min(this.sales.page, total);
    this.sales.page = p;
    const slice = data.slice((p - 1) * PER_PAGE, p * PER_PAGE);

    const tbody = el('sales-table-body');
    if (!tbody) return;

    if (!slice.length) {
      tbody.innerHTML = `<tr><td colspan="10" class="empty-state" style="padding:40px">Belum ada data penjualan untuk periode ini.</td></tr>`;
    } else {
      tbody.innerHTML = slice.map(s => {
        const days = s.turnoverDays;
        let turnoverBadge;
        if (days == null || days < 0) {
          turnoverBadge = '<span style="color:var(--text-muted)">–</span>';
        } else if (days <= 14) {
          turnoverBadge = `<span class="turnover-badge fast">${days}h ⚡</span>`;
        } else if (days <= 30) {
          turnoverBadge = `<span class="turnover-badge medium">${days}h</span>`;
        } else {
          turnoverBadge = `<span class="turnover-badge slow">${days}h</span>`;
        }
        const profitClass = (s.profit || 0) >= 0 ? 'profit-positive' : 'profit-negative';

        let profitPct = '';
        if (s.hargaBeli > 0 && s.tanggalKeluar) {
          const pct = ((s.profit / s.hargaBeli) * 100).toFixed(1);
          const color = s.profit >= 0 ? '#059669' : '#dc2626';
          const bg = s.profit >= 0 ? '#d1fae5' : '#fee2e2';
          profitPct = `<div style="font-size:11px;color:${color};background:${bg};padding:2px 4px;border-radius:4px;display:inline-block;margin-top:2px;font-weight:600">${pct}%</div>`;
        }

        const statusBadge = s.tanggalKeluar
          ? '<span class="status-badge sold">Terjual</span>'
          : '<span class="status-badge stok">Stok</span>';
        return `<tr>
          <td style="font-weight:700;color:var(--accent-blue)">${s.nota || '–'}</td>
          <td class="cell-date">${fmtDate(s.tanggalMasuk)}</td>
          <td class="cell-date">${s.tanggalKeluar ? fmtDate(s.tanggalKeluar) : statusBadge}</td>
          <td class="cell-desc" style="max-width:220px">${s.tipeModel || s.tipe || '–'}</td>
          <td class="cell-money expense">${fmt(s.hargaBeli)}</td>
          <td class="cell-money income">${fmt(s.hargaJual)}</td>
          <td class="cell-money ${profitClass}" style="line-height:1.2">${fmt(s.profit)}<br>${profitPct}</td>
          <td>${turnoverBadge}</td>
          <td style="color:var(--text-muted);font-size:12px;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.keterangan || '–'}</td>
          <td class="cell-action">
            <button class="btn-icon-edit" title="Edit" onclick="App.editSale('${s.id}')">✏️</button>
            <button class="btn-icon-del" title="Hapus" onclick="App.confirmDeleteSale('${s.id}')">🗑️</button>
          </td>
        </tr>`;
      }).join('');
    }

    const filterLbl = filterLabel(this.sales.filter);
    setText('sales-page-info', `${sold.length} terjual / ${data.length} total (${filterLbl})`);
    makePagination('sales-pages', p, total, `(pg) => { App.sales.page = pg; App._renderSales(); }`);
  },

  editSale(id) {
    const s = Store.getSaleById(id);
    if (!s) return;
    el('es-id').value = id;
    el('es-nota').value = s.nota || '';
    el('es-tanggal-masuk').value = s.tanggalMasuk || '';
    el('es-tanggal-keluar').value = s.tanggalKeluar || '';
    el('es-tipe').value = s.tipeModel || s.tipe || '';
    el('es-harga-beli').value = s.hargaBeli || 0;
    el('es-harga-jual').value = s.hargaJual || 0;
    el('es-keterangan').value = s.keterangan || '';
    this._updateSaleEditPreview();
    openModal('modal-edit-sale');
  },

  _updateSaleEditPreview() {
    const beli = parseFloat(el('es-harga-beli').value) || 0;
    const jual = parseFloat(el('es-harga-jual').value) || 0;
    const profit = jual - beli;
    const profitEl = el('es-profit-preview');
    if (profitEl) {
      let pct = '';
      if (beli > 0) pct = ` (${((profit / beli) * 100).toFixed(1)}%)`;
      profitEl.textContent = fmt(profit) + pct;
      profitEl.style.color = profit >= 0 ? 'var(--green)' : 'var(--red)';
    }
  },

  saveSaleEdit() {
    const id = el('es-id').value;
    const updates = {
      nota: el('es-nota').value.trim(),
      tanggalMasuk: el('es-tanggal-masuk').value || null,
      tanggalKeluar: el('es-tanggal-keluar').value || null,
      tipeModel: el('es-tipe').value.trim(),
      tipe: el('es-tipe').value.trim(),
      hargaBeli: parseFloat(el('es-harga-beli').value) || 0,
      hargaJual: parseFloat(el('es-harga-jual').value) || 0,
      keterangan: el('es-keterangan').value.trim(),
    };
    if (Store.updateSale(id, updates)) {
      toast('Data penjualan berhasil diupdate!', 'success');
      closeModal('modal-edit-sale');
      this._renderSales();
    }
  },

  async confirmDeleteSale(id) {
    const s = Store.getSaleById(id);
    if (!s) return;
    if (confirm(`Hapus unit HP:\n#${s.nota} – ${s.tipeModel || s.tipe}?\n\nData akan dihapus dari Google Sheets.\nAksi ini tidak bisa dibatalkan.`)) {
      await Store.deleteSale(id);
      toast(`Unit #${s.nota} berhasil dihapus!`, 'success');
      this._renderSales();
      this._refreshSellUnitOptions();
    }
  },

  // ---- Input Form ----
  _setupForm() {
    const today = new Date().toISOString().split('T')[0];
    if (el('f-tanggal')) el('f-tanggal').value = today;
    if (el('f-buy-tanggal')) el('f-buy-tanggal').value = today;
    if (el('f-sell-tanggal')) el('f-sell-tanggal').value = today;
    this._updateSaldoDisplay();

    if (el('f-kategori')) el('f-kategori').onchange = () => this._updateMoneyFields();
    if (el('f-masuk') && el('f-keluar')) {
      el('f-masuk').oninput = el('f-keluar').oninput = () => this._updatePreview();
    }
    if (el('f-desc')) {
      el('f-desc').oninput = () => { this._autocomplete(); this._updatePreview(); };
      document.addEventListener('click', e => {
        if (el('f-desc-ac') && !e.target.closest('#f-desc')) el('f-desc-ac').style.display = 'none';
      });
    }

    if (el('input-form')) el('input-form').onsubmit = (e) => { e.preventDefault(); this._submitTx(); };
    if (el('buy-form')) el('buy-form').onsubmit = (e) => { e.preventDefault(); this._submitBuy(); };
    if (el('sell-form')) el('sell-form').onsubmit = (e) => { e.preventDefault(); this._submitSell(); };

    if (el('f-buy-harga-beli')) el('f-buy-harga-beli').oninput = () => this._updateBuyPreview();
    ['f-sell-unit', 'f-sell-harga-jual'].forEach(fid => {
      if (el(fid)) el(fid).oninput = () => this._updateSellPreview();
    });
  },

  _renderInput() {
    this._updateSaldoDisplay();
    this._refreshSellUnitOptions();
    if (el('f-buy-nota')) el('f-buy-nota').value = Store.getNextNota();
  },

  switchInputTab(tab) {
    this.inputTab = tab;
    document.querySelectorAll('.input-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    document.querySelectorAll('.input-tab-panel').forEach(p => p.classList.toggle('active', p.dataset.tab === tab));
    if (tab === 'jual') this._refreshSellUnitOptions();
  },

  _refreshSellUnitOptions() {
    const sel = el('f-sell-unit');
    if (!sel) return;
    const unsold = Store.getUnsoldUnits();
    sel.innerHTML = '<option value="">Pilih unit yang dijual...</option>' +
      unsold.map(s => `<option value="${s.id}" data-beli="${s.hargaBeli || 0}">${s.nota ? `#${s.nota} — ` : ''}${s.tipeModel || s.tipe || '?'} (beli: ${fmt(s.hargaBeli || 0)})</option>`).join('');
    this._updateSellPreview();
  },

  _updateSaldoDisplay() { setText('f-saldo-val', fmt(Store.getLatestSaldo())); },

  _updateMoneyFields() {
    const kat = el('f-kategori') ? el('f-kategori').value : '';
    const income = ['Penjualan Utama', 'Pendapatan Lainnya'];
    const expense = ['HPP (Inventory)', 'Biaya Operasional', 'Biaya Bank & Admin'];
    if (el('fg-masuk')) el('fg-masuk').style.display = expense.includes(kat) ? 'none' : 'flex';
    if (el('fg-keluar')) el('fg-keluar').style.display = income.includes(kat) ? 'none' : 'flex';
    if (income.includes(kat) && el('f-keluar')) el('f-keluar').value = '';
    if (expense.includes(kat) && el('f-masuk')) el('f-masuk').value = '';
    this._updatePreview();
  },

  _updatePreview() {
    const kat = el('f-kategori') ? el('f-kategori').value : '';
    const masuk = parseFloat(el('f-masuk') ? el('f-masuk').value : 0) || 0;
    const keluar = parseFloat(el('f-keluar') ? el('f-keluar').value : 0) || 0;
    const box = el('preview-box');
    if (!box) return;
    if (!kat && !masuk && !keluar) { box.classList.remove('show'); return; }
    box.classList.add('show');
    setText('pv-kat', kat || '–');
    setText('pv-masuk', masuk ? fmt(masuk) : '–');
    setText('pv-keluar', keluar ? fmt(keluar) : '–');
    setText('pv-saldo', fmt(Store.getLatestSaldo() + masuk - keluar));
  },

  _updateBuyPreview() {
    const beli = parseFloat(el('f-buy-harga-beli') ? el('f-buy-harga-beli').value : 0) || 0;
    const prev = el('buy-preview');
    if (!prev) return;
    if (beli > 0) {
      prev.classList.add('show');
      setText('buy-pv-harga', fmt(beli));
    } else { prev.classList.remove('show'); }
  },

  _updateSellPreview() {
    const sel = el('f-sell-unit');
    const jualEl = el('f-sell-harga-jual');
    const prev = el('sell-preview');
    if (!sel || !jualEl || !prev) return;
    const selOpt = sel.options[sel.selectedIndex];
    const hargaBeli = selOpt ? parseFloat(selOpt.dataset.beli || 0) : 0;
    const hargaJual = parseFloat(jualEl.value) || 0;
    const profit = hargaJual - hargaBeli;
    if (hargaJual > 0 && sel.value) {
      prev.classList.add('show');
      setText('sell-pv-beli', fmt(hargaBeli));
      setText('sell-pv-jual', fmt(hargaJual));
      const profitEl = el('sell-pv-profit');
      if (profitEl) {
        let pct = '';
        if (hargaBeli > 0) pct = ` (${((profit / hargaBeli) * 100).toFixed(1)}%)`;
        profitEl.textContent = fmt(profit) + pct;
        profitEl.style.color = profit >= 0 ? 'var(--green)' : 'var(--red)';
      }
    } else { prev.classList.remove('show'); }
  },

  _autocomplete() {
    const q = el('f-desc').value.trim();
    const ac = el('f-desc-ac');
    if (!ac) return;
    if (q.length < 2) { ac.style.display = 'none'; return; }
    const matches = Store.getDescriptions().filter(d => d.toLowerCase().includes(q.toLowerCase())).slice(0, 8);
    if (!matches.length) { ac.style.display = 'none'; return; }
    ac.innerHTML = matches.map(m => `<div class="autocomplete-item" onclick="el('f-desc').value='${m.replace(/'/g, "\\'")}'; el('f-desc-ac').style.display='none'; App._updatePreview();">${m}</div>`).join('');
    ac.style.display = 'block';
  },

  quickFill(desc, kat, masuk, keluar) {
    if (el('f-desc')) el('f-desc').value = desc;
    if (el('f-qty')) el('f-qty').value = '';
    if (el('f-kategori')) el('f-kategori').value = kat;
    this._updateMoneyFields();
    if (masuk > 0 && el('f-masuk')) el('f-masuk').value = masuk;
    if (keluar > 0 && el('f-keluar')) el('f-keluar').value = keluar;
    this._updatePreview();
  },

  resetForm() {
    if (el('input-form')) el('input-form').reset();
    const today = new Date().toISOString().split('T')[0];
    if (el('f-tanggal')) el('f-tanggal').value = today;
    if (el('preview-box')) el('preview-box').classList.remove('show');
    if (el('fg-masuk')) el('fg-masuk').style.display = 'flex';
    if (el('fg-keluar')) el('fg-keluar').style.display = 'flex';
  },

  async _submitTx() {
    const kat = el('f-kategori').value;
    const masuk = parseFloat(el('f-masuk').value) || 0;
    const keluar = parseFloat(el('f-keluar').value) || 0;
    const tanggal = el('f-tanggal').value;
    if (!isValidDate(tanggal)) { toast('Tanggal tidak valid!', 'error'); return; }
    if (!kat) { toast('Pilih kategori dulu!', 'error'); return; }
    if (!el('f-desc').value.trim()) { toast('Isi deskripsi transaksi!', 'error'); return; }
    const newSaldo = Store.getLatestSaldo() + masuk - keluar;
    // Disable tombol submit selama proses
    const submitBtn = el('input-form') ? el('input-form').querySelector('button[type="submit"]') : null;
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Menyimpan...'; }
    await Store.addTx({
      tanggal, deskripsi: el('f-desc').value.trim(), kategori: kat, kategoriRaw: kat,
      quantity: el('f-qty') ? el('f-qty').value.trim() : '',
      uangMasuk: masuk, uangKeluar: keluar, saldo: newSaldo
    });
    if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Simpan Transaksi`; }
    setText('badge-tx', Store._transactions.length);
    toast('✅ Transaksi kas berhasil disimpan!', 'success');
    this.resetForm();
    this._updateSaldoDisplay();
  },

  async _submitBuy() {
    const tanggal = el('f-buy-tanggal').value;
    const nota = el('f-buy-nota').value.trim();
    const tipe = el('f-buy-tipe').value.trim();
    const hargaBeli = parseFloat(el('f-buy-harga-beli').value) || 0;
    const keterangan = el('f-buy-keterangan').value.trim();
    if (!isValidDate(tanggal)) { toast('Tanggal tidak valid!', 'error'); return; }
    if (!tipe) { toast('Isi tipe/model HP!', 'error'); return; }
    if (hargaBeli <= 0) { toast('Harga beli harus lebih dari 0!', 'error'); return; }
    await Store.addSale({ nota: nota || `NOTA-${Date.now()}`, tanggalMasuk: tanggal, tanggalKeluar: null, tipeModel: tipe, tipe, hargaBeli, hargaJual: 0, profit: -hargaBeli, keterangan, turnoverDays: null });
    if (el('buy-form')) el('buy-form').reset();
    if (el('f-buy-tanggal')) el('f-buy-tanggal').value = new Date().toISOString().split('T')[0];
    if (el('f-buy-nota')) el('f-buy-nota').value = Store.getNextNota();
    if (el('buy-preview')) el('buy-preview').classList.remove('show');
    this._refreshSellUnitOptions();
  },

  async _submitSell() {
    const saleId = el('f-sell-unit').value;
    const tanggal = el('f-sell-tanggal').value;
    const hargaJual = parseFloat(el('f-sell-harga-jual').value) || 0;
    const keterangan = el('f-sell-keterangan') ? el('f-sell-keterangan').value.trim() : '';
    if (!saleId) { toast('Pilih unit yang dijual!', 'error'); return; }
    if (!isValidDate(tanggal)) { toast('Tanggal tidak valid!', 'error'); return; }
    if (hargaJual <= 0) { toast('Harga jual harus lebih dari 0!', 'error'); return; }
    const sale = Store.getSaleById(saleId);
    if (!sale) { toast('Unit tidak ditemukan!', 'error'); return; }
    await Store.updateSale(saleId, { tanggalKeluar: tanggal, hargaJual, keterangan: keterangan || sale.keterangan });
    toast(`✅ Penjualan "${sale.tipeModel || sale.tipe}" berhasil disimpan!`, 'success');
    if (el('sell-form')) el('sell-form').reset();
    if (el('f-sell-tanggal')) el('f-sell-tanggal').value = new Date().toISOString().split('T')[0];
    if (el('sell-preview')) el('sell-preview').classList.remove('show');
    this._refreshSellUnitOptions();
  },

  // ---- Laporan ----
  _renderLaporan() {
    const filter = this.laporan.filter;
    const stats = Store.getStatsByFilter(filter);
    setText('r-masuk', fmt(stats.masuk));
    setText('r-keluar', fmt(stats.keluar));
    setText('r-period-label', filterLabel(filter));

    const months = Store.getMonthlyStats();
    Charts.renderMonthlyBars(months);

    const tbody = el('monthly-tbody');
    if (tbody) {
      tbody.innerHTML = months.map(m => `<tr>
        <td style="font-weight:700">${fmtYearMonth(m.bulan)}</td>
        <td class="cell-mono">${m.count}</td>
        <td class="cell-in">${fmt(m.masuk)}</td>
        <td class="cell-out">${fmt(m.keluar)}</td>
        <td class="cell-saldo">${fmt(m.saldo)}</td>
      </tr>`).join('');
    }
  },

  // ---- Modal Setup ----
  _setupModals() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(overlay.id); });
    });
    ['es-harga-beli', 'es-harga-jual'].forEach(fid => {
      if (el(fid)) el(fid).oninput = () => this._updateSaleEditPreview();
    });
  },

  // ---- Export ----
  exportTx() {
    const data = Store.getTx({ filter: this.tx.filter, kat: this.tx.kat, search: this.tx.search });
    if (!data.length) { toast('Tidak ada data untuk diexport.', 'error'); return; }
    const rows = [['Tanggal', 'Deskripsi', 'Kategori', 'Uang Masuk', 'Uang Keluar', 'Saldo', 'Qty'],
    ...data.map(t => [t.tanggal, t.deskripsi, t.kategori, t.uangMasuk || 0, t.uangKeluar || 0, t.saldo || 0, t.quantity || ''])];
    this._downloadXLSX(rows, 'BukuBesar_KarimGadget');
  },

  exportSales() {
    const data = Store.getSales({ filter: this.sales.filter, search: this.sales.search });
    if (!data.length) { toast('Tidak ada data penjualan.', 'error'); return; }
    const rows = [['Nota', 'Tgl Masuk', 'Tgl Terjual', 'Model', 'Harga Beli', 'Harga Jual', 'Profit', 'Waktu Putar', 'Keterangan'],
    ...data.map(s => [s.nota, s.tanggalMasuk, s.tanggalKeluar, s.tipeModel || s.tipe, s.hargaBeli || 0, s.hargaJual || 0, s.profit || 0, s.turnoverDays, s.keterangan])];
    this._downloadXLSX(rows, 'DataPenjualan_KarimGadget');
  },

  exportReportXLSX() {
    const months = Store.getMonthlyStats();
    const rows = [['Bulan', 'Jumlah Tx', 'Pemasukan', 'Pengeluaran', 'Saldo Akhir'],
    ...months.map(m => [fmtYearMonth(m.bulan), m.count, m.masuk, m.keluar, m.saldo])];
    this._downloadXLSX(rows, 'Laporan_KarimGadget');
  },

  exportReportCSV() {
    const months = Store.getMonthlyStats();
    const header = ['Bulan', 'Jumlah Tx', 'Pemasukan', 'Pengeluaran', 'Saldo Akhir'];
    const rows = months.map(m => [fmtYearMonth(m.bulan), m.count, m.masuk, m.keluar, m.saldo]);
    const csv = [header, ...rows].map(r => r.join(',')).join('\n');
    const a = document.createElement('a');
    a.href = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(csv);
    a.download = `Laporan_KarimGadget_${Date.now()}.csv`;
    a.click();
  },

  _downloadXLSX(rows, name) {
    if (typeof XLSX === 'undefined') { toast('Library XLSX belum dimuat.', 'error'); return; }
    const ws = XLSX.utils.aoa_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    XLSX.writeFile(wb, `${name}_${Date.now()}.xlsx`);
    toast('File Excel berhasil diunduh!', 'success');
  },

  resetAllData() {
    if (!confirm('⚠️ HAPUS SEMUA DATA lokal dan reload dari Google Sheets?\nAksi ini TIDAK BISA dibatalkan!')) return;
    ['kg_tx_cache', 'kg_pending_tx', 'kg_sales_cache', 'kg_pending_sales'].forEach(k => localStorage.removeItem(k));
    location.reload();
  },
};

// ============ BOOTSTRAP ============
document.addEventListener('DOMContentLoaded', () => App.init());

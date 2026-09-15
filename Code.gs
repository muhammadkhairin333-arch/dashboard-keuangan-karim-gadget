// ============================================
// KARIM GADGET - BACKEND GOOGLE APPS SCRIPT
// ============================================

const SPREADSHEET_ID = SpreadsheetApp.getActiveSpreadsheet().getId(); // Pastikan script ini menempel pada Spreadsheet

function getTxSheet(ss) {
  return ss.getSheetByName('Laporan Kas Keuangan') || 
         ss.getSheetByName('Buku Besar') || 
         ss.getSheets().find(s => s.getName().toLowerCase().includes('kas') || s.getName().toLowerCase().includes('laporan')) || 
         ss.getSheets()[0];
}

function getSalesSheet(ss) {
  return ss.getSheetByName('Data Penjualan') || 
         ss.getSheets().find(s => s.getName().toLowerCase().includes('jual')) || 
         (ss.getSheets().length > 1 ? ss.getSheets()[1] : ss.getSheets()[0]);
}

function parseMoney(val) {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  const str = val.toString().replace(/[^0-9-]/g, '');
  return Number(str) || 0;
}

// Menangani GET Request (Membaca data)
function doGet(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // 1. Ambil Data Buku Besar (Transaksi Kas)
    const txSheet = getTxSheet(ss);
    let transactions = [];
    if (txSheet) {
      const txData = txSheet.getDataRange().getValues();
      if (txData.length > 1) {
        transactions = txData.slice(1).map(row => {
          return {
            tanggal: row[0] ? Utilities.formatDate(new Date(row[0]), "GMT+7", "yyyy-MM-dd") : '',
            deskripsi: row[1] || '',
            quantity: row[2] || '',
            kategori: row[3] || '',
            uangMasuk: parseMoney(row[4]),
            uangKeluar: parseMoney(row[5]),
            saldo: parseMoney(row[6]),
            id: row[7] || ''
          };
        });
      }
    }
    
    // 2. Ambil Data Penjualan
    const salesSheet = getSalesSheet(ss);
    let sales = [];
    if (salesSheet) {
      const salesData = salesSheet.getDataRange().getValues();
      if (salesData.length > 1) {
        sales = salesData.slice(1).map(row => {
          return {
            nota: row[0] || '',
            tanggalMasuk: row[1] ? Utilities.formatDate(new Date(row[1]), "GMT+7", "yyyy-MM-dd") : '',
            tanggalKeluar: row[2] ? Utilities.formatDate(new Date(row[2]), "GMT+7", "yyyy-MM-dd") : null,
            tipeModel: row[3] || '',
            hargaBeli: parseMoney(row[4]),
            hargaJual: parseMoney(row[5]),
            profit: parseMoney(row[6]),
            turnoverDays: Number(row[7]) || null,
            keterangan: row[8] || '',
            id: row[9] || row[0] || ''
          };
        });
      }
    }

    // 3. Ambil Data Net Worth Growth (Chart Data)
    const nwSheet = ss.getSheetByName('📊 Chart Data');
    let networth = [];
    if (nwSheet) {
      const nwData = nwSheet.getDataRange().getValues();
      if (nwData.length > 1) {
        networth = nwData.slice(1).map(row => {
          return {
            tanggal: row[0] ? Utilities.formatDate(new Date(row[0]), "GMT+7", "yyyy-MM-dd") : '',
            hari: row[1] || '',
            kas: parseMoney(row[2]),
            stok: parseMoney(row[3]),
            networth: parseMoney(row[4])
          };
        }).filter(r => r.tanggal !== '');
      }
    }

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      transactions: transactions,
      sales: sales,
      networth: networth
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Menangani POST Request (Menulis / Update / Hapus data)
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const action = payload.action;
    const data = payload.data;
    
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // ===============================================
    // TRANSAKSI KAS (BUKU BESAR)
    // ===============================================
    if (action === 'addTransaction') {
      const sheet = getTxSheet(ss);
      if (!sheet) throw new Error("Sheet Kas tidak ditemukan");
      
      const lastRow = sheet.getLastRow();
      let lastSaldo = 0;
      
      if (lastRow > 1) {
        lastSaldo = parseMoney(sheet.getRange(lastRow, 7).getValue());
      }
      
      const masuk = parseMoney(data.uangMasuk);
      const keluar = parseMoney(data.uangKeluar);
      const newSaldo = lastSaldo + masuk - keluar;
      
      const newRow = [
        data.tanggal,
        data.deskripsi,
        data.quantity !== undefined && data.quantity !== '' ? data.quantity : 0,
        data.kategoriRaw || data.kategori,
        masuk,
        keluar,
        newSaldo,
        data.id
      ];
      
      sheet.appendRow(newRow);
      return successResponse({ message: 'Transaction added', saldo: newSaldo });
    }
    
    else if (action === 'updateTransaction') {
      const sheet = getTxSheet(ss);
      const rowIdx = findRowIndex(sheet, payload.id, 8);
      
      if (rowIdx > -1) {
        sheet.getRange(rowIdx, 1, 1, 8).setValues([[
          data.tanggal,
          data.deskripsi,
          data.quantity !== undefined && data.quantity !== '' ? data.quantity : 0,
          data.kategoriRaw || data.kategori,
          data.uangMasuk || 0,
          data.uangKeluar || 0,
          data.saldo || 0,
          payload.id
        ]]);
        return successResponse({ message: 'Transaction updated' });
      }
      return errorResponse('Transaction not found');
    }
    
    else if (action === 'deleteTransaction') {
      const sheet = getTxSheet(ss);
      const rowIdx = findRowIndex(sheet, payload.id, 8);
      if (rowIdx > -1) {
        sheet.deleteRow(rowIdx);
        return successResponse({ message: 'Transaction deleted' });
      }
      return errorResponse('Transaction not found');
    }

    // ===============================================
    // PENJUALAN UNIT HP
    // ===============================================
    else if (action === 'addSale') {
      const sheet = getSalesSheet(ss);
      if (!sheet) throw new Error("Sheet Penjualan tidak ditemukan");
      
      const newRow = [
        data.nota,
        data.tanggalMasuk,
        data.tanggalKeluar || '',
        data.tipeModel || data.tipe,
        data.hargaBeli || 0,
        data.hargaJual || 0,
        data.profit || 0,
        data.turnoverDays || '',
        data.keterangan || '',
        data.id || data.nota
      ];
      
      sheet.appendRow(newRow);
      return successResponse({ message: 'Sale added' });
    }
    
    else if (action === 'updateSale') {
      const sheet = getSalesSheet(ss);
      const rowIdx = findRowIndex(sheet, payload.nota, 1);
      
      if (rowIdx > -1) {
        // Ambil data yang ada
        const currentRow = sheet.getRange(rowIdx, 1, 1, 10).getValues()[0];
        
        // Update dengan data baru jika disediakan
        const updatedRow = [
          data.nota !== undefined ? data.nota : currentRow[0],
          data.tanggalMasuk !== undefined ? data.tanggalMasuk : (currentRow[1] ? Utilities.formatDate(new Date(currentRow[1]), "GMT+7", "yyyy-MM-dd") : ''),
          data.tanggalKeluar !== undefined ? data.tanggalKeluar : (currentRow[2] ? Utilities.formatDate(new Date(currentRow[2]), "GMT+7", "yyyy-MM-dd") : ''),
          data.tipeModel !== undefined ? data.tipeModel : currentRow[3],
          data.hargaBeli !== undefined ? data.hargaBeli : currentRow[4],
          data.hargaJual !== undefined ? data.hargaJual : currentRow[5],
          data.profit !== undefined ? data.profit : currentRow[6],
          data.turnoverDays !== undefined ? data.turnoverDays : currentRow[7],
          data.keterangan !== undefined ? data.keterangan : currentRow[8],
          currentRow[9]
        ];
        
        // Kalkulasi profit baru jika ada perubahan harga jual
        if (data.hargaJual !== undefined || data.hargaBeli !== undefined) {
          const hb = Number(updatedRow[4]) || 0;
          const hj = Number(updatedRow[5]) || 0;
          if (hj > 0) {
            updatedRow[6] = hj - hb;
          } else {
            updatedRow[6] = 0; // belum terjual / profit 0
          }
        }
        
        // Kalkulasi turnover days
        if (updatedRow[1] && updatedRow[2]) {
          const tMasuk = new Date(updatedRow[1] + "T00:00:00Z");
          const tKeluar = new Date(updatedRow[2] + "T00:00:00Z");
          const diffTime = tKeluar - tMasuk;
          if (diffTime >= 0) {
             updatedRow[7] = Math.round(diffTime / (1000 * 60 * 60 * 24));
          }
        } else {
          updatedRow[7] = '';
        }
        
        sheet.getRange(rowIdx, 1, 1, 10).setValues([updatedRow]);
        return successResponse({ message: 'Sale updated' });
      }
      return errorResponse('Sale nota not found');
    }
    
    else if (action === 'deleteSale') {
      const sheet = getSalesSheet(ss);
      const rowIdx = findRowIndex(sheet, payload.nota, 1);
      if (rowIdx > -1) {
        sheet.deleteRow(rowIdx);
        return successResponse({ message: 'Sale deleted' });
      }
      return errorResponse('Sale nota not found');
    }
    
    else {
      return errorResponse('Unknown action');
    }

  } catch (error) {
    return errorResponse(error.toString());
  }
}

// HELPER: Menemukan baris berdasarkan nilai kolom
function findRowIndex(sheet, searchVal, colIndex) {
  if (!sheet || !searchVal) return -1;
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) { // mulai dari 1 untuk melewati header
    if (data[i][colIndex - 1] == searchVal) {
      return i + 1; // +1 karena getValues 0-indexed dan baris sheet 1-indexed
    }
  }
  return -1;
}

// HELPER: Response Output
function successResponse(data) {
  const result = { success: true, ...data };
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

function errorResponse(msg) {
  return ContentService.createTextOutput(JSON.stringify({ success: false, error: msg })).setMimeType(ContentService.MimeType.JSON);
}

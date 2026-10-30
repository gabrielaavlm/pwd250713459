var iHari;
var sAnggota;

iHari = prompt("Masukkan jumlah hari keterlambatan.", "1");
sAnggota = prompt("Anggota perpustakaan? (Y)a atau (T)idak", "Y");

if (iHari > 7) {
    if (sAnggota == "Y") {
        alert("Denda Rp 10.000, peminjaman dibekukan");
    } else {
        alert("Denda Rp 20.000, peminjaman dibekukan");
    }
} else {
    if (sAnggota == "Y") {
        alert("Denda Rp 2.000");
    } else {
        alert("Denda Rp 5.000");
    }
}
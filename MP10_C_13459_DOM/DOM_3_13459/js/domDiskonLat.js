var totalNode;
var hematNode;
var infoHematEl;

function init() {
  totalNode = document.getElementById("totalBayar").firstChild;
  hematNode = document.getElementById("hemat").firstChild;
  infoHematEl = document.getElementById("infoHemat");
  hitungTotal();
}

function hitungTotal() {
  var harga = parseFloat(document.getElementById("harga").value);
  var diskon = parseFloat(document.getElementById("diskon").value);

  if (isNaN(diskon) || diskon < 0 || diskon > 100) {
    totalNode.data = "Diskon tidak valid!";
    hematNode.data = "0";
    totalNode.parentNode.style.color = "red";
    infoHematEl.style.color = "";
  } else {
    var hargaAman = isNaN(harga) ? 0 : harga;
    var potongan = hargaAman * (diskon / 100);
    var akhir = hargaAman - potongan;

    totalNode.data = akhir;
    hematNode.data = potongan;
    totalNode.parentNode.style.color = "green";
    infoHematEl.style.color = "";
  }
}